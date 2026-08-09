import React, { useState, useMemo, useEffect } from 'react';
import Pagination, { DEFAULT_PAGE_SIZE } from './Pagination';
import SortToggle, { sortByWord, DEFAULT_SORT } from './SortToggle';
import { getAllVocabulary, getVocabUnitsMeta } from '../data/vocab';
import { coreVerbs } from '../data/verbs/coreVerbs';
import { getVerbExamples } from '../data/verbs/verbExamples';
import { VERB_TENSE_OPTIONS, buildVerbExamplesPrompt, buildVocabExamplesPrompt, openChatGPTWithPrompt } from '../utils/chatgptLink';
import { openInglesCom } from '../utils/inglesComLink';
import { speak } from '../utils/speech';
import {
  isFavorite,
  toggleFavorite,
  registerReview,
  removeFavorite,
  FAVORITE_REVIEW_THRESHOLD,
} from '../utils/vocabProgress';

const QUANTITY_OPTIONS = [5, 10, 15, 20];

// Mezcla un array sin mutarlo (Fisher-Yates)
const shuffle = (arr) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const VERB_TYPE_LABEL = { regular: 'Regular', irregular: 'Irregular' };

// Columnas de tiempos disponibles para el listado de verbos (el usuario elige
// cuáles mostrar en la tabla). El infinitivo/base siempre se muestra como
// "palabra" principal, así que no es parte de este selector.
const VERB_LIST_COLUMNS = [
  { id: 'ing', label: '-ing' },
  { id: 'pastSimple', label: 'Pasado simple' },
  { id: 'pastParticiple', label: 'Participio pasado' },
];

// Normaliza los verbos al mismo formato que usa el listado/tarjetas de vocabulario,
// conservando los campos extra (ing/pastSimple/pastParticiple) para el reverso.
const normalizeVerbs = (verbs) =>
  verbs.map((v) => ({
    id: `verb-${v.base}`,
    word: v.base,
    translation: v.translation,
    category: VERB_TYPE_LABEL[v.type] || v.type,
    type: v.type,
    ing: v.ing,
    pastSimple: v.pastSimple,
    pastParticiple: v.pastParticiple,
    examples: getVerbExamples(v),
    isVerb: true,
  }));

const Repaso = ({ onBackHome }) => {
  const allVocab = useMemo(() => getAllVocabulary(), []);
  const unitsMeta = useMemo(() => getVocabUnitsMeta(), []);
  const allVerbs = useMemo(() => normalizeVerbs(coreVerbs), []);

  const [contentType, setContentType] = useState('vocab'); // 'vocab' | 'verbs'
  const [view, setView] = useState('listado'); // 'listado' | 'sesion'
  const [selectedFilter, setSelectedFilter] = useState('all'); // unidad (vocab) o tipo (verbos)
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState(DEFAULT_SORT);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [favoritesVersion, setFavoritesVersion] = useState(0); // fuerza re-render al (des)marcar favoritos

  const [quantity, setQuantity] = useState(10);
  const [sourceMode, setSourceMode] = useState('random'); // 'random' | 'favorites'

  // Columnas de tiempos visibles en la tabla del listado de verbos
  const [visibleVerbColumns, setVisibleVerbColumns] = useState(
    VERB_LIST_COLUMNS.map((c) => c.id)
  );

  const toggleVerbColumn = (id) => {
    setVisibleVerbColumns((prev) => (prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]));
  };

  // --- Sesión de repaso ---
  const [sessionWords, setSessionWords] = useState([]);
  const [sessionIndex, setSessionIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [removalPrompt, setRemovalPrompt] = useState(null); // entry pendiente de confirmar remoción

  // --- Panel "más ejemplos con IA" + enlace a inglés.com (vocabulario y verbos) ---
  const [aiPanelOpen, setAiPanelOpen] = useState(false);
  const [aiSelectedTenses, setAiSelectedTenses] = useState([]);
  const [aiQuantity, setAiQuantity] = useState(10);

  const toggleAiTense = (id) => {
    setAiSelectedTenses((prev) => (prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]));
  };

  const handleOpenChatGPT = (entry) => {
    const prompt = entry.isVerb
      ? buildVerbExamplesPrompt(entry, aiSelectedTenses, aiQuantity)
      : buildVocabExamplesPrompt(entry, aiQuantity);
    openChatGPTWithPrompt(prompt);
  };

  const allItems = contentType === 'vocab' ? allVocab : allVerbs;

  // Al cambiar de tipo de contenido, resetea filtros para no arrastrar un
  // valor de unidad/tipo que no aplica al otro contenido.
  const handleContentTypeChange = (next) => {
    setContentType(next);
    setSelectedFilter('all');
    setSearch('');
    setPage(1);
  };

  const poolByFilter = useMemo(() => {
    if (selectedFilter === 'all') return allItems;
    if (contentType === 'vocab') {
      const [level, unit] = selectedFilter.split('-').map(Number);
      return allItems.filter((e) => e.level === level && e.unit === unit);
    }
    return allItems.filter((e) => e.type === selectedFilter);
  }, [allItems, selectedFilter, contentType]);

  const favoriteWords = useMemo(
    () => allItems.filter((e) => isFavorite(e.id)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [allItems, favoritesVersion]
  );

  const listFiltered = useMemo(() => {
    const base = onlyFavorites ? poolByFilter.filter((e) => isFavorite(e.id)) : poolByFilter;
    const bySearch = base.filter(
      (e) =>
        e.word.toLowerCase().includes(search.toLowerCase()) ||
        e.translation.toLowerCase().includes(search.toLowerCase())
    );
    return sortByWord(bySearch, sort);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [poolByFilter, search, sort, onlyFavorites, favoritesVersion]);

  const totalPages = Math.max(1, Math.ceil(listFiltered.length / pageSize));
  const paginated = listFiltered.slice((page - 1) * pageSize, page * pageSize);

  useEffect(() => {
    setPage(1);
  }, [selectedFilter, search, sort, onlyFavorites]);

  const handleToggleFavorite = (id) => {
    toggleFavorite(id);
    setFavoritesVersion((v) => v + 1);
  };

  const startSession = () => {
    const sourcePool = sourceMode === 'favorites' ? favoriteWords.filter((e) => poolByFilter.includes(e)) : poolByFilter;
    if (sourcePool.length === 0) return;
    const words = shuffle(sourcePool).slice(0, Math.min(quantity, sourcePool.length));
    setSessionWords(words);
    setSessionIndex(0);
    setFlipped(false);
    setRemovalPrompt(null);
    setView('sesion');
  };

  const currentCard = sessionWords[sessionIndex];

  const handleFlip = () => {
    if (!flipped && currentCard) {
      const { promptRemoval } = registerReview(currentCard.id);
      if (promptRemoval) setRemovalPrompt(currentCard);
    }
    setFlipped((f) => !f);
  };

  const goNext = () => {
    setAiPanelOpen(false);
    if (sessionIndex + 1 < sessionWords.length) {
      setSessionIndex((i) => i + 1);
      setFlipped(false);
    } else {
      setSessionIndex(sessionWords.length); // marca fin de sesión
    }
  };

  const restartSameSet = () => {
    setSessionWords((words) => shuffle(words));
    setSessionIndex(0);
    setFlipped(false);
  };

  const backToListado = () => {
    setView('listado');
    setSessionWords([]);
    setSessionIndex(0);
    setFlipped(false);
    setRemovalPrompt(null);
  };

  const confirmRemoveFavorite = (id) => {
    removeFavorite(id);
    setFavoritesVersion((v) => v + 1);
    setRemovalPrompt(null);
  };

  const sessionFinished = sessionWords.length > 0 && sessionIndex >= sessionWords.length;
  const itemLabel = contentType === 'vocab' ? 'palabras' : 'verbos';

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number">🗂️ Repaso</span>
        <h2>Repaso de Vocabulario y Verbos con Tarjetas</h2>
        <p className="topic-intro">
          {allVocab.length} palabras de las unidades 1-8 y {allVerbs.length} verbos en sus 4 formas. Guarda tus favoritos y repásalos cuantas veces quieras.
        </p>
      </div>

      {view === 'listado' && (
        <div className="content-section">
          <div className="repaso-content-tabs">
            <button
              type="button"
              className={`repaso-tab-btn ${contentType === 'vocab' ? 'active' : ''}`}
              onClick={() => handleContentTypeChange('vocab')}
            >
              📖 Vocabulario
            </button>
            <button
              type="button"
              className={`repaso-tab-btn ${contentType === 'verbs' ? 'active' : ''}`}
              onClick={() => handleContentTypeChange('verbs')}
            >
              🔤 Verbos
            </button>
          </div>

          <div className="repaso-controls">
            <select
              className="repaso-select"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              {contentType === 'vocab' ? (
                <>
                  <option value="all">Todas las unidades</option>
                  {unitsMeta.map((u) => (
                    <option key={`${u.level}-${u.unit}`} value={`${u.level}-${u.unit}`}>
                      Unidad {u.unit}: {u.unitTitle}
                    </option>
                  ))}
                </>
              ) : (
                <>
                  <option value="all">Todos los verbos</option>
                  <option value="irregular">Irregulares</option>
                  <option value="regular">Regulares</option>
                </>
              )}
            </select>

            <input
              type="text"
              className="search-input repaso-search"
              placeholder={contentType === 'vocab' ? 'Buscar palabra o traducción...' : 'Buscar verbo o traducción...'}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <SortToggle mode={sort} onChange={setSort} />

            <label className="repaso-favorites-toggle">
              <input
                type="checkbox"
                checked={onlyFavorites}
                onChange={(e) => setOnlyFavorites(e.target.checked)}
              />
              Solo favoritos ({favoriteWords.length})
            </label>
          </div>

          {contentType === 'verbs' && (
            <div className="repaso-verb-columns">
              <span className="repaso-verb-columns-label">Columnas de tiempos a mostrar:</span>
              {VERB_LIST_COLUMNS.map((c) => (
                <label key={c.id} className="repaso-verb-column-check">
                  <input
                    type="checkbox"
                    checked={visibleVerbColumns.includes(c.id)}
                    onChange={() => toggleVerbColumn(c.id)}
                  />
                  {c.label}
                </label>
              ))}
            </div>
          )}

          <div className="repaso-list">
            {contentType === 'verbs' && paginated.length > 0 && (
              <div
                className="repaso-list-item repaso-list-head"
                style={{ '--verb-columns': visibleVerbColumns.length || 1 }}
              >
                <span />
                <span className="repaso-list-head-label">Verbo</span>
                {VERB_LIST_COLUMNS.filter((c) => visibleVerbColumns.includes(c.id)).map((c) => (
                  <span key={c.id} className="repaso-list-head-label">{c.label}</span>
                ))}
                <span className="repaso-list-head-label">Traducción</span>
                <span className="repaso-list-head-label">Tipo</span>
              </div>
            )}
            {paginated.map((entry) => (
              <div
                key={entry.id}
                className={`repaso-list-item ${entry.isVerb ? 'repaso-list-item-verb' : ''}`}
                style={entry.isVerb ? { '--verb-columns': visibleVerbColumns.length || 1 } : undefined}
              >
                <button
                  type="button"
                  className={`favorite-star ${isFavorite(entry.id) ? 'active' : ''}`}
                  onClick={() => handleToggleFavorite(entry.id)}
                  title={isFavorite(entry.id) ? 'Quitar de favoritos' : 'Guardar en favoritos'}
                >
                  {isFavorite(entry.id) ? '★' : '☆'}
                </button>
                <div className="repaso-list-word">
                  <span className="repaso-word-en">{entry.word}</span>
                  <button
                    type="button"
                    className="audio-btn"
                    onClick={() => speak(entry.word)}
                    title="Escuchar"
                  >
                    🔊
                  </button>
                </div>
                {entry.isVerb ? (
                  <>
                    {VERB_LIST_COLUMNS.filter((c) => visibleVerbColumns.includes(c.id)).map((c) => (
                      <span key={c.id} className="repaso-verb-col-value">{entry[c.id]}</span>
                    ))}
                    <span className="repaso-word-es">{entry.translation}</span>
                  </>
                ) : (
                  <span className="repaso-word-es">{entry.translation}</span>
                )}
                <span className="repaso-word-category">{entry.category}</span>
              </div>
            ))}
            {paginated.length === 0 && (
              <p className="repaso-empty">No hay {itemLabel} que coincidan con el filtro.</p>
            )}
          </div>

          <Pagination
            page={page}
            totalPages={totalPages}
            totalItems={listFiltered.length}
            onChange={setPage}
            itemsPerPage={pageSize}
            onItemsPerPageChange={setPageSize}
          />

          <div className="repaso-session-launcher">
            <h3>Iniciar sesión de repaso</h3>
            <div className="repaso-controls">
              <label className="repaso-inline-label">
                Cantidad:
                <select
                  className="repaso-select"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                >
                  {QUANTITY_OPTIONS.map((n) => (
                    <option key={n} value={n}>{n} {itemLabel}</option>
                  ))}
                </select>
              </label>

              <label className="repaso-inline-label">
                Origen:
                <select
                  className="repaso-select"
                  value={sourceMode}
                  onChange={(e) => setSourceMode(e.target.value)}
                >
                  <option value="random">Aleatorias{selectedFilter === 'all' ? '' : ' (filtro seleccionado)'}</option>
                  <option value="favorites">Solo favoritos ({favoriteWords.filter((e) => poolByFilter.includes(e)).length})</option>
                </select>
              </label>

              <button
                type="button"
                className="btn-primary"
                onClick={startSession}
                disabled={(sourceMode === 'favorites' ? favoriteWords.filter((e) => poolByFilter.includes(e)) : poolByFilter).length === 0}
              >
                Iniciar repaso →
              </button>
            </div>
          </div>

          <button type="button" className="btn-back" style={{ marginTop: '20px' }} onClick={onBackHome}>
            <span>←</span> Volver al inicio
          </button>
        </div>
      )}

      {view === 'sesion' && !sessionFinished && currentCard && (
        <div className="content-section repaso-session">
          <div className="session-progress">
            Tarjeta {sessionIndex + 1} de {sessionWords.length}
          </div>

          {removalPrompt && (
            <div className="removal-prompt">
              <span>
                Repasaste "<strong>{removalPrompt.word}</strong>" {FAVORITE_REVIEW_THRESHOLD} veces. ¿Quitarla de favoritos?
              </span>
              <div className="removal-prompt-actions">
                <button type="button" className="btn-secondary" onClick={() => confirmRemoveFavorite(removalPrompt.id)}>
                  Quitar
                </button>
                <button type="button" className="btn-secondary" onClick={() => setRemovalPrompt(null)}>
                  Mantener
                </button>
              </div>
            </div>
          )}

          <div className={`flashcard ${flipped ? 'flipped' : ''} ${currentCard.isVerb ? 'flashcard-verb' : ''}`} onClick={handleFlip}>
            <div className="flashcard-inner">
              <div className="flashcard-front">
                <span className="flashcard-word">{currentCard.word}</span>
                <button
                  type="button"
                  className="audio-btn"
                  onClick={(e) => { e.stopPropagation(); speak(currentCard.word); }}
                  title="Escuchar"
                >
                  🔊
                </button>
                <span className="flashcard-hint">
                  {currentCard.isVerb ? 'Toca para ver sus formas' : 'Toca para ver el significado'}
                </span>
              </div>
              <div className="flashcard-back">
                {currentCard.isVerb ? (
                  <>
                    <span className="flashcard-translation">{currentCard.translation}</span>
                    <span className="flashcard-category">{currentCard.category}</span>
                    <div className="flashcard-verb-forms">
                      <div className="flashcard-verb-form">
                        <div className="flashcard-verb-form-head">
                          <span className="flashcard-verb-form-label">Infinitivo</span>
                          <span className="flashcard-verb-form-value">{currentCard.word}</span>
                        </div>
                        <ul className="flashcard-verb-form-examples">
                          {currentCard.examples.base.map((ex, i) => (
                            <li key={i}>
                              <p className="flashcard-example-en">"{ex.en}"</p>
                              <p className="flashcard-example-es">{ex.es}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flashcard-verb-form">
                        <div className="flashcard-verb-form-head">
                          <span className="flashcard-verb-form-label">-ing</span>
                          <span className="flashcard-verb-form-value">{currentCard.ing}</span>
                        </div>
                        <ul className="flashcard-verb-form-examples">
                          {currentCard.examples.ing.map((ex, i) => (
                            <li key={i}>
                              <p className="flashcard-example-en">"{ex.en}"</p>
                              <p className="flashcard-example-es">{ex.es}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flashcard-verb-form">
                        <div className="flashcard-verb-form-head">
                          <span className="flashcard-verb-form-label">Pasado simple</span>
                          <span className="flashcard-verb-form-value">{currentCard.pastSimple}</span>
                        </div>
                        <ul className="flashcard-verb-form-examples">
                          {currentCard.examples.pastSimple.map((ex, i) => (
                            <li key={i}>
                              <p className="flashcard-example-en">"{ex.en}"</p>
                              <p className="flashcard-example-es">{ex.es}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flashcard-verb-form">
                        <div className="flashcard-verb-form-head">
                          <span className="flashcard-verb-form-label">Participio pasado</span>
                          <span className="flashcard-verb-form-value">{currentCard.pastParticiple}</span>
                        </div>
                        <ul className="flashcard-verb-form-examples">
                          {currentCard.examples.pastParticiple.map((ex, i) => (
                            <li key={i}>
                              <p className="flashcard-example-en">"{ex.en}"</p>
                              <p className="flashcard-example-es">{ex.es}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <span className="flashcard-translation">{currentCard.translation}</span>
                    <span className="flashcard-category">{currentCard.category}</span>
                    <div className="flashcard-example">
                      <p className="flashcard-example-en">"{currentCard.example}"</p>
                      <p className="flashcard-example-es">{currentCard.exampleEs}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="ai-examples-panel">
            <div className="ai-examples-toggle-row">
              <button
                type="button"
                className="btn-secondary ai-examples-toggle"
                onClick={() => setAiPanelOpen((open) => !open)}
              >
                🤖 Más ejemplos con IA {aiPanelOpen ? '▲' : '▼'}
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => openInglesCom(currentCard.word)}
              >
                📖 Ver en inglés.com ↗
              </button>
            </div>

            {aiPanelOpen && (
              <div className="ai-examples-body">
                <p className="ai-examples-hint">
                  {currentCard.isVerb
                    ? `Elige los tiempos verbales y abre ChatGPT en una pestaña nueva con el prompt ya escrito para "${currentCard.word}".`
                    : `Abre ChatGPT en una pestaña nueva con un prompt ya escrito pidiendo más oraciones de ejemplo para "${currentCard.word}".`}
                </p>
                {currentCard.isVerb && (
                  <div className="ai-examples-tenses">
                    {VERB_TENSE_OPTIONS.map((t) => (
                      <label key={t.id} className="ai-examples-tense-check">
                        <input
                          type="checkbox"
                          checked={aiSelectedTenses.includes(t.id)}
                          onChange={() => toggleAiTense(t.id)}
                        />
                        {t.label}
                      </label>
                    ))}
                  </div>
                )}
                <div className="ai-examples-actions">
                  <label className="repaso-inline-label">
                    Cantidad:
                    <select
                      className="repaso-select"
                      value={aiQuantity}
                      onChange={(e) => setAiQuantity(Number(e.target.value))}
                    >
                      <option value={10}>10 ejemplos</option>
                      <option value={15}>15 ejemplos</option>
                    </select>
                  </label>
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => handleOpenChatGPT(currentCard)}
                    disabled={currentCard.isVerb && aiSelectedTenses.length === 0}
                  >
                    Abrir en ChatGPT ↗
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="session-controls">
            <button
              type="button"
              className={`favorite-star large ${isFavorite(currentCard.id) ? 'active' : ''}`}
              onClick={() => handleToggleFavorite(currentCard.id)}
              title={isFavorite(currentCard.id) ? 'Quitar de favoritos' : 'Guardar en favoritos'}
            >
              {isFavorite(currentCard.id) ? '★' : '☆'}
            </button>
            <button type="button" className="btn-primary" onClick={goNext}>
              {sessionIndex + 1 < sessionWords.length ? 'Siguiente →' : 'Terminar repaso'}
            </button>
          </div>

          <button type="button" className="btn-back" style={{ marginTop: '20px' }} onClick={backToListado}>
            <span>←</span> Volver al listado
          </button>
        </div>
      )}

      {view === 'sesion' && sessionFinished && (
        <div className="content-section repaso-session-summary">
          <div className="insider-box">
            <div className="insider-title"><span>🎉</span> ¡Repaso terminado!</div>
            <div className="insider-content">
              Repasaste {sessionWords.length} {itemLabel}.
            </div>
          </div>
          <div className="repaso-controls">
            <button type="button" className="btn-primary" onClick={restartSameSet}>
              🔁 Reintentar estas mismas
            </button>
            <button type="button" className="btn-secondary" onClick={startSession}>
              Otra sesión ({quantity} nuevas)
            </button>
            <button type="button" className="btn-back" onClick={backToListado}>
              <span>←</span> Volver al listado
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Repaso;

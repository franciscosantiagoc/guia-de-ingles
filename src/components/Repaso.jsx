import React, { useState, useMemo, useEffect } from 'react';
import Pagination, { DEFAULT_PAGE_SIZE } from './Pagination';
import SortToggle, { sortByWord, DEFAULT_SORT } from './SortToggle';
import { getAllVocabulary, getVocabUnitsMeta } from '../data/vocab';
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

const Repaso = ({ onBackHome }) => {
  const allVocab = useMemo(() => getAllVocabulary(), []);
  const unitsMeta = useMemo(() => getVocabUnitsMeta(), []);

  const [view, setView] = useState('listado'); // 'listado' | 'sesion'
  const [selectedUnit, setSelectedUnit] = useState('all');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState(DEFAULT_SORT);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [favoritesVersion, setFavoritesVersion] = useState(0); // fuerza re-render al (des)marcar favoritos

  const [quantity, setQuantity] = useState(10);
  const [sourceMode, setSourceMode] = useState('random'); // 'random' | 'favorites'

  // --- Sesión de repaso ---
  const [sessionWords, setSessionWords] = useState([]);
  const [sessionIndex, setSessionIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [removalPrompt, setRemovalPrompt] = useState(null); // entry pendiente de confirmar remoción

  const poolByUnit = useMemo(() => {
    if (selectedUnit === 'all') return allVocab;
    const [level, unit] = selectedUnit.split('-').map(Number);
    return allVocab.filter((e) => e.level === level && e.unit === unit);
  }, [allVocab, selectedUnit]);

  const favoriteWords = useMemo(
    () => allVocab.filter((e) => isFavorite(e.id)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [allVocab, favoritesVersion]
  );

  const listFiltered = useMemo(() => {
    const base = onlyFavorites ? poolByUnit.filter((e) => isFavorite(e.id)) : poolByUnit;
    const bySearch = base.filter(
      (e) =>
        e.word.toLowerCase().includes(search.toLowerCase()) ||
        e.translation.toLowerCase().includes(search.toLowerCase())
    );
    return sortByWord(bySearch, sort);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [poolByUnit, search, sort, onlyFavorites, favoritesVersion]);

  const totalPages = Math.max(1, Math.ceil(listFiltered.length / pageSize));
  const paginated = listFiltered.slice((page - 1) * pageSize, page * pageSize);

  useEffect(() => {
    setPage(1);
  }, [selectedUnit, search, sort, onlyFavorites]);

  const handleToggleFavorite = (id) => {
    toggleFavorite(id);
    setFavoritesVersion((v) => v + 1);
  };

  const startSession = () => {
    const sourcePool = sourceMode === 'favorites' ? favoriteWords.filter((e) => poolByUnit.includes(e)) : poolByUnit;
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

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number">🗂️ Repaso</span>
        <h2>Repaso de Vocabulario con Tarjetas</h2>
        <p className="topic-intro">
          {allVocab.length} palabras de las unidades 1-8. Guarda tus favoritas y repásalas cuantas veces quieras.
        </p>
      </div>

      {view === 'listado' && (
        <div className="content-section">
          <div className="repaso-controls">
            <select
              className="repaso-select"
              value={selectedUnit}
              onChange={(e) => setSelectedUnit(e.target.value)}
            >
              <option value="all">Todas las unidades</option>
              {unitsMeta.map((u) => (
                <option key={`${u.level}-${u.unit}`} value={`${u.level}-${u.unit}`}>
                  Unidad {u.unit}: {u.unitTitle}
                </option>
              ))}
            </select>

            <input
              type="text"
              className="search-input repaso-search"
              placeholder="Buscar palabra o traducción..."
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
              Solo favoritas ({favoriteWords.length})
            </label>
          </div>

          <div className="repaso-list">
            {paginated.map((entry) => (
              <div key={entry.id} className="repaso-list-item">
                <button
                  type="button"
                  className={`favorite-star ${isFavorite(entry.id) ? 'active' : ''}`}
                  onClick={() => handleToggleFavorite(entry.id)}
                  title={isFavorite(entry.id) ? 'Quitar de favoritas' : 'Guardar en favoritas'}
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
                <span className="repaso-word-es">{entry.translation}</span>
                <span className="repaso-word-category">{entry.category}</span>
              </div>
            ))}
            {paginated.length === 0 && (
              <p className="repaso-empty">No hay palabras que coincidan con el filtro.</p>
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
                    <option key={n} value={n}>{n} palabras</option>
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
                  <option value="random">Aleatorias{selectedUnit === 'all' ? '' : ' (unidad seleccionada)'}</option>
                  <option value="favorites">Solo favoritas ({favoriteWords.filter((e) => poolByUnit.includes(e)).length})</option>
                </select>
              </label>

              <button
                type="button"
                className="btn-primary"
                onClick={startSession}
                disabled={(sourceMode === 'favorites' ? favoriteWords.filter((e) => poolByUnit.includes(e)) : poolByUnit).length === 0}
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
                Repasaste "<strong>{removalPrompt.word}</strong>" {FAVORITE_REVIEW_THRESHOLD} veces. ¿Quitarla de favoritas?
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

          <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
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
                <span className="flashcard-hint">Toca para ver el significado</span>
              </div>
              <div className="flashcard-back">
                <span className="flashcard-translation">{currentCard.translation}</span>
                <span className="flashcard-category">{currentCard.category}</span>
                <div className="flashcard-example">
                  <p className="flashcard-example-en">"{currentCard.example}"</p>
                  <p className="flashcard-example-es">{currentCard.exampleEs}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="session-controls">
            <button
              type="button"
              className={`favorite-star large ${isFavorite(currentCard.id) ? 'active' : ''}`}
              onClick={() => handleToggleFavorite(currentCard.id)}
              title={isFavorite(currentCard.id) ? 'Quitar de favoritas' : 'Guardar en favoritas'}
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
              Repasaste {sessionWords.length} palabras.
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

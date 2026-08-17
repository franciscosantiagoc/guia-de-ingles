import React, { useState, useMemo } from 'react';
import Pagination, { DEFAULT_PAGE_SIZE } from '../../../components/Pagination';
import SortToggle, { sortByWord, DEFAULT_SORT } from '../../../components/SortToggle';
import { allActionVerbs as allActionVerbsData } from '../../../data/vocab/evolve1/unit7';

const speak = (text) => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }
};

const VocabularyTopic = () => {
  const [verbSearch, setVerbSearch] = useState('');
  const [verbPage, setVerbPage] = useState(1);
  const [verbPageSize, setVerbPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [verbSort, setVerbSort] = useState(DEFAULT_SORT);

  const allActionVerbs = useMemo(() => allActionVerbsData, []);

  const spellingRules = useMemo(() => [
    { rule: "Regla general: agrega -ing", examples: [["play", "playing"], ["read", "reading"], ["talk", "talking"]] },
    { rule: "Verbo termina en -e muda: quita la -e y agrega -ing", examples: [["make", "making"], ["dance", "dancing"], ["write", "writing"]] },
    { rule: "Una sílaba, consonante-vocal-consonante: duplica la última consonante", examples: [["run", "running"], ["stop", "stopping"], ["swim", "swimming"]] },
    { rule: "Termina en -w, -x o -y: NO dupliques, solo agrega -ing", examples: [["play", "playing"], ["fix", "fixing"], ["snow", "snowing"]] },
    { rule: "Termina en -ie: cambia -ie por -y y agrega -ing", examples: [["lie", "lying"], ["die", "dying"], ["tie", "tying"]] }
  ], []);

  const filteredVerbs = useMemo(() => sortByWord(allActionVerbs.filter((item) =>
    item.word.toLowerCase().includes(verbSearch.toLowerCase()) ||
    item.ing.toLowerCase().includes(verbSearch.toLowerCase()) ||
    item.translation.toLowerCase().includes(verbSearch.toLowerCase()) ||
    item.category.toLowerCase().includes(verbSearch.toLowerCase())
  ), verbSort), [allActionVerbs, verbSearch, verbSort]);

  const verbTotalPages = Math.max(1, Math.ceil(filteredVerbs.length / verbPageSize));
  const paginatedVerbs = filteredVerbs.slice((verbPage - 1) * verbPageSize, verbPage * verbPageSize);

  const handleVerbSearch = (value) => { setVerbSearch(value); setVerbPage(1); };
  const handleVerbPageSize = (size) => { setVerbPageSize(size); setVerbPage(1); };

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 7 • Vocabulario</span>
        <h2>Actividades en Curso: Verbos para el Presente Continuo</h2>
        <p className="topic-intro">
          Verbos de acción que vas a necesitar constantemente para describir qué está pasando ahora mismo, más las reglas de ortografía para formar el -ing correctamente.
        </p>
      </div>

      {/* VERBOS DE ACCIÓN */}
      <div className="content-section">
        <h3>1. Verbos de Acción</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          {allActionVerbs.length} verbos organizados en 8 categorías (vida diaria, trabajo/estudio, deportes/ocio, social/emociones, cocina, viajes/movimiento, cuerpo/salud y naturaleza/ciencia), cada uno con su forma -ing.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            className="search-input"
            style={{ flex: 1, minWidth: '200px' }}
            placeholder="🔍 Buscar verbo, forma -ing, traducción o categoría..."
            value={verbSearch}
            onChange={(e) => handleVerbSearch(e.target.value)}
          />
          <SortToggle mode={verbSort} onChange={setVerbSort} />
        </div>
        <span className="result-count">{filteredVerbs.length} de {allActionVerbs.length} verbos</span>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
          {paginatedVerbs.map((item, index) => (
            <div key={index} className="example-item" style={{ borderLeft: '3px solid var(--color-evolve1)' }}>
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{item.word}</span>
                <button className="audio-btn" onClick={() => speak(item.word)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-en" style={{ justifyContent: 'space-between', marginTop: '6px', color: 'var(--active-accent)' }}>
                <span>{item.ing}</span>
                <button className="audio-btn" onClick={() => speak(item.ing)} title="Escuchar forma -ing" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ marginTop: '6px', fontSize: '0.85rem' }}>
                {item.translation} <span className="category-tag" style={{ float: 'right' }}>{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          page={verbPage}
          totalPages={verbTotalPages}
          totalItems={filteredVerbs.length}
          onChange={setVerbPage}
          itemsPerPage={verbPageSize}
          onItemsPerPageChange={handleVerbPageSize}
        />
      </div>

      {/* REGLAS DE ORTOGRAFÍA */}
      <div className="content-section">
        <h3>2. Reglas de Ortografía: Cómo Formar el -ing</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          No todos los verbos agregan "-ing" de la misma forma. Estas son las 5 reglas que necesitas conocer.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {spellingRules.map((rule, index) => (
            <div key={index} className="example-item">
              <div style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '10px' }}>{rule.rule}</div>
              {rule.examples.map(([base, ing], i) => (
                <div key={i} className="example-en" style={{ justifyContent: 'space-between', marginTop: '6px', fontSize: '0.9rem' }}>
                  <span>{base} → <strong>{ing}</strong></span>
                  <button className="audio-btn" onClick={() => speak(ing)} title="Escuchar" style={{ margin: 0, width: '26px', height: '26px' }}>🔊</button>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>⚠️</span> Excepción importante: verbos de una sílaba</div>
          <div className="insider-content">
            La regla de duplicar la consonante solo aplica a verbos de <strong>una sílaba</strong> que terminan en consonante-vocal-consonante (<em>run → running</em>). En verbos de más sílabas, solo se duplica si el acento cae en la última sílaba: <em>begin → beginning</em> (acento en "gin"), pero <em>open → opening</em> (acento en "o", no se duplica la "n").
          </div>
        </div>
      </div>

      {/* PRONUNCIACIÓN */}
      <div className="content-section">
        <h3>3. Pronunciación: El Sonido /ɪŋ/</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          La terminación <strong>-ing</strong> se pronuncia /ɪŋ/, un sonido nasal que sale por la nariz — NO es "-in" (sin la "g" nasal) como se escucha en algunos acentos informales del inglés, y tampoco se pronuncia la "g" como una letra separada.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
          {["running", "swimming", "talking", "reading", "cooking", "singing"].map((word, index) => (
            <div key={index} className="example-item" style={{ padding: '10px 14px' }}>
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{word}</span>
                <button className="audio-btn" onClick={() => speak(word)} title="Escuchar" style={{ margin: 0, width: '26px', height: '26px' }}>🔊</button>
              </div>
            </div>
          ))}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>👂</span> Truco de pronunciación</div>
          <div className="insider-content">
            Para practicar el sonido /ŋ/, di la palabra "sing" en español como "sin", pero deja que el aire salga por la nariz mientras la lengua toca el paladar en la parte de atrás (como al decir "banco" en español, el sonido de la "n" antes de "c"). Evita agregar una vocal extra al final, como "ing-ue".
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen de Vocabulario</h4>
          <p>Pon a prueba tu conocimiento de verbos de acción y sus formas -ing.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default VocabularyTopic;

import React, { useState, useMemo } from 'react';
import Pagination, { DEFAULT_PAGE_SIZE } from '../../../components/Pagination';
import SortToggle, { sortByWord, DEFAULT_SORT } from '../../../components/SortToggle';
import { allSkills as allSkillsData } from '../../../data/vocab/evolve1/unit8';

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
  const [skillSearch, setSkillSearch] = useState('');
  const [skillPage, setSkillPage] = useState(1);
  const [skillPageSize, setSkillPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [skillSort, setSkillSort] = useState(DEFAULT_SORT);

  const allSkills = useMemo(() => allSkillsData, []);

  const filteredSkills = useMemo(() => sortByWord(allSkills.filter((item) =>
    item.word.toLowerCase().includes(skillSearch.toLowerCase()) ||
    item.translation.toLowerCase().includes(skillSearch.toLowerCase()) ||
    item.category.toLowerCase().includes(skillSearch.toLowerCase())
  ), skillSort), [allSkills, skillSearch, skillSort]);

  const skillTotalPages = Math.max(1, Math.ceil(filteredSkills.length / skillPageSize));
  const paginatedSkills = filteredSkills.slice((skillPage - 1) * skillPageSize, skillPage * skillPageSize);

  const handleSkillSearch = (value) => { setSkillSearch(value); setSkillPage(1); };
  const handleSkillPageSize = (size) => { setSkillPageSize(size); setSkillPage(1); };

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 8 • Vocabulario</span>
        <h2>Habilidades y Talentos: ¿Qué Puedes Hacer?</h2>
        <p className="topic-intro">
          Frases con verbos que necesitas para hablar de lo que sabes hacer (y lo que no) usando "can" y "can't" — desde deportes hasta habilidades técnicas y de negocios.
        </p>
      </div>

      {/* HABILIDADES */}
      <div className="content-section">
        <h3>1. Habilidades y Talentos</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          {allSkills.length} frases organizadas en 5 categorías: físicas/deportivas, artísticas/musicales, técnicas/digitales, idiomas/negocios y prácticas/manuales. Todas se usan directamente después de "can" o "can't".
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            className="search-input"
            style={{ flex: 1, minWidth: '200px' }}
            placeholder="🔍 Buscar habilidad, traducción o categoría..."
            value={skillSearch}
            onChange={(e) => handleSkillSearch(e.target.value)}
          />
          <SortToggle mode={skillSort} onChange={setSkillSort} />
        </div>
        <span className="result-count">{filteredSkills.length} de {allSkills.length} habilidades</span>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
          {paginatedSkills.map((item, index) => (
            <div key={index} className="example-item" style={{ borderLeft: '3px solid var(--color-evolve1)' }}>
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>can {item.word}</span>
                <button className="audio-btn" onClick={() => speak(`I can ${item.word}`)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ marginTop: '6px', fontSize: '0.85rem' }}>
                {item.translation} <span className="category-tag" style={{ float: 'right' }}>{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          page={skillPage}
          totalPages={skillTotalPages}
          totalItems={filteredSkills.length}
          onChange={setSkillPage}
          itemsPerPage={skillPageSize}
          onItemsPerPageChange={handleSkillPageSize}
        />
      </div>

      {/* PRONUNCIACIÓN */}
      <div className="content-section">
        <h3>2. Pronunciación: "can" vs. "can't"</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          En inglés hablado, "can" y "can't" suenan muy diferentes — pero muchos estudiantes no distinguen bien la diferencia. Presta atención al sonido de la vocal.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div className="example-item">
            <div className="example-en" style={{ justifyContent: 'space-between' }}>
              <span>can — /kən/ (débil, rápido)</span>
              <button className="audio-btn" onClick={() => speak("I can swim.")} title="Escuchar">🔊</button>
            </div>
            <div className="example-es">"I can swim." — La "a" casi no se escucha, suena como "kn".</div>
          </div>
          <div className="example-item">
            <div className="example-en" style={{ justifyContent: 'space-between' }}>
              <span>can't — /kænt/ (fuerte, clara)</span>
              <button className="audio-btn" onClick={() => speak("I can't swim.")} title="Escuchar">🔊</button>
            </div>
            <div className="example-es">"I can't swim." — La "a" se escucha clara y fuerte, y se pronuncia la "t" final.</div>
          </div>
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>👂</span> Truco para distinguirlos al escuchar</div>
          <div className="insider-content">
            Si no escuchas bien la "t" final, guíate por la vocal: "can" suena corto y sin énfasis (casi "kn"), mientras que "can't" suena más largo y con una vocal clara ("kænt"). En caso de duda, escucha el contexto completo de la oración.
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen de Vocabulario</h4>
          <p>Practica frases de habilidades y talentos para usar con can/can't.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default VocabularyTopic;

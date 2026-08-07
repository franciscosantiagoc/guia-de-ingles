import React, { useState, useMemo } from 'react';
import Pagination, { DEFAULT_PAGE_SIZE } from '../../../components/Pagination';
import SortToggle, { sortByWord, DEFAULT_SORT } from '../../../components/SortToggle';
import { allActivities as allActivitiesData, daysOfWeek as daysOfWeekData, frequencyAdverbs as frequencyAdverbsData } from '../../../data/vocab/evolve1/unit5';

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
  const [activitySearch, setActivitySearch] = useState('');
  const [activityPage, setActivityPage] = useState(1);
  const [activityPageSize, setActivityPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [activitySort, setActivitySort] = useState(DEFAULT_SORT);
  const [timeSearch, setTimeSearch] = useState('');

  const allActivities = useMemo(() => allActivitiesData, []);

  const timeExpressions = useMemo(() => [
    { time: "7:00", phrase: "seven o'clock", note: "En punto: se usa 'o'clock' solo con horas exactas." },
    { time: "7:05", phrase: "five past seven", note: "'Past' se usa del minuto 1 al 30." },
    { time: "7:15", phrase: "a quarter past seven", note: "15 minutos = 'a quarter' (un cuarto)." },
    { time: "7:30", phrase: "half past seven", note: "30 minutos = 'half' (media)." },
    { time: "7:45", phrase: "a quarter to eight", note: "Después del minuto 30, se usa 'to' + la siguiente hora." },
    { time: "7:50", phrase: "ten to eight", note: "'To' se usa del minuto 31 al 59, contando hacia la siguiente hora." },
    { time: "12:00 (día)", phrase: "noon / midday", note: "Mediodía." },
    { time: "12:00 (noche)", phrase: "midnight", note: "Medianoche." },
    { time: "7:20", phrase: "seven twenty (digital) / twenty past seven", note: "Forma digital directa vs. forma tradicional." }
  ], []);

  const daysOfWeek = useMemo(() => daysOfWeekData, []);

  const frequencyAdverbs = useMemo(() => frequencyAdverbsData, []);

  const filteredActivities = useMemo(() => sortByWord(allActivities.filter((item) =>
    item.word.toLowerCase().includes(activitySearch.toLowerCase()) ||
    item.translation.toLowerCase().includes(activitySearch.toLowerCase()) ||
    item.category.toLowerCase().includes(activitySearch.toLowerCase())
  ), activitySort), [allActivities, activitySearch, activitySort]);

  const filteredTime = useMemo(() => timeExpressions.filter((item) =>
    item.phrase.toLowerCase().includes(timeSearch.toLowerCase()) ||
    item.time.toLowerCase().includes(timeSearch.toLowerCase())
  ), [timeExpressions, timeSearch]);

  const activityTotalPages = Math.max(1, Math.ceil(filteredActivities.length / activityPageSize));
  const paginatedActivities = filteredActivities.slice((activityPage - 1) * activityPageSize, activityPage * activityPageSize);

  const handleActivitySearch = (value) => { setActivitySearch(value); setActivityPage(1); };
  const handleActivityPageSize = (size) => { setActivityPageSize(size); setActivityPage(1); };

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 5 • Vocabulario</span>
        <h2>Actividades Diarias y la Hora</h2>
        <p className="topic-intro">
          Todo el vocabulario para describir tu rutina, decir la hora correctamente, y hablar de la frecuencia con la que haces las cosas.
        </p>
      </div>

      {/* ACTIVIDADES DIARIAS */}
      <div className="content-section">
        <h3>1. Actividades y Rutinas Diarias</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          {allActivities.length} actividades organizadas por momento del día, cada una con un ejemplo de oración.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            className="search-input"
            style={{ flex: 1, minWidth: '200px' }}
            placeholder="🔍 Buscar actividad, traducción o categoría..."
            value={activitySearch}
            onChange={(e) => handleActivitySearch(e.target.value)}
          />
          <SortToggle mode={activitySort} onChange={setActivitySort} />
        </div>
        <span className="result-count">{filteredActivities.length} de {allActivities.length} actividades</span>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {paginatedActivities.map((item, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span><strong>{item.word}</strong></span>
                <button className="audio-btn" onClick={() => speak(item.word)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ marginTop: '4px', fontSize: '0.85rem' }}>
                {item.translation} <span className="category-tag" style={{ float: 'right' }}>{item.category}</span>
              </div>
              <div className="example-en" style={{ justifyContent: 'space-between', marginTop: '10px', fontSize: '0.9rem' }}>
                <span>{item.example}</span>
                <button className="audio-btn" onClick={() => speak(item.example)} title="Escuchar ejemplo" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ fontSize: '0.85rem' }}>{item.exampleEs}</div>
            </div>
          ))}
        </div>

        <Pagination
          page={activityPage}
          totalPages={activityTotalPages}
          totalItems={filteredActivities.length}
          onChange={setActivityPage}
          itemsPerPage={activityPageSize}
          onItemsPerPageChange={handleActivityPageSize}
        />
      </div>

      {/* LA HORA */}
      <div className="content-section">
        <h3>2. Cómo Decir la Hora</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          En inglés, la forma tradicional de decir la hora usa <strong>past</strong> (después de la hora) y <strong>to</strong> (antes de la siguiente hora).
        </p>

        <div style={{ marginBottom: '12px' }}>
          <input
            type="text"
            className="search-input"
            placeholder="🔍 Buscar una hora o expresión..."
            value={timeSearch}
            onChange={(e) => setTimeSearch(e.target.value)}
          />
        </div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {filteredTime.map((item, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span><strong>{item.time}</strong> → {item.phrase}</span>
                <button className="audio-btn" onClick={() => speak(item.phrase)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es">{item.note}</div>
            </div>
          ))}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>🕰️</span> "What time is it?" / "What time do you...?"</div>
          <div className="insider-content">
            Para preguntar la hora: <strong>"What time is it?"</strong> — <em>"It's half past seven."</em> Para preguntar cuándo hace algo alguien: <strong>"What time do you wake up?"</strong> — <em>"I wake up at seven."</em> Nota que siempre usamos <strong>at</strong> antes de una hora específica: <em>at seven, at noon, at midnight.</em>
          </div>
        </div>
      </div>

      {/* DÍAS DE LA SEMANA */}
      <div className="content-section">
        <h3>3. Días de la Semana</h3>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
          {daysOfWeek.map((item, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{item.word}</span>
                <button className="audio-btn" onClick={() => speak(item.word)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es">{item.translation}</div>
            </div>
          ))}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>📅</span> weekday vs. weekend</div>
          <div className="insider-content">
            <strong>Weekdays</strong> (días de semana) van de Monday a Friday. <strong>Weekend</strong> (fin de semana) es Saturday y Sunday. Usamos <strong>on</strong> antes de un día: <em>"I work on Mondays."</em> / <em>"We relax on the weekend."</em>
          </div>
        </div>
      </div>

      {/* ADVERBIOS DE FRECUENCIA */}
      <div className="content-section">
        <h3>4. Adverbios de Frecuencia</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Estos adverbios indican qué tan seguido pasa algo, del 100% al 0%.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {frequencyAdverbs.map((item, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span><strong>{item.word}</strong> ({item.percent})</span>
                <button className="audio-btn" onClick={() => speak(item.example)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ marginTop: '4px' }}>{item.translation}</div>
              <div className="example-en" style={{ marginTop: '8px', fontSize: '0.9rem' }}>{item.example}</div>
            </div>
          ))}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>📍</span> ¿Dónde va el adverbio de frecuencia?</div>
          <div className="insider-content">
            Va <strong>después</strong> del verbo be (<em>"She is always late."</em>) pero <strong>antes</strong> de los demás verbos (<em>"She always arrives late."</em>). Nunca al inicio o al final de la oración en estos casos.
          </div>
        </div>

        <div className="insider-box" style={{ marginTop: '12px' }}>
          <div className="insider-title"><span>⚠️</span> "Hardly ever" ya es negativo</div>
          <div className="insider-content">
            Igual que <strong>never</strong>, <strong>hardly ever</strong> tiene significado negativo aunque el verbo se escriba en forma afirmativa: <em>"She hardly ever watches TV"</em> (correcto), NO <em>"She doesn't hardly ever watch TV"</em> (doble negación incorrecta).
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen de Vocabulario</h4>
          <p>Pon a prueba tu conocimiento de rutinas diarias, la hora y frecuencia.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default VocabularyTopic;

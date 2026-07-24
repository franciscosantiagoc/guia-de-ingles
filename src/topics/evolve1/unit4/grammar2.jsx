import React from 'react';

const speak = (text) => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }
};

const ExampleCard = ({ en, es }) => (
  <div className="example-item">
    <div className="example-en">
      {en}
      <button className="audio-btn" onClick={() => speak(en)} title="Escuchar">🔊</button>
    </div>
    <div className="example-es">{es}</div>
  </div>
);

const Grammar2Topic = () => {
  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 4 • Gramática 2</span>
        <h2>a / an y Adjetivos Antes del Sustantivo</h2>
        <p className="topic-intro">
          Refuerza la regla de a/an y aprende el orden correcto cuando describes un objeto de tecnología con un adjetivo.
        </p>
      </div>

      {/* A/AN REPASO */}
      <div className="content-section">
        <h3>1. a / an: Repaso Rápido</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Recuerda: la elección depende del <strong>sonido</strong> con el que empieza la siguiente palabra, no de la letra.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="I have a laptop." es="Tengo una laptop. (sonido consonante /l/)" />
          <ExampleCard en="She has an old phone." es="Ella tiene un teléfono viejo. (sonido vocal /o/)" />
          <ExampleCard en="It's a useful app." es="Es una app útil. (¡ojo! 'useful' suena /y/, consonante)" />
        </div>
      </div>

      {/* ADJETIVOS ANTES DEL SUSTANTIVO */}
      <div className="content-section">
        <h3>2. Adjetivos Siempre Van Antes del Sustantivo</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          A diferencia del español (donde el adjetivo casi siempre va después), en inglés el adjetivo <strong>siempre</strong> se coloca antes del sustantivo que describe.
        </p>

        <div className="grammar-formula">a / an + Adjetivo + Sustantivo</div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="a new phone" es="un teléfono nuevo (NO 'a phone new')" />
          <ExampleCard en="an expensive laptop" es="una laptop cara" />
          <ExampleCard en="a wireless charger" es="un cargador inalámbrico" />
          <ExampleCard en="an old song" es="una canción vieja" />
          <ExampleCard en="a popular band" es="una banda popular" />
          <ExampleCard en="I have a fast internet connection." es="Tengo una conexión de internet rápida." />
        </div>

        <div className="insider-box">
          <div className="insider-title"><span>⚠️</span> El sustantivo NUNCA lleva plural doble marcado por el adjetivo</div>
          <div className="insider-content">
            El adjetivo en inglés <strong>nunca cambia de forma</strong>, ni en singular ni en plural: <strong>a new phone</strong> → <strong>new phones</strong> (el adjetivo "new" se queda igual, solo el sustantivo se hace plural).
          </div>
        </div>
      </div>

      {/* COMBINANDO */}
      <div className="content-section">
        <h3>3. Combinando a/an con Adjetivos</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          La elección de a/an depende del <strong>primer sonido</strong> del adjetivo, no del sustantivo.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="a new phone (not 'an phone')" es="El sonido de 'new' es consonante, aunque 'phone' no importe aquí." />
          <ExampleCard en="an old laptop" es="'Old' empieza con sonido vocal, así que usamos 'an'." />
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen: a/an y Adjetivos</h4>
          <p>Practica el orden correcto de adjetivo + sustantivo y elige entre a/an.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default Grammar2Topic;

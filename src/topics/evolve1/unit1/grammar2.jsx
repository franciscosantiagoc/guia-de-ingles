import React from 'react';

const Grammar2Topic = () => {
  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 1 • Gramática 2</span>
        <h2>What's...? / It's... (Preguntas y Respuestas sobre cosas)</h2>
        <p className="topic-intro">Aprende a preguntar nombres, objetos o información básica y a responder utilizando el pronombre neutro "it".</p>
      </div>

      <div className="content-section">
        <h3>1. Preguntas con What's...?</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          La pregunta <strong>What's...?</strong> es la contracción de <strong>What is...?</strong> (¿Qué es...? / ¿Cuál es...?). Se utiliza para preguntar por cosas inanimadas, nombres, animales o conceptos singulares.
        </p>

        <div className="grammar-formula">
          What's (What is) + Sustantivo Singular?
        </div>

        <div className="examples-grid">
          <div className="example-item">
            <div className="example-en"><strong>What's</strong> your name?</div>
            <div className="example-es">¿Cuál es tu nombre?</div>
          </div>
          <div className="example-item">
            <div className="example-en"><strong>What's</strong> this?</div>
            <div className="example-es">¿Qué es esto?</div>
          </div>
          <div className="example-item">
            <div className="example-en"><strong>What's</strong> your job?</div>
            <div className="example-es">¿Cuál es tu trabajo? / ¿A qué te dedicas?</div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h3>2. Respuestas con It's...</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Al responder a preguntas sobre cosas singulares o nombres, usamos el pronombre <strong>It</strong> junto al verbo <em>be</em> en su forma contraída <strong>It's</strong> (It is).
        </p>

        <div className="grammar-formula">
          It's (It is) + Sustantivo / Adjetivo
        </div>

        <div className="examples-grid">
          <div className="example-item">
            <div className="example-en">What's your name? ➔ <strong>It's</strong> Maria.</div>
            <div className="example-es">¿Cuál es tu nombre? ➔ Es María.</div>
          </div>
          <div className="example-item">
            <div className="example-en">What's your favorite city? ➔ <strong>It's</strong> Tokyo.</div>
            <div className="example-es">¿Cuál es tu ciudad favorita? ➔ Es Tokio.</div>
          </div>
          <div className="example-item">
            <div className="example-en">What's that object? ➔ <strong>It's a</strong> new phone.</div>
            <div className="example-es">¿Qué es ese objeto? ➔ Es un teléfono nuevo. (Nota el uso del artículo "a")</div>
          </div>
        </div>
      </div>

      <div className="insider-box">
        <div className="insider-title">
          <span>⚠️</span> Confusión común: It's vs. Its
        </div>
        <div className="insider-content">
          Ten cuidado con la ortografía:<br />
          • <strong>It's</strong> (con apóstrofe) ➔ Es la contracción de <em>It is</em> o <em>It has</em> (p. ej. <em>It's a notebook</em>).<br />
          • <strong>Its</strong> (sin apóstrofe) ➔ Es el adjetivo posesivo para objetos o animales (p. ej. <em>The dog lost its toy</em> - El perro perdió su juguete).
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen: What's & It's</h4>
          <p>Pon a prueba tu habilidad para estructurar preguntas de información y respuestas con "it's".</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default Grammar2Topic;

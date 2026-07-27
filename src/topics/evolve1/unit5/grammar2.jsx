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
  const whWords = [
    { word: "What", meaning: "Qué", use: "Preguntar por una cosa o actividad" },
    { word: "When", meaning: "Cuándo", use: "Preguntar por un momento o fecha" },
    { word: "Where", meaning: "Dónde", use: "Preguntar por un lugar" },
    { word: "Why", meaning: "Por qué", use: "Preguntar por una razón" },
    { word: "How", meaning: "Cómo", use: "Preguntar por la manera de hacer algo" },
    { word: "Who", meaning: "Quién", use: "Preguntar por una persona" },
    { word: "Which", meaning: "Cuál / Cuáles", use: "Preguntar por una opción entre varias" },
    { word: "Whose", meaning: "De quién", use: "Preguntar por el dueño o responsable de algo" },
    { word: "What time", meaning: "A qué hora", use: "Preguntar por una hora específica" },
    { word: "How often", meaning: "Con qué frecuencia", use: "Preguntar por la frecuencia de una rutina" },
    { word: "How long", meaning: "Cuánto tiempo", use: "Preguntar por la duración de algo" },
    { word: "How many", meaning: "Cuántos / Cuántas", use: "Preguntar por una cantidad contable" }
  ];

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 5 • Gramática 2</span>
        <h2>Preguntas de Información con Wh-</h2>
        <p className="topic-intro">
          Combina las palabras Wh- con el presente simple para preguntar por los detalles de la rutina de alguien: qué hace, cuándo, dónde y por qué.
        </p>
      </div>

      {/* PALABRAS WH */}
      <div className="content-section">
        <h3>1. Las Palabras Wh-</h3>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
          {whWords.map((item, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span><strong>{item.word}</strong></span>
                <button className="audio-btn" onClick={() => speak(item.word)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ marginTop: '4px' }}>{item.meaning}</div>
              <div className="example-es" style={{ fontSize: '0.85rem', marginTop: '4px' }}>{item.use}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ESTRUCTURA */}
      <div className="content-section">
        <h3>2. Estructura: Wh- + do/does + Sujeto + Verbo</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Usa <strong>do</strong> con I/you/we/they y <strong>does</strong> con he/she/it — igual que en las preguntas de sí/no, pero ahora empiezas con una palabra Wh-.
        </p>

        <div className="grammar-formula">Wh- + do/does + Sujeto + Verbo (forma base)?</div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="What time do you wake up?" es="¿A qué hora te despiertas?" />
          <ExampleCard en="What does she do after work?" es="¿Qué hace ella después del trabajo?" />
          <ExampleCard en="When do they have lunch?" es="¿Cuándo almuerzan ellos?" />
          <ExampleCard en="Where does he study?" es="¿Dónde estudia él?" />
          <ExampleCard en="Why do you go to bed so late?" es="¿Por qué te vas a la cama tan tarde?" />
          <ExampleCard en="How does she get to work?" es="¿Cómo llega ella al trabajo?" />
          <ExampleCard en="Who do you have lunch with?" es="¿Con quién almuerzas?" />
          <ExampleCard en="How often do you exercise?" es="¿Con qué frecuencia haces ejercicio?" />
          <ExampleCard en="Which do you prefer, tea or coffee?" es="¿Cuál prefieres, té o café?" />
          <ExampleCard en="How long does your commute take?" es="¿Cuánto tiempo toma tu traslado?" />
          <ExampleCard en="How many hours do you sleep?" es="¿Cuántas horas duermes?" />
        </div>
      </div>

      {/* WHOSE */}
      <div className="content-section">
        <h3>3. Caso Especial: Whose (De quién)</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          <strong>Whose</strong> siempre va seguido de un sustantivo, y no necesariamente necesita "do/does" — depende del verbo que sigue. Si el verbo es <strong>be</strong>, no se usa do/does.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="Whose turn is it to cook dinner?" es="¿De quién es el turno de cocinar la cena?" />
          <ExampleCard en="Whose phone is this?" es="¿De quién es este teléfono?" />
          <ExampleCard en="Whose job is it to walk the dog?" es="¿De quién es el trabajo de pasear al perro?" />
        </div>

        <div className="insider-box">
          <div className="insider-title"><span>💡</span> Whose vs. Who's</div>
          <div className="insider-content">
            No confundas <strong>whose</strong> (de quién / posesión) con <strong>who's</strong> (contracción de "who is"): <em>"Whose bag is that?"</em> (¿De quién es esa bolsa?) vs. <em>"Who's cooking tonight?"</em> (¿Quién está cocinando esta noche?).
          </div>
        </div>
      </div>

      {/* PREGUNTANDO POR EL SUJETO */}
      <div className="content-section">
        <h3>4. Caso Especial: Preguntar por Quién Hace la Acción</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Cuando "Who" es el <strong>sujeto</strong> de la pregunta (quieres saber quién hace algo, no a quién), NO se usa do/does — el verbo lleva -s directamente, como en una afirmación.
        </p>

        <div className="grammar-formula">Who + Verbo + s?</div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="Who cooks dinner in your house?" es="¿Quién cocina la cena en tu casa?" />
          <ExampleCard en="Who wakes up first?" es="¿Quién se despierta primero?" />
        </div>

        <div className="insider-box">
          <div className="insider-title"><span>💡</span> Compara las dos estructuras</div>
          <div className="insider-content">
            <strong>"Who do you call every day?"</strong> (Who = objeto, "a quién llamas") vs. <strong>"Who calls you every day?"</strong> (Who = sujeto, "quién te llama"). Fíjate cómo cambia el orden y si aparece "do".
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen: Preguntas Wh-</h4>
          <p>Practica formar preguntas de información sobre rutinas diarias.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default Grammar2Topic;

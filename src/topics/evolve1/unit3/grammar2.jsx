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
  const whQuestions = [
    { word: "What", es: "Qué", example: "What's this? — It's a coffee table.", exampleEs: "¿Qué es esto? — Es una mesa de centro." },
    { word: "Where", es: "Dónde", example: "Where's the kitchen? — It's next to the dining room.", exampleEs: "¿Dónde está la cocina? — Está junto al comedor." },
    { word: "Who", es: "Quién", example: "Who's that? — That's my roommate.", exampleEs: "¿Quién es ese/a? — Ese/a es mi compañero/a de cuarto." },
    { word: "How", es: "Cómo", example: "How's your new apartment? — It's great, really spacious.", exampleEs: "¿Cómo está tu nuevo departamento? — Está genial, muy espacioso." },
    { word: "Whose", es: "De quién", example: "Whose sofa is this? — It's my sister's.", exampleEs: "¿De quién es este sofá? — Es de mi hermana." },
    { word: "How many", es: "Cuántos/as", example: "How many bedrooms are there? — There are three.", exampleEs: "¿Cuántas recámaras hay? — Hay tres." }
  ];

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 3 • Gramática 2</span>
        <h2>It is / It's y Preguntas de Información con Be</h2>
        <p className="topic-intro">
          Usa <em>it</em> para hablar de objetos y lugares, y las palabras Wh- (What, Where, Who...) para pedir información específica sobre tu casa.
        </p>
      </div>

      {/* IT IS */}
      <div className="content-section">
        <h3>1. It is / It's: Afirmativo, Negativo y Preguntas</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          <em>It</em> se usa para referirse a objetos, animales o lugares — nunca a personas.
        </p>

        <div className="grammar-formula" style={{ flexDirection: 'column', gap: '6px', fontSize: '1rem' }}>
          <div>Afirmativo: It is / It's + adjetivo o sustantivo</div>
          <div>Negativo: It is not / It isn't + adjetivo o sustantivo</div>
          <div>Pregunta: Is it + adjetivo o sustantivo? — Yes, it is. / No, it isn't.</div>
        </div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="It's a small apartment, but it's very cozy." es="Es un departamento pequeño, pero es muy acogedor." />
          <ExampleCard en="It isn't expensive." es="No es caro." />
          <ExampleCard en="Is it far from downtown? — No, it isn't. It's really close." es="¿Está lejos del centro? — No. Está muy cerca." />
          <ExampleCard en="Is it a new sofa? — Yes, it is." es="¿Es un sofá nuevo? — Sí." />
        </div>
      </div>

      {/* PREGUNTAS DE INFORMACIÓN */}
      <div className="content-section">
        <h3>2. Preguntas de Información con Be (What, Where, Who, How, Whose)</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          A diferencia de las preguntas de sí/no, estas piden información específica. El orden es: palabra Wh- + is/are + sujeto.
        </p>

        <div className="grammar-formula">Palabra Wh- + is/are + Sujeto (+ complemento)?</div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {whQuestions.map((item, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span><strong>{item.word}</strong> — {item.es}</span>
              </div>
              <div className="example-es" style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                <span>
                  <span style={{ color: 'var(--text-main)' }}>{item.example}</span><br />
                  {item.exampleEs}
                </span>
                <button className="audio-btn" onClick={() => speak(item.example)} title="Escuchar" style={{ margin: 0, flexShrink: 0 }}>🔊</button>
              </div>
            </div>
          ))}
        </div>

        <div className="insider-box">
          <div className="insider-title"><span>💡</span> Whose + posesivo: ¡se conectan!</div>
          <div className="insider-content">
            La pregunta <strong>Whose</strong> se responde naturalmente con lo que aprendiste en Gramática 1: <strong>"Whose room is this?" → "It's my sister's."</strong> (adjetivo posesivo o 's).
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen: It is y Preguntas Wh-</h4>
          <p>Practica describir objetos con "it" y hacer preguntas de información sobre una casa.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default Grammar2Topic;

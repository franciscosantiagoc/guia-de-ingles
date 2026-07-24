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

const PhraseCard = ({ en, es }) => (
  <div className="example-item">
    <div className="example-en" style={{ justifyContent: 'space-between' }}>
      <span>{en}</span>
      <button className="audio-btn" onClick={() => speak(en)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
    </div>
    <div className="example-es" style={{ marginTop: '6px' }}>{es}</div>
  </div>
);

const FunctionalTopic = () => {
  const newTopicPhrases = [
    { en: "So, what do you think about the new iPhone?", es: "Entonces, ¿qué piensas del nuevo iPhone?" },
    { en: "Have you heard about that new app?", es: "¿Has escuchado sobre esa nueva app?" },
    { en: "Speaking of technology, do you have a smartwatch?", es: "Hablando de tecnología, ¿tienes un reloj inteligente?" },
    { en: "By the way, what kind of music do you like?", es: "Por cierto, ¿qué tipo de música te gusta?" },
    { en: "Can I ask you something about your phone plan?", es: "¿Puedo preguntarte algo sobre tu plan de celular?" }
  ];

  const askForResponse = [
    { en: "What do you think?", es: "¿Qué opinas?" },
    { en: "Don't you agree?", es: "¿No estás de acuerdo?" },
    { en: "Right?", es: "¿Verdad?" },
    { en: "Does that make sense?", es: "¿Tiene sentido eso?" },
    { en: "What about you?", es: "¿Y tú qué dices?" }
  ];

  const showListening = [
    { en: "Uh-huh.", es: "Ajá." },
    { en: "Right.", es: "Claro." },
    { en: "I see.", es: "Ya veo." },
    { en: "Oh, really?", es: "¿Ah, sí?" },
    { en: "That's interesting.", es: "Qué interesante." },
    { en: "No way!", es: "¡No puede ser!" },
    { en: "Wow, really?", es: "Wow, ¿de verdad?" },
    { en: "Yeah, I know what you mean.", es: "Sí, entiendo lo que dices." }
  ];

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 4 • Lenguaje Funcional</span>
        <h2>Preguntar sobre un Nuevo Tema y Mostrar que Escuchas</h2>
        <p className="topic-intro">
          Aprende a cambiar de tema con naturalidad, pedir la opinión de alguien, y (lo más importante) demostrar que estás escuchando activamente en una conversación.
        </p>
      </div>

      {/* NUEVO TEMA */}
      <div className="content-section">
        <h3>1. Preguntar sobre un Nuevo Tema</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Frases naturales para introducir un tema nuevo en la conversación.
        </p>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {newTopicPhrases.map((item, i) => <PhraseCard key={i} {...item} />)}
        </div>
      </div>

      {/* PEDIR RESPUESTA */}
      <div className="content-section">
        <h3>2. Pedir una Respuesta o la Opinión de Alguien</h3>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {askForResponse.map((item, i) => <PhraseCard key={i} {...item} />)}
        </div>
      </div>

      {/* ESTRATEGIA: MOSTRAR QUE ESCUCHAS */}
      <div className="content-section">
        <h3>3. Estrategia Real: Mostrar que Estás Escuchando</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          En inglés (más que en español) es muy común dar pequeñas señales verbales mientras la otra persona habla — se llaman "backchannels". Sin ellas, puedes sonar distraído/a o desinteresado/a, ¡aunque no lo estés!
        </p>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {showListening.map((item, i) => <PhraseCard key={i} {...item} />)}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>🗣️</span> Ejemplo de conversación completa</div>
          <div className="insider-content">
            <strong>A:</strong> "So, what do you think about streaming services?" <br />
            <strong>B:</strong> "Uh-huh, I use them every day, actually." <br />
            <strong>A:</strong> "Really? I don't have any — I still download my music." <br />
            <strong>B:</strong> "Oh, interesting! Don't you think streaming is easier though?"
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen de Expresiones Sociales</h4>
          <p>Practica cambiar de tema, pedir opiniones y mostrar que escuchas activamente.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default FunctionalTopic;

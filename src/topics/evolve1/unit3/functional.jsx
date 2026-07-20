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
  const makeOffers = [
    { en: "Would you like a drink?", es: "¿Te gustaría algo de tomar?" },
    { en: "Can I get you something to eat?", es: "¿Te traigo algo de comer?" },
    { en: "Do you want some coffee?", es: "¿Quieres café?" },
    { en: "Help yourself to some snacks.", es: "Sírvete algunos snacks." },
    { en: "Would you like anything else?", es: "¿Quieres algo más?" }
  ];

  const acceptOffers = [
    { en: "Yes, please.", es: "Sí, por favor." },
    { en: "That would be great, thanks.", es: "Eso estaría genial, gracias." },
    { en: "I'd love some, thank you.", es: "Me encantaría, gracias." },
    { en: "Sure, thanks!", es: "Claro, ¡gracias!" }
  ];

  const declineOffers = [
    { en: "No, thanks. I'm fine.", es: "No, gracias. Estoy bien." },
    { en: "Not for me, thanks.", es: "Para mí no, gracias." },
    { en: "I'm good, thank you.", es: "Estoy bien, gracias." },
    { en: "Maybe later, thanks.", es: "Tal vez después, gracias." }
  ];

  const askAboutWords = [
    { en: "What does 'pantry' mean?", es: "¿Qué significa 'pantry'?" },
    { en: "Sorry, what's a 'nightstand'?", es: "Perdón, ¿qué es un 'nightstand'?" },
    { en: "I don't understand this word. Could you explain it?", es: "No entiendo esta palabra. ¿Podrías explicarla?" },
    { en: "How do you say 'despensa' in English?", es: "¿Cómo se dice 'despensa' en inglés?" },
    { en: "Can you repeat that word, please?", es: "¿Puedes repetir esa palabra, por favor?" },
    { en: "Is there another way to say that?", es: "¿Hay otra forma de decir eso?" }
  ];

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 3 • Lenguaje Funcional</span>
        <h2>Ofrecer Comida y Bebida + Preguntar por Palabras Desconocidas</h2>
        <p className="topic-intro">
          Aprende a ser buen anfitrión (o buen invitado) y una estrategia real que usarás en cada conversación: qué decir cuando no entiendes una palabra.
        </p>
      </div>

      {/* HACER OFRECIMIENTOS */}
      <div className="content-section">
        <h3>1. Hacer un Ofrecimiento</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Frases para ofrecer algo de tomar o comer cuando alguien visita tu casa.
        </p>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {makeOffers.map((item, i) => <PhraseCard key={i} {...item} />)}
        </div>
      </div>

      {/* ACEPTAR */}
      <div className="content-section">
        <h3>2. Aceptar un Ofrecimiento</h3>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {acceptOffers.map((item, i) => <PhraseCard key={i} {...item} />)}
        </div>
      </div>

      {/* RECHAZAR */}
      <div className="content-section">
        <h3>3. Rechazar un Ofrecimiento (Educadamente)</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Siempre agradece, incluso si dices que no.
        </p>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {declineOffers.map((item, i) => <PhraseCard key={i} {...item} />)}
        </div>
      </div>

      {/* ESTRATEGIA: PALABRAS DESCONOCIDAS */}
      <div className="content-section">
        <h3>4. Estrategia Real: Preguntar por Palabras que No Entiendes</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Vas a escuchar palabras nuevas todo el tiempo — no pasa nada. Estas frases te ayudan a seguir la conversación sin quedarte perdido/a.
        </p>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {askAboutWords.map((item, i) => <PhraseCard key={i} {...item} />)}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>🗣️</span> Ejemplo de conversación completa</div>
          <div className="insider-content">
            <strong>A:</strong> "Would you like some snacks? There are chips and crackers." <br />
            <strong>B:</strong> "Sorry, what's a 'cracker'?" <br />
            <strong>A:</strong> "It's a small, thin, salty cookie." <br />
            <strong>B:</strong> "Oh, I see! Yes, please, I'd love some."
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen de Expresiones Sociales</h4>
          <p>Practica ofrecer, aceptar, rechazar comida/bebida y preguntar sobre palabras nuevas.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default FunctionalTopic;

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
  const answeringPhrases = [
    { en: "Hello?", es: "¿Bueno? / ¿Aló?" },
    { en: "Hello, this is Ana speaking.", es: "Hola, habla Ana." },
    { en: "Thank you for calling ABC Company, how can I help you?", es: "Gracias por llamar a ABC Company, ¿en qué puedo ayudarle?" },
    { en: "Who's calling, please?", es: "¿Quién habla, por favor?" }
  ];

  const askingForSomeone = [
    { en: "Hi, is Carlos there?", es: "Hola, ¿está Carlos?" },
    { en: "Could I speak to Mrs. Lopez, please?", es: "¿Podría hablar con la Sra. López, por favor?" },
    { en: "I'm calling about the job interview.", es: "Estoy llamando por la entrevista de trabajo." },
    { en: "Is this the right number for customer service?", es: "¿Es este el número correcto para servicio al cliente?" },
    { en: "This is Marco calling from Tech Solutions.", es: "Habla Marco de Tech Solutions." }
  ];

  const duringTheCall = [
    { en: "Can you hear me?", es: "¿Me escuchas?" },
    { en: "Sorry, I can't hear you very well.", es: "Perdón, no te escucho muy bien." },
    { en: "You're breaking up.", es: "Se está cortando la llamada." },
    { en: "Sorry, this is a bad connection.", es: "Perdón, hay mala señal/conexión." },
    { en: "Can you speak up, please?", es: "¿Puede hablar más fuerte, por favor?" },
    { en: "Could you speak more slowly, please?", es: "¿Podría hablar más despacio, por favor?" },
    { en: "Can you repeat that, please?", es: "¿Puede repetir eso, por favor?" },
    { en: "Hold on a second.", es: "Espera un segundo." },
    { en: "Can you hold, please?", es: "¿Puede esperar en línea, por favor?" },
    { en: "I'll put you on hold for a moment.", es: "Le pondré en espera un momento." },
    { en: "Can you call me back later?", es: "¿Me puedes llamar más tarde?" },
    { en: "I'm losing you.", es: "Se te está cortando / no te escucho bien." }
  ];

  const leavingAMessage = [
    { en: "He's not available right now. Can I take a message?", es: "No está disponible ahora. ¿Le puedo dar un mensaje?" },
    { en: "Can you tell her that Juan called?", es: "¿Le puede decir que llamó Juan?" },
    { en: "Can I leave a message?", es: "¿Puedo dejar un mensaje?" },
    { en: "Please ask him to call me back.", es: "Por favor pídale que me devuelva la llamada." },
    { en: "I'll call back later.", es: "Llamaré más tarde." },
    { en: "Could you give her my number?", es: "¿Le podría dar mi número?" }
  ];

  const endingTheCall = [
    { en: "Thanks for calling. Bye!", es: "Gracias por llamar. ¡Adiós!" },
    { en: "I have to go now, talk to you later.", es: "Ya me tengo que ir, hablamos después." },
    { en: "It was nice talking to you.", es: "Fue un gusto hablar contigo." },
    { en: "I'll call you back tomorrow.", es: "Te llamo mañana." },
    { en: "Take care, bye!", es: "Cuídate, ¡adiós!" }
  ];

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 7 • Lenguaje Funcional</span>
        <h2>Llamadas Telefónicas</h2>
        <p className="topic-intro">
          Frases esenciales para contestar el teléfono, preguntar por alguien, mantener la conversación cuando hay mala señal, dejar un mensaje y despedirte correctamente.
        </p>
      </div>

      {/* CONTESTAR */}
      <div className="content-section">
        <h3>1. Contestar el Teléfono</h3>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {answeringPhrases.map((item, i) => <PhraseCard key={i} {...item} />)}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>💡</span> "This is..." no "I am..."</div>
          <div className="insider-content">
            Por teléfono, para presentarte se dice <strong>"This is [nombre] speaking"</strong> o simplemente <strong>"This is [nombre]"</strong> — NO se dice <em>"I am [nombre]"</em> como en persona.
          </div>
        </div>
      </div>

      {/* PREGUNTAR POR ALGUIEN */}
      <div className="content-section">
        <h3>2. Preguntar por Alguien / Explicar el Motivo de tu Llamada</h3>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {askingForSomeone.map((item, i) => <PhraseCard key={i} {...item} />)}
        </div>
      </div>

      {/* DURANTE LA LLAMADA */}
      <div className="content-section">
        <h3>3. Durante la Llamada: Problemas de Conexión y Aclaraciones</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Frases muy útiles cuando no escuchas bien, la llamada se corta, o necesitas que te hablen más despacio.
        </p>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {duringTheCall.map((item, i) => <PhraseCard key={i} {...item} />)}
        </div>
      </div>

      {/* DEJAR UN MENSAJE */}
      <div className="content-section">
        <h3>4. Dejar un Mensaje / Recado</h3>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {leavingAMessage.map((item, i) => <PhraseCard key={i} {...item} />)}
        </div>
      </div>

      {/* TERMINAR LA LLAMADA */}
      <div className="content-section">
        <h3>5. Terminar la Llamada</h3>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {endingTheCall.map((item, i) => <PhraseCard key={i} {...item} />)}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>🗣️</span> Ejemplo de llamada completa</div>
          <div className="insider-content">
            <strong>A:</strong> "Hello?" <br />
            <strong>B:</strong> "Hi, this is Marco calling from Tech Solutions. Is Ana there?" <br />
            <strong>A:</strong> "She's not available right now. Can I take a message?" <br />
            <strong>B:</strong> "Sure, can you ask her to call me back? My number is 555-0142." <br />
            <strong>A:</strong> "Got it. I'll tell her." <br />
            <strong>B:</strong> "Thanks, bye!"
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen: Llamadas Telefónicas</h4>
          <p>Practica las frases para contestar, preguntar por alguien, y terminar una llamada.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default FunctionalTopic;

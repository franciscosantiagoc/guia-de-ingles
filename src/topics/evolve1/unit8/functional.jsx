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
  const askingDirectly = [
    { en: "Can you help me?", es: "¿Puedes ayudarme?" },
    { en: "Can you help me with this?", es: "¿Puedes ayudarme con esto?" },
    { en: "Could you help me, please?", es: "¿Podrías ayudarme, por favor?" },
    { en: "Could you give me a hand?", es: "¿Me podrías echar una mano?" },
    { en: "Would you mind helping me?", es: "¿Te importaría ayudarme?" },
    { en: "Do you have a minute? I need some help.", es: "¿Tienes un minuto? Necesito ayuda." }
  ];

  const askingPolitely = [
    { en: "Excuse me, could you help me with something?", es: "Disculpe, ¿podría ayudarme con algo?" },
    { en: "I was wondering if you could help me.", es: "Me preguntaba si podrías ayudarme." },
    { en: "Sorry to bother you, but could you help me?", es: "Perdón por molestar, ¿pero podrías ayudarme?" },
    { en: "I'm having trouble with this. Can you take a look?", es: "Estoy teniendo problemas con esto. ¿Puedes echar un vistazo?" },
    { en: "I don't know how to do this. Can you show me?", es: "No sé cómo hacer esto. ¿Puedes enseñarme?" }
  ];

  const offeringHelp = [
    { en: "Can I help you?", es: "¿Puedo ayudarte?" },
    { en: "Do you need any help?", es: "¿Necesitas ayuda?" },
    { en: "Let me help you with that.", es: "Déjame ayudarte con eso." },
    { en: "Would you like some help?", es: "¿Te gustaría algo de ayuda?" },
    { en: "I can help you if you want.", es: "Puedo ayudarte si quieres." },
    { en: "Here, let me give you a hand.", es: "Aquí, déjame echarte una mano." }
  ];

  const acceptingHelp = [
    { en: "Yes, please. That would be great.", es: "Sí, por favor. Eso sería genial." },
    { en: "Thanks, I appreciate it.", es: "Gracias, lo aprecio." },
    { en: "That would be really helpful.", es: "Eso sería muy útil." },
    { en: "Sure, thank you so much.", es: "Claro, muchas gracias." }
  ];

  const decliningHelp = [
    { en: "No, thanks, I've got it.", es: "No, gracias, ya lo tengo controlado." },
    { en: "I'm okay, thank you.", es: "Estoy bien, gracias." },
    { en: "I can manage, but thanks anyway.", es: "Puedo con esto, pero gracias de todas formas." },
    { en: "No need, but I appreciate the offer.", es: "No es necesario, pero agradezco la oferta." }
  ];

  const thankingForHelp = [
    { en: "Thank you so much for your help.", es: "Muchas gracias por tu ayuda." },
    { en: "I really appreciate your help.", es: "Realmente aprecio tu ayuda." },
    { en: "You're a lifesaver!", es: "¡Me salvaste la vida! (informal, mucho agradecimiento)" },
    { en: "I couldn't have done it without you.", es: "No hubiera podido hacerlo sin ti." },
    { en: "Thanks a lot, I owe you one.", es: "Muchas gracias, te debo una." }
  ];

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 8 • Lenguaje Funcional</span>
        <h2>Pedir Ayuda</h2>
        <p className="topic-intro">
          Frases esenciales para pedir ayuda de forma directa o educada, ofrecer ayuda a otros, aceptar o rechazar ayuda cortésmente, y agradecerla como se debe.
        </p>
      </div>

      {/* PEDIR AYUDA DIRECTAMENTE */}
      <div className="content-section">
        <h3>1. Pedir Ayuda Directamente</h3>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {askingDirectly.map((item, i) => <PhraseCard key={i} {...item} />)}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>💡</span> "Can you" vs. "Could you"</div>
          <div className="insider-content">
            <strong>"Can you help me?"</strong> es informal y directo (perfecto entre amigos o familia). <strong>"Could you help me, please?"</strong> es más educado y formal (ideal para desconocidos, el trabajo, o situaciones formales).
          </div>
        </div>
      </div>

      {/* PEDIR AYUDA EDUCADAMENTE */}
      <div className="content-section">
        <h3>2. Pedir Ayuda de Forma Indirecta y Educada</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Estas frases suavizan la petición y son ideales en contextos formales o con personas que no conoces bien.
        </p>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {askingPolitely.map((item, i) => <PhraseCard key={i} {...item} />)}
        </div>
      </div>

      {/* OFRECER AYUDA */}
      <div className="content-section">
        <h3>3. Ofrecer Ayuda</h3>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {offeringHelp.map((item, i) => <PhraseCard key={i} {...item} />)}
        </div>
      </div>

      {/* ACEPTAR AYUDA */}
      <div className="content-section">
        <h3>4. Aceptar Ayuda</h3>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {acceptingHelp.map((item, i) => <PhraseCard key={i} {...item} />)}
        </div>
      </div>

      {/* RECHAZAR AYUDA */}
      <div className="content-section">
        <h3>5. Rechazar Ayuda Educadamente</h3>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {decliningHelp.map((item, i) => <PhraseCard key={i} {...item} />)}
        </div>
      </div>

      {/* AGRADECER */}
      <div className="content-section">
        <h3>6. Agradecer la Ayuda</h3>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {thankingForHelp.map((item, i) => <PhraseCard key={i} {...item} />)}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>🗣️</span> Ejemplo de conversación completa</div>
          <div className="insider-content">
            <strong>A:</strong> "Excuse me, could you help me with something?" <br />
            <strong>B:</strong> "Sure, what do you need?" <br />
            <strong>A:</strong> "I can't fix this computer. Can you take a look?" <br />
            <strong>B:</strong> "Let me help you with that." <br />
            <strong>A:</strong> "Thank you so much, I really appreciate it." <br />
            <strong>B:</strong> "No problem at all!"
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen: Pedir Ayuda</h4>
          <p>Practica frases para pedir, ofrecer, aceptar y rechazar ayuda.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default FunctionalTopic;

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
  const askAboutRoutine = [
    { en: "What's your daily routine like?", es: "¿Cómo es tu rutina diaria?" },
    { en: "What time do you usually get up?", es: "¿A qué hora sueles levantarte?" },
    { en: "What do you do in the morning?", es: "¿Qué haces en la mañana?" },
    { en: "Do you have a busy schedule?", es: "¿Tienes un horario ocupado?" },
    { en: "How does a typical day look for you?", es: "¿Cómo se ve un día típico para ti?" }
  ];

  const describeRoutine = [
    { en: "I usually wake up around seven.", es: "Usualmente me despierto alrededor de las siete." },
    { en: "On weekdays, I start work at nine.", es: "Entre semana, empiezo a trabajar a las nueve." },
    { en: "After work, I normally relax at home.", es: "Después del trabajo, normalmente me relajo en casa." },
    { en: "My routine is pretty simple.", es: "Mi rutina es bastante sencilla." },
    { en: "It depends on the day.", es: "Depende del día." },
    { en: "Weekends are totally different for me.", es: "Los fines de semana son totalmente diferentes para mí." }
  ];

  const frequencyPhrases = [
    { en: "I always check my phone in the morning.", es: "Siempre reviso mi teléfono en la mañana." },
    { en: "I usually have breakfast at home.", es: "Usualmente desayuno en casa." },
    { en: "I sometimes work from home.", es: "A veces trabajo desde casa." },
    { en: "I hardly ever go to bed early.", es: "Casi nunca me voy a dormir temprano." },
    { en: "I never skip breakfast.", es: "Nunca me salto el desayuno." },
    { en: "Once a week, I go to the gym.", es: "Una vez por semana, voy al gimnasio." },
    { en: "Twice a month, we visit my parents.", es: "Dos veces al mes, visitamos a mis papás." }
  ];

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 5 • Lenguaje Funcional</span>
        <h2>Hablar de tu Rutina</h2>
        <p className="topic-intro">
          Frases naturales para preguntar y contar cómo es tu día a día, incluyendo cómo expresar la frecuencia de tus actividades.
        </p>
      </div>

      {/* PREGUNTAR */}
      <div className="content-section">
        <h3>1. Preguntar por la Rutina de Alguien</h3>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {askAboutRoutine.map((item, i) => <PhraseCard key={i} {...item} />)}
        </div>
      </div>

      {/* DESCRIBIR */}
      <div className="content-section">
        <h3>2. Describir tu Propia Rutina</h3>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {describeRoutine.map((item, i) => <PhraseCard key={i} {...item} />)}
        </div>
      </div>

      {/* FRECUENCIA */}
      <div className="content-section">
        <h3>3. Usar Expresiones de Frecuencia en Conversación</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Además de los adverbios (always, usually, sometimes...), puedes usar frases como "once a week" o "hardly ever" para sonar más natural.
        </p>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {frequencyPhrases.map((item, i) => <PhraseCard key={i} {...item} />)}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>🗣️</span> Ejemplo de conversación completa</div>
          <div className="insider-content">
            <strong>A:</strong> "What's your daily routine like?" <br />
            <strong>B:</strong> "Well, I usually wake up at six thirty and go for a run." <br />
            <strong>A:</strong> "Every day?" <br />
            <strong>B:</strong> "No, only on weekdays. On weekends, I sleep in."
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen: Hablar de Rutinas</h4>
          <p>Practica preguntar y describir rutinas diarias con expresiones de frecuencia.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default FunctionalTopic;

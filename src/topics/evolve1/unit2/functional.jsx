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
  const ageQuestions = [
    { en: "How old are you?", es: "¿Cuántos años tienes?" },
    { en: "I'm 25 years old. / I'm 25.", es: "Tengo 25 años." },
    { en: "How old is your brother?", es: "¿Cuántos años tiene tu hermano?" },
    { en: "He's 17.", es: "Él tiene 17 años." },
    { en: "How old are your grandparents?", es: "¿Cuántos años tienen tus abuelos?" },
    { en: "They're in their seventies.", es: "Están en sus setentas (entre 70 y 79 años)." }
  ];

  const birthdayQuestions = [
    { en: "When's your birthday?", es: "¿Cuándo es tu cumpleaños?" },
    { en: "My birthday is on July 28th.", es: "Mi cumpleaños es el 28 de julio." },
    { en: "When is your sister's birthday?", es: "¿Cuándo es el cumpleaños de tu hermana?" },
    { en: "It's in September.", es: "Es en septiembre. (Sin especificar el día exacto)" }
  ];

  const birthdayWishes = [
    { en: "Happy Birthday!", es: "¡Feliz cumpleaños!" },
    { en: "Many happy returns!", es: "¡Muchas felicidades! (expresión británica clásica)" },
    { en: "Wishing you all the best on your birthday!", es: "¡Te deseo lo mejor en tu cumpleaños!" },
    { en: "Have a great birthday!", es: "¡Que tengas un gran cumpleaños!" },
    { en: "Hope your day is amazing!", es: "¡Espero que tu día sea increíble!" }
  ];

  const correctYourself = [
    { en: "Sorry, I mean...", es: "Perdón, quise decir..." },
    { en: "Actually, let me correct that.", es: "En realidad, déjame corregir eso." },
    { en: "Oh wait, I meant to say...", es: "Ah espera, quise decir..." },
    { en: "Sorry, that's not right. What I mean is...", es: "Perdón, eso no es correcto. Lo que quiero decir es..." },
    { en: "Let me rephrase that.", es: "Déjame decirlo de otra forma." }
  ];

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 2 • Lenguaje Funcional</span>
        <h2>Edades, Cumpleaños y Cómo Autocorregirte</h2>
        <p className="topic-intro">
          Pregunta y responde sobre edades y fechas de cumpleaños, felicita a alguien, y aprende una estrategia real: cómo corregirte cuando cometes un error al hablar.
        </p>
      </div>

      {/* EDADES */}
      <div className="content-section">
        <h3>1. Preguntar y Decir la Edad</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          En inglés, la edad se expresa con el verbo <strong>be</strong>, no con "tener" como en español: <em>"I am 25"</em>, no <em>"I have 25"</em>.
        </p>

        <div className="grammar-formula">How old + is/are + sujeto?</div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {ageQuestions.map((item, i) => <PhraseCard key={i} {...item} />)}
        </div>
      </div>

      {/* CUMPLEAÑOS */}
      <div className="content-section">
        <h3>2. Preguntar y Decir la Fecha de Cumpleaños</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Usa <strong>on</strong> con el día exacto y <strong>in</strong> cuando solo mencionas el mes.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {birthdayQuestions.map((item, i) => <PhraseCard key={i} {...item} />)}
        </div>
      </div>

      {/* FELICITACIONES */}
      <div className="content-section">
        <h3>3. Dar Felicitaciones de Cumpleaños</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Frases listas para felicitar a alguien, de la más común a la más elaborada.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {birthdayWishes.map((item, i) => <PhraseCard key={i} {...item} />)}
        </div>
      </div>

      {/* ESTRATEGIA: CORRECT YOURSELF */}
      <div className="content-section">
        <h3>4. Estrategia Real: Correct Yourself</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Todos cometemos errores al hablar un idioma nuevo. Estas frases te ayudan a corregirte sin perder el hilo de la conversación — mucho mejor que quedarte en silencio.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {correctYourself.map((item, i) => <PhraseCard key={i} {...item} />)}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>🗣️</span> Practícalo con un error real</div>
          <div className="insider-content">
            Ejemplo completo: <em>"My sister is thirty— sorry, I mean, she's thirteen years old."</em> (Mi hermana tiene treinta— perdón, quise decir, tiene trece años). Confundir <strong>thirty</strong> y <strong>thirteen</strong> es un error clásico — ¡y ahora sabes cómo corregirlo con naturalidad!
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen de Expresiones Sociales</h4>
          <p>Practica preguntas de edad, cumpleaños y frases para corregirte en una conversación.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default FunctionalTopic;

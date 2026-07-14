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

const PhraseCard = ({ en, es, note, register }) => (
  <div className="example-item">
    <div className="example-en" style={{ justifyContent: 'space-between' }}>
      <span>{en}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span className={`register-badge ${register}`}>{register === 'formal' ? 'Formal' : 'Informal'}</span>
        <button className="audio-btn" onClick={() => speak(en)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
      </div>
    </div>
    <div className="example-es" style={{ marginTop: '6px' }}>
      {es}{note && <> <span style={{ opacity: 0.75 }}>— {note}</span></>}
    </div>
  </div>
);

const FunctionalTopic = () => {
  const formalGreetings = [
    { en: "Good morning.", es: "Buenos días.", note: "Antes del mediodía; funciona en cualquier contexto formal" },
    { en: "Good afternoon.", es: "Buenas tardes.", note: "Del mediodía a ~6:00 PM" },
    { en: "Good evening.", es: "Buenas noches (al llegar).", note: "Después de ~6:00 PM; NO se usa para despedirse" },
    { en: "How do you do?", es: "Mucho gusto / Encantado de conocerlo.", note: "Muy formal, típico de Reino Unido; se responde repitiendo la misma frase" },
    { en: "It's a pleasure to meet you.", es: "Es un placer conocerlo/a.", note: "" },
    { en: "Good to see you again.", es: "Qué gusto verlo/a de nuevo.", note: "Para alguien que ya conoces, en tono formal" },
    { en: "Welcome.", es: "Bienvenido/a.", note: "Al recibir a alguien en una oficina o evento" },
    { en: "Allow me to introduce myself.", es: "Permítame presentarme.", note: "Entrevistas de trabajo, negocios" }
  ];

  const informalGreetings = [
    { en: "Hi!", es: "¡Hola!", note: "" },
    { en: "Hey!", es: "¡Oye! / ¡Hola!", note: "Muy casual, entre amigos" },
    { en: "Hello!", es: "¡Hola!", note: "Neutral — funciona casi en cualquier contexto" },
    { en: "What's up?", es: "¿Qué onda? / ¿Qué tal?", note: "Muy informal" },
    { en: "How's it going?", es: "¿Cómo te va?", note: "" },
    { en: "How's everything?", es: "¿Cómo va todo?", note: "" },
    { en: "Long time no see!", es: "¡Cuánto tiempo sin verte!", note: "" },
    { en: "Howdy!", es: "¡Hola!", note: "Regional — sur de Estados Unidos" },
    { en: "Yo!", es: "¡Ey!", note: "Muy casual, entre amigos jóvenes" },
    { en: "Morning!", es: "¡Buen día!", note: "Versión corta e informal de \"Good morning\"" }
  ];

  const howAreYouFormal = [
    { en: "I'm very well, thank you. And you?", es: "Estoy muy bien, gracias. ¿Y usted?" },
    { en: "I'm fine, thank you.", es: "Estoy bien, gracias." },
    { en: "Quite well, thanks.", es: "Bastante bien, gracias." }
  ];

  const howAreYouInformal = [
    { en: "Pretty good, thanks!", es: "Bastante bien, ¡gracias!" },
    { en: "Not bad.", es: "No está mal." },
    { en: "Can't complain.", es: "No me puedo quejar." },
    { en: "So-so.", es: "Más o menos." }
  ];

  const introSelfFormal = [
    { en: "My name is Laura. It's a pleasure to meet you.", es: "Mi nombre es Laura. Es un placer conocerlo/a." },
    { en: "Allow me to introduce myself. I'm Mr. García.", es: "Permítame presentarme. Soy el Sr. García." }
  ];

  const introSelfInformal = [
    { en: "Hi, I'm Laura.", es: "Hola, soy Laura." },
    { en: "I'm Alex, by the way.", es: "Por cierto, soy Alex." }
  ];

  const introOthersFormal = [
    { en: "I'd like you to meet Ms. Reyes.", es: "Me gustaría presentarle a la Sra. Reyes." },
    { en: "May I introduce Dr. Kim?", es: "¿Puedo presentarle al Dr. Kim?" }
  ];

  const introOthersInformal = [
    { en: "This is my friend, Sara.", es: "Ella es mi amiga, Sara." },
    { en: "Have you met Tom?", es: "¿Ya conoces a Tom?" }
  ];

  const introResponses = [
    { en: "How do you do?", es: "Mucho gusto. (Se responde repitiendo la frase)", register: "formal" },
    { en: "It's a pleasure to meet you.", es: "Es un placer conocerlo/a.", register: "formal" },
    { en: "Nice to meet you!", es: "¡Un gusto conocerte!", register: "informal" },
    { en: "Great to meet you!", es: "¡Qué bueno conocerte!", register: "informal" }
  ];

  const farewellsFormal = [
    { en: "Goodbye.", es: "Adiós.", note: "" },
    { en: "Farewell.", es: "Hasta siempre.", note: "Muy formal o literario" },
    { en: "Have a good day.", es: "Que tenga un buen día.", note: "" },
    { en: "It was a pleasure meeting you.", es: "Fue un placer conocerlo/a.", note: "" },
    { en: "I look forward to seeing you again.", es: "Espero volver a verlo/a.", note: "" },
    { en: "Take care.", es: "Cuídese.", note: "Funciona en formal e informal según el tono" }
  ];

  const farewellsInformal = [
    { en: "Bye!", es: "¡Adiós!", note: "" },
    { en: "See you later!", es: "¡Nos vemos luego!", note: "" },
    { en: "See you soon!", es: "¡Nos vemos pronto!", note: "" },
    { en: "Catch you later!", es: "¡Nos vemos!", note: "Muy casual" },
    { en: "Talk to you soon!", es: "¡Hablamos pronto!", note: "" },
    { en: "Have a good one!", es: "¡Que la pases bien!", note: "" },
    { en: "Take it easy!", es: "¡Cuídate!", note: "" },
    { en: "Good night!", es: "¡Buenas noches!", note: "Solo al despedirte de noche o irte a dormir — nunca al llegar" }
  ];

  const registerContexts = [
    { context: "Entrevista de trabajo", register: "Formal" },
    { context: "Conocer a tu jefe o profesor", register: "Formal" },
    { context: "Reunión de negocios", register: "Formal" },
    { context: "Fiesta con amigos", register: "Informal" },
    { context: "Mensaje de texto a un amigo", register: "Informal" },
    { context: "Compañeros de clase", register: "Informal" },
    { context: "Vecino que no conoces todavía", register: "Formal al inicio, luego puede volverse informal" }
  ];

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 1 • Lenguaje Funcional</span>
        <h2>Saludos, Despedidas e Introducciones: Formal vs. Informal</h2>
        <p className="topic-intro">
          Cada saludo, presentación o despedida tiene un registro: formal (jefes, entrevistas, desconocidos mayores) o informal (amigos, familia, compañeros). Aprende ambos para adaptarte a cualquier situación.
        </p>
      </div>

      {/* SALUDOS */}
      <div className="content-section">
        <h3>1. Saludos: Formales vs. Informales</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          El saludo correcto depende de a quién le hablas y de la hora del día. Escucha cada frase con el botón 🔊.
        </p>

        <h4 style={{ color: 'var(--text-main)', fontSize: '0.95rem', marginBottom: '10px' }}>Formales</h4>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {formalGreetings.map((item, i) => <PhraseCard key={i} {...item} register="formal" />)}
        </div>

        <h4 style={{ color: 'var(--text-main)', fontSize: '0.95rem', margin: '24px 0 10px' }}>Informales</h4>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {informalGreetings.map((item, i) => <PhraseCard key={i} {...item} register="informal" />)}
        </div>
      </div>

      {/* HOW ARE YOU */}
      <div className="content-section">
        <h3>2. Responder a "How are you?"</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Después de saludar, es muy común preguntar cómo está la otra persona. Las respuestas también cambian de registro.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {howAreYouFormal.map((item, i) => <PhraseCard key={`f-${i}`} {...item} register="formal" />)}
          {howAreYouInformal.map((item, i) => <PhraseCard key={`i-${i}`} {...item} register="informal" />)}
        </div>
      </div>

      {/* PRESENTACIONES */}
      <div className="content-section">
        <h3>3. Presentarte a ti mismo y a otras personas</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Para presentar a alguien más, la forma más simple en inglés usa el demostrativo <strong>this is</strong>, pero existen fórmulas más formales para contextos de trabajo o negocios.
        </p>

        <div className="grammar-formula">This is + Nombre de la persona</div>

        <h4 style={{ color: 'var(--text-main)', fontSize: '0.95rem', margin: '20px 0 10px' }}>Presentarte a ti mismo</h4>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {introSelfFormal.map((item, i) => <PhraseCard key={`sf-${i}`} {...item} register="formal" />)}
          {introSelfInformal.map((item, i) => <PhraseCard key={`si-${i}`} {...item} register="informal" />)}
        </div>

        <h4 style={{ color: 'var(--text-main)', fontSize: '0.95rem', margin: '24px 0 10px' }}>Presentar a otra persona</h4>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {introOthersFormal.map((item, i) => <PhraseCard key={`of-${i}`} {...item} register="formal" />)}
          {introOthersInformal.map((item, i) => <PhraseCard key={`oi-${i}`} {...item} register="informal" />)}
        </div>

        <h4 style={{ color: 'var(--text-main)', fontSize: '0.95rem', margin: '24px 0 10px' }}>Responder cuando te presentan a alguien</h4>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {introResponses.map((item, i) => <PhraseCard key={`ir-${i}`} {...item} />)}
        </div>
      </div>

      {/* DESPEDIDAS */}
      <div className="content-section">
        <h3>4. Despedidas: Formales vs. Informales</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Igual que con los saludos, el "adiós" que elijas depende del contexto y de qué tan cercana es la persona.
        </p>

        <h4 style={{ color: 'var(--text-main)', fontSize: '0.95rem', marginBottom: '10px' }}>Formales</h4>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {farewellsFormal.map((item, i) => <PhraseCard key={`ff-${i}`} {...item} register="formal" />)}
        </div>

        <h4 style={{ color: 'var(--text-main)', fontSize: '0.95rem', margin: '24px 0 10px' }}>Informales</h4>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {farewellsInformal.map((item, i) => <PhraseCard key={`fi-${i}`} {...item} register="informal" />)}
        </div>
      </div>

      {/* CUÁNDO USAR CADA REGISTRO */}
      <div className="content-section">
        <h3>5. ¿Cuándo uso cada registro?</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Una guía rápida para decidir si conviene ser formal o informal según la situación.
        </p>

        <table className="register-context-table">
          <thead>
            <tr>
              <th>Situación</th>
              <th>Registro recomendado</th>
            </tr>
          </thead>
          <tbody>
            {registerContexts.map((row, i) => (
              <tr key={i}>
                <td>{row.context}</td>
                <td style={{ color: 'var(--active-accent)', fontWeight: 600 }}>{row.register}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* NOTA CULTURAL / REGIONAL */}
      <div className="insider-box">
        <div className="insider-title">
          <span>🌍</span> Variaciones regionales
        </div>
        <div className="insider-content">
          El inglés cambia según la región. Algunos saludos y despedidas informales muy marcados geográficamente:<br />
          • <strong>"Cheers!"</strong> (Reino Unido) — puede significar "¡Gracias!" o servir como despedida informal.<br />
          • <strong>"Howdy!"</strong> (sur de EE. UU.) — saludo informal típico, junto con <strong>"Y'all"</strong> ("ustedes", contracción de "you all").<br />
          • <strong>"G'day!"</strong> (Australia) — contracción de "Good day", el saludo informal más icónico del país.<br />
          • En Canadá es común terminar frases con <strong>"eh?"</strong> como muletilla conversacional informal.
        </div>
      </div>

      <div className="insider-box">
        <div className="insider-title">
          <span>⚠️</span> Cuidado con "How do you do?"
        </div>
        <div className="insider-content">
          A pesar de la forma de pregunta, <strong>"How do you do?"</strong> no se responde con "I'm fine". Es una fórmula fija muy formal: la respuesta correcta es repetir <strong>"How do you do?"</strong> de vuelta. También recuerda: <strong>Good evening</strong> se usa al llegar de noche, y <strong>Good night</strong> solo al despedirte o irte a dormir.
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen de Expresiones Sociales</h4>
          <p>Evalúa si sabes elegir el saludo, presentación o despedida correctos — y el registro adecuado — para cada contexto social.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default FunctionalTopic;

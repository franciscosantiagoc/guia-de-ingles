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
  const stativeVerbs = [
    { word: "know", translation: "saber / conocer" },
    { word: "believe", translation: "creer" },
    { word: "understand", translation: "entender" },
    { word: "like", translation: "gustar" },
    { word: "love", translation: "amar" },
    { word: "hate", translation: "odiar" },
    { word: "want", translation: "querer" },
    { word: "need", translation: "necesitar" },
    { word: "prefer", translation: "preferir" },
    { word: "seem", translation: "parecer" },
    { word: "own", translation: "poseer" },
    { word: "belong", translation: "pertenecer" },
    { word: "remember", translation: "recordar" },
    { word: "forget", translation: "olvidar" },
    { word: "mean", translation: "significar" },
    { word: "agree", translation: "estar de acuerdo" }
  ];

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 7 • Gramática 2</span>
        <h2>Presente Simple vs. Presente Continuo</h2>
        <p className="topic-intro">
          Ahora que conoces ambos tiempos, es momento de decidir correctamente cuál usar en cada situación — y conocer los verbos que casi nunca se usan en continuo.
        </p>
      </div>

      {/* CUÁNDO USAR CADA UNO */}
      <div className="content-section">
        <h3>1. ¿Cuál Uso en Cada Caso?</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          La diferencia clave: el presente simple habla de <strong>lo habitual</strong>; el presente continuo habla de <strong>lo que pasa ahora o temporalmente</strong>.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div className="example-item">
            <div className="example-en">Presente Simple</div>
            <div className="example-es">Rutinas, hábitos, hechos generales, cosas que siempre son verdad.<br /><em>"I work at a hospital."</em> (Trabajo en un hospital — mi trabajo habitual).</div>
          </div>
          <div className="example-item">
            <div className="example-en">Presente Continuo</div>
            <div className="example-es">Acciones en progreso ahora mismo, o situaciones temporales.<br /><em>"I'm working from home this week."</em> (Estoy trabajando desde casa esta semana — algo temporal).</div>
          </div>
        </div>
      </div>

      {/* COMPARACIÓN LADO A LADO */}
      <div className="content-section">
        <h3>2. Comparación Lado a Lado</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          El mismo verbo puede cambiar completamente de significado según el tiempo que uses.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div className="example-item">
            <div className="example-en" style={{ justifyContent: 'space-between' }}>
              <span>She <strong>cooks</strong> dinner every night.</span>
              <button className="audio-btn" onClick={() => speak("She cooks dinner every night.")} title="Escuchar">🔊</button>
            </div>
            <div className="example-es" style={{ marginBottom: '10px' }}>Ella cocina la cena cada noche. (hábito)</div>
            <div className="example-en" style={{ justifyContent: 'space-between' }}>
              <span>She <strong>is cooking</strong> dinner right now.</span>
              <button className="audio-btn" onClick={() => speak("She is cooking dinner right now.")} title="Escuchar">🔊</button>
            </div>
            <div className="example-es">Ella está cocinando la cena ahora mismo. (en progreso)</div>
          </div>
          <div className="example-item">
            <div className="example-en" style={{ justifyContent: 'space-between' }}>
              <span>He <strong>lives</strong> in Chicago.</span>
              <button className="audio-btn" onClick={() => speak("He lives in Chicago.")} title="Escuchar">🔊</button>
            </div>
            <div className="example-es" style={{ marginBottom: '10px' }}>Él vive en Chicago. (permanente)</div>
            <div className="example-en" style={{ justifyContent: 'space-between' }}>
              <span>He <strong>is living</strong> with his parents this month.</span>
              <button className="audio-btn" onClick={() => speak("He is living with his parents this month.")} title="Escuchar">🔊</button>
            </div>
            <div className="example-es">Está viviendo con sus papás este mes. (temporal)</div>
          </div>
        </div>
      </div>

      {/* VERBOS DE ESTADO */}
      <div className="content-section">
        <h3>3. Verbos de Estado (Stative Verbs): Casi Nunca en Continuo</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Algunos verbos describen estados, pensamientos o sentimientos, no acciones — por eso casi nunca se usan en presente continuo, incluso si hablas de "ahora mismo".
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}>
          {stativeVerbs.map((item, index) => (
            <div key={index} className="example-item" style={{ padding: '10px 14px' }}>
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{item.word}</span>
                <button className="audio-btn" onClick={() => speak(item.word)} title="Escuchar" style={{ margin: 0, width: '26px', height: '26px' }}>🔊</button>
              </div>
              <div className="example-es">{item.translation}</div>
            </div>
          ))}
        </div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', marginTop: '16px' }}>
          <ExampleCard en="I understand the lesson now. ✅" es="Entiendo la lección ahora. (correcto)" />
          <ExampleCard en="I know the answer. ✅" es="Sé la respuesta. (correcto)" />
          <ExampleCard en="I want a coffee. ✅" es="Quiero un café. (correcto)" />
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>❌</span> Error común</div>
          <div className="insider-content">
            NUNCA digas <em>"I am knowing"</em>, <em>"I am wanting"</em> o <em>"I am understanding"</em>. Aunque en español a veces usamos el gerundio con estos verbos ("estoy entendiendo"), en inglés siempre van en presente simple: <strong>"I understand"</strong>, <strong>"I want"</strong>, <strong>"I know"</strong>.
          </div>
        </div>
      </div>

      {/* PALABRAS SEÑAL */}
      <div className="content-section">
        <h3>4. Palabras Señal (Signal Words)</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Estas palabras te ayudan a identificar qué tiempo usar en una oración.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div className="example-item">
            <div className="example-en">Presente Simple</div>
            <div className="example-es"><strong>usually, always, often, sometimes, rarely, never, every day/week, on Mondays</strong></div>
          </div>
          <div className="example-item">
            <div className="example-en">Presente Continuo</div>
            <div className="example-es"><strong>now, right now, at the moment, currently, at this time, these days, this week/month, Look!, Listen!</strong></div>
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen: Simple vs. Continuo</h4>
          <p>Practica eligiendo el tiempo correcto y reconociendo los verbos de estado.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default Grammar2Topic;

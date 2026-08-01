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

const Grammar1Topic = () => {
  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 8 • Gramática 1</span>
        <h2>El Verbo Modal Can / Can't</h2>
        <p className="topic-intro">
          "Can" es uno de los verbos más útiles del inglés: sirve para hablar de habilidad, pedir permiso y hacer peticiones. Y lo mejor: nunca cambia de forma.
        </p>
      </div>

      {/* AFIRMATIVO */}
      <div className="content-section">
        <h3>1. Forma Afirmativa</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          "Can" es igual para todos los sujetos — no se agrega "-s" con he/she/it, y siempre va seguido del verbo en forma base (sin "to").
        </p>

        <div className="grammar-formula">Sujeto + can + verbo base</div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="I can swim." es="Yo puedo nadar / Yo sé nadar." />
          <ExampleCard en="You can play the guitar." es="Tú puedes tocar la guitarra." />
          <ExampleCard en="He can speak two languages." es="Él puede hablar dos idiomas." />
          <ExampleCard en="She can cook Italian food." es="Ella sabe cocinar comida italiana." />
          <ExampleCard en="We can help you." es="Nosotros podemos ayudarte." />
          <ExampleCard en="They can fix computers." es="Ellos saben arreglar computadoras." />
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>⚠️</span> "Can" nunca lleva "-s"</div>
          <div className="insider-content">
            A diferencia de otros verbos en presente simple, "can" NO cambia con he/she/it: se dice <strong>"She can sing"</strong>, nunca <em>"She cans sing"</em>. Además, nunca se usa "to" después: <strong>"He can swim"</strong>, no <em>"He can to swim"</em>.
          </div>
        </div>
      </div>

      {/* NEGATIVO */}
      <div className="content-section">
        <h3>2. Forma Negativa: can't / cannot</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Para negar, agrega "not" después de "can". La contracción más común es "can't"; la forma completa "cannot" se escribe como una sola palabra.
        </p>

        <div className="grammar-formula" style={{ flexDirection: 'column', gap: '6px', fontSize: '1rem' }}>
          <div>Sujeto + can't (cannot) + verbo base</div>
        </div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="I can't dance very well." es="No puedo bailar muy bien." />
          <ExampleCard en="He can't drive a car." es="Él no sabe manejar un auto." />
          <ExampleCard en="She cannot attend the meeting today." es="Ella no puede asistir a la reunión hoy." />
          <ExampleCard en="We can't find the keys." es="No podemos encontrar las llaves." />
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>💡</span> "Cannot" es una sola palabra</div>
          <div className="insider-content">
            En inglés se escribe <strong>"cannot"</strong> (junto), no <em>"can not"</em> (separado) — aunque verás "can not" en construcciones especiales de énfasis (<em>"You can NOT be serious"</em>). Para el uso diario, usa <strong>can't</strong> (hablado) o <strong>cannot</strong> (formal/escrito).
          </div>
        </div>
      </div>

      {/* PREGUNTAS SÍ/NO */}
      <div className="content-section">
        <h3>3. Preguntas de Sí/No y Respuestas Cortas</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Para preguntar, invierte el orden: "can" va antes del sujeto.
        </p>

        <div className="grammar-formula">Can + Sujeto + verbo base?</div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="Can you swim? — Yes, I can. / No, I can't." es="¿Sabes nadar? — Sí. / No." />
          <ExampleCard en="Can she speak French? — Yes, she can." es="¿Ella sabe hablar francés? — Sí." />
          <ExampleCard en="Can they help us? — No, they can't." es="¿Ellos pueden ayudarnos? — No." />
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>⚠️</span> Nunca contraigas las respuestas cortas afirmativas</div>
          <div className="insider-content">
            Se dice <strong>"Yes, I can"</strong> — NUNCA <em>"Yes, I can't"</em> ni una contracción como <em>"Yes, I'can"</em>. "Can" en respuestas cortas afirmativas siempre va completo y sin contraer.
          </div>
        </div>
      </div>

      {/* PREGUNTAS WH */}
      <div className="content-section">
        <h3>4. Preguntas con Wh-</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Agrega una palabra Wh- (what, where, who, how, when) antes de "can" para pedir información específica.
        </p>

        <div className="grammar-formula">Wh- + can + Sujeto + verbo base?</div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="What can you do?" es="¿Qué sabes hacer?" />
          <ExampleCard en="Where can I find a good restaurant?" es="¿Dónde puedo encontrar un buen restaurante?" />
          <ExampleCard en="Who can help me with this?" es="¿Quién puede ayudarme con esto?" />
          <ExampleCard en="How can I improve my English?" es="¿Cómo puedo mejorar mi inglés?" />
        </div>
      </div>

      {/* OTROS USOS */}
      <div className="content-section">
        <h3>5. Otros Usos de "Can": Permiso y Peticiones</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          "Can" no solo habla de habilidad — también se usa para pedir permiso (de forma informal) y para hacer peticiones.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div className="example-item">
            <div className="example-en">Habilidad</div>
            <div className="example-es"><em>"I can drive."</em> (Sé manejar — capacidad).</div>
          </div>
          <div className="example-item">
            <div className="example-en">Permiso (informal)</div>
            <div className="example-es"><em>"Can I use your phone?"</em> (¿Puedo usar tu teléfono? — pidiendo permiso).</div>
          </div>
          <div className="example-item">
            <div className="example-en">Petición</div>
            <div className="example-es"><em>"Can you help me?"</em> (¿Puedes ayudarme? — pidiendo un favor).</div>
          </div>
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>💡</span> "Could" es más formal/educado</div>
          <div className="insider-content">
            Para pedir permiso o hacer una petición de forma más educada, se usa <strong>"could"</strong> en lugar de "can": <em>"Could I use your phone?"</em> o <em>"Could you help me?"</em> suenan más corteses, especialmente con desconocidos o en el trabajo.
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen: Can / Can't</h4>
          <p>Practica afirmaciones, negaciones y preguntas con el verbo modal can.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default Grammar1Topic;

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
  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 6 • Gramática 2</span>
        <h2>Adverbios de Frecuencia: Posición y Reglas Avanzadas</h2>
        <p className="topic-intro">
          En la Unidad 5 conociste always, usually, often, sometimes, occasionally, rarely, hardly ever y never. Ahora vas a dominar exactamente dónde va cada uno en la oración, incluso combinados con "there is / there are".
        </p>
      </div>

      {/* REGLA GENERAL */}
      <div className="content-section">
        <h3>1. Repaso: La Regla General</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Los adverbios de frecuencia van <strong>antes</strong> del verbo principal, pero <strong>después</strong> del verbo be.
        </p>

        <div className="grammar-formula" style={{ flexDirection: 'column', gap: '6px', fontSize: '1rem' }}>
          <div>Sujeto + adverbio + verbo principal</div>
          <div>Sujeto + be + adverbio + complemento</div>
        </div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="I usually walk in the park on Sundays." es="Usualmente camino en el parque los domingos." />
          <ExampleCard en="This town is always quiet at night." es="Este pueblo siempre está tranquilo en la noche." />
        </div>
      </div>

      {/* CON THERE IS/ARE */}
      <div className="content-section">
        <h3>2. Adverbios de Frecuencia con There is / There are</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Con <strong>there is / there are</strong>, el adverbio va <strong>entre "there" y "is/are"</strong> — igual que con cualquier otro uso de be.
        </p>

        <div className="grammar-formula">There + adverbio + is/are + sustantivo</div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="There is usually a lot of traffic downtown." es="Usualmente hay mucho tráfico en el centro." />
          <ExampleCard en="There are often tourists at this beach." es="Frecuentemente hay turistas en esta playa." />
          <ExampleCard en="There is never any noise in this neighborhood." es="Nunca hay ruido en esta colonia." />
          <ExampleCard en="There are sometimes street vendors in the square." es="A veces hay vendedores ambulantes en la plaza." />
        </div>

        <div className="insider-box">
          <div className="insider-title"><span>⚠️</span> Never y hardly ever + verbo afirmativo</div>
          <div className="insider-content">
            "Never" y "hardly ever" ya tienen significado negativo, así que el verbo que les sigue va en forma <strong>afirmativa</strong>: <em>"There is never any noise"</em> / <em>"There is hardly ever any traffic here"</em> (correcto), NO <em>"There isn't never any noise"</em> (doble negación incorrecta).
          </div>
        </div>
      </div>

      {/* CON MODALES */}
      <div className="content-section">
        <h3>3. Adverbios de Frecuencia con Verbos Compuestos</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Cuando hay un verbo auxiliar o modal (can, will, have to, don't), el adverbio va <strong>después del auxiliar</strong> y antes del verbo principal.
        </p>

        <div className="grammar-formula">Sujeto + auxiliar/modal + adverbio + verbo principal</div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="You can usually find a taxi at the corner." es="Usualmente puedes encontrar un taxi en la esquina." />
          <ExampleCard en="We don't often visit that museum." es="No visitamos ese museo con frecuencia." />
          <ExampleCard en="I have never been to that lake." es="Nunca he estado en ese lago." />
        </div>
      </div>

      {/* EXCEPCIONES CON ÉNFASIS */}
      <div className="content-section">
        <h3>4. Usos Especiales: Al Inicio de la Oración</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          <strong>Usually</strong>, <strong>often</strong>, <strong>sometimes</strong> y <strong>occasionally</strong> también pueden ir al <strong>inicio</strong> de la oración para dar énfasis o cambiar de tema. <strong>Always</strong>, <strong>hardly ever</strong> y <strong>never</strong> casi nunca se usan así en oraciones afirmativas simples.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="Usually, there are more people here on weekends." es="Usualmente, hay más gente aquí los fines de semana." />
          <ExampleCard en="Sometimes, we walk to the market instead of driving." es="A veces, caminamos al mercado en vez de manejar." />
        </div>

        <div className="insider-box">
          <div className="insider-title"><span>💡</span> Coma después del adverbio</div>
          <div className="insider-content">
            Cuando el adverbio de frecuencia va al inicio de la oración, normalmente se escribe una <strong>coma</strong> después: <em>"Usually, ..."</em>, <em>"Sometimes, ..."</em>.
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen: Posición de Adverbios de Frecuencia</h4>
          <p>Practica colocar always, usually, often, sometimes, rarely y never en el lugar correcto.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default Grammar2Topic;

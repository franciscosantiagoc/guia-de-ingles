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
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 7 • Gramática 1</span>
        <h2>Presente Continuo (Present Continuous)</h2>
        <p className="topic-intro">
          Usamos el presente continuo para hablar de acciones que están pasando <strong>en este momento</strong> o de situaciones temporales alrededor del presente.
        </p>
      </div>

      {/* FORMACIÓN */}
      <div className="content-section">
        <h3>1. Formación: am / is / are + verbo-ing</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          El presente continuo siempre necesita dos partes: el verbo <strong>be</strong> (am/is/are) conjugado según el sujeto, más el verbo principal con <strong>-ing</strong>.
        </p>

        <div className="grammar-formula" style={{ flexDirection: 'column', gap: '6px', fontSize: '1rem' }}>
          <div>I <strong>am</strong> (I'm) + verbo-ing</div>
          <div>He / She / It <strong>is</strong> (He's / She's / It's) + verbo-ing</div>
          <div>We / You / They <strong>are</strong> (We're / You're / They're) + verbo-ing</div>
        </div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="I'm cooking dinner right now." es="Estoy cocinando la cena ahora mismo." />
          <ExampleCard en="She's studying for her exam." es="Ella está estudiando para su examen." />
          <ExampleCard en="We're waiting for the bus." es="Estamos esperando el autobús." />
          <ExampleCard en="They're arguing about the game." es="Ellos están discutiendo sobre el juego." />
        </div>
      </div>

      {/* USOS */}
      <div className="content-section">
        <h3>2. ¿Cuándo Usarlo?</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          El presente continuo tiene dos usos principales.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div className="example-item">
            <div className="example-en">Uso 1: Ahora mismo, en este momento</div>
            <div className="example-es">La acción está pasando justo cuando hablas. <br /><em>"Don't talk to her, she's working."</em> (No le hables, está trabajando ahora mismo).</div>
          </div>
          <div className="example-item">
            <div className="example-en">Uso 2: Situación temporal (no necesariamente ahora mismo)</div>
            <div className="example-es">Algo que está pasando "estos días", pero no exactamente en este segundo. <br /><em>"I'm reading a great book these days."</em> (Estoy leyendo un gran libro estos días — no lo estoy leyendo en este instante).</div>
          </div>
        </div>

        <div className="insider-box">
          <div className="insider-title"><span>💡</span> Palabras señal (signal words)</div>
          <div className="insider-content">
            <strong>now</strong>, <strong>right now</strong>, <strong>at the moment</strong>, <strong>currently</strong>, <strong>at this time</strong>, <strong>these days</strong>, <strong>this week/month</strong>, y frases como <strong>"Look!"</strong> o <strong>"Listen!"</strong> normalmente indican presente continuo.
          </div>
        </div>
      </div>

      {/* NEGATIVO */}
      <div className="content-section">
        <h3>3. Forma Negativa</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Se agrega <strong>not</strong> después del verbo be.
        </p>

        <div className="grammar-formula" style={{ flexDirection: 'column', gap: '6px', fontSize: '1rem' }}>
          <div>I am not (I'm not) + verbo-ing</div>
          <div>He/She/It is not (isn't) + verbo-ing</div>
          <div>We/You/They are not (aren't) + verbo-ing</div>
        </div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="I'm not sleeping, I'm just resting my eyes." es="No estoy durmiendo, solo estoy descansando la vista." />
          <ExampleCard en="He isn't answering his phone." es="Él no está contestando su teléfono." />
          <ExampleCard en="We aren't watching TV right now." es="No estamos viendo televisión ahora mismo." />
        </div>
      </div>

      {/* PREGUNTAS */}
      <div className="content-section">
        <h3>4. Preguntas de Sí/No y Preguntas Wh-</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Para preguntas de sí/no, invierte el orden: be antes del sujeto. Para preguntas Wh-, la palabra Wh- va primero.
        </p>

        <div className="grammar-formula" style={{ flexDirection: 'column', gap: '6px', fontSize: '1rem' }}>
          <div>Am/Is/Are + sujeto + verbo-ing?</div>
          <div>Wh- + am/is/are + sujeto + verbo-ing?</div>
        </div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="Are you listening to me? — Yes, I am. / No, I'm not." es="¿Me estás escuchando? — Sí. / No." />
          <ExampleCard en="Is she coming to the party?" es="¿Ella va a venir a la fiesta?" />
          <ExampleCard en="What are you doing?" es="¿Qué estás haciendo?" />
          <ExampleCard en="Why is he shouting?" es="¿Por qué está gritando él?" />
          <ExampleCard en="Where are they going?" es="¿A dónde van ellos?" />
        </div>

        <div className="insider-box">
          <div className="insider-title"><span>🗣️</span> "What are you doing?" — la pregunta más común</div>
          <div className="insider-content">
            Es probablemente la pregunta más frecuente en presente continuo, tanto para preguntar literalmente qué haces en este momento, como (en tono informal, por texto) para simplemente iniciar una conversación, similar a "¿qué haces?" en español.
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen: Presente Continuo</h4>
          <p>Practica afirmaciones, negaciones y preguntas en presente continuo.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default Grammar1Topic;

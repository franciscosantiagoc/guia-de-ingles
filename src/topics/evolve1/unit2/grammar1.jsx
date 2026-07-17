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
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 2 • Gramática 1</span>
        <h2>El Verbo Be con He, She, It, We, You, They</h2>
        <p className="topic-intro">
          En la Unidad 1 aprendiste <em>I am</em> y <em>you are</em>. Ahora completa el paradigma del verbo <em>be</em> para hablar de tu familia y de otras personas.
        </p>
      </div>

      {/* PARADIGMA COMPLETO */}
      <div className="content-section">
        <h3>1. El Paradigma Completo de Be</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Solo hay tres formas del verbo <em>be</em> en presente: <strong>am</strong>, <strong>is</strong> y <strong>are</strong>. La forma depende del sujeto.
        </p>

        <div className="grammar-formula" style={{ flexDirection: 'column', gap: '6px', fontSize: '1rem' }}>
          <div>I <strong>am</strong> (I'm)</div>
          <div>He / She / It <strong>is</strong> (He's / She's / It's)</div>
          <div>We / You / They <strong>are</strong> (We're / You're / They're)</div>
        </div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="He is my brother. / He's my brother." es="Él es mi hermano." />
          <ExampleCard en="She is my cousin. / She's my cousin." es="Ella es mi prima." />
          <ExampleCard en="It is a nice photo. / It's a nice photo." es="Es una linda foto." />
          <ExampleCard en="We are a big family. / We're a big family." es="Somos una familia grande." />
          <ExampleCard en="They are my grandparents. / They're my grandparents." es="Ellos son mis abuelos." />
        </div>
      </div>

      {/* NEGATIVO */}
      <div className="content-section">
        <h3>2. Forma Negativa: is not / are not</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Igual que con <em>I am not</em>, se agrega <strong>not</strong> después del verbo be. Existen dos contracciones posibles para is/are + not.
        </p>

        <div className="grammar-formula" style={{ flexDirection: 'column', gap: '6px', fontSize: '1rem' }}>
          <div>He/She/It + is not (isn't)</div>
          <div>We/You/They + are not (aren't)</div>
        </div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="He is not my father. / He isn't my father." es="Él no es mi padre." />
          <ExampleCard en="She's not my sister. / She isn't my sister." es="Ella no es mi hermana." />
          <ExampleCard en="They are not twins. / They aren't twins." es="Ellos no son gemelos." />
          <ExampleCard en="We're not from Peru. / We aren't from Peru." es="No somos de Perú." />
        </div>

        <div className="insider-box">
          <div className="insider-title"><span>💡</span> Dos formas de contraer el negativo</div>
          <div className="insider-content">
            Puedes contraer el sujeto+verbo (<strong>she's not</strong>) o el verbo+not (<strong>she isn't</strong>). Ambas formas son correctas y muy comunes; <strong>isn't/aren't</strong> suena un poco más natural en conversación rápida.
          </div>
        </div>
      </div>

      {/* PREGUNTAS SÍ/NO */}
      <div className="content-section">
        <h3>3. Preguntas de Sí/No y Respuestas Cortas</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Para hacer una pregunta de sí/no con be, invierte el orden: el verbo va antes del sujeto.
        </p>

        <div className="grammar-formula">Is/Are + Sujeto + Complemento?</div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="Is he your brother? — Yes, he is. / No, he isn't." es="¿Es él tu hermano? — Sí, lo es. / No, no lo es." />
          <ExampleCard en="Is she your cousin? — Yes, she is. / No, she isn't." es="¿Es ella tu prima? — Sí. / No." />
          <ExampleCard en="Are they your grandparents? — Yes, they are. / No, they aren't." es="¿Son ellos tus abuelos? — Sí. / No." />
          <ExampleCard en="Are you siblings? — Yes, we are. / No, we aren't." es="¿Son hermanos ustedes? — Sí. / No." />
        </div>

        <div className="insider-box">
          <div className="insider-title"><span>⚠️</span> Nunca contraigas las respuestas cortas afirmativas</div>
          <div className="insider-content">
            Puedes decir <strong>"No, he isn't"</strong> pero NUNCA <em>"Yes, he's"</em>. En respuestas cortas afirmativas, el verbo be siempre va completo: <strong>"Yes, he is."</strong> / <strong>"Yes, they are."</strong>
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen: Be con He/She/It/We/You/They</h4>
          <p>Practica afirmaciones, negaciones y preguntas de sí/no con el verbo be.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default Grammar1Topic;

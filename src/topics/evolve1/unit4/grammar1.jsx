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
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 4 • Gramática 1</span>
        <h2>Presente Simple con I, You, We</h2>
        <p className="topic-intro">
          Usa el presente simple para hablar de cosas que te gustan, haces habitualmente o son ciertas en general — perfecto para hablar de tecnología y música.
        </p>
      </div>

      {/* AFIRMATIVO */}
      <div className="content-section">
        <h3>1. Forma Afirmativa</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Con <strong>I</strong>, <strong>you</strong> y <strong>we</strong>, el verbo se usa en su forma base — sin agregar nada.
        </p>

        <div className="grammar-formula">I / You / We + Verbo (forma base)</div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="I love this song." es="Me encanta esta canción." />
          <ExampleCard en="You use your phone a lot." es="Usas mucho tu teléfono." />
          <ExampleCard en="We listen to music every day." es="Escuchamos música todos los días." />
          <ExampleCard en="I download a new app every week." es="Descargo una app nueva cada semana." />
        </div>
      </div>

      {/* NEGATIVO */}
      <div className="content-section">
        <h3>2. Forma Negativa: don't</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Se agrega el auxiliar <strong>do not (don't)</strong> antes del verbo en forma base.
        </p>

        <div className="grammar-formula">I / You / We + don't + Verbo (forma base)</div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="I don't like rock music." es="No me gusta el rock." />
          <ExampleCard en="You don't use social media much." es="No usas mucho las redes sociales." />
          <ExampleCard en="We don't have a smart TV." es="No tenemos una tele inteligente." />
        </div>

        <div className="insider-box">
          <div className="insider-title"><span>⚠️</span> No olvides el verbo en forma base</div>
          <div className="insider-content">
            Después de <strong>don't</strong>, el verbo NUNCA lleva -s ni cambia de forma: ❌ <em>"I don't likes"</em> → ✅ <strong>"I don't like"</strong>. El auxiliar "don't" ya hace todo el trabajo gramatical.
          </div>
        </div>
      </div>

      {/* PREGUNTAS SÍ/NO */}
      <div className="content-section">
        <h3>3. Preguntas de Sí/No: Do...?</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Para preguntar, coloca <strong>Do</strong> al principio de la oración.
        </p>

        <div className="grammar-formula">Do + I / you / we + Verbo (forma base)?</div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="Do you like this band? — Yes, I do." es="¿Te gusta esta banda? — Sí." />
          <ExampleCard en="Do you stream music every day? — No, I don't." es="¿Transmites música todos los días? — No." />
          <ExampleCard en="Do we have Wi-Fi here? — Yes, we do." es="¿Tenemos wifi aquí? — Sí." />
        </div>

        <div className="insider-box">
          <div className="insider-title"><span>💡</span> Respuestas cortas</div>
          <div className="insider-content">
            Igual que con el verbo be, las respuestas cortas afirmativas nunca se contraen: ✅ <strong>"Yes, I do."</strong> — nunca <em>"Yes, I do't"</em>. Para negar: <strong>"No, I don't."</strong>
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen: Presente Simple (I/you/we)</h4>
          <p>Practica afirmaciones, negaciones y preguntas con do/don't.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default Grammar1Topic;

import React from 'react';

const Grammar1Topic = () => {
  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 1 • Gramática 1</span>
        <h2>El Verbo Be (I am / You are)</h2>
        <p className="topic-intro">Aprende a formular oraciones afirmativas y negativas para describirte a ti mismo y dirigirte a otra persona.</p>
      </div>

      <div className="content-section">
        <h3>1. Estructura Afirmativa</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          En inglés es muy común utilizar contracciones (formas cortas) al hablar para sonar más natural.
        </p>

        <div className="grammar-formula">
          I am (I'm) / You are (You're) + Complemento
        </div>

        <div className="examples-grid">
          <div className="example-item">
            <div className="example-en"><strong>I am</strong> a student. / <strong>I'm</strong> a student.</div>
            <div className="example-es">Yo soy estudiante. (Yo soy / Yo estoy)</div>
          </div>
          <div className="example-item">
            <div className="example-en"><strong>You are</strong> from Brazil. / <strong>You're</strong> from Brazil.</div>
            <div className="example-es">Tú eres de Brasil. (Tú eres / Tú estás)</div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h3>2. Estructura Negativa</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Para negar agregamos la palabra <strong>not</strong> inmediatamente después del verbo <em>be</em>.
        </p>

        <div className="grammar-formula">
          Sujeto + be + NOT + Complemento
        </div>

        <div className="examples-grid">
          <div className="example-item">
            <div className="example-en"><strong>I am not</strong> a doctor. / <strong>I'm not</strong> a doctor.</div>
            <div className="example-es">Yo no soy doctor. (Nota: No existe la contracción "I amn't")</div>
          </div>
          <div className="example-item">
            <div className="example-en"><strong>You are not</strong> Spanish. / <strong>You're not</strong> Spanish. / <strong>You aren't</strong> Spanish.</div>
            <div className="example-es">Tú no eres español. (Puedes contraer como "you're not" o "you aren't")</div>
          </div>
        </div>
      </div>

      <div className="insider-box">
        <div className="insider-title">
          <span>⚠️</span> Regla de Oro: ¡No omitas el sujeto!
        </div>
        <div className="insider-content">
          A diferencia del español donde podemos omitir el pronombre (decimos "Soy estudiante" en lugar de "Yo soy estudiante"), en inglés <strong>siempre</strong> se requiere expresar el sujeto de forma explícita. Decir <em>"Am student"</em> es incorrecto; lo correcto es decir <strong>"I am a student"</strong>.
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen: Verbo Be (I/You)</h4>
          <p>Comprueba si dominas el uso de contracciones y las negaciones de la gramática 1.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default Grammar1Topic;

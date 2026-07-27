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
  const spellingRules = [
    { rule: "Verbo + s (regla general)", examples: "wake → wakes, work → works, play → plays" },
    { rule: "Verbo termina en -s, -ss, -sh, -ch, -x, -o: + es", examples: "watch → watches, go → goes, do → does, fix → fixes" },
    { rule: "Verbo termina en consonante + y: y → ies", examples: "study → studies, try → tries, fly → flies" },
    { rule: "Verbo termina en vocal + y: + s (normal)", examples: "play → plays, enjoy → enjoys" },
    { rule: "have es irregular", examples: "have → has (no 'haves')" }
  ];

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 5 • Gramática 1</span>
        <h2>Presente Simple con He, She, It, They</h2>
        <p className="topic-intro">
          Ahora que ya usas el presente simple con I/you/we, aprende la forma con la tercera persona — la parte que casi todos olvidan: la -s final.
        </p>
      </div>

      {/* AFIRMATIVO */}
      <div className="content-section">
        <h3>1. Forma Afirmativa: la -s de la Tercera Persona</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Con <strong>he</strong>, <strong>she</strong> e <strong>it</strong>, el verbo lleva una <strong>-s</strong> (o -es) al final. Con <strong>they</strong>, el verbo se queda en su forma base, igual que con I/you/we.
        </p>

        <div className="grammar-formula">He / She / It + Verbo + s(es)</div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="She wakes up at seven." es="Ella se despierta a las siete." />
          <ExampleCard en="He works from Monday to Friday." es="Él trabaja de lunes a viernes." />
          <ExampleCard en="It starts at nine o'clock." es="Empieza a las nueve." />
          <ExampleCard en="My sister studies every night." es="Mi hermana estudia todas las noches." />
          <ExampleCard en="He watches TV after dinner." es="Él ve televisión después de cenar." />
          <ExampleCard en="They go to bed at eleven." es="Ellos se van a la cama a las once." />
        </div>

        <div className="insider-box">
          <div className="insider-title"><span>✍️</span> Reglas de ortografía para agregar -s / -es</div>
          <div className="insider-content">
            <table className="register-context-table">
              <thead>
                <tr><th>Regla</th><th>Ejemplos</th></tr>
              </thead>
              <tbody>
                {spellingRules.map((item, i) => (
                  <tr key={i}>
                    <td>{item.rule}</td>
                    <td>{item.examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* NEGATIVO */}
      <div className="content-section">
        <h3>2. Forma Negativa: doesn't</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Con he/she/it usamos <strong>doesn't</strong> (does not), y aquí es donde el verbo <strong>pierde</strong> la -s — porque "does" ya lleva la marca de tercera persona.
        </p>

        <div className="grammar-formula">He / She / It + doesn't + Verbo (forma base)</div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="She doesn't like waking up early." es="A ella no le gusta despertarse temprano." />
          <ExampleCard en="He doesn't work on weekends." es="Él no trabaja los fines de semana." />
          <ExampleCard en="It doesn't start until ten." es="No empieza hasta las diez." />
          <ExampleCard en="My brother doesn't cook dinner." es="Mi hermano no cocina la cena." />
        </div>

        <div className="insider-box">
          <div className="insider-title"><span>⚠️</span> El error más común</div>
          <div className="insider-content">
            ❌ <em>"She doesn't likes coffee."</em> → ✅ <strong>"She doesn't like coffee."</strong> Solo UNA parte de la oración lleva la -s: o el verbo (afirmativo) o el auxiliar "does" (negativo/pregunta), nunca ambos.
          </div>
        </div>
      </div>

      {/* PREGUNTAS SÍ/NO */}
      <div className="content-section">
        <h3>3. Preguntas de Sí/No: Does...?</h3>
        <div className="grammar-formula">Does + he / she / it + Verbo (forma base)?</div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="Does she wake up early? — Yes, she does." es="¿Ella se despierta temprano? — Sí." />
          <ExampleCard en="Does he work on Saturdays? — No, he doesn't." es="¿Él trabaja los sábados? — No." />
          <ExampleCard en="Does it start at nine? — Yes, it does." es="¿Empieza a las nueve? — Sí." />
        </div>

        <div className="insider-box">
          <div className="insider-title"><span>💡</span> Respuestas cortas</div>
          <div className="insider-content">
            Igual que con "do", las respuestas cortas nunca se contraen en afirmativo: ✅ <strong>"Yes, he does."</strong> — nunca <em>"Yes, he does't"</em>. Para negar: <strong>"No, he doesn't."</strong>
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen: Presente Simple (he/she/it/they)</h4>
          <p>Practica la -s de tercera persona, doesn't, y preguntas con Does.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default Grammar1Topic;

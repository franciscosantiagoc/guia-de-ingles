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
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 3 • Gramática 1</span>
        <h2>Adjetivos Posesivos y el Posesivo 's / s'</h2>
        <p className="topic-intro">
          Dos formas de decir "de quién es algo" en inglés: adjetivos posesivos (my, your, his...) y el posesivo con apóstrofe ('s / s').
        </p>
      </div>

      {/* ADJETIVOS POSESIVOS */}
      <div className="content-section">
        <h3>1. Adjetivos Posesivos</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Van siempre antes de un sustantivo, nunca solos. No cambian según el género del objeto (a diferencia del español).
        </p>

        <div className="grammar-formula" style={{ flexDirection: 'column', gap: '6px', fontSize: '1rem' }}>
          <div>I → <strong>my</strong> · You → <strong>your</strong> · He → <strong>his</strong> · She → <strong>her</strong></div>
          <div>It → <strong>its</strong> · We → <strong>our</strong> · You (plural) → <strong>your</strong> · They → <strong>their</strong></div>
        </div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="This is my house." es="Esta es mi casa." />
          <ExampleCard en="Is that your sofa?" es="¿Es ese tu sofá?" />
          <ExampleCard en="His bedroom is upstairs." es="Su dormitorio (de él) está arriba." />
          <ExampleCard en="Her kitchen is very modern." es="Su cocina (de ella) es muy moderna." />
          <ExampleCard en="The house has its own garden." es="La casa tiene su propio jardín." />
          <ExampleCard en="Our living room is small." es="Nuestra sala es pequeña." />
          <ExampleCard en="Their apartment has two bathrooms." es="Su departamento (de ellos) tiene dos baños." />
        </div>

        <div className="insider-box">
          <div className="insider-title"><span>⚠️</span> its vs. it's</div>
          <div className="insider-content">
            <strong>its</strong> (sin apóstrofe) = adjetivo posesivo ("the house and its garden"). <strong>it's</strong> (con apóstrofe) = contracción de "it is" ("it's a big house"). Son dos palabras totalmente distintas que suenan igual.
          </div>
        </div>
      </div>

      {/* POSESIVO 'S / S' */}
      <div className="content-section">
        <h3>2. El Posesivo 's (singular) y s' (plural)</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Para decir que algo le pertenece a una persona específica (no un pronombre), usa <strong>'s</strong> después del nombre si es singular, y solo <strong>'</strong> si el sustantivo ya termina en <strong>s</strong> (generalmente plural).
        </p>

        <div className="grammar-formula" style={{ flexDirection: 'column', gap: '6px', fontSize: '1rem' }}>
          <div>Dueño singular + <strong>'s</strong> + objeto → Sara's room</div>
          <div>Dueño plural (termina en s) + <strong>'</strong> + objeto → my parents' house</div>
        </div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="Sara's room is next to the kitchen." es="El cuarto de Sara está junto a la cocina." />
          <ExampleCard en="My brother's bed is really comfortable." es="La cama de mi hermano es muy cómoda." />
          <ExampleCard en="My parents' house has a big garden." es="La casa de mis padres tiene un jardín grande." />
          <ExampleCard en="The Smiths' apartment is downtown." es="El departamento de los Smith está en el centro." />
        </div>

        <div className="insider-box">
          <div className="insider-title"><span>💡</span> Plurales irregulares: sí llevan 's</div>
          <div className="insider-content">
            Los plurales irregulares que NO terminan en "s" (como <em>children</em> o <em>people</em>) sí llevan <strong>'s</strong> normal: <strong>the children's bedroom</strong> (el cuarto de los niños), <strong>people's opinions</strong> (las opiniones de la gente).
          </div>
        </div>
      </div>

      {/* PRÁCTICA COMBINADA */}
      <div className="content-section">
        <h3>3. Combinando Ambas Formas</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          En una misma oración es común usar adjetivos posesivos y el posesivo 's juntos.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="This is my sister's room. Her bed is next to the window." es="Este es el cuarto de mi hermana. Su cama está junto a la ventana." />
          <ExampleCard en="Is this your parents' sofa? Its color is beautiful." es="¿Es este el sofá de tus papás? Su color es hermoso." />
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen: Posesivos</h4>
          <p>Practica adjetivos posesivos y el posesivo 's / s' con vocabulario de la casa.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default Grammar1Topic;

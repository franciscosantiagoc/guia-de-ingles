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
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 6 • Gramática 1</span>
        <h2>There is / There are</h2>
        <p className="topic-intro">
          Usamos <em>there is</em> y <em>there are</em> para decir qué existe o qué hay en un lugar — perfecto para describir tu ciudad, tu casa o la naturaleza.
        </p>
      </div>

      {/* AFIRMATIVO */}
      <div className="content-section">
        <h3>1. Forma Afirmativa</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          <strong>There is</strong> (there's) se usa con sustantivos singulares o incontables. <strong>There are</strong> se usa con sustantivos plurales.
        </p>

        <div className="grammar-formula" style={{ flexDirection: 'column', gap: '6px', fontSize: '1rem' }}>
          <div>There is + a/an + sustantivo singular</div>
          <div>There are + número/some + sustantivo plural</div>
        </div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="There is a park near my house. / There's a park near my house." es="Hay un parque cerca de mi casa." />
          <ExampleCard en="There is a river in this town." es="Hay un río en este pueblo." />
          <ExampleCard en="There are three schools in this area." es="Hay tres escuelas en esta zona." />
          <ExampleCard en="There are some mountains behind the city." es="Hay algunas montañas detrás de la ciudad." />
          <ExampleCard en="There's a lot of traffic on this street." es="Hay mucho tráfico en esta calle." />
        </div>

        <div className="insider-box">
          <div className="insider-title"><span>💡</span> "There" no significa "ahí" aquí</div>
          <div className="insider-content">
            En esta estructura, <strong>there</strong> no se traduce como "ahí" — traduce simplemente como <strong>"hay"</strong>. No confundas esta palabra con "there" de lugar (revisa la sección de vocabulario sobre there/their/they're).
          </div>
        </div>
      </div>

      {/* CONTABLES E INCONTABLES */}
      <div className="content-section">
        <h3>2. Sustantivos Contables e Incontables</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Para saber si usar <strong>there is</strong> o <strong>there are</strong>, primero necesitas saber si el sustantivo es <strong>contable</strong> o <strong>incontable</strong>.
        </p>

        <div className="grammar-formula" style={{ flexDirection: 'column', gap: '6px', fontSize: '1rem' }}>
          <div>Contables: tienen plural (park → parks). Usan a/an, un número, some o any.</div>
          <div>Incontables: NO tienen plural. Siempre usan is, sin importar la cantidad.</div>
        </div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="There is a park near my house." es="Hay un parque cerca de mi casa. (contable, singular)" />
          <ExampleCard en="There are three parks in this town." es="Hay tres parques en este pueblo. (contable, plural)" />
          <ExampleCard en="There is a lot of traffic downtown." es="Hay mucho tráfico en el centro. (incontable, siempre 'is')" />
          <ExampleCard en="There is some information on the website." es="Hay información en el sitio web. (incontable)" />
          <ExampleCard en="There isn't much furniture in this apartment." es="No hay mucho mueble en este departamento. (incontable)" />
        </div>

        <div className="insider-box">
          <div className="insider-title"><span>💡</span> Incontables comunes en esta unidad</div>
          <div className="insider-content">
            Palabras como <strong>traffic</strong> (tráfico), <strong>noise</strong> (ruido), <strong>information</strong> (información), <strong>advice</strong> (consejo), <strong>furniture</strong> (mobiliario), <strong>money</strong> (dinero), <strong>water</strong> (agua) y <strong>time</strong> (tiempo) son incontables en inglés. Aunque en español digas "hay muchos consejos", en inglés siempre es <em>"there is a lot of advice"</em> — nunca <em>"there are advices"</em>.
          </div>
        </div>
      </div>

      {/* NEGATIVO */}
      <div className="content-section">
        <h3>3. Forma Negativa</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Se agrega <strong>not</strong> después de is/are. Con plurales, usualmente usamos <strong>any</strong> en vez de <strong>some</strong> en negativo.
        </p>

        <div className="grammar-formula" style={{ flexDirection: 'column', gap: '6px', fontSize: '1rem' }}>
          <div>There is not (isn't) + a/an + sustantivo singular</div>
          <div>There are not (aren't) + any + sustantivo plural</div>
        </div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="There isn't a hospital in this village." es="No hay un hospital en este pueblo." />
          <ExampleCard en="There isn't any milk in the fridge." es="No hay leche en el refrigerador." />
          <ExampleCard en="There aren't any mountains near the coast." es="No hay montañas cerca de la costa." />
          <ExampleCard en="There aren't any good restaurants downtown." es="No hay buenos restaurantes en el centro." />
        </div>

        <div className="insider-box">
          <div className="insider-title"><span>⚠️</span> Some vs. Any</div>
          <div className="insider-content">
            Usa <strong>some</strong> en afirmaciones (<em>"There are some trees" / "There is some water"</em>) y <strong>any</strong> en negaciones y preguntas (<em>"There aren't any trees" / "There isn't any water" / "Are there any trees?"</em>). La regla funciona igual para contables plurales e incontables.
          </div>
        </div>
      </div>

      {/* PREGUNTAS */}
      <div className="content-section">
        <h3>4. Preguntas de Sí/No y Respuestas Cortas</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Para preguntar, invierte el orden: <strong>Is/Are</strong> va antes de <strong>there</strong>.
        </p>

        <div className="grammar-formula">Is there + a/an + sustantivo? / Are there + any + sustantivo?</div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="Is there a bank near here? — Yes, there is. / No, there isn't." es="¿Hay un banco cerca de aquí? — Sí. / No." />
          <ExampleCard en="Is there a pharmacy on this street?" es="¿Hay una farmacia en esta calle?" />
          <ExampleCard en="Are there any parks in your neighborhood? — Yes, there are." es="¿Hay parques en tu colonia? — Sí." />
          <ExampleCard en="Are there any good beaches near the city? — No, there aren't." es="¿Hay buenas playas cerca de la ciudad? — No." />
        </div>

        <div className="insider-box">
          <div className="insider-title"><span>⚠️</span> Respuestas cortas correctas</div>
          <div className="insider-content">
            Las respuestas cortas siempre usan <strong>there</strong>, no "it": <strong>"Yes, there is"</strong> / <strong>"No, there aren't"</strong>. Nunca digas <em>"Yes, it is"</em> para responder a "Is there...?".
          </div>
        </div>
      </div>

      {/* PREGUNTAS CON HOW MANY / HOW MUCH */}
      <div className="content-section">
        <h3>5. Preguntas con How many...? y How much...?</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Para preguntar por cantidad, usa <strong>How many</strong> con sustantivos contables (plural) y <strong>How much</strong> con sustantivos incontables.
        </p>

        <div className="grammar-formula" style={{ flexDirection: 'column', gap: '6px', fontSize: '1rem' }}>
          <div>How many + sustantivo contable plural + are there (+ lugar)?</div>
          <div>How much + sustantivo incontable + is there (+ lugar)?</div>
        </div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ExampleCard en="How many schools are there in this town? — There are two." es="¿Cuántas escuelas hay en este pueblo? — Hay dos." />
          <ExampleCard en="How many rooms are there in your house?" es="¿Cuántas habitaciones hay en tu casa?" />
          <ExampleCard en="How much traffic is there in the morning? — There's a lot." es="¿Cuánto tráfico hay en la mañana? — Hay mucho." />
          <ExampleCard en="How much time is there before the bus leaves?" es="¿Cuánto tiempo hay antes de que salga el autobús?" />
        </div>

        <div className="insider-box">
          <div className="insider-title"><span>💡</span> Much, Many y A lot of</div>
          <div className="insider-content">
            <strong>Many</strong> (contables) y <strong>much</strong> (incontables) se usan sobre todo en <strong>preguntas y negaciones</strong>: <em>"There aren't many parks" / "There isn't much time"</em>. En afirmaciones, lo más natural es usar <strong>a lot of</strong> con ambos tipos: <em>"There are a lot of parks" / "There is a lot of traffic"</em>.
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen: There is / There are</h4>
          <p>Practica afirmaciones, negaciones y preguntas con there is/are.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default Grammar1Topic;

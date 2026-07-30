import React, { useState } from 'react';
import WritingFeedback from '../../../components/WritingFeedback';

const speak = (text) => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }
};

const SkillsTopic = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const toggleCheck = (key) => setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));

  const readingText = "My town is called Millbrook. It's small, but there are a lot of nice places here. There is a beautiful park in the center of town, and there's a small lake next to it. There are always families walking their dogs there on weekends. Near the park, there is a library, a bakery, and a small museum. There isn't a train station in Millbrook, but there's a bus station, so it's easy to travel to the city. There aren't any big malls here, but there are some good local shops. Behind the town, there are some hills, and there is a trail that goes all the way to the top. On a clear day, you can see the whole valley from there. I love my town because there is always something to do, but it's never too crowded or noisy.";

  const readingTextEs = "Mi pueblo se llama Millbrook. Es pequeño, pero hay muchos lugares bonitos aquí. Hay un parque hermoso en el centro del pueblo, y hay un pequeño lago junto a él. Siempre hay familias paseando a sus perros ahí los fines de semana. Cerca del parque, hay una biblioteca, una panadería y un pequeño museo. No hay una estación de tren en Millbrook, pero hay una central de autobuses, así que es fácil viajar a la ciudad. No hay centros comerciales grandes aquí, pero hay algunas buenas tiendas locales. Detrás del pueblo, hay algunas colinas, y hay un sendero que llega hasta la cima. En un día despejado, puedes ver todo el valle desde ahí. Amo mi pueblo porque siempre hay algo que hacer, pero nunca está demasiado lleno ni ruidoso.";

  const comprehensionQuestions = [
    { q: "What is in the center of Millbrook?", a: "A beautiful park with a small lake next to it." },
    { q: "What do families do at the park on weekends?", a: "They walk their dogs." },
    { q: "Is there a train station in Millbrook?", a: "No, there isn't, but there's a bus station." },
    { q: "Are there any big malls in Millbrook?", a: "No, there aren't, but there are some good local shops." },
    { q: "What is behind the town?", a: "There are some hills and a trail to the top." },
    { q: "Why does the writer love their town?", a: "Because there is always something to do, but it's never too crowded or noisy." }
  ];

  const writingChecklist = [
    { key: "there-is", text: "Usé 'there is' con al menos un sustantivo singular." },
    { key: "there-are", text: "Usé 'there are' con al menos un sustantivo plural." },
    { key: "negative", text: "Usé una forma negativa (there isn't / there aren't)." },
    { key: "question-or-freq", text: "Usé una pregunta con there o un adverbio de frecuencia (there is usually...)." },
    { key: "places-vocab", text: "Usé al menos 4 palabras de lugares o naturaleza de esta unidad." },
    { key: "opinion", text: "Di mi opinión sobre el lugar al final." }
  ];

  const speakingPrompts = [
    "Describe your town or neighborhood using there is / there are.",
    "Talk about a place with beautiful nature you have visited.",
    "Give directions from your house to your favorite place in town.",
    "Describe what there isn't in your neighborhood that you wish there was.",
    "Time to speak: Would you recommend your town to a tourist? Why or why not?"
  ];

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 6 • Destrezas</span>
        <h2>Reading, Writing y Speaking: Lugares y Naturaleza</h2>
        <p className="topic-intro">
          Lee sobre un pueblo pequeño, practica tu comprensión, escribe sobre tu propio lugar y practica hablar de él.
        </p>
      </div>

      {/* READING */}
      <div className="content-section">
        <h3>1. Reading: Mi Pueblo</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Lee este texto original sobre el pueblo de Millbrook. Fíjate en cómo se usa "there is / there are" en afirmativo, negativo y con adverbios de frecuencia.
        </p>

        <div className="example-item">
          <div className="example-en" style={{ justifyContent: 'space-between', marginBottom: '10px' }}>
            <strong>My Town: Millbrook</strong>
            <button className="audio-btn" onClick={() => speak(readingText)} title="Escuchar texto completo">🔊</button>
          </div>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '10px' }}>{readingText}</p>
          <div className="example-es" style={{ fontStyle: 'italic' }}>{readingTextEs}</div>
        </div>
      </div>

      {/* COMPRENSIÓN */}
      <div className="content-section">
        <h3>2. Comprensión de Lectura</h3>
        <div className="examples-grid">
          {comprehensionQuestions.map((item, index) => (
            <details key={index} className="example-item" style={{ cursor: 'pointer' }}>
              <summary style={{ fontWeight: 600, color: 'var(--text-main)' }}>{index + 1}. {item.q}</summary>
              <div className="example-es" style={{ marginTop: '8px' }}>✅ {item.a}</div>
            </details>
          ))}
        </div>
      </div>

      {/* WRITING */}
      <div className="content-section">
        <h3>3. Writing: Describe tu Ciudad o Pueblo</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Escribe un párrafo corto describiendo tu ciudad, pueblo o colonia, usando "there is / there are" para hablar de los lugares que hay (o no hay).
        </p>

        <div className="grammar-formula" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '6px', fontSize: '1rem' }}>
          <div>There is a/an <em>[lugar]</em> in/near my town.</div>
          <div>There are some <em>[lugares]</em>, but there isn't/aren't <em>[algo que falta]</em>.</div>
          <div>I like my town because <em>[razón]</em>.</div>
        </div>

        <p style={{ margin: '16px 0', color: 'var(--text-muted)' }}>Antes de terminar, revisa tu texto:</p>

        <div className="examples-grid" style={{ gridTemplateColumns: '1fr' }}>
          {writingChecklist.map((item) => (
            <label key={item.key} className="example-item" style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={!!checkedItems[item.key]}
                onChange={() => toggleCheck(item.key)}
                style={{ width: '18px', height: '18px', accentColor: 'var(--active-accent)' }}
              />
              <span style={{ textDecoration: checkedItems[item.key] ? 'line-through' : 'none', opacity: checkedItems[item.key] ? 0.6 : 1 }}>
                {item.text}
              </span>
            </label>
          ))}
        </div>

        <p style={{ margin: '20px 0 8px', color: 'var(--text-muted)' }}>
          ¿Quieres que una IA revise tu texto? Escríbelo abajo y recibe retroalimentación al instante.
        </p>
        <WritingFeedback
          taskPrompt="Describe tu ciudad, pueblo o colonia usando there is / there are, incluyendo qué lugares hay y qué no hay."
          focus="there is / there are (afirmativo, negativo, preguntas), some/any, y vocabulario de lugares y naturaleza"
          level="A1"
          placeholder="Example: There is a park near my house. There are some good restaurants, but there isn't..."
        />
      </div>

      {/* SPEAKING */}
      <div className="content-section">
        <h3>4. Time to Speak: Tu Lugar en Voz Alta</h3>
        <div className="examples-grid">
          {speakingPrompts.map((prompt, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{prompt}</span>
                <button className="audio-btn" onClick={() => speak(prompt)} title="Escuchar">🔊</button>
              </div>
            </div>
          ))}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>🎤</span> Reto de Speaking</div>
          <div className="insider-content">
            Habla durante 1 minuto describiendo tu colonia o pueblo usando "there is / there are" y da indicaciones para llegar a tu lugar favorito ahí. Grábate y escúchate — ¿pronunciaste "there", "their" y "they're" de forma diferente aunque suenen igual? (Recuerda: se distinguen por el contexto, no por el sonido).
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen: Destrezas Integradas</h4>
          <p>Combina lectura, escritura y vocabulario de esta unidad en un quiz corto.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default SkillsTopic;

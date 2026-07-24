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

  const reviews = [
    {
      product: "SoundWave Pro Earbuds",
      stars: "★★★★☆",
      body: "I use these earbuds every day, and I really love them. The sound is great, but the battery doesn't last very long. They're comfortable, and they connect to my phone really fast. I don't love the charging case because it's a bit big, but overall, it's a great product.",
      es: "Uso estos audífonos todos los días, y me encantan. El sonido es genial, pero la batería no dura mucho. Son cómodos, y se conectan a mi teléfono muy rápido. No me encanta el estuche de carga porque es un poco grande, pero en general, es un gran producto."
    },
    {
      product: "TimeFit Smartwatch",
      stars: "★★★☆☆",
      body: "This is an okay smartwatch. I like the design because it's really modern, but the screen isn't very bright. I use it to track my steps and my sleep, and it works well for that. I don't recommend it for calls, though, because the microphone isn't very clear.",
      es: "Este es un reloj inteligente aceptable. Me gusta el diseño porque es muy moderno, pero la pantalla no es muy brillante. Lo uso para contar mis pasos y mi sueño, y funciona bien para eso. Sin embargo, no lo recomiendo para llamadas, porque el micrófono no es muy claro."
    }
  ];

  const comprehensionQuestions = [
    { q: "What does the reviewer like about the SoundWave Pro Earbuds?", a: "The sound quality, comfort, and fast connection." },
    { q: "What's the problem with the earbuds' battery?", a: "It doesn't last very long." },
    { q: "How many stars does the smartwatch get?", a: "Three stars (★★★☆☆)." },
    { q: "What is the smartwatch good for?", a: "Tracking steps and sleep." },
    { q: "Why doesn't the reviewer recommend the smartwatch for calls?", a: "Because the microphone isn't very clear." }
  ];

  const writingChecklist = [
    { key: "product-name", text: "Mencioné el nombre del producto al inicio." },
    { key: "but", text: "Usé \"but\" para contrastar un punto positivo y uno negativo." },
    { key: "because", text: "Usé \"because\" para explicar una razón." },
    { key: "adjectives", text: "Usé al menos 2 adjetivos antes de un sustantivo (a great product, a fast connection...)." },
    { key: "opinion", text: "Di mi opinión clara al final (recomendarlo o no)." },
    { key: "present-simple", text: "Usé presente simple con I (I use, I like, I don't recommend...)." }
  ];

  const speakingPrompts = [
    "Talk about something you love or like using every day.",
    "Talk about your favorite piece of technology. Why do you like it?",
    "Discuss what phone plan or device would be good for you and why.",
    "Talk about how you communicate with your friends and family (text, call, video call...).",
    "Time to speak: Talk about your favorite music. What genre and artists do you like?"
  ];

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 4 • Destrezas</span>
        <h2>Reseñas, Escritura y Speaking: Tecnología que Usamos</h2>
        <p className="topic-intro">
          Lee reseñas originales de productos, escribe la tuya, y habla sobre la tecnología y música que forman parte de tu día a día.
        </p>
      </div>

      {/* READING */}
      <div className="content-section">
        <h3>1. Reading: Reseñas de Productos</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Lee estas dos reseñas originales de productos tecnológicos. Fíjate cómo usan <strong>but</strong> y <strong>because</strong> para dar una opinión balanceada.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {reviews.map((review, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between', marginBottom: '8px' }}>
                <strong>{review.product}</strong>
                <button className="audio-btn" onClick={() => speak(review.body)} title="Escuchar reseña completa">🔊</button>
              </div>
              <div style={{ color: 'var(--active-accent)', marginBottom: '8px' }}>{review.stars}</div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '10px' }}>{review.body}</p>
              <div className="example-es" style={{ fontStyle: 'italic' }}>{review.es}</div>
            </div>
          ))}
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
        <h3>3. Writing: Escribe tu Propia Reseña</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Escribe una reseña corta de un producto de tecnología que usas (real o inventado). Usa <strong>but</strong> para contrastar y <strong>because</strong> para justificar tu opinión.
        </p>

        <div className="grammar-formula" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '6px', fontSize: '1rem' }}>
          <div>I use <em>[producto]</em> every day, and I really like it.</div>
          <div>I like it because <em>[razón]</em>, but <em>[punto negativo]</em>.</div>
          <div>I recommend / don't recommend it because <em>[razón final]</em>.</div>
        </div>

        <p style={{ margin: '16px 0', color: 'var(--text-muted)' }}>Antes de terminar, revisa tu reseña:</p>

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
          taskPrompt="Escribe una reseña corta de un producto de tecnología que usas (real o inventado), usando but y because."
          focus="presente simple con I (do/don't), a/an y adjetivos antes del sustantivo, but para contrastar, because para justificar"
          level="A1"
          placeholder="Example: I use... every day, and I really like it. I like it because..., but..."
        />
      </div>

      {/* SPEAKING */}
      <div className="content-section">
        <h3>4. Time to Speak: Tu Música Favorita</h3>
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
            Habla durante 1 minuto sobre tu app o dispositivo favorito, usando presente simple, "but" para un punto negativo, y "because" para justificarlo. Grábate y escúchate — ¿acentuaste bien las palabras de contenido?
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

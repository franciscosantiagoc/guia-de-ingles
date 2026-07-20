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

  const emails = [
    {
      from: "Priya (host)",
      subject: "Welcome to Burnaby!",
      body: "Hi! Welcome to my home-share. My name's Priya, and it's really nice to have you here. My house has three bedrooms, a big kitchen, and a small garden. Your room is upstairs, next to the bathroom. It's not huge, but it's cozy and it has a comfortable bed and a desk. Feel free to use the kitchen anytime — help yourself to coffee, tea, or snacks! What time is your flight tomorrow?",
      es: "¡Hola! Bienvenido/a a mi home-share. Me llamo Priya, y es un gusto tenerte aquí. Mi casa tiene tres recámaras, una cocina grande y un jardín pequeño. Tu cuarto está arriba, junto al baño. No es enorme, pero es acogedor y tiene una cama cómoda y un escritorio. Siéntete libre de usar la cocina cuando quieras — sírvete café, té o snacks. ¿A qué hora es tu vuelo mañana?"
    },
    {
      from: "You (guest)",
      subject: "RE: Welcome to Burnaby!",
      body: "Hi Priya, thank you so much! My flight lands at 3pm. Quick question — what does 'home-share' mean exactly? Is it different from a hotel? Also, is there a laundry room? I have a lot of clothes with me!",
      es: "Hola Priya, ¡muchas gracias! Mi vuelo llega a las 3pm. Una pregunta rápida — ¿qué significa exactamente 'home-share'? ¿Es diferente de un hotel? Además, ¿hay un cuarto de lavado? ¡Traigo mucha ropa conmigo!"
    },
    {
      from: "Priya (host)",
      subject: "RE: RE: Welcome to Burnaby!",
      body: "Great question! A home-share is when someone rents a room in a house instead of a whole hotel room — it's cheaper, and you get to live like a local. And yes, there's a laundry room in the basement, next to the garage. See you at 3pm!",
      es: "¡Buena pregunta! Un home-share es cuando alguien renta un cuarto en una casa en vez de un cuarto de hotel completo — es más barato, y vives como un local. Y sí, hay un cuarto de lavado en el sótano, junto al garaje. ¡Nos vemos a las 3pm!"
    }
  ];

  const comprehensionQuestions = [
    { q: "How many bedrooms does Priya's house have?", a: "Three bedrooms." },
    { q: "Where is the guest's room?", a: "Upstairs, next to the bathroom." },
    { q: "What can the guest use anytime?", a: "The kitchen (coffee, tea, or snacks)." },
    { q: "What does 'home-share' mean, according to Priya?", a: "Renting a room in a house instead of a hotel room." },
    { q: "Where is the laundry room?", a: "In the basement, next to the garage." }
  ];

  const writingChecklist = [
    { key: "greeting", text: "Empecé con un saludo (Hi.../Hello...) y terminé con una despedida." },
    { key: "rooms", text: "Describí al menos 2 habitaciones de la casa." },
    { key: "possessives", text: "Usé un adjetivo posesivo (my/your/his/her) o un posesivo con 's." },
    { key: "it-is", text: "Usé \"it is / it's\" para describir un objeto o la casa." },
    { key: "question-marks", text: "Revisé que cada pregunta termine con signo de interrogación (?)." },
    { key: "offer", text: "Incluí un ofrecimiento de comida o bebida." }
  ];

  const speakingPrompts = [
    "Describe a house in a picture: What rooms does it have?",
    "Talk about the rooms in your home. Which one is your favorite?",
    "Talk about a piece of unusual furniture you have or have seen.",
    "Offer a friend a drink or snack, and have them accept or decline.",
    "Time to speak: If you were moving into a new home, what 3 pieces of furniture would you buy first? Why?"
  ];

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 3 • Destrezas</span>
        <h2>Reading, Email y Speaking: Un Home-Share en Burnaby</h2>
        <p className="topic-intro">
          Lee un intercambio de correos original sobre un home-share, escribe tu propio email, y practica hablar de tu casa y tus muebles.
        </p>
      </div>

      {/* READING */}
      <div className="content-section">
        <h3>1. Reading: "A Home-Share in Burnaby"</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Lee este intercambio original de correos entre una anfitriona (host) y su huésped (guest) antes de mudarse a un home-share.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: '1fr' }}>
          {emails.map((email, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span><strong>{email.from}</strong> — <em>{email.subject}</em></span>
                <button className="audio-btn" onClick={() => speak(email.body)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, margin: '10px 0' }}>{email.body}</p>
              <div className="example-es" style={{ fontStyle: 'italic' }}>{email.es}</div>
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
        <h3>3. Writing: Un Email sobre un Home-Share</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Escribe un email como anfitrión/a, describiendo tu casa a un futuro huésped. Presta atención especial a los signos de interrogación: en inglés, toda pregunta escrita necesita <strong>?</strong> al final — nunca se omite como a veces pasa en mensajes informales en español.
        </p>

        <div className="grammar-formula" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '6px', fontSize: '1rem' }}>
          <div>Hi! Welcome to my home. My name's <em>[nombre]</em>.</div>
          <div>My house has <em>[número]</em> bedrooms, a <em>[adjetivo]</em> kitchen, and a <em>[habitación]</em>.</div>
          <div>Your room is <em>[preposición de lugar]</em>. It's <em>[adjetivo]</em>, and it has <em>[muebles]</em>.</div>
          <div>Would you like anything to eat or drink when you arrive?</div>
        </div>

        <p style={{ margin: '16px 0', color: 'var(--text-muted)' }}>Antes de enviar tu email, revisa:</p>

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
          taskPrompt="Escribe un email como anfitrión/a describiendo tu casa a un futuro huésped."
          focus="adjetivos posesivos y posesivo con 's, it is/it's, preguntas de información con be, ofrecer comida o bebida"
          level="A1"
          placeholder="Example: Hi! Welcome to my home. My house has..."
        />
      </div>

      {/* SPEAKING */}
      <div className="content-section">
        <h3>4. Time to Speak: Tu Casa Ideal</h3>
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
            Describe tu casa completa en menos de 1 minuto: cuántas habitaciones tiene, qué muebles hay en cada una, y termina ofreciéndole algo de tomar a un invitado imaginario. Grábate y escúchate — ¿usaste "it's" y algún posesivo con 's?
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

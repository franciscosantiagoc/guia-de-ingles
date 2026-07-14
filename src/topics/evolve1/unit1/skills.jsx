import React, { useState } from 'react';
import WritingFeedback from '../../../components/WritingFeedback';

const SkillsTopic = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleCheck = (key) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const bios = [
    {
      name: "Lena Kowalski",
      text: "Hi! I'm Lena. I'm from Poland, but I'm not in Poland now — I'm a student in Dublin. I'm 22 years old. I'm a part-time waitress and a full-time art student. My favorite number is seven. Nice to meet you!",
      es: "¡Hola! Soy Lena. Soy de Polonia, pero ahora no estoy en Polonia: soy estudiante en Dublín. Tengo 22 años. Soy mesera de medio tiempo y estudiante de arte de tiempo completo. Mi número favorito es el siete. ¡Un gusto conocerte!"
    },
    {
      name: "Diego Fuentes",
      text: "Hello, I'm Diego. I'm Mexican, and I'm an engineer. I'm not from Mexico City — I'm from Guadalajara. I'm 30, and I'm new here. My email is diego.f at mail dot com. It's great to meet new people!",
      es: "Hola, soy Diego. Soy mexicano, y soy ingeniero. No soy de la Ciudad de México, soy de Guadalajara. Tengo 30 años y soy nuevo aquí. Mi correo es diego.f arroba mail punto com. ¡Es genial conocer gente nueva!"
    }
  ];

  const comprehensionQuestions = [
    { q: "Lena is from Poland. True or false?", a: "True" },
    { q: "What is Lena's job?", a: "She's a part-time waitress and an art student." },
    { q: "Is Diego from Mexico City?", a: "No, he's from Guadalajara." },
    { q: "How old is Diego?", a: "He's 30." }
  ];

  const writingChecklist = [
    { key: "capital-i", text: "Escribí el pronombre \"I\" siempre en mayúscula." },
    { key: "capital-names", text: "Usé mayúscula inicial en nombres, países y nacionalidades." },
    { key: "period", text: "Cada oración termina con un punto (.)." },
    { key: "contractions", text: "Usé contracciones naturales: I'm, it's, I'm not." },
    { key: "spelling", text: "Revisé la ortografía de números y países." }
  ];

  const speakingPrompts = [
    "Hello! / Hi! What's your name?",
    "Nice to meet you! Where are you from?",
    "What's your job? / What do you do?",
    "How old are you? (¡Solo entre amigos o en contextos informales!)",
    "This is my friend, Sara. Sara, this is Tom."
  ];

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 1 • Destrezas</span>
        <h2>Lectura, Perfil Escrito y Speaking: Conoce gente nueva</h2>
        <p className="topic-intro">
          Practica las cuatro destrezas con un escenario real: una fiesta de bienvenida donde todos se presentan por primera vez.
        </p>
      </div>

      {/* READING */}
      <div className="content-section">
        <h3>1. Reading: Dos perfiles nuevos</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Lee los dos perfiles cortos. Son historias originales creadas para practicar el verbo <em>be</em> y el vocabulario de la unidad. Usa el botón 🔊 para escuchar la pronunciación completa.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {bios.map((bio, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between', marginBottom: '8px' }}>
                <strong>{bio.name}</strong>
                <button className="audio-btn" onClick={() => speak(bio.text)} title="Escuchar perfil completo">🔊</button>
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '10px' }}>{bio.text}</p>
              <div className="example-es" style={{ fontStyle: 'italic' }}>{bio.es}</div>
            </div>
          ))}
        </div>
      </div>

      {/* READING COMPREHENSION */}
      <div className="content-section">
        <h3>2. Comprensión de lectura</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Responde según los perfiles de Lena y Diego. Intenta contestar en inglés antes de revisar la respuesta.
        </p>
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
        <h3>3. Writing: Escribe tu propio perfil</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Usa esta plantilla para escribir tu perfil de presentación, siguiendo el mismo estilo que Lena y Diego.
        </p>

        <div className="grammar-formula" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '6px', fontSize: '1rem' }}>
          <div>Hi / Hello, I'm <em>[nombre]</em>.</div>
          <div>I'm <em>[nacionalidad]</em>, and I'm <em>[número]</em> years old.</div>
          <div>I'm a/an <em>[trabajo o profesión]</em>.</div>
          <div>I'm not from <em>[lugar]</em> — I'm from <em>[tu ciudad real]</em>.</div>
          <div>Nice to meet you!</div>
        </div>

        <p style={{ margin: '16px 0', color: 'var(--text-muted)' }}>
          Antes de dar por terminado tu perfil, revisa esta lista (estrategia real: <strong>Check spelling</strong>):
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: '1fr' }}>
          {writingChecklist.map((item) => (
            <label
              key={item.key}
              className="example-item"
              style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
            >
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
          taskPrompt="Escribe tu propio perfil de presentación, como Lena y Diego."
          focus="verbo be con I (contracciones I'm, I'm not), a/an antes de una profesión, mayúsculas en nombres y nacionalidades"
          level="A1"
          placeholder="Example: Hi! I'm... I'm from... I'm a/an..."
        />
      </div>

      {/* SPEAKING */}
      <div className="content-section">
        <h3>4. Time to speak: La fiesta de bienvenida</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Imagina que estás en una fiesta para estudiantes nuevos. Practica en voz alta (solo o con otra persona) usando estas frases. Escúchalas primero para copiar el ritmo natural.
        </p>

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
          <div className="insider-title">
            <span>🎤</span> Reto de Speaking
          </div>
          <div className="insider-content">
            Preséntate en voz alta en menos de 30 segundos: nombre, nacionalidad, edad, trabajo/estudios y una despedida. Grábate con el celular y escúchate — ¿usaste el sujeto "I" en cada oración?
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen: Destrezas Integradas</h4>
          <p>Combina lectura, escritura y comprensión con un quiz corto sobre esta unidad.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default SkillsTopic;

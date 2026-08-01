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

  const readingText = "My name is Sofia and I have a lot of hobbies. I can cook very well — I can make Italian food and I can bake bread easily. I can also paint, but I can't draw people very well; my portraits always look strange! I can speak two languages fluently, but I can't speak French at all. At work, I can manage a team and I can give presentations confidently, but I can't negotiate very well — I always agree too quickly. My biggest talent is music: I can play the guitar and I can sing beautifully, according to my friends. I can't play the piano, though. I would love to learn one day. Could you help me find a good teacher?";

  const readingTextEs = "Me llamo Sofía y tengo muchos pasatiempos. Sé cocinar muy bien — sé hacer comida italiana y sé hornear pan fácilmente. También sé pintar, pero no sé dibujar personas muy bien; ¡mis retratos siempre se ven raros! Sé hablar dos idiomas con fluidez, pero no sé hablar nada de francés. En el trabajo, sé dirigir un equipo y sé dar presentaciones con confianza, pero no sé negociar muy bien — siempre acepto demasiado rápido. Mi mayor talento es la música: sé tocar la guitarra y canto hermosamente, según mis amigos. No sé tocar el piano. Me encantaría aprender algún día. ¿Podrías ayudarme a encontrar un buen maestro?";

  const comprehensionQuestions = [
    { q: "What two things can Sofia cook or bake well?", a: "Italian food and bread." },
    { q: "What can't Sofia draw very well?", a: "People (her portraits look strange)." },
    { q: "How many languages can Sofia speak fluently?", a: "Two languages (but not French)." },
    { q: "What can Sofia do confidently at work?", a: "Manage a team and give presentations." },
    { q: "What skill does Sofia say she's not very good at, at work?", a: "Negotiating." },
    { q: "What does Sofia ask for help with at the end?", a: "Finding a good piano teacher." }
  ];

  const writingChecklist = [
    { key: "can-affirmative", text: "Usé 'can' en afirmativo para hablar de una habilidad (I can...)." },
    { key: "cant-negative", text: "Usé 'can't' para hablar de algo que no sé hacer (I can't...)." },
    { key: "adverb-manner", text: "Usé al menos un adverbio de modo (well, beautifully, easily, carefully...)." },
    { key: "no-good-error", text: "No usé 'good' como adverbio (dije 'sings well', no 'sings good')." },
    { key: "help-phrase", text: "Incluí al menos una frase para pedir u ofrecer ayuda." },
    { key: "variety", text: "Mencioné habilidades de al menos dos categorías diferentes (deportes, arte, tecnología, negocios, etc.)." }
  ];

  const speakingPrompts = [
    "Talk about three things you can do well, using adverbs of manner.",
    "Talk about two things you can't do, and say if you'd like to learn them.",
    "Describe a talent you're proud of. How did you learn it?",
    "Role-play: ask a friend for help learning a new skill, using polite phrases.",
    "Time to speak: Compare your skills with a family member's skills using can/can't."
  ];

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 8 • Destrezas</span>
        <h2>Reading, Writing y Speaking: Habilidades y Talentos</h2>
        <p className="topic-intro">
          Lee sobre las habilidades de Sofía, practica tu comprensión, escribe sobre tus propios talentos usando can/can't y adverbios de modo, y practica pidiendo ayuda en voz alta.
        </p>
      </div>

      {/* READING */}
      <div className="content-section">
        <h3>1. Reading: Mis Habilidades y Talentos</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Lee este texto original sobre Sofía. Fíjate cómo combina "can" y "can't" con adverbios de modo (well, easily, beautifully, confidently).
        </p>

        <div className="example-item">
          <div className="example-en" style={{ justifyContent: 'space-between', marginBottom: '10px' }}>
            <strong>My Skills and Talents</strong>
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
        <h3>3. Writing: Mis Habilidades y Talentos</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Escribe un párrafo corto sobre tus habilidades, usando can/can't y al menos un adverbio de modo.
        </p>

        <div className="grammar-formula" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '6px', fontSize: '1rem' }}>
          <div>I can <em>[habilidad]</em> [adverbio de modo].</div>
          <div>I can't <em>[habilidad]</em> very well, but I can <em>[otra habilidad]</em>.</div>
          <div>Could you help me learn <em>[habilidad nueva]</em>?</div>
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
          taskPrompt="Escribe un párrafo sobre tus habilidades y talentos usando can/can't y al menos un adverbio de modo."
          focus="can / can't (afirmativo, negativo, preguntas), adverbios de modo (well, easily, beautifully...) y frases para pedir ayuda"
          level="A1"
          placeholder="Example: I can cook well, but I can't bake. I can also..."
        />
      </div>

      {/* SPEAKING */}
      <div className="content-section">
        <h3>4. Time to Speak: ¿Qué Sabes Hacer?</h3>
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
            Habla durante 1 minuto sobre tres habilidades que tienes y una que te gustaría aprender. Grábate y verifica: ¿pronunciaste bien la diferencia entre "can" (débil) y "can't" (fuerte)?
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen: Destrezas Integradas</h4>
          <p>Combina lectura, escritura y vocabulario de habilidades y talentos.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default SkillsTopic;

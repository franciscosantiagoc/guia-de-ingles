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

  const readingText = "My name is Priya, and I'm a nurse. My schedule is a bit unusual because I work shifts. On the days I start early, I wake up at five thirty and leave the house by six fifteen. My shift starts at seven and finishes at three in the afternoon. After work, I usually pick up my daughter from school, and we have a snack together. In the evening, I cook dinner, help her with homework, and we watch a show before bed. I don't go to bed very late — usually around ten thirty, because I need to be ready for the next shift. On my days off, everything changes. I sleep in until nine, I don't set an alarm, and I often meet friends for lunch. I never work on Sundays, so that's the day I relax the most. My husband usually cooks on Sundays, which I really appreciate!";

  const readingTextEs = "Me llamo Priya y soy enfermera. Mi horario es un poco inusual porque trabajo por turnos. Los días que empiezo temprano, me despierto a las cinco y media y salgo de casa a las seis y cuarto. Mi turno empieza a las siete y termina a las tres de la tarde. Después del trabajo, usualmente recojo a mi hija de la escuela, y comemos una merienda juntas. Por la noche, preparo la cena, la ayudo con la tarea, y vemos un programa antes de dormir. No me voy a la cama muy tarde — usualmente alrededor de las diez y media, porque necesito estar lista para el siguiente turno. En mis días libres, todo cambia. Duermo hasta las nueve, no pongo alarma, y a menudo me reúno con amigas para almorzar. Nunca trabajo los domingos, así que ese es el día que más descanso. ¡Mi esposo usualmente cocina los domingos, lo cual realmente aprecio!";

  const comprehensionQuestions = [
    { q: "What time does Priya wake up on a work day?", a: "At five thirty." },
    { q: "What time does her shift start and finish?", a: "It starts at seven and finishes at three in the afternoon." },
    { q: "What does she do after work?", a: "She picks up her daughter from school." },
    { q: "What time does she usually go to bed?", a: "Around ten thirty." },
    { q: "What's different about her days off?", a: "She sleeps in, doesn't set an alarm, and meets friends for lunch." },
    { q: "Does Priya ever work on Sundays?", a: "No, she never works on Sundays." },
    { q: "Who cooks on Sundays?", a: "Her husband." }
  ];

  const writingChecklist = [
    { key: "wake-time", text: "Mencioné a qué hora me despierto/levanto." },
    { key: "work-school", text: "Describí mi rutina de trabajo o escuela." },
    { key: "frequency", text: "Usé al menos 2 adverbios de frecuencia (always, usually, sometimes...)." },
    { key: "third-person-s", text: "Si hablo de otra persona, usé correctamente la -s de tercera persona." },
    { key: "weekend", text: "Contrasté mi rutina de semana con la de fin de semana." },
    { key: "time-expressions", text: "Usé al menos 2 expresiones de hora (at seven, half past nine...)." }
  ];

  const speakingPrompts = [
    "Describe your typical weekday from morning to night.",
    "How is your weekend different from your weekdays?",
    "Talk about someone else's routine (a family member, a friend, or a coworker).",
    "What time do you usually do things? Use at least three different times.",
    "Time to speak: Is your routine healthy? What would you like to change about it?"
  ];

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 5 • Destrezas</span>
        <h2>Reading, Writing y Speaking: Rutinas Diarias</h2>
        <p className="topic-intro">
          Lee sobre la rutina de Priya, practica tu comprensión, escribe sobre tu propia rutina y practica hablar sobre ella.
        </p>
      </div>

      {/* READING */}
      <div className="content-section">
        <h3>1. Reading: La Rutina de Priya</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Lee este texto original sobre la rutina de una enfermera con horario de turnos. Fíjate en las expresiones de hora y frecuencia.
        </p>

        <div className="example-item">
          <div className="example-en" style={{ justifyContent: 'space-between', marginBottom: '10px' }}>
            <strong>Priya's Routine</strong>
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
        <h3>3. Writing: Describe tu Rutina</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Escribe un párrafo corto sobre tu rutina diaria, contrastando tus días de semana con tu fin de semana.
        </p>

        <div className="grammar-formula" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '6px', fontSize: '1rem' }}>
          <div>I usually wake up at <em>[hora]</em> and I <em>[actividad]</em>.</div>
          <div>On weekdays, I <em>[rutina de trabajo/escuela]</em>, but on weekends, I <em>[rutina diferente]</em>.</div>
          <div>I always/usually/sometimes <em>[actividad con frecuencia]</em>.</div>
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
          taskPrompt="Describe tu rutina diaria, contrastando tus días de semana con tu fin de semana."
          focus="presente simple con he/she/it/they (incluyendo la -s de tercera persona y doesn't), adverbios de frecuencia, y expresiones de hora"
          level="A1"
          placeholder="Example: I usually wake up at seven. On weekdays, I..."
        />
      </div>

      {/* SPEAKING */}
      <div className="content-section">
        <h3>4. Time to Speak: Tu Rutina en Voz Alta</h3>
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
            Habla durante 1 minuto sobre tu rutina de un día típico, usando al menos tres expresiones de hora y dos adverbios de frecuencia. Grábate y verifica: ¿usaste "doesn't" o el verbo con -s correctamente si hablaste de alguien más?
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

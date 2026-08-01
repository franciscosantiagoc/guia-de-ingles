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

  const readingText = "Hi! Sorry I didn't answer your call earlier. Right now, I'm sitting in a coffee shop downtown, and I'm actually having a really busy day. My sister is visiting from out of town this week, so we're spending a lot of time together. At the moment, she's talking on the phone with her boss, and I'm waiting for her to finish so we can go to the museum. Normally, I work from home and I don't leave the house much during the week, but these days everything is different because of her visit. I usually eat lunch alone at my desk, but today we're having lunch at a restaurant near the park. I know this week is a little crazy, but I love having her here. Can you call me back tonight? I should be free after eight.";

  const readingTextEs = "¡Hola! Perdón por no contestar tu llamada antes. Ahora mismo, estoy sentado/a en una cafetería del centro, y de hecho estoy teniendo un día muy ocupado. Mi hermana está visitando desde fuera de la ciudad esta semana, así que estamos pasando mucho tiempo juntos/as. En este momento, ella está hablando por teléfono con su jefe, y estoy esperando a que termine para poder ir al museo. Normalmente, trabajo desde casa y no salgo mucho entre semana, pero estos días todo es diferente por su visita. Usualmente como sola/o en mi escritorio, pero hoy vamos a comer a un restaurante cerca del parque. Sé que esta semana está un poco loca, pero me encanta tenerla aquí. ¿Me puedes llamar de vuelta esta noche? Debería estar libre después de las ocho.";

  const comprehensionQuestions = [
    { q: "Where is the writer right now?", a: "In a coffee shop downtown." },
    { q: "Why is this week different from a normal week?", a: "Because their sister is visiting from out of town." },
    { q: "What is the sister doing at the moment?", a: "Talking on the phone with her boss." },
    { q: "What does the writer normally do during the week?", a: "They work from home and don't leave the house much." },
    { q: "Where are they having lunch today, instead of their desk?", a: "At a restaurant near the park." },
    { q: "What does the writer ask at the end?", a: "To be called back tonight, after eight." }
  ];

  const writingChecklist = [
    { key: "continuous-now", text: "Usé presente continuo para algo que pasa ahora mismo (I'm sitting, she's talking...)." },
    { key: "simple-habit", text: "Usé presente simple para un hábito o rutina normal (I usually..., I don't...)." },
    { key: "contrast", text: "Contrasté lo normal (presente simple) con lo temporal/diferente (presente continuo)." },
    { key: "signal-words", text: "Usé al menos una palabra señal (right now, at the moment, these days, usually...)." },
    { key: "stative-verb", text: "Usé al menos un verbo de estado correctamente en presente simple (I know, I love, I want...)." },
    { key: "phone-phrase", text: "Incluí al menos una frase de llamadas telefónicas si el texto lo permite." }
  ];

  const speakingPrompts = [
    "Describe what you are doing right now, in this exact moment.",
    "Talk about something you are doing differently this week compared to a normal week.",
    "Compare your normal routine (present simple) with what's happening today (present continuous).",
    "Role-play a phone call: answer the phone and ask to speak to a friend.",
    "Time to speak: Call a friend (imagine it) and explain why you didn't answer earlier, using both tenses."
  ];

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 7 • Destrezas</span>
        <h2>Reading, Writing y Speaking: Lo de Siempre vs. Lo de Ahora</h2>
        <p className="topic-intro">
          Lee un mensaje que combina rutina y momento presente, practica tu comprensión, escribe tu propio contraste entre lo normal y lo temporal, y practica una llamada telefónica.
        </p>
      </div>

      {/* READING */}
      <div className="content-section">
        <h3>1. Reading: Un Mensaje de Voz</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Lee este mensaje original. Fíjate cómo combina presente simple (rutina) y presente continuo (ahora mismo / esta semana).
        </p>

        <div className="example-item">
          <div className="example-en" style={{ justifyContent: 'space-between', marginBottom: '10px' }}>
            <strong>A Voice Message</strong>
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
        <h3>3. Writing: Lo Normal vs. Lo de Esta Semana</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Escribe un párrafo corto contrastando tu rutina normal (presente simple) con algo diferente que está pasando ahora o esta semana (presente continuo).
        </p>

        <div className="grammar-formula" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '6px', fontSize: '1rem' }}>
          <div>Normally, I <em>[rutina habitual]</em>, but this week I'm <em>[actividad temporal]</em>.</div>
          <div>Right now, I'm <em>[acción en progreso]</em>.</div>
          <div>I know/love/want <em>[verbo de estado + complemento]</em>.</div>
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
          taskPrompt="Escribe un párrafo contrastando tu rutina normal con algo diferente que está pasando ahora mismo o esta semana."
          focus="presente continuo (am/is/are + verbo-ing) vs. presente simple, verbos de estado (stative verbs), y palabras señal (usually, right now, these days)"
          level="A1"
          placeholder="Example: Normally, I... but this week I'm... Right now, I'm..."
        />
      </div>

      {/* SPEAKING */}
      <div className="content-section">
        <h3>4. Time to Speak: Ahora Mismo vs. Siempre</h3>
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
            Habla durante 1 minuto describiendo qué está pasando alrededor de ti ahora mismo (presente continuo) y contrastándolo con lo que normalmente haces a esta hora (presente simple). Grábate y verifica: ¿pronunciaste bien el sonido nasal /ɪŋ/ en cada verbo -ing?
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

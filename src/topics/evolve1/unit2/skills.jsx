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

  const dialogue = [
    { speaker: "Mia", line: "Is this a new photo? Who's everyone in it?", es: "¿Es una foto nueva? ¿Quiénes son todos?" },
    { speaker: "Josh", line: "Yeah, it's from my cousin's birthday party. That's my mom, and she's next to my grandpa.", es: "Sí, es del cumpleaños de mi primo. Esa es mi mamá, está junto a mi abuelo." },
    { speaker: "Mia", line: "Nice! How old is your grandpa now?", es: "¡Qué bien! ¿Cuántos años tiene tu abuelo ahora?" },
    { speaker: "Josh", line: "He's eighty— sorry, I mean, he's eighteen— no wait, he's eighty! Eighty years old.", es: "Tiene ochenta— perdón, quise decir, tiene dieciocho— no espera, ¡tiene ochenta! Ochenta años." },
    { speaker: "Mia", line: "Wow, eighty! And who's the boy in front of your mom?", es: "¡Wow, ochenta! ¿Y quién es el niño enfrente de tu mamá?" },
    { speaker: "Josh", line: "That's my little cousin. He's really funny, and he's also very talkative.", es: "Ese es mi primo pequeño. Es muy gracioso, y también muy hablador." },
    { speaker: "Mia", line: "You have a big family! Is your birthday in the summer too?", es: "¡Tienes una familia grande! ¿Tu cumpleaños también es en verano?" },
    { speaker: "Josh", line: "No, mine's in December. What about you? When's your birthday?", es: "No, el mío es en diciembre. ¿Y tú? ¿Cuándo es tu cumpleaños?" },
    { speaker: "Mia", line: "It's on March 3rd. We have a lot in common, actually — big families and December... well, almost!", es: "Es el 3 de marzo. En realidad tenemos mucho en común — familias grandes y diciembre... ¡bueno, casi!" }
  ];

  const comprehensionQuestions = [
    { q: "Whose birthday party is the photo from?", a: "Josh's cousin's birthday party." },
    { q: "How old is Josh's grandpa?", a: "He's eighty years old." },
    { q: "What is Josh's little cousin like?", a: "He's really funny and very talkative." },
    { q: "When is Josh's birthday?", a: "In December." },
    { q: "When is Mia's birthday?", a: "On March 3rd." }
  ];

  const writingChecklist = [
    { key: "and-also", text: "Uní ideas con \"and\" y \"also\" (no solo oraciones sueltas)." },
    { key: "family-vocab", text: "Usé al menos 3 palabras de vocabulario de familia." },
    { key: "adjectives", text: "Describí a alguien con un adjetivo de personalidad (friendly, funny, kind...)." },
    { key: "prepositions", text: "Usé una preposición de lugar (next to, in front of, between...)." },
    { key: "age-birthday", text: "Mencioné una edad o una fecha de cumpleaños." },
    { key: "capitalization", text: "Revisé mayúsculas en nombres y meses." }
  ];

  const speakingPrompts = [
    "Who's this in the photo? — This is my ...",
    "Where is he/she in the picture? — He's/She's next to / in front of / between ...",
    "What's he/she like? — He's/She's really ... and also very ...",
    "How old is he/she? — He's/She's ... years old.",
    "When's his/her birthday? — It's on / in ...",
    "What do you have in common with a friend or family member?"
  ];

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 2 • Destrezas</span>
        <h2>Listening, Post Escrito y Speaking: Fotos de Familia</h2>
        <p className="topic-intro">
          Practica comprensión auditiva con un diálogo original, escribe un post sobre una foto con amigos o familia, y habla sobre las personas que quieres.
        </p>
      </div>

      {/* LISTENING */}
      <div className="content-section">
        <h3>1. Listening: "New Photos"</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Escucha la conversación completa entre Mia y Josh (haz clic en cada línea) antes de revisar la traducción. Es una conversación original creada para practicar el vocabulario de esta unidad.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: '1fr' }}>
          {dialogue.map((item, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span><strong>{item.speaker}:</strong> {item.line}</span>
                <button className="audio-btn" onClick={() => speak(item.line)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ marginTop: '6px', fontStyle: 'italic' }}>{item.es}</div>
            </div>
          ))}
        </div>
      </div>

      {/* COMPRENSIÓN */}
      <div className="content-section">
        <h3>2. Comprensión Auditiva</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Responde según el diálogo de Mia y Josh. Haz clic para revelar la respuesta.
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
        <h3>3. Writing: Un Post sobre Amigos o Familia en una Foto</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Usa <strong>and</strong> para unir dos ideas relacionadas y <strong>also</strong> para agregar información extra sobre la misma persona.
        </p>

        <div className="grammar-formula" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '6px', fontSize: '1rem' }}>
          <div>This is my <em>[familiar/amigo]</em>, <em>[nombre]</em>, and this is my <em>[familiar/amigo]</em>, <em>[nombre]</em>.</div>
          <div><em>[Nombre]</em> is <em>[adjetivo]</em>, and he's/she's also <em>[adjetivo]</em>.</div>
          <div>He's/She's <em>[edad]</em> years old, and his/her birthday is in <em>[mes]</em>.</div>
          <div>We have a lot in common!</div>
        </div>

        <p style={{ margin: '16px 0', color: 'var(--text-muted)' }}>Antes de terminar, revisa tu post:</p>

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
          taskPrompt="Escribe un post describiendo a un amigo o familiar en una foto, usando and/also."
          focus="verbo be con he/she/it/we/they, preposiciones de lugar (next to, in front of, between), adjetivos de personalidad, edades y cumpleaños"
          level="A1"
          placeholder="Example: This is my friend,... He's/She's... and he's/she's also..."
        />
      </div>

      {/* SPEAKING */}
      <div className="content-section">
        <h3>4. Time to Speak: Cosas en Común</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Elige una foto real de tu teléfono con familia o amigos y descríbela en voz alta usando estas preguntas guía.
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
          <div className="insider-title"><span>🎤</span> Reto de Speaking</div>
          <div className="insider-content">
            Describe a 3 personas de tu familia o amigos en menos de 1 minuto: quién es, dónde está en la foto, cómo es su personalidad, su edad y cuándo es su cumpleaños. Grábate y escúchate — ¿usaste "and" y "also" para conectar ideas?
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen: Destrezas Integradas</h4>
          <p>Combina listening, escritura y vocabulario de esta unidad en un quiz corto.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default SkillsTopic;

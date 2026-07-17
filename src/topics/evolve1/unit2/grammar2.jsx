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

const Grammar2Topic = () => {
  const prepositions = [
    { prep: "in", es: "en / dentro de", examples: [
      { en: "My mom is in the kitchen.", es: "Mi mamá está en la cocina." },
      { en: "We live in a small house.", es: "Vivimos en una casa pequeña." }
    ]},
    { prep: "on", es: "sobre / en (superficie)", examples: [
      { en: "The photo is on the wall.", es: "La foto está en la pared." },
      { en: "My keys are on the table.", es: "Mis llaves están sobre la mesa." }
    ]},
    { prep: "at", es: "en (lugar/punto específico)", examples: [
      { en: "We are at the party.", es: "Estamos en la fiesta." },
      { en: "She's at work right now.", es: "Ella está en el trabajo ahora mismo." }
    ]},
    { prep: "next to / beside", es: "al lado de", examples: [
      { en: "My sister is next to me.", es: "Mi hermana está a mi lado." },
      { en: "The dog is sitting beside the door.", es: "El perro está sentado al lado de la puerta." }
    ]},
    { prep: "between", es: "entre (dos cosas)", examples: [
      { en: "Grandma is between my mom and my aunt.", es: "La abuela está entre mi mamá y mi tía." },
      { en: "The bank is between the pharmacy and the bakery.", es: "El banco está entre la farmacia y la panadería." }
    ]},
    { prep: "among", es: "entre (un grupo, más de dos)", examples: [
      { en: "She's among her closest friends.", es: "Ella está entre sus amigos más cercanos." },
      { en: "The house is hidden among the trees.", es: "La casa está escondida entre los árboles." }
    ]},
    { prep: "behind", es: "detrás de", examples: [
      { en: "My brother is behind our dad.", es: "Mi hermano está detrás de mi papá." },
      { en: "The car is parked behind the building.", es: "El carro está estacionado detrás del edificio." }
    ]},
    { prep: "in front of", es: "enfrente de / delante de", examples: [
      { en: "The kids are in front of the house.", es: "Los niños están enfrente de la casa." },
      { en: "There's a garden in front of the school.", es: "Hay un jardín enfrente de la escuela." }
    ]},
    { prep: "under", es: "debajo de", examples: [
      { en: "The dog is under the table.", es: "El perro está debajo de la mesa." },
      { en: "My shoes are under the bed.", es: "Mis zapatos están debajo de la cama." }
    ]},
    { prep: "over", es: "por encima de", examples: [
      { en: "There's a light over the table.", es: "Hay una luz por encima de la mesa." },
      { en: "The plane is flying over the city.", es: "El avión está volando sobre la ciudad." }
    ]},
    { prep: "above", es: "arriba de (sin tocar)", examples: [
      { en: "The clock is above the door.", es: "El reloj está arriba de la puerta." },
      { en: "There's a shelf above my desk.", es: "Hay un estante arriba de mi escritorio." }
    ]},
    { prep: "below", es: "abajo de (sin tocar)", examples: [
      { en: "The basement is below the kitchen.", es: "El sótano está abajo de la cocina." },
      { en: "Write your name below the title.", es: "Escribe tu nombre abajo del título." }
    ]},
    { prep: "near", es: "cerca de", examples: [
      { en: "My cousins live near the beach.", es: "Mis primos viven cerca de la playa." },
      { en: "The hospital is near my house.", es: "El hospital está cerca de mi casa." }
    ]},
    { prep: "inside", es: "dentro de", examples: [
      { en: "The cat is inside the box.", es: "El gato está dentro de la caja." },
      { en: "Everyone is inside the classroom.", es: "Todos están dentro del salón de clases." }
    ]},
    { prep: "outside", es: "fuera de / afuera", examples: [
      { en: "The kids are playing outside the house.", es: "Los niños están jugando afuera de la casa." },
      { en: "Wait for me outside the restaurant.", es: "Espérame afuera del restaurante." }
    ]},
    { prep: "opposite / across from", es: "frente a / al otro lado de", examples: [
      { en: "My uncle is sitting opposite my dad.", es: "Mi tío está sentado frente a mi papá." },
      { en: "The bakery is across from the park.", es: "La panadería está frente al parque." }
    ]},
    { prep: "by", es: "junto a / cerca de", examples: [
      { en: "Come sit by me.", es: "Ven, siéntate junto a mí." },
      { en: "The lamp is by the window.", es: "La lámpara está junto a la ventana." }
    ]},
    { prep: "through", es: "a través de", examples: [
      { en: "We walked through the park.", es: "Caminamos a través del parque." },
      { en: "Sunlight comes through the window.", es: "La luz del sol entra a través de la ventana." }
    ]},
    { prep: "around", es: "alrededor de", examples: [
      { en: "The family is sitting around the table.", es: "La familia está sentada alrededor de la mesa." },
      { en: "There are chairs around the pool.", es: "Hay sillas alrededor de la piscina." }
    ]}
  ];

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 2 • Gramática 2</span>
        <h2>Preposiciones de Lugar</h2>
        <p className="topic-intro">
          Perfectas para describir dónde está cada persona en una foto familiar o en una habitación.
        </p>
      </div>

      <div className="content-section">
        <h3>1. Las Preposiciones Más Comunes (con Ejemplos de Uso)</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Cada preposición de lugar responde a "¿dónde?". Estúdialas en contexto, no de forma aislada — por eso cada una tiene dos ejemplos distintos.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
          {prepositions.map((item, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span><strong>{item.prep}</strong> — {item.es}</span>
              </div>
              {item.examples.map((ex, exIndex) => (
                <div
                  key={exIndex}
                  className="example-es"
                  style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}
                >
                  <span>
                    <span style={{ color: 'var(--text-main)' }}>{ex.en}</span><br />
                    {ex.es}
                  </span>
                  <button className="audio-btn" onClick={() => speak(ex.en)} title="Escuchar" style={{ margin: 0, flexShrink: 0 }}>🔊</button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="content-section">
        <h3>2. In vs. On vs. At: La Regla Rápida</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Estas tres preposiciones confunden mucho porque las tres se traducen como "en". La diferencia está en el tipo de espacio.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
          <div className="example-item">
            <div className="example-en">in</div>
            <div className="example-es">Espacios cerrados o contenidos: <em>in the kitchen, in the car, in the photo</em></div>
          </div>
          <div className="example-item">
            <div className="example-en">on</div>
            <div className="example-es">Superficies: <em>on the table, on the wall, on the sofa</em></div>
          </div>
          <div className="example-item">
            <div className="example-en">at</div>
            <div className="example-es">Puntos específicos o eventos: <em>at the party, at home, at the door</em></div>
          </div>
        </div>
      </div>

      <div className="insider-box">
        <div className="insider-title"><span>⚠️</span> Pares que se confunden fácilmente</div>
        <div className="insider-content">
          <strong>over</strong> vs. <strong>above</strong>: ambas significan "por encima de", pero <em>over</em> sugiere movimiento o cercanía directa (<em>"the plane flew over the city"</em>), mientras que <em>above</em> es más estático y a veces con más distancia (<em>"the shelf above my desk"</em>).<br /><br />
          <strong>in front of</strong> vs. <strong>opposite</strong>: <em>in front of</em> significa "delante de" (misma dirección), mientras que <em>opposite</em> significa "frente a, del otro lado" (dirección contraria, cara a cara).<br /><br />
          <strong>near</strong> vs. <strong>by/next to</strong>: <em>near</em> es "cerca de" en general (puede ser una distancia moderada), mientras que <em>by</em> y <em>next to</em> implican estar justo al lado.
        </div>
      </div>

      <div className="insider-box">
        <div className="insider-title"><span>📷</span> Úsalas para describir una foto</div>
        <div className="insider-content">
          Combina preposiciones de lugar con el verbo <em>be</em> para describir cualquier foto familiar: <strong>"My grandpa is in the middle. My mom is next to him, and my little brother is in front of them."</strong>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen: Preposiciones de Lugar</h4>
          <p>Elige la preposición correcta para describir dónde está cada persona u objeto.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default Grammar2Topic;

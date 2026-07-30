import React, { useState, useMemo } from 'react';

const speak = (text) => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }
};

const PhraseCard = ({ en, es }) => (
  <div className="example-item">
    <div className="example-en" style={{ justifyContent: 'space-between' }}>
      <span>{en}</span>
      <button className="audio-btn" onClick={() => speak(en)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
    </div>
    <div className="example-es" style={{ marginTop: '6px' }}>{es}</div>
  </div>
);

const DirectionCard = ({ phrase, es, example, exampleEs }) => (
  <div className="example-item">
    <div className="example-en" style={{ justifyContent: 'space-between' }}>
      <span><strong>{phrase}</strong></span>
      <button className="audio-btn" onClick={() => speak(phrase)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
    </div>
    <div className="example-es" style={{ marginTop: '4px', fontSize: '0.85rem' }}>{es}</div>
    <div className="example-en" style={{ justifyContent: 'space-between', marginTop: '10px', fontSize: '0.9rem' }}>
      <span>{example}</span>
      <button className="audio-btn" onClick={() => speak(example)} title="Escuchar ejemplo" style={{ margin: 0 }}>🔊</button>
    </div>
    <div className="example-es" style={{ fontSize: '0.85rem' }}>{exampleEs}</div>
  </div>
);

const FunctionalTopic = () => {
  const [directionsSearch, setDirectionsSearch] = useState('');

  const askForDirections = [
    { en: "Excuse me, how do I get to the train station?", es: "Disculpe, ¿cómo llego a la estación de tren?" },
    { en: "Is there a pharmacy near here?", es: "¿Hay una farmacia cerca de aquí?" },
    { en: "Can you tell me the way to the museum?", es: "¿Me puede decir cómo llegar al museo?" },
    { en: "Where's the nearest bus stop?", es: "¿Dónde está la parada de autobús más cercana?" },
    { en: "Am I going the right way to the library?", es: "¿Voy por el camino correcto hacia la biblioteca?" },
    { en: "I'm lost. Can you help me?", es: "Estoy perdido/a. ¿Me puede ayudar?" },
    { en: "Could you show me on the map?", es: "¿Me podría mostrar en el mapa?" },
    { en: "Is it walking distance from here?", es: "¿Se puede llegar caminando desde aquí?" }
  ];

  const basicMovements = useMemo(() => [
    { phrase: "go straight (ahead)", es: "ve derecho / sigue derecho", example: "Go straight ahead for two blocks.", exampleEs: "Ve derecho dos cuadras." },
    { phrase: "go straight until you reach...", es: "sigue derecho hasta que llegues a...", example: "Go straight until you reach the park.", exampleEs: "Sigue derecho hasta que llegues al parque." },
    { phrase: "turn left", es: "gira a la izquierda", example: "Turn left on Main Street.", exampleEs: "Gira a la izquierda en la calle Main." },
    { phrase: "turn right", es: "gira a la derecha", example: "Turn right at the pharmacy.", exampleEs: "Gira a la derecha en la farmacia." },
    { phrase: "go back", es: "regresa", example: "Go back the way you came.", exampleEs: "Regresa por donde viniste." },
    { phrase: "turn around / make a U-turn", es: "da la vuelta / da una vuelta en U", example: "Turn around and go the other way.", exampleEs: "Da la vuelta y ve por el otro lado." },
    { phrase: "keep going / keep walking straight", es: "sigue avanzando / sigue caminando derecho", example: "Keep going until the end of the street.", exampleEs: "Sigue avanzando hasta el final de la calle." },
    { phrase: "slow down", es: "reduce la velocidad", example: "Slow down, the school is near.", exampleEs: "Reduce la velocidad, la escuela está cerca." },
    { phrase: "stop at the corner", es: "detente en la esquina", example: "Stop at the corner and wait for me.", exampleEs: "Detente en la esquina y espérame." },
    { phrase: "pull over", es: "oríllate / estaciónate a un lado", example: "Pull over here, please.", exampleEs: "Oríllate aquí, por favor." },
    { phrase: "go up the street", es: "sube la calle", example: "Go up the street to the top of the hill.", exampleEs: "Sube la calle hasta la cima de la colina." },
    { phrase: "go down the street", es: "baja la calle", example: "Go down the street toward the river.", exampleEs: "Baja la calle hacia el río." }
  ], []);

  const turnsAndCurves = useMemo(() => [
    { phrase: "take the first left", es: "toma la primera a la izquierda", example: "Take the first left after the bank.", exampleEs: "Toma la primera a la izquierda después del banco." },
    { phrase: "take the second right", es: "toma la segunda a la derecha", example: "Take the second right onto Elm Street.", exampleEs: "Toma la segunda a la derecha hacia la calle Elm." },
    { phrase: "turn back at the next curve", es: "regresa / da vuelta en la siguiente curva", example: "Turn back at the next curve.", exampleEs: "Regresa en la siguiente curva." },
    { phrase: "at the next curve", es: "en la siguiente curva", example: "The house is just after the next curve.", exampleEs: "La casa está justo después de la siguiente curva." },
    { phrase: "go through the intersection", es: "cruza la intersección", example: "Go through the intersection and turn left.", exampleEs: "Cruza la intersección y gira a la izquierda." },
    { phrase: "go around the roundabout", es: "da la vuelta en la glorieta", example: "Go around the roundabout and take the third exit.", exampleEs: "Da la vuelta en la glorieta y toma la tercera salida." },
    { phrase: "take the exit", es: "toma la salida", example: "Take the exit for downtown.", exampleEs: "Toma la salida hacia el centro." },
    { phrase: "merge onto the highway", es: "incorpórate a la carretera", example: "Merge onto the highway after the gas station.", exampleEs: "Incorpórate a la carretera después de la gasolinera." },
    { phrase: "follow the signs", es: "sigue las señales", example: "Follow the signs to the airport.", exampleEs: "Sigue las señales hacia el aeropuerto." },
    { phrase: "follow this road", es: "sigue este camino", example: "Follow this road for about ten minutes.", exampleEs: "Sigue este camino por unos diez minutos." }
  ], []);

  const landmarksAndLocation = useMemo(() => [
    { phrase: "on the corner of ... and ...", es: "en la esquina de ... y ...", example: "It's on the corner of Main Street and 5th Avenue.", exampleEs: "Está en la esquina de la calle Main y la 5ta Avenida." },
    { phrase: "next to", es: "junto a / al lado de", example: "The pharmacy is next to the bakery.", exampleEs: "La farmacia está junto a la panadería." },
    { phrase: "across from", es: "enfrente de", example: "The park is across from the school.", exampleEs: "El parque está enfrente de la escuela." },
    { phrase: "between ... and ...", es: "entre ... y ...", example: "The bank is between the bakery and the bookstore.", exampleEs: "El banco está entre la panadería y la librería." },
    { phrase: "in front of", es: "delante de / enfrente de", example: "There's a bus stop in front of the library.", exampleEs: "Hay una parada de autobús enfrente de la biblioteca." },
    { phrase: "behind", es: "detrás de", example: "The parking lot is behind the mall.", exampleEs: "El estacionamiento está detrás del centro comercial." },
    { phrase: "past the bridge", es: "pasando el puente", example: "The house is right past the bridge.", exampleEs: "La casa está justo pasando el puente." },
    { phrase: "past the speed bump", es: "pasando el reductor de velocidad / tope", example: "Turn right past the speed bump.", exampleEs: "Gira a la derecha pasando el reductor de velocidad." },
    { phrase: "before the traffic light", es: "antes del semáforo", example: "Turn left before the traffic light.", exampleEs: "Gira a la izquierda antes del semáforo." },
    { phrase: "after the gas station", es: "después de la gasolinera", example: "The store is right after the gas station.", exampleEs: "La tienda está justo después de la gasolinera." },
    { phrase: "opposite", es: "frente a", example: "The museum is opposite the park.", exampleEs: "El museo está frente al parque." },
    { phrase: "around the corner", es: "a la vuelta de la esquina", example: "The café is just around the corner.", exampleEs: "El café está justo a la vuelta de la esquina." },
    { phrase: "at the end of the street", es: "al final de la calle", example: "The school is at the end of the street.", exampleEs: "La escuela está al final de la calle." },
    { phrase: "on the other side of the street", es: "del otro lado de la calle", example: "The bakery is on the other side of the street.", exampleEs: "La panadería está del otro lado de la calle." }
  ], []);

  const distanceAndTime = useMemo(() => [
    { phrase: "it's a five-minute walk", es: "está a cinco minutos caminando", example: "It's a five-minute walk from here.", exampleEs: "Está a cinco minutos caminando desde aquí." },
    { phrase: "it's not far", es: "no está lejos", example: "Don't worry, it's not far.", exampleEs: "No te preocupes, no está lejos." },
    { phrase: "it's a bit far", es: "está un poco lejos", example: "It's a bit far, you should take the bus.", exampleEs: "Está un poco lejos, deberías tomar el autobús." },
    { phrase: "it's within walking distance", es: "se puede llegar caminando", example: "The museum is within walking distance.", exampleEs: "Al museo se puede llegar caminando." },
    { phrase: "it's about two blocks away", es: "está a unas dos cuadras", example: "The library is about two blocks away.", exampleEs: "La biblioteca está a unas dos cuadras." },
    { phrase: "it's a ten-minute drive", es: "está a diez minutos en coche", example: "It's a ten-minute drive from downtown.", exampleEs: "Está a diez minutos en coche desde el centro." },
    { phrase: "it's right around here", es: "está aquí cerca / por aquí", example: "The hotel is right around here.", exampleEs: "El hotel está aquí cerca." },
    { phrase: "it's a bit out of the way", es: "está un poco fuera del camino", example: "It's a bit out of the way, but it's worth it.", exampleEs: "Está un poco fuera del camino, pero vale la pena." }
  ], []);

  const indoorDirections = useMemo(() => [
    { phrase: "go down the hallway", es: "ve por el pasillo", example: "Go down the hallway and turn left.", exampleEs: "Ve por el pasillo y gira a la izquierda." },
    { phrase: "go down the corridor", es: "ve por el corredor", example: "Go down the corridor to the end.", exampleEs: "Ve por el corredor hasta el final." },
    { phrase: "at the end of the hallway", es: "al final del pasillo", example: "Turn right at the end of the hallway.", exampleEs: "Gira a la derecha al final del pasillo." },
    { phrase: "go up the stairs", es: "sube las escaleras", example: "Go up the stairs to the second floor.", exampleEs: "Sube las escaleras al segundo piso." },
    { phrase: "go down the stairs", es: "baja las escaleras", example: "Go down the stairs to the lobby.", exampleEs: "Baja las escaleras al vestíbulo." },
    { phrase: "take the elevator", es: "toma el elevador", example: "Take the elevator to the fifth floor.", exampleEs: "Toma el elevador al quinto piso." },
    { phrase: "take the escalator", es: "toma la escalera eléctrica", example: "Take the escalator to the second level.", exampleEs: "Toma la escalera eléctrica al segundo nivel." },
    { phrase: "it's on the second floor", es: "está en el segundo piso", example: "The office is on the second floor.", exampleEs: "La oficina está en el segundo piso." },
    { phrase: "it's the second door on the right", es: "es la segunda puerta a la derecha", example: "It's the second door on the right.", exampleEs: "Es la segunda puerta a la derecha." },
    { phrase: "it's the first door on the left", es: "es la primera puerta a la izquierda", example: "The restroom is the first door on the left.", exampleEs: "El baño es la primera puerta a la izquierda." },
    { phrase: "go through the double doors", es: "cruza las puertas dobles", example: "Go through the double doors and you'll see the reception.", exampleEs: "Cruza las puertas dobles y verás la recepción." },
    { phrase: "check in at the front desk", es: "regístrate en recepción", example: "Check in at the front desk first.", exampleEs: "Regístrate en recepción primero." },
    { phrase: "sign in at reception", es: "regístrate en la recepción", example: "Please sign in at reception.", exampleEs: "Por favor regístrate en la recepción." },
    { phrase: "it's next to the elevators", es: "está junto a los elevadores", example: "The meeting room is next to the elevators.", exampleEs: "La sala de juntas está junto a los elevadores." },
    { phrase: "it's at the end of the corridor", es: "está al final del corredor", example: "My office is at the end of the corridor.", exampleEs: "Mi oficina está al final del corredor." },
    { phrase: "push the button for the third floor", es: "presiona el botón del tercer piso", example: "Push the button for the third floor.", exampleEs: "Presiona el botón del tercer piso." },
    { phrase: "follow the signs to the exit", es: "sigue las señales hacia la salida", example: "Follow the signs to the exit.", exampleEs: "Sigue las señales hacia la salida." },
    { phrase: "it's on your right as you enter", es: "está a tu derecha al entrar", example: "The restroom is on your right as you enter.", exampleEs: "El baño está a tu derecha al entrar." }
  ], []);

  const allDirectionPhrases = useMemo(() => [
    ...basicMovements.map((item) => ({ ...item, group: "Movimientos Básicos" })),
    ...turnsAndCurves.map((item) => ({ ...item, group: "Vueltas, Curvas e Intersecciones" })),
    ...landmarksAndLocation.map((item) => ({ ...item, group: "Puntos de Referencia y Ubicación" })),
    ...distanceAndTime.map((item) => ({ ...item, group: "Distancia y Tiempo" })),
    ...indoorDirections.map((item) => ({ ...item, group: "Dentro de un Edificio" }))
  ], [basicMovements, turnsAndCurves, landmarksAndLocation, distanceAndTime, indoorDirections]);

  const filteredDirections = useMemo(() => {
    if (!directionsSearch.trim()) return null;
    const q = directionsSearch.toLowerCase();
    return allDirectionPhrases.filter((item) =>
      item.phrase.toLowerCase().includes(q) ||
      item.es.toLowerCase().includes(q) ||
      item.example.toLowerCase().includes(q) ||
      item.group.toLowerCase().includes(q)
    );
  }, [allDirectionPhrases, directionsSearch]);

  const checkUnderstanding = [
    { en: "Sorry, could you repeat that?", es: "Perdón, ¿podría repetir eso?" },
    { en: "So, I turn left at the light?", es: "Entonces, ¿doy vuelta a la izquierda en el semáforo?" },
    { en: "Did you say two blocks or three?", es: "¿Dijo dos cuadras o tres?" },
    { en: "Okay, straight ahead and then right. Got it.", es: "Bien, derecho y luego a la derecha. Entendido." }
  ];

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 6 • Lenguaje Funcional</span>
        <h2>Dar y Pedir Indicaciones</h2>
        <p className="topic-intro">
          Vocabulario extendido para preguntar cómo llegar a un lugar, dar instrucciones detalladas (giros, curvas, puntos de referencia, distancias) y confirmar que entendiste bien.
        </p>
      </div>

      {/* PEDIR INDICACIONES */}
      <div className="content-section">
        <h3>1. Pedir Indicaciones</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Frases para preguntar cómo llegar a un lugar cuando estás en la calle.
        </p>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {askForDirections.map((item, i) => <PhraseCard key={i} {...item} />)}
        </div>
      </div>

      {/* BUSCADOR GENERAL DE FRASES DE INDICACIONES */}
      <div className="content-section">
        <h3>2. Dar Indicaciones: Vocabulario Extendido</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Más de {allDirectionPhrases.length} frases organizadas en movimientos básicos, vueltas/curvas, puntos de referencia, distancia/tiempo y direcciones dentro de un edificio — cada una con un ejemplo de oración. Usa el buscador para encontrar una frase específica en cualquier categoría.
        </p>

        <div style={{ marginBottom: '12px' }}>
          <input
            type="text"
            className="search-input"
            placeholder="🔍 Buscar frase, traducción o categoría (ej. 'bridge', 'esquina', 'curva')..."
            value={directionsSearch}
            onChange={(e) => setDirectionsSearch(e.target.value)}
          />
        </div>

        {filteredDirections && (
          <>
            <span className="result-count">{filteredDirections.length} de {allDirectionPhrases.length} frases</span>
            <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
              {filteredDirections.map((item, i) => (
                <DirectionCard key={i} phrase={item.phrase} es={item.es} example={item.example} exampleEs={item.exampleEs} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* MOVIMIENTOS BÁSICOS */}
      {!directionsSearch.trim() && (
        <div className="content-section">
          <h3>2a. Movimientos Básicos</h3>
          <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
            {basicMovements.map((item, i) => <DirectionCard key={i} phrase={item.phrase} es={item.es} example={item.example} exampleEs={item.exampleEs} />)}
          </div>
        </div>
      )}

      {/* VUELTAS, CURVAS E INTERSECCIONES */}
      {!directionsSearch.trim() && (
        <div className="content-section">
          <h3>2b. Vueltas, Curvas e Intersecciones</h3>
          <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
            {turnsAndCurves.map((item, i) => <DirectionCard key={i} phrase={item.phrase} es={item.es} example={item.example} exampleEs={item.exampleEs} />)}
          </div>
        </div>
      )}

      {/* PUNTOS DE REFERENCIA Y UBICACIÓN */}
      {!directionsSearch.trim() && (
        <div className="content-section">
          <h3>2c. Puntos de Referencia y Ubicación</h3>
          <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
            {landmarksAndLocation.map((item, i) => <DirectionCard key={i} phrase={item.phrase} es={item.es} example={item.example} exampleEs={item.exampleEs} />)}
          </div>

          <div className="insider-box" style={{ marginTop: '20px' }}>
            <div className="insider-title"><span>💡</span> "Between... and..." necesita dos lugares</div>
            <div className="insider-content">
              <strong>Between</strong> siempre va con dos referencias conectadas por <strong>and</strong>: <em>"between the bakery and the bank"</em>. Si solo hay un punto de referencia, usa <strong>next to</strong>, <strong>across from</strong> o <strong>past</strong> en su lugar.
            </div>
          </div>
        </div>
      )}

      {/* DISTANCIA Y TIEMPO */}
      {!directionsSearch.trim() && (
        <div className="content-section">
          <h3>2d. Distancia y Tiempo</h3>
          <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
            {distanceAndTime.map((item, i) => <DirectionCard key={i} phrase={item.phrase} es={item.es} example={item.example} exampleEs={item.exampleEs} />)}
          </div>
        </div>
      )}

      {/* DENTRO DE UN EDIFICIO */}
      {!directionsSearch.trim() && (
        <div className="content-section">
          <h3>2e. Direcciones Dentro de un Edificio</h3>
          <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
            La misma gramática de dar indicaciones en la calle (imperativos + preposiciones de lugar) aplica dentro de un edificio, oficina o negocio — solo cambian los puntos de referencia: pasillos, pisos, elevadores y puertas.
          </p>
          <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
            {indoorDirections.map((item, i) => <DirectionCard key={i} phrase={item.phrase} es={item.es} example={item.example} exampleEs={item.exampleEs} />)}
          </div>

          <div className="insider-box" style={{ marginTop: '20px' }}>
            <div className="insider-title"><span>🏢</span> "Floor" y ordinales</div>
            <div className="insider-content">
              Para hablar de pisos, usa el número <strong>ordinal</strong>: <em>"It's on the third floor"</em> (Está en el tercer piso). En inglés americano, la planta baja es <strong>"the ground floor"</strong> o simplemente <strong>"the first floor"</strong>; en inglés británico, "the first floor" ya es el segundo piso — ¡pregunta si no estás seguro!
            </div>
          </div>
        </div>
      )}

      {/* CONFIRMAR QUE ENTENDISTE */}
      <div className="content-section">
        <h3>3. Confirmar que Entendiste</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Cuando alguien te da indicaciones rápido, está bien pedir que repitan o confirmar lo que entendiste.
        </p>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {checkUnderstanding.map((item, i) => <PhraseCard key={i} {...item} />)}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>🗣️</span> Ejemplo de conversación completa</div>
          <div className="insider-content">
            <strong>A:</strong> "Excuse me, how do I get to the library?" <br />
            <strong>B:</strong> "Go straight ahead, then turn left at the traffic light. Go past the bridge, and it's on the corner, between the bank and the bakery." <br />
            <strong>A:</strong> "Okay, straight ahead, left at the light, past the bridge, and it's between the bank and the bakery. Got it. Thank you!" <br />
            <strong>B:</strong> "You're welcome. It's about a five-minute walk. You can't miss it."
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen: Dar Indicaciones</h4>
          <p>Practica pedir y dar indicaciones detalladas para llegar a distintos lugares.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default FunctionalTopic;

import React, { useState, useMemo } from 'react';
import Pagination, { DEFAULT_PAGE_SIZE } from '../../../components/Pagination';
import SortToggle, { sortByWord, DEFAULT_SORT } from '../../../components/SortToggle';

const speak = (text) => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }
};

const VocabularyTopic = () => {
  const [placeSearch, setPlaceSearch] = useState('');
  const [placePage, setPlacePage] = useState(1);
  const [placePageSize, setPlacePageSize] = useState(DEFAULT_PAGE_SIZE);
  const [placeSort, setPlaceSort] = useState(DEFAULT_SORT);
  const [natureSearch, setNatureSearch] = useState('');
  const [naturePage, setNaturePage] = useState(1);
  const [naturePageSize, setNaturePageSize] = useState(DEFAULT_PAGE_SIZE);
  const [natureSort, setNatureSort] = useState(DEFAULT_SORT);
  const [buildingSearch, setBuildingSearch] = useState('');
  const [buildingPage, setBuildingPage] = useState(1);
  const [buildingPageSize, setBuildingPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [buildingSort, setBuildingSort] = useState(DEFAULT_SORT);

  const allPlaces = useMemo(() => [
    // Lugares Públicos
    { word: "airport", translation: "aeropuerto", category: "Lugares Públicos" },
    { word: "bus station", translation: "central de autobuses", category: "Lugares Públicos" },
    { word: "city hall", translation: "ayuntamiento", category: "Lugares Públicos" },
    { word: "courthouse", translation: "juzgado", category: "Lugares Públicos" },
    { word: "fire station", translation: "estación de bomberos", category: "Lugares Públicos" },
    { word: "hospital", translation: "hospital", category: "Lugares Públicos" },
    { word: "library", translation: "biblioteca", category: "Lugares Públicos" },
    { word: "parking lot", translation: "estacionamiento", category: "Lugares Públicos" },
    { word: "police station", translation: "estación de policía", category: "Lugares Públicos" },
    { word: "post office", translation: "oficina de correos", category: "Lugares Públicos" },
    { word: "public restroom", translation: "baño público", category: "Lugares Públicos" },
    { word: "school", translation: "escuela", category: "Lugares Públicos" },
    { word: "town square", translation: "plaza del pueblo", category: "Lugares Públicos" },
    { word: "train station", translation: "estación de tren", category: "Lugares Públicos" },
    { word: "university", translation: "universidad", category: "Lugares Públicos" },
    // Comercios y Servicios
    { word: "bakery", translation: "panadería", category: "Comercios y Servicios" },
    { word: "bank", translation: "banco", category: "Comercios y Servicios" },
    { word: "barber shop", translation: "barbería", category: "Comercios y Servicios" },
    { word: "bookstore", translation: "librería", category: "Comercios y Servicios" },
    { word: "butcher shop", translation: "carnicería", category: "Comercios y Servicios" },
    { word: "convenience store", translation: "tienda de conveniencia", category: "Comercios y Servicios" },
    { word: "drugstore / pharmacy", translation: "farmacia", category: "Comercios y Servicios" },
    { word: "dry cleaner", translation: "tintorería", category: "Comercios y Servicios" },
    { word: "gas station", translation: "gasolinera", category: "Comercios y Servicios" },
    { word: "hair salon", translation: "salón de belleza", category: "Comercios y Servicios" },
    { word: "hardware store", translation: "ferretería", category: "Comercios y Servicios" },
    { word: "laundromat", translation: "lavandería", category: "Comercios y Servicios" },
    { word: "mall", translation: "centro comercial", category: "Comercios y Servicios" },
    { word: "market", translation: "mercado", category: "Comercios y Servicios" },
    { word: "supermarket", translation: "supermercado", category: "Comercios y Servicios" },
    // Lugares de Ocio
    { word: "amusement park", translation: "parque de diversiones", category: "Lugares de Ocio" },
    { word: "art gallery", translation: "galería de arte", category: "Lugares de Ocio" },
    { word: "café", translation: "café", category: "Lugares de Ocio" },
    { word: "cinema / movie theater", translation: "cine", category: "Lugares de Ocio" },
    { word: "gym", translation: "gimnasio", category: "Lugares de Ocio" },
    { word: "museum", translation: "museo", category: "Lugares de Ocio" },
    { word: "nightclub", translation: "antro / club nocturno", category: "Lugares de Ocio" },
    { word: "park", translation: "parque", category: "Lugares de Ocio" },
    { word: "playground", translation: "área de juegos", category: "Lugares de Ocio" },
    { word: "restaurant", translation: "restaurante", category: "Lugares de Ocio" },
    { word: "stadium", translation: "estadio", category: "Lugares de Ocio" },
    { word: "swimming pool", translation: "alberca / piscina", category: "Lugares de Ocio" },
    { word: "theater", translation: "teatro", category: "Lugares de Ocio" },
    { word: "zoo", translation: "zoológico", category: "Lugares de Ocio" },
    // Transporte e Infraestructura
    { word: "bike lane", translation: "ciclovía", category: "Transporte e Infraestructura" },
    { word: "bridge", translation: "puente", category: "Transporte e Infraestructura" },
    { word: "bus stop", translation: "parada de autobús", category: "Transporte e Infraestructura" },
    { word: "corner", translation: "esquina", category: "Transporte e Infraestructura" },
    { word: "crosswalk", translation: "cruce peatonal", category: "Transporte e Infraestructura" },
    { word: "highway", translation: "carretera / autopista", category: "Transporte e Infraestructura" },
    { word: "intersection", translation: "cruce / intersección", category: "Transporte e Infraestructura" },
    { word: "roundabout", translation: "glorieta / rotonda", category: "Transporte e Infraestructura" },
    { word: "sidewalk", translation: "acera / banqueta", category: "Transporte e Infraestructura" },
    { word: "street", translation: "calle", category: "Transporte e Infraestructura" },
    { word: "traffic light", translation: "semáforo", category: "Transporte e Infraestructura" },
    { word: "tunnel", translation: "túnel", category: "Transporte e Infraestructura" }
  ], []);

  const allNature = useMemo(() => [
    // Paisaje
    { word: "cave", translation: "cueva", category: "Paisaje" },
    { word: "cliff", translation: "acantilado", category: "Paisaje" },
    { word: "desert", translation: "desierto", category: "Paisaje" },
    { word: "field", translation: "campo", category: "Paisaje" },
    { word: "forest", translation: "bosque", category: "Paisaje" },
    { word: "hill", translation: "colina", category: "Paisaje" },
    { word: "island", translation: "isla", category: "Paisaje" },
    { word: "jungle", translation: "selva", category: "Paisaje" },
    { word: "meadow", translation: "pradera", category: "Paisaje" },
    { word: "mountain", translation: "montaña", category: "Paisaje" },
    { word: "plain", translation: "llanura", category: "Paisaje" },
    { word: "trail / path", translation: "sendero", category: "Paisaje" },
    { word: "valley", translation: "valle", category: "Paisaje" },
    { word: "volcano", translation: "volcán", category: "Paisaje" },
    { word: "waterfall", translation: "cascada", category: "Paisaje" },
    // Cuerpos de Agua
    { word: "bay", translation: "bahía", category: "Cuerpos de Agua" },
    { word: "beach", translation: "playa", category: "Cuerpos de Agua" },
    { word: "coast", translation: "costa", category: "Cuerpos de Agua" },
    { word: "lake", translation: "lago", category: "Cuerpos de Agua" },
    { word: "ocean", translation: "océano", category: "Cuerpos de Agua" },
    { word: "pond", translation: "estanque", category: "Cuerpos de Agua" },
    { word: "river", translation: "río", category: "Cuerpos de Agua" },
    { word: "sea", translation: "mar", category: "Cuerpos de Agua" },
    { word: "shore", translation: "orilla", category: "Cuerpos de Agua" },
    { word: "stream", translation: "arroyo", category: "Cuerpos de Agua" },
    // Plantas y Vegetación
    { word: "bush", translation: "arbusto", category: "Plantas y Vegetación" },
    { word: "flower", translation: "flor", category: "Plantas y Vegetación" },
    { word: "grass", translation: "pasto / césped", category: "Plantas y Vegetación" },
    { word: "leaf", translation: "hoja", category: "Plantas y Vegetación" },
    { word: "moss", translation: "musgo", category: "Plantas y Vegetación" },
    { word: "root", translation: "raíz", category: "Plantas y Vegetación" },
    { word: "tree", translation: "árbol", category: "Plantas y Vegetación" },
    { word: "vine", translation: "enredadera", category: "Plantas y Vegetación" },
    // Cielo y Clima
    { word: "cloud", translation: "nube", category: "Cielo y Clima" },
    { word: "fog", translation: "niebla", category: "Cielo y Clima" },
    { word: "moon", translation: "luna", category: "Cielo y Clima" },
    { word: "rainbow", translation: "arcoíris", category: "Cielo y Clima" },
    { word: "sky", translation: "cielo", category: "Cielo y Clima" },
    { word: "star", translation: "estrella", category: "Cielo y Clima" },
    { word: "storm", translation: "tormenta", category: "Cielo y Clima" },
    { word: "sun", translation: "sol", category: "Cielo y Clima" },
    { word: "wind", translation: "viento", category: "Cielo y Clima" },
    // Animales Salvajes
    { word: "bear", translation: "oso", category: "Animales Salvajes" },
    { word: "bird", translation: "ave / pájaro", category: "Animales Salvajes" },
    { word: "deer", translation: "venado", category: "Animales Salvajes" },
    { word: "eagle", translation: "águila", category: "Animales Salvajes" },
    { word: "fox", translation: "zorro", category: "Animales Salvajes" },
    { word: "insect", translation: "insecto", category: "Animales Salvajes" },
    { word: "snake", translation: "serpiente", category: "Animales Salvajes" },
    { word: "squirrel", translation: "ardilla", category: "Animales Salvajes" },
    { word: "wolf", translation: "lobo", category: "Animales Salvajes" }
  ], []);

  const allBuilding = useMemo(() => [
    // Partes del Edificio
    { word: "basement", translation: "sótano", category: "Partes del Edificio" },
    { word: "corridor / hallway", translation: "pasillo", category: "Partes del Edificio" },
    { word: "elevator / lift", translation: "elevador / ascensor", category: "Partes del Edificio" },
    { word: "emergency exit", translation: "salida de emergencia", category: "Partes del Edificio" },
    { word: "entrance", translation: "entrada", category: "Partes del Edificio" },
    { word: "escalator", translation: "escalera eléctrica", category: "Partes del Edificio" },
    { word: "exit", translation: "salida", category: "Partes del Edificio" },
    { word: "fire escape", translation: "escalera de incendios", category: "Partes del Edificio" },
    { word: "floor (level)", translation: "piso (nivel)", category: "Partes del Edificio" },
    { word: "front door", translation: "puerta principal", category: "Partes del Edificio" },
    { word: "ground floor", translation: "planta baja", category: "Partes del Edificio" },
    { word: "lobby", translation: "vestíbulo / lobby", category: "Partes del Edificio" },
    { word: "main entrance", translation: "entrada principal", category: "Partes del Edificio" },
    { word: "parking garage", translation: "estacionamiento (edificio)", category: "Partes del Edificio" },
    { word: "revolving door", translation: "puerta giratoria", category: "Partes del Edificio" },
    { word: "rooftop", translation: "azotea", category: "Partes del Edificio" },
    { word: "stairs / staircase", translation: "escaleras", category: "Partes del Edificio" },
    { word: "top floor", translation: "último piso", category: "Partes del Edificio" },
    { word: "underground parking", translation: "estacionamiento subterráneo", category: "Partes del Edificio" },
    // Oficina y Espacios de Trabajo
    { word: "boardroom", translation: "sala de juntas (directiva)", category: "Oficina y Espacios de Trabajo" },
    { word: "breakroom", translation: "área de descanso", category: "Oficina y Espacios de Trabajo" },
    { word: "conference room", translation: "sala de conferencias", category: "Oficina y Espacios de Trabajo" },
    { word: "cubicle", translation: "cubículo", category: "Oficina y Espacios de Trabajo" },
    { word: "front desk / reception desk", translation: "recepción", category: "Oficina y Espacios de Trabajo" },
    { word: "HR department", translation: "departamento de RH", category: "Oficina y Espacios de Trabajo" },
    { word: "IT department", translation: "departamento de TI", category: "Oficina y Espacios de Trabajo" },
    { word: "kitchenette", translation: "cocineta", category: "Oficina y Espacios de Trabajo" },
    { word: "meeting room", translation: "sala de juntas", category: "Oficina y Espacios de Trabajo" },
    { word: "office", translation: "oficina", category: "Oficina y Espacios de Trabajo" },
    { word: "open-plan office", translation: "oficina de planta abierta", category: "Oficina y Espacios de Trabajo" },
    { word: "printer room", translation: "cuarto de impresión", category: "Oficina y Espacios de Trabajo" },
    { word: "private office", translation: "oficina privada", category: "Oficina y Espacios de Trabajo" },
    { word: "reception area", translation: "área de recepción", category: "Oficina y Espacios de Trabajo" },
    { word: "server room", translation: "cuarto de servidores", category: "Oficina y Espacios de Trabajo" },
    { word: "storage room", translation: "cuarto de almacenamiento", category: "Oficina y Espacios de Trabajo" },
    { word: "supply closet", translation: "armario de suministros", category: "Oficina y Espacios de Trabajo" },
    { word: "waiting room", translation: "sala de espera", category: "Oficina y Espacios de Trabajo" },
    // Señalización, Seguridad y Objetos
    { word: "badge / ID card", translation: "gafete / credencial", category: "Señalización, Seguridad y Objetos" },
    { word: "directory board", translation: "directorio del edificio", category: "Señalización, Seguridad y Objetos" },
    { word: "elevator button", translation: "botón del elevador", category: "Señalización, Seguridad y Objetos" },
    { word: "fire alarm", translation: "alarma de incendios", category: "Señalización, Seguridad y Objetos" },
    { word: "fire extinguisher", translation: "extintor", category: "Señalización, Seguridad y Objetos" },
    { word: "floor number", translation: "número de piso", category: "Señalización, Seguridad y Objetos" },
    { word: "handrail", translation: "pasamanos", category: "Señalización, Seguridad y Objetos" },
    { word: "intercom", translation: "intercomunicador", category: "Señalización, Seguridad y Objetos" },
    { word: "keycard", translation: "tarjeta de acceso", category: "Señalización, Seguridad y Objetos" },
    { word: "restroom / bathroom", translation: "baño", category: "Señalización, Seguridad y Objetos" },
    { word: "security camera", translation: "cámara de seguridad", category: "Señalización, Seguridad y Objetos" },
    { word: "security guard", translation: "guardia de seguridad", category: "Señalización, Seguridad y Objetos" },
    { word: "sign", translation: "letrero / señal", category: "Señalización, Seguridad y Objetos" },
    { word: "turnstile", translation: "torniquete", category: "Señalización, Seguridad y Objetos" },
    { word: "visitor's pass", translation: "pase de visitante", category: "Señalización, Seguridad y Objetos" },
    { word: "wheelchair ramp", translation: "rampa para silla de ruedas", category: "Señalización, Seguridad y Objetos" }
  ], []);

  const thereConfusables = useMemo(() => [
    { word: "there", translation: "ahí / allí (lugar) — también en 'there is/are'", example: "The keys are over there.", exampleEs: "Las llaves están por ahí." },
    { word: "their", translation: "su / de ellos (posesivo)", example: "That is their house.", exampleEs: "Esa es su casa (de ellos)." },
    { word: "they're", translation: "contracción de 'they are'", example: "They're at the park.", exampleEs: "Ellos están en el parque." }
  ], []);

  const filteredPlaces = useMemo(() => sortByWord(allPlaces.filter((item) =>
    item.word.toLowerCase().includes(placeSearch.toLowerCase()) ||
    item.translation.toLowerCase().includes(placeSearch.toLowerCase()) ||
    item.category.toLowerCase().includes(placeSearch.toLowerCase())
  ), placeSort), [allPlaces, placeSearch, placeSort]);

  const filteredNature = useMemo(() => sortByWord(allNature.filter((item) =>
    item.word.toLowerCase().includes(natureSearch.toLowerCase()) ||
    item.translation.toLowerCase().includes(natureSearch.toLowerCase()) ||
    item.category.toLowerCase().includes(natureSearch.toLowerCase())
  ), natureSort), [allNature, natureSearch, natureSort]);

  const filteredBuilding = useMemo(() => sortByWord(allBuilding.filter((item) =>
    item.word.toLowerCase().includes(buildingSearch.toLowerCase()) ||
    item.translation.toLowerCase().includes(buildingSearch.toLowerCase()) ||
    item.category.toLowerCase().includes(buildingSearch.toLowerCase())
  ), buildingSort), [allBuilding, buildingSearch, buildingSort]);

  const placeTotalPages = Math.max(1, Math.ceil(filteredPlaces.length / placePageSize));
  const paginatedPlaces = filteredPlaces.slice((placePage - 1) * placePageSize, placePage * placePageSize);

  const natureTotalPages = Math.max(1, Math.ceil(filteredNature.length / naturePageSize));
  const paginatedNature = filteredNature.slice((naturePage - 1) * naturePageSize, naturePage * naturePageSize);

  const buildingTotalPages = Math.max(1, Math.ceil(filteredBuilding.length / buildingPageSize));
  const paginatedBuilding = filteredBuilding.slice((buildingPage - 1) * buildingPageSize, buildingPage * buildingPageSize);

  const handlePlaceSearch = (value) => { setPlaceSearch(value); setPlacePage(1); };
  const handlePlacePageSize = (size) => { setPlacePageSize(size); setPlacePage(1); };
  const handleNatureSearch = (value) => { setNatureSearch(value); setNaturePage(1); };
  const handleNaturePageSize = (size) => { setNaturePageSize(size); setNaturePage(1); };
  const handleBuildingSearch = (value) => { setBuildingSearch(value); setBuildingPage(1); };
  const handleBuildingPageSize = (size) => { setBuildingPageSize(size); setBuildingPage(1); };

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 6 • Vocabulario</span>
        <h2>Lugares de la Ciudad y la Naturaleza</h2>
        <p className="topic-intro">
          Vocabulario para describir tu ciudad o pueblo y el mundo natural que te rodea — la base para usar "there is / there are" y dar indicaciones.
        </p>
      </div>

      {/* LUGARES */}
      <div className="content-section">
        <h3>1. Lugares en la Ciudad</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          {allPlaces.length} lugares organizados en públicos, comercios/servicios, ocio y transporte/infraestructura.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            className="search-input"
            style={{ flex: 1, minWidth: '200px' }}
            placeholder="🔍 Buscar lugar, traducción o categoría..."
            value={placeSearch}
            onChange={(e) => handlePlaceSearch(e.target.value)}
          />
          <SortToggle mode={placeSort} onChange={setPlaceSort} />
        </div>
        <span className="result-count">{filteredPlaces.length} de {allPlaces.length} lugares</span>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
          {paginatedPlaces.map((item, index) => (
            <div key={index} className="example-item" style={{ borderLeft: '3px solid var(--color-evolve1)' }}>
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{item.word}</span>
                <button className="audio-btn" onClick={() => speak(item.word)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ marginTop: '6px', fontSize: '0.85rem' }}>
                {item.translation} <span className="category-tag" style={{ float: 'right' }}>{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          page={placePage}
          totalPages={placeTotalPages}
          totalItems={filteredPlaces.length}
          onChange={setPlacePage}
          itemsPerPage={placePageSize}
          onItemsPerPageChange={handlePlacePageSize}
        />
      </div>

      {/* NATURALEZA */}
      <div className="content-section">
        <h3>2. Naturaleza y Paisaje</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          {allNature.length} palabras sobre paisaje, cuerpos de agua, plantas, cielo/clima y animales salvajes.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            className="search-input"
            style={{ flex: 1, minWidth: '200px' }}
            placeholder="🔍 Buscar palabra, traducción o categoría..."
            value={natureSearch}
            onChange={(e) => handleNatureSearch(e.target.value)}
          />
          <SortToggle mode={natureSort} onChange={setNatureSort} />
        </div>
        <span className="result-count">{filteredNature.length} de {allNature.length} palabras</span>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
          {paginatedNature.map((item, index) => (
            <div key={index} className="example-item" style={{ borderLeft: '3px solid var(--color-evolve1)' }}>
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{item.word}</span>
                <button className="audio-btn" onClick={() => speak(item.word)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ marginTop: '6px', fontSize: '0.85rem' }}>
                {item.translation} <span className="category-tag" style={{ float: 'right' }}>{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          page={naturePage}
          totalPages={natureTotalPages}
          totalItems={filteredNature.length}
          onChange={setNaturePage}
          itemsPerPage={naturePageSize}
          onItemsPerPageChange={handleNaturePageSize}
        />
      </div>

      {/* EDIFICIOS Y OFICINAS */}
      <div className="content-section">
        <h3>3. Edificios y Oficinas: Vocabulario de Interiores</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          {allBuilding.length} palabras para moverte dentro de un edificio, oficina o negocio — partes del edificio, espacios de trabajo, y señalización/seguridad. Las vas a necesitar para dar indicaciones dentro de un lugar, no solo en la calle.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            className="search-input"
            style={{ flex: 1, minWidth: '200px' }}
            placeholder="🔍 Buscar palabra, traducción o categoría..."
            value={buildingSearch}
            onChange={(e) => handleBuildingSearch(e.target.value)}
          />
          <SortToggle mode={buildingSort} onChange={setBuildingSort} />
        </div>
        <span className="result-count">{filteredBuilding.length} de {allBuilding.length} palabras</span>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
          {paginatedBuilding.map((item, index) => (
            <div key={index} className="example-item" style={{ borderLeft: '3px solid var(--color-evolve1)' }}>
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{item.word}</span>
                <button className="audio-btn" onClick={() => speak(item.word)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ marginTop: '6px', fontSize: '0.85rem' }}>
                {item.translation} <span className="category-tag" style={{ float: 'right' }}>{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          page={buildingPage}
          totalPages={buildingTotalPages}
          totalItems={filteredBuilding.length}
          onChange={setBuildingPage}
          itemsPerPage={buildingPageSize}
          onItemsPerPageChange={handleBuildingPageSize}
        />
      </div>

      {/* THERE / THEIR / THEY'RE */}
      <div className="content-section">
        <h3>4. No los confundas: There / Their / They're</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Estas tres palabras suenan exactamente igual en inglés, pero significan cosas muy distintas. Vas a usar mucho "there" en esta unidad con "there is / there are".
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {thereConfusables.map((item, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span><strong>{item.word}</strong></span>
                <button className="audio-btn" onClick={() => speak(item.word)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ marginTop: '4px', fontSize: '0.85rem' }}>{item.translation}</div>
              <div className="example-en" style={{ justifyContent: 'space-between', marginTop: '10px', fontSize: '0.9rem' }}>
                <span>{item.example}</span>
                <button className="audio-btn" onClick={() => speak(item.example)} title="Escuchar ejemplo" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ fontSize: '0.85rem' }}>{item.exampleEs}</div>
            </div>
          ))}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>👂</span> Se pronuncian igual</div>
          <div className="insider-content">
            Las tres se pronuncian /ðer/. La única forma de distinguirlas al escuchar es por el <strong>contexto</strong> de la oración. Practica leyendo cada ejemplo en voz alta y fíjate en el significado, no en el sonido.
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen de Vocabulario</h4>
          <p>Pon a prueba tu conocimiento de lugares de la ciudad y naturaleza.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default VocabularyTopic;

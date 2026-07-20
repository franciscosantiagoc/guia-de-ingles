import React, { useState, useMemo } from 'react';
import Pagination, { DEFAULT_PAGE_SIZE } from '../../../components/Pagination';
import SortToggle, { sortByWord, DEFAULT_SORT } from '../../../components/SortToggle';

const VocabularyTopic = () => {
  const [roomSearch, setRoomSearch] = useState('');
  const [roomSort, setRoomSort] = useState(DEFAULT_SORT);
  const [furnitureSearch, setFurnitureSearch] = useState('');
  const [furniturePage, setFurniturePage] = useState(1);
  const [furniturePageSize, setFurniturePageSize] = useState(DEFAULT_PAGE_SIZE);
  const [furnitureSort, setFurnitureSort] = useState(DEFAULT_SORT);
  const [foodSearch, setFoodSearch] = useState('');
  const [foodSort, setFoodSort] = useState(DEFAULT_SORT);

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const allRooms = useMemo(() => [
    { word: "attic", translation: "ático / desván" },
    { word: "backyard", translation: "patio trasero" },
    { word: "balcony", translation: "balcón" },
    { word: "basement", translation: "sótano" },
    { word: "bathroom", translation: "baño" },
    { word: "bedroom", translation: "dormitorio / recámara" },
    { word: "closet", translation: "clóset / armario empotrado" },
    { word: "den", translation: "cuarto de estar / estudio pequeño" },
    { word: "dining room", translation: "comedor" },
    { word: "garage", translation: "garaje" },
    { word: "garden", translation: "jardín" },
    { word: "guest room", translation: "cuarto de huéspedes" },
    { word: "hallway", translation: "pasillo" },
    { word: "home gym", translation: "gimnasio en casa" },
    { word: "home office", translation: "oficina en casa" },
    { word: "kitchen", translation: "cocina" },
    { word: "laundry room", translation: "cuarto de lavado" },
    { word: "living room", translation: "sala" },
    { word: "loft", translation: "altillo / loft" },
    { word: "mudroom", translation: "cuarto de entrada (para dejar zapatos/abrigos)" },
    { word: "pantry", translation: "despensa" },
    { word: "playroom", translation: "cuarto de juegos" },
    { word: "staircase", translation: "escalera" },
    { word: "storage room", translation: "cuarto de almacenaje" },
    { word: "study", translation: "estudio" },
    { word: "sunroom / conservatory", translation: "cuarto soleado / solárium" },
    { word: "utility room", translation: "cuarto de servicio" },
    { word: "walk-in closet", translation: "vestidor" }
  ], []);

  const allFurniture = useMemo(() => [
    // Sala
    { word: "armchair", translation: "sillón", room: "Sala" },
    { word: "blinds", translation: "persianas", room: "Sala" },
    { word: "bookshelf", translation: "librero", room: "Sala" },
    { word: "cabinet", translation: "gabinete", room: "Sala" },
    { word: "coffee table", translation: "mesa de centro", room: "Sala" },
    { word: "curtains", translation: "cortinas", room: "Sala" },
    { word: "cushion / pillow", translation: "cojín", room: "Sala" },
    { word: "entertainment center", translation: "centro de entretenimiento", room: "Sala" },
    { word: "fireplace", translation: "chimenea", room: "Sala" },
    { word: "houseplant", translation: "planta de interior", room: "Sala" },
    { word: "lamp", translation: "lámpara", room: "Sala" },
    { word: "mirror", translation: "espejo", room: "Sala" },
    { word: "ottoman", translation: "otomana / puf", room: "Sala" },
    { word: "recliner", translation: "sillón reclinable", room: "Sala" },
    { word: "rug / carpet", translation: "alfombra", room: "Sala" },
    { word: "side table", translation: "mesa auxiliar", room: "Sala" },
    { word: "sofa / couch", translation: "sofá", room: "Sala" },
    { word: "TV stand", translation: "mueble para TV", room: "Sala" },
    { word: "wall art / painting", translation: "cuadro / pintura de pared", room: "Sala" },
    // Dormitorio
    { word: "alarm clock", translation: "reloj despertador", room: "Dormitorio" },
    { word: "bed", translation: "cama", room: "Dormitorio" },
    { word: "blanket", translation: "cobija / manta", room: "Dormitorio" },
    { word: "bunk bed", translation: "litera", room: "Dormitorio" },
    { word: "chair", translation: "silla", room: "Dormitorio" },
    { word: "crib", translation: "cuna", room: "Dormitorio" },
    { word: "desk", translation: "escritorio", room: "Dormitorio" },
    { word: "dresser", translation: "cómoda", room: "Dormitorio" },
    { word: "full-length mirror", translation: "espejo de cuerpo completo", room: "Dormitorio" },
    { word: "hangers", translation: "ganchos / perchas", room: "Dormitorio" },
    { word: "laundry basket", translation: "cesto de ropa", room: "Dormitorio" },
    { word: "mattress", translation: "colchón", room: "Dormitorio" },
    { word: "nightstand", translation: "mesita de noche", room: "Dormitorio" },
    { word: "pillow", translation: "almohada", room: "Dormitorio" },
    { word: "vanity", translation: "tocador", room: "Dormitorio" },
    { word: "wardrobe / closet", translation: "armario", room: "Dormitorio" },
    // Cocina
    { word: "bar stool", translation: "banco de bar", room: "Cocina" },
    { word: "blender", translation: "licuadora", room: "Cocina" },
    { word: "coffee maker", translation: "cafetera", room: "Cocina" },
    { word: "counter", translation: "barra / mesón", room: "Cocina" },
    { word: "dish rack", translation: "escurridor de platos", room: "Cocina" },
    { word: "dishwasher", translation: "lavavajillas", room: "Cocina" },
    { word: "freezer", translation: "congelador", room: "Cocina" },
    { word: "garbage disposal", translation: "triturador de basura", room: "Cocina" },
    { word: "kettle", translation: "hervidor", room: "Cocina" },
    { word: "kitchen cabinet", translation: "alacena", room: "Cocina" },
    { word: "kitchen island", translation: "isla de cocina", room: "Cocina" },
    { word: "kitchen table", translation: "mesa de cocina", room: "Cocina" },
    { word: "microwave", translation: "microondas", room: "Cocina" },
    { word: "oven", translation: "horno", room: "Cocina" },
    { word: "refrigerator / fridge", translation: "refrigerador", room: "Cocina" },
    { word: "sink", translation: "fregadero", room: "Cocina" },
    { word: "stove", translation: "estufa", room: "Cocina" },
    { word: "toaster", translation: "tostadora", room: "Cocina" },
    { word: "trash can", translation: "bote de basura", room: "Cocina" },
    // Baño
    { word: "bath mat", translation: "tapete de baño", room: "Baño" },
    { word: "bathroom mirror", translation: "espejo de baño", room: "Baño" },
    { word: "bathroom sink", translation: "lavabo", room: "Baño" },
    { word: "bathtub", translation: "tina / bañera", room: "Baño" },
    { word: "laundry hamper", translation: "cesto de ropa sucia", room: "Baño" },
    { word: "medicine cabinet", translation: "botiquín", room: "Baño" },
    { word: "scale", translation: "báscula", room: "Baño" },
    { word: "shower", translation: "regadera / ducha", room: "Baño" },
    { word: "shower curtain", translation: "cortina de baño", room: "Baño" },
    { word: "toilet", translation: "inodoro", room: "Baño" },
    { word: "toilet paper holder", translation: "portarrollos", room: "Baño" },
    { word: "towel rack", translation: "toallero", room: "Baño" },
    // Oficina
    { word: "computer", translation: "computadora", room: "Oficina" },
    { word: "desk lamp", translation: "lámpara de escritorio", room: "Oficina" },
    { word: "filing cabinet", translation: "archivero", room: "Oficina" },
    { word: "keyboard", translation: "teclado", room: "Oficina" },
    { word: "monitor", translation: "monitor", room: "Oficina" },
    { word: "office chair", translation: "silla de oficina", room: "Oficina" },
    { word: "office desk", translation: "escritorio de oficina", room: "Oficina" },
    { word: "printer", translation: "impresora", room: "Oficina" },
    { word: "shelf", translation: "repisa / estante", room: "Oficina" },
    { word: "wastebasket", translation: "papelera", room: "Oficina" },
    { word: "whiteboard", translation: "pizarrón blanco", room: "Oficina" },
    // Exterior
    { word: "BBQ grill", translation: "parrilla / asador", room: "Exterior" },
    { word: "hammock", translation: "hamaca", room: "Exterior" },
    { word: "mailbox", translation: "buzón", room: "Exterior" },
    { word: "patio furniture", translation: "muebles de patio", room: "Exterior" }
  ], []);

  const allFoodDrinks = useMemo(() => [
    // Bebida
    { word: "apple juice", translation: "jugo de manzana", type: "Bebida" },
    { word: "beer", translation: "cerveza", type: "Bebida" },
    { word: "coconut water", translation: "agua de coco", type: "Bebida" },
    { word: "coffee", translation: "café", type: "Bebida" },
    { word: "decaf coffee", translation: "café descafeinado", type: "Bebida" },
    { word: "energy drink", translation: "bebida energética", type: "Bebida" },
    { word: "herbal tea", translation: "té de hierbas", type: "Bebida" },
    { word: "hot chocolate", translation: "chocolate caliente", type: "Bebida" },
    { word: "hot cider", translation: "sidra caliente", type: "Bebida" },
    { word: "iced tea", translation: "té helado", type: "Bebida" },
    { word: "juice", translation: "jugo", type: "Bebida" },
    { word: "lemonade", translation: "limonada", type: "Bebida" },
    { word: "milk", translation: "leche", type: "Bebida" },
    { word: "milkshake", translation: "malteada", type: "Bebida" },
    { word: "orange juice", translation: "jugo de naranja", type: "Bebida" },
    { word: "smoothie", translation: "batido", type: "Bebida" },
    { word: "soda / pop", translation: "refresco", type: "Bebida" },
    { word: "sparkling water", translation: "agua mineral / con gas", type: "Bebida" },
    { word: "sports drink", translation: "bebida deportiva", type: "Bebida" },
    { word: "tea", translation: "té", type: "Bebida" },
    { word: "water", translation: "agua", type: "Bebida" },
    { word: "wine", translation: "vino", type: "Bebida" },
    // Snack
    { word: "brownie", translation: "brownie", type: "Snack" },
    { word: "cake", translation: "pastel", type: "Snack" },
    { word: "candy", translation: "dulces", type: "Snack" },
    { word: "cheese and crackers", translation: "queso con galletas", type: "Snack" },
    { word: "chips", translation: "papas fritas (bolsa)", type: "Snack" },
    { word: "chips and salsa", translation: "totopos con salsa", type: "Snack" },
    { word: "chocolate", translation: "chocolate", type: "Snack" },
    { word: "cookies", translation: "galletas dulces", type: "Snack" },
    { word: "crackers", translation: "galletas saladas", type: "Snack" },
    { word: "donut", translation: "dona", type: "Snack" },
    { word: "dried fruit", translation: "fruta deshidratada", type: "Snack" },
    { word: "fruit", translation: "fruta", type: "Snack" },
    { word: "granola bar", translation: "barra de granola", type: "Snack" },
    { word: "ice cream", translation: "helado", type: "Snack" },
    { word: "muffin", translation: "muffin", type: "Snack" },
    { word: "nuts", translation: "frutos secos", type: "Snack" },
    { word: "pie", translation: "pay / tarta", type: "Snack" },
    { word: "popcorn", translation: "palomitas", type: "Snack" },
    { word: "pretzels", translation: "pretzels", type: "Snack" },
    { word: "sandwich", translation: "sándwich", type: "Snack" },
    { word: "trail mix", translation: "mezcla de frutos secos", type: "Snack" },
    { word: "veggie sticks", translation: "palitos de verdura", type: "Snack" },
    { word: "yogurt", translation: "yogur", type: "Snack" }
  ], []);

  const kSoundWords = useMemo(() => [
    "cabinet", "cake", "candy", "closet", "coffee", "cookie", "couch", "counter", "curtain", "cushion", "kettle", "kitchen"
  ], []);

  const filteredRooms = useMemo(() => sortByWord(allRooms.filter((item) =>
    item.word.toLowerCase().includes(roomSearch.toLowerCase()) ||
    item.translation.toLowerCase().includes(roomSearch.toLowerCase())
  ), roomSort), [allRooms, roomSearch, roomSort]);

  const filteredFurniture = useMemo(() => sortByWord(allFurniture.filter((item) =>
    item.word.toLowerCase().includes(furnitureSearch.toLowerCase()) ||
    item.translation.toLowerCase().includes(furnitureSearch.toLowerCase()) ||
    item.room.toLowerCase().includes(furnitureSearch.toLowerCase())
  ), furnitureSort), [allFurniture, furnitureSearch, furnitureSort]);

  const filteredFoodDrinks = useMemo(() => sortByWord(allFoodDrinks.filter((item) =>
    item.word.toLowerCase().includes(foodSearch.toLowerCase()) ||
    item.translation.toLowerCase().includes(foodSearch.toLowerCase()) ||
    item.type.toLowerCase().includes(foodSearch.toLowerCase())
  ), foodSort), [allFoodDrinks, foodSearch, foodSort]);

  const furnitureTotalPages = Math.max(1, Math.ceil(filteredFurniture.length / furniturePageSize));
  const paginatedFurniture = filteredFurniture.slice((furniturePage - 1) * furniturePageSize, furniturePage * furniturePageSize);

  const handleFurnitureSearch = (value) => {
    setFurnitureSearch(value);
    setFurniturePage(1);
  };

  const handleFurniturePageSize = (size) => {
    setFurniturePageSize(size);
    setFurniturePage(1);
  };

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 3 • Vocabulario</span>
        <h2>La Casa: Habitaciones, Muebles, Bebidas y Snacks</h2>
        <p className="topic-intro">
          Todo lo que necesitas para hablar de tu hogar: las habitaciones, los muebles de cada una, y qué ofrecer de tomar o comer cuando alguien te visita.
        </p>
      </div>

      {/* HABITACIONES */}
      <div className="content-section">
        <h3>1. Habitaciones de la Casa</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          {allRooms.length} espacios comunes en una casa o departamento.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            className="search-input"
            style={{ flex: 1, minWidth: '200px' }}
            placeholder="🔍 Buscar habitación..."
            value={roomSearch}
            onChange={(e) => setRoomSearch(e.target.value)}
          />
          <SortToggle mode={roomSort} onChange={setRoomSort} />
        </div>
        <span className="result-count">{filteredRooms.length} de {allRooms.length} habitaciones</span>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
          {filteredRooms.map((item, index) => (
            <div key={index} className="example-item" style={{ borderLeft: '3px solid var(--color-evolve1)' }}>
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{item.word}</span>
                <button className="audio-btn" onClick={() => speak(item.word)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es">{item.translation}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MUEBLES */}
      <div className="content-section">
        <h3>2. Muebles y Electrodomésticos por Habitación</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Más de {allFurniture.length} objetos organizados por habitación: sala, dormitorio, cocina, baño, oficina y exterior.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            className="search-input"
            style={{ flex: 1, minWidth: '200px' }}
            placeholder="🔍 Buscar mueble, traducción o habitación..."
            value={furnitureSearch}
            onChange={(e) => handleFurnitureSearch(e.target.value)}
          />
          <SortToggle mode={furnitureSort} onChange={setFurnitureSort} />
        </div>
        <span className="result-count">{filteredFurniture.length} de {allFurniture.length} objetos</span>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
          {paginatedFurniture.map((item, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{item.word}</span>
                <button className="audio-btn" onClick={() => speak(item.word)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ marginTop: '6px', fontSize: '0.85rem' }}>
                {item.translation} <span className="category-tag" style={{ float: 'right' }}>{item.room}</span>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          page={furniturePage}
          totalPages={furnitureTotalPages}
          totalItems={filteredFurniture.length}
          onChange={setFurniturePage}
          itemsPerPage={furniturePageSize}
          onItemsPerPageChange={handleFurniturePageSize}
        />
      </div>

      {/* BEBIDAS Y SNACKS */}
      <div className="content-section">
        <h3>3. Bebidas y Snacks</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Vocabulario esencial para ofrecer algo de tomar o comer cuando alguien visita tu casa.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            className="search-input"
            style={{ flex: 1, minWidth: '200px' }}
            placeholder="🔍 Buscar bebida o snack..."
            value={foodSearch}
            onChange={(e) => setFoodSearch(e.target.value)}
          />
          <SortToggle mode={foodSort} onChange={setFoodSort} />
        </div>
        <span className="result-count">{filteredFoodDrinks.length} de {allFoodDrinks.length} palabras</span>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
          {filteredFoodDrinks.map((item, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{item.word}</span>
                <button className="audio-btn" onClick={() => speak(item.word)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ marginTop: '6px', fontSize: '0.85rem' }}>
                {item.translation} <span className="category-tag" style={{ float: 'right' }}>{item.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PRONUNCIACIÓN */}
      <div className="content-section">
        <h3>4. Pronunciación: El sonido /k/ al Inicio de la Palabra</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Muchas palabras de esta unidad (¡y de la casa en general!) empiezan con el sonido duro /k/, escrito con <strong>C</strong> o con <strong>K</strong>.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}>
          {kSoundWords.map((word, index) => (
            <div key={index} className="example-item" style={{ padding: '10px 14px' }}>
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{word}</span>
                <button className="audio-btn" onClick={() => speak(word)} title="Escuchar" style={{ margin: 0, width: '26px', height: '26px' }}>🔊</button>
              </div>
            </div>
          ))}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>🔤</span> ¿Cuándo la C suena /k/ y cuándo suena /s/?</div>
          <div className="insider-content">
            Regla práctica: la <strong>C</strong> suena /k/ (dura) antes de <strong>a, o, u</strong> — como en <em>cabinet, coffee, cushion</em> — o antes de otra consonante — como en <em>closet</em>. La <strong>C</strong> suena /s/ (suave) antes de <strong>e, i, y</strong> — como en <em>city, cent, bicycle</em>. La letra <strong>K</strong> siempre suena /k/, sin excepción.
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen de Vocabulario</h4>
          <p>Pon a prueba tu conocimiento de habitaciones, muebles y comida/bebida para visitas.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default VocabularyTopic;

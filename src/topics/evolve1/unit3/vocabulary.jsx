import React, { useState, useMemo } from 'react';
import Pagination, { DEFAULT_PAGE_SIZE } from '../../../components/Pagination';
import SortToggle, { sortByWord, DEFAULT_SORT } from '../../../components/SortToggle';
import { allRooms as allRoomsData, allFurniture as allFurnitureData, allFoodDrinks as allFoodDrinksData } from '../../../data/vocab/evolve1/unit3';

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

  const allRooms = useMemo(() => allRoomsData, []);

  const allFurniture = useMemo(() => allFurnitureData, []);

  const allFoodDrinks = useMemo(() => allFoodDrinksData, []);

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

import React, { useState, useMemo } from 'react';
import Pagination, { DEFAULT_PAGE_SIZE } from '../../../components/Pagination';
import SortToggle, { sortByWord, DEFAULT_SORT } from '../../../components/SortToggle';
import { allPlaces as allPlacesData, allNature as allNatureData, allBuilding as allBuildingData } from '../../../data/vocab/evolve1/unit6';

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

  const allPlaces = useMemo(() => allPlacesData, []);

  const allNature = useMemo(() => allNatureData, []);

  const allBuilding = useMemo(() => allBuildingData, []);

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

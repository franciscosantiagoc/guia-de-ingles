import React, { useState, useMemo } from 'react';
import Pagination, { DEFAULT_PAGE_SIZE } from '../../../components/Pagination';
import SortToggle, { sortByWord, DEFAULT_SORT } from '../../../components/SortToggle';
import { allDevices as allDevicesData, allTechVerbs as allTechVerbsData, allMusic as allMusicData } from '../../../data/vocab/evolve1/unit4';

const VocabularyTopic = () => {
  const [deviceSearch, setDeviceSearch] = useState('');
  const [devicePage, setDevicePage] = useState(1);
  const [devicePageSize, setDevicePageSize] = useState(DEFAULT_PAGE_SIZE);
  const [deviceSort, setDeviceSort] = useState(DEFAULT_SORT);
  const [verbSearch, setVerbSearch] = useState('');
  const [verbPage, setVerbPage] = useState(1);
  const [verbPageSize, setVerbPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [verbSort, setVerbSort] = useState(DEFAULT_SORT);
  const [musicSearch, setMusicSearch] = useState('');
  const [musicPage, setMusicPage] = useState(1);
  const [musicPageSize, setMusicPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [musicSort, setMusicSort] = useState(DEFAULT_SORT);

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const allDevices = useMemo(() => allDevicesData, []);

  const allTechVerbs = useMemo(() => allTechVerbsData, []);

  const allMusic = useMemo(() => allMusicData, []);

  const stressedExamples = useMemo(() => [
    { sentence: "I REALLY LOVE this SONG.", note: "Se acentúan las palabras de contenido: really, love, song." },
    { sentence: "She DOWNLOADS MUSIC every DAY.", note: "El verbo principal y el sustantivo llevan el acento, no el sujeto ni el auxiliar." },
    { sentence: "We WATCH VIDEOS on our PHONES.", note: "Watch, videos y phones son las palabras con más energía en la oración." }
  ], []);

  const filteredDevices = useMemo(() => sortByWord(allDevices.filter((item) =>
    item.word.toLowerCase().includes(deviceSearch.toLowerCase()) ||
    item.translation.toLowerCase().includes(deviceSearch.toLowerCase()) ||
    item.category.toLowerCase().includes(deviceSearch.toLowerCase())
  ), deviceSort), [allDevices, deviceSearch, deviceSort]);

  const filteredVerbs = useMemo(() => sortByWord(allTechVerbs.filter((item) =>
    item.word.toLowerCase().includes(verbSearch.toLowerCase()) ||
    item.translation.toLowerCase().includes(verbSearch.toLowerCase()) ||
    item.example.toLowerCase().includes(verbSearch.toLowerCase())
  ), verbSort), [allTechVerbs, verbSearch, verbSort]);

  const filteredMusic = useMemo(() => sortByWord(allMusic.filter((item) =>
    item.word.toLowerCase().includes(musicSearch.toLowerCase()) ||
    item.translation.toLowerCase().includes(musicSearch.toLowerCase()) ||
    item.type.toLowerCase().includes(musicSearch.toLowerCase())
  ), musicSort), [allMusic, musicSearch, musicSort]);

  const deviceTotalPages = Math.max(1, Math.ceil(filteredDevices.length / devicePageSize));
  const paginatedDevices = filteredDevices.slice((devicePage - 1) * devicePageSize, devicePage * devicePageSize);

  const verbTotalPages = Math.max(1, Math.ceil(filteredVerbs.length / verbPageSize));
  const paginatedVerbs = filteredVerbs.slice((verbPage - 1) * verbPageSize, verbPage * verbPageSize);

  const musicTotalPages = Math.max(1, Math.ceil(filteredMusic.length / musicPageSize));
  const paginatedMusic = filteredMusic.slice((musicPage - 1) * musicPageSize, musicPage * musicPageSize);

  const handleDeviceSearch = (value) => { setDeviceSearch(value); setDevicePage(1); };
  const handleDevicePageSize = (size) => { setDevicePageSize(size); setDevicePage(1); };
  const handleVerbSearch = (value) => { setVerbSearch(value); setVerbPage(1); };
  const handleVerbPageSize = (size) => { setVerbPageSize(size); setVerbPage(1); };
  const handleMusicSearch = (value) => { setMusicSearch(value); setMusicPage(1); };
  const handleMusicPageSize = (size) => { setMusicPageSize(size); setMusicPage(1); };

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 4 • Vocabulario</span>
        <h2>Tecnología, Verbos para Usarla (y Desarrollarla) y Música</h2>
        <p className="topic-intro">
          El vocabulario para hablar de tus dispositivos favoritos, cómo los usas y programas día a día, y qué música te encanta.
        </p>
      </div>

      {/* DISPOSITIVOS */}
      <div className="content-section">
        <h3>1. Dispositivos y Tecnología</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          {allDevices.length} palabras organizadas en dispositivos, cómputo/hardware, redes/nube y accesorios.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            className="search-input"
            style={{ flex: 1, minWidth: '200px' }}
            placeholder="🔍 Buscar dispositivo, traducción o categoría..."
            value={deviceSearch}
            onChange={(e) => handleDeviceSearch(e.target.value)}
          />
          <SortToggle mode={deviceSort} onChange={setDeviceSort} />
        </div>
        <span className="result-count">{filteredDevices.length} de {allDevices.length} palabras</span>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
          {paginatedDevices.map((item, index) => (
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
          page={devicePage}
          totalPages={deviceTotalPages}
          totalItems={filteredDevices.length}
          onChange={setDevicePage}
          itemsPerPage={devicePageSize}
          onItemsPerPageChange={handleDevicePageSize}
        />
      </div>

      {/* VERBOS TECH */}
      <div className="content-section">
        <h3>2. Verbos para Usar (y Desarrollar) Tecnología</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          {allTechVerbs.length} verbos: desde uso cotidiano (download, swipe, charge) hasta desarrollo de software (code, debug, test, deploy, commit). Cada uno con un ejemplo de oración.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            className="search-input"
            style={{ flex: 1, minWidth: '200px' }}
            placeholder="🔍 Buscar verbo, traducción o ejemplo..."
            value={verbSearch}
            onChange={(e) => handleVerbSearch(e.target.value)}
          />
          <SortToggle mode={verbSort} onChange={setVerbSort} />
        </div>
        <span className="result-count">{filteredVerbs.length} de {allTechVerbs.length} verbos</span>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {paginatedVerbs.map((item, index) => (
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

        <Pagination
          page={verbPage}
          totalPages={verbTotalPages}
          totalItems={filteredVerbs.length}
          onChange={setVerbPage}
          itemsPerPage={verbPageSize}
          onItemsPerPageChange={handleVerbPageSize}
        />
      </div>

      {/* MÚSICA */}
      <div className="content-section">
        <h3>3. Música: Géneros y Vocabulario</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Géneros musicales y las palabras que necesitas para hablar de tus canciones y artistas favoritos, cada uno con un ejemplo.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            className="search-input"
            style={{ flex: 1, minWidth: '200px' }}
            placeholder="🔍 Buscar género o palabra..."
            value={musicSearch}
            onChange={(e) => handleMusicSearch(e.target.value)}
          />
          <SortToggle mode={musicSort} onChange={setMusicSort} />
        </div>
        <span className="result-count">{filteredMusic.length} de {allMusic.length} palabras</span>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {paginatedMusic.map((item, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span><strong>{item.word}</strong></span>
                <button className="audio-btn" onClick={() => speak(item.word)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ marginTop: '4px', fontSize: '0.85rem' }}>
                {item.translation} <span className="category-tag" style={{ float: 'right' }}>{item.type}</span>
              </div>
              <div className="example-en" style={{ justifyContent: 'space-between', marginTop: '10px', fontSize: '0.9rem' }}>
                <span>{item.example}</span>
                <button className="audio-btn" onClick={() => speak(item.example)} title="Escuchar ejemplo" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ fontSize: '0.85rem' }}>{item.exampleEs}</div>
            </div>
          ))}
        </div>

        <Pagination
          page={musicPage}
          totalPages={musicTotalPages}
          totalItems={filteredMusic.length}
          onChange={setMusicPage}
          itemsPerPage={musicPageSize}
          onItemsPerPageChange={handleMusicPageSize}
        />
      </div>

      {/* PRONUNCIACIÓN */}
      <div className="content-section">
        <h3>4. Pronunciación: Palabras Acentuadas y Entonación Final</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          En inglés, no todas las palabras de una oración suenan igual de fuerte. Las palabras de <strong>contenido</strong> (sustantivos, verbos principales, adjetivos) se acentúan; las palabras de <strong>función</strong> (artículos, pronombres, preposiciones) casi no se acentúan.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {stressedExamples.map((item, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{item.sentence}</span>
                <button className="audio-btn" onClick={() => speak(item.sentence)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es">{item.note}</div>
            </div>
          ))}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>👂</span> Escuchar el final de la oración</div>
          <div className="insider-content">
            Cuando alguien termina una <strong>afirmación</strong>, su voz <strong>baja</strong> al final (entonación descendente) — así sabes que terminó de hablar. En una <strong>pregunta de sí/no</strong>, la voz <strong>sube</strong> al final. Practica escuchando: <em>"I love this song."</em> (baja) vs. <em>"Do you love this song?"</em> (sube).
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen de Vocabulario</h4>
          <p>Pon a prueba tu conocimiento de tecnología, verbos tech y música.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default VocabularyTopic;

import React, { useState, useMemo } from 'react';
import Pagination, { DEFAULT_PAGE_SIZE } from '../../../components/Pagination';
import SortToggle, { sortByWord, DEFAULT_SORT } from '../../../components/SortToggle';
import { allCountries as allCountriesData, allJobs as allJobsData } from '../../../data/vocab/evolve1/unit1';

const VocabularyTopic = () => {
  const [countrySearch, setCountrySearch] = useState('');
  const [countryPage, setCountryPage] = useState(1);
  const [countryPageSize, setCountryPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [countrySort, setCountrySort] = useState(DEFAULT_SORT);
  const [jobSearch, setJobSearch] = useState('');
  const [jobPage, setJobPage] = useState(1);
  const [jobPageSize, setJobPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [jobSort, setJobSort] = useState(DEFAULT_SORT);

  // Voice reader engine
  const speak = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    } else {
      console.warn("La síntesis de voz no está soportada en este navegador.");
    }
  };

  // Comprehensive list of countries and nationalities
  const allCountries = useMemo(() => allCountriesData, []);

  // 200 jobs covering everyday life + a full "Technology & Development" category,
  // each with the correct article (based on pronunciation, not spelling) and a category tag.
  const allJobs = useMemo(() => allJobsData, []);

  const filteredCountries = useMemo(() => sortByWord(allCountries.filter(item =>
    item.country.toLowerCase().includes(countrySearch.toLowerCase()) ||
    item.nationality.toLowerCase().includes(countrySearch.toLowerCase()) ||
    item.translation.toLowerCase().includes(countrySearch.toLowerCase())
  ), countrySort, 'country'), [allCountries, countrySearch, countrySort]);

  const filteredJobs = useMemo(() => sortByWord(allJobs.filter(item =>
    item.job.toLowerCase().includes(jobSearch.toLowerCase()) ||
    item.translation.toLowerCase().includes(jobSearch.toLowerCase()) ||
    item.category.toLowerCase().includes(jobSearch.toLowerCase())
  ), jobSort, 'job'), [allJobs, jobSearch, jobSort]);

  const countryTotalPages = Math.max(1, Math.ceil(filteredCountries.length / countryPageSize));
  const jobTotalPages = Math.max(1, Math.ceil(filteredJobs.length / jobPageSize));

  const paginatedCountries = filteredCountries.slice((countryPage - 1) * countryPageSize, countryPage * countryPageSize);
  const paginatedJobs = filteredJobs.slice((jobPage - 1) * jobPageSize, jobPage * jobPageSize);

  const handleCountrySearch = (value) => {
    setCountrySearch(value);
    setCountryPage(1);
  };

  const handleJobSearch = (value) => {
    setJobSearch(value);
    setJobPage(1);
  };

  const handleCountryPageSize = (size) => {
    setCountryPageSize(size);
    setCountryPage(1);
  };

  const handleJobPageSize = (size) => {
    setJobPageSize(size);
    setJobPage(1);
  };

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 1 • Vocabulario</span>
        <h2>Países, Nacionalidades y Profesiones (Edición Completa)</h2>
        <p className="topic-intro">
          Aprende el vocabulario completo de países y nacionalidades del mundo, más de 200 profesiones de la vida cotidiana (incluyendo tecnología y desarrollo de software) con sus reglas gramaticales.
        </p>
      </div>

      {/* SECCIÓN 1: PAÍSES Y NACIONALIDADES */}
      <div className="content-section">
        <h3>1. Diccionario de Países y Nacionalidades</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          En inglés, los nombres de los países y las nacionalidades <strong>siempre</strong> se escriben con mayúscula inicial. Haz clic en el botón de audio 🔊 para escuchar la pronunciación exacta de la combinación de País y Nacionalidad.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            className="search-input"
            style={{ flex: 1, minWidth: '200px' }}
            placeholder="🔍 Buscar país o nacionalidad..."
            value={countrySearch}
            onChange={(e) => handleCountrySearch(e.target.value)}
          />
          <SortToggle mode={countrySort} onChange={setCountrySort} />
        </div>
        <span className="result-count">{filteredCountries.length} de {allCountries.length} países</span>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {paginatedCountries.map((item, index) => (
            <div key={index} className="example-item" style={{ borderLeft: `3px solid var(--color-evolve1)` }}>
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{item.country} ➔ {item.nationality}</span>
                <button
                  className="audio-btn"
                  onClick={() => speak(`${item.country}. ${item.nationality}.`)}
                  title="Escuchar"
                  style={{ margin: 0 }}
                >
                  🔊
                </button>
              </div>
              <div className="example-es" style={{ marginTop: '6px', fontSize: '0.85rem' }}>
                {item.translation} <span style={{ float: 'right', fontSize: '0.75rem', color: 'var(--color-evolve1)', opacity: 0.8 }}>{item.suffix}</span>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          page={countryPage}
          totalPages={countryTotalPages}
          totalItems={filteredCountries.length}
          onChange={setCountryPage}
          itemsPerPage={countryPageSize}
          onItemsPerPageChange={handleCountryPageSize}
        />
      </div>

      {/* SECCIÓN 2: TRABAJOS Y PROFESIONES */}
      <div className="content-section">
        <h3>2. Trabajos y Profesiones (a / an Rule)</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Recuerda: Usa <strong>a</strong> antes de un sonido de consonante y <strong>an</strong> antes de un sonido de vocal.
        </p>

        <div className="examples-grid">
          <div className="example-item">
            <div className="example-en">
              I am a student.
              <button className="audio-btn" onClick={() => speak("I am a student.")} title="Escuchar">🔊</button>
            </div>
            <div className="example-es">Yo soy estudiante.</div>
          </div>
          <div className="example-item">
            <div className="example-en">
              He is an accountant.
              <button className="audio-btn" onClick={() => speak("He is an accountant.")} title="Escuchar">🔊</button>
            </div>
            <div className="example-es">Él es contador. (Sonido vocal /æ/)</div>
          </div>
          <div className="example-item">
            <div className="example-en">
              She is a nurse.
              <button className="audio-btn" onClick={() => speak("She is a nurse.")} title="Escuchar">🔊</button>
            </div>
            <div className="example-es">Ella es enfermera. (Sonido consonante /n/)</div>
          </div>
          <div className="example-item">
            <div className="example-en">
              They are engineers.
              <button className="audio-btn" onClick={() => speak("They are engineers.")} title="Escuchar">🔊</button>
            </div>
            <div className="example-es">Ellos son ingenieros. (¡Ojo! En plural no se usa "a" o "an")</div>
          </div>
        </div>

        <p style={{ margin: '20px 0 12px', color: 'var(--text-muted)' }}>
          Ahora el diccionario completo: más de 200 profesiones de la vida cotidiana, incluyendo un bloque completo de <strong>Tecnología y Desarrollo</strong>. Busca por nombre en inglés, español o categoría.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            className="search-input"
            style={{ flex: 1, minWidth: '200px' }}
            placeholder="🔍 Buscar trabajo, traducción o categoría (ej. 'developer', 'salud', 'chef')..."
            value={jobSearch}
            onChange={(e) => handleJobSearch(e.target.value)}
          />
          <SortToggle mode={jobSort} onChange={setJobSort} />
        </div>
        <span className="result-count">{filteredJobs.length} de {allJobs.length} profesiones</span>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {paginatedJobs.map((item, index) => (
            <div key={index} className="example-item" style={{ borderLeft: `3px solid var(--color-evolve1)` }}>
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{item.article} {item.job}</span>
                <button
                  className="audio-btn"
                  onClick={() => speak(`${item.article} ${item.job}.`)}
                  title="Escuchar"
                  style={{ margin: 0 }}
                >
                  🔊
                </button>
              </div>
              <div className="example-es" style={{ marginTop: '6px', fontSize: '0.85rem' }}>
                {item.translation} <span className="category-tag" style={{ float: 'right' }}>{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          page={jobPage}
          totalPages={jobTotalPages}
          totalItems={filteredJobs.length}
          onChange={setJobPage}
          itemsPerPage={jobPageSize}
          onItemsPerPageChange={handleJobPageSize}
        />
      </div>

      {/* SECCIÓN 3: PRONUNCIACIÓN */}
      <div className="content-section">
        <h3>3. Pronunciación: los sonidos /iː/ y /ɪ/</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Muchas nacionalidades y palabras de esta unidad usan dos sonidos vocálicos que en español suenan casi iguales, pero en inglés cambian por completo el significado de la palabra: la <strong>i larga /iː/</strong> (como en "sheep") y la <strong>i corta /ɪ/</strong> (como en "ship"). Escucha los pares y repite en voz alta.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
          {[
            { long: "sheep", longEs: "oveja", short: "ship", shortEs: "barco" },
            { long: "cheap", longEs: "barato", short: "chip", shortEs: "papa frita / chip" },
            { long: "green", longEs: "verde", short: "grin", shortEs: "sonrisa amplia" },
            { long: "peel", longEs: "pelar", short: "pill", shortEs: "pastilla" },
            { long: "he's", longEs: "él es", short: "his", shortEs: "su (de él)" },
            { long: "read", longEs: "leer (presente)", short: "rid", shortEs: "librarse de" }
          ].map((pair, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span><strong>/iː/</strong> {pair.long}</span>
                <button className="audio-btn" onClick={() => speak(pair.long)} title="Escuchar">🔊</button>
              </div>
              <div className="example-es" style={{ marginBottom: '10px' }}>{pair.longEs}</div>
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span><strong>/ɪ/</strong> {pair.short}</span>
                <button className="audio-btn" onClick={() => speak(pair.short)} title="Escuchar">🔊</button>
              </div>
              <div className="example-es">{pair.shortEs}</div>
            </div>
          ))}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title">
            <span>🗣️</span> Truco de pronunciación
          </div>
          <div className="insider-content">
            Para el sonido <strong>/iː/</strong> (largo), estira los labios como en una sonrisa y alarga la vocal. Para <strong>/ɪ/</strong> (corto), relaja la mandíbula y pronuncia la vocal de forma breve y relajada, casi como una "e" corta. Practica con nacionalidades como <strong>"Chinese"</strong> /iː/ y con palabras como <strong>"it's"</strong> /ɪ/.
          </div>
        </div>
      </div>

      {/* INSIDER BOX */}
      <div className="insider-box">
        <div className="insider-title">
          <span>💡</span> Insider English: Regla Plural
        </div>
        <div className="insider-content">
          Los artículos <strong>a</strong> y <strong>an</strong> significan "un" o "una" y <strong>únicamente se utilizan en singular</strong>. <br />
          Para decir "Ellos son doctores", nunca digas: ❌ <em>"They are a doctors"</em>. <br />
          Dices directamente: ➔ ✅ <strong>"They are doctors."</strong>
        </div>
      </div>

      {/* WIDGET DE EXAMEN */}
      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen de Autoevaluación</h4>
          <p>Pon a prueba tu conocimiento de países, nacionalidades y profesiones del mundo.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz (5 Preguntas)</button>
      </div>
    </div>
  );
};

export default VocabularyTopic;

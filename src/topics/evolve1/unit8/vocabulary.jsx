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
  const [skillSearch, setSkillSearch] = useState('');
  const [skillPage, setSkillPage] = useState(1);
  const [skillPageSize, setSkillPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [skillSort, setSkillSort] = useState(DEFAULT_SORT);

  const allSkills = useMemo(() => [
    // Habilidades Físicas y Deportivas
    { word: "swim very well", translation: "nadar muy bien", category: "Habilidades Físicas y Deportivas" },
    { word: "run fast", translation: "correr rápido", category: "Habilidades Físicas y Deportivas" },
    { word: "ride a bike", translation: "andar en bicicleta", category: "Habilidades Físicas y Deportivas" },
    { word: "ride a motorcycle", translation: "andar en motocicleta", category: "Habilidades Físicas y Deportivas" },
    { word: "do karate", translation: "hacer karate", category: "Habilidades Físicas y Deportivas" },
    { word: "do yoga", translation: "hacer yoga", category: "Habilidades Físicas y Deportivas" },
    { word: "play soccer", translation: "jugar fútbol", category: "Habilidades Físicas y Deportivas" },
    { word: "play tennis", translation: "jugar tenis", category: "Habilidades Físicas y Deportivas" },
    { word: "play basketball", translation: "jugar basquetbol", category: "Habilidades Físicas y Deportivas" },
    { word: "lift weights", translation: "levantar pesas", category: "Habilidades Físicas y Deportivas" },
    { word: "do gymnastics", translation: "hacer gimnasia", category: "Habilidades Físicas y Deportivas" },
    { word: "surf", translation: "surfear", category: "Habilidades Físicas y Deportivas" },
    { word: "snowboard", translation: "andar en snowboard", category: "Habilidades Físicas y Deportivas" },
    { word: "rock climb", translation: "escalar rocas", category: "Habilidades Físicas y Deportivas" },
    { word: "scuba dive", translation: "bucear con tanque", category: "Habilidades Físicas y Deportivas" },
    { word: "do martial arts", translation: "hacer artes marciales", category: "Habilidades Físicas y Deportivas" },
    { word: "dance salsa", translation: "bailar salsa", category: "Habilidades Físicas y Deportivas" },
    { word: "do parkour", translation: "hacer parkour", category: "Habilidades Físicas y Deportivas" },
    // Habilidades Artísticas y Musicales
    { word: "play the guitar", translation: "tocar la guitarra", category: "Habilidades Artísticas y Musicales" },
    { word: "play the piano", translation: "tocar el piano", category: "Habilidades Artísticas y Musicales" },
    { word: "play the violin", translation: "tocar el violín", category: "Habilidades Artísticas y Musicales" },
    { word: "play the drums", translation: "tocar la batería", category: "Habilidades Artísticas y Musicales" },
    { word: "sing well", translation: "cantar bien", category: "Habilidades Artísticas y Musicales" },
    { word: "read music", translation: "leer partituras", category: "Habilidades Artísticas y Musicales" },
    { word: "compose music", translation: "componer música", category: "Habilidades Artísticas y Musicales" },
    { word: "paint portraits", translation: "pintar retratos", category: "Habilidades Artísticas y Musicales" },
    { word: "draw cartoons", translation: "dibujar caricaturas", category: "Habilidades Artísticas y Musicales" },
    { word: "sculpt", translation: "esculpir", category: "Habilidades Artísticas y Musicales" },
    { word: "do pottery", translation: "hacer cerámica", category: "Habilidades Artísticas y Musicales" },
    { word: "do calligraphy", translation: "hacer caligrafía", category: "Habilidades Artísticas y Musicales" },
    { word: "write poetry", translation: "escribir poesía", category: "Habilidades Artísticas y Musicales" },
    { word: "act in plays", translation: "actuar en obras de teatro", category: "Habilidades Artísticas y Musicales" },
    { word: "do stand-up comedy", translation: "hacer comedia stand-up", category: "Habilidades Artísticas y Musicales" },
    { word: "do impressions", translation: "hacer imitaciones", category: "Habilidades Artísticas y Musicales" },
    { word: "beatbox", translation: "hacer beatbox", category: "Habilidades Artísticas y Musicales" },
    { word: "breakdance", translation: "bailar breakdance", category: "Habilidades Artísticas y Musicales" },
    // Habilidades Técnicas y Digitales
    { word: "code in Python", translation: "programar en Python", category: "Habilidades Técnicas y Digitales" },
    { word: "build websites", translation: "construir páginas web", category: "Habilidades Técnicas y Digitales" },
    { word: "edit videos", translation: "editar videos", category: "Habilidades Técnicas y Digitales" },
    { word: "use Excel", translation: "usar Excel", category: "Habilidades Técnicas y Digitales" },
    { word: "analyze data", translation: "analizar datos", category: "Habilidades Técnicas y Digitales" },
    { word: "fix a computer", translation: "arreglar una computadora", category: "Habilidades Técnicas y Digitales" },
    { word: "design graphics", translation: "diseñar gráficos", category: "Habilidades Técnicas y Digitales" },
    { word: "take great photos", translation: "tomar buenas fotos", category: "Habilidades Técnicas y Digitales" },
    { word: "fly a drone", translation: "volar un dron", category: "Habilidades Técnicas y Digitales" },
    { word: "produce music", translation: "producir música", category: "Habilidades Técnicas y Digitales" },
    { word: "DJ (mix music)", translation: "mezclar música (ser DJ)", category: "Habilidades Técnicas y Digitales" },
    { word: "solve a Rubik's cube", translation: "resolver un cubo Rubik", category: "Habilidades Técnicas y Digitales" },
    { word: "troubleshoot problems", translation: "solucionar problemas técnicos", category: "Habilidades Técnicas y Digitales" },
    { word: "hack (ethically)", translation: "hackear (de forma ética)", category: "Habilidades Técnicas y Digitales" },
    { word: "repair electronics", translation: "reparar aparatos electrónicos", category: "Habilidades Técnicas y Digitales" },
    { word: "assemble furniture", translation: "armar muebles", category: "Habilidades Técnicas y Digitales" },
    { word: "use social media for business", translation: "usar redes sociales para negocios", category: "Habilidades Técnicas y Digitales" },
    { word: "translate documents", translation: "traducir documentos", category: "Habilidades Técnicas y Digitales" },
    // Idiomas, Comunicación y Negocios
    { word: "speak two languages", translation: "hablar dos idiomas", category: "Idiomas, Comunicación y Negocios" },
    { word: "speak in public", translation: "hablar en público", category: "Idiomas, Comunicación y Negocios" },
    { word: "negotiate deals", translation: "negociar acuerdos", category: "Idiomas, Comunicación y Negocios" },
    { word: "manage a team", translation: "dirigir un equipo", category: "Idiomas, Comunicación y Negocios" },
    { word: "lead a project", translation: "liderar un proyecto", category: "Idiomas, Comunicación y Negocios" },
    { word: "teach a class", translation: "dar una clase", category: "Idiomas, Comunicación y Negocios" },
    { word: "tutor students", translation: "dar tutorías", category: "Idiomas, Comunicación y Negocios" },
    { word: "plan events", translation: "planear eventos", category: "Idiomas, Comunicación y Negocios" },
    { word: "organize a party", translation: "organizar una fiesta", category: "Idiomas, Comunicación y Negocios" },
    { word: "sell products", translation: "vender productos", category: "Idiomas, Comunicación y Negocios" },
    { word: "persuade people", translation: "persuadir a la gente", category: "Idiomas, Comunicación y Negocios" },
    { word: "network (make contacts)", translation: "hacer contactos (networking)", category: "Idiomas, Comunicación y Negocios" },
    { word: "write a resume", translation: "escribir un currículum", category: "Idiomas, Comunicación y Negocios" },
    { word: "give a presentation", translation: "dar una presentación", category: "Idiomas, Comunicación y Negocios" },
    { word: "manage money", translation: "administrar el dinero", category: "Idiomas, Comunicación y Negocios" },
    { word: "invest in stocks", translation: "invertir en acciones", category: "Idiomas, Comunicación y Negocios" },
    { word: "interview candidates", translation: "entrevistar candidatos", category: "Idiomas, Comunicación y Negocios" },
    { word: "mediate conflicts", translation: "mediar conflictos", category: "Idiomas, Comunicación y Negocios" },
    // Habilidades Prácticas y Manuales
    { word: "cook Italian food", translation: "cocinar comida italiana", category: "Habilidades Prácticas y Manuales" },
    { word: "bake bread", translation: "hornear pan", category: "Habilidades Prácticas y Manuales" },
    { word: "make sushi", translation: "hacer sushi", category: "Habilidades Prácticas y Manuales" },
    { word: "make cocktails", translation: "preparar cócteles", category: "Habilidades Prácticas y Manuales" },
    { word: "sew clothes", translation: "coser ropa", category: "Habilidades Prácticas y Manuales" },
    { word: "knit a sweater", translation: "tejer un suéter", category: "Habilidades Prácticas y Manuales" },
    { word: "drive stick shift", translation: "manejar de velocidades (manual)", category: "Habilidades Prácticas y Manuales" },
    { word: "do basic plumbing", translation: "hacer plomería básica", category: "Habilidades Prácticas y Manuales" },
    { word: "do basic electrical work", translation: "hacer trabajo eléctrico básico", category: "Habilidades Prácticas y Manuales" },
    { word: "paint a room", translation: "pintar una habitación", category: "Habilidades Prácticas y Manuales" },
    { word: "grow vegetables", translation: "cultivar verduras", category: "Habilidades Prácticas y Manuales" },
    { word: "tie useful knots", translation: "hacer nudos útiles", category: "Habilidades Prácticas y Manuales" },
    { word: "start a fire", translation: "encender una fogata", category: "Habilidades Prácticas y Manuales" },
    { word: "read a map", translation: "leer un mapa", category: "Habilidades Prácticas y Manuales" },
    { word: "give first aid", translation: "dar primeros auxilios", category: "Habilidades Prácticas y Manuales" },
    { word: "do CPR", translation: "hacer RCP (reanimación)", category: "Habilidades Prácticas y Manuales" },
    { word: "change a tire", translation: "cambiar una llanta", category: "Habilidades Prácticas y Manuales" },
    { word: "memorize a deck of cards", translation: "memorizar una baraja de cartas", category: "Habilidades Prácticas y Manuales" }
  ], []);

  const filteredSkills = useMemo(() => sortByWord(allSkills.filter((item) =>
    item.word.toLowerCase().includes(skillSearch.toLowerCase()) ||
    item.translation.toLowerCase().includes(skillSearch.toLowerCase()) ||
    item.category.toLowerCase().includes(skillSearch.toLowerCase())
  ), skillSort), [allSkills, skillSearch, skillSort]);

  const skillTotalPages = Math.max(1, Math.ceil(filteredSkills.length / skillPageSize));
  const paginatedSkills = filteredSkills.slice((skillPage - 1) * skillPageSize, skillPage * skillPageSize);

  const handleSkillSearch = (value) => { setSkillSearch(value); setSkillPage(1); };
  const handleSkillPageSize = (size) => { setSkillPageSize(size); setSkillPage(1); };

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 8 • Vocabulario</span>
        <h2>Habilidades y Talentos: ¿Qué Puedes Hacer?</h2>
        <p className="topic-intro">
          Frases con verbos que necesitas para hablar de lo que sabes hacer (y lo que no) usando "can" y "can't" — desde deportes hasta habilidades técnicas y de negocios.
        </p>
      </div>

      {/* HABILIDADES */}
      <div className="content-section">
        <h3>1. Habilidades y Talentos</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          {allSkills.length} frases organizadas en 5 categorías: físicas/deportivas, artísticas/musicales, técnicas/digitales, idiomas/negocios y prácticas/manuales. Todas se usan directamente después de "can" o "can't".
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            className="search-input"
            style={{ flex: 1, minWidth: '200px' }}
            placeholder="🔍 Buscar habilidad, traducción o categoría..."
            value={skillSearch}
            onChange={(e) => handleSkillSearch(e.target.value)}
          />
          <SortToggle mode={skillSort} onChange={setSkillSort} />
        </div>
        <span className="result-count">{filteredSkills.length} de {allSkills.length} habilidades</span>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
          {paginatedSkills.map((item, index) => (
            <div key={index} className="example-item" style={{ borderLeft: '3px solid var(--color-evolve1)' }}>
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>can {item.word}</span>
                <button className="audio-btn" onClick={() => speak(`I can ${item.word}`)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ marginTop: '6px', fontSize: '0.85rem' }}>
                {item.translation} <span className="category-tag" style={{ float: 'right' }}>{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          page={skillPage}
          totalPages={skillTotalPages}
          totalItems={filteredSkills.length}
          onChange={setSkillPage}
          itemsPerPage={skillPageSize}
          onItemsPerPageChange={handleSkillPageSize}
        />
      </div>

      {/* PRONUNCIACIÓN */}
      <div className="content-section">
        <h3>2. Pronunciación: "can" vs. "can't"</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          En inglés hablado, "can" y "can't" suenan muy diferentes — pero muchos estudiantes no distinguen bien la diferencia. Presta atención al sonido de la vocal.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div className="example-item">
            <div className="example-en" style={{ justifyContent: 'space-between' }}>
              <span>can — /kən/ (débil, rápido)</span>
              <button className="audio-btn" onClick={() => speak("I can swim.")} title="Escuchar">🔊</button>
            </div>
            <div className="example-es">"I can swim." — La "a" casi no se escucha, suena como "kn".</div>
          </div>
          <div className="example-item">
            <div className="example-en" style={{ justifyContent: 'space-between' }}>
              <span>can't — /kænt/ (fuerte, clara)</span>
              <button className="audio-btn" onClick={() => speak("I can't swim.")} title="Escuchar">🔊</button>
            </div>
            <div className="example-es">"I can't swim." — La "a" se escucha clara y fuerte, y se pronuncia la "t" final.</div>
          </div>
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>👂</span> Truco para distinguirlos al escuchar</div>
          <div className="insider-content">
            Si no escuchas bien la "t" final, guíate por la vocal: "can" suena corto y sin énfasis (casi "kn"), mientras que "can't" suena más largo y con una vocal clara ("kænt"). En caso de duda, escucha el contexto completo de la oración.
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen de Vocabulario</h4>
          <p>Practica frases de habilidades y talentos para usar con can/can't.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default VocabularyTopic;

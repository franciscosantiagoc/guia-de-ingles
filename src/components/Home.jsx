import React from 'react';

const CARDS = [
  {
    id: 'levels',
    icon: '📚',
    title: 'Temario',
    description: 'El desglose completo de los temas: niveles, unidades y cada lección. Navega por todo lo que hemos avanzado.'
  },
  {
    id: 'repaso',
    icon: '🗂️',
    title: 'Repaso',
    description: 'Repasa vocabulario y verbos con tarjetas: frente en inglés con audio, reverso con el significado y ejemplos.'
  },
  {
    id: 'practica',
    icon: '🎮',
    title: 'Práctica',
    description: 'Juegos interactivos para poner a prueba lo estudiado: emparejar, quiz, sopa de letras, memorama y más.'
  },
  {
    id: 'glosario',
    icon: '📖',
    title: 'Glosario',
    description: 'Conceptos y términos clave del curso explicados en un solo lugar, para consultar rápido.'
  }
];

const Home = ({ onNavigate }) => {
  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number">🖋️ Guía de Inglés</span>
        <h2>¿Qué quieres hacer hoy?</h2>
        <p className="topic-intro">
          Elige una sección para continuar.
        </p>
      </div>

      <div className="home-card-grid">
        {CARDS.map((card) => (
          <button
            key={card.id}
            type="button"
            className="home-card"
            onClick={() => onNavigate(card.id)}
          >
            <span className="home-card-icon">{card.icon}</span>
            <span className="home-card-title">{card.title}</span>
            <span className="home-card-desc">{card.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;

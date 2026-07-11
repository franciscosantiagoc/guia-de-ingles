import React from 'react';
import { levels } from '../data/levels';

const Sidebar = ({ activeLevel, onSelectLevel, theme, onToggleTheme }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>
          <span>🖋️</span> Guía de Inglés
        </h1>
        <p>De A1 a C1 · temario original inspirado en Cambridge Evolve</p>
        <button
          className="theme-toggle-btn"
          onClick={onToggleTheme}
          style={{ marginTop: '14px' }}
          title="Cambiar tema claro/oscuro"
        >
          <span>{theme === 'dark' ? '☀️' : '🌙'}</span>
          {theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
        </button>
      </div>
      <ul className="level-list">
        {levels.map((level) => {
          // Determine active level color
          const isActive = activeLevel?.id === level.id;
          
          return (
            <li
              key={level.id}
              className={`level-item ${isActive ? 'active' : ''}`}
              onClick={() => onSelectLevel(level)}
            >
              <div className="level-info-row">
                <span className="level-name">{level.name}</span>
                <span 
                  className="level-badge"
                  style={{
                    backgroundColor: `var(--color-evolve${level.id})`
                  }}
                >
                  {level.cefr}
                </span>
              </div>
              <div className="level-desc">{level.description}</div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;

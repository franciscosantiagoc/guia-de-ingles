import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import UnitGrid from './components/UnitGrid';
import TopicList from './components/TopicList';
import { levels } from './data/levels';

function App() {
  const [activeLevel, setActiveLevel] = useState(levels[0]);
  const [activeUnit, setActiveUnit] = useState(null);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('guia-ingles-theme');
    return saved === 'light' || saved === 'dark' ? saved : 'dark';
  });

  // Dynamic CSS accent color themes ("chalk" palette per level)
  useEffect(() => {
    if (activeLevel) {
      const root = document.documentElement;
      root.style.setProperty('--active-accent', `var(--color-evolve${activeLevel.id})`);

      const rgbs = {
        1: "59, 130, 246",  // Blue
        2: "16, 185, 129",  // Emerald
        3: "245, 158, 11",  // Amber
        4: "236, 72, 153",  // Pink
        5: "139, 92, 246",  // Violet
        6: "239, 68, 68"    // Red
      };
      const rgbsLight = {
        1: "37, 99, 235",
        2: "5, 150, 105",
        3: "217, 119, 6",
        4: "219, 39, 119",
        5: "124, 58, 237",
        6: "220, 38, 38"
      };
      root.style.setProperty('--active-accent-rgb', (theme === 'light' ? rgbsLight : rgbs)[activeLevel.id]);
    }
  }, [activeLevel, theme]);

  // Apply + persist theme preference
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('guia-ingles-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSelectLevel = (level) => {
    setActiveLevel(level);
    setActiveUnit(null); // Reset unit view when changing level
  };

  const handleSelectUnit = (unit) => {
    setActiveUnit(unit);
  };

  const handleBackToUnits = () => {
    setActiveUnit(null);
  };

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <Sidebar
        activeLevel={activeLevel}
        onSelectLevel={handleSelectLevel}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Area */}
      <main className="main-content">
        <header className="main-content-header main-header">
          <div className="header-breadcrumbs">
            <span 
              className="breadcrumb-item" 
              onClick={() => setActiveUnit(null)}
            >
              {activeLevel.name}
            </span>
            {activeUnit && (
              <>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-active">
                  Unidad {activeUnit.id}: {activeUnit.title}
                </span>
              </>
            )}
          </div>
          
          <div className="header-actions">
            {activeUnit && (
              <button className="btn-back" onClick={handleBackToUnits}>
                <span>←</span> Volver a Unidades
              </button>
            )}
          </div>
        </header>

        {/* Content Frame */}
        <div className="content-frame">
          {activeUnit ? (
            <TopicList
              level={activeLevel}
              unit={activeUnit}
              onSelectUnit={handleSelectUnit}
            />
          ) : (
            <UnitGrid 
              level={activeLevel} 
              onSelectUnit={handleSelectUnit} 
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

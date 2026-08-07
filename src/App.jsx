import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import UnitGrid from './components/UnitGrid';
import TopicList from './components/TopicList';
import Home from './components/Home';
import Repaso from './components/Repaso';
import Practica from './components/Practica';
import Glosario from './components/Glosario';
import { levels } from './data/levels';

function App() {
  const [activeLevel, setActiveLevel] = useState(levels[0]);
  const [activeUnit, setActiveUnit] = useState(null);
  const [activeView, setActiveView] = useState('home'); // 'home' | 'levels' | 'repaso' | 'practica' | 'glosario'
  const [initialTopicId, setInitialTopicId] = useState(null);
  const [navKey, setNavKey] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('guia-ingles-theme');
    return saved === 'light' || saved === 'dark' ? saved : 'dark';
  });

  // El panel de niveles solo tiene sentido dentro de un tema específico
  // (dentro de Temario, ya con una unidad y lección abiertas). Se oculta
  // automáticamente en el inicio y al elegir nivel/unidad, pero el usuario
  // puede mostrarlo/ocultarlo manualmente con el botón del header.
  useEffect(() => {
    setSidebarOpen(activeView === 'levels' && !!activeUnit);
  }, [activeView, activeUnit]);

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
    setActiveView('levels');
    setInitialTopicId(null);
  };

  const handleSelectUnit = (unit) => {
    setActiveUnit(unit);
    setInitialTopicId(null);
  };

  const handleBackToUnits = () => {
    setActiveUnit(null);
  };

  const handleGoHome = () => {
    setActiveView('home');
  };

  const handleNavigateFromHome = (destination) => {
    if (destination === 'levels') {
      setActiveUnit(null);
    }
    setActiveView(destination);
  };

  return (
    <div className="app-container">
      {/* Sidebar Navigation (solo dentro de un tema específico, o si el usuario la abre manualmente) */}
      {sidebarOpen && (
        <Sidebar
          activeLevel={activeLevel}
          onSelectLevel={handleSelectLevel}
          theme={theme}
          onToggleTheme={toggleTheme}
          activeView={activeView}
          onGoHome={handleGoHome}
        />
      )}

      {/* Main Content Area */}
      <main className="main-content">
        <header className="main-content-header main-header">
          <div className="header-left">
            {activeView === 'levels' && (
              <button
                type="button"
                className="btn-sidebar-toggle"
                onClick={() => setSidebarOpen((open) => !open)}
                title={sidebarOpen ? 'Ocultar panel de niveles' : 'Mostrar panel de niveles'}
              >
                {sidebarOpen ? '⟨⟨' : '☰'}
              </button>
            )}
            <div className="header-breadcrumbs">
            {activeView === 'home' && (
              <span className="breadcrumb-active">🖋️ Inicio</span>
            )}
            {activeView === 'repaso' && (
              <>
                <span className="breadcrumb-item" onClick={handleGoHome}>Inicio</span>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-active">🗂️ Repaso</span>
              </>
            )}
            {activeView === 'practica' && (
              <>
                <span className="breadcrumb-item" onClick={handleGoHome}>Inicio</span>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-active">🎮 Práctica</span>
              </>
            )}
            {activeView === 'glosario' && (
              <>
                <span className="breadcrumb-item" onClick={handleGoHome}>Inicio</span>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-active">📖 Glosario</span>
              </>
            )}
            {activeView === 'levels' && (
              <>
                <span className="breadcrumb-item" onClick={handleGoHome}>Inicio</span>
                <span className="breadcrumb-separator">/</span>
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
              </>
            )}
            </div>
          </div>

          <div className="header-actions">
            {activeView === 'levels' && activeUnit && (
              <button className="btn-back" onClick={handleBackToUnits}>
                <span>←</span> Volver a Unidades
              </button>
            )}
          </div>
        </header>

        {/* Content Frame */}
        <div className="content-frame">
          {activeView === 'home' ? (
            <Home onNavigate={handleNavigateFromHome} />
          ) : activeView === 'repaso' ? (
            <Repaso onBackHome={handleGoHome} />
          ) : activeView === 'practica' ? (
            <Practica onBackHome={handleGoHome} />
          ) : activeView === 'glosario' ? (
            <Glosario onBackHome={handleGoHome} />
          ) : activeUnit ? (
            <TopicList
              key={`nav-${navKey}`}
              level={activeLevel}
              unit={activeUnit}
              onSelectUnit={handleSelectUnit}
              initialTopicId={initialTopicId}
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

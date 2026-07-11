import React from 'react';

const UnitGrid = ({ level, onSelectUnit }) => {
  if (!level) return null;

  return (
    <div className="units-grid">
      {level.units.map((unit) => (
        <div
          key={unit.id}
          className="unit-card"
          onClick={() => onSelectUnit(unit)}
          style={{
            '--active-accent': `var(--color-evolve${level.id})`,
            '--active-accent-rgb': `var(--color-evolve${level.id})`
          }}
        >
          <div className="unit-number">Unidad {unit.id}</div>
          <h2 className="unit-title">{unit.title}</h2>
          <p className="unit-translation">{unit.translation}</p>
          <div className="unit-stats">
            <div className="unit-stat-item">
              <span>📚</span> {unit.topics.length} Temas
            </div>
            <div className="unit-stat-item">
              <span>📝</span> 1 Examen
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UnitGrid;

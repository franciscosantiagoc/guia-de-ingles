import React from 'react';

const Glosario = ({ onBackHome }) => {
  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number">📖 Glosario</span>
        <h2>Conceptos Clave del Curso</h2>
        <p className="topic-intro">
          Esta sección está en construcción. Aquí vas a encontrar los términos y conceptos gramaticales importantes explicados en un solo lugar, para consultar rápido sin tener que buscar en cada unidad.
        </p>
      </div>

      <div className="content-section">
        <div className="insider-box">
          <div className="insider-title"><span>🚧</span> Próximamente</div>
          <div className="insider-content">
            Por ejemplo: verbo modal, adverbio de modo/frecuencia, sustantivo contable/incontable, presente simple vs. continuo, phrasal verb, stative verb, y más — cada uno con una definición corta y un ejemplo.
          </div>
        </div>

        <button type="button" className="btn-back" style={{ marginTop: '20px' }} onClick={onBackHome}>
          <span>←</span> Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default Glosario;

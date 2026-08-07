import React from 'react';

const Repaso = ({ onBackHome }) => {
  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number">🗂️ Repaso</span>
        <h2>Repaso de Vocabulario y Verbos con Tarjetas</h2>
        <p className="topic-intro">
          Esta sección está en construcción. Aquí podrás repasar el vocabulario de todas las unidades y los verbos en sus 4 tiempos con tarjetas interactivas.
        </p>
      </div>

      <div className="content-section">
        <div className="insider-box">
          <div className="insider-title"><span>🚧</span> Próximamente</div>
          <div className="insider-content">
            Vas a poder: ver el listado de vocabulario, voltear tarjetas (palabra + audio al frente, significado + ejemplos traducidos al reverso), guardar palabras en tu lista de repaso favorita, elegir cuántas palabras estudiar (5, 10, 15 o 20), y comenzar una sesión de repaso.
          </div>
        </div>

        <button type="button" className="btn-back" style={{ marginTop: '20px' }} onClick={onBackHome}>
          <span>←</span> Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default Repaso;

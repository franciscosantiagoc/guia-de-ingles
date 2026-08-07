import React from 'react';

const Practica = ({ onBackHome }) => {
  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number">🎮 Práctica</span>
        <h2>Juegos Interactivos de Vocabulario y Verbos</h2>
        <p className="topic-intro">
          Esta sección está en construcción. Aquí vas a poder practicar con juegos interactivos usando el vocabulario y los verbos que has estudiado.
        </p>
      </div>

      <div className="content-section">
        <div className="insider-box">
          <div className="insider-title"><span>🚧</span> Próximamente</div>
          <div className="insider-content">
            Juegos planeados: enlazar palabra con significado (con pistas), completar la oración, sopa de letras, quiz, memorama, dictado por audio, ordena las letras, y verdadero o falso. Podrás elegir el tema, si practicar con palabras aleatorias o solo las que ya estudiaste, y cuántas palabras por sesión.
          </div>
        </div>

        <button type="button" className="btn-back" style={{ marginTop: '20px' }} onClick={onBackHome}>
          <span>←</span> Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default Practica;

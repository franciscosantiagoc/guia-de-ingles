import React, { Suspense, useMemo } from 'react';

const TopicViewer = ({ levelId, unitId, topicId }) => {
  // Use useMemo to avoid recreating the lazy component on every render unless parameters change
  const DynamicTopic = useMemo(() => {
    return React.lazy(() => 
      import(`../topics/evolve${levelId}/unit${unitId}/${topicId}.jsx`)
        .catch((error) => {
          console.warn(`Topic file not found: evolve${levelId}/unit${unitId}/${topicId}.jsx`, error);
          return {
            default: () => (
              <div className="topic-not-found">
                <div className="topic-header">
                  <h2>Contenido Próximamente</h2>
                  <p className="topic-intro">Este tema está listo para ser expandido.</p>
                </div>
                
                <div className="insider-box">
                  <div className="insider-title">
                    <span>💡</span> Guía de Desarrollo
                  </div>
                  <div className="insider-content">
                    <p style={{ marginBottom: '12px' }}>
                      Para detallar este tema de estudio de forma interactiva y extendida, crea el siguiente archivo en tu estructura de carpetas:
                    </p>
                    <code style={{
                      display: 'block',
                      padding: '12px',
                      background: 'rgba(var(--overlay-rgb), 0.06)',
                      borderRadius: '8px',
                      margin: '12px 0',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--active-accent)',
                      border: '1px solid var(--border-color)'
                    }}>
                      src/topics/evolve{levelId}/unit{unitId}/{topicId}.jsx
                    </code>
                    <p>
                      Exporta un componente por defecto (`export default`) que contenga el diseño de tu explicación. El sistema lo cargará automáticamente de manera asíncrona.
                    </p>
                  </div>
                </div>
                
                <div className="quiz-widget">
                  <div className="quiz-widget-info">
                    <h4>Mini-Examen (Quiz)</h4>
                    <p>Pon a prueba tus conocimientos en este tema con un quiz rápido de 5 preguntas.</p>
                  </div>
                  <button className="btn-start-quiz" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                    Indisponible
                  </button>
                </div>
              </div>
            )
          };
        })
    );
  }, [levelId, unitId, topicId]);

  return (
    <Suspense fallback={<div className="loading-spinner">Cargando explicación del tema...</div>}>
      <DynamicTopic />
    </Suspense>
  );
};

export default TopicViewer;

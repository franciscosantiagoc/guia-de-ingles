import React, { useState } from 'react';
import TopicViewer from './TopicViewer';

const TopicList = ({ level, unit, onSelectUnit, initialTopicId }) => {
  const [activeTopic, setActiveTopic] = useState(
    () => unit.topics.find((t) => t.id === initialTopicId) || unit.topics[0]
  );

  if (!unit) return null;

  const topicIndex = unit.topics.findIndex((t) => t.id === activeTopic.id);
  const isFirstTopic = topicIndex === 0;
  const isLastTopic = topicIndex === unit.topics.length - 1;

  const unitIndex = level.units.findIndex((u) => u.id === unit.id);
  const isFirstUnit = unitIndex === 0;
  const isLastUnit = unitIndex === level.units.length - 1;

  const hasNext = !(isLastTopic && isLastUnit);
  const hasPrev = !(isFirstTopic && isFirstUnit);

  const handleNext = () => {
    if (!isLastTopic) {
      setActiveTopic(unit.topics[topicIndex + 1]);
    } else if (!isLastUnit) {
      const nextUnit = level.units[unitIndex + 1];
      setActiveTopic(nextUnit.topics[0]);
      onSelectUnit?.(nextUnit);
    }
  };

  const handlePrev = () => {
    if (!isFirstTopic) {
      setActiveTopic(unit.topics[topicIndex - 1]);
    } else if (!isFirstUnit) {
      const prevUnit = level.units[unitIndex - 1];
      setActiveTopic(prevUnit.topics[prevUnit.topics.length - 1]);
      onSelectUnit?.(prevUnit);
    }
  };

  const nextLabel = !isLastTopic
    ? unit.topics[topicIndex + 1].title
    : !isLastUnit
      ? `Unidad ${level.units[unitIndex + 1].id}: ${level.units[unitIndex + 1].title}`
      : null;

  const prevLabel = !isFirstTopic
    ? unit.topics[topicIndex - 1].title
    : !isFirstUnit
      ? `Unidad ${level.units[unitIndex - 1].id}: ${level.units[unitIndex - 1].title}`
      : null;

  return (
    <div className="unit-view-container">
      <div className="topics-sidebar">
        <h3 className="topics-sidebar-title">Contenido de la Unidad</h3>
        {unit.topics.map((topic) => (
          <button
            key={topic.id}
            className={`topic-nav-item ${activeTopic?.id === topic.id ? 'active' : ''}`}
            onClick={() => setActiveTopic(topic)}
          >
            <span className="topic-icon"></span>
            <span>{topic.title}</span>
          </button>
        ))}
      </div>

      <div className="topic-display-area">
        <TopicViewer
          levelId={level.id}
          unitId={unit.id}
          topicId={activeTopic.id}
        />
      </div>

      {hasPrev && (
        <button
          className="btn-prev-topic"
          onClick={handlePrev}
          title={prevLabel ? `Anterior: ${prevLabel}` : 'Tema anterior'}
        >
          <span aria-hidden="true">←</span>
          <span className="btn-prev-topic-label">
            {isFirstTopic ? 'Unidad anterior' : 'Tema anterior'}
          </span>
        </button>
      )}

      {hasNext && (
        <button
          className="btn-next-topic"
          onClick={handleNext}
          title={nextLabel ? `Siguiente: ${nextLabel}` : 'Siguiente tema'}
        >
          <span className="btn-next-topic-label">
            {isLastTopic ? 'Siguiente unidad' : 'Siguiente tema'}
          </span>
          <span aria-hidden="true">→</span>
        </button>
      )}
    </div>
  );
};

export default TopicList;

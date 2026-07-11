import React from 'react';

// Default sort state: keep the original (author-defined / category) order.
export const DEFAULT_SORT = 'default';

/**
 * Sorts an array of vocabulary items alphabetically by a given field.
 * mode 'default' returns the array unchanged (original/category order).
 * mode 'asc' sorts A→Z, mode 'desc' sorts Z→A.
 */
export const sortByWord = (items, mode, field = 'word') => {
  if (mode !== 'asc' && mode !== 'desc') return items;
  const sorted = [...items].sort((a, b) =>
    String(a[field]).localeCompare(String(b[field]), 'en', { sensitivity: 'base' })
  );
  return mode === 'desc' ? sorted.reverse() : sorted;
};

/**
 * Reusable A-Z / Z-A sort control used next to search inputs across vocabulary lists.
 * Clicking the active button again returns to the original (default) order.
 */
const SortToggle = ({ mode, onChange }) => {
  const toggle = (next) => onChange(mode === next ? DEFAULT_SORT : next);

  return (
    <div className="sort-toggle" role="group" aria-label="Ordenar lista">
      <button
        type="button"
        className={`sort-toggle-btn ${mode === 'asc' ? 'active' : ''}`}
        onClick={() => toggle('asc')}
        title="Ordenar de A a Z"
      >
        A→Z
      </button>
      <button
        type="button"
        className={`sort-toggle-btn ${mode === 'desc' ? 'active' : ''}`}
        onClick={() => toggle('desc')}
        title="Ordenar de Z a A"
      >
        Z→A
      </button>
    </div>
  );
};

export default SortToggle;

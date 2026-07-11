import React from 'react';

export const PAGE_SIZE_OPTIONS = [5, 10, 15, 20, 25];
export const DEFAULT_PAGE_SIZE = 20;

// Reusable pagination controls (with optional "items per page" selector) used across vocabulary lists
const Pagination = ({ page, totalPages, totalItems, onChange, itemsPerPage, onItemsPerPageChange }) => {
  if (totalItems === 0) return null;
  return (
    <div className="pagination-bar">
      <button
        className="pagination-btn"
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page <= 1}
      >
        ← Anterior
      </button>
      <span className="pagination-info">
        Página {page} de {totalPages} · {totalItems} resultados
      </span>
      {onItemsPerPageChange && (
        <label className="pagination-size-select">
          Ver:
          <select
            value={itemsPerPage}
            onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          >
            {PAGE_SIZE_OPTIONS.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </label>
      )}
      <button
        className="pagination-btn"
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page >= totalPages}
      >
        Siguiente →
      </button>
    </div>
  );
};

export default Pagination;

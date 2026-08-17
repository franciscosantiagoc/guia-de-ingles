// Persistencia en localStorage del progreso de Repaso: favoritos y contador
// de repasos por palabra. No hay backend de usuarios — todo vive en el navegador.
const FAVORITES_KEY = 'guia-ingles-favoritos';
const REVIEW_COUNTS_KEY = 'guia-ingles-repasos';

const readJSON = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const writeJSON = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // localStorage no disponible (modo privado, cuota llena, etc.) — se ignora silenciosamente
  }
};

export const getFavorites = () => readJSON(FAVORITES_KEY, []);

export const isFavorite = (id) => getFavorites().includes(id);

export const toggleFavorite = (id) => {
  const favorites = getFavorites();
  const next = favorites.includes(id)
    ? favorites.filter((f) => f !== id)
    : [...favorites, id];
  writeJSON(FAVORITES_KEY, next);
  return next;
};

export const removeFavorite = (id) => {
  const next = getFavorites().filter((f) => f !== id);
  writeJSON(FAVORITES_KEY, next);
  return next;
};

export const getReviewCounts = () => readJSON(REVIEW_COUNTS_KEY, {});

export const getReviewCount = (id) => getReviewCounts()[id] || 0;

// Umbral de repasos antes de preguntar si se desea quitar una palabra de favoritos
export const FAVORITE_REVIEW_THRESHOLD = 5;

// Registra un repaso de la palabra. Si es favorita y llega justo al umbral,
// devuelve promptRemoval=true para que la UI pregunte si se quiere quitar.
export const registerReview = (id) => {
  const counts = getReviewCounts();
  const nextCount = (counts[id] || 0) + 1;
  const nextCounts = { ...counts, [id]: nextCount };
  writeJSON(REVIEW_COUNTS_KEY, nextCounts);
  const promptRemoval = isFavorite(id) && nextCount >= FAVORITE_REVIEW_THRESHOLD;
  return { count: nextCount, promptRemoval };
};

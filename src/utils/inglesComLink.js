// Abre la página de traducción/conjugación de una palabra en inglés.com
// (diccionario inglés-español con ejemplos, conjugaciones y pronunciación).
export const openInglesCom = (word) => {
  const url = `https://www.ingles.com/traductor/${encodeURIComponent(word)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

export default openInglesCom;

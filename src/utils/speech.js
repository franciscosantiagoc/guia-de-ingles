// Utilidad compartida de audio (Web Speech API) — evita repetir la misma
// función local en cada archivo de vocabulario/gramática.
export const speak = (text) => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }
};

export default speak;

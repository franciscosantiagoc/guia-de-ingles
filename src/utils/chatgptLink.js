// Genera un enlace a chatgpt.com con un prompt precargado (parámetro `q`,
// no oficial pero ampliamente usado y estable) para pedirle a la IA más
// oraciones de ejemplo de un verbo en los tiempos que el usuario elija.
// No hay API pública de OpenAI usada aquí — solo se arma la URL y se abre
// en una pestaña nueva; el usuario ve/edita el prompt y lo envía él mismo.

export const VERB_TENSE_OPTIONS = [
  { id: 'presente', label: 'Presente simple', hint: 'simple present' },
  { id: 'pasado', label: 'Pasado simple', hint: 'simple past' },
  { id: 'futuro', label: 'Futuro simple', hint: 'simple future (will)' },
  { id: 'presente_participio', label: 'Presente participio (-ing)', hint: 'present participle / -ing form' },
  { id: 'pasado_participio', label: 'Pasado participio', hint: 'past participle' },
  { id: 'presente_perfecto', label: 'Presente perfecto', hint: 'present perfect' },
  { id: 'pasado_perfecto', label: 'Pasado perfecto', hint: 'past perfect' },
];

export const buildVerbExamplesPrompt = (verb, tenseIds, quantity) => {
  const tenses = VERB_TENSE_OPTIONS.filter((t) => tenseIds.includes(t.id));
  const tenseList = tenses.map((t) => t.hint).join(', ');
  return `Dame ${quantity} oraciones de ejemplo en inglés usando el verbo "${verb.word}" (${verb.translation}) en estos tiempos verbales: ${tenseList}. Incluye la traducción al español de cada oración. Organiza las oraciones agrupadas por tiempo verbal y numéralas.`;
};

// Prompt genérico para vocabulario (no verbos) — sin selector de tiempos.
export const buildVocabExamplesPrompt = (entry, quantity) => {
  return `Dame ${quantity} oraciones de ejemplo en inglés usando la palabra "${entry.word}" (${entry.translation}). Incluye la traducción al español de cada oración y numéralas.`;
};

export const openChatGPTWithPrompt = (prompt) => {
  const url = `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

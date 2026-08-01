import React, { useState, useMemo } from 'react';
import Pagination, { DEFAULT_PAGE_SIZE } from '../../../components/Pagination';
import SortToggle, { sortByWord, DEFAULT_SORT } from '../../../components/SortToggle';

const speak = (text) => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }
};

const ExampleCard = ({ en, es }) => (
  <div className="example-item">
    <div className="example-en">
      {en}
      <button className="audio-btn" onClick={() => speak(en)} title="Escuchar">🔊</button>
    </div>
    <div className="example-es">{es}</div>
  </div>
);

const Grammar2Topic = () => {
  const [advSearch, setAdvSearch] = useState('');
  const [advPage, setAdvPage] = useState(1);
  const [advPageSize, setAdvPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [advSort, setAdvSort] = useState(DEFAULT_SORT);

  const formationRules = [
    { rule: "Regla general: adjetivo + -ly", examples: [["quiet", "quietly"], ["careful", "carefully"], ["slow", "slowly"]] },
    { rule: "Adjetivo termina en consonante + y: cambia -y por -ily", examples: [["happy", "happily"], ["easy", "easily"], ["angry", "angrily"]] },
    { rule: "Adjetivo termina en -le: quita la -e y agrega -y", examples: [["gentle", "gently"], ["simple", "simply"], ["terrible", "terribly"]] },
    { rule: "Adjetivo termina en -ic: agrega -ally (no solo -ly)", examples: [["basic", "basically"], ["tragic", "tragically"], ["automatic", "automatically"]] },
    { rule: "Adjetivo termina en -ll: solo agrega -y", examples: [["full", "fully"], ["careful", "carefully"]] }
  ];

  const irregularAdverbs = [
    { adj: "good", adv: "well", translation: "bueno → bien" },
    { adj: "fast", adv: "fast", translation: "rápido → rápido (no cambia)" },
    { adj: "hard", adv: "hard", translation: "duro/difícil → duro/mucho (no cambia)" },
    { adj: "late", adv: "late", translation: "tarde (adj) → tarde (adv, no cambia)" },
    { adj: "early", adv: "early", translation: "temprano (adj) → temprano (adv, no cambia)" },
    { adj: "straight", adv: "straight", translation: "recto → directamente (no cambia)" }
  ];

  const allAdverbs = useMemo(() => [
    // Personalidad y Comportamiento
    { word: "kind", adv: "kindly", translation: "amable → amablemente", category: "Personalidad y Comportamiento" },
    { word: "cruel", adv: "cruelly", translation: "cruel → cruelmente", category: "Personalidad y Comportamiento" },
    { word: "polite", adv: "politely", translation: "cortés → cortésmente", category: "Personalidad y Comportamiento" },
    { word: "rude", adv: "rudely", translation: "grosero → groseramente", category: "Personalidad y Comportamiento" },
    { word: "honest", adv: "honestly", translation: "honesto → honestamente", category: "Personalidad y Comportamiento" },
    { word: "dishonest", adv: "dishonestly", translation: "deshonesto → deshonestamente", category: "Personalidad y Comportamiento" },
    { word: "generous", adv: "generously", translation: "generoso → generosamente", category: "Personalidad y Comportamiento" },
    { word: "selfish", adv: "selfishly", translation: "egoísta → egoístamente", category: "Personalidad y Comportamiento" },
    { word: "patient", adv: "patiently", translation: "paciente → pacientemente", category: "Personalidad y Comportamiento" },
    { word: "impatient", adv: "impatiently", translation: "impaciente → impacientemente", category: "Personalidad y Comportamiento" },
    { word: "calm", adv: "calmly", translation: "calmado → calmadamente", category: "Personalidad y Comportamiento" },
    { word: "confident", adv: "confidently", translation: "seguro de sí mismo → con confianza", category: "Personalidad y Comportamiento" },
    { word: "shy", adv: "shyly", translation: "tímido → tímidamente", category: "Personalidad y Comportamiento" },
    { word: "brave", adv: "bravely", translation: "valiente → valientemente", category: "Personalidad y Comportamiento" },
    { word: "loyal", adv: "loyally", translation: "leal → lealmente", category: "Personalidad y Comportamiento" },
    { word: "stubborn", adv: "stubbornly", translation: "terco → tercamente", category: "Personalidad y Comportamiento" },
    { word: "arrogant", adv: "arrogantly", translation: "arrogante → arrogantemente", category: "Personalidad y Comportamiento" },
    { word: "humble", adv: "humbly", translation: "humilde → humildemente", category: "Personalidad y Comportamiento" },
    { word: "proud", adv: "proudly", translation: "orgulloso → orgullosamente", category: "Personalidad y Comportamiento" },
    { word: "gentle", adv: "gently", translation: "gentil/suave → suavemente", category: "Personalidad y Comportamiento" },
    { word: "harsh", adv: "harshly", translation: "duro/severo → severamente", category: "Personalidad y Comportamiento" },
    { word: "strict", adv: "strictly", translation: "estricto → estrictamente", category: "Personalidad y Comportamiento" },
    { word: "fair", adv: "fairly", translation: "justo → justamente", category: "Personalidad y Comportamiento" },
    { word: "unfair", adv: "unfairly", translation: "injusto → injustamente", category: "Personalidad y Comportamiento" },
    { word: "curious", adv: "curiously", translation: "curioso → curiosamente", category: "Personalidad y Comportamiento" },
    // Trabajo y Habilidades
    { word: "careful", adv: "carefully", translation: "cuidadoso → cuidadosamente", category: "Trabajo y Habilidades" },
    { word: "careless", adv: "carelessly", translation: "descuidado → descuidadamente", category: "Trabajo y Habilidades" },
    { word: "efficient", adv: "efficiently", translation: "eficiente → eficientemente", category: "Trabajo y Habilidades" },
    { word: "effective", adv: "effectively", translation: "efectivo → efectivamente", category: "Trabajo y Habilidades" },
    { word: "productive", adv: "productively", translation: "productivo → productivamente", category: "Trabajo y Habilidades" },
    { word: "professional", adv: "professionally", translation: "profesional → profesionalmente", category: "Trabajo y Habilidades" },
    { word: "skillful", adv: "skillfully", translation: "hábil → hábilmente", category: "Trabajo y Habilidades" },
    { word: "competent", adv: "competently", translation: "competente → competentemente", category: "Trabajo y Habilidades" },
    { word: "thorough", adv: "thoroughly", translation: "minucioso → minuciosamente", category: "Trabajo y Habilidades" },
    { word: "accurate", adv: "accurately", translation: "preciso → precisamente", category: "Trabajo y Habilidades" },
    { word: "precise", adv: "precisely", translation: "exacto → exactamente", category: "Trabajo y Habilidades" },
    { word: "correct", adv: "correctly", translation: "correcto → correctamente", category: "Trabajo y Habilidades" },
    { word: "perfect", adv: "perfectly", translation: "perfecto → perfectamente", category: "Trabajo y Habilidades" },
    { word: "successful", adv: "successfully", translation: "exitoso → exitosamente", category: "Trabajo y Habilidades" },
    { word: "diligent", adv: "diligently", translation: "diligente → diligentemente", category: "Trabajo y Habilidades" },
    { word: "reliable", adv: "reliably", translation: "confiable → confiablemente", category: "Trabajo y Habilidades" },
    { word: "responsible", adv: "responsibly", translation: "responsable → responsablemente", category: "Trabajo y Habilidades" },
    { word: "punctual", adv: "punctually", translation: "puntual → puntualmente", category: "Trabajo y Habilidades" },
    { word: "consistent", adv: "consistently", translation: "consistente → consistentemente", category: "Trabajo y Habilidades" },
    { word: "flexible", adv: "flexibly", translation: "flexible → flexiblemente", category: "Trabajo y Habilidades" },
    { word: "creative", adv: "creatively", translation: "creativo → creativamente", category: "Trabajo y Habilidades" },
    { word: "innovative", adv: "innovatively", translation: "innovador → innovadoramente", category: "Trabajo y Habilidades" },
    { word: "ambitious", adv: "ambitiously", translation: "ambicioso → ambiciosamente", category: "Trabajo y Habilidades" },
    { word: "active", adv: "actively", translation: "activo → activamente", category: "Trabajo y Habilidades" },
    { word: "passive", adv: "passively", translation: "pasivo → pasivamente", category: "Trabajo y Habilidades" },
    // Emociones y Actitudes
    { word: "happy", adv: "happily", translation: "feliz → felizmente", category: "Emociones y Actitudes" },
    { word: "sad", adv: "sadly", translation: "triste → tristemente", category: "Emociones y Actitudes" },
    { word: "angry", adv: "angrily", translation: "enojado → enojadamente", category: "Emociones y Actitudes" },
    { word: "excited", adv: "excitedly", translation: "emocionado → emocionadamente", category: "Emociones y Actitudes" },
    { word: "nervous", adv: "nervously", translation: "nervioso → nerviosamente", category: "Emociones y Actitudes" },
    { word: "anxious", adv: "anxiously", translation: "ansioso → ansiosamente", category: "Emociones y Actitudes" },
    { word: "worried", adv: "worriedly", translation: "preocupado → preocupadamente", category: "Emociones y Actitudes" },
    { word: "cheerful", adv: "cheerfully", translation: "alegre → alegremente", category: "Emociones y Actitudes" },
    { word: "enthusiastic", adv: "enthusiastically", translation: "entusiasta → entusiastamente", category: "Emociones y Actitudes" },
    { word: "eager", adv: "eagerly", translation: "ansioso/entusiasmado → con entusiasmo", category: "Emociones y Actitudes" },
    { word: "reluctant", adv: "reluctantly", translation: "reacio → de mala gana", category: "Emociones y Actitudes" },
    { word: "desperate", adv: "desperately", translation: "desesperado → desesperadamente", category: "Emociones y Actitudes" },
    { word: "hopeful", adv: "hopefully", translation: "esperanzado → con esperanza", category: "Emociones y Actitudes" },
    { word: "optimistic", adv: "optimistically", translation: "optimista → optimistamente", category: "Emociones y Actitudes" },
    { word: "pessimistic", adv: "pessimistically", translation: "pesimista → pesimistamente", category: "Emociones y Actitudes" },
    { word: "sincere", adv: "sincerely", translation: "sincero → sinceramente", category: "Emociones y Actitudes" },
    { word: "genuine", adv: "genuinely", translation: "genuino → genuinamente", category: "Emociones y Actitudes" },
    { word: "bitter", adv: "bitterly", translation: "amargo → amargamente", category: "Emociones y Actitudes" },
    { word: "warm", adv: "warmly", translation: "cálido → cálidamente", category: "Emociones y Actitudes" },
    { word: "cold", adv: "coldly", translation: "frío → fríamente", category: "Emociones y Actitudes" },
    { word: "passionate", adv: "passionately", translation: "apasionado → apasionadamente", category: "Emociones y Actitudes" },
    { word: "jealous", adv: "jealously", translation: "celoso → celosamente", category: "Emociones y Actitudes" },
    { word: "grateful", adv: "gratefully", translation: "agradecido → agradecidamente", category: "Emociones y Actitudes" },
    { word: "shameful", adv: "shamefully", translation: "vergonzoso → vergonzosamente", category: "Emociones y Actitudes" },
    { word: "furious", adv: "furiously", translation: "furioso → furiosamente", category: "Emociones y Actitudes" },
    // Comunicación y Voz
    { word: "loud", adv: "loudly", translation: "fuerte/alto → en voz alta", category: "Comunicación y Voz" },
    { word: "quiet", adv: "quietly", translation: "callado → calladamente / en silencio", category: "Comunicación y Voz" },
    { word: "soft", adv: "softly", translation: "suave → suavemente", category: "Comunicación y Voz" },
    { word: "clear", adv: "clearly", translation: "claro → claramente", category: "Comunicación y Voz" },
    { word: "fluent", adv: "fluently", translation: "fluido → con fluidez", category: "Comunicación y Voz" },
    { word: "articulate", adv: "articulately", translation: "articulado → de forma articulada", category: "Comunicación y Voz" },
    { word: "persuasive", adv: "persuasively", translation: "persuasivo → persuasivamente", category: "Comunicación y Voz" },
    { word: "direct", adv: "directly", translation: "directo → directamente", category: "Comunicación y Voz" },
    { word: "indirect", adv: "indirectly", translation: "indirecto → indirectamente", category: "Comunicación y Voz" },
    { word: "brief", adv: "briefly", translation: "breve → brevemente", category: "Comunicación y Voz" },
    { word: "frank", adv: "frankly", translation: "franco → francamente", category: "Comunicación y Voz" },
    { word: "blunt", adv: "bluntly", translation: "franco/brusco → bruscamente", category: "Comunicación y Voz" },
    { word: "formal", adv: "formally", translation: "formal → formalmente", category: "Comunicación y Voz" },
    { word: "informal", adv: "informally", translation: "informal → informalmente", category: "Comunicación y Voz" },
    { word: "eloquent", adv: "eloquently", translation: "elocuente → elocuentemente", category: "Comunicación y Voz" },
    { word: "sarcastic", adv: "sarcastically", translation: "sarcástico → sarcásticamente", category: "Comunicación y Voz" },
    { word: "serious", adv: "seriously", translation: "serio → seriamente", category: "Comunicación y Voz" },
    { word: "joking", adv: "jokingly", translation: "en broma → bromeando", category: "Comunicación y Voz" },
    { word: "urgent", adv: "urgently", translation: "urgente → urgentemente", category: "Comunicación y Voz" },
    { word: "repeated", adv: "repeatedly", translation: "repetido → repetidamente", category: "Comunicación y Voz" },
    { word: "constant", adv: "constantly", translation: "constante → constantemente", category: "Comunicación y Voz" },
    { word: "specific", adv: "specifically", translation: "específico → específicamente", category: "Comunicación y Voz" },
    { word: "vague", adv: "vaguely", translation: "vago → vagamente", category: "Comunicación y Voz" },
    { word: "open", adv: "openly", translation: "abierto → abiertamente", category: "Comunicación y Voz" },
    { word: "private", adv: "privately", translation: "privado → privadamente / en privado", category: "Comunicación y Voz" },
    // Movimiento y Acción Física
    { word: "quick", adv: "quickly", translation: "rápido → rápidamente", category: "Movimiento y Acción Física" },
    { word: "slow", adv: "slowly", translation: "lento → lentamente", category: "Movimiento y Acción Física" },
    { word: "smooth", adv: "smoothly", translation: "suave/fluido → suavemente", category: "Movimiento y Acción Física" },
    { word: "steady", adv: "steadily", translation: "estable → establemente", category: "Movimiento y Acción Física" },
    { word: "sudden", adv: "suddenly", translation: "repentino → repentinamente", category: "Movimiento y Acción Física" },
    { word: "gradual", adv: "gradually", translation: "gradual → gradualmente", category: "Movimiento y Acción Física" },
    { word: "vigorous", adv: "vigorously", translation: "vigoroso → vigorosamente", category: "Movimiento y Acción Física" },
    { word: "energetic", adv: "energetically", translation: "enérgico → enérgicamente", category: "Movimiento y Acción Física" },
    { word: "clumsy", adv: "clumsily", translation: "torpe → torpemente", category: "Movimiento y Acción Física" },
    { word: "graceful", adv: "gracefully", translation: "elegante/grácil → con gracia", category: "Movimiento y Acción Física" },
    { word: "awkward", adv: "awkwardly", translation: "torpe/incómodo → incómodamente", category: "Movimiento y Acción Física" },
    { word: "firm", adv: "firmly", translation: "firme → firmemente", category: "Movimiento y Acción Física" },
    { word: "tight", adv: "tightly", translation: "apretado → apretadamente", category: "Movimiento y Acción Física" },
    { word: "loose", adv: "loosely", translation: "suelto → sueltamente", category: "Movimiento y Acción Física" },
    { word: "heavy", adv: "heavily", translation: "pesado → pesadamente", category: "Movimiento y Acción Física" },
    { word: "light", adv: "lightly", translation: "ligero → ligeramente", category: "Movimiento y Acción Física" },
    { word: "deep", adv: "deeply", translation: "profundo → profundamente", category: "Movimiento y Acción Física" },
    { word: "wide", adv: "widely", translation: "amplio → ampliamente", category: "Movimiento y Acción Física" },
    { word: "narrow", adv: "narrowly", translation: "estrecho → por poco (escapar por poco)", category: "Movimiento y Acción Física" },
    { word: "violent", adv: "violently", translation: "violento → violentamente", category: "Movimiento y Acción Física" },
    { word: "aggressive", adv: "aggressively", translation: "agresivo → agresivamente", category: "Movimiento y Acción Física" },
    { word: "cautious", adv: "cautiously", translation: "cauteloso → cautelosamente", category: "Movimiento y Acción Física" },
    { word: "reckless", adv: "recklessly", translation: "imprudente → imprudentemente", category: "Movimiento y Acción Física" },
    { word: "swift", adv: "swiftly", translation: "veloz → velozmente", category: "Movimiento y Acción Física" },
    { word: "abrupt", adv: "abruptly", translation: "abrupto → abruptamente", category: "Movimiento y Acción Física" },
    // Cantidad e Intensidad
    { word: "extreme", adv: "extremely", translation: "extremo → extremadamente", category: "Cantidad e Intensidad" },
    { word: "complete", adv: "completely", translation: "completo → completamente", category: "Cantidad e Intensidad" },
    { word: "total", adv: "totally", translation: "total → totalmente", category: "Cantidad e Intensidad" },
    { word: "absolute", adv: "absolutely", translation: "absoluto → absolutamente", category: "Cantidad e Intensidad" },
    { word: "entire", adv: "entirely", translation: "entero → enteramente", category: "Cantidad e Intensidad" },
    { word: "partial", adv: "partially", translation: "parcial → parcialmente", category: "Cantidad e Intensidad" },
    { word: "slight", adv: "slightly", translation: "leve → levemente", category: "Cantidad e Intensidad" },
    { word: "moderate", adv: "moderately", translation: "moderado → moderadamente", category: "Cantidad e Intensidad" },
    { word: "considerable", adv: "considerably", translation: "considerable → considerablemente", category: "Cantidad e Intensidad" },
    { word: "significant", adv: "significantly", translation: "significativo → significativamente", category: "Cantidad e Intensidad" },
    { word: "remarkable", adv: "remarkably", translation: "notable → notablemente", category: "Cantidad e Intensidad" },
    { word: "exceptional", adv: "exceptionally", translation: "excepcional → excepcionalmente", category: "Cantidad e Intensidad" },
    { word: "incredible", adv: "incredibly", translation: "increíble → increíblemente", category: "Cantidad e Intensidad" },
    { word: "unbelievable", adv: "unbelievably", translation: "inconcebible → inconcebiblemente", category: "Cantidad e Intensidad" },
    { word: "tremendous", adv: "tremendously", translation: "tremendo → tremendamente", category: "Cantidad e Intensidad" },
    { word: "immense", adv: "immensely", translation: "inmenso → inmensamente", category: "Cantidad e Intensidad" },
    { word: "intense", adv: "intensely", translation: "intenso → intensamente", category: "Cantidad e Intensidad" },
    { word: "mild", adv: "mildly", translation: "leve/suave → levemente", category: "Cantidad e Intensidad" },
    { word: "severe", adv: "severely", translation: "severo → severamente", category: "Cantidad e Intensidad" },
    { word: "vast", adv: "vastly", translation: "vasto → vastamente", category: "Cantidad e Intensidad" },
    { word: "utter", adv: "utterly", translation: "absoluto/total → completamente", category: "Cantidad e Intensidad" },
    { word: "high", adv: "highly", translation: "alto → sumamente/muy (¡uso figurado, distinto de 'high' literal!)", category: "Cantidad e Intensidad" },
    { word: "bare", adv: "barely", translation: "desnudo/mínimo → apenas", category: "Cantidad e Intensidad" },
    { word: "near", adv: "nearly", translation: "cercano → casi (¡cambia de significado, no es 'cercanamente'!)", category: "Cantidad e Intensidad" },
    { word: "hard", adv: "hardly", translation: "duro/difícil → apenas, casi no (¡cambia de significado, no es 'mucho'!)", category: "Cantidad e Intensidad" },
    // Calidad, Precisión y Cuidado
    { word: "neat", adv: "neatly", translation: "ordenado/pulcro → pulcramente", category: "Calidad, Precisión y Cuidado" },
    { word: "tidy", adv: "tidily", translation: "ordenado → ordenadamente", category: "Calidad, Precisión y Cuidado" },
    { word: "messy", adv: "messily", translation: "desordenado → desordenadamente", category: "Calidad, Precisión y Cuidado" },
    { word: "clean", adv: "cleanly", translation: "limpio → limpiamente", category: "Calidad, Precisión y Cuidado" },
    { word: "dirty", adv: "dirtily", translation: "sucio → sucísimamente", category: "Calidad, Precisión y Cuidado" },
    { word: "simple", adv: "simply", translation: "simple → simplemente", category: "Calidad, Precisión y Cuidado" },
    { word: "elaborate", adv: "elaborately", translation: "elaborado → elaboradamente", category: "Calidad, Precisión y Cuidado" },
    { word: "meticulous", adv: "meticulously", translation: "meticuloso → meticulosamente", category: "Calidad, Precisión y Cuidado" },
    { word: "rigorous", adv: "rigorously", translation: "riguroso → rigurosamente", category: "Calidad, Precisión y Cuidado" },
    { word: "systematic", adv: "systematically", translation: "sistemático → sistemáticamente", category: "Calidad, Precisión y Cuidado" },
    { word: "logical", adv: "logically", translation: "lógico → lógicamente", category: "Calidad, Precisión y Cuidado" },
    { word: "practical", adv: "practically", translation: "práctico → prácticamente", category: "Calidad, Precisión y Cuidado" },
    { word: "realistic", adv: "realistically", translation: "realista → de forma realista", category: "Calidad, Precisión y Cuidado" },
    { word: "theoretical", adv: "theoretically", translation: "teórico → teóricamente", category: "Calidad, Precisión y Cuidado" },
    { word: "technical", adv: "technically", translation: "técnico → técnicamente", category: "Calidad, Precisión y Cuidado" },
    { word: "scientific", adv: "scientifically", translation: "científico → científicamente", category: "Calidad, Precisión y Cuidado" },
    { word: "mathematical", adv: "mathematically", translation: "matemático → matemáticamente", category: "Calidad, Precisión y Cuidado" },
    { word: "statistical", adv: "statistically", translation: "estadístico → estadísticamente", category: "Calidad, Precisión y Cuidado" },
    { word: "economic", adv: "economically", translation: "económico → económicamente", category: "Calidad, Precisión y Cuidado" },
    { word: "financial", adv: "financially", translation: "financiero → financieramente", category: "Calidad, Precisión y Cuidado" },
    { word: "legal", adv: "legally", translation: "legal → legalmente", category: "Calidad, Precisión y Cuidado" },
    { word: "illegal", adv: "illegally", translation: "ilegal → ilegalmente", category: "Calidad, Precisión y Cuidado" },
    { word: "physical", adv: "physically", translation: "físico → físicamente", category: "Calidad, Precisión y Cuidado" },
    { word: "mental", adv: "mentally", translation: "mental → mentalmente", category: "Calidad, Precisión y Cuidado" },
    { word: "visual", adv: "visually", translation: "visual → visualmente", category: "Calidad, Precisión y Cuidado" },
    // Tiempo, Frecuencia y Secuencia
    { word: "immediate", adv: "immediately", translation: "inmediato → inmediatamente", category: "Tiempo, Frecuencia y Secuencia" },
    { word: "recent", adv: "recently", translation: "reciente → recientemente", category: "Tiempo, Frecuencia y Secuencia" },
    { word: "eventual", adv: "eventually", translation: "eventual → eventualmente/finalmente", category: "Tiempo, Frecuencia y Secuencia" },
    { word: "final", adv: "finally", translation: "final → finalmente", category: "Tiempo, Frecuencia y Secuencia" },
    { word: "initial", adv: "initially", translation: "inicial → inicialmente", category: "Tiempo, Frecuencia y Secuencia" },
    { word: "original", adv: "originally", translation: "original → originalmente", category: "Tiempo, Frecuencia y Secuencia" },
    { word: "previous", adv: "previously", translation: "previo → previamente", category: "Tiempo, Frecuencia y Secuencia" },
    { word: "subsequent", adv: "subsequently", translation: "subsecuente → subsecuentemente", category: "Tiempo, Frecuencia y Secuencia" },
    { word: "frequent", adv: "frequently", translation: "frecuente → frecuentemente", category: "Tiempo, Frecuencia y Secuencia" },
    { word: "occasional", adv: "occasionally", translation: "ocasional → ocasionalmente", category: "Tiempo, Frecuencia y Secuencia" },
    { word: "regular", adv: "regularly", translation: "regular → regularmente", category: "Tiempo, Frecuencia y Secuencia" },
    { word: "usual", adv: "usually", translation: "usual → usualmente", category: "Tiempo, Frecuencia y Secuencia" },
    { word: "normal", adv: "normally", translation: "normal → normalmente", category: "Tiempo, Frecuencia y Secuencia" },
    { word: "rare", adv: "rarely", translation: "raro → rara vez", category: "Tiempo, Frecuencia y Secuencia" },
    { word: "temporary", adv: "temporarily", translation: "temporal → temporalmente", category: "Tiempo, Frecuencia y Secuencia" },
    { word: "permanent", adv: "permanently", translation: "permanente → permanentemente", category: "Tiempo, Frecuencia y Secuencia" },
    { word: "continuous", adv: "continuously", translation: "continuo → continuamente", category: "Tiempo, Frecuencia y Secuencia" },
    { word: "simultaneous", adv: "simultaneously", translation: "simultáneo → simultáneamente", category: "Tiempo, Frecuencia y Secuencia" },
    { word: "instant", adv: "instantly", translation: "instantáneo → instantáneamente", category: "Tiempo, Frecuencia y Secuencia" },
    { word: "momentary", adv: "momentarily", translation: "momentáneo → momentáneamente", category: "Tiempo, Frecuencia y Secuencia" },
    { word: "daily", adv: "daily", translation: "diario (adjetivo y adverbio son iguales)", category: "Tiempo, Frecuencia y Secuencia" },
    { word: "weekly", adv: "weekly", translation: "semanal (adjetivo y adverbio son iguales)", category: "Tiempo, Frecuencia y Secuencia" },
    { word: "monthly", adv: "monthly", translation: "mensual (adjetivo y adverbio son iguales)", category: "Tiempo, Frecuencia y Secuencia" },
    { word: "annual", adv: "annually", translation: "anual → anualmente", category: "Tiempo, Frecuencia y Secuencia" },
    { word: "increasing", adv: "increasingly", translation: "creciente → cada vez más", category: "Tiempo, Frecuencia y Secuencia" }
  ], []);

  const filteredAdverbs = useMemo(() => sortByWord(allAdverbs.filter((item) =>
    item.word.toLowerCase().includes(advSearch.toLowerCase()) ||
    item.adv.toLowerCase().includes(advSearch.toLowerCase()) ||
    item.translation.toLowerCase().includes(advSearch.toLowerCase()) ||
    item.category.toLowerCase().includes(advSearch.toLowerCase())
  ), advSort), [allAdverbs, advSearch, advSort]);

  const advTotalPages = Math.max(1, Math.ceil(filteredAdverbs.length / advPageSize));
  const paginatedAdverbs = filteredAdverbs.slice((advPage - 1) * advPageSize, advPage * advPageSize);

  const handleAdvSearch = (value) => { setAdvSearch(value); setAdvPage(1); };
  const handleAdvPageSize = (size) => { setAdvPageSize(size); setAdvPage(1); };

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 8 • Gramática 2</span>
        <h2>Adverbios de Modo (Adverbs of Manner)</h2>
        <p className="topic-intro">
          Los adverbios de modo describen CÓMO se hace algo — son el complemento perfecto para hablar de tus habilidades: no solo "sabes cantar", sino que "cantas muy bien".
        </p>
      </div>

      {/* QUÉ SON */}
      <div className="content-section">
        <h3>1. ¿Qué son los Adverbios de Modo?</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Un adverbio de modo responde a la pregunta "¿cómo?" y normalmente modifica a un verbo, no a un sustantivo.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <ExampleCard en="She sings beautifully." es="Ella canta hermosamente. (¿Cómo canta? — bellamente)" />
          <ExampleCard en="He drives carefully." es="Él maneja con cuidado. (¿Cómo maneja? — cuidadosamente)" />
          <ExampleCard en="They work quickly." es="Ellos trabajan rápido. (¿Cómo trabajan? — rápidamente)" />
        </div>
      </div>

      {/* FORMACIÓN */}
      <div className="content-section">
        <h3>2. Formación: Cómo Crear un Adverbio de Modo</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          La mayoría de los adverbios de modo se forman agregando "-ly" al adjetivo, pero hay algunas reglas ortográficas importantes.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {formationRules.map((rule, index) => (
            <div key={index} className="example-item">
              <div style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '10px' }}>{rule.rule}</div>
              {rule.examples.map(([adj, adv], i) => (
                <div key={i} className="example-en" style={{ justifyContent: 'space-between', marginTop: '6px', fontSize: '0.9rem' }}>
                  <span>{adj} → <strong>{adv}</strong></span>
                  <button className="audio-btn" onClick={() => speak(adv)} title="Escuchar" style={{ margin: 0, width: '26px', height: '26px' }}>🔊</button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* IRREGULARES */}
      <div className="content-section">
        <h3>3. Adverbios Irregulares</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Algunos adverbios de modo no siguen la regla del "-ly" — hay que memorizarlos por separado. El más importante es "well" (la forma adverbial de "good").
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
          {irregularAdverbs.map((item, index) => (
            <div key={index} className="example-item" style={{ padding: '10px 14px' }}>
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{item.adj} → <strong>{item.adv}</strong></span>
                <button className="audio-btn" onClick={() => speak(item.adv)} title="Escuchar" style={{ margin: 0, width: '26px', height: '26px' }}>🔊</button>
              </div>
              <div className="example-es">{item.translation}</div>
            </div>
          ))}
        </div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: '16px' }}>
          <ExampleCard en="She is a good singer. She sings well." es="Ella es una buena cantante. Ella canta bien." />
          <ExampleCard en="He can play very well." es="Él sabe jugar/tocar muy bien." />
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>❌</span> Error común: "good" no es un adverbio</div>
          <div className="insider-content">
            NUNCA digas <em>"She sings good"</em> — "good" es un adjetivo y describe sustantivos, no verbos. Para describir cómo se hace una acción, usa <strong>"well"</strong>: <strong>"She sings well."</strong> (Sí puedes decir "She is a good singer" porque ahí "good" describe al sustantivo "singer".)
          </div>
        </div>
      </div>

      {/* POSICIÓN */}
      <div className="content-section">
        <h3>4. Posición en la Oración</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Normalmente, el adverbio de modo va después del verbo, o después del objeto si el verbo tiene uno.
        </p>

        <div className="grammar-formula" style={{ flexDirection: 'column', gap: '6px', fontSize: '1rem' }}>
          <div>Sujeto + verbo + adverbio</div>
          <div>Sujeto + verbo + objeto + adverbio</div>
        </div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <ExampleCard en="He speaks slowly." es="Él habla despacio. (verbo + adverbio)" />
          <ExampleCard en="She plays the piano beautifully." es="Ella toca el piano hermosamente. (verbo + objeto + adverbio)" />
          <ExampleCard en="They solved the problem easily." es="Ellos resolvieron el problema fácilmente." />
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>⚠️</span> Nunca separes el verbo del objeto</div>
          <div className="insider-content">
            NUNCA digas <em>"She plays beautifully the piano"</em> — el adverbio no puede ir entre el verbo y su objeto directo. Va después del objeto completo: <strong>"She plays the piano beautifully."</strong>
          </div>
        </div>
      </div>

      {/* ADJETIVO VS ADVERBIO */}
      <div className="content-section">
        <h3>5. Adjetivo vs. Adverbio: No los Confundas</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Un adjetivo describe a un sustantivo; un adverbio describe a un verbo. Compara el mismo par de palabras en ambos roles.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div className="example-item">
            <div className="example-en">Adjetivo (describe un sustantivo)</div>
            <div className="example-es"><em>"She is a careful driver."</em> (Ella es una conductora cuidadosa — describe a "driver").</div>
          </div>
          <div className="example-item">
            <div className="example-en">Adverbio (describe un verbo)</div>
            <div className="example-es"><em>"She drives carefully."</em> (Ella maneja con cuidado — describe cómo "drives").</div>
          </div>
        </div>
      </div>

      {/* LISTA EXTENSA */}
      <div className="content-section">
        <h3>6. Lista Extensa: {allAdverbs.length} Adverbios de Modo</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Una referencia completa de adjetivo → adverbio para consultar y practicar, organizada en 8 categorías: personalidad, trabajo, emociones, comunicación, movimiento, cantidad/intensidad, calidad/precisión y tiempo/frecuencia.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            className="search-input"
            style={{ flex: 1, minWidth: '200px' }}
            placeholder="🔍 Buscar adjetivo, adverbio, traducción o categoría..."
            value={advSearch}
            onChange={(e) => handleAdvSearch(e.target.value)}
          />
          <SortToggle mode={advSort} onChange={setAdvSort} />
        </div>
        <span className="result-count">{filteredAdverbs.length} de {allAdverbs.length} adverbios</span>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
          {paginatedAdverbs.map((item, index) => (
            <div key={index} className="example-item" style={{ borderLeft: '3px solid var(--color-evolve1)' }}>
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{item.word} → <strong>{item.adv}</strong></span>
                <button className="audio-btn" onClick={() => speak(item.adv)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ marginTop: '6px', fontSize: '0.85rem' }}>
                {item.translation} <span className="category-tag" style={{ float: 'right' }}>{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          page={advPage}
          totalPages={advTotalPages}
          totalItems={filteredAdverbs.length}
          onChange={setAdvPage}
          itemsPerPage={advPageSize}
          onItemsPerPageChange={handleAdvPageSize}
        />

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>⚠️</span> Adjetivos que ya terminan en "-ly"</div>
          <div className="insider-content">
            Algunos adjetivos ya terminan en "-ly" (<strong>friendly</strong>, <strong>lovely</strong>, <strong>ugly</strong>, <strong>silly</strong>, <strong>lonely</strong>, <strong>elderly</strong>) y NO tienen una forma adverbial en "-ly" propia. Para describir cómo se hace algo, usa <strong>"in a friendly way"</strong> o <strong>"in a friendly manner"</strong> en lugar de <em>"friendlily"</em> (que no existe).
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen: Adverbios de Modo</h4>
          <p>Practica la formación, los irregulares y la posición de los adverbios de modo.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default Grammar2Topic;

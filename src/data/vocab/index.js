// Banco de datos compartido de vocabulario (Repaso / Práctica).
// Agrega y normaliza los arrays de src/data/vocab/evolveN/unitM.js a un
// formato común: { id, level, unit, unitTitle, source, category, word, translation, example, exampleEs }
//
// IMPORTANTE: cada unidad nueva (o actualización de vocabulario) debe registrarse
// aquí en SOURCES para que Repaso y Práctica se mantengan sincronizados.
import { levels } from '../levels.js';
import * as evolve1unit1 from './evolve1/unit1.js';
import * as evolve1unit2 from './evolve1/unit2.js';
import * as evolve1unit3 from './evolve1/unit3.js';
import * as evolve1unit4 from './evolve1/unit4.js';
import * as evolve1unit5 from './evolve1/unit5.js';
import * as evolve1unit6 from './evolve1/unit6.js';
import * as evolve1unit7 from './evolve1/unit7.js';
import * as evolve1unit8 from './evolve1/unit8.js';

// Extrae "Argentino/a" de "Argentina ➔ Argentino/a"
const afterArrow = (text) => {
  if (typeof text !== 'string') return text;
  const parts = text.split('➔');
  return parts.length > 1 ? parts[1].trim() : text.trim();
};

// Genera 1 oración de ejemplo simple (EN/ES) cuando el dato original no trae una.
// Plantillas automáticas por tipo gramatical — calidad básica, pensadas para
// darle contexto mínimo a la palabra en la tarjeta, no como ejemplo curado.
const AUTO_EXAMPLES = {
  noun: (word, translation) => ({
    en: `Can you point to the ${word}?`,
    es: `¿Puedes señalar "${translation}"?`,
  }),
  verb: (word, translation) => ({
    en: `I like to ${word}.`,
    es: `Me gusta ${translation}.`,
  }),
  adjective: (word, translation) => ({
    en: `She looks ${word}.`,
    es: `Ella se ve ${translation}.`,
  }),
  nationality: (word, translation) => ({
    en: `He is ${word}.`,
    es: `Él es ${translation}.`,
  }),
  job: (word, translation, item) => ({
    en: `She wants to be ${item.article || 'a'} ${word}.`,
    es: `Ella quiere ser ${translation}.`,
  }),
  month: (word, translation) => ({
    en: `My birthday is in ${word}.`,
    es: `Mi cumpleaños es en ${translation}.`,
  }),
  day: (word, translation) => ({
    en: `I go to school on ${word}.`,
    es: `Voy a la escuela el ${translation}.`,
  }),
  'adverb-freq': (word, translation, item) => ({
    en: item.example || `I ${word} do this.`,
    es: `Yo ${translation} hago ejercicio.`,
  }),
};

// Config de cada array fuente: cómo leer palabra/traducción/categoría y qué
// plantilla de ejemplo usar si el dato no trae example/exampleEs propios.
const SOURCES = [
  { level: 1, unit: 1, key: 'allCountries', data: evolve1unit1.allCountries, type: 'nationality', wordField: 'nationality', translationField: 'translation', translationTransform: afterArrow, label: 'Nacionalidades' },
  { level: 1, unit: 1, key: 'allJobs', data: evolve1unit1.allJobs, type: 'job', wordField: 'job', categoryField: 'category', label: 'Trabajos' },
  { level: 1, unit: 2, key: 'allFamily', data: evolve1unit2.allFamily, type: 'noun', categoryField: 'category', label: 'Familia' },
  { level: 1, unit: 2, key: 'allAdjectives', data: evolve1unit2.allAdjectives, type: 'adjective', categoryField: 'category', label: 'Adjetivos' },
  { level: 1, unit: 2, key: 'months', data: evolve1unit2.months, type: 'month', wordField: 'en', translationField: 'es', label: 'Meses' },
  { level: 1, unit: 3, key: 'allRooms', data: evolve1unit3.allRooms, type: 'noun', label: 'Habitaciones' },
  { level: 1, unit: 3, key: 'allFurniture', data: evolve1unit3.allFurniture, type: 'noun', categoryField: 'room', label: 'Muebles' },
  { level: 1, unit: 3, key: 'allFoodDrinks', data: evolve1unit3.allFoodDrinks, type: 'noun', categoryField: 'type', label: 'Comida y Bebidas' },
  { level: 1, unit: 4, key: 'allDevices', data: evolve1unit4.allDevices, type: 'noun', categoryField: 'category', label: 'Dispositivos' },
  { level: 1, unit: 4, key: 'allTechVerbs', data: evolve1unit4.allTechVerbs, type: 'verb', label: 'Verbos de Tecnología' },
  { level: 1, unit: 4, key: 'allMusic', data: evolve1unit4.allMusic, type: 'noun', categoryField: 'type', label: 'Música' },
  { level: 1, unit: 5, key: 'allActivities', data: evolve1unit5.allActivities, type: 'verb', categoryField: 'category', label: 'Actividades' },
  { level: 1, unit: 5, key: 'daysOfWeek', data: evolve1unit5.daysOfWeek, type: 'day', label: 'Días de la Semana' },
  { level: 1, unit: 5, key: 'frequencyAdverbs', data: evolve1unit5.frequencyAdverbs, type: 'adverb-freq', label: 'Adverbios de Frecuencia' },
  { level: 1, unit: 6, key: 'allPlaces', data: evolve1unit6.allPlaces, type: 'noun', categoryField: 'category', label: 'Lugares' },
  { level: 1, unit: 6, key: 'allNature', data: evolve1unit6.allNature, type: 'noun', categoryField: 'category', label: 'Naturaleza' },
  { level: 1, unit: 6, key: 'allBuilding', data: evolve1unit6.allBuilding, type: 'noun', categoryField: 'category', label: 'Edificio' },
  { level: 1, unit: 7, key: 'allActionVerbs', data: evolve1unit7.allActionVerbs, type: 'verb', categoryField: 'category', label: 'Verbos de Acción' },
  { level: 1, unit: 8, key: 'allSkills', data: evolve1unit8.allSkills, type: 'verb', categoryField: 'category', label: 'Habilidades' },
];

const unitTitleCache = {};
const getUnitTitle = (levelId, unitId) => {
  const cacheKey = `${levelId}-${unitId}`;
  if (unitTitleCache[cacheKey]) return unitTitleCache[cacheKey];
  const level = levels.find((l) => l.id === levelId);
  const unit = level?.units.find((u) => u.id === unitId);
  const title = unit ? `${unit.title} (${unit.translation})` : `Unidad ${unitId}`;
  unitTitleCache[cacheKey] = title;
  return title;
};

const buildEntry = (source, item, index) => {
  const word = item[source.wordField || 'word'];
  const rawTranslation = item[source.translationField || 'translation'];
  const translation = source.translationTransform ? source.translationTransform(rawTranslation) : rawTranslation;
  const category = source.categoryField ? item[source.categoryField] : source.label;

  let example = item.example;
  let exampleEs = item.exampleEs;
  if (!example || !exampleEs) {
    const generator = AUTO_EXAMPLES[source.type];
    const generated = generator ? generator(word, translation, item) : { en: '', es: '' };
    example = example || generated.en;
    exampleEs = exampleEs || generated.es;
  }

  return {
    id: `e${source.level}-u${source.unit}-${source.key}-${index}`,
    level: source.level,
    unit: source.unit,
    unitTitle: getUnitTitle(source.level, source.unit),
    source: source.key,
    sourceLabel: source.label,
    category: category || source.label,
    word,
    translation,
    example,
    exampleEs,
  };
};

let cachedVocabulary = null;

// Devuelve el banco completo normalizado (calculado una sola vez, es data estática).
export const getAllVocabulary = () => {
  if (cachedVocabulary) return cachedVocabulary;
  const entries = [];
  SOURCES.forEach((source) => {
    (source.data || []).forEach((item, index) => {
      entries.push(buildEntry(source, item, index));
    });
  });
  cachedVocabulary = entries;
  return entries;
};

// Metadatos de unidades disponibles (para selectores de Repaso/Práctica).
export const getVocabUnitsMeta = () => {
  const seen = new Map();
  SOURCES.forEach((source) => {
    const key = `${source.level}-${source.unit}`;
    if (!seen.has(key)) {
      seen.set(key, { level: source.level, unit: source.unit, unitTitle: getUnitTitle(source.level, source.unit) });
    }
  });
  return Array.from(seen.values()).sort((a, b) => a.level - b.level || a.unit - b.unit);
};

export default getAllVocabulary;

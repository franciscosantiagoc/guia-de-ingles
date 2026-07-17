import React, { useState, useMemo } from 'react';
import Pagination, { DEFAULT_PAGE_SIZE } from '../../../components/Pagination';
import SortToggle, { sortByWord, DEFAULT_SORT } from '../../../components/SortToggle';

const ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const TEENS = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const SCALES = [
  { value: 1000000000, name: 'billion' },
  { value: 1000000, name: 'million' },
  { value: 1000, name: 'thousand' }
];

// Handles 1-999 (used as the "block" that repeats for thousands/millions/billions)
const threeDigitWords = (n) => {
  if (n === 0) return '';
  const hundreds = Math.floor(n / 100);
  const remainder = n % 100;
  const parts = [];
  if (hundreds > 0) parts.push(`${ONES[hundreds]} hundred`);
  if (remainder > 0) {
    if (hundreds > 0) parts.push('and');
    if (remainder < 10) parts.push(ONES[remainder]);
    else if (remainder < 20) parts.push(TEENS[remainder - 10]);
    else if (remainder % 10 === 0) parts.push(TENS[Math.floor(remainder / 10)]);
    else parts.push(`${TENS[Math.floor(remainder / 10)]}-${ONES[remainder % 10]}`);
  }
  return parts.join(' ');
};

// Full number-to-words generator: works for any number from 0 up to billions.
// This is the "template engine" for numbers — new ranges never need to be typed by hand.
const numberToWordsFull = (n) => {
  if (n === 0) return 'zero';
  const words = [];
  let remaining = n;
  for (const scale of SCALES) {
    if (remaining >= scale.value) {
      const count = Math.floor(remaining / scale.value);
      words.push(`${threeDigitWords(count)} ${scale.name}`);
      remaining %= scale.value;
    }
  }
  if (remaining > 0) words.push(threeDigitWords(remaining));
  return words.join(' ');
};

// Shorthand for the 1-100 range used in the base vocabulary grid
const numberToWords = (n) => numberToWordsFull(n);

// Words for any number 0-99 (used by threeDigitWords and by the year reader below)
const twoDigitWords = (n) => {
  if (n === 0) return '';
  if (n < 10) return ONES[n];
  if (n < 20) return TEENS[n - 10];
  if (n % 10 === 0) return TENS[Math.floor(n / 10)];
  return `${TENS[Math.floor(n / 10)]}-${ONES[n % 10]}`;
};

// Reads a 4-digit year the way native speakers actually say it:
// 2000-2009 -> "two thousand (x)"; round centuries -> "(x) hundred";
// a zero in the tens place -> "(x) oh (x)"; otherwise two 2-digit chunks (e.g. 1998 -> nineteen ninety-eight).
const yearToWords = (year) => {
  if (year >= 2000 && year <= 2009) {
    const remainder = year - 2000;
    return remainder === 0 ? 'two thousand' : `two thousand ${ONES[remainder]}`;
  }
  const firstTwo = Math.floor(year / 100);
  const lastTwo = year % 100;
  if (lastTwo === 0) return `${twoDigitWords(firstTwo)} hundred`;
  if (lastTwo < 10) return `${twoDigitWords(firstTwo)} oh ${ONES[lastTwo]}`;
  return `${twoDigitWords(firstTwo)} ${twoDigitWords(lastTwo)}`;
};

const ORDINAL_WORDS = [
  '', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth',
  'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth', 'twentieth',
  'twenty-first', 'twenty-second', 'twenty-third', 'twenty-fourth', 'twenty-fifth', 'twenty-sixth', 'twenty-seventh', 'twenty-eighth', 'twenty-ninth', 'thirtieth', 'thirty-first'
];

const ordinalNumeral = (n) => {
  if (n % 100 >= 11 && n % 100 <= 13) return `${n}th`;
  switch (n % 10) {
    case 1: return `${n}st`;
    case 2: return `${n}nd`;
    case 3: return `${n}rd`;
    default: return `${n}th`;
  }
};

const VocabularyTopic = () => {
  const [familySearch, setFamilySearch] = useState('');
  const [familySort, setFamilySort] = useState(DEFAULT_SORT);
  const [numberSearch, setNumberSearch] = useState('');
  const [numberPage, setNumberPage] = useState(1);
  const [numberPageSize, setNumberPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [adjSearch, setAdjSearch] = useState('');
  const [adjPage, setAdjPage] = useState(1);
  const [adjPageSize, setAdjPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [adjSort, setAdjSort] = useState(DEFAULT_SORT);

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const allFamily = useMemo(() => [
    // Núcleo
    { word: "baby", translation: "bebé", category: "Núcleo" },
    { word: "brother", translation: "hermano", category: "Núcleo" },
    { word: "children / kids", translation: "hijos / niños", category: "Núcleo" },
    { word: "daughter", translation: "hija", category: "Núcleo" },
    { word: "father / dad", translation: "padre / papá", category: "Núcleo" },
    { word: "husband", translation: "esposo", category: "Núcleo" },
    { word: "mother / mom", translation: "madre / mamá", category: "Núcleo" },
    { word: "parents", translation: "padres", category: "Núcleo" },
    { word: "siblings", translation: "hermanos (en conjunto)", category: "Núcleo" },
    { word: "sister", translation: "hermana", category: "Núcleo" },
    { word: "son", translation: "hijo", category: "Núcleo" },
    { word: "wife", translation: "esposa", category: "Núcleo" },
    // Extendida
    { word: "aunt", translation: "tía", category: "Extendida" },
    { word: "cousin", translation: "primo / prima", category: "Extendida" },
    { word: "grandchildren", translation: "nietos", category: "Extendida" },
    { word: "granddaughter", translation: "nieta", category: "Extendida" },
    { word: "grandfather / grandpa", translation: "abuelo", category: "Extendida" },
    { word: "grandmother / grandma", translation: "abuela", category: "Extendida" },
    { word: "grandparents", translation: "abuelos", category: "Extendida" },
    { word: "grandson", translation: "nieto", category: "Extendida" },
    { word: "great-grandfather", translation: "bisabuelo", category: "Extendida" },
    { word: "great-grandmother", translation: "bisabuela", category: "Extendida" },
    { word: "nephew", translation: "sobrino", category: "Extendida" },
    { word: "niece", translation: "sobrina", category: "Extendida" },
    { word: "uncle", translation: "tío", category: "Extendida" },
    // Política
    { word: "brother-in-law", translation: "cuñado", category: "Política" },
    { word: "daughter-in-law", translation: "nuera", category: "Política" },
    { word: "father-in-law", translation: "suegro", category: "Política" },
    { word: "mother-in-law", translation: "suegra", category: "Política" },
    { word: "sister-in-law", translation: "cuñada", category: "Política" },
    { word: "son-in-law", translation: "yerno", category: "Política" },
    // Otros
    { word: "half-brother", translation: "medio hermano", category: "Otros" },
    { word: "half-sister", translation: "media hermana", category: "Otros" },
    { word: "only child", translation: "hijo/a único/a", category: "Otros" },
    { word: "single mother / father", translation: "madre / padre soltera/o", category: "Otros" },
    { word: "stepbrother", translation: "hermanastro", category: "Otros" },
    { word: "stepfather", translation: "padrastro", category: "Otros" },
    { word: "stepmother", translation: "madrastra", category: "Otros" },
    { word: "stepsister", translation: "hermanastra", category: "Otros" },
    { word: "twin", translation: "gemelo / gemela", category: "Otros" }
  ], []);

  const allNumbers = useMemo(() =>
    Array.from({ length: 1000 }, (_, i) => i + 1).map((n) => ({ n, word: numberToWords(n) }))
  , []);

  const yearExamples = useMemo(() => [
    1500, 1776, 1804, 1865, 1900, 1905, 1969, 1984, 1998, 1999,
    2000, 2001, 2005, 2009, 2010, 2015, 2020, 2025, 2030, 2099
  ].map((year) => ({ year, word: yearToWords(year) })), []);

  const yearSentences = useMemo(() => [
    { en: "I was born in 1998.", es: "Nací en 1998." },
    { en: "My grandpa was born in 1954.", es: "Mi abuelo nació en 1954." },
    { en: "The party is in 2025.", es: "La fiesta es en 2025." },
    { en: "My parents got married in 2001.", es: "Mis padres se casaron en 2001." },
    { en: "The company was founded in 2010.", es: "La empresa fue fundada en 2010." }
  ], []);

  const bigNumberExamples = useMemo(() => [
    1001, 2500, 4444, 7500, 10000, 12000, 25750, 45000, 99000, 100000,
    123456, 200000, 340000, 375000, 500000, 620000, 750000, 999999,
    1000000, 1340000, 1500000, 2750000, 3400000, 5000000, 8750000,
    12500000, 15000000, 100000000, 250000000, 1000000000
  ].map((n) => ({ n, word: numberToWordsFull(n) })), []);

  const allAdjectives = useMemo(() => [
    // Apariencia Física
    { word: "athletic", translation: "atlético/a", opposite: "", category: "Apariencia Física" },
    { word: "attractive", translation: "atractivo/a", opposite: "plain-looking", category: "Apariencia Física" },
    { word: "average height", translation: "de estatura media", opposite: "", category: "Apariencia Física" },
    { word: "bald", translation: "calvo", opposite: "long-haired", category: "Apariencia Física" },
    { word: "bearded", translation: "con barba", opposite: "clean-shaven", category: "Apariencia Física" },
    { word: "beautiful", translation: "hermoso/a", opposite: "", category: "Apariencia Física" },
    { word: "blonde", translation: "rubio/a", opposite: "dark-haired", category: "Apariencia Física" },
    { word: "chubby", translation: "rechoncho/a", opposite: "skinny", category: "Apariencia Física" },
    { word: "clean-shaven", translation: "sin barba, bien afeitado", opposite: "bearded", category: "Apariencia Física" },
    { word: "curly-haired", translation: "de cabello rizado", opposite: "straight-haired", category: "Apariencia Física" },
    { word: "curvy", translation: "con curvas", opposite: "", category: "Apariencia Física" },
    { word: "cute", translation: "lindo/a", opposite: "", category: "Apariencia Física" },
    { word: "dark-haired", translation: "de cabello oscuro", opposite: "blonde", category: "Apariencia Física" },
    { word: "elderly", translation: "anciano/a", opposite: "", category: "Apariencia Física" },
    { word: "freckled", translation: "con pecas", opposite: "", category: "Apariencia Física" },
    { word: "good-looking", translation: "guapo/a", opposite: "", category: "Apariencia Física" },
    { word: "gray-haired", translation: "de cabello canoso", opposite: "", category: "Apariencia Física" },
    { word: "handsome", translation: "guapo (hombres)", opposite: "", category: "Apariencia Física" },
    { word: "long-haired", translation: "de cabello largo", opposite: "short-haired", category: "Apariencia Física" },
    { word: "middle-aged", translation: "de mediana edad", opposite: "", category: "Apariencia Física" },
    { word: "muscular", translation: "musculoso/a", opposite: "", category: "Apariencia Física" },
    { word: "old", translation: "viejo/a, mayor", opposite: "young", category: "Apariencia Física" },
    { word: "overweight", translation: "con sobrepeso", opposite: "slim", category: "Apariencia Física" },
    { word: "pale", translation: "pálido/a", opposite: "tanned", category: "Apariencia Física" },
    { word: "petite", translation: "menudo/a, pequeño/a", opposite: "", category: "Apariencia Física" },
    { word: "plain-looking", translation: "de apariencia sencilla", opposite: "attractive", category: "Apariencia Física" },
    { word: "plump", translation: "regordete/a", opposite: "thin", category: "Apariencia Física" },
    { word: "pretty", translation: "bonita", opposite: "", category: "Apariencia Física" },
    { word: "redheaded", translation: "pelirrojo/a", opposite: "", category: "Apariencia Física" },
    { word: "scruffy", translation: "desaliñado/a", opposite: "well-dressed", category: "Apariencia Física" },
    { word: "short", translation: "bajo/a", opposite: "tall", category: "Apariencia Física" },
    { word: "short-haired", translation: "de cabello corto", opposite: "long-haired", category: "Apariencia Física" },
    { word: "skinny", translation: "flaco/a (informal)", opposite: "chubby", category: "Apariencia Física" },
    { word: "slim", translation: "delgado/a", opposite: "overweight", category: "Apariencia Física" },
    { word: "straight-haired", translation: "de cabello lacio", opposite: "curly-haired", category: "Apariencia Física" },
    { word: "tall", translation: "alto/a", opposite: "short", category: "Apariencia Física" },
    { word: "tanned", translation: "bronceado/a", opposite: "pale", category: "Apariencia Física" },
    { word: "teenage", translation: "adolescente", opposite: "", category: "Apariencia Física" },
    { word: "thin", translation: "delgado/a, flaco/a", opposite: "plump", category: "Apariencia Física" },
    { word: "wavy-haired", translation: "de cabello ondulado", opposite: "", category: "Apariencia Física" },
    { word: "well-built", translation: "de complexión fuerte", opposite: "", category: "Apariencia Física" },
    { word: "well-dressed", translation: "bien vestido/a", opposite: "scruffy", category: "Apariencia Física" },
    { word: "young", translation: "joven", opposite: "old", category: "Apariencia Física" },
    // Personalidad Positiva
    { word: "adventurous", translation: "aventurero/a", opposite: "cautious", category: "Personalidad Positiva" },
    { word: "affectionate", translation: "afectuoso/a", opposite: "", category: "Personalidad Positiva" },
    { word: "ambitious", translation: "ambicioso/a", opposite: "", category: "Personalidad Positiva" },
    { word: "brave", translation: "valiente", opposite: "", category: "Personalidad Positiva" },
    { word: "calm", translation: "tranquilo/a", opposite: "nervous", category: "Personalidad Positiva" },
    { word: "caring", translation: "cariñoso/a", opposite: "", category: "Personalidad Positiva" },
    { word: "charismatic", translation: "carismático/a", opposite: "", category: "Personalidad Positiva" },
    { word: "charming", translation: "encantador/a", opposite: "", category: "Personalidad Positiva" },
    { word: "cheerful", translation: "alegre", opposite: "", category: "Personalidad Positiva" },
    { word: "confident", translation: "seguro/a de sí mismo/a", opposite: "insecure", category: "Personalidad Positiva" },
    { word: "creative", translation: "creativo/a", opposite: "", category: "Personalidad Positiva" },
    { word: "curious", translation: "curioso/a", opposite: "", category: "Personalidad Positiva" },
    { word: "determined", translation: "decidido/a", opposite: "", category: "Personalidad Positiva" },
    { word: "diplomatic", translation: "diplomático/a", opposite: "", category: "Personalidad Positiva" },
    { word: "disciplined", translation: "disciplinado/a", opposite: "", category: "Personalidad Positiva" },
    { word: "easy-going", translation: "de trato fácil, relajado/a", opposite: "strict", category: "Personalidad Positiva" },
    { word: "energetic", translation: "enérgico/a", opposite: "", category: "Personalidad Positiva" },
    { word: "enthusiastic", translation: "entusiasta", opposite: "", category: "Personalidad Positiva" },
    { word: "flexible", translation: "flexible", opposite: "", category: "Personalidad Positiva" },
    { word: "forgiving", translation: "que perdona fácilmente", opposite: "", category: "Personalidad Positiva" },
    { word: "friendly", translation: "amigable", opposite: "unfriendly", category: "Personalidad Positiva" },
    { word: "funny", translation: "gracioso/a", opposite: "serious", category: "Personalidad Positiva" },
    { word: "generous", translation: "generoso/a", opposite: "selfish", category: "Personalidad Positiva" },
    { word: "gentle", translation: "gentil, suave", opposite: "", category: "Personalidad Positiva" },
    { word: "genuine", translation: "genuino/a, auténtico/a", opposite: "", category: "Personalidad Positiva" },
    { word: "gracious", translation: "cortés, gentil", opposite: "", category: "Personalidad Positiva" },
    { word: "hardworking", translation: "trabajador/a", opposite: "lazy", category: "Personalidad Positiva" },
    { word: "helpful", translation: "servicial", opposite: "", category: "Personalidad Positiva" },
    { word: "honest", translation: "honesto/a", opposite: "dishonest", category: "Personalidad Positiva" },
    { word: "humble", translation: "humilde", opposite: "arrogant", category: "Personalidad Positiva" },
    { word: "independent", translation: "independiente", opposite: "", category: "Personalidad Positiva" },
    { word: "intuitive", translation: "intuitivo/a", opposite: "", category: "Personalidad Positiva" },
    { word: "kind", translation: "amable", opposite: "unkind", category: "Personalidad Positiva" },
    { word: "logical", translation: "lógico/a", opposite: "", category: "Personalidad Positiva" },
    { word: "loyal", translation: "leal", opposite: "", category: "Personalidad Positiva" },
    { word: "mature", translation: "maduro/a", opposite: "", category: "Personalidad Positiva" },
    { word: "open-minded", translation: "de mente abierta", opposite: "narrow-minded", category: "Personalidad Positiva" },
    { word: "optimistic", translation: "optimista", opposite: "pessimistic", category: "Personalidad Positiva" },
    { word: "outgoing", translation: "extrovertido/a", opposite: "shy", category: "Personalidad Positiva" },
    { word: "passionate", translation: "apasionado/a", opposite: "", category: "Personalidad Positiva" },
    { word: "patient", translation: "paciente", opposite: "impatient", category: "Personalidad Positiva" },
    { word: "polite", translation: "educado/a", opposite: "rude", category: "Personalidad Positiva" },
    { word: "practical", translation: "práctico/a", opposite: "", category: "Personalidad Positiva" },
    { word: "punctual", translation: "puntual", opposite: "", category: "Personalidad Positiva" },
    { word: "reliable", translation: "confiable", opposite: "unreliable", category: "Personalidad Positiva" },
    { word: "resourceful", translation: "ingenioso/a, con recursos", opposite: "", category: "Personalidad Positiva" },
    { word: "respectful", translation: "respetuoso/a", opposite: "", category: "Personalidad Positiva" },
    { word: "responsible", translation: "responsable", opposite: "irresponsible", category: "Personalidad Positiva" },
    { word: "sensible", translation: "sensato/a", opposite: "", category: "Personalidad Positiva" },
    { word: "sensitive", translation: "sensible (emocionalmente)", opposite: "insensitive", category: "Personalidad Positiva" },
    { word: "sincere", translation: "sincero/a", opposite: "", category: "Personalidad Positiva" },
    { word: "smart / intelligent", translation: "inteligente", opposite: "", category: "Personalidad Positiva" },
    { word: "sociable", translation: "sociable", opposite: "", category: "Personalidad Positiva" },
    { word: "supportive", translation: "que brinda apoyo", opposite: "", category: "Personalidad Positiva" },
    { word: "sympathetic", translation: "comprensivo/a, empático/a", opposite: "", category: "Personalidad Positiva" },
    { word: "tactful", translation: "con tacto", opposite: "", category: "Personalidad Positiva" },
    { word: "thoughtful", translation: "considerado/a, atento/a", opposite: "", category: "Personalidad Positiva" },
    { word: "tolerant", translation: "tolerante", opposite: "", category: "Personalidad Positiva" },
    { word: "trustworthy", translation: "digno/a de confianza", opposite: "", category: "Personalidad Positiva" },
    { word: "understanding", translation: "comprensivo/a", opposite: "", category: "Personalidad Positiva" },
    { word: "warm-hearted", translation: "de buen corazón", opposite: "cold", category: "Personalidad Positiva" },
    { word: "wise", translation: "sabio/a", opposite: "", category: "Personalidad Positiva" },
    { word: "witty", translation: "ingenioso/a, agudo/a", opposite: "", category: "Personalidad Positiva" },
    // Personalidad Retadora
    { word: "aggressive", translation: "agresivo/a", opposite: "", category: "Personalidad Retadora" },
    { word: "arrogant", translation: "arrogante", opposite: "humble", category: "Personalidad Retadora" },
    { word: "bossy", translation: "mandón/a", opposite: "", category: "Personalidad Retadora" },
    { word: "careless", translation: "descuidado/a", opposite: "", category: "Personalidad Retadora" },
    { word: "clumsy", translation: "torpe", opposite: "", category: "Personalidad Retadora" },
    { word: "cocky", translation: "creído/a, sobrado/a", opposite: "", category: "Personalidad Retadora" },
    { word: "cold", translation: "frío/a (emocionalmente)", opposite: "warm-hearted", category: "Personalidad Retadora" },
    { word: "cruel", translation: "cruel", opposite: "", category: "Personalidad Retadora" },
    { word: "dishonest", translation: "deshonesto/a", opposite: "honest", category: "Personalidad Retadora" },
    { word: "greedy", translation: "codicioso/a", opposite: "", category: "Personalidad Retadora" },
    { word: "grumpy", translation: "gruñón/a", opposite: "", category: "Personalidad Retadora" },
    { word: "impatient", translation: "impaciente", opposite: "patient", category: "Personalidad Retadora" },
    { word: "insecure", translation: "inseguro/a", opposite: "confident", category: "Personalidad Retadora" },
    { word: "insensitive", translation: "insensible", opposite: "sensitive", category: "Personalidad Retadora" },
    { word: "irresponsible", translation: "irresponsable", opposite: "responsible", category: "Personalidad Retadora" },
    { word: "jealous", translation: "celoso/a", opposite: "", category: "Personalidad Retadora" },
    { word: "lazy", translation: "perezoso/a", opposite: "hardworking", category: "Personalidad Retadora" },
    { word: "manipulative", translation: "manipulador/a", opposite: "", category: "Personalidad Retadora" },
    { word: "moody", translation: "de humor cambiante", opposite: "", category: "Personalidad Retadora" },
    { word: "naive", translation: "ingenuo/a", opposite: "", category: "Personalidad Retadora" },
    { word: "narrow-minded", translation: "de mente cerrada", opposite: "open-minded", category: "Personalidad Retadora" },
    { word: "nervous", translation: "nervioso/a", opposite: "calm", category: "Personalidad Retadora" },
    { word: "pessimistic", translation: "pesimista", opposite: "optimistic", category: "Personalidad Retadora" },
    { word: "possessive", translation: "posesivo/a", opposite: "", category: "Personalidad Retadora" },
    { word: "reckless", translation: "imprudente", opposite: "cautious", category: "Personalidad Retadora" },
    { word: "rude", translation: "grosero/a", opposite: "polite", category: "Personalidad Retadora" },
    { word: "sarcastic", translation: "sarcástico/a", opposite: "", category: "Personalidad Retadora" },
    { word: "selfish", translation: "egoísta", opposite: "generous", category: "Personalidad Retadora" },
    { word: "stingy", translation: "tacaño/a", opposite: "generous", category: "Personalidad Retadora" },
    { word: "stubborn", translation: "terco/a", opposite: "", category: "Personalidad Retadora" },
    { word: "superficial", translation: "superficial", opposite: "", category: "Personalidad Retadora" },
    { word: "unfriendly", translation: "poco amigable", opposite: "friendly", category: "Personalidad Retadora" },
    { word: "unreliable", translation: "poco confiable", opposite: "reliable", category: "Personalidad Retadora" },
    { word: "vain", translation: "vanidoso/a", opposite: "", category: "Personalidad Retadora" },
    { word: "vindictive", translation: "vengativo/a", opposite: "", category: "Personalidad Retadora" },
    // Neutral / Otros
    { word: "assertive", translation: "asertivo/a", opposite: "submissive", category: "Neutral / Otros" },
    { word: "cautious", translation: "cauteloso/a", opposite: "spontaneous", category: "Neutral / Otros" },
    { word: "competitive", translation: "competitivo/a", opposite: "", category: "Neutral / Otros" },
    { word: "conventional", translation: "convencional", opposite: "unconventional", category: "Neutral / Otros" },
    { word: "down-to-earth", translation: "con los pies en la tierra", opposite: "", category: "Neutral / Otros" },
    { word: "extroverted", translation: "extrovertido/a", opposite: "introverted", category: "Neutral / Otros" },
    { word: "formal", translation: "formal", opposite: "informal", category: "Neutral / Otros" },
    { word: "informal", translation: "informal", opposite: "formal", category: "Neutral / Otros" },
    { word: "introverted", translation: "introvertido/a", opposite: "extroverted", category: "Neutral / Otros" },
    { word: "laid-back", translation: "relajado/a, tranquilo/a", opposite: "", category: "Neutral / Otros" },
    { word: "modern", translation: "moderno/a", opposite: "traditional", category: "Neutral / Otros" },
    { word: "old-fashioned", translation: "anticuado/a", opposite: "modern", category: "Neutral / Otros" },
    { word: "private", translation: "reservado/a, privado/a", opposite: "", category: "Neutral / Otros" },
    { word: "quiet", translation: "callado/a", opposite: "talkative", category: "Neutral / Otros" },
    { word: "reserved", translation: "reservado/a", opposite: "", category: "Neutral / Otros" },
    { word: "serious", translation: "serio/a", opposite: "funny", category: "Neutral / Otros" },
    { word: "shy", translation: "tímido/a", opposite: "outgoing", category: "Neutral / Otros" },
    { word: "spontaneous", translation: "espontáneo/a", opposite: "cautious", category: "Neutral / Otros" },
    { word: "strict", translation: "estricto/a", opposite: "easy-going", category: "Neutral / Otros" },
    { word: "submissive", translation: "sumiso/a", opposite: "assertive", category: "Neutral / Otros" },
    { word: "talkative", translation: "hablador/a", opposite: "quiet", category: "Neutral / Otros" },
    { word: "traditional", translation: "tradicional", opposite: "modern", category: "Neutral / Otros" },
    { word: "unconventional", translation: "poco convencional", opposite: "conventional", category: "Neutral / Otros" },
    { word: "unpredictable", translation: "impredecible", opposite: "predictable", category: "Neutral / Otros" }
  ], []);

  const months = useMemo(() => [
    { en: "January", es: "enero" }, { en: "February", es: "febrero" }, { en: "March", es: "marzo" },
    { en: "April", es: "abril" }, { en: "May", es: "mayo" }, { en: "June", es: "junio" },
    { en: "July", es: "julio" }, { en: "August", es: "agosto" }, { en: "September", es: "septiembre" },
    { en: "October", es: "octubre" }, { en: "November", es: "noviembre" }, { en: "December", es: "diciembre" }
  ], []);

  const filteredFamily = useMemo(() => sortByWord(allFamily.filter((item) =>
    item.word.toLowerCase().includes(familySearch.toLowerCase()) ||
    item.translation.toLowerCase().includes(familySearch.toLowerCase()) ||
    item.category.toLowerCase().includes(familySearch.toLowerCase())
  ), familySort), [allFamily, familySearch, familySort]);

  const filteredNumbers = useMemo(() => allNumbers.filter((item) =>
    String(item.n).includes(numberSearch) || item.word.toLowerCase().includes(numberSearch.toLowerCase())
  ), [allNumbers, numberSearch]);

  const filteredAdjectives = useMemo(() => sortByWord(allAdjectives.filter((item) =>
    item.word.toLowerCase().includes(adjSearch.toLowerCase()) ||
    item.translation.toLowerCase().includes(adjSearch.toLowerCase()) ||
    item.category.toLowerCase().includes(adjSearch.toLowerCase())
  ), adjSort), [allAdjectives, adjSearch, adjSort]);

  const numberTotalPages = Math.max(1, Math.ceil(filteredNumbers.length / numberPageSize));
  const paginatedNumbers = filteredNumbers.slice((numberPage - 1) * numberPageSize, numberPage * numberPageSize);

  const adjTotalPages = Math.max(1, Math.ceil(filteredAdjectives.length / adjPageSize));
  const paginatedAdjectives = filteredAdjectives.slice((adjPage - 1) * adjPageSize, adjPage * adjPageSize);

  const handleNumberSearch = (value) => {
    setNumberSearch(value);
    setNumberPage(1);
  };

  const handleNumberPageSize = (size) => {
    setNumberPageSize(size);
    setNumberPage(1);
  };

  const handleAdjSearch = (value) => {
    setAdjSearch(value);
    setAdjPage(1);
  };

  const handleAdjPageSize = (size) => {
    setAdjPageSize(size);
    setAdjPage(1);
  };

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 2 • Vocabulario</span>
        <h2>Familia, Números del 1 a los Millones, Adjetivos y Fechas</h2>
        <p className="topic-intro">
          El vocabulario para hablar de las personas que quieres: familia cercana y extendida, cómo describirlas con más de 160 adjetivos, contar del 1 a 1000 (y más allá, hasta los millones) y hablar de fechas y cumpleaños.
        </p>
      </div>

      {/* FAMILIA */}
      <div className="content-section">
        <h3>1. La Familia</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Vocabulario de familia organizado en núcleo familiar, familia extendida, familia política (in-laws) y otros términos comunes.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            className="search-input"
            style={{ flex: 1, minWidth: '200px' }}
            placeholder="🔍 Buscar palabra, traducción o categoría..."
            value={familySearch}
            onChange={(e) => setFamilySearch(e.target.value)}
          />
          <SortToggle mode={familySort} onChange={setFamilySort} />
        </div>
        <span className="result-count">{filteredFamily.length} de {allFamily.length} palabras</span>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {filteredFamily.map((item, index) => (
            <div key={index} className="example-item" style={{ borderLeft: '3px solid var(--color-evolve1)' }}>
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{item.word}</span>
                <button className="audio-btn" onClick={() => speak(item.word)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ marginTop: '6px', fontSize: '0.85rem' }}>
                {item.translation} <span className="category-tag" style={{ float: 'right' }}>{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NÚMEROS 1-1000 */}
      <div className="content-section">
        <h3>2. Números del 1 al 1000</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Del 1 al 9 son palabras únicas, del 11 al 19 son irregulares (los "teens"), y del 20 en adelante combinas la decena + un guion + la unidad: <strong>twenty-one</strong> (21), <strong>forty-five</strong> (45), <strong>ninety-nine</strong> (99). A partir de 100 se agrega <strong>hundred</strong>: <strong>two hundred and thirty-four</strong> (234). El "and" es opcional, sobre todo en inglés americano.
        </p>

        <div className="grammar-formula">Centena + "hundred" + (and) + Decena-Unidad → three hundred (and) forty-five</div>

        <div style={{ margin: '16px 0 12px' }}>
          <input
            type="text"
            className="search-input"
            placeholder="🔍 Buscar número (ej. '345' o 'forty')..."
            value={numberSearch}
            onChange={(e) => handleNumberSearch(e.target.value)}
          />
        </div>
        <span className="result-count">{filteredNumbers.length} de {allNumbers.length} números</span>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}>
          {paginatedNumbers.map((item) => (
            <div key={item.n} className="example-item" style={{ padding: '10px 14px' }}>
              <div className="example-en" style={{ justifyContent: 'space-between', fontSize: '1rem' }}>
                <span>{item.n} — {item.word}</span>
                <button className="audio-btn" onClick={() => speak(item.word)} title="Escuchar" style={{ margin: 0, width: '26px', height: '26px' }}>🔊</button>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          page={numberPage}
          totalPages={numberTotalPages}
          totalItems={filteredNumbers.length}
          onChange={setNumberPage}
          itemsPerPage={numberPageSize}
          onItemsPerPageChange={handleNumberPageSize}
        />

        <h4 style={{ color: 'var(--text-main)', fontSize: '0.95rem', margin: '28px 0 10px' }}>Números grandes: miles y millones</h4>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Para números grandes, combina las mismas reglas con <strong>thousand</strong> (mil), <strong>million</strong> (millón) y <strong>billion</strong> (mil millones). Por ejemplo, <strong>1,340,000</strong> se dice <strong>"one million three hundred and forty thousand"</strong>.
        </p>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {bigNumberExamples.map((item) => (
            <div key={item.n} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{item.n.toLocaleString('en-US')}</span>
                <button className="audio-btn" onClick={() => speak(item.word)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ marginTop: '6px' }}>{item.word}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ADJETIVOS */}
      <div className="content-section">
        <h3>3. Adjetivos para Describir Personas (Lista Extendida)</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Usa <strong>really</strong> o <strong>very</strong> antes del adjetivo para decir "muy": <em>"She's really nice."</em> / <em>"He's very tall."</em> <strong>Really</strong> es un poco más informal y enfático que <strong>very</strong>. Más de {allAdjectives.length} adjetivos organizados en apariencia física, personalidad positiva, personalidad retadora y otros rasgos neutrales.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            className="search-input"
            style={{ flex: 1, minWidth: '200px' }}
            placeholder="🔍 Buscar adjetivo, traducción o categoría..."
            value={adjSearch}
            onChange={(e) => handleAdjSearch(e.target.value)}
          />
          <SortToggle mode={adjSort} onChange={setAdjSort} />
        </div>
        <span className="result-count">{filteredAdjectives.length} de {allAdjectives.length} adjetivos</span>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
          {paginatedAdjectives.map((item, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{item.word}</span>
                <button className="audio-btn" onClick={() => speak(item.word)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ marginTop: '6px', fontSize: '0.85rem' }}>
                {item.translation}
                {item.opposite && <span style={{ color: 'var(--active-accent)', opacity: 0.85 }}> · ≠ {item.opposite}</span>}
                <span className="category-tag" style={{ float: 'right' }}>{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          page={adjPage}
          totalPages={adjTotalPages}
          totalItems={filteredAdjectives.length}
          onChange={setAdjPage}
          itemsPerPage={adjPageSize}
          onItemsPerPageChange={handleAdjPageSize}
        />
      </div>

      {/* FECHAS */}
      <div className="content-section">
        <h3>4. Fechas: Meses, Números Ordinales y Años</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Para decir una fecha en inglés se usa el número <strong>ordinal</strong> del día + el mes: <em>"My birthday is on July 28th."</em> (Mi cumpleaños es el 28 de julio). El artículo "the" y la preposición "of" suelen omitirse al escribir la fecha corta.
        </p>

        <h4 style={{ color: 'var(--text-main)', fontSize: '0.95rem', marginBottom: '10px' }}>Meses del año</h4>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
          {months.map((m, i) => (
            <div key={i} className="example-item" style={{ padding: '10px 14px' }}>
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{m.en}</span>
                <button className="audio-btn" onClick={() => speak(m.en)} title="Escuchar" style={{ margin: 0, width: '26px', height: '26px' }}>🔊</button>
              </div>
              <div className="example-es">{m.es}</div>
            </div>
          ))}
        </div>

        <h4 style={{ color: 'var(--text-main)', fontSize: '0.95rem', margin: '24px 0 10px' }}>Números ordinales (1º al 31º)</h4>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))' }}>
          {ORDINAL_WORDS.slice(1).map((word, idx) => {
            const n = idx + 1;
            return (
              <div key={n} className="example-item" style={{ padding: '8px 12px' }}>
                <div className="example-en" style={{ justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span>{ordinalNumeral(n)} — {word}</span>
                  <button className="audio-btn" onClick={() => speak(`the ${word}`)} title="Escuchar" style={{ margin: 0, width: '24px', height: '24px' }}>🔊</button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>💡</span> Fechas irregulares comunes</div>
          <div className="insider-content">
            La mayoría de los ordinales terminan en <strong>-th</strong>, pero cuidado con las excepciones más usadas: <strong>1st</strong> (first), <strong>2nd</strong> (second), <strong>3rd</strong> (third), <strong>5th</strong> (fifth), <strong>8th</strong> (eighth), <strong>9th</strong> (ninth), <strong>12th</strong> (twelfth), y los que combinan con veinte/treinta: <strong>21st</strong> (twenty-first), <strong>22nd</strong> (twenty-second), <strong>23rd</strong> (twenty-third).
          </div>
        </div>

        <h4 style={{ color: 'var(--text-main)', fontSize: '0.95rem', margin: '28px 0 10px' }}>Cómo Leer los Años (para nacimientos y eventos)</h4>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Los años de 4 dígitos NO se leen como un número normal (nunca digas "one thousand nine hundred ninety-eight"). Se dividen en dos partes de 2 dígitos, con algunas excepciones importantes.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div className="example-item">
            <div className="example-en">Regla general</div>
            <div className="example-es">Divide en dos partes de 2 dígitos: <strong>19</strong>|<strong>98</strong> → <em>nineteen ninety-eight</em> (1998). <strong>18</strong>|<strong>76</strong> → <em>eighteen seventy-six</em> (1876).</div>
          </div>
          <div className="example-item">
            <div className="example-en">Siglos redondos (año termina en 00)</div>
            <div className="example-es"><strong>19</strong>00 → <em>nineteen hundred</em>. <strong>15</strong>00 → <em>fifteen hundred</em>. (2000 es la excepción: "two thousand", no "twenty hundred").</div>
          </div>
          <div className="example-item">
            <div className="example-en">Con un cero (usa "oh")</div>
            <div className="example-es">Cuando las últimas dos cifras empiezan en 0: <strong>19</strong>05 → <em>nineteen oh five</em>. <strong>18</strong>04 → <em>eighteen oh four</em>.</div>
          </div>
          <div className="example-item">
            <div className="example-en">Años 2000-2009</div>
            <div className="example-es">Se leen como "two thousand" + el número: 2005 → <em>two thousand five</em>. NO se dice "twenty oh five".</div>
          </div>
          <div className="example-item">
            <div className="example-en">Años 2010 en adelante</div>
            <div className="example-es">Dos formas válidas: 2025 → <em>twenty twenty-five</em> (más común hoy) o <em>two thousand twenty-five</em> (también correcto, más formal).</div>
          </div>
        </div>

        <p style={{ margin: '20px 0 12px', color: 'var(--text-muted)' }}>Practica con estos años (generados automáticamente con las reglas de arriba):</p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}>
          {yearExamples.map((item) => (
            <div key={item.year} className="example-item" style={{ padding: '10px 14px' }}>
              <div className="example-en" style={{ justifyContent: 'space-between', fontSize: '1rem' }}>
                <span>{item.year}</span>
                <button className="audio-btn" onClick={() => speak(item.word)} title="Escuchar" style={{ margin: 0, width: '26px', height: '26px' }}>🔊</button>
              </div>
              <div className="example-es">{item.word}</div>
            </div>
          ))}
        </div>

        <p style={{ margin: '20px 0 12px', color: 'var(--text-muted)' }}>Úsalo con <strong>in</strong> para hablar de nacimientos y eventos:</p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {yearSentences.map((item, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{item.en}</span>
                <button className="audio-btn" onClick={() => speak(item.en)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es">{item.es}</div>
            </div>
          ))}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>🎂</span> Pregunta clásica: "When were you born?"</div>
          <div className="insider-content">
            Para preguntar el año de nacimiento: <strong>"When were you born?"</strong> o <strong>"What year were you born in?"</strong> → Respondes con <strong>"I was born in..."</strong> + el año (con la pronunciación de arriba, nunca leyendo el año dígito por dígito).
          </div>
        </div>
      </div>

      {/* PRONUNCIACIÓN */}
      <div className="content-section">
        <h3>5. Pronunciación: Teens vs. Tens y Formas Cortas</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          El error más común al decir números en inglés es confundir el <strong>13 (thirteen)</strong> con el <strong>30 (thirty)</strong>. La diferencia está en el acento (stress): en los "teens" el acento cae al FINAL, en las decenas cae al PRINCIPIO.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
          {[
            { teen: "thirTEEN (13)", ten: "THIRty (30)" },
            { teen: "fourTEEN (14)", ten: "FORty (40)" },
            { teen: "fifTEEN (15)", ten: "FIFty (50)" },
            { teen: "sixTEEN (16)", ten: "SIXty (60)" },
            { teen: "seventEEN (17)", ten: "SEVENty (70)" },
            { teen: "eighTEEN (18)", ten: "EIGHty (80)" },
            { teen: "ninetEEN (19)", ten: "NINEty (90)" }
          ].map((pair, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{pair.teen}</span>
                <button className="audio-btn" onClick={() => speak(pair.teen.split(' ')[0].replace(/[A-Z]/g, (c) => c.toLowerCase()))} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-en" style={{ justifyContent: 'space-between', marginTop: '6px' }}>
                <span>{pair.ten}</span>
                <button className="audio-btn" onClick={() => speak(pair.ten.split(' ')[0].replace(/[A-Z]/g, (c) => c.toLowerCase()))} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
            </div>
          ))}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>👂</span> Escuchar formas cortas</div>
          <div className="insider-content">
            En conversación natural casi nadie dice "he is" o "they are" completo — se contrae a <strong>he's</strong>, <strong>she's</strong>, <strong>it's</strong>, <strong>we're</strong>, <strong>you're</strong>, <strong>they're</strong>. Entrena tu oído: escucha "She's my sister" varias veces y trata de escribir la oración completa sin contracción.
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen de Vocabulario</h4>
          <p>Pon a prueba tu conocimiento de familia, números, adjetivos y fechas.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default VocabularyTopic;

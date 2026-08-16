// Conjugador mínimo de español, con el único propósito de traducir las
// oraciones de ejemplo de las tarjetas de verbos. Solo deriva las formas que
// realmente varían según el tiempo (gerundio y participio son invariables
// sin importar el sujeto; el pasado simple sí necesita 1ª persona singular
// "yo" y 3ª persona plural "ellos" porque son sujetos distintos en las
// plantillas de ejemplo).
//
// No es un conjugador general — cubre exactamente los verbos irregulares que
// aparecen como traducción primaria en coreVerbs.js. Los reflexivos (7 en
// total: acostarse, convertirse, deslizarse, hundirse, quedarse, sentarse,
// unirse) tienen sus oraciones completas escritas a mano en verbExamples.js
// en vez de pasar por este conjugador (el pronombre reflexivo cambia según
// el sujeto, así que no se puede derivar una forma "invariable").

// Excepciones irregulares: solo se listan los campos que se apartan de la
// regla regular (ej. romper/escribir/abrir solo tienen participio irregular).
const IRREGULAR = {
  ser: { gerundio: 'siendo', participio: 'sido', preteritoYo: 'fui', preteritoEllos: 'fueron' },
  ir: { gerundio: 'yendo', participio: 'ido', preteritoYo: 'fui', preteritoEllos: 'fueron' },
  estar: { gerundio: 'estando', participio: 'estado', preteritoYo: 'estuve', preteritoEllos: 'estuvieron' },
  tener: { gerundio: 'teniendo', participio: 'tenido', preteritoYo: 'tuve', preteritoEllos: 'tuvieron' },
  hacer: { gerundio: 'haciendo', participio: 'hecho', preteritoYo: 'hice', preteritoEllos: 'hicieron' },
  decir: { gerundio: 'diciendo', participio: 'dicho', preteritoYo: 'dije', preteritoEllos: 'dijeron' },
  poner: { gerundio: 'poniendo', participio: 'puesto', preteritoYo: 'puse', preteritoEllos: 'pusieron' },
  saber: { gerundio: 'sabiendo', participio: 'sabido', preteritoYo: 'supe', preteritoEllos: 'supieron' },
  querer: { gerundio: 'queriendo', participio: 'querido', preteritoYo: 'quise', preteritoEllos: 'quisieron' },
  ver: { gerundio: 'viendo', participio: 'visto', preteritoYo: 'vi', preteritoEllos: 'vieron' },
  dar: { gerundio: 'dando', participio: 'dado', preteritoYo: 'di', preteritoEllos: 'dieron' },
  venir: { gerundio: 'viniendo', participio: 'venido', preteritoYo: 'vine', preteritoEllos: 'vinieron' },
  traer: { gerundio: 'trayendo', participio: 'traído', preteritoYo: 'traje', preteritoEllos: 'trajeron' },
  oír: { gerundio: 'oyendo', participio: 'oído', preteritoYo: 'oí', preteritoEllos: 'oyeron' },
  conducir: { gerundio: 'conduciendo', participio: 'conducido', preteritoYo: 'conduje', preteritoEllos: 'condujeron' },
  construir: { gerundio: 'construyendo', participio: 'construido', preteritoYo: 'construí', preteritoEllos: 'construyeron' },
  huir: { gerundio: 'huyendo', participio: 'huido', preteritoYo: 'huí', preteritoEllos: 'huyeron' },
  creer: { gerundio: 'creyendo', participio: 'creído', preteritoYo: 'creí', preteritoEllos: 'creyeron' },
  leer: { gerundio: 'leyendo', participio: 'leído', preteritoYo: 'leí', preteritoEllos: 'leyeron' },
  caer: { gerundio: 'cayendo', participio: 'caído', preteritoYo: 'caí', preteritoEllos: 'cayeron' },
  dormir: { gerundio: 'durmiendo', participio: 'dormido', preteritoYo: 'dormí', preteritoEllos: 'durmieron' },
  elegir: { gerundio: 'eligiendo', participio: 'elegido', preteritoYo: 'elegí', preteritoEllos: 'eligieron' },
  seguir: { gerundio: 'siguiendo', participio: 'seguido', preteritoYo: 'seguí', preteritoEllos: 'siguieron' },
  servir: { gerundio: 'sirviendo', participio: 'servido', preteritoYo: 'serví', preteritoEllos: 'sirvieron' },
  sentir: { gerundio: 'sintiendo', participio: 'sentido', preteritoYo: 'sentí', preteritoEllos: 'sintieron' },
  conseguir: { gerundio: 'consiguiendo', participio: 'conseguido', preteritoYo: 'conseguí', preteritoEllos: 'consiguieron' },
  preferir: { gerundio: 'prefiriendo', participio: 'preferido', preteritoYo: 'preferí', preteritoEllos: 'prefirieron' },
  mantener: { gerundio: 'manteniendo', participio: 'mantenido', preteritoYo: 'mantuve', preteritoEllos: 'mantuvieron' },
  sostener: { gerundio: 'sosteniendo', participio: 'sostenido', preteritoYo: 'sostuve', preteritoEllos: 'sostuvieron' },
  romper: { participio: 'roto' },
  escribir: { participio: 'escrito' },
  abrir: { participio: 'abierto' },
  convertir: { gerundio: 'convirtiendo', participio: 'convertido', preteritoYo: 'convertí', preteritoEllos: 'convirtieron' },

  // --- Bloque 3a (verbos añadidos 2026-08-07) ---
  perseguir: { gerundio: 'persiguiendo', participio: 'perseguido', preteritoYo: 'perseguí', preteritoEllos: 'persiguieron' },
  competir: { gerundio: 'compitiendo', participio: 'competido', preteritoYo: 'competí', preteritoEllos: 'compitieron' },
  contener: { gerundio: 'conteniendo', participio: 'contenido', preteritoYo: 'contuve', preteritoEllos: 'contuvieron' },
  // "-uir" con raíz terminada en vocal: gerundio/pretérito-ellos con "y", participio
  // sin tilde (regla ortográfica distinta a "leer/creer/caer/oír/traer", que sí llevan tilde).
  contribuir: { gerundio: 'contribuyendo', participio: 'contribuido', preteritoYo: 'contribuí', preteritoEllos: 'contribuyeron' },
  destruir: { gerundio: 'destruyendo', participio: 'destruido', preteritoYo: 'destruí', preteritoEllos: 'destruyeron' },
  reconstruir: { gerundio: 'reconstruyendo', participio: 'reconstruido', preteritoYo: 'reconstruí', preteritoEllos: 'reconstruyeron' },
  corregir: { gerundio: 'corrigiendo', participio: 'corregido', preteritoYo: 'corregí', preteritoEllos: 'corrigieron' },
  morir: { gerundio: 'muriendo', participio: 'muerto', preteritoYo: 'morí', preteritoEllos: 'murieron' },
  prever: { participio: 'previsto' },
  predecir: { gerundio: 'prediciendo', participio: 'predicho', preteritoYo: 'predije', preteritoEllos: 'predijeron' },
  cubrir: { participio: 'cubierto' },
  descubrir: { participio: 'descubierto' },
  describir: { participio: 'descrito' },
  reescribir: { participio: 'reescrito' },

  // --- Bloque 3b (verbos añadidos 2026-08-07) ---
  deshacer: { gerundio: 'deshaciendo', participio: 'deshecho', preteritoYo: 'deshice', preteritoEllos: 'deshicieron' },
  rehacer: { gerundio: 'rehaciendo', participio: 'rehecho', preteritoYo: 'rehice', preteritoEllos: 'rehicieron' },
  retener: { gerundio: 'reteniendo', participio: 'retenido', preteritoYo: 'retuve', preteritoEllos: 'retuvieron' },
  // Familia "-ducir" (conducir/reducir/traducir...): solo el pretérito es
  // irregular (reduje/redujeron), gerundio y participio ya salen bien de la
  // regla regular (reduciendo/reducido), así que se sobrescriben solo esos 2 campos.
  reducir: { preteritoYo: 'reduje', preteritoEllos: 'redujeron' },
  traducir: { preteritoYo: 'traduje', preteritoEllos: 'tradujeron' },
  repetir: { gerundio: 'repitiendo', participio: 'repetido', preteritoYo: 'repetí', preteritoEllos: 'repitieron' },
  requerir: { gerundio: 'requiriendo', participio: 'requerido', preteritoYo: 'requerí', preteritoEllos: 'requirieron' },
  sugerir: { gerundio: 'sugiriendo', participio: 'sugerido', preteritoYo: 'sugerí', preteritoEllos: 'sugirieron' },
  transferir: { gerundio: 'transfiriendo', participio: 'transferido', preteritoYo: 'transferí', preteritoEllos: 'transfirieron' },
  sonreír: { gerundio: 'sonriendo', participio: 'sonreído', preteritoYo: 'sonreí', preteritoEllos: 'sonrieron' },
  suponer: { gerundio: 'suponiendo', participio: 'supuesto', preteritoYo: 'supuse', preteritoEllos: 'supusieron' },
};

// Traducción "primaria" del verbo: primera opción antes de "/" y sin las
// aclaraciones entre paréntesis (ej. "conseguir / obtener" → "conseguir";
// "esperar (algo)" → "esperar"). Es la misma forma que ya se usa en las
// oraciones de ejemplo en español.
export const primarySpanish = (translation) => {
  let t = translation.split('/')[0].trim();
  t = t.split('(')[0].trim();
  return t;
};

const VOWEL_ENDING = /[aeiouáéíóú]$/;

const conjugateRegular = (infinitive) => {
  const ending = infinitive.slice(-2);
  const stem = infinitive.slice(0, -2);

  if (ending === 'ar') {
    let preteritoYo;
    if (infinitive.endsWith('car')) preteritoYo = `${stem.slice(0, -1)}qué`;
    else if (infinitive.endsWith('gar')) preteritoYo = `${stem}ué`;
    else if (infinitive.endsWith('zar')) preteritoYo = `${stem.slice(0, -1)}cé`;
    else preteritoYo = `${stem}é`;

    return {
      gerundio: `${stem}ando`,
      participio: `${stem}ado`,
      preteritoYo,
      preteritoEllos: `${stem}aron`,
    };
  }

  // -er / -ir
  const stemEndsInVowel = VOWEL_ENDING.test(stem);
  return {
    gerundio: stemEndsInVowel ? `${stem}yendo` : `${stem}iendo`,
    participio: `${stem}ido`,
    preteritoYo: `${stem}í`,
    preteritoEllos: stemEndsInVowel ? `${stem}yeron` : `${stem}ieron`,
  };
};

// "estar de acuerdo" / "estar de pie": conjuga solo "estar" y reaplica el resto de la frase.
const PHRASAL_VERB = /^(\p{L}+)( .+)$/u;

// Verbos reflexivos (terminan en "-se", ej. "acostarse", "convertirse"): se
// conjuga la raíz sin "se" y el pronombre reflexivo (me/te/se) se agrega por
// separado en las plantillas de verbExamples.js según el sujeto de cada
// oración — el gerundio, el participio y el infinitivo-raíz no llevan el
// pronombre pegado, así que sirven igual que en un verbo no reflexivo.
export const isReflexive = (primaryInfinitive) => primaryInfinitive.endsWith('se') && primaryInfinitive.length > 2;

export const reflexiveStem = (primaryInfinitive) => primaryInfinitive.slice(0, -2);

export const conjugateSpanish = (primaryInfinitive) => {
  const match = PHRASAL_VERB.exec(primaryInfinitive);
  const verb = match ? match[1] : primaryInfinitive;
  const suffix = match ? match[2] : '';

  const base = IRREGULAR[verb] || {};
  const regular = conjugateRegular(verb);
  const forms = { ...regular, ...base };

  if (!suffix) return forms;
  return {
    gerundio: `${forms.gerundio}${suffix}`,
    participio: `${forms.participio}${suffix}`,
    preteritoYo: `${forms.preteritoYo}${suffix}`,
    preteritoEllos: `${forms.preteritoEllos}${suffix}`,
  };
};

export default conjugateSpanish;

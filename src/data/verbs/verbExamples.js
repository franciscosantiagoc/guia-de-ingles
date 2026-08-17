// Genera 2 oraciones de ejemplo (inglés + traducción al español) por cada
// forma del verbo (infinitivo, -ing, pasado simple, participio pasado) usando
// plantillas simples — calidad básica, pensada para mostrar la forma en
// contexto, no oraciones curadas a mano.
//
// La traducción al español usa un conjugador mínimo (spanishConjugation.js)
// que solo deriva las 4 formas que realmente hacen falta (gerundio y
// participio son invariables sin importar el sujeto; el pasado simple usa
// 1ª persona "yo" y 3ª persona plural "ellos"). Los verbos reflexivos
// (terminan en "-se" en español, ej. "acostarse") se resuelven conjugando la
// raíz sin "se" y agregando el pronombre reflexivo correcto (me/te/se) según
// el sujeto de cada oración — así no hace falta escribir cada reflexivo a mano.

import { conjugateSpanish, primarySpanish, isReflexive, reflexiveStem } from './spanishConjugation';

// Plantillas genéricas por forma (dos variantes de sujeto para variedad).
// `es` recibe {forms, reflexive} — forms ya calculadas sobre la raíz (sin
// "se" si es reflexivo) y un helper `pronoun(subject)` para anteponer/pegar
// el pronombre reflexivo correcto según el sujeto de la oración.
const GENERIC_TEMPLATES = {
  base: [
    {
      en: (base) => `I want to ${base}.`,
      es: ({ primary, reflexive, stem }) => `Quiero ${reflexive ? `${stem}me` : primary}.`,
    },
    {
      en: (base) => `You should ${base} every day.`,
      es: ({ primary, reflexive, stem }) => `Deberías ${reflexive ? `${stem}te` : primary} todos los días.`,
    },
  ],
  ing: [
    {
      en: (ing) => `I am ${ing} right now.`,
      es: ({ forms, reflexive }) => (reflexive ? `Ahora mismo me estoy ${forms.gerundio}.` : `Ahora mismo estoy ${forms.gerundio}.`),
    },
    {
      en: (ing) => `She is ${ing} today.`,
      es: ({ forms, reflexive }) => (reflexive ? `Ella se está ${forms.gerundio} hoy.` : `Ella está ${forms.gerundio} hoy.`),
    },
  ],
  pastSimple: [
    {
      en: (pastSimple) => `Yesterday, I ${pastSimple}.`,
      es: ({ forms, reflexive }) => (reflexive ? `Ayer, me ${forms.preteritoYo}.` : `Ayer, yo ${forms.preteritoYo}.`),
    },
    {
      en: (pastSimple) => `Last week, they ${pastSimple}.`,
      es: ({ forms, reflexive }) => (reflexive ? `La semana pasada, ellos se ${forms.preteritoEllos}.` : `La semana pasada, ellos ${forms.preteritoEllos}.`),
    },
  ],
  pastParticiple: [
    {
      en: (pastParticiple) => `I have never ${pastParticiple} before.`,
      es: ({ forms, reflexive }) => (reflexive ? `Nunca me he ${forms.participio} antes.` : `Nunca he ${forms.participio} antes.`),
    },
    {
      en: (pastParticiple) => `She has already ${pastParticiple}.`,
      es: ({ forms, reflexive }) => (reflexive ? `Ella ya se ha ${forms.participio}.` : `Ella ya ha ${forms.participio}.`),
    },
  ],
};

// Verbos cuyas oraciones no pueden salir de las plantillas genéricas:
// - "be": el pasado compuesto ("was/were") y el ser/estar en español rompen el patrón.
// - "want": "I want to want" es agramatical en la plantilla genérica de infinitivo.
// - "become": es el único reflexivo con preposición pegada ("convertirse EN"),
//   que queda coja sin complemento ("Quiero convertirme en.") si se genera con
//   la plantilla genérica — más simple escribirla a mano que generalizar un
//   caso que solo aparece una vez en todo el dataset.
const SPECIAL_CASES = {
  become: {
    base: [
      { en: 'I want to become a doctor.', es: 'Quiero convertirme en médico.' },
      { en: 'You should become an expert.', es: 'Deberías convertirte en un experto.' },
    ],
    ing: [
      { en: 'I am becoming a better person.', es: 'Ahora mismo me estoy convirtiendo en una mejor persona.' },
      { en: 'She is becoming a great professional.', es: 'Ella se está convirtiendo en una gran profesional.' },
    ],
    pastSimple: [
      { en: 'Yesterday, I became team captain.', es: 'Ayer me convertí en el capitán del equipo.' },
      { en: 'Last week, they became partners.', es: 'La semana pasada, ellos se convirtieron en socios.' },
    ],
    pastParticiple: [
      { en: 'I have never become famous.', es: 'Nunca me he convertido en alguien famoso.' },
      { en: 'She has already become a doctor.', es: 'Ella ya se ha convertido en doctora.' },
    ],
  },
  be: {
    base: [
      { en: 'I want to be happy.', es: 'Quiero ser feliz.' },
      { en: 'You should always be honest.', es: 'Deberías ser siempre honesto.' },
    ],
    ing: [
      { en: 'I am being very careful.', es: 'Estoy siendo muy cuidadoso.' },
      { en: 'She is being very helpful today.', es: 'Ella está siendo muy amable hoy.' },
    ],
    pastSimple: [
      { en: 'I was at home yesterday.', es: 'Ayer estuve en casa.' },
      { en: 'They were happy last week.', es: 'La semana pasada, ellos estuvieron felices.' },
    ],
    pastParticiple: [
      { en: 'I have been to Paris.', es: 'He estado en París.' },
      { en: 'She has been very kind.', es: 'Ella ha sido muy amable.' },
    ],
  },
  want: {
    base: [
      { en: 'I want a coffee, please.', es: 'Quiero un café, por favor.' },
      { en: 'Do you want to come with us?', es: '¿Quieres venir con nosotros?' },
    ],
  },
};

const buildFromTemplates = (templates, form, ctx) =>
  templates.map((t) => ({ en: t.en(form), es: t.es(ctx) }));

export const getVerbExamples = (verb) => {
  const special = SPECIAL_CASES[verb.base];
  const primary = primarySpanish(verb.translation);
  const reflexive = isReflexive(primary);
  const stem = reflexive ? reflexiveStem(primary) : primary;
  const forms = conjugateSpanish(stem);
  const ctx = { primary, reflexive, stem, forms };

  return {
    base: special?.base || buildFromTemplates(GENERIC_TEMPLATES.base, verb.base, ctx),
    ing: special?.ing || buildFromTemplates(GENERIC_TEMPLATES.ing, verb.ing, ctx),
    pastSimple: special?.pastSimple || buildFromTemplates(GENERIC_TEMPLATES.pastSimple, verb.pastSimple, ctx),
    pastParticiple: special?.pastParticiple || buildFromTemplates(GENERIC_TEMPLATES.pastParticiple, verb.pastParticiple, ctx),
  };
};

export default getVerbExamples;

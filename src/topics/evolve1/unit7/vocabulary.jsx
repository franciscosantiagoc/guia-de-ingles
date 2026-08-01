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

const VocabularyTopic = () => {
  const [verbSearch, setVerbSearch] = useState('');
  const [verbPage, setVerbPage] = useState(1);
  const [verbPageSize, setVerbPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [verbSort, setVerbSort] = useState(DEFAULT_SORT);

  const allActionVerbs = useMemo(() => [
    // Vida Diaria y Hogar
    { word: "clean", ing: "cleaning", translation: "limpiar", category: "Vida Diaria y Hogar" },
    { word: "cook", ing: "cooking", translation: "cocinar", category: "Vida Diaria y Hogar" },
    { word: "do the dishes", ing: "doing the dishes", translation: "lavar los platos", category: "Vida Diaria y Hogar" },
    { word: "do the laundry", ing: "doing the laundry", translation: "lavar la ropa", category: "Vida Diaria y Hogar" },
    { word: "drink", ing: "drinking", translation: "beber", category: "Vida Diaria y Hogar" },
    { word: "dry", ing: "drying", translation: "secar", category: "Vida Diaria y Hogar" },
    { word: "eat", ing: "eating", translation: "comer", category: "Vida Diaria y Hogar" },
    { word: "get dressed", ing: "getting dressed", translation: "vestirse", category: "Vida Diaria y Hogar" },
    { word: "get ready", ing: "getting ready", translation: "arreglarse", category: "Vida Diaria y Hogar" },
    { word: "iron", ing: "ironing", translation: "planchar", category: "Vida Diaria y Hogar" },
    { word: "make the bed", ing: "making the bed", translation: "tender la cama", category: "Vida Diaria y Hogar" },
    { word: "mop", ing: "mopping", translation: "trapear", category: "Vida Diaria y Hogar" },
    { word: "shower", ing: "showering", translation: "ducharse", category: "Vida Diaria y Hogar" },
    { word: "sleep", ing: "sleeping", translation: "dormir", category: "Vida Diaria y Hogar" },
    { word: "sweep", ing: "sweeping", translation: "barrer", category: "Vida Diaria y Hogar" },
    { word: "vacuum", ing: "vacuuming", translation: "aspirar", category: "Vida Diaria y Hogar" },
    { word: "wash", ing: "washing", translation: "lavar", category: "Vida Diaria y Hogar" },
    { word: "water the plants", ing: "watering the plants", translation: "regar las plantas", category: "Vida Diaria y Hogar" },
    { word: "wake up", ing: "waking up", translation: "despertarse", category: "Vida Diaria y Hogar" },
    { word: "get up", ing: "getting up", translation: "levantarse", category: "Vida Diaria y Hogar" },
    { word: "brush your teeth", ing: "brushing your teeth", translation: "cepillarse los dientes", category: "Vida Diaria y Hogar" },
    { word: "comb your hair", ing: "combing your hair", translation: "peinarse", category: "Vida Diaria y Hogar" },
    { word: "shave", ing: "shaving", translation: "afeitarse", category: "Vida Diaria y Hogar" },
    { word: "take a bath", ing: "taking a bath", translation: "bañarse", category: "Vida Diaria y Hogar" },
    { word: "feed the dog", ing: "feeding the dog", translation: "alimentar al perro", category: "Vida Diaria y Hogar" },
    { word: "feed the cat", ing: "feeding the cat", translation: "alimentar al gato", category: "Vida Diaria y Hogar" },
    { word: "walk the dog", ing: "walking the dog", translation: "pasear al perro", category: "Vida Diaria y Hogar" },
    { word: "take out the trash", ing: "taking out the trash", translation: "sacar la basura", category: "Vida Diaria y Hogar" },
    { word: "set the table", ing: "setting the table", translation: "poner la mesa", category: "Vida Diaria y Hogar" },
    { word: "clear the table", ing: "clearing the table", translation: "levantar la mesa", category: "Vida Diaria y Hogar" },
    { word: "fold clothes", ing: "folding clothes", translation: "doblar la ropa", category: "Vida Diaria y Hogar" },
    { word: "hang clothes", ing: "hanging clothes", translation: "tender la ropa", category: "Vida Diaria y Hogar" },
    { word: "dust", ing: "dusting", translation: "sacudir el polvo", category: "Vida Diaria y Hogar" },
    { word: "polish", ing: "polishing", translation: "pulir / lustrar", category: "Vida Diaria y Hogar" },
    { word: "tidy up", ing: "tidying up", translation: "ordenar", category: "Vida Diaria y Hogar" },
    { word: "organize", ing: "organizing", translation: "organizar", category: "Vida Diaria y Hogar" },
    { word: "unpack", ing: "unpacking", translation: "desempacar", category: "Vida Diaria y Hogar" },
    { word: "pack", ing: "packing", translation: "empacar", category: "Vida Diaria y Hogar" },
    { word: "lock the door", ing: "locking the door", translation: "cerrar con llave", category: "Vida Diaria y Hogar" },
    { word: "unlock the door", ing: "unlocking the door", translation: "abrir con llave", category: "Vida Diaria y Hogar" },
    { word: "turn on the light", ing: "turning on the light", translation: "encender la luz", category: "Vida Diaria y Hogar" },
    { word: "turn off the light", ing: "turning off the light", translation: "apagar la luz", category: "Vida Diaria y Hogar" },
    { word: "charge the phone", ing: "charging the phone", translation: "cargar el teléfono", category: "Vida Diaria y Hogar" },
    { word: "water the garden", ing: "watering the garden", translation: "regar el jardín", category: "Vida Diaria y Hogar" },
    { word: "mow the lawn", ing: "mowing the lawn", translation: "cortar el césped", category: "Vida Diaria y Hogar" },
    { word: "rest", ing: "resting", translation: "descansar", category: "Vida Diaria y Hogar" },
    { word: "relax", ing: "relaxing", translation: "relajarse", category: "Vida Diaria y Hogar" },
    { word: "nap", ing: "napping", translation: "dormir siesta", category: "Vida Diaria y Hogar" },
    { word: "yawn", ing: "yawning", translation: "bostezar", category: "Vida Diaria y Hogar" },
    { word: "stretch", ing: "stretching", translation: "estirarse", category: "Vida Diaria y Hogar" },
    // Trabajo y Estudio
    { word: "answer", ing: "answering", translation: "responder", category: "Trabajo y Estudio" },
    { word: "attend", ing: "attending", translation: "asistir", category: "Trabajo y Estudio" },
    { word: "code", ing: "coding", translation: "programar", category: "Trabajo y Estudio" },
    { word: "explain", ing: "explaining", translation: "explicar", category: "Trabajo y Estudio" },
    { word: "fix", ing: "fixing", translation: "arreglar", category: "Trabajo y Estudio" },
    { word: "plan", ing: "planning", translation: "planear", category: "Trabajo y Estudio" },
    { word: "present", ing: "presenting", translation: "presentar", category: "Trabajo y Estudio" },
    { word: "print", ing: "printing", translation: "imprimir", category: "Trabajo y Estudio" },
    { word: "read", ing: "reading", translation: "leer", category: "Trabajo y Estudio" },
    { word: "review", ing: "reviewing", translation: "revisar", category: "Trabajo y Estudio" },
    { word: "study", ing: "studying", translation: "estudiar", category: "Trabajo y Estudio" },
    { word: "teach", ing: "teaching", translation: "enseñar", category: "Trabajo y Estudio" },
    { word: "type", ing: "typing", translation: "teclear / escribir a máquina", category: "Trabajo y Estudio" },
    { word: "write", ing: "writing", translation: "escribir", category: "Trabajo y Estudio" },
    { word: "work", ing: "working", translation: "trabajar", category: "Trabajo y Estudio" },
    { word: "email", ing: "emailing", translation: "enviar correo", category: "Trabajo y Estudio" },
    { word: "call", ing: "calling", translation: "llamar", category: "Trabajo y Estudio" },
    { word: "schedule", ing: "scheduling", translation: "agendar", category: "Trabajo y Estudio" },
    { word: "manage", ing: "managing", translation: "administrar / gestionar", category: "Trabajo y Estudio" },
    { word: "lead", ing: "leading", translation: "liderar", category: "Trabajo y Estudio" },
    { word: "hire", ing: "hiring", translation: "contratar", category: "Trabajo y Estudio" },
    { word: "fire", ing: "firing", translation: "despedir", category: "Trabajo y Estudio" },
    { word: "train", ing: "training", translation: "capacitar", category: "Trabajo y Estudio" },
    { word: "interview", ing: "interviewing", translation: "entrevistar", category: "Trabajo y Estudio" },
    { word: "negotiate", ing: "negotiating", translation: "negociar", category: "Trabajo y Estudio" },
    { word: "report", ing: "reporting", translation: "reportar", category: "Trabajo y Estudio" },
    { word: "research", ing: "researching", translation: "investigar", category: "Trabajo y Estudio" },
    { word: "analyze", ing: "analyzing", translation: "analizar", category: "Trabajo y Estudio" },
    { word: "design", ing: "designing", translation: "diseñar", category: "Trabajo y Estudio" },
    { word: "develop", ing: "developing", translation: "desarrollar", category: "Trabajo y Estudio" },
    { word: "test", ing: "testing", translation: "probar", category: "Trabajo y Estudio" },
    { word: "debug", ing: "debugging", translation: "depurar", category: "Trabajo y Estudio" },
    { word: "update", ing: "updating", translation: "actualizar", category: "Trabajo y Estudio" },
    { word: "upload", ing: "uploading", translation: "subir (archivo)", category: "Trabajo y Estudio" },
    { word: "download", ing: "downloading", translation: "descargar", category: "Trabajo y Estudio" },
    { word: "save", ing: "saving", translation: "guardar", category: "Trabajo y Estudio" },
    { word: "delete", ing: "deleting", translation: "eliminar", category: "Trabajo y Estudio" },
    { word: "copy", ing: "copying", translation: "copiar", category: "Trabajo y Estudio" },
    { word: "paste", ing: "pasting", translation: "pegar", category: "Trabajo y Estudio" },
    { word: "edit", ing: "editing", translation: "editar", category: "Trabajo y Estudio" },
    { word: "proofread", ing: "proofreading", translation: "corregir (texto)", category: "Trabajo y Estudio" },
    { word: "submit", ing: "submitting", translation: "entregar", category: "Trabajo y Estudio" },
    { word: "grade", ing: "grading", translation: "calificar", category: "Trabajo y Estudio" },
    { word: "memorize", ing: "memorizing", translation: "memorizar", category: "Trabajo y Estudio" },
    { word: "calculate", ing: "calculating", translation: "calcular", category: "Trabajo y Estudio" },
    { word: "solve", ing: "solving", translation: "resolver", category: "Trabajo y Estudio" },
    { word: "practice", ing: "practicing", translation: "practicar", category: "Trabajo y Estudio" },
    { word: "take notes", ing: "taking notes", translation: "tomar notas", category: "Trabajo y Estudio" },
    { word: "raise your hand", ing: "raising your hand", translation: "levantar la mano", category: "Trabajo y Estudio" },
    { word: "ask a question", ing: "asking a question", translation: "hacer una pregunta", category: "Trabajo y Estudio" },
    // Deportes y Ocio
    { word: "bike", ing: "biking", translation: "andar en bicicleta", category: "Deportes y Ocio" },
    { word: "climb", ing: "climbing", translation: "escalar", category: "Deportes y Ocio" },
    { word: "dance", ing: "dancing", translation: "bailar", category: "Deportes y Ocio" },
    { word: "dive", ing: "diving", translation: "bucear", category: "Deportes y Ocio" },
    { word: "draw", ing: "drawing", translation: "dibujar", category: "Deportes y Ocio" },
    { word: "exercise", ing: "exercising", translation: "hacer ejercicio", category: "Deportes y Ocio" },
    { word: "hike", ing: "hiking", translation: "hacer senderismo", category: "Deportes y Ocio" },
    { word: "paint", ing: "painting", translation: "pintar", category: "Deportes y Ocio" },
    { word: "play", ing: "playing", translation: "jugar", category: "Deportes y Ocio" },
    { word: "ride", ing: "riding", translation: "andar (en bici/moto/caballo)", category: "Deportes y Ocio" },
    { word: "run", ing: "running", translation: "correr", category: "Deportes y Ocio" },
    { word: "sing", ing: "singing", translation: "cantar", category: "Deportes y Ocio" },
    { word: "skate", ing: "skating", translation: "patinar", category: "Deportes y Ocio" },
    { word: "ski", ing: "skiing", translation: "esquiar", category: "Deportes y Ocio" },
    { word: "surf", ing: "surfing", translation: "surfear", category: "Deportes y Ocio" },
    { word: "swim", ing: "swimming", translation: "nadar", category: "Deportes y Ocio" },
    { word: "jog", ing: "jogging", translation: "trotar", category: "Deportes y Ocio" },
    { word: "box", ing: "boxing", translation: "boxear", category: "Deportes y Ocio" },
    { word: "wrestle", ing: "wrestling", translation: "luchar", category: "Deportes y Ocio" },
    { word: "fish", ing: "fishing", translation: "pescar", category: "Deportes y Ocio" },
    { word: "hunt", ing: "hunting", translation: "cazar", category: "Deportes y Ocio" },
    { word: "camp", ing: "camping", translation: "acampar", category: "Deportes y Ocio" },
    { word: "kayak", ing: "kayaking", translation: "remar en kayak", category: "Deportes y Ocio" },
    { word: "row", ing: "rowing", translation: "remar", category: "Deportes y Ocio" },
    { word: "sail", ing: "sailing", translation: "navegar", category: "Deportes y Ocio" },
    { word: "golf", ing: "golfing", translation: "jugar golf", category: "Deportes y Ocio" },
    { word: "bowl", ing: "bowling", translation: "jugar boliche", category: "Deportes y Ocio" },
    { word: "juggle", ing: "juggling", translation: "hacer malabares", category: "Deportes y Ocio" },
    { word: "skateboard", ing: "skateboarding", translation: "andar en patineta", category: "Deportes y Ocio" },
    { word: "snowboard", ing: "snowboarding", translation: "andar en snowboard", category: "Deportes y Ocio" },
    { word: "sled", ing: "sledding", translation: "deslizarse en trineo", category: "Deportes y Ocio" },
    { word: "skip", ing: "skipping", translation: "saltar la cuerda", category: "Deportes y Ocio" },
    { word: "jump", ing: "jumping", translation: "saltar", category: "Deportes y Ocio" },
    { word: "warm up", ing: "warming up", translation: "calentar (ejercicio)", category: "Deportes y Ocio" },
    { word: "lift weights", ing: "lifting weights", translation: "levantar pesas", category: "Deportes y Ocio" },
    { word: "do yoga", ing: "doing yoga", translation: "hacer yoga", category: "Deportes y Ocio" },
    { word: "meditate", ing: "meditating", translation: "meditar", category: "Deportes y Ocio" },
    { word: "knit", ing: "knitting", translation: "tejer", category: "Deportes y Ocio" },
    { word: "sew", ing: "sewing", translation: "coser", category: "Deportes y Ocio" },
    { word: "garden", ing: "gardening", translation: "jardinear", category: "Deportes y Ocio" },
    { word: "collect stamps", ing: "collecting stamps", translation: "coleccionar estampillas", category: "Deportes y Ocio" },
    { word: "play chess", ing: "playing chess", translation: "jugar ajedrez", category: "Deportes y Ocio" },
    { word: "play cards", ing: "playing cards", translation: "jugar cartas", category: "Deportes y Ocio" },
    { word: "watch TV", ing: "watching TV", translation: "ver televisión", category: "Deportes y Ocio" },
    { word: "watch a movie", ing: "watching a movie", translation: "ver una película", category: "Deportes y Ocio" },
    { word: "go to the movies", ing: "going to the movies", translation: "ir al cine", category: "Deportes y Ocio" },
    { word: "go shopping", ing: "going shopping", translation: "ir de compras", category: "Deportes y Ocio" },
    { word: "take photos", ing: "taking photos", translation: "tomar fotos", category: "Deportes y Ocio" },
    { word: "travel", ing: "traveling", translation: "viajar", category: "Deportes y Ocio" },
    { word: "canoe", ing: "canoeing", translation: "remar en canoa", category: "Deportes y Ocio" },
    // Social, Emociones y Comunicación
    { word: "argue", ing: "arguing", translation: "discutir / pelear", category: "Social, Emociones y Comunicación" },
    { word: "chat", ing: "chatting", translation: "platicar", category: "Social, Emociones y Comunicación" },
    { word: "complain", ing: "complaining", translation: "quejarse", category: "Social, Emociones y Comunicación" },
    { word: "cry", ing: "crying", translation: "llorar", category: "Social, Emociones y Comunicación" },
    { word: "hug", ing: "hugging", translation: "abrazar", category: "Social, Emociones y Comunicación" },
    { word: "joke", ing: "joking", translation: "bromear", category: "Social, Emociones y Comunicación" },
    { word: "laugh", ing: "laughing", translation: "reír", category: "Social, Emociones y Comunicación" },
    { word: "shout", ing: "shouting", translation: "gritar", category: "Social, Emociones y Comunicación" },
    { word: "smile", ing: "smiling", translation: "sonreír", category: "Social, Emociones y Comunicación" },
    { word: "stare", ing: "staring", translation: "mirar fijamente", category: "Social, Emociones y Comunicación" },
    { word: "talk", ing: "talking", translation: "hablar", category: "Social, Emociones y Comunicación" },
    { word: "wait", ing: "waiting", translation: "esperar", category: "Social, Emociones y Comunicación" },
    { word: "wave", ing: "waving", translation: "saludar con la mano", category: "Social, Emociones y Comunicación" },
    { word: "whisper", ing: "whispering", translation: "susurrar", category: "Social, Emociones y Comunicación" },
    { word: "greet", ing: "greeting", translation: "saludar", category: "Social, Emociones y Comunicación" },
    { word: "introduce", ing: "introducing", translation: "presentar (a alguien)", category: "Social, Emociones y Comunicación" },
    { word: "apologize", ing: "apologizing", translation: "disculparse", category: "Social, Emociones y Comunicación" },
    { word: "forgive", ing: "forgiving", translation: "perdonar", category: "Social, Emociones y Comunicación" },
    { word: "thank", ing: "thanking", translation: "agradecer", category: "Social, Emociones y Comunicación" },
    { word: "congratulate", ing: "congratulating", translation: "felicitar", category: "Social, Emociones y Comunicación" },
    { word: "invite", ing: "inviting", translation: "invitar", category: "Social, Emociones y Comunicación" },
    { word: "visit", ing: "visiting", translation: "visitar", category: "Social, Emociones y Comunicación" },
    { word: "text", ing: "texting", translation: "enviar mensaje de texto", category: "Social, Emociones y Comunicación" },
    { word: "message", ing: "messaging", translation: "enviar mensaje", category: "Social, Emociones y Comunicación" },
    { word: "gossip", ing: "gossiping", translation: "chismear", category: "Social, Emociones y Comunicación" },
    { word: "flirt", ing: "flirting", translation: "coquetear", category: "Social, Emociones y Comunicación" },
    { word: "kiss", ing: "kissing", translation: "besar", category: "Social, Emociones y Comunicación" },
    { word: "comfort", ing: "comforting", translation: "consolar", category: "Social, Emociones y Comunicación" },
    { word: "worry", ing: "worrying", translation: "preocuparse", category: "Social, Emociones y Comunicación" },
    { word: "fear", ing: "fearing", translation: "temer", category: "Social, Emociones y Comunicación" },
    { word: "trust", ing: "trusting", translation: "confiar", category: "Social, Emociones y Comunicación" },
    { word: "doubt", ing: "doubting", translation: "dudar", category: "Social, Emociones y Comunicación" },
    { word: "blame", ing: "blaming", translation: "culpar", category: "Social, Emociones y Comunicación" },
    { word: "tease", ing: "teasing", translation: "molestar / bromear", category: "Social, Emociones y Comunicación" },
    { word: "annoy", ing: "annoying", translation: "fastidiar", category: "Social, Emociones y Comunicación" },
    { word: "bother", ing: "bothering", translation: "molestar", category: "Social, Emociones y Comunicación" },
    { word: "scream", ing: "screaming", translation: "gritar (fuerte)", category: "Social, Emociones y Comunicación" },
    { word: "yell", ing: "yelling", translation: "gritar", category: "Social, Emociones y Comunicación" },
    { word: "sob", ing: "sobbing", translation: "sollozar", category: "Social, Emociones y Comunicación" },
    { word: "giggle", ing: "giggling", translation: "reír tontamente", category: "Social, Emociones y Comunicación" },
    { word: "grin", ing: "grinning", translation: "sonreír ampliamente", category: "Social, Emociones y Comunicación" },
    { word: "frown", ing: "frowning", translation: "fruncir el ceño", category: "Social, Emociones y Comunicación" },
    { word: "blush", ing: "blushing", translation: "sonrojarse", category: "Social, Emociones y Comunicación" },
    { word: "panic", ing: "panicking", translation: "entrar en pánico", category: "Social, Emociones y Comunicación" },
    { word: "calm down", ing: "calming down", translation: "calmarse", category: "Social, Emociones y Comunicación" },
    { word: "celebrate", ing: "celebrating", translation: "celebrar", category: "Social, Emociones y Comunicación" },
    { word: "share", ing: "sharing", translation: "compartir", category: "Social, Emociones y Comunicación" },
    { word: "lie", ing: "lying", translation: "mentir", category: "Social, Emociones y Comunicación" },
    { word: "confess", ing: "confessing", translation: "confesar", category: "Social, Emociones y Comunicación" },
    { word: "promise", ing: "promising", translation: "prometer", category: "Social, Emociones y Comunicación" },
    // Cocina y Alimentación
    { word: "chop", ing: "chopping", translation: "picar", category: "Cocina y Alimentación" },
    { word: "slice", ing: "slicing", translation: "rebanar", category: "Cocina y Alimentación" },
    { word: "dice", ing: "dicing", translation: "cortar en cubos", category: "Cocina y Alimentación" },
    { word: "peel", ing: "peeling", translation: "pelar", category: "Cocina y Alimentación" },
    { word: "grate", ing: "grating", translation: "rallar", category: "Cocina y Alimentación" },
    { word: "mix", ing: "mixing", translation: "mezclar", category: "Cocina y Alimentación" },
    { word: "stir", ing: "stirring", translation: "revolver", category: "Cocina y Alimentación" },
    { word: "whisk", ing: "whisking", translation: "batir", category: "Cocina y Alimentación" },
    { word: "beat", ing: "beating", translation: "batir (huevos)", category: "Cocina y Alimentación" },
    { word: "pour", ing: "pouring", translation: "verter", category: "Cocina y Alimentación" },
    { word: "boil", ing: "boiling", translation: "hervir", category: "Cocina y Alimentación" },
    { word: "steam", ing: "steaming", translation: "cocinar al vapor", category: "Cocina y Alimentación" },
    { word: "fry", ing: "frying", translation: "freír", category: "Cocina y Alimentación" },
    { word: "grill", ing: "grilling", translation: "asar a la parrilla", category: "Cocina y Alimentación" },
    { word: "roast", ing: "roasting", translation: "asar (horno)", category: "Cocina y Alimentación" },
    { word: "bake", ing: "baking", translation: "hornear", category: "Cocina y Alimentación" },
    { word: "broil", ing: "broiling", translation: "asar (parrilla del horno)", category: "Cocina y Alimentación" },
    { word: "simmer", ing: "simmering", translation: "cocinar a fuego lento", category: "Cocina y Alimentación" },
    { word: "season", ing: "seasoning", translation: "sazonar", category: "Cocina y Alimentación" },
    { word: "taste", ing: "tasting", translation: "probar (sabor)", category: "Cocina y Alimentación" },
    { word: "serve", ing: "serving", translation: "servir", category: "Cocina y Alimentación" },
    { word: "garnish", ing: "garnishing", translation: "decorar (platillo)", category: "Cocina y Alimentación" },
    { word: "marinate", ing: "marinating", translation: "marinar", category: "Cocina y Alimentación" },
    { word: "knead", ing: "kneading", translation: "amasar", category: "Cocina y Alimentación" },
    { word: "melt", ing: "melting", translation: "derretir", category: "Cocina y Alimentación" },
    { word: "freeze", ing: "freezing", translation: "congelar", category: "Cocina y Alimentación" },
    { word: "defrost", ing: "defrosting", translation: "descongelar", category: "Cocina y Alimentación" },
    { word: "microwave", ing: "microwaving", translation: "calentar en microondas", category: "Cocina y Alimentación" },
    { word: "blend", ing: "blending", translation: "licuar", category: "Cocina y Alimentación" },
    { word: "squeeze", ing: "squeezing", translation: "exprimir", category: "Cocina y Alimentación" },
    { word: "spread", ing: "spreading", translation: "untar", category: "Cocina y Alimentación" },
    { word: "sprinkle", ing: "sprinkling", translation: "espolvorear", category: "Cocina y Alimentación" },
    { word: "drain", ing: "draining", translation: "escurrir", category: "Cocina y Alimentación" },
    { word: "rinse", ing: "rinsing", translation: "enjuagar", category: "Cocina y Alimentación" },
    { word: "core", ing: "coring", translation: "quitar el centro (a una fruta)", category: "Cocina y Alimentación" },
    { word: "carve", ing: "carving", translation: "trinchar / tallar", category: "Cocina y Alimentación" },
    { word: "scoop", ing: "scooping", translation: "sacar con cuchara", category: "Cocina y Alimentación" },
    { word: "measure", ing: "measuring", translation: "medir", category: "Cocina y Alimentación" },
    { word: "weigh", ing: "weighing", translation: "pesar", category: "Cocina y Alimentación" },
    { word: "preheat", ing: "preheating", translation: "precalentar", category: "Cocina y Alimentación" },
    { word: "set the oven", ing: "setting the oven", translation: "programar el horno", category: "Cocina y Alimentación" },
    { word: "order food", ing: "ordering food", translation: "pedir comida", category: "Cocina y Alimentación" },
    { word: "deliver food", ing: "delivering food", translation: "repartir comida", category: "Cocina y Alimentación" },
    { word: "pay the bill", ing: "paying the bill", translation: "pagar la cuenta", category: "Cocina y Alimentación" },
    { word: "tip the waiter", ing: "tipping the waiter", translation: "dejar propina al mesero", category: "Cocina y Alimentación" },
    { word: "reserve a table", ing: "reserving a table", translation: "reservar mesa", category: "Cocina y Alimentación" },
    { word: "chew", ing: "chewing", translation: "masticar", category: "Cocina y Alimentación" },
    { word: "swallow", ing: "swallowing", translation: "tragar", category: "Cocina y Alimentación" },
    { word: "sip", ing: "sipping", translation: "sorber", category: "Cocina y Alimentación" },
    { word: "snack", ing: "snacking", translation: "picar algo (comer botana)", category: "Cocina y Alimentación" },
    // Viajes, Transporte y Movimiento
    { word: "drive", ing: "driving", translation: "manejar", category: "Viajes, Transporte y Movimiento" },
    { word: "fly", ing: "flying", translation: "volar", category: "Viajes, Transporte y Movimiento" },
    { word: "walk", ing: "walking", translation: "caminar", category: "Viajes, Transporte y Movimiento" },
    { word: "board the plane", ing: "boarding the plane", translation: "abordar el avión", category: "Viajes, Transporte y Movimiento" },
    { word: "land", ing: "landing", translation: "aterrizar", category: "Viajes, Transporte y Movimiento" },
    { word: "take off", ing: "taking off", translation: "despegar", category: "Viajes, Transporte y Movimiento" },
    { word: "check in", ing: "checking in", translation: "registrarse", category: "Viajes, Transporte y Movimiento" },
    { word: "check out", ing: "checking out", translation: "hacer el check-out", category: "Viajes, Transporte y Movimiento" },
    { word: "book a flight", ing: "booking a flight", translation: "reservar un vuelo", category: "Viajes, Transporte y Movimiento" },
    { word: "book a hotel", ing: "booking a hotel", translation: "reservar un hotel", category: "Viajes, Transporte y Movimiento" },
    { word: "rent a car", ing: "renting a car", translation: "rentar un auto", category: "Viajes, Transporte y Movimiento" },
    { word: "park the car", ing: "parking the car", translation: "estacionar el auto", category: "Viajes, Transporte y Movimiento" },
    { word: "fill up the tank", ing: "filling up the tank", translation: "llenar el tanque", category: "Viajes, Transporte y Movimiento" },
    { word: "cross the street", ing: "crossing the street", translation: "cruzar la calle", category: "Viajes, Transporte y Movimiento" },
    { word: "cross the bridge", ing: "crossing the bridge", translation: "cruzar el puente", category: "Viajes, Transporte y Movimiento" },
    { word: "catch the bus", ing: "catching the bus", translation: "alcanzar el autobús", category: "Viajes, Transporte y Movimiento" },
    { word: "miss the train", ing: "missing the train", translation: "perder el tren", category: "Viajes, Transporte y Movimiento" },
    { word: "get on the bus", ing: "getting on the bus", translation: "subir al autobús", category: "Viajes, Transporte y Movimiento" },
    { word: "get off the bus", ing: "getting off the bus", translation: "bajar del autobús", category: "Viajes, Transporte y Movimiento" },
    { word: "transfer trains", ing: "transferring trains", translation: "hacer transbordo", category: "Viajes, Transporte y Movimiento" },
    { word: "navigate", ing: "navigating", translation: "navegar / guiarse", category: "Viajes, Transporte y Movimiento" },
    { word: "explore", ing: "exploring", translation: "explorar", category: "Viajes, Transporte y Movimiento" },
    { word: "wander", ing: "wandering", translation: "deambular", category: "Viajes, Transporte y Movimiento" },
    { word: "hitchhike", ing: "hitchhiking", translation: "pedir aventón (autostop)", category: "Viajes, Transporte y Movimiento" },
    { word: "commute", ing: "commuting", translation: "viajar al trabajo (trayecto diario)", category: "Viajes, Transporte y Movimiento" },
    { word: "carpool", ing: "carpooling", translation: "compartir auto", category: "Viajes, Transporte y Movimiento" },
    { word: "tow the car", ing: "towing the car", translation: "remolcar el auto", category: "Viajes, Transporte y Movimiento" },
    { word: "push the car", ing: "pushing the car", translation: "empujar el auto", category: "Viajes, Transporte y Movimiento" },
    { word: "pull", ing: "pulling", translation: "jalar", category: "Viajes, Transporte y Movimiento" },
    { word: "carry", ing: "carrying", translation: "cargar", category: "Viajes, Transporte y Movimiento" },
    { word: "lift", ing: "lifting", translation: "levantar", category: "Viajes, Transporte y Movimiento" },
    { word: "drag", ing: "dragging", translation: "arrastrar", category: "Viajes, Transporte y Movimiento" },
    { word: "drop", ing: "dropping", translation: "dejar caer", category: "Viajes, Transporte y Movimiento" },
    { word: "throw", ing: "throwing", translation: "lanzar", category: "Viajes, Transporte y Movimiento" },
    { word: "signal", ing: "signaling", translation: "señalar", category: "Viajes, Transporte y Movimiento" },
    { word: "kick", ing: "kicking", translation: "patear", category: "Viajes, Transporte y Movimiento" },
    { word: "crawl", ing: "crawling", translation: "gatear", category: "Viajes, Transporte y Movimiento" },
    { word: "tiptoe", ing: "tiptoeing", translation: "caminar de puntitas", category: "Viajes, Transporte y Movimiento" },
    { word: "hop", ing: "hopping", translation: "saltar en un pie", category: "Viajes, Transporte y Movimiento" },
    { word: "leap", ing: "leaping", translation: "saltar (con impulso)", category: "Viajes, Transporte y Movimiento" },
    { word: "dash", ing: "dashing", translation: "correr rápidamente", category: "Viajes, Transporte y Movimiento" },
    { word: "rush", ing: "rushing", translation: "apurarse", category: "Viajes, Transporte y Movimiento" },
    { word: "hurry", ing: "hurrying", translation: "apurarse", category: "Viajes, Transporte y Movimiento" },
    { word: "descend", ing: "descending", translation: "descender", category: "Viajes, Transporte y Movimiento" },
    { word: "ascend", ing: "ascending", translation: "ascender", category: "Viajes, Transporte y Movimiento" },
    { word: "slide", ing: "sliding", translation: "deslizarse", category: "Viajes, Transporte y Movimiento" },
    { word: "slip", ing: "slipping", translation: "resbalar", category: "Viajes, Transporte y Movimiento" },
    { word: "trip", ing: "tripping", translation: "tropezar", category: "Viajes, Transporte y Movimiento" },
    { word: "stumble", ing: "stumbling", translation: "tropezar / tambalearse", category: "Viajes, Transporte y Movimiento" },
    { word: "wave down a taxi", ing: "waving down a taxi", translation: "parar un taxi (con la mano)", category: "Viajes, Transporte y Movimiento" },
    // Cuerpo, Salud y Sentidos
    { word: "see", ing: "seeing", translation: "ver", category: "Cuerpo, Salud y Sentidos" },
    { word: "look", ing: "looking", translation: "mirar", category: "Cuerpo, Salud y Sentidos" },
    { word: "watch", ing: "watching", translation: "observar / ver", category: "Cuerpo, Salud y Sentidos" },
    { word: "glance", ing: "glancing", translation: "echar un vistazo", category: "Cuerpo, Salud y Sentidos" },
    { word: "observe", ing: "observing", translation: "observar", category: "Cuerpo, Salud y Sentidos" },
    { word: "notice", ing: "noticing", translation: "notar", category: "Cuerpo, Salud y Sentidos" },
    { word: "hear", ing: "hearing", translation: "oír", category: "Cuerpo, Salud y Sentidos" },
    { word: "listen", ing: "listening", translation: "escuchar", category: "Cuerpo, Salud y Sentidos" },
    { word: "smell", ing: "smelling", translation: "oler", category: "Cuerpo, Salud y Sentidos" },
    { word: "sniff", ing: "sniffing", translation: "olfatear", category: "Cuerpo, Salud y Sentidos" },
    { word: "touch", ing: "touching", translation: "tocar", category: "Cuerpo, Salud y Sentidos" },
    { word: "feel", ing: "feeling", translation: "sentir", category: "Cuerpo, Salud y Sentidos" },
    { word: "breathe", ing: "breathing", translation: "respirar", category: "Cuerpo, Salud y Sentidos" },
    { word: "cough", ing: "coughing", translation: "toser", category: "Cuerpo, Salud y Sentidos" },
    { word: "sneeze", ing: "sneezing", translation: "estornudar", category: "Cuerpo, Salud y Sentidos" },
    { word: "blink", ing: "blinking", translation: "parpadear", category: "Cuerpo, Salud y Sentidos" },
    { word: "sweat", ing: "sweating", translation: "sudar", category: "Cuerpo, Salud y Sentidos" },
    { word: "shiver", ing: "shivering", translation: "tiritar", category: "Cuerpo, Salud y Sentidos" },
    { word: "faint", ing: "fainting", translation: "desmayarse", category: "Cuerpo, Salud y Sentidos" },
    { word: "bleed", ing: "bleeding", translation: "sangrar", category: "Cuerpo, Salud y Sentidos" },
    { word: "heal", ing: "healing", translation: "sanar", category: "Cuerpo, Salud y Sentidos" },
    { word: "recover", ing: "recovering", translation: "recuperarse", category: "Cuerpo, Salud y Sentidos" },
    { word: "get sick", ing: "getting sick", translation: "enfermarse", category: "Cuerpo, Salud y Sentidos" },
    { word: "get better", ing: "getting better", translation: "mejorar (de salud)", category: "Cuerpo, Salud y Sentidos" },
    { word: "get worse", ing: "getting worse", translation: "empeorar", category: "Cuerpo, Salud y Sentidos" },
    { word: "take medicine", ing: "taking medicine", translation: "tomar medicina", category: "Cuerpo, Salud y Sentidos" },
    { word: "take a pill", ing: "taking a pill", translation: "tomar una pastilla", category: "Cuerpo, Salud y Sentidos" },
    { word: "see a doctor", ing: "seeing a doctor", translation: "ir al doctor", category: "Cuerpo, Salud y Sentidos" },
    { word: "see a dentist", ing: "seeing a dentist", translation: "ir al dentista", category: "Cuerpo, Salud y Sentidos" },
    { word: "get a checkup", ing: "getting a checkup", translation: "hacerse un chequeo", category: "Cuerpo, Salud y Sentidos" },
    { word: "get a shot", ing: "getting a shot", translation: "ponerse una inyección", category: "Cuerpo, Salud y Sentidos" },
    { word: "measure your temperature", ing: "measuring your temperature", translation: "medirse la temperatura", category: "Cuerpo, Salud y Sentidos" },
    { word: "bandage a wound", ing: "bandaging a wound", translation: "vendar una herida", category: "Cuerpo, Salud y Sentidos" },
    { word: "work out", ing: "working out", translation: "entrenar / hacer ejercicio", category: "Cuerpo, Salud y Sentidos" },
    { word: "gain weight", ing: "gaining weight", translation: "subir de peso", category: "Cuerpo, Salud y Sentidos" },
    { word: "lose weight", ing: "losing weight", translation: "bajar de peso", category: "Cuerpo, Salud y Sentidos" },
    { word: "gain muscle", ing: "gaining muscle", translation: "ganar músculo", category: "Cuerpo, Salud y Sentidos" },
    { word: "doze off", ing: "dozing off", translation: "dormitar / quedarse dormido sin querer", category: "Cuerpo, Salud y Sentidos" },
    { word: "wake someone up", ing: "waking someone up", translation: "despertar a alguien", category: "Cuerpo, Salud y Sentidos" },
    { word: "fall asleep", ing: "falling asleep", translation: "quedarse dormido", category: "Cuerpo, Salud y Sentidos" },
    { word: "snore", ing: "snoring", translation: "roncar", category: "Cuerpo, Salud y Sentidos" },
    { word: "dream", ing: "dreaming", translation: "soñar", category: "Cuerpo, Salud y Sentidos" },
    { word: "stretch out", ing: "stretching out", translation: "estirarse por completo", category: "Cuerpo, Salud y Sentidos" },
    { word: "massage", ing: "massaging", translation: "dar masaje", category: "Cuerpo, Salud y Sentidos" },
    { word: "itch", ing: "itching", translation: "picar / dar comezón", category: "Cuerpo, Salud y Sentidos" },
    { word: "scratch", ing: "scratching", translation: "rascarse", category: "Cuerpo, Salud y Sentidos" },
    { word: "swell", ing: "swelling", translation: "hincharse", category: "Cuerpo, Salud y Sentidos" },
    { word: "limp", ing: "limping", translation: "cojear", category: "Cuerpo, Salud y Sentidos" },
    { word: "twist your ankle", ing: "twisting your ankle", translation: "torcerse el tobillo", category: "Cuerpo, Salud y Sentidos" },
    { word: "break your arm", ing: "breaking your arm", translation: "romperse el brazo", category: "Cuerpo, Salud y Sentidos" },
    // Naturaleza, Clima y Ciencia
    { word: "rain", ing: "raining", translation: "llover", category: "Naturaleza, Clima y Ciencia" },
    { word: "snow", ing: "snowing", translation: "nevar", category: "Naturaleza, Clima y Ciencia" },
    { word: "shine", ing: "shining", translation: "brillar", category: "Naturaleza, Clima y Ciencia" },
    { word: "blow", ing: "blowing", translation: "soplar (viento)", category: "Naturaleza, Clima y Ciencia" },
    { word: "thunder", ing: "thundering", translation: "tronar", category: "Naturaleza, Clima y Ciencia" },
    { word: "flash", ing: "flashing", translation: "relampaguear (destellar)", category: "Naturaleza, Clima y Ciencia" },
    { word: "flood", ing: "flooding", translation: "inundar", category: "Naturaleza, Clima y Ciencia" },
    { word: "drizzle", ing: "drizzling", translation: "lloviznar", category: "Naturaleza, Clima y Ciencia" },
    { word: "pour down", ing: "pouring down", translation: "llover a cántaros", category: "Naturaleza, Clima y Ciencia" },
    { word: "clear up", ing: "clearing up", translation: "despejarse (el cielo)", category: "Naturaleza, Clima y Ciencia" },
    { word: "grow", ing: "growing", translation: "crecer", category: "Naturaleza, Clima y Ciencia" },
    { word: "bloom", ing: "blooming", translation: "florecer", category: "Naturaleza, Clima y Ciencia" },
    { word: "wither", ing: "withering", translation: "marchitarse", category: "Naturaleza, Clima y Ciencia" },
    { word: "plant", ing: "planting", translation: "plantar", category: "Naturaleza, Clima y Ciencia" },
    { word: "harvest", ing: "harvesting", translation: "cosechar", category: "Naturaleza, Clima y Ciencia" },
    { word: "pollinate", ing: "pollinating", translation: "polinizar", category: "Naturaleza, Clima y Ciencia" },
    { word: "photosynthesize", ing: "photosynthesizing", translation: "fotosintetizar", category: "Naturaleza, Clima y Ciencia" },
    { word: "evaporate", ing: "evaporating", translation: "evaporarse", category: "Naturaleza, Clima y Ciencia" },
    { word: "condense", ing: "condensing", translation: "condensarse", category: "Naturaleza, Clima y Ciencia" },
    { word: "erode", ing: "eroding", translation: "erosionar", category: "Naturaleza, Clima y Ciencia" },
    { word: "erupt", ing: "erupting", translation: "hacer erupción", category: "Naturaleza, Clima y Ciencia" },
    { word: "shake", ing: "shaking", translation: "temblar", category: "Naturaleza, Clima y Ciencia" },
    { word: "flow", ing: "flowing", translation: "fluir", category: "Naturaleza, Clima y Ciencia" },
    { word: "drip", ing: "dripping", translation: "gotear", category: "Naturaleza, Clima y Ciencia" },
    { word: "rise", ing: "rising", translation: "elevarse / subir", category: "Naturaleza, Clima y Ciencia" },
    { word: "fall", ing: "falling", translation: "caer / bajar", category: "Naturaleza, Clima y Ciencia" },
    { word: "increase", ing: "increasing", translation: "aumentar", category: "Naturaleza, Clima y Ciencia" },
    { word: "decrease", ing: "decreasing", translation: "disminuir", category: "Naturaleza, Clima y Ciencia" },
    { word: "experiment", ing: "experimenting", translation: "experimentar", category: "Naturaleza, Clima y Ciencia" },
    { word: "classify", ing: "classifying", translation: "clasificar", category: "Naturaleza, Clima y Ciencia" },
    { word: "discover", ing: "discovering", translation: "descubrir", category: "Naturaleza, Clima y Ciencia" },
    { word: "invent", ing: "inventing", translation: "inventar", category: "Naturaleza, Clima y Ciencia" },
    { word: "adapt", ing: "adapting", translation: "adaptarse", category: "Naturaleza, Clima y Ciencia" },
    { word: "investigate", ing: "investigating", translation: "investigar", category: "Naturaleza, Clima y Ciencia" },
    { word: "predict", ing: "predicting", translation: "predecir", category: "Naturaleza, Clima y Ciencia" },
    { word: "forecast", ing: "forecasting", translation: "pronosticar", category: "Naturaleza, Clima y Ciencia" },
    { word: "pollute", ing: "polluting", translation: "contaminar", category: "Naturaleza, Clima y Ciencia" },
    { word: "recycle", ing: "recycling", translation: "reciclar", category: "Naturaleza, Clima y Ciencia" },
    { word: "conserve", ing: "conserving", translation: "conservar", category: "Naturaleza, Clima y Ciencia" },
    { word: "protect", ing: "protecting", translation: "proteger", category: "Naturaleza, Clima y Ciencia" },
    { word: "endanger", ing: "endangering", translation: "poner en peligro", category: "Naturaleza, Clima y Ciencia" },
    { word: "migrate", ing: "migrating", translation: "migrar", category: "Naturaleza, Clima y Ciencia" },
    { word: "hibernate", ing: "hibernating", translation: "hibernar", category: "Naturaleza, Clima y Ciencia" },
    { word: "hatch", ing: "hatching", translation: "eclosionar / salir del huevo", category: "Naturaleza, Clima y Ciencia" },
    { word: "nest", ing: "nesting", translation: "anidar", category: "Naturaleza, Clima y Ciencia" },
    { word: "forage", ing: "foraging", translation: "buscar alimento", category: "Naturaleza, Clima y Ciencia" },
    { word: "graze", ing: "grazing", translation: "pastar", category: "Naturaleza, Clima y Ciencia" },
    { word: "roam", ing: "roaming", translation: "vagar / deambular", category: "Naturaleza, Clima y Ciencia" },
    { word: "howl", ing: "howling", translation: "aullar", category: "Naturaleza, Clima y Ciencia" },
    { word: "chirp", ing: "chirping", translation: "piar / trinar", category: "Naturaleza, Clima y Ciencia" }
  ], []);

  const spellingRules = useMemo(() => [
    { rule: "Regla general: agrega -ing", examples: [["play", "playing"], ["read", "reading"], ["talk", "talking"]] },
    { rule: "Verbo termina en -e muda: quita la -e y agrega -ing", examples: [["make", "making"], ["dance", "dancing"], ["write", "writing"]] },
    { rule: "Una sílaba, consonante-vocal-consonante: duplica la última consonante", examples: [["run", "running"], ["stop", "stopping"], ["swim", "swimming"]] },
    { rule: "Termina en -w, -x o -y: NO dupliques, solo agrega -ing", examples: [["play", "playing"], ["fix", "fixing"], ["snow", "snowing"]] },
    { rule: "Termina en -ie: cambia -ie por -y y agrega -ing", examples: [["lie", "lying"], ["die", "dying"], ["tie", "tying"]] }
  ], []);

  const filteredVerbs = useMemo(() => sortByWord(allActionVerbs.filter((item) =>
    item.word.toLowerCase().includes(verbSearch.toLowerCase()) ||
    item.ing.toLowerCase().includes(verbSearch.toLowerCase()) ||
    item.translation.toLowerCase().includes(verbSearch.toLowerCase()) ||
    item.category.toLowerCase().includes(verbSearch.toLowerCase())
  ), verbSort), [allActionVerbs, verbSearch, verbSort]);

  const verbTotalPages = Math.max(1, Math.ceil(filteredVerbs.length / verbPageSize));
  const paginatedVerbs = filteredVerbs.slice((verbPage - 1) * verbPageSize, verbPage * verbPageSize);

  const handleVerbSearch = (value) => { setVerbSearch(value); setVerbPage(1); };
  const handleVerbPageSize = (size) => { setVerbPageSize(size); setVerbPage(1); };

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 7 • Vocabulario</span>
        <h2>Actividades en Curso: Verbos para el Presente Continuo</h2>
        <p className="topic-intro">
          Verbos de acción que vas a necesitar constantemente para describir qué está pasando ahora mismo, más las reglas de ortografía para formar el -ing correctamente.
        </p>
      </div>

      {/* VERBOS DE ACCIÓN */}
      <div className="content-section">
        <h3>1. Verbos de Acción</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          {allActionVerbs.length} verbos organizados en 8 categorías (vida diaria, trabajo/estudio, deportes/ocio, social/emociones, cocina, viajes/movimiento, cuerpo/salud y naturaleza/ciencia), cada uno con su forma -ing.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            className="search-input"
            style={{ flex: 1, minWidth: '200px' }}
            placeholder="🔍 Buscar verbo, forma -ing, traducción o categoría..."
            value={verbSearch}
            onChange={(e) => handleVerbSearch(e.target.value)}
          />
          <SortToggle mode={verbSort} onChange={setVerbSort} />
        </div>
        <span className="result-count">{filteredVerbs.length} de {allActionVerbs.length} verbos</span>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
          {paginatedVerbs.map((item, index) => (
            <div key={index} className="example-item" style={{ borderLeft: '3px solid var(--color-evolve1)' }}>
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{item.word}</span>
                <button className="audio-btn" onClick={() => speak(item.word)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-en" style={{ justifyContent: 'space-between', marginTop: '6px', color: 'var(--active-accent)' }}>
                <span>{item.ing}</span>
                <button className="audio-btn" onClick={() => speak(item.ing)} title="Escuchar forma -ing" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ marginTop: '6px', fontSize: '0.85rem' }}>
                {item.translation} <span className="category-tag" style={{ float: 'right' }}>{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          page={verbPage}
          totalPages={verbTotalPages}
          totalItems={filteredVerbs.length}
          onChange={setVerbPage}
          itemsPerPage={verbPageSize}
          onItemsPerPageChange={handleVerbPageSize}
        />
      </div>

      {/* REGLAS DE ORTOGRAFÍA */}
      <div className="content-section">
        <h3>2. Reglas de Ortografía: Cómo Formar el -ing</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          No todos los verbos agregan "-ing" de la misma forma. Estas son las 5 reglas que necesitas conocer.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {spellingRules.map((rule, index) => (
            <div key={index} className="example-item">
              <div style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '10px' }}>{rule.rule}</div>
              {rule.examples.map(([base, ing], i) => (
                <div key={i} className="example-en" style={{ justifyContent: 'space-between', marginTop: '6px', fontSize: '0.9rem' }}>
                  <span>{base} → <strong>{ing}</strong></span>
                  <button className="audio-btn" onClick={() => speak(ing)} title="Escuchar" style={{ margin: 0, width: '26px', height: '26px' }}>🔊</button>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>⚠️</span> Excepción importante: verbos de una sílaba</div>
          <div className="insider-content">
            La regla de duplicar la consonante solo aplica a verbos de <strong>una sílaba</strong> que terminan en consonante-vocal-consonante (<em>run → running</em>). En verbos de más sílabas, solo se duplica si el acento cae en la última sílaba: <em>begin → beginning</em> (acento en "gin"), pero <em>open → opening</em> (acento en "o", no se duplica la "n").
          </div>
        </div>
      </div>

      {/* PRONUNCIACIÓN */}
      <div className="content-section">
        <h3>3. Pronunciación: El Sonido /ɪŋ/</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          La terminación <strong>-ing</strong> se pronuncia /ɪŋ/, un sonido nasal que sale por la nariz — NO es "-in" (sin la "g" nasal) como se escucha en algunos acentos informales del inglés, y tampoco se pronuncia la "g" como una letra separada.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
          {["running", "swimming", "talking", "reading", "cooking", "singing"].map((word, index) => (
            <div key={index} className="example-item" style={{ padding: '10px 14px' }}>
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{word}</span>
                <button className="audio-btn" onClick={() => speak(word)} title="Escuchar" style={{ margin: 0, width: '26px', height: '26px' }}>🔊</button>
              </div>
            </div>
          ))}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>👂</span> Truco de pronunciación</div>
          <div className="insider-content">
            Para practicar el sonido /ŋ/, di la palabra "sing" en español como "sin", pero deja que el aire salga por la nariz mientras la lengua toca el paladar en la parte de atrás (como al decir "banco" en español, el sonido de la "n" antes de "c"). Evita agregar una vocal extra al final, como "ing-ue".
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen de Vocabulario</h4>
          <p>Pon a prueba tu conocimiento de verbos de acción y sus formas -ing.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default VocabularyTopic;

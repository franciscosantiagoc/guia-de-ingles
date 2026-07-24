import React, { useState, useMemo } from 'react';
import Pagination, { DEFAULT_PAGE_SIZE } from '../../../components/Pagination';
import SortToggle, { sortByWord, DEFAULT_SORT } from '../../../components/SortToggle';

const VocabularyTopic = () => {
  const [deviceSearch, setDeviceSearch] = useState('');
  const [devicePage, setDevicePage] = useState(1);
  const [devicePageSize, setDevicePageSize] = useState(DEFAULT_PAGE_SIZE);
  const [deviceSort, setDeviceSort] = useState(DEFAULT_SORT);
  const [verbSearch, setVerbSearch] = useState('');
  const [verbPage, setVerbPage] = useState(1);
  const [verbPageSize, setVerbPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [verbSort, setVerbSort] = useState(DEFAULT_SORT);
  const [musicSearch, setMusicSearch] = useState('');
  const [musicPage, setMusicPage] = useState(1);
  const [musicPageSize, setMusicPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [musicSort, setMusicSort] = useState(DEFAULT_SORT);

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const allDevices = useMemo(() => [
    // Dispositivos
    { word: "barcode scanner", translation: "escáner de código de barras", category: "Dispositivos" },
    { word: "camera", translation: "cámara", category: "Dispositivos" },
    { word: "cell phone", translation: "celular", category: "Dispositivos" },
    { word: "drone", translation: "dron", category: "Dispositivos" },
    { word: "e-reader", translation: "lector de libros electrónicos", category: "Dispositivos" },
    { word: "e-SIM", translation: "e-SIM (SIM digital)", category: "Dispositivos" },
    { word: "fitness tracker", translation: "rastreador de actividad física", category: "Dispositivos" },
    { word: "game console", translation: "consola de videojuegos", category: "Dispositivos" },
    { word: "remote control", translation: "control remoto", category: "Dispositivos" },
    { word: "smart home hub", translation: "asistente de hogar inteligente", category: "Dispositivos" },
    { word: "smart TV", translation: "televisor inteligente", category: "Dispositivos" },
    { word: "smartphone", translation: "teléfono inteligente", category: "Dispositivos" },
    { word: "smartwatch", translation: "reloj inteligente", category: "Dispositivos" },
    { word: "tablet", translation: "tableta", category: "Dispositivos" },
    { word: "VR headset", translation: "visor de realidad virtual", category: "Dispositivos" },
    // Cómputo y Hardware
    { word: "cooling fan", translation: "ventilador de enfriamiento", category: "Cómputo y Hardware" },
    { word: "CPU / processor", translation: "procesador", category: "Cómputo y Hardware" },
    { word: "desktop computer", translation: "computadora de escritorio", category: "Cómputo y Hardware" },
    { word: "dual monitor setup", translation: "configuración de doble monitor", category: "Cómputo y Hardware" },
    { word: "external hard drive", translation: "disco duro externo", category: "Cómputo y Hardware" },
    { word: "GPU / graphics card", translation: "tarjeta gráfica", category: "Cómputo y Hardware" },
    { word: "hard drive", translation: "disco duro", category: "Cómputo y Hardware" },
    { word: "keyboard", translation: "teclado", category: "Cómputo y Hardware" },
    { word: "laptop", translation: "laptop / portátil", category: "Cómputo y Hardware" },
    { word: "monitor", translation: "monitor", category: "Cómputo y Hardware" },
    { word: "motherboard", translation: "tarjeta madre", category: "Cómputo y Hardware" },
    { word: "mouse", translation: "mouse / ratón", category: "Cómputo y Hardware" },
    { word: "power supply", translation: "fuente de poder", category: "Cómputo y Hardware" },
    { word: "RAM / memory", translation: "memoria RAM", category: "Cómputo y Hardware" },
    { word: "SSD", translation: "unidad de estado sólido", category: "Cómputo y Hardware" },
    // Redes y Nube
    { word: "cloud storage", translation: "almacenamiento en la nube", category: "Redes y Nube" },
    { word: "modem", translation: "módem", category: "Redes y Nube" },
    { word: "router", translation: "router", category: "Redes y Nube" },
    { word: "server", translation: "servidor", category: "Redes y Nube" },
    { word: "streaming device", translation: "dispositivo de streaming", category: "Redes y Nube" },
    { word: "VPN", translation: "red privada virtual", category: "Redes y Nube" },
    { word: "Wi-Fi", translation: "wifi", category: "Redes y Nube" },
    // Accesorios
    { word: "adapter", translation: "adaptador", category: "Accesorios" },
    { word: "battery", translation: "batería", category: "Accesorios" },
    { word: "cable", translation: "cable", category: "Accesorios" },
    { word: "charger", translation: "cargador", category: "Accesorios" },
    { word: "docking station", translation: "estación de acoplamiento", category: "Accesorios" },
    { word: "earbuds", translation: "audífonos (internos)", category: "Accesorios" },
    { word: "ergonomic mouse", translation: "mouse ergonómico", category: "Accesorios" },
    { word: "ethernet cable", translation: "cable de red", category: "Accesorios" },
    { word: "HDMI cable", translation: "cable HDMI", category: "Accesorios" },
    { word: "headphones", translation: "audífonos (grandes)", category: "Accesorios" },
    { word: "mechanical keyboard", translation: "teclado mecánico", category: "Accesorios" },
    { word: "memory card", translation: "tarjeta de memoria", category: "Accesorios" },
    { word: "microphone", translation: "micrófono", category: "Accesorios" },
    { word: "phone case", translation: "funda de celular", category: "Accesorios" },
    { word: "power bank", translation: "batería portátil", category: "Accesorios" },
    { word: "printer", translation: "impresora", category: "Accesorios" },
    { word: "projector", translation: "proyector", category: "Accesorios" },
    { word: "ring light", translation: "luz de aro", category: "Accesorios" },
    { word: "scanner", translation: "escáner", category: "Accesorios" },
    { word: "screen protector", translation: "mica / protector de pantalla", category: "Accesorios" },
    { word: "SIM card", translation: "tarjeta SIM", category: "Accesorios" },
    { word: "smart speaker", translation: "bocina inteligente (Alexa, Google Home)", category: "Accesorios" },
    { word: "speaker", translation: "bocina / altavoz", category: "Accesorios" },
    { word: "USB drive / flash drive", translation: "memoria USB", category: "Accesorios" },
    { word: "USB-C hub", translation: "hub USB-C", category: "Accesorios" },
    { word: "webcam", translation: "cámara web", category: "Accesorios" },
    { word: "wireless charger", translation: "cargador inalámbrico", category: "Accesorios" }
  ], []);

  const allTechVerbs = useMemo(() => [
    { word: "approve", translation: "aprobar (un pull request)", example: "He approves my pull requests quickly.", exampleEs: "Él aprueba mis pull requests rápidamente." },
    { word: "automate", translation: "automatizar", example: "We automate repetitive tasks with scripts.", exampleEs: "Automatizamos tareas repetitivas con scripts." },
    { word: "back up", translation: "respaldar", example: "We back up our files every month.", exampleEs: "Respaldamos nuestros archivos cada mes." },
    { word: "branch", translation: "crear una rama", example: "I branch off before I start a new feature.", exampleEs: "Creo una rama antes de empezar una nueva función." },
    { word: "browse", translation: "navegar (internet)", example: "She browses the internet for new music.", exampleEs: "Ella navega en internet buscando música nueva." },
    { word: "build", translation: "construir / compilar", example: "We build the project every night.", exampleEs: "Compilamos el proyecto cada noche." },
    { word: "call", translation: "llamar", example: "We call our grandparents on Sundays.", exampleEs: "Llamamos a nuestros abuelos los domingos." },
    { word: "charge", translation: "cargar (batería)", example: "I charge my phone overnight.", exampleEs: "Cargo mi teléfono durante la noche." },
    { word: "checkout", translation: "cambiar de rama", example: "Checkout the main branch before you start.", exampleEs: "Cambia a la rama principal antes de empezar." },
    { word: "click", translation: "hacer clic", example: "Click the blue button to continue.", exampleEs: "Haz clic en el botón azul para continuar." },
    { word: "clone", translation: "clonar (un repositorio)", example: "I clone the repository on my first day.", exampleEs: "Clono el repositorio en mi primer día." },
    { word: "code", translation: "programar / codificar", example: "I code for eight hours a day.", exampleEs: "Programo ocho horas al día." },
    { word: "comment", translation: "comentar (código)", example: "I comment my code so others understand it.", exampleEs: "Comento mi código para que otros lo entiendan." },
    { word: "commit", translation: "hacer un commit", example: "I commit my changes several times a day.", exampleEs: "Hago commit de mis cambios varias veces al día." },
    { word: "compile", translation: "compilar", example: "The code doesn't compile because of a typo.", exampleEs: "El código no compila por un error de escritura." },
    { word: "configure", translation: "configurar", example: "I configure the server on my first day.", exampleEs: "Configuro el servidor en mi primer día." },
    { word: "connect", translation: "conectar", example: "We connect our laptop to the TV.", exampleEs: "Conectamos nuestra laptop a la tele." },
    { word: "debug", translation: "depurar", example: "I debug my code for an hour every morning.", exampleEs: "Depuro mi código una hora cada mañana." },
    { word: "deploy", translation: "desplegar", example: "I deploy the website every Friday.", exampleEs: "Despliego el sitio web cada viernes." },
    { word: "design", translation: "diseñar", example: "I design the app before I write any code.", exampleEs: "Diseño la app antes de escribir cualquier código." },
    { word: "develop", translation: "desarrollar", example: "We develop apps for small businesses.", exampleEs: "Desarrollamos apps para pequeños negocios." },
    { word: "disconnect", translation: "desconectar", example: "Disconnect the cable before you move the printer.", exampleEs: "Desconecta el cable antes de mover la impresora." },
    { word: "document", translation: "documentar", example: "You should document your code clearly.", exampleEs: "Deberías documentar tu código con claridad." },
    { word: "double-tap", translation: "tocar dos veces", example: "Double-tap the photo to like it.", exampleEs: "Toca dos veces la foto para darle like." },
    { word: "download", translation: "descargar", example: "I download a new app every week.", exampleEs: "Descargo una app nueva cada semana." },
    { word: "execute", translation: "ejecutar", example: "The program executes the task in seconds.", exampleEs: "El programa ejecuta la tarea en segundos." },
    { word: "fix a bug", translation: "arreglar un error", example: "She fixes bugs faster than anyone on the team.", exampleEs: "Ella arregla errores más rápido que nadie en el equipo." },
    { word: "fork", translation: "bifurcar (un repositorio)", example: "She forks the project to add her own feature.", exampleEs: "Ella bifurca el proyecto para agregar su propia función." },
    { word: "host", translation: "alojar", example: "We host our website on the cloud.", exampleEs: "Alojamos nuestro sitio web en la nube." },
    { word: "install", translation: "instalar", example: "I install updates every Friday.", exampleEs: "Instalo actualizaciones cada viernes." },
    { word: "integrate", translation: "integrar", example: "I integrate new tools into our workflow.", exampleEs: "Integro nuevas herramientas en nuestro flujo de trabajo." },
    { word: "launch", translation: "lanzar (un producto)", example: "The team launches the app next week.", exampleEs: "El equipo lanza la app la próxima semana." },
    { word: "log", translation: "registrar (un evento/error)", example: "The system logs every error automatically.", exampleEs: "El sistema registra cada error automáticamente." },
    { word: "log in", translation: "iniciar sesión", example: "I log in to my email every morning.", exampleEs: "Inicio sesión en mi correo cada mañana." },
    { word: "log out", translation: "cerrar sesión", example: "Don't forget to log out of shared computers.", exampleEs: "No olvides cerrar sesión en computadoras compartidas." },
    { word: "merge", translation: "fusionar", example: "We merge our code every afternoon.", exampleEs: "Fusionamos nuestro código cada tarde." },
    { word: "migrate", translation: "migrar (datos/sistemas)", example: "We migrate the database this weekend.", exampleEs: "Migramos la base de datos este fin de semana." },
    { word: "monitor", translation: "monitorear", example: "We monitor the servers 24/7.", exampleEs: "Monitoreamos los servidores las 24 horas." },
    { word: "optimize", translation: "optimizar", example: "We optimize the app to load faster.", exampleEs: "Optimizamos la app para que cargue más rápido." },
    { word: "patch", translation: "parchar / corregir", example: "They patch the security issue immediately.", exampleEs: "Ellos corrigen el problema de seguridad de inmediato." },
    { word: "plug in", translation: "enchufar", example: "Plug in the charger before you go to bed.", exampleEs: "Enchufa el cargador antes de dormir." },
    { word: "post", translation: "publicar", example: "We post photos every weekend.", exampleEs: "Publicamos fotos cada fin de semana." },
    { word: "program", translation: "programar", example: "She programs in three different languages.", exampleEs: "Ella programa en tres lenguajes diferentes." },
    { word: "publish", translation: "publicar", example: "I publish my code on an open-source site.", exampleEs: "Publico mi código en un sitio de código abierto." },
    { word: "pull", translation: "traer cambios (git pull)", example: "Pull the latest changes every morning.", exampleEs: "Trae los últimos cambios cada mañana." },
    { word: "push", translation: "subir cambios (git push)", example: "Push your changes before you leave.", exampleEs: "Sube tus cambios antes de irte." },
    { word: "record", translation: "grabar", example: "We record our meetings for the team.", exampleEs: "Grabamos nuestras reuniones para el equipo." },
    { word: "refactor", translation: "refactorizar", example: "We refactor old code every few months.", exampleEs: "Refactorizamos código viejo cada pocos meses." },
    { word: "release", translation: "lanzar una versión", example: "We release a new version every month.", exampleEs: "Lanzamos una nueva versión cada mes." },
    { word: "restart", translation: "reiniciar", example: "I restart my computer when it's slow.", exampleEs: "Reinicio mi computadora cuando está lenta." },
    { word: "review code", translation: "revisar código", example: "She reviews code before it's merged.", exampleEs: "Ella revisa el código antes de fusionarlo." },
    { word: "run", translation: "ejecutar / correr un programa", example: "I run the tests before every commit.", exampleEs: "Corro las pruebas antes de cada commit." },
    { word: "scale", translation: "escalar", example: "The company scales its servers every year.", exampleEs: "La empresa escala sus servidores cada año." },
    { word: "scroll", translation: "desplazarse", example: "I scroll through social media every morning.", exampleEs: "Me desplazo por las redes sociales cada mañana." },
    { word: "search", translation: "buscar", example: "I search for tutorials online.", exampleEs: "Busco tutoriales en línea." },
    { word: "set up", translation: "configurar / instalar por primera vez", example: "She sets up her new laptop in one hour.", exampleEs: "Ella configura su nueva laptop en una hora." },
    { word: "share", translation: "compartir", example: "I share playlists with my friends.", exampleEs: "Comparto listas de reproducción con mis amigos." },
    { word: "sign up", translation: "registrarse", example: "You sign up with your email address.", exampleEs: "Te registras con tu correo electrónico." },
    { word: "stream", translation: "transmitir en vivo / ver en streaming", example: "I stream music on my way to work.", exampleEs: "Transmito música de camino al trabajo." },
    { word: "swipe", translation: "deslizar", example: "Swipe left to see the next picture.", exampleEs: "Desliza a la izquierda para ver la siguiente imagen." },
    { word: "sync", translation: "sincronizar", example: "My phone syncs with my laptop automatically.", exampleEs: "Mi teléfono se sincroniza con mi laptop automáticamente." },
    { word: "take a photo", translation: "tomar una foto", example: "I take a photo of every sunset.", exampleEs: "Tomo una foto de cada atardecer." },
    { word: "take a screenshot", translation: "tomar una captura de pantalla", example: "Take a screenshot of the error message.", exampleEs: "Toma una captura de pantalla del mensaje de error." },
    { word: "tap", translation: "tocar (pantalla táctil)", example: "Tap the icon to open the app.", exampleEs: "Toca el ícono para abrir la app." },
    { word: "test", translation: "probar", example: "We test the app before every release.", exampleEs: "Probamos la app antes de cada lanzamiento." },
    { word: "text", translation: "enviar un mensaje de texto", example: "I text my mom every day.", exampleEs: "Le mando mensajes de texto a mi mamá todos los días." },
    { word: "troubleshoot", translation: "solucionar problemas", example: "I troubleshoot network issues every day.", exampleEs: "Soluciono problemas de red todos los días." },
    { word: "turn off", translation: "apagar", example: "We turn off our phones at night.", exampleEs: "Apagamos nuestros teléfonos en la noche." },
    { word: "turn on", translation: "encender", example: "Turn on the computer, please.", exampleEs: "Enciende la computadora, por favor." },
    { word: "uninstall", translation: "desinstalar", example: "You should uninstall apps you don't use.", exampleEs: "Deberías desinstalar apps que no usas." },
    { word: "unplug", translation: "desenchufar", example: "I unplug my laptop when it's fully charged.", exampleEs: "Desenchufo mi laptop cuando está completamente cargada." },
    { word: "update", translation: "actualizar", example: "We update our phones regularly.", exampleEs: "Actualizamos nuestros teléfonos regularmente." },
    { word: "upload", translation: "subir (un archivo)", example: "She uploads photos to the cloud every night.", exampleEs: "Ella sube fotos a la nube cada noche." },
    { word: "video call", translation: "hacer videollamada", example: "I video call my family every week.", exampleEs: "Hago videollamada con mi familia cada semana." }
  ], []);

  const allMusic = useMemo(() => [
    // Género
    { word: "blues", translation: "blues", type: "Género", example: "The blues has a lot of history in the US.", exampleEs: "El blues tiene mucha historia en Estados Unidos." },
    { word: "classical", translation: "música clásica", type: "Género", example: "I study while listening to classical music.", exampleEs: "Estudio mientras escucho música clásica." },
    { word: "country", translation: "country", type: "Género", example: "My favorite country song is about trucks.", exampleEs: "Mi canción country favorita habla de camionetas." },
    { word: "disco", translation: "disco", type: "Género", example: "Disco was huge in the 1970s.", exampleEs: "El disco fue enorme en los años 70." },
    { word: "electronic / EDM", translation: "electrónica", type: "Género", example: "We danced all night to EDM.", exampleEs: "Bailamos toda la noche música electrónica." },
    { word: "folk", translation: "folk", type: "Género", example: "She plays folk music on her guitar.", exampleEs: "Ella toca música folk en su guitarra." },
    { word: "hip-hop", translation: "hip-hop", type: "Género", example: "She listens to hip-hop every morning.", exampleEs: "Ella escucha hip-hop cada mañana." },
    { word: "indie", translation: "indie", type: "Género", example: "I discovered this indie band on a playlist.", exampleEs: "Descubrí esta banda indie en una lista de reproducción." },
    { word: "jazz", translation: "jazz", type: "Género", example: "This jazz song is so relaxing.", exampleEs: "Esta canción de jazz es muy relajante." },
    { word: "K-pop", translation: "K-pop", type: "Género", example: "My sister is a huge K-pop fan.", exampleEs: "Mi hermana es una gran fan del K-pop." },
    { word: "metal", translation: "metal", type: "Género", example: "Metal concerts are really loud.", exampleEs: "Los conciertos de metal son muy ruidosos." },
    { word: "pop", translation: "pop", type: "Género", example: "I really like pop music.", exampleEs: "Me gusta mucho la música pop." },
    { word: "punk", translation: "punk", type: "Género", example: "Punk music started in the 1970s.", exampleEs: "La música punk empezó en los años 70." },
    { word: "R&B", translation: "R&B", type: "Género", example: "R&B is great for a relaxing evening.", exampleEs: "El R&B es genial para una tarde relajada." },
    { word: "rap", translation: "rap", type: "Género", example: "He can rap really fast.", exampleEs: "Él puede rapear muy rápido." },
    { word: "reggaeton", translation: "reguetón", type: "Género", example: "Reggaeton is very popular in Latin America.", exampleEs: "El reguetón es muy popular en Latinoamérica." },
    { word: "rock", translation: "rock", type: "Género", example: "My dad loves classic rock.", exampleEs: "A mi papá le encanta el rock clásico." },
    { word: "salsa", translation: "salsa", type: "Género", example: "We dance salsa every weekend.", exampleEs: "Bailamos salsa cada fin de semana." },
    { word: "soul", translation: "soul", type: "Género", example: "This soul song has amazing vocals.", exampleEs: "Esta canción soul tiene una voz increíble." },
    // Vocabulario
    { word: "album", translation: "álbum", type: "Vocabulario", example: "Their new album has 12 songs.", exampleEs: "Su nuevo álbum tiene 12 canciones." },
    { word: "artist", translation: "artista", type: "Vocabulario", example: "Who's your favorite artist?", exampleEs: "¿Quién es tu artista favorito?" },
    { word: "band", translation: "banda", type: "Vocabulario", example: "They started a band in high school.", exampleEs: "Empezaron una banda en la preparatoria." },
    { word: "chorus", translation: "coro / estribillo", type: "Vocabulario", example: "Everyone sings along during the chorus.", exampleEs: "Todos cantan durante el estribillo." },
    { word: "concert", translation: "concierto", type: "Vocabulario", example: "We're going to a concert this weekend.", exampleEs: "Vamos a un concierto este fin de semana." },
    { word: "genre", translation: "género musical", type: "Vocabulario", example: "What's your favorite music genre?", exampleEs: "¿Cuál es tu género musical favorito?" },
    { word: "lyrics", translation: "letra (de una canción)", type: "Vocabulario", example: "I don't understand the lyrics of this song.", exampleEs: "No entiendo la letra de esta canción." },
    { word: "music video", translation: "video musical", type: "Vocabulario", example: "This music video has millions of views.", exampleEs: "Este video musical tiene millones de vistas." },
    { word: "playlist", translation: "lista de reproducción", type: "Vocabulario", example: "I have a playlist for working out.", exampleEs: "Tengo una lista de reproducción para hacer ejercicio." },
    { word: "song", translation: "canción", type: "Vocabulario", example: "This is my favorite song of the year.", exampleEs: "Esta es mi canción favorita del año." },
    { word: "streaming service", translation: "servicio de streaming", type: "Vocabulario", example: "I use a streaming service to listen to music.", exampleEs: "Uso un servicio de streaming para escuchar música." },
    { word: "tune", translation: "melodía", type: "Vocabulario", example: "That's a really catchy tune.", exampleEs: "Esa es una melodía muy pegajosa." },
    { word: "verse", translation: "estrofa", type: "Vocabulario", example: "The first verse of this song is beautiful.", exampleEs: "La primera estrofa de esta canción es hermosa." }
  ], []);

  const stressedExamples = useMemo(() => [
    { sentence: "I REALLY LOVE this SONG.", note: "Se acentúan las palabras de contenido: really, love, song." },
    { sentence: "She DOWNLOADS MUSIC every DAY.", note: "El verbo principal y el sustantivo llevan el acento, no el sujeto ni el auxiliar." },
    { sentence: "We WATCH VIDEOS on our PHONES.", note: "Watch, videos y phones son las palabras con más energía en la oración." }
  ], []);

  const filteredDevices = useMemo(() => sortByWord(allDevices.filter((item) =>
    item.word.toLowerCase().includes(deviceSearch.toLowerCase()) ||
    item.translation.toLowerCase().includes(deviceSearch.toLowerCase()) ||
    item.category.toLowerCase().includes(deviceSearch.toLowerCase())
  ), deviceSort), [allDevices, deviceSearch, deviceSort]);

  const filteredVerbs = useMemo(() => sortByWord(allTechVerbs.filter((item) =>
    item.word.toLowerCase().includes(verbSearch.toLowerCase()) ||
    item.translation.toLowerCase().includes(verbSearch.toLowerCase()) ||
    item.example.toLowerCase().includes(verbSearch.toLowerCase())
  ), verbSort), [allTechVerbs, verbSearch, verbSort]);

  const filteredMusic = useMemo(() => sortByWord(allMusic.filter((item) =>
    item.word.toLowerCase().includes(musicSearch.toLowerCase()) ||
    item.translation.toLowerCase().includes(musicSearch.toLowerCase()) ||
    item.type.toLowerCase().includes(musicSearch.toLowerCase())
  ), musicSort), [allMusic, musicSearch, musicSort]);

  const deviceTotalPages = Math.max(1, Math.ceil(filteredDevices.length / devicePageSize));
  const paginatedDevices = filteredDevices.slice((devicePage - 1) * devicePageSize, devicePage * devicePageSize);

  const verbTotalPages = Math.max(1, Math.ceil(filteredVerbs.length / verbPageSize));
  const paginatedVerbs = filteredVerbs.slice((verbPage - 1) * verbPageSize, verbPage * verbPageSize);

  const musicTotalPages = Math.max(1, Math.ceil(filteredMusic.length / musicPageSize));
  const paginatedMusic = filteredMusic.slice((musicPage - 1) * musicPageSize, musicPage * musicPageSize);

  const handleDeviceSearch = (value) => { setDeviceSearch(value); setDevicePage(1); };
  const handleDevicePageSize = (size) => { setDevicePageSize(size); setDevicePage(1); };
  const handleVerbSearch = (value) => { setVerbSearch(value); setVerbPage(1); };
  const handleVerbPageSize = (size) => { setVerbPageSize(size); setVerbPage(1); };
  const handleMusicSearch = (value) => { setMusicSearch(value); setMusicPage(1); };
  const handleMusicPageSize = (size) => { setMusicPageSize(size); setMusicPage(1); };

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 4 • Vocabulario</span>
        <h2>Tecnología, Verbos para Usarla (y Desarrollarla) y Música</h2>
        <p className="topic-intro">
          El vocabulario para hablar de tus dispositivos favoritos, cómo los usas y programas día a día, y qué música te encanta.
        </p>
      </div>

      {/* DISPOSITIVOS */}
      <div className="content-section">
        <h3>1. Dispositivos y Tecnología</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          {allDevices.length} palabras organizadas en dispositivos, cómputo/hardware, redes/nube y accesorios.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            className="search-input"
            style={{ flex: 1, minWidth: '200px' }}
            placeholder="🔍 Buscar dispositivo, traducción o categoría..."
            value={deviceSearch}
            onChange={(e) => handleDeviceSearch(e.target.value)}
          />
          <SortToggle mode={deviceSort} onChange={setDeviceSort} />
        </div>
        <span className="result-count">{filteredDevices.length} de {allDevices.length} palabras</span>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
          {paginatedDevices.map((item, index) => (
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

        <Pagination
          page={devicePage}
          totalPages={deviceTotalPages}
          totalItems={filteredDevices.length}
          onChange={setDevicePage}
          itemsPerPage={devicePageSize}
          onItemsPerPageChange={handleDevicePageSize}
        />
      </div>

      {/* VERBOS TECH */}
      <div className="content-section">
        <h3>2. Verbos para Usar (y Desarrollar) Tecnología</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          {allTechVerbs.length} verbos: desde uso cotidiano (download, swipe, charge) hasta desarrollo de software (code, debug, test, deploy, commit). Cada uno con un ejemplo de oración.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            className="search-input"
            style={{ flex: 1, minWidth: '200px' }}
            placeholder="🔍 Buscar verbo, traducción o ejemplo..."
            value={verbSearch}
            onChange={(e) => handleVerbSearch(e.target.value)}
          />
          <SortToggle mode={verbSort} onChange={setVerbSort} />
        </div>
        <span className="result-count">{filteredVerbs.length} de {allTechVerbs.length} verbos</span>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {paginatedVerbs.map((item, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span><strong>{item.word}</strong></span>
                <button className="audio-btn" onClick={() => speak(item.word)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ marginTop: '4px', fontSize: '0.85rem' }}>{item.translation}</div>
              <div className="example-en" style={{ justifyContent: 'space-between', marginTop: '10px', fontSize: '0.9rem' }}>
                <span>{item.example}</span>
                <button className="audio-btn" onClick={() => speak(item.example)} title="Escuchar ejemplo" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ fontSize: '0.85rem' }}>{item.exampleEs}</div>
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

      {/* MÚSICA */}
      <div className="content-section">
        <h3>3. Música: Géneros y Vocabulario</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Géneros musicales y las palabras que necesitas para hablar de tus canciones y artistas favoritos, cada uno con un ejemplo.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            className="search-input"
            style={{ flex: 1, minWidth: '200px' }}
            placeholder="🔍 Buscar género o palabra..."
            value={musicSearch}
            onChange={(e) => handleMusicSearch(e.target.value)}
          />
          <SortToggle mode={musicSort} onChange={setMusicSort} />
        </div>
        <span className="result-count">{filteredMusic.length} de {allMusic.length} palabras</span>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {paginatedMusic.map((item, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span><strong>{item.word}</strong></span>
                <button className="audio-btn" onClick={() => speak(item.word)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ marginTop: '4px', fontSize: '0.85rem' }}>
                {item.translation} <span className="category-tag" style={{ float: 'right' }}>{item.type}</span>
              </div>
              <div className="example-en" style={{ justifyContent: 'space-between', marginTop: '10px', fontSize: '0.9rem' }}>
                <span>{item.example}</span>
                <button className="audio-btn" onClick={() => speak(item.example)} title="Escuchar ejemplo" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ fontSize: '0.85rem' }}>{item.exampleEs}</div>
            </div>
          ))}
        </div>

        <Pagination
          page={musicPage}
          totalPages={musicTotalPages}
          totalItems={filteredMusic.length}
          onChange={setMusicPage}
          itemsPerPage={musicPageSize}
          onItemsPerPageChange={handleMusicPageSize}
        />
      </div>

      {/* PRONUNCIACIÓN */}
      <div className="content-section">
        <h3>4. Pronunciación: Palabras Acentuadas y Entonación Final</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          En inglés, no todas las palabras de una oración suenan igual de fuerte. Las palabras de <strong>contenido</strong> (sustantivos, verbos principales, adjetivos) se acentúan; las palabras de <strong>función</strong> (artículos, pronombres, preposiciones) casi no se acentúan.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {stressedExamples.map((item, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{item.sentence}</span>
                <button className="audio-btn" onClick={() => speak(item.sentence)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es">{item.note}</div>
            </div>
          ))}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>👂</span> Escuchar el final de la oración</div>
          <div className="insider-content">
            Cuando alguien termina una <strong>afirmación</strong>, su voz <strong>baja</strong> al final (entonación descendente) — así sabes que terminó de hablar. En una <strong>pregunta de sí/no</strong>, la voz <strong>sube</strong> al final. Practica escuchando: <em>"I love this song."</em> (baja) vs. <em>"Do you love this song?"</em> (sube).
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen de Vocabulario</h4>
          <p>Pon a prueba tu conocimiento de tecnología, verbos tech y música.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default VocabularyTopic;

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
  const [activitySearch, setActivitySearch] = useState('');
  const [activityPage, setActivityPage] = useState(1);
  const [activityPageSize, setActivityPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [activitySort, setActivitySort] = useState(DEFAULT_SORT);
  const [timeSearch, setTimeSearch] = useState('');

  const allActivities = useMemo(() => [
    // Mañana
    { word: "apply sunscreen", translation: "aplicarse protector solar", category: "Mañana", example: "I apply sunscreen before I leave the house.", exampleEs: "Me aplico protector solar antes de salir de casa." },
    { word: "brush your teeth", translation: "cepillarse los dientes", category: "Mañana", example: "We brush our teeth twice a day.", exampleEs: "Nos cepillamos los dientes dos veces al día." },
    { word: "catch the bus", translation: "tomar el autobús", category: "Mañana", example: "He catches the bus at the corner.", exampleEs: "Él toma el autobús en la esquina." },
    { word: "check the weather", translation: "revisar el clima", category: "Mañana", example: "He checks the weather before leaving.", exampleEs: "Él revisa el clima antes de salir." },
    { word: "check your phone", translation: "revisar el teléfono", category: "Mañana", example: "I check my phone as soon as I wake up.", exampleEs: "Reviso mi teléfono en cuanto despierto." },
    { word: "comb your hair", translation: "peinarse", category: "Mañana", example: "She combs her hair before school.", exampleEs: "Ella se peina antes de la escuela." },
    { word: "commute", translation: "trasladarse (casa-trabajo)", category: "Mañana", example: "My commute takes 40 minutes.", exampleEs: "Mi traslado toma 40 minutos." },
    { word: "do a morning workout", translation: "hacer ejercicio matutino", category: "Mañana", example: "She does a morning workout before breakfast.", exampleEs: "Ella hace ejercicio matutino antes del desayuno." },
    { word: "drink a glass of water", translation: "tomar un vaso de agua", category: "Mañana", example: "I drink a glass of water as soon as I wake up.", exampleEs: "Tomo un vaso de agua en cuanto despierto." },
    { word: "drive to work", translation: "manejar al trabajo", category: "Mañana", example: "She drives to work every day.", exampleEs: "Ella maneja al trabajo todos los días." },
    { word: "feed the cat", translation: "alimentar al gato", category: "Mañana", example: "She feeds the cat before school.", exampleEs: "Ella alimenta al gato antes de la escuela." },
    { word: "feed the dog", translation: "alimentar al perro", category: "Mañana", example: "We feed the dog at seven.", exampleEs: "Alimentamos al perro a las siete." },
    { word: "get dressed", translation: "vestirse", category: "Mañana", example: "I get dressed after breakfast.", exampleEs: "Me visto después del desayuno." },
    { word: "get up", translation: "levantarse", category: "Mañana", example: "She gets up early on weekdays.", exampleEs: "Ella se levanta temprano entre semana." },
    { word: "grab your keys", translation: "tomar las llaves", category: "Mañana", example: "I grab my keys and my bag.", exampleEs: "Tomo mis llaves y mi bolso." },
    { word: "have breakfast", translation: "desayunar", category: "Mañana", example: "We have breakfast together every day.", exampleEs: "Desayunamos juntos todos los días." },
    { word: "iron your shirt", translation: "planchar la camisa", category: "Mañana", example: "He irons his shirt before work.", exampleEs: "Él plancha su camisa antes del trabajo." },
    { word: "leave the house", translation: "salir de casa", category: "Mañana", example: "I leave the house at 7:45.", exampleEs: "Salgo de casa a las 7:45." },
    { word: "lock the door", translation: "cerrar la puerta con llave", category: "Mañana", example: "We lock the door every time we leave.", exampleEs: "Cerramos la puerta con llave cada vez que salimos." },
    { word: "make breakfast", translation: "preparar el desayuno", category: "Mañana", example: "My mom makes breakfast at 7 a.m.", exampleEs: "Mi mamá prepara el desayuno a las 7 a.m." },
    { word: "make coffee", translation: "preparar café", category: "Mañana", example: "My dad makes coffee every morning.", exampleEs: "Mi papá prepara café cada mañana." },
    { word: "make the bed", translation: "tender la cama", category: "Mañana", example: "I make the bed before breakfast.", exampleEs: "Tiendo la cama antes del desayuno." },
    { word: "meditate", translation: "meditar", category: "Mañana", example: "He meditates for ten minutes every morning.", exampleEs: "Él medita diez minutos cada mañana." },
    { word: "pack a lunch", translation: "preparar el almuerzo para llevar", category: "Mañana", example: "He packs a lunch for work every day.", exampleEs: "Él prepara su almuerzo para el trabajo todos los días." },
    { word: "pick out your clothes", translation: "elegir la ropa", category: "Mañana", example: "I pick out my clothes the night before.", exampleEs: "Elijo mi ropa la noche anterior." },
    { word: "put on makeup", translation: "maquillarse", category: "Mañana", example: "She puts on makeup before work.", exampleEs: "Ella se maquilla antes del trabajo." },
    { word: "put on your shoes", translation: "ponerse los zapatos", category: "Mañana", example: "She puts on her shoes and leaves.", exampleEs: "Ella se pone los zapatos y se va." },
    { word: "read the news", translation: "leer las noticias", category: "Mañana", example: "She reads the news over coffee.", exampleEs: "Ella lee las noticias mientras toma café." },
    { word: "shave", translation: "afeitarse", category: "Mañana", example: "My dad shaves every morning.", exampleEs: "Mi papá se afeita cada mañana." },
    { word: "stretch", translation: "estirarse", category: "Mañana", example: "I stretch for five minutes every morning.", exampleEs: "Me estiro cinco minutos cada mañana." },
    { word: "take a bath", translation: "bañarse (tina)", category: "Mañana", example: "My son takes a bath before bed.", exampleEs: "Mi hijo se baña antes de dormir." },
    { word: "take a shower", translation: "ducharse", category: "Mañana", example: "She takes a shower every morning.", exampleEs: "Ella se ducha todas las mañanas." },
    { word: "turn off the alarm", translation: "apagar la alarma", category: "Mañana", example: "He turns off the alarm and goes back to sleep.", exampleEs: "Él apaga la alarma y se vuelve a dormir." },
    { word: "wake up", translation: "despertarse", category: "Mañana", example: "I wake up at 6:30 every day.", exampleEs: "Me despierto a las 6:30 todos los días." },
    { word: "walk the dog", translation: "pasear al perro", category: "Mañana", example: "We walk the dog before work.", exampleEs: "Paseamos al perro antes del trabajo." },
    { word: "wash your face", translation: "lavarse la cara", category: "Mañana", example: "He washes his face with cold water.", exampleEs: "Él se lava la cara con agua fría." },
    { word: "water the plants", translation: "regar las plantas", category: "Mañana", example: "She waters the plants every morning.", exampleEs: "Ella riega las plantas cada mañana." },
    // Trabajo / Escuela
    { word: "answer emails", translation: "responder correos", category: "Trabajo / Escuela", example: "He answers emails first thing in the morning.", exampleEs: "Él responde correos a primera hora." },
    { word: "ask a question", translation: "hacer una pregunta", category: "Trabajo / Escuela", example: "He asks a question at the end of class.", exampleEs: "Él hace una pregunta al final de la clase." },
    { word: "attend a meeting", translation: "asistir a una junta", category: "Trabajo / Escuela", example: "She attends a meeting every Monday.", exampleEs: "Ella asiste a una junta cada lunes." },
    { word: "attend class", translation: "asistir a clase", category: "Trabajo / Escuela", example: "She attends class every afternoon.", exampleEs: "Ella asiste a clase cada tarde." },
    { word: "brainstorm ideas", translation: "generar ideas", category: "Trabajo / Escuela", example: "The team brainstorms ideas on Mondays.", exampleEs: "El equipo genera ideas los lunes." },
    { word: "check the schedule", translation: "revisar el horario", category: "Trabajo / Escuela", example: "We check the schedule every Monday.", exampleEs: "Revisamos el horario cada lunes." },
    { word: "clock in", translation: "registrar entrada", category: "Trabajo / Escuela", example: "He clocks in at eight.", exampleEs: "Él registra su entrada a las ocho." },
    { word: "clock out", translation: "registrar salida", category: "Trabajo / Escuela", example: "She clocks out at five.", exampleEs: "Ella registra su salida a las cinco." },
    { word: "do homework", translation: "hacer tarea", category: "Trabajo / Escuela", example: "We do homework together.", exampleEs: "Hacemos la tarea juntos." },
    { word: "finish school", translation: "terminar la escuela", category: "Trabajo / Escuela", example: "School finishes at 2 p.m.", exampleEs: "La escuela termina a las 2 p.m." },
    { word: "finish work", translation: "terminar de trabajar", category: "Trabajo / Escuela", example: "I finish work at 6 p.m.", exampleEs: "Termino de trabajar a las 6 p.m." },
    { word: "go home", translation: "ir a casa", category: "Trabajo / Escuela", example: "We go home after work.", exampleEs: "Nos vamos a casa después del trabajo." },
    { word: "have lunch", translation: "almorzar", category: "Trabajo / Escuela", example: "I have lunch at noon.", exampleEs: "Almuerzo al mediodía." },
    { word: "join a video call", translation: "unirse a una videollamada", category: "Trabajo / Escuela", example: "She joins a video call at nine.", exampleEs: "Ella se une a una videollamada a las nueve." },
    { word: "make a phone call", translation: "hacer una llamada", category: "Trabajo / Escuela", example: "She makes a phone call before lunch.", exampleEs: "Ella hace una llamada antes de almorzar." },
    { word: "prepare a presentation", translation: "preparar una presentación", category: "Trabajo / Escuela", example: "He prepares a presentation every week.", exampleEs: "Él prepara una presentación cada semana." },
    { word: "print documents", translation: "imprimir documentos", category: "Trabajo / Escuela", example: "I print documents in the morning.", exampleEs: "Imprimo documentos en la mañana." },
    { word: "raise your hand", translation: "levantar la mano", category: "Trabajo / Escuela", example: "Students raise their hands to speak.", exampleEs: "Los estudiantes levantan la mano para hablar." },
    { word: "review a project", translation: "revisar un proyecto", category: "Trabajo / Escuela", example: "We review a project every week.", exampleEs: "Revisamos un proyecto cada semana." },
    { word: "schedule an appointment", translation: "agendar una cita", category: "Trabajo / Escuela", example: "I schedule an appointment online.", exampleEs: "Agendo una cita en línea." },
    { word: "start school", translation: "empezar la escuela", category: "Trabajo / Escuela", example: "School starts at 8 a.m.", exampleEs: "La escuela empieza a las 8 a.m." },
    { word: "start work", translation: "empezar a trabajar", category: "Trabajo / Escuela", example: "I start work at 9 o'clock.", exampleEs: "Empiezo a trabajar a las 9." },
    { word: "study", translation: "estudiar", category: "Trabajo / Escuela", example: "He studies after school.", exampleEs: "Él estudia después de la escuela." },
    { word: "submit an assignment", translation: "entregar una tarea", category: "Trabajo / Escuela", example: "I submit an assignment every Friday.", exampleEs: "Entrego una tarea cada viernes." },
    { word: "take a break", translation: "tomar un descanso", category: "Trabajo / Escuela", example: "We take a break at 10:30.", exampleEs: "Tomamos un descanso a las 10:30." },
    { word: "take a test", translation: "presentar un examen", category: "Trabajo / Escuela", example: "She takes a test once a month.", exampleEs: "Ella presenta un examen una vez al mes." },
    { word: "take notes", translation: "tomar notas", category: "Trabajo / Escuela", example: "She takes notes during every class.", exampleEs: "Ella toma notas en cada clase." },
    { word: "teach a class", translation: "impartir una clase", category: "Trabajo / Escuela", example: "He teaches a class every afternoon.", exampleEs: "Él imparte una clase cada tarde." },
    { word: "turn on the computer", translation: "encender la computadora", category: "Trabajo / Escuela", example: "I turn on the computer first thing.", exampleEs: "Enciendo la computadora primero que nada." },
    { word: "work overtime", translation: "trabajar tiempo extra", category: "Trabajo / Escuela", example: "She works overtime on Fridays.", exampleEs: "Ella trabaja tiempo extra los viernes." },
    { word: "write a report", translation: "escribir un reporte", category: "Trabajo / Escuela", example: "He writes a report every Friday.", exampleEs: "Él escribe un reporte cada viernes." },
    // Tarde / Noche
    { word: "browse social media", translation: "navegar en redes sociales", category: "Tarde / Noche", example: "She browses social media before bed.", exampleEs: "Ella navega en redes sociales antes de dormir." },
    { word: "call a friend", translation: "llamar a un amigo", category: "Tarde / Noche", example: "I call a friend every Thursday.", exampleEs: "Llamo a un amigo cada jueves." },
    { word: "clean the house", translation: "limpiar la casa", category: "Tarde / Noche", example: "We clean the house every weekend.", exampleEs: "Limpiamos la casa cada fin de semana." },
    { word: "cook dinner", translation: "preparar la cena", category: "Tarde / Noche", example: "He cooks dinner every night.", exampleEs: "Él prepara la cena todas las noches." },
    { word: "do the laundry", translation: "lavar la ropa", category: "Tarde / Noche", example: "I do the laundry on Sundays.", exampleEs: "Lavo la ropa los domingos." },
    { word: "exercise / work out", translation: "hacer ejercicio", category: "Tarde / Noche", example: "She works out three times a week.", exampleEs: "Ella hace ejercicio tres veces a la semana." },
    { word: "fall asleep", translation: "quedarse dormido", category: "Tarde / Noche", example: "She falls asleep quickly.", exampleEs: "Ella se queda dormida rápido." },
    { word: "fold the laundry", translation: "doblar la ropa", category: "Tarde / Noche", example: "She folds the laundry after dinner.", exampleEs: "Ella dobla la ropa después de cenar." },
    { word: "get ready for bed", translation: "prepararse para dormir", category: "Tarde / Noche", example: "I get ready for bed at 10 p.m.", exampleEs: "Me preparo para dormir a las 10 p.m." },
    { word: "go for a walk", translation: "salir a caminar", category: "Tarde / Noche", example: "We go for a walk in the evening.", exampleEs: "Salimos a caminar por la tarde-noche." },
    { word: "go grocery shopping", translation: "ir de compras (supermercado)", category: "Tarde / Noche", example: "We go grocery shopping on Saturdays.", exampleEs: "Vamos al supermercado los sábados." },
    { word: "go to bed", translation: "irse a la cama", category: "Tarde / Noche", example: "We go to bed around 11 p.m.", exampleEs: "Nos vamos a la cama alrededor de las 11 p.m." },
    { word: "have dinner", translation: "cenar", category: "Tarde / Noche", example: "We have dinner at 8 p.m.", exampleEs: "Cenamos a las 8 p.m." },
    { word: "listen to a podcast", translation: "escuchar un podcast", category: "Tarde / Noche", example: "He listens to a podcast on his way home.", exampleEs: "Él escucha un podcast de camino a casa." },
    { word: "listen to music", translation: "escuchar música", category: "Tarde / Noche", example: "I listen to music while I cook.", exampleEs: "Escucho música mientras cocino." },
    { word: "mop the floor", translation: "trapear el piso", category: "Tarde / Noche", example: "We mop the floor on Saturdays.", exampleEs: "Trapeamos el piso los sábados." },
    { word: "organize the closet", translation: "organizar el clóset", category: "Tarde / Noche", example: "I organize my closet once a month.", exampleEs: "Organizo mi clóset una vez al mes." },
    { word: "pay the bills", translation: "pagar las cuentas", category: "Tarde / Noche", example: "We pay the bills at the end of the month.", exampleEs: "Pagamos las cuentas a fin de mes." },
    { word: "plan tomorrow", translation: "planear el día siguiente", category: "Tarde / Noche", example: "I plan tomorrow before I go to sleep.", exampleEs: "Planeo el día siguiente antes de dormir." },
    { word: "play video games", translation: "jugar videojuegos", category: "Tarde / Noche", example: "He plays video games after homework.", exampleEs: "Él juega videojuegos después de la tarea." },
    { word: "put the kids to bed", translation: "acostar a los niños", category: "Tarde / Noche", example: "She puts the kids to bed at eight.", exampleEs: "Ella acuesta a los niños a las ocho." },
    { word: "read a bedtime story", translation: "leer un cuento antes de dormir", category: "Tarde / Noche", example: "He reads a bedtime story every night.", exampleEs: "Él lee un cuento antes de dormir cada noche." },
    { word: "read a book", translation: "leer un libro", category: "Tarde / Noche", example: "She reads a book before bed.", exampleEs: "Ella lee un libro antes de dormir." },
    { word: "relax", translation: "relajarse", category: "Tarde / Noche", example: "I relax on the sofa after work.", exampleEs: "Me relajo en el sofá después del trabajo." },
    { word: "run errands", translation: "hacer mandados", category: "Tarde / Noche", example: "I run errands on my way home.", exampleEs: "Hago mandados de camino a casa." },
    { word: "set the alarm", translation: "poner la alarma", category: "Tarde / Noche", example: "He sets the alarm for 6 a.m.", exampleEs: "Él pone la alarma a las 6 a.m." },
    { word: "sweep the floor", translation: "barrer el piso", category: "Tarde / Noche", example: "He sweeps the floor after dinner.", exampleEs: "Él barre el piso después de cenar." },
    { word: "take a nap", translation: "tomar una siesta", category: "Tarde / Noche", example: "My grandpa takes a nap every afternoon.", exampleEs: "Mi abuelo toma una siesta cada tarde." },
    { word: "take out the trash", translation: "sacar la basura", category: "Tarde / Noche", example: "I take out the trash every night.", exampleEs: "Saco la basura todas las noches." },
    { word: "tidy up", translation: "ordenar", category: "Tarde / Noche", example: "I tidy up the living room every evening.", exampleEs: "Ordeno la sala cada noche." },
    { word: "turn off the lights", translation: "apagar las luces", category: "Tarde / Noche", example: "I turn off the lights before I sleep.", exampleEs: "Apago las luces antes de dormir." },
    { word: "vacuum the floor", translation: "aspirar el piso", category: "Tarde / Noche", example: "She vacuums the floor twice a week.", exampleEs: "Ella aspira el piso dos veces por semana." },
    { word: "video chat with family", translation: "hacer videollamada con la familia", category: "Tarde / Noche", example: "We video chat with family on Sundays.", exampleEs: "Hacemos videollamada con la familia los domingos." },
    { word: "wash the dishes", translation: "lavar los platos", category: "Tarde / Noche", example: "She washes the dishes after dinner.", exampleEs: "Ella lava los platos después de cenar." },
    { word: "watch TV", translation: "ver televisión", category: "Tarde / Noche", example: "We watch TV after dinner.", exampleEs: "Vemos televisión después de cenar." },
    { word: "water the garden", translation: "regar el jardín", category: "Tarde / Noche", example: "He waters the garden in the evening.", exampleEs: "Él riega el jardín por la tarde." },
    { word: "write in a diary", translation: "escribir en un diario", category: "Tarde / Noche", example: "She writes in her diary every night.", exampleEs: "Ella escribe en su diario cada noche." },
    // Fin de Semana
    { word: "attend a birthday party", translation: "asistir a una fiesta de cumpleaños", category: "Fin de Semana", example: "She attends a birthday party almost every month.", exampleEs: "Ella asiste a una fiesta de cumpleaños casi cada mes." },
    { word: "do yard work", translation: "hacer trabajo de jardín", category: "Fin de Semana", example: "We do yard work on Saturday mornings.", exampleEs: "Hacemos trabajo de jardín los sábados en la mañana." },
    { word: "go for a bike ride", translation: "salir en bicicleta", category: "Fin de Semana", example: "He goes for a bike ride on Sundays.", exampleEs: "Él sale en bicicleta los domingos." },
    { word: "go for a hike", translation: "ir de excursión", category: "Fin de Semana", example: "They go for a hike once a month.", exampleEs: "Ellos van de excursión una vez al mes." },
    { word: "go out", translation: "salir (a divertirse)", category: "Fin de Semana", example: "They go out for dinner every Friday.", exampleEs: "Ellos salen a cenar cada viernes." },
    { word: "go shopping", translation: "ir de compras", category: "Fin de Semana", example: "She goes shopping once a month.", exampleEs: "Ella va de compras una vez al mes." },
    { word: "go to a farmers market", translation: "ir a un mercado local", category: "Fin de Semana", example: "She goes to a farmers market every Saturday.", exampleEs: "Ella va a un mercado local cada sábado." },
    { word: "go to a religious service", translation: "ir a un servicio religioso", category: "Fin de Semana", example: "They go to a religious service on Sundays.", exampleEs: "Ellos van a un servicio religioso los domingos." },
    { word: "go to the gym", translation: "ir al gimnasio", category: "Fin de Semana", example: "He goes to the gym on weekends.", exampleEs: "Él va al gimnasio los fines de semana." },
    { word: "go to the movies", translation: "ir al cine", category: "Fin de Semana", example: "We go to the movies once a month.", exampleEs: "Vamos al cine una vez al mes." },
    { word: "have a lie-in", translation: "quedarse en cama sin prisa", category: "Fin de Semana", example: "We have a lie-in on rainy Sundays.", exampleEs: "Nos quedamos en cama sin prisa los domingos lluviosos." },
    { word: "have brunch", translation: "desayunar-almorzar (brunch)", category: "Fin de Semana", example: "They have brunch on Sundays.", exampleEs: "Ellos tienen brunch los domingos." },
    { word: "host a barbecue", translation: "organizar una parrillada", category: "Fin de Semana", example: "We host a barbecue in the summer.", exampleEs: "Organizamos una parrillada en verano." },
    { word: "meet friends", translation: "reunirse con amigos", category: "Fin de Semana", example: "We meet friends on Saturday nights.", exampleEs: "Nos reunimos con amigos los sábados en la noche." },
    { word: "sleep in", translation: "dormir hasta tarde", category: "Fin de Semana", example: "I sleep in on Sundays.", exampleEs: "Duermo hasta tarde los domingos." },
    { word: "sleep late", translation: "dormir hasta tarde", category: "Fin de Semana", example: "We sleep late on Saturdays.", exampleEs: "Dormimos hasta tarde los sábados." },
    { word: "visit family", translation: "visitar a la familia", category: "Fin de Semana", example: "We visit family on Sundays.", exampleEs: "Visitamos a la familia los domingos." },
    { word: "volunteer", translation: "hacer voluntariado", category: "Fin de Semana", example: "He volunteers at a shelter on weekends.", exampleEs: "Él hace voluntariado en un refugio los fines de semana." },
    { word: "wash the car", translation: "lavar el carro", category: "Fin de Semana", example: "He washes the car on weekends.", exampleEs: "Él lava el carro los fines de semana." },
    // Cuidado Personal y Salud
    { word: "apply lotion", translation: "aplicarse crema", category: "Cuidado Personal y Salud", example: "He applies lotion after his shower.", exampleEs: "Él se aplica crema después de ducharse." },
    { word: "check your blood pressure", translation: "revisarse la presión arterial", category: "Cuidado Personal y Salud", example: "My grandpa checks his blood pressure every morning.", exampleEs: "Mi abuelo se revisa la presión arterial cada mañana." },
    { word: "cool down after exercise", translation: "enfriar después del ejercicio", category: "Cuidado Personal y Salud", example: "He cools down after exercise.", exampleEs: "Él se enfría después del ejercicio." },
    { word: "do a skincare routine", translation: "hacer una rutina de cuidado facial", category: "Cuidado Personal y Salud", example: "I do a skincare routine every night.", exampleEs: "Hago una rutina de cuidado facial cada noche." },
    { word: "do pilates", translation: "hacer pilates", category: "Cuidado Personal y Salud", example: "She does pilates twice a week.", exampleEs: "Ella hace pilates dos veces por semana." },
    { word: "do yoga", translation: "hacer yoga", category: "Cuidado Personal y Salud", example: "He does yoga every morning.", exampleEs: "Él hace yoga cada mañana." },
    { word: "get a haircut", translation: "cortarse el cabello", category: "Cuidado Personal y Salud", example: "I get a haircut once a month.", exampleEs: "Me corto el cabello una vez al mes." },
    { word: "get a massage", translation: "recibir un masaje", category: "Cuidado Personal y Salud", example: "She gets a massage once a month.", exampleEs: "Ella recibe un masaje una vez al mes." },
    { word: "go for a run", translation: "salir a correr", category: "Cuidado Personal y Salud", example: "He goes for a run every morning.", exampleEs: "Él sale a correr cada mañana." },
    { word: "go for a swim", translation: "ir a nadar", category: "Cuidado Personal y Salud", example: "We go for a swim on hot days.", exampleEs: "Vamos a nadar en días calurosos." },
    { word: "go to the dentist", translation: "ir al dentista", category: "Cuidado Personal y Salud", example: "We go to the dentist twice a year.", exampleEs: "Vamos al dentista dos veces al año." },
    { word: "go to the doctor", translation: "ir al doctor", category: "Cuidado Personal y Salud", example: "He goes to the doctor once a year.", exampleEs: "Él va al doctor una vez al año." },
    { word: "lift weights", translation: "levantar pesas", category: "Cuidado Personal y Salud", example: "I lift weights three times a week.", exampleEs: "Levanto pesas tres veces por semana." },
    { word: "stretch before exercise", translation: "estirar antes de hacer ejercicio", category: "Cuidado Personal y Salud", example: "She stretches before exercise.", exampleEs: "Ella se estira antes de hacer ejercicio." },
    { word: "take medicine", translation: "tomar medicina", category: "Cuidado Personal y Salud", example: "She takes medicine after breakfast.", exampleEs: "Ella toma medicina después del desayuno." },
    { word: "take vitamins", translation: "tomar vitaminas", category: "Cuidado Personal y Salud", example: "I take vitamins every morning.", exampleEs: "Tomo vitaminas cada mañana." },
    { word: "track your steps", translation: "contar tus pasos", category: "Cuidado Personal y Salud", example: "I track my steps every day.", exampleEs: "Cuento mis pasos todos los días." },
    { word: "trim your nails", translation: "cortarse las uñas", category: "Cuidado Personal y Salud", example: "She trims her nails every week.", exampleEs: "Ella se corta las uñas cada semana." },
    // Quehaceres del Hogar
    { word: "change a lightbulb", translation: "cambiar un foco", category: "Quehaceres del Hogar", example: "I change a lightbulb when one burns out.", exampleEs: "Cambio un foco cuando se funde." },
    { word: "change the sheets", translation: "cambiar las sábanas", category: "Quehaceres del Hogar", example: "She changes the sheets every week.", exampleEs: "Ella cambia las sábanas cada semana." },
    { word: "clean the bathroom", translation: "limpiar el baño", category: "Quehaceres del Hogar", example: "I clean the bathroom every weekend.", exampleEs: "Limpio el baño cada fin de semana." },
    { word: "clean the car", translation: "limpiar el carro por dentro", category: "Quehaceres del Hogar", example: "We clean the car once a month.", exampleEs: "Limpiamos el carro por dentro una vez al mes." },
    { word: "declutter a room", translation: "despejar un cuarto", category: "Quehaceres del Hogar", example: "I declutter a room every season.", exampleEs: "Despejo un cuarto cada temporada." },
    { word: "donate old clothes", translation: "donar ropa vieja", category: "Quehaceres del Hogar", example: "She donates old clothes twice a year.", exampleEs: "Ella dona ropa vieja dos veces al año." },
    { word: "dust the furniture", translation: "sacudir los muebles", category: "Quehaceres del Hogar", example: "He dusts the furniture on Saturdays.", exampleEs: "Él sacude los muebles los sábados." },
    { word: "empty the dishwasher", translation: "vaciar el lavavajillas", category: "Quehaceres del Hogar", example: "He empties the dishwasher every morning.", exampleEs: "Él vacía el lavavajillas cada mañana." },
    { word: "fix a leak", translation: "arreglar una fuga", category: "Quehaceres del Hogar", example: "My dad fixes a leak once in a while.", exampleEs: "Mi papá arregla una fuga de vez en cuando." },
    { word: "load the dishwasher", translation: "cargar el lavavajillas", category: "Quehaceres del Hogar", example: "I load the dishwasher after dinner.", exampleEs: "Cargo el lavavajillas después de cenar." },
    { word: "make the beds", translation: "tender las camas", category: "Quehaceres del Hogar", example: "She makes the beds every morning.", exampleEs: "Ella tiende las camas cada mañana." },
    { word: "organize the fridge", translation: "organizar el refrigerador", category: "Quehaceres del Hogar", example: "She organizes the fridge every Sunday.", exampleEs: "Ella organiza el refrigerador cada domingo." },
    { word: "put away groceries", translation: "guardar las compras", category: "Quehaceres del Hogar", example: "We put away groceries after shopping.", exampleEs: "Guardamos las compras después de ir al supermercado." },
    { word: "recycle", translation: "reciclar", category: "Quehaceres del Hogar", example: "We recycle every week.", exampleEs: "Reciclamos cada semana." },
    { word: "repair something", translation: "reparar algo", category: "Quehaceres del Hogar", example: "He repairs something around the house every weekend.", exampleEs: "Él repara algo en la casa cada fin de semana." },
    { word: "sort the recycling", translation: "separar el reciclaje", category: "Quehaceres del Hogar", example: "She sorts the recycling on Sundays.", exampleEs: "Ella separa el reciclaje los domingos." },
    { word: "sweep the porch", translation: "barrer el porche", category: "Quehaceres del Hogar", example: "He sweeps the porch every morning.", exampleEs: "Él barre el porche cada mañana." },
    { word: "wash the windows", translation: "lavar las ventanas", category: "Quehaceres del Hogar", example: "We wash the windows once a month.", exampleEs: "Lavamos las ventanas una vez al mes." },
    // Comidas y Bebidas
    { word: "boil water", translation: "hervir agua", category: "Comidas y Bebidas", example: "I boil water for my coffee.", exampleEs: "Hiervo agua para mi café." },
    { word: "brew tea", translation: "preparar té", category: "Comidas y Bebidas", example: "She brews tea every afternoon.", exampleEs: "Ella prepara té cada tarde." },
    { word: "clear the table", translation: "levantar la mesa", category: "Comidas y Bebidas", example: "He clears the table after dinner.", exampleEs: "Él levanta la mesa después de cenar." },
    { word: "drink coffee", translation: "tomar café", category: "Comidas y Bebidas", example: "She drinks coffee every morning.", exampleEs: "Ella toma café cada mañana." },
    { word: "drink tea", translation: "tomar té", category: "Comidas y Bebidas", example: "He drinks tea in the evening.", exampleEs: "Él toma té por la noche." },
    { word: "eat a snack", translation: "comer una botana", category: "Comidas y Bebidas", example: "I eat a snack in the afternoon.", exampleEs: "Como una botana por la tarde." },
    { word: "have a smoothie", translation: "tomar un licuado", category: "Comidas y Bebidas", example: "I have a smoothie after my workout.", exampleEs: "Tomo un licuado después de hacer ejercicio." },
    { word: "make a grocery list", translation: "hacer la lista del súper", category: "Comidas y Bebidas", example: "I make a grocery list every week.", exampleEs: "Hago la lista del súper cada semana." },
    { word: "make a sandwich", translation: "preparar un sándwich", category: "Comidas y Bebidas", example: "He makes a sandwich for lunch.", exampleEs: "Él prepara un sándwich para el almuerzo." },
    { word: "meal prep", translation: "preparar comidas para la semana", category: "Comidas y Bebidas", example: "We meal prep on Sundays.", exampleEs: "Preparamos las comidas de la semana los domingos." },
    { word: "order delivery", translation: "pedir comida a domicilio", category: "Comidas y Bebidas", example: "They order delivery once a week.", exampleEs: "Ellos piden comida a domicilio una vez por semana." },
    { word: "order takeout", translation: "pedir comida para llevar", category: "Comidas y Bebidas", example: "We order takeout on Fridays.", exampleEs: "Pedimos comida para llevar los viernes." },
    { word: "set the table", translation: "poner la mesa", category: "Comidas y Bebidas", example: "She sets the table before dinner.", exampleEs: "Ella pone la mesa antes de cenar." },
    { word: "warm up leftovers", translation: "calentar las sobras", category: "Comidas y Bebidas", example: "We warm up leftovers for lunch.", exampleEs: "Calentamos las sobras para el almuerzo." },
    // Transporte
    { word: "book a rideshare", translation: "pedir un Uber/rideshare", category: "Transporte", example: "He books a rideshare to the airport.", exampleEs: "Él pide un rideshare al aeropuerto." },
    { word: "carpool", translation: "compartir el auto (carpool)", category: "Transporte", example: "We carpool with our neighbors.", exampleEs: "Compartimos el auto con nuestros vecinos." },
    { word: "fill up the gas tank", translation: "llenar el tanque de gasolina", category: "Transporte", example: "He fills up the gas tank on Fridays.", exampleEs: "Él llena el tanque de gasolina los viernes." },
    { word: "get a ride", translation: "pedir un aventón", category: "Transporte", example: "I get a ride from my brother sometimes.", exampleEs: "A veces pido un aventón a mi hermano." },
    { word: "park the car", translation: "estacionar el carro", category: "Transporte", example: "She parks the car in the garage.", exampleEs: "Ella estaciona el carro en el garaje." },
    { word: "ride a bike to work", translation: "ir al trabajo en bicicleta", category: "Transporte", example: "I ride a bike to work in the summer.", exampleEs: "Voy al trabajo en bicicleta en verano." },
    { word: "take a taxi", translation: "tomar un taxi", category: "Transporte", example: "She takes a taxi when it rains.", exampleEs: "Ella toma un taxi cuando llueve." },
    { word: "take the subway", translation: "tomar el metro", category: "Transporte", example: "He takes the subway to work.", exampleEs: "Él toma el metro para ir al trabajo." },
    { word: "take the train", translation: "tomar el tren", category: "Transporte", example: "She takes the train every morning.", exampleEs: "Ella toma el tren cada mañana." },
    { word: "wait for the bus", translation: "esperar el autobús", category: "Transporte", example: "We wait for the bus every morning.", exampleEs: "Esperamos el autobús cada mañana." },
    { word: "walk to school", translation: "caminar a la escuela", category: "Transporte", example: "The kids walk to school together.", exampleEs: "Los niños caminan juntos a la escuela." },
    { word: "walk to work", translation: "caminar al trabajo", category: "Transporte", example: "He walks to work every day.", exampleEs: "Él camina al trabajo todos los días." },
    // Tecnología y Comunicación
    { word: "attend a webinar", translation: "asistir a un webinar", category: "Tecnología y Comunicación", example: "He attends a webinar every Wednesday.", exampleEs: "Él asiste a un webinar cada miércoles." },
    { word: "back up your phone", translation: "respaldar el teléfono", category: "Tecnología y Comunicación", example: "She backs up her phone every month.", exampleEs: "Ella respalda su teléfono cada mes." },
    { word: "check notifications", translation: "revisar notificaciones", category: "Tecnología y Comunicación", example: "He checks notifications every hour.", exampleEs: "Él revisa notificaciones cada hora." },
    { word: "comment on a post", translation: "comentar una publicación", category: "Tecnología y Comunicación", example: "He comments on a post every now and then.", exampleEs: "Él comenta una publicación de vez en cuando." },
    { word: "like a photo", translation: "darle like a una foto", category: "Tecnología y Comunicación", example: "I like a photo before I keep scrolling.", exampleEs: "Le doy like a una foto antes de seguir viendo." },
    { word: "listen to a playlist", translation: "escuchar una lista de reproducción", category: "Tecnología y Comunicación", example: "She listens to a playlist on her commute.", exampleEs: "Ella escucha una lista de reproducción en su traslado." },
    { word: "make a video call", translation: "hacer una videollamada", category: "Tecnología y Comunicación", example: "We make a video call every Sunday.", exampleEs: "Hacemos una videollamada cada domingo." },
    { word: "post a story", translation: "publicar una historia", category: "Tecnología y Comunicación", example: "She posts a story almost every day.", exampleEs: "Ella publica una historia casi todos los días." },
    { word: "reply to messages", translation: "responder mensajes", category: "Tecnología y Comunicación", example: "She replies to messages during her break.", exampleEs: "Ella responde mensajes durante su descanso." },
    { word: "scroll through social media", translation: "desplazarse por redes sociales", category: "Tecnología y Comunicación", example: "He scrolls through social media before bed.", exampleEs: "Él se desplaza por redes sociales antes de dormir." },
    { word: "send a text message", translation: "enviar un mensaje de texto", category: "Tecnología y Comunicación", example: "I send a text message to my mom every morning.", exampleEs: "Le envío un mensaje de texto a mi mamá cada mañana." },
    { word: "send an email", translation: "enviar un correo", category: "Tecnología y Comunicación", example: "I send an email first thing at work.", exampleEs: "Envío un correo a primera hora en el trabajo." },
    { word: "update an app", translation: "actualizar una app", category: "Tecnología y Comunicación", example: "I update my apps once a week.", exampleEs: "Actualizo mis apps una vez por semana." },
    { word: "watch a video", translation: "ver un video", category: "Tecnología y Comunicación", example: "I watch a video while I eat breakfast.", exampleEs: "Veo un video mientras desayuno." },
    // Ocio y Entretenimiento
    { word: "bake", translation: "hornear", category: "Ocio y Entretenimiento", example: "We bake cookies on Sundays.", exampleEs: "Horneamos galletas los domingos." },
    { word: "dance", translation: "bailar", category: "Ocio y Entretenimiento", example: "They dance every Friday night.", exampleEs: "Ellos bailan cada viernes en la noche." },
    { word: "do a puzzle", translation: "armar un rompecabezas", category: "Ocio y Entretenimiento", example: "She does a puzzle on rainy days.", exampleEs: "Ella arma un rompecabezas los días lluviosos." },
    { word: "draw", translation: "dibujar", category: "Ocio y Entretenimiento", example: "I draw in my free time.", exampleEs: "Dibujo en mi tiempo libre." },
    { word: "garden", translation: "cuidar el jardín (pasatiempo)", category: "Ocio y Entretenimiento", example: "She gardens on Saturday mornings.", exampleEs: "Ella cuida el jardín los sábados en la mañana." },
    { word: "go to a concert", translation: "ir a un concierto", category: "Ocio y Entretenimiento", example: "We go to a concert once in a while.", exampleEs: "Vamos a un concierto de vez en cuando." },
    { word: "go to a museum", translation: "ir a un museo", category: "Ocio y Entretenimiento", example: "She goes to a museum once a month.", exampleEs: "Ella va a un museo una vez al mes." },
    { word: "knit", translation: "tejer", category: "Ocio y Entretenimiento", example: "My grandma knits every evening.", exampleEs: "Mi abuela teje cada noche." },
    { word: "paint", translation: "pintar", category: "Ocio y Entretenimiento", example: "He paints on weekends.", exampleEs: "Él pinta los fines de semana." },
    { word: "play a board game", translation: "jugar un juego de mesa", category: "Ocio y Entretenimiento", example: "We play a board game on family night.", exampleEs: "Jugamos un juego de mesa en la noche familiar." },
    { word: "play an instrument", translation: "tocar un instrumento", category: "Ocio y Entretenimiento", example: "He plays an instrument every day.", exampleEs: "Él toca un instrumento todos los días." },
    { word: "play cards", translation: "jugar cartas", category: "Ocio y Entretenimiento", example: "They play cards after dinner.", exampleEs: "Ellos juegan cartas después de cenar." },
    { word: "sing", translation: "cantar", category: "Ocio y Entretenimiento", example: "She sings in the shower.", exampleEs: "Ella canta en la ducha." },
    { word: "take photos", translation: "tomar fotos", category: "Ocio y Entretenimiento", example: "He takes photos on every trip.", exampleEs: "Él toma fotos en cada viaje." },
    // Familia y Mascotas
    { word: "babysit", translation: "cuidar niños", category: "Familia y Mascotas", example: "She babysits her niece on weekends.", exampleEs: "Ella cuida a su sobrina los fines de semana." },
    { word: "call your parents", translation: "llamar a tus papás", category: "Familia y Mascotas", example: "I call my parents every Sunday.", exampleEs: "Llamo a mis papás cada domingo." },
    { word: "drop off the kids", translation: "dejar a los niños", category: "Familia y Mascotas", example: "She drops off the kids at school.", exampleEs: "Ella deja a los niños en la escuela." },
    { word: "help with homework", translation: "ayudar con la tarea", category: "Familia y Mascotas", example: "I help with homework after dinner.", exampleEs: "Ayudo con la tarea después de cenar." },
    { word: "pick up the kids", translation: "recoger a los niños", category: "Familia y Mascotas", example: "He picks up the kids at three.", exampleEs: "Él recoge a los niños a las tres." },
    { word: "play with your kids", translation: "jugar con tus hijos", category: "Familia y Mascotas", example: "We play with our kids every evening.", exampleEs: "Jugamos con nuestros hijos cada tarde-noche." },
    { word: "take the dog to the vet", translation: "llevar al perro al veterinario", category: "Familia y Mascotas", example: "He takes the dog to the vet once a year.", exampleEs: "Él lleva al perro al veterinario una vez al año." },
    { word: "video call your grandmother", translation: "hacer videollamada con la abuela", category: "Familia y Mascotas", example: "She video calls her grandmother every week.", exampleEs: "Ella hace videollamada con su abuela cada semana." },
    { word: "visit grandparents", translation: "visitar a los abuelos", category: "Familia y Mascotas", example: "We visit our grandparents every Sunday.", exampleEs: "Visitamos a nuestros abuelos cada domingo." },
    { word: "walk the pets", translation: "pasear a las mascotas", category: "Familia y Mascotas", example: "She walks the pets twice a day.", exampleEs: "Ella pasea a las mascotas dos veces al día." }
  ], []);

  const timeExpressions = useMemo(() => [
    { time: "7:00", phrase: "seven o'clock", note: "En punto: se usa 'o'clock' solo con horas exactas." },
    { time: "7:05", phrase: "five past seven", note: "'Past' se usa del minuto 1 al 30." },
    { time: "7:15", phrase: "a quarter past seven", note: "15 minutos = 'a quarter' (un cuarto)." },
    { time: "7:30", phrase: "half past seven", note: "30 minutos = 'half' (media)." },
    { time: "7:45", phrase: "a quarter to eight", note: "Después del minuto 30, se usa 'to' + la siguiente hora." },
    { time: "7:50", phrase: "ten to eight", note: "'To' se usa del minuto 31 al 59, contando hacia la siguiente hora." },
    { time: "12:00 (día)", phrase: "noon / midday", note: "Mediodía." },
    { time: "12:00 (noche)", phrase: "midnight", note: "Medianoche." },
    { time: "7:20", phrase: "seven twenty (digital) / twenty past seven", note: "Forma digital directa vs. forma tradicional." }
  ], []);

  const daysOfWeek = useMemo(() => [
    { word: "Monday", translation: "lunes" },
    { word: "Tuesday", translation: "martes" },
    { word: "Wednesday", translation: "miércoles" },
    { word: "Thursday", translation: "jueves" },
    { word: "Friday", translation: "viernes" },
    { word: "Saturday", translation: "sábado" },
    { word: "Sunday", translation: "domingo" }
  ], []);

  const frequencyAdverbs = useMemo(() => [
    { word: "always", translation: "siempre", percent: "100%", example: "I always wake up at 6 a.m." },
    { word: "usually / generally", translation: "usualmente / generalmente", percent: "~90%", example: "She usually has breakfast at home." },
    { word: "normally", translation: "normalmente", percent: "~85%", example: "We normally eat dinner at eight." },
    { word: "often / frequently", translation: "frecuentemente / a menudo", percent: "~70%", example: "We often go to the gym after work." },
    { word: "sometimes", translation: "a veces", percent: "~50%", example: "He sometimes skips breakfast." },
    { word: "occasionally", translation: "ocasionalmente", percent: "~30%", example: "I occasionally work on weekends." },
    { word: "rarely / seldom", translation: "rara vez", percent: "~10%", example: "They rarely eat out on weekdays." },
    { word: "hardly ever", translation: "casi nunca", percent: "~5%", example: "She hardly ever watches TV during the week." },
    { word: "never", translation: "nunca", percent: "0%", example: "I never check my phone in bed." }
  ], []);

  const filteredActivities = useMemo(() => sortByWord(allActivities.filter((item) =>
    item.word.toLowerCase().includes(activitySearch.toLowerCase()) ||
    item.translation.toLowerCase().includes(activitySearch.toLowerCase()) ||
    item.category.toLowerCase().includes(activitySearch.toLowerCase())
  ), activitySort), [allActivities, activitySearch, activitySort]);

  const filteredTime = useMemo(() => timeExpressions.filter((item) =>
    item.phrase.toLowerCase().includes(timeSearch.toLowerCase()) ||
    item.time.toLowerCase().includes(timeSearch.toLowerCase())
  ), [timeExpressions, timeSearch]);

  const activityTotalPages = Math.max(1, Math.ceil(filteredActivities.length / activityPageSize));
  const paginatedActivities = filteredActivities.slice((activityPage - 1) * activityPageSize, activityPage * activityPageSize);

  const handleActivitySearch = (value) => { setActivitySearch(value); setActivityPage(1); };
  const handleActivityPageSize = (size) => { setActivityPageSize(size); setActivityPage(1); };

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 5 • Vocabulario</span>
        <h2>Actividades Diarias y la Hora</h2>
        <p className="topic-intro">
          Todo el vocabulario para describir tu rutina, decir la hora correctamente, y hablar de la frecuencia con la que haces las cosas.
        </p>
      </div>

      {/* ACTIVIDADES DIARIAS */}
      <div className="content-section">
        <h3>1. Actividades y Rutinas Diarias</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          {allActivities.length} actividades organizadas por momento del día, cada una con un ejemplo de oración.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            className="search-input"
            style={{ flex: 1, minWidth: '200px' }}
            placeholder="🔍 Buscar actividad, traducción o categoría..."
            value={activitySearch}
            onChange={(e) => handleActivitySearch(e.target.value)}
          />
          <SortToggle mode={activitySort} onChange={setActivitySort} />
        </div>
        <span className="result-count">{filteredActivities.length} de {allActivities.length} actividades</span>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {paginatedActivities.map((item, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span><strong>{item.word}</strong></span>
                <button className="audio-btn" onClick={() => speak(item.word)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ marginTop: '4px', fontSize: '0.85rem' }}>
                {item.translation} <span className="category-tag" style={{ float: 'right' }}>{item.category}</span>
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
          page={activityPage}
          totalPages={activityTotalPages}
          totalItems={filteredActivities.length}
          onChange={setActivityPage}
          itemsPerPage={activityPageSize}
          onItemsPerPageChange={handleActivityPageSize}
        />
      </div>

      {/* LA HORA */}
      <div className="content-section">
        <h3>2. Cómo Decir la Hora</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          En inglés, la forma tradicional de decir la hora usa <strong>past</strong> (después de la hora) y <strong>to</strong> (antes de la siguiente hora).
        </p>

        <div style={{ marginBottom: '12px' }}>
          <input
            type="text"
            className="search-input"
            placeholder="🔍 Buscar una hora o expresión..."
            value={timeSearch}
            onChange={(e) => setTimeSearch(e.target.value)}
          />
        </div>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {filteredTime.map((item, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span><strong>{item.time}</strong> → {item.phrase}</span>
                <button className="audio-btn" onClick={() => speak(item.phrase)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es">{item.note}</div>
            </div>
          ))}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>🕰️</span> "What time is it?" / "What time do you...?"</div>
          <div className="insider-content">
            Para preguntar la hora: <strong>"What time is it?"</strong> — <em>"It's half past seven."</em> Para preguntar cuándo hace algo alguien: <strong>"What time do you wake up?"</strong> — <em>"I wake up at seven."</em> Nota que siempre usamos <strong>at</strong> antes de una hora específica: <em>at seven, at noon, at midnight.</em>
          </div>
        </div>
      </div>

      {/* DÍAS DE LA SEMANA */}
      <div className="content-section">
        <h3>3. Días de la Semana</h3>
        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
          {daysOfWeek.map((item, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{item.word}</span>
                <button className="audio-btn" onClick={() => speak(item.word)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es">{item.translation}</div>
            </div>
          ))}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>📅</span> weekday vs. weekend</div>
          <div className="insider-content">
            <strong>Weekdays</strong> (días de semana) van de Monday a Friday. <strong>Weekend</strong> (fin de semana) es Saturday y Sunday. Usamos <strong>on</strong> antes de un día: <em>"I work on Mondays."</em> / <em>"We relax on the weekend."</em>
          </div>
        </div>
      </div>

      {/* ADVERBIOS DE FRECUENCIA */}
      <div className="content-section">
        <h3>4. Adverbios de Frecuencia</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Estos adverbios indican qué tan seguido pasa algo, del 100% al 0%.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {frequencyAdverbs.map((item, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span><strong>{item.word}</strong> ({item.percent})</span>
                <button className="audio-btn" onClick={() => speak(item.example)} title="Escuchar" style={{ margin: 0 }}>🔊</button>
              </div>
              <div className="example-es" style={{ marginTop: '4px' }}>{item.translation}</div>
              <div className="example-en" style={{ marginTop: '8px', fontSize: '0.9rem' }}>{item.example}</div>
            </div>
          ))}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title"><span>📍</span> ¿Dónde va el adverbio de frecuencia?</div>
          <div className="insider-content">
            Va <strong>después</strong> del verbo be (<em>"She is always late."</em>) pero <strong>antes</strong> de los demás verbos (<em>"She always arrives late."</em>). Nunca al inicio o al final de la oración en estos casos.
          </div>
        </div>

        <div className="insider-box" style={{ marginTop: '12px' }}>
          <div className="insider-title"><span>⚠️</span> "Hardly ever" ya es negativo</div>
          <div className="insider-content">
            Igual que <strong>never</strong>, <strong>hardly ever</strong> tiene significado negativo aunque el verbo se escriba en forma afirmativa: <em>"She hardly ever watches TV"</em> (correcto), NO <em>"She doesn't hardly ever watch TV"</em> (doble negación incorrecta).
          </div>
        </div>
      </div>

      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen de Vocabulario</h4>
          <p>Pon a prueba tu conocimiento de rutinas diarias, la hora y frecuencia.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz</button>
      </div>
    </div>
  );
};

export default VocabularyTopic;

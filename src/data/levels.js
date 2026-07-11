export const levels = [
  {
    id: 1,
    name: "Evolve 1",
    cefr: "A1",
    description: "Nivel Principiante (A1). Primer contacto con el idioma, información personal y rutinas cotidianas.",
    units: [
      {
        id: 1,
        title: "I am...",
        translation: "Yo soy...",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Nacionalidades y Trabajos)" },
          { id: "grammar1", title: "Gramática 1 (Verbo be con I / you)" },
          { id: "grammar2", title: "Gramática 2 (What's...?, It's...)" },
          { id: "functional", title: "Lenguaje Funcional (Presentaciones)" },
          { id: "skills", title: "Destrezas (Lectura, Perfil Escrito y Speaking)" }
        ]
      },
      {
        id: 2,
        title: "Great people",
        translation: "Gente maravillosa",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Familia, Números 1-1000+, Adjetivos y Fechas)" },
          { id: "grammar1", title: "Gramática 1 (Verbo be con he/she/it/we/you/they)" },
          { id: "grammar2", title: "Gramática 2 (Preposiciones de lugar)" },
          { id: "functional", title: "Lenguaje Funcional (Edades, Cumpleaños y Autocorrección)" },
          { id: "skills", title: "Destrezas (Listening, Post Escrito y Speaking)" }
        ]
      },
      {
        id: 3,
        title: "Come in",
        translation: "Adelante / Pasa",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Habitaciones, Muebles y Bebidas/Snacks)" },
          { id: "grammar1", title: "Gramática 1 (Adjetivos Posesivos y 's / s')" },
          { id: "grammar2", title: "Gramática 2 (It is y Preguntas de Información con be)" },
          { id: "functional", title: "Lenguaje Funcional (Ofrecer Comida y Bebida)" },
          { id: "skills", title: "Destrezas (Reading, Email y Speaking)" }
        ]
      },
      {
        id: 4,
        title: "I love it",
        translation: "Me encanta",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Tecnología, Verbos Tech y Música)" },
          { id: "grammar1", title: "Gramática 1 (Presente Simple con I, you, we)" },
          { id: "grammar2", title: "Gramática 2 (a/an y Adjetivos antes del Sustantivo)" },
          { id: "functional", title: "Lenguaje Funcional (Nuevo Tema y Mostrar que Escuchas)" },
          { id: "skills", title: "Destrezas (Reseñas, Escritura y Speaking)" }
        ]
      },
      {
        id: 5,
        title: "Mondays and fun days",
        translation: "Lunes y días divertidos",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Actividades Diarias y Hora)" },
          { id: "grammar1", title: "Gramática 1 (Presente Simple con he, she, they)" },
          { id: "grammar2", title: "Gramática 2 (Preguntas con Wh-)" },
          { id: "functional", title: "Lenguaje Funcional (Rutinas)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 6,
        title: "Zoom in, zoom out",
        translation: "Acercar y alejar",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Lugares y Naturaleza)" },
          { id: "grammar1", title: "Gramática 1 (There is / There are)" },
          { id: "grammar2", title: "Gramática 2 (Adverbios de frecuencia)" },
          { id: "functional", title: "Lenguaje Funcional (Dar indicaciones)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 7,
        title: "Now is good",
        translation: "Ahora es un buen momento",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Actividades en curso)" },
          { id: "grammar1", title: "Gramática 1 (Presente Continuo)" },
          { id: "grammar2", title: "Gramática 2 (Presente Simple vs. Continuo)" },
          { id: "functional", title: "Lenguaje Funcional (Llamadas telefónicas)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 8,
        title: "You're good!",
        translation: "¡Eres bueno en esto!",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Habilidades y Talentos)" },
          { id: "grammar1", title: "Gramática 1 (Verbo modal can / can't)" },
          { id: "grammar2", title: "Gramática 2 (Adverbios de modo)" },
          { id: "functional", title: "Lenguaje Funcional (Pedir ayuda)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 9,
        title: "Places to go",
        translation: "Lugares a donde ir",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Viajes y Transporte)" },
          { id: "grammar1", title: "Gramática 1 (Pasado simple de be)" },
          { id: "grammar2", title: "Gramática 2 (Pasado simple regular)" },
          { id: "functional", title: "Lenguaje Funcional (Hablar de viajes)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 10,
        title: "Get ready",
        translation: "Prepárate",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Ropa y Clima)" },
          { id: "grammar1", title: "Gramática 1 (Futuro con be going to)" },
          { id: "grammar2", title: "Gramática 2 (Presente Continuo para futuro)" },
          { id: "functional", title: "Lenguaje Funcional (Sugerencias)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 11,
        title: "Colorful memories",
        translation: "Recuerdos coloridos",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Comidas y Eventos clave)" },
          { id: "grammar1", title: "Gramática 1 (Pasado simple irregular)" },
          { id: "grammar2", title: "Gramática 2 (Expresiones de tiempo pasado)" },
          { id: "functional", title: "Lenguaje Funcional (Anécdotas)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 12,
        title: "Outdoors",
        translation: "Al aire libre",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Naturaleza y Clima)" },
          { id: "grammar1", title: "Gramática 1 (Preguntas en Pasado Simple)" },
          { id: "grammar2", title: "Gramática 2 (Repaso de Tiempos)" },
          { id: "functional", title: "Lenguaje Funcional (Mostrar sorpresa)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Evolve 2",
    cefr: "A2",
    description: "Nivel Elemental (A2). Expresiones sencillas, compras, viajes y descripción de situaciones cotidianas.",
    units: [
      {
        id: 1,
        title: "Connections",
        translation: "Conexiones",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Gente que conoces)" },
          { id: "grammar1", title: "Gramática 1 (Verbo be en declaraciones/preguntas)" },
          { id: "grammar2", title: "Gramática 2 (Adjetivos posesivos)" },
          { id: "functional", title: "Lenguaje Funcional (Introducciones)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 2,
        title: "Work and study",
        translation: "Trabajo y estudio",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Objetos de estudio y Verbos)" },
          { id: "grammar1", title: "Gramática 1 (Presente simple para rutinas)" },
          { id: "grammar2", title: "Gramática 2 (Demostrativos this/that/these/those)" },
          { id: "functional", title: "Lenguaje Funcional (Explicar herramientas)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 3,
        title: "Let's move",
        translation: "A moverse",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Deportes y Ejercicios)" },
          { id: "grammar1", title: "Gramática 1 (Presente Continuo)" },
          { id: "grammar2", title: "Gramática 2 (Presente Simple vs. Continuo)" },
          { id: "functional", title: "Lenguaje Funcional (Propuestas deportivas)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 4,
        title: "Good times",
        translation: "Buenos tiempos",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Festividades y Regalos)" },
          { id: "grammar1", title: "Gramática 1 (Pasado simple afirmativo)" },
          { id: "grammar2", title: "Gramática 2 (Pasado simple negativo/interrogativo)" },
          { id: "functional", title: "Lenguaje Funcional (Contar fines de semana)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 5,
        title: "Firsts and lasts",
        translation: "Primeras y últimas veces",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Hitos de vida y Sentimientos)" },
          { id: "grammar1", title: "Gramática 1 (Pasado simple verbos irregulares)" },
          { id: "grammar2", title: "Gramática 2 (Conectores de tiempo when/before/after)" },
          { id: "functional", title: "Lenguaje Funcional (Describir sentimientos)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 6,
        title: "Buy now, pay later",
        translation: "Compre ahora, pague después",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Dinero y Transacciones)" },
          { id: "grammar1", title: "Gramática 1 (Futuro con be going to)" },
          { id: "grammar2", title: "Gramática 2 (Verbos want y would like)" },
          { id: "functional", title: "Lenguaje Funcional (Comprar en tienda)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 7,
        title: "Eat, drink, be happy",
        translation: "Come, bebe, sé feliz",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Alimentos y Menús)" },
          { id: "grammar1", title: "Gramática 1 (Cuantificadores)" },
          { id: "grammar2", title: "Gramática 2 (Patrones verbales like + -ing)" },
          { id: "functional", title: "Lenguaje Funcional (Ordenar comida)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 8,
        title: "Trips",
        translation: "Viajes",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Destinos y Equipaje)" },
          { id: "grammar1", title: "Gramática 1 (Primer condicional)" },
          { id: "grammar2", title: "Gramática 2 (Preposiciones de propósito to/for)" },
          { id: "functional", title: "Lenguaje Funcional (Dar sugerencias)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 9,
        title: "Looking good",
        translation: "Lucir bien",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Ropa y Apariencia física)" },
          { id: "grammar1", title: "Gramática 1 (Comparativos)" },
          { id: "grammar2", title: "Gramática 2 (Superlativos)" },
          { id: "functional", title: "Lenguaje Funcional (Comparar prendas)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 10,
        title: "Risky business",
        translation: "Decisiones de riesgo",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Desafíos y Prevención)" },
          { id: "grammar1", title: "Gramática 1 (Modal have to / don't have to)" },
          { id: "grammar2", title: "Gramática 2 (Modales de consejo)" },
          { id: "functional", title: "Lenguaje Funcional (Advertir peligros)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 11,
        title: "Me, online",
        translation: "Yo, en internet",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Redes sociales y Acciones)" },
          { id: "grammar1", title: "Gramática 1 (Presente Perfecto para experiencias)" },
          { id: "grammar2", title: "Gramática 2 (Presente Perfecto vs Pasado Simple)" },
          { id: "functional", title: "Lenguaje Funcional (Compartir logros)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 12,
        title: "Outdoors",
        translation: "El exterior",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Geografía y Clima extremo)" },
          { id: "grammar1", title: "Gramática 1 (Presente continuo para planes futuros)" },
          { id: "grammar2", title: "Gramática 2 (Predicciones con will/going to)" },
          { id: "functional", title: "Lenguaje Funcional (Hacer planes climáticos)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Evolve 3",
    cefr: "B1",
    description: "Nivel Intermedio Bajo (B1). Defender opiniones, narrar historias simples combinando tiempos y debates urbanos.",
    units: [
      {
        id: 1,
        title: "Who we are",
        translation: "Quiénes somos",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Personalidad y Cualidades)" },
          { id: "grammar1", title: "Gramática 1 (Preguntas de información complejas)" },
          { id: "grammar2", title: "Gramática 2 (Preguntas indirectas)" },
          { id: "functional", title: "Lenguaje Funcional (Entrevistas informales)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 2,
        title: "So much stuff",
        translation: "Tantas cosas",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Posesiones y Materiales)" },
          { id: "grammar1", title: "Gramática 1 (Presente perfecto con already, yet, just)" },
          { id: "grammar2", title: "Gramática 2 (Presente perfecto vs Pasado Simple)" },
          { id: "functional", title: "Lenguaje Funcional (Explicar valor sentimental)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 3,
        title: "Smart moves",
        translation: "Movimientos inteligentes",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Infraestructura urbana y Transporte)" },
          { id: "grammar1", title: "Gramática 1 (Pasado simple vs Pasado continuo)" },
          { id: "grammar2", title: "Gramática 2 (Consejos con should/could)" },
          { id: "functional", title: "Lenguaje Funcional (Dar direcciones)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 4,
        title: "Think first",
        translation: "Piensa primero",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Emociones y adjetivos -ed/-ing)" },
          { id: "grammar1", title: "Gramática 1 (Formas futuras will/going to/continuous)" },
          { id: "grammar2", title: "Gramática 2 (Tomar decisiones)" },
          { id: "functional", title: "Lenguaje Funcional (Expresar interés/desinterés)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 5,
        title: "And then...",
        translation: "Y entonces...",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Objetos perdidos y verbos de búsqueda)" },
          { id: "grammar1", title: "Gramática 1 (Pasado Perfecto)" },
          { id: "grammar2", title: "Gramática 2 (Tiempos narrativos)" },
          { id: "functional", title: "Lenguaje Funcional (Estructurar anécdotas)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 6,
        title: "Impact",
        translation: "Impacto",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Problemas ecológicos urbanos)" },
          { id: "grammar1", title: "Gramática 1 (Voz pasiva en Presente Simple)" },
          { id: "grammar2", title: "Gramática 2 (Voz pasiva en Pasado Simple)" },
          { id: "functional", title: "Lenguaje Funcional (Debatir soluciones urbanas)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 7,
        title: "Entertain us",
        translation: "Diviértenos",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Cine, Música y Televisión)" },
          { id: "grammar1", title: "Gramática 1 (Hábitos pasados con used to)" },
          { id: "grammar2", title: "Gramática 2 (Estructura comparativa as... as)" },
          { id: "functional", title: "Lenguaje Funcional (Recomendar series/películas)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 8,
        title: "Getting there",
        translation: "En camino",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Pasatiempos serios y Viajes)" },
          { id: "grammar1", title: "Gramática 1 (Presente Perfecto Continuo)" },
          { id: "grammar2", title: "Gramática 2 (Perfecto Simple vs Continuo)" },
          { id: "functional", title: "Lenguaje Funcional (Hablar de duración)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 9,
        title: "Make it work",
        translation: "Haz que funcione",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Mantenimiento y Solución de problemas)" },
          { id: "grammar1", title: "Gramática 1 (Modales de necesidad/obligación)" },
          { id: "grammar2", title: "Gramática 2 (Modales de permiso/prohibición)" },
          { id: "functional", title: "Lenguaje Funcional (Pedir permiso y límites)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 10,
        title: "Why we buy",
        translation: "Por qué compramos",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Mercadotecnia y Consumo)" },
          { id: "grammar1", title: "Gramática 1 (Voz pasiva avanzada)" },
          { id: "grammar2", title: "Gramática 2 (Determinadores y Cuantitativos)" },
          { id: "functional", title: "Lenguaje Funcional (Quejarse de productos)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 11,
        title: "Pushing yourself",
        translation: "Superarte",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Deportes extremos y Metas)" },
          { id: "grammar1", title: "Gramática 1 (Phrasal verbs)" },
          { id: "grammar2", title: "Gramática 2 (Segundo Condicional)" },
          { id: "functional", title: "Lenguaje Funcional (Motivar a otros)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 12,
        title: "Life's little lessons",
        translation: "Pequeñas lecciones",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Errores y Aprendizajes)" },
          { id: "grammar1", title: "Gramática 1 (Pronombres indefinidos)" },
          { id: "grammar2", title: "Gramática 2 (Introducción al Reported Speech)" },
          { id: "functional", title: "Lenguaje Funcional (Expresar arrepentimiento)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Evolve 4",
    cefr: "B1+",
    description: "Nivel Intermedio Plus (B1+). Condicionales pasados, voz pasiva con modales, adjetivos sensoriales e interacciones académicas.",
    units: [
      {
        id: 1,
        title: "And we're off!",
        translation: "¡Y allá vamos!",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Logros y Cualidades personales)" },
          { id: "grammar1", title: "Gramática 1 (Tiempos simples y continuos)" },
          { id: "grammar2", title: "Gramática 2 (Verbos dinámicos vs estáticos)" },
          { id: "functional", title: "Lenguaje Funcional (Entrevistas complejas)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 2,
        title: "The future of food",
        translation: "El futuro de la comida",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Cocina y Tendencias globales)" },
          { id: "grammar1", title: "Gramática 1 (Condicionales reales)" },
          { id: "grammar2", title: "Gramática 2 (Oraciones temporales)" },
          { id: "functional", title: "Lenguaje Funcional (Explicar recetas)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 3,
        title: "What's it worth?",
        translation: "¿Qué valor tiene?",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Finanzas y Compras de segunda mano)" },
          { id: "grammar1", title: "Gramática 1 (Uso de too y enough)" },
          { id: "grammar2", title: "Gramática 2 (Modificar comparaciones)" },
          { id: "functional", title: "Lenguaje Funcional (Negociar precios)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 4,
        title: "Going glocal",
        translation: "Volverse local-global",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Globalización y Publicidad viral)" },
          { id: "grammar1", title: "Gramática 1 (Modales de especulación)" },
          { id: "grammar2", title: "Gramática 2 (Cláusulas de relativo de sujeto/objeto)" },
          { id: "functional", title: "Lenguaje Funcional (Especular sobre mercados)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 5,
        title: "True stories",
        translation: "Historias reales",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Géneros narrativos y Periodismo)" },
          { id: "grammar1", title: "Gramática 1 (Pasado Perfecto Continuo)" },
          { id: "grammar2", title: "Gramática 2 (Revisión de tiempos narrativos)" },
          { id: "functional", title: "Lenguaje Funcional (Transmitir noticias)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 6,
        title: "Community action",
        translation: "Acción comunitaria",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Voluntariado y Proyectos sociales)" },
          { id: "grammar1", title: "Gramática 1 (Voz pasiva con modales)" },
          { id: "grammar2", title: "Gramática 2 (Infinitivos en voz pasiva)" },
          { id: "functional", title: "Lenguaje Funcional (Convencer a otros)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 7,
        title: "Can we talk?",
        translation: "¿Podemos hablar?",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Canales de comunicación y Jerga digital)" },
          { id: "grammar1", title: "Gramática 1 (Reported Speech: afirmaciones)" },
          { id: "grammar2", title: "Gramática 2 (Reported Speech: preguntas)" },
          { id: "functional", title: "Lenguaje Funcional (Reportar acuerdos)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 8,
        title: "Lifestyles",
        translation: "Estilos de vida",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Balance vida-trabajo y Estrés)" },
          { id: "grammar1", title: "Gramática 1 (Wishes y Regrets actuales)" },
          { id: "grammar2", title: "Gramática 2 (Wishes y Regrets pasados)" },
          { id: "functional", title: "Lenguaje Funcional (Expresar quejas de trabajo)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 9,
        title: "Yes, you can!",
        translation: "¡Sí, puedes!",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Reglas ciudadanas e Institucionales)" },
          { id: "grammar1", title: "Gramática 1 (Obligación y Prohibición)" },
          { id: "grammar2", title: "Gramática 2 (Permiso y Exenciones)" },
          { id: "functional", title: "Lenguaje Funcional (Debatir normas)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 10,
        title: "What if...?",
        translation: "¿Qué pasaría si...?",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Descubrimientos fortuitos e Inovaciones)" },
          { id: "grammar1", title: "Gramática 1 (Tercer Condicional)" },
          { id: "grammar2", title: "Gramática 2 (Wishes en pasado con past perfect)" },
          { id: "functional", title: "Lenguaje Funcional (Reflexionar decisiones)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 11,
        title: "Contrasts",
        translation: "Contrastes",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Vida universitaria y Títulos)" },
          { id: "grammar1", title: "Gramática 1 (Gerundio/Infinitivo básico)" },
          { id: "grammar2", title: "Gramática 2 (Gerundio/Infinitivo con cambio de significado)" },
          { id: "functional", title: "Lenguaje Funcional (Comparar carreras)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 12,
        title: "Looking back",
        translation: "Mirando atrás",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Senses y Adjetivos sensoriales)" },
          { id: "grammar1", title: "Gramática 1 (Cleft sentences para énfasis)" },
          { id: "grammar2", title: "Gramática 2 (Énfasis con auxiliares)" },
          { id: "functional", title: "Lenguaje Funcional (Describir memorias sensoriales)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Evolve 5",
    cefr: "B2",
    description: "Nivel Intermedio Alto (B2). Adjetivos de grado extremo, causativos, emociones en entornos laborales complejos y modales de deducción pasada.",
    units: [
      {
        id: 1,
        title: "Step forward",
        translation: "Dar el paso",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Desafíos y Resiliencia)" },
          { id: "grammar1", title: "Gramática 1 (Conductas habituales del presente)" },
          { id: "grammar2", title: "Gramática 2 (Hábitos pasados con would/used to)" },
          { id: "functional", title: "Lenguaje Funcional (Adaptabilidad corporativa)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 2,
        title: "Natural limits",
        translation: "Límites naturales",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Espacio profundo y Ecosistemas)" },
          { id: "grammar1", title: "Gramática 1 (Adjetivos graduables y extremos)" },
          { id: "grammar2", title: "Gramática 2 (Estructuras comparativas complejas)" },
          { id: "functional", title: "Lenguaje Funcional (Expresar escepticismo)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 3,
        title: "The way I am",
        translation: "Mi forma de ser",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Perfiles psicológicos e Introversión)" },
          { id: "grammar1", title: "Gramática 1 (Cláusulas de relativo reducidas)" },
          { id: "grammar2", title: "Gramática 2 (Preposiciones en relativo)" },
          { id: "functional", title: "Lenguaje Funcional (Estilo de trabajo)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 4,
        title: "Combined effort",
        translation: "Esfuerzo conjunto",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Sinergia y Redes de apoyo)" },
          { id: "grammar1", title: "Gramática 1 (Énfasis con so/such... that)" },
          { id: "grammar2", title: "Gramática 2 (Pronombres reflexivos)" },
          { id: "functional", title: "Lenguaje Funcional (Delegar tareas)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 5,
        title: "The human factor",
        translation: "El factor humano",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Manejo de crisis y Ansiedad)" },
          { id: "grammar1", title: "Gramática 1 (Cláusulas sustantivas)" },
          { id: "grammar2", title: "Gramática 2 (Expresar certeza e incertidumbre)" },
          { id: "functional", title: "Lenguaje Funcional (Calmar en crisis)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 6,
        title: "Expect the unexpected",
        translation: "Espera lo inesperado",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Fails y Coincidencias)" },
          { id: "grammar1", title: "Gramática 1 (Tiempos narrativos avanzados)" },
          { id: "grammar2", title: "Gramática 2 (Repaso de hábitos y anécdotas)" },
          { id: "functional", title: "Lenguaje Funcional (Explicar problemas de logística)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 7,
        title: "Priorities",
        translation: "Prioridades",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Side projects y Jerarquías de vida)" },
          { id: "grammar1", title: "Gramática 1 (Gerundios e infinitivos avanzados)" },
          { id: "grammar2", title: "Gramática 2 (Gerundio e infinitivo pasivo)" },
          { id: "functional", title: "Lenguaje Funcional (Priorizar plazos)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 8,
        title: "Small things matter",
        translation: "Detalles importantes",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Organización y Caos físico)" },
          { id: "grammar1", title: "Gramática 1 (Expresiones con be bound to/sure to)" },
          { id: "grammar2", title: "Gramática 2 (Uso de be due to)" },
          { id: "functional", title: "Lenguaje Funcional (Optimizar espacios)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 9,
        title: "Things happen",
        translation: "Las cosas pasan",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Coincidencias y Suerte)" },
          { id: "grammar1", title: "Gramática 1 (Modales de deducción pasada)" },
          { id: "grammar2", title: "Gramática 2 (Modales de arrepentimiento pasado)" },
          { id: "functional", title: "Lenguaje Funcional (Analizar escenarios alternativos)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 10,
        title: "People, profiles",
        translation: "Perfiles",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Demografía de clientes)" },
          { id: "grammar1", title: "Gramática 1 (Causativos activos)" },
          { id: "grammar2", title: "Gramática 2 (Causativos pasivos)" },
          { id: "functional", title: "Lenguaje Funcional (Solicitar personalizaciones)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 11,
        title: "Really?",
        translation: "¿De verdad?",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Desmentir rumores e Fake News)" },
          { id: "grammar1", title: "Gramática 1 (Estilo indirecto complejo)" },
          { id: "grammar2", title: "Gramática 2 (Pasivo con verbos de reporte)" },
          { id: "functional", title: "Lenguaje Funcional (Expresar escepticismo)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 12,
        title: "Got what it takes?",
        translation: "¿Tienes lo necesario?",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Excelencia e Inteligencia)" },
          { id: "grammar1", title: "Gramática 1 (Colocación de adverbios con adjetivos)" },
          { id: "grammar2", title: "Gramática 2 (Adverbios de oración)" },
          { id: "functional", title: "Lenguaje Funcional (Evaluación de desempeño)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      }
    ]
  },
  {
    id: 6,
    name: "Evolve 6",
    cefr: "C1",
    description: "Nivel Avanzado (C1). Dominio total del idioma, Inteligencia Artificial, sesgos cognitivos, inversión gramatical y presente subjuntivo.",
    units: [
      {
        id: 1,
        title: "Robot revolution",
        translation: "La revolución de los robots",
        topics: [
          { id: "vocabulary", title: "Vocabulario (IA y Automatización)" },
          { id: "grammar1", title: "Gramática 1 (Adverbios de comentario con futuro)" },
          { id: "grammar2", title: "Gramática 2 (Futuro Perfecto Continuo)" },
          { id: "functional", title: "Lenguaje Funcional (Debates formales)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 2,
        title: "The labels we live by",
        translation: "Las etiquetas de vida",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Sesgos y Estereotipos)" },
          { id: "grammar1", title: "Gramática 1 (Usos expresivos avanzados de will)" },
          { id: "grammar2", title: "Gramática 2 (Usos expresivos avanzados de would)" },
          { id: "functional", title: "Lenguaje Funcional (Desafiar prejuicios)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 3,
        title: "In hindsight",
        translation: "En retrospectiva",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Psicología cognitiva y Regrets)" },
          { id: "grammar1", title: "Gramática 1 (Variaciones de condicionales pasados)" },
          { id: "grammar2", title: "Gramática 2 (Modales pasados para opinar)" },
          { id: "functional", title: "Lenguaje Funcional (Análisis de fracasos)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 4,
        title: "Close up",
        translation: "En detalle",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Texturas y Formas geométricas)" },
          { id: "grammar1", title: "Gramática 1 (Preposiciones en relativo complejas)" },
          { id: "grammar2", title: "Gramática 2 (Cuantificadores en relativo)" },
          { id: "functional", title: "Lenguaje Funcional (Describir estructuras físicas)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 5,
        title: "Remote",
        translation: "Remoto",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Lugares inhabitados e Aislamiento)" },
          { id: "grammar1", title: "Gramática 1 (Frases de participio iniciales)" },
          { id: "grammar2", title: "Gramática 2 (Cláusulas de relativo reducidas avanzadas)" },
          { id: "functional", title: "Lenguaje Funcional (Describir atmósferas)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 6,
        title: "Surprise, surprise",
        translation: "Sorpresa, sorpresa",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Reacciones fisiológicas y shock)" },
          { id: "grammar1", title: "Gramática 1 (Oraciones hendidas avanzadas)" },
          { id: "grammar2", title: "Gramática 2 (Pronombres con -ever)" },
          { id: "functional", title: "Lenguaje Funcional (Mantener el suspenso)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 7,
        title: "Roots",
        translation: "Raíces",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Genealogía y Rituales)" },
          { id: "grammar1", title: "Gramática 1 (Inversión sintáctica con negativos)" },
          { id: "grammar2", title: "Gramática 2 (Inversión sintáctica restrictiva)" },
          { id: "functional", title: "Lenguaje Funcional (Explicar herencias culturales)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 8,
        title: "Short",
        translation: "Breve",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Inmediatez y Atención)" },
          { id: "grammar1", title: "Gramática 1 (Voz pasiva para hechos no confirmados)" },
          { id: "grammar2", title: "Gramática 2 (Estructura impersonal pasiva)" },
          { id: "functional", title: "Lenguaje Funcional (Resúmenes de negocio / Elevator Pitch)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 9,
        title: "Health vs. modern life",
        translation: "Salud vs. modernidad",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Sedentarismo y Estrés orgánico)" },
          { id: "grammar1", title: "Gramática 1 (Inversión en condicionales sin if)" },
          { id: "grammar2", title: "Gramática 2 (Condicionales elípticos)" },
          { id: "functional", title: "Lenguaje Funcional (Proponer planes preventivos)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 10,
        title: "Reinvention",
        translation: "Reinvención",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Marca personal y Plasticidad)" },
          { id: "grammar1", title: "Gramática 1 (Condicionales mixtos avanzados)" },
          { id: "grammar2", title: "Gramática 2 (Alternativas a condicionales)" },
          { id: "functional", title: "Lenguaje Funcional (Presentar un perfil híbrido)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 11,
        title: "True colors",
        translation: "Colores verdaderos",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Teoría cromática corporativa)" },
          { id: "grammar1", title: "Gramática 1 (Cláusulas sustantivas de sujeto)" },
          { id: "grammar2", title: "Gramática 2 (Clefts con verbos de percepción)" },
          { id: "functional", title: "Lenguaje Funcional (Justificar diseño cromático)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      },
      {
        id: 12,
        title: "Things change",
        translation: "Las cosas cambian",
        topics: [
          { id: "vocabulary", title: "Vocabulario (Disrupción organizacional y Adaptación)" },
          { id: "grammar1", title: "Gramática 1 (Presente Subjuntivo en demandas)" },
          { id: "grammar2", title: "Gramática 2 (Subjuntivo en adjetivos de urgencia)" },
          { id: "functional", title: "Lenguaje Funcional (Anunciar reestructuraciones)" },
          { id: "skills", title: "Práctica de Destrezas (Reading, Writing y Speaking)" }
        ]
      }
    ]
  }
];

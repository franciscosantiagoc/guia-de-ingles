import React, { useState, useMemo } from 'react';
import Pagination, { DEFAULT_PAGE_SIZE } from '../../../components/Pagination';
import SortToggle, { sortByWord, DEFAULT_SORT } from '../../../components/SortToggle';

const VocabularyTopic = () => {
  const [countrySearch, setCountrySearch] = useState('');
  const [countryPage, setCountryPage] = useState(1);
  const [countryPageSize, setCountryPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [countrySort, setCountrySort] = useState(DEFAULT_SORT);
  const [jobSearch, setJobSearch] = useState('');
  const [jobPage, setJobPage] = useState(1);
  const [jobPageSize, setJobPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [jobSort, setJobSort] = useState(DEFAULT_SORT);

  // Voice reader engine
  const speak = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    } else {
      console.warn("La síntesis de voz no está soportada en este navegador.");
    }
  };

  // Comprehensive list of countries and nationalities
  const allCountries = useMemo(() => [
    // -an / -ian
    { country: "Argentina", nationality: "Argentine / Argentinian", translation: "Argentina ➔ Argentino/a", suffix: "-an / -ian" },
    { country: "Australia", nationality: "Australian", translation: "Australia ➔ Australiano/a", suffix: "-an / -ian" },
    { country: "Belgium", nationality: "Belgian", translation: "Bélgica ➔ Belga", suffix: "-an / -ian" },
    { country: "Bolivia", nationality: "Bolivian", translation: "Bolivia ➔ Boliviano/a", suffix: "-an / -ian" },
    { country: "Brazil", nationality: "Brazilian", translation: "Brasil ➔ Brasileño/a", suffix: "-an / -ian" },
    { country: "Canada", nationality: "Canadian", translation: "Canadá ➔ Canadiense", suffix: "-an / -ian" },
    { country: "Chile", nationality: "Chilean", translation: "Chile ➔ Chileno/a", suffix: "-an / -ian" },
    { country: "Colombia", nationality: "Colombian", translation: "Colombia ➔ Colombiano/a", suffix: "-an / -ian" },
    { country: "Costa Rica", nationality: "Costa Rican", translation: "Costa Rica ➔ Costarricense", suffix: "-an / -ian" },
    { country: "Cuba", nationality: "Cuban", translation: "Cuba ➔ Cubano/a", suffix: "-an / -ian" },
    { country: "Ecuador", nationality: "Ecuadorian", translation: "Ecuador ➔ Ecuatoriano/a", suffix: "-an / -ian" },
    { country: "Egypt", nationality: "Egyptian", translation: "Egipto ➔ Egipcio/a", suffix: "-an / -ian" },
    { country: "Germany", nationality: "German", translation: "Alemania ➔ Alemán/a", suffix: "-an / -ian" },
    { country: "Guatemala", nationality: "Guatemalan", translation: "Guatemala ➔ Guatemalteco/a", suffix: "-an / -ian" },
    { country: "Honduras", nationality: "Honduran", translation: "Honduras ➔ Hondureño/a", suffix: "-an / -ian" },
    { country: "India", nationality: "Indian", translation: "India ➔ Indio/a", suffix: "-an / -ian" },
    { country: "Italy", nationality: "Italian", translation: "Italia ➔ Italiano/a", suffix: "-an / -ian" },
    { country: "Mexico", nationality: "Mexican", translation: "México ➔ Mexicano/a", suffix: "-an / -ian" },
    { country: "Morocco", nationality: "Moroccan", translation: "Marruecos ➔ Marroquí", suffix: "-an / -ian" },
    { country: "Peru", nationality: "Peruvian", translation: "Perú ➔ Peruano/a", suffix: "-an / -ian" },
    { country: "Russia", nationality: "Russian", translation: "Rusia ➔ Ruso/a", suffix: "-an / -ian" },
    { country: "South Africa", nationality: "South African", translation: "Sudáfrica ➔ Sudafricano/a", suffix: "-an / -ian" },
    { country: "South Korea", nationality: "South Korean", translation: "Corea del Sur ➔ Surcoreano/a", suffix: "-an / -ian" },
    { country: "The United States", nationality: "American", translation: "Estados Unidos ➔ Estadounidense / Americano/a", suffix: "-an / -ian" },
    { country: "Ukraine", nationality: "Ukrainian", translation: "Ucrania ➔ Ucraniano/a", suffix: "-an / -ian" },
    { country: "Uruguay", nationality: "Uruguayan", translation: "Uruguay ➔ Uruguayo/a", suffix: "-an / -ian" },
    { country: "Venezuela", nationality: "Venezuelan", translation: "Venezuela ➔ Venezolano/a", suffix: "-an / -ian" },
    // -ish
    { country: "Denmark", nationality: "Danish", translation: "Dinamarca ➔ Danés/a", suffix: "-ish" },
    { country: "England", nationality: "English", translation: "Inglaterra ➔ Inglés/a", suffix: "-ish" },
    { country: "Finland", nationality: "Finnish", translation: "Finlandia ➔ Finlandés/a", suffix: "-ish" },
    { country: "Ireland", nationality: "Irish", translation: "Irlanda ➔ Irlandés/a", suffix: "-ish" },
    { country: "Poland", nationality: "Polish", translation: "Polonia ➔ Polaco/a", suffix: "-ish" },
    { country: "Scotland", nationality: "Scottish", translation: "Escocia ➔ Escocés/a", suffix: "-ish" },
    { country: "Spain", nationality: "Spanish", translation: "España ➔ Español/a", suffix: "-ish" },
    { country: "Sweden", nationality: "Swedish", translation: "Suecia ➔ Sueco/a", suffix: "-ish" },
    { country: "The United Kingdom", nationality: "British", translation: "Reino Unido ➔ Británico/a", suffix: "-ish" },
    { country: "Turkey", nationality: "Turkish", translation: "Turquía ➔ Turco/a", suffix: "-ish" },
    // -ese
    { country: "China", nationality: "Chinese", translation: "China ➔ Chino/a", suffix: "-ese" },
    { country: "Japan", nationality: "Japanese", translation: "Japón ➔ Japonés/a", suffix: "-ese" },
    { country: "Portugal", nationality: "Portuguese", translation: "Portugal ➔ Portugués/a", suffix: "-ese" },
    { country: "Vietnam", nationality: "Vietnamese", translation: "Vietnam ➔ Vietnamita", suffix: "-ese" },
    // -i
    { country: "Iraq", nationality: "Iraqi", translation: "Irak ➔ Iraquí", suffix: "-i" },
    { country: "Israel", nationality: "Israeli", translation: "Israel ➔ Israelí", suffix: "-i" },
    { country: "Pakistan", nationality: "Pakistani", translation: "Pakistán ➔ Pakistaní", suffix: "-i" },
    { country: "Saudi Arabia", nationality: "Saudi / Saudi Arabian", translation: "Arabia Saudita ➔ Saudí / Saudita", suffix: "-i" },
    // Otros / Irregulares
    { country: "France", nationality: "French", translation: "Francia ➔ Francés/a", suffix: "Otros / Irregulares" },
    { country: "Greece", nationality: "Greek", translation: "Grecia ➔ Griego/a", suffix: "Otros / Irregulares" },
    { country: "New Zealand", nationality: "New Zealander", translation: "Nueva Zelanda ➔ Neozelandés/a", suffix: "Otros / Irregulares" },
    { country: "Switzerland", nationality: "Swiss", translation: "Suiza ➔ Suizo/a", suffix: "Otros / Irregulares" },
    { country: "Thailand", nationality: "Thai", translation: "Tailandia ➔ Tailandés/a", suffix: "Otros / Irregulares" },
    { country: "The Netherlands", nationality: "Dutch", translation: "Países Bajos ➔ Holandés/a", suffix: "Otros / Irregulares" }
  ], []);

  // 200 jobs covering everyday life + a full "Technology & Development" category,
  // each with the correct article (based on pronunciation, not spelling) and a category tag.
  const allJobs = useMemo(() => [
    // Tecnología
    { job: "AI Engineer", translation: "Ingeniero/a de IA", article: "an", category: "Tecnología" },
    { job: "Backend Developer", translation: "Desarrollador/a Backend", article: "a", category: "Tecnología" },
    { job: "Blockchain Developer", translation: "Desarrollador/a de Blockchain", article: "a", category: "Tecnología" },
    { job: "Chief Technology Officer", translation: "Director/a de Tecnología", article: "a", category: "Tecnología" },
    { job: "Cloud Engineer", translation: "Ingeniero/a de Nube", article: "a", category: "Tecnología" },
    { job: "Computer Programmer", translation: "Programador/a de Computadoras", article: "a", category: "Tecnología" },
    { job: "Cybersecurity Analyst", translation: "Analista de Ciberseguridad", article: "a", category: "Tecnología" },
    { job: "Data Analyst", translation: "Analista de Datos", article: "a", category: "Tecnología" },
    { job: "Data Engineer", translation: "Ingeniero/a de Datos", article: "a", category: "Tecnología" },
    { job: "Data Scientist", translation: "Científico/a de Datos", article: "a", category: "Tecnología" },
    { job: "Database Administrator", translation: "Administrador/a de Bases de Datos", article: "a", category: "Tecnología" },
    { job: "DevOps Engineer", translation: "Ingeniero/a DevOps", article: "a", category: "Tecnología" },
    { job: "Embedded Systems Engineer", translation: "Ingeniero/a de Sistemas Embebidos", article: "an", category: "Tecnología" },
    { job: "Frontend Developer", translation: "Desarrollador/a Frontend", article: "a", category: "Tecnología" },
    { job: "Full-Stack Developer", translation: "Desarrollador/a Full-Stack", article: "a", category: "Tecnología" },
    { job: "Game Developer", translation: "Desarrollador/a de Videojuegos", article: "a", category: "Tecnología" },
    { job: "IT Manager", translation: "Gerente de TI", article: "an", category: "Tecnología" },
    { job: "IT Support Specialist", translation: "Especialista en Soporte de TI", article: "an", category: "Tecnología" },
    { job: "Machine Learning Engineer", translation: "Ingeniero/a de Machine Learning", article: "a", category: "Tecnología" },
    { job: "Mobile App Developer", translation: "Desarrollador/a de Apps Móviles", article: "a", category: "Tecnología" },
    { job: "Network Engineer", translation: "Ingeniero/a de Redes", article: "a", category: "Tecnología" },
    { job: "Product Manager", translation: "Gerente de Producto", article: "a", category: "Tecnología" },
    { job: "Project Manager", translation: "Gerente de Proyecto", article: "a", category: "Tecnología" },
    { job: "QA Engineer", translation: "Ingeniero/a de QA", article: "a", category: "Tecnología" },
    { job: "QA Tester", translation: "Tester de QA", article: "a", category: "Tecnología" },
    { job: "Release Manager", translation: "Gerente de Lanzamientos", article: "a", category: "Tecnología" },
    { job: "Scrum Master", translation: "Scrum Master", article: "a", category: "Tecnología" },
    { job: "Security Engineer", translation: "Ingeniero/a de Seguridad", article: "a", category: "Tecnología" },
    { job: "Site Reliability Engineer", translation: "Ingeniero/a de Confiabilidad", article: "a", category: "Tecnología" },
    { job: "Software Architect", translation: "Arquitecto/a de Software", article: "a", category: "Tecnología" },
    { job: "Software Developer", translation: "Desarrollador/a de Software", article: "a", category: "Tecnología" },
    { job: "Software Engineer", translation: "Ingeniero/a de Software", article: "a", category: "Tecnología" },
    { job: "Solutions Architect", translation: "Arquitecto/a de Soluciones", article: "a", category: "Tecnología" },
    { job: "Systems Administrator", translation: "Administrador/a de Sistemas", article: "a", category: "Tecnología" },
    { job: "Systems Analyst", translation: "Analista de Sistemas", article: "a", category: "Tecnología" },
    { job: "Technical Writer", translation: "Redactor/a Técnico/a", article: "a", category: "Tecnología" },
    { job: "UI Designer", translation: "Diseñador/a UI", article: "a", category: "Tecnología" },
    { job: "UX Designer", translation: "Diseñador/a UX", article: "a", category: "Tecnología" },
    { job: "UX Researcher", translation: "Investigador/a UX", article: "a", category: "Tecnología" },
    { job: "Web Developer", translation: "Desarrollador/a Web", article: "a", category: "Tecnología" },
    // Salud
    { job: "Anesthesiologist", translation: "Anestesiólogo/a", article: "an", category: "Salud" },
    { job: "Cardiologist", translation: "Cardiólogo/a", article: "a", category: "Salud" },
    { job: "Dentist", translation: "Dentista", article: "a", category: "Salud" },
    { job: "Dermatologist", translation: "Dermatólogo/a", article: "a", category: "Salud" },
    { job: "Doctor", translation: "Doctor/a, Médico/a", article: "a", category: "Salud" },
    { job: "Medical Assistant", translation: "Asistente Médico/a", article: "a", category: "Salud" },
    { job: "Midwife", translation: "Partera", article: "a", category: "Salud" },
    { job: "Nurse", translation: "Enfermero/a", article: "a", category: "Salud" },
    { job: "Nutritionist", translation: "Nutricionista", article: "a", category: "Salud" },
    { job: "Occupational Therapist", translation: "Terapeuta Ocupacional", article: "an", category: "Salud" },
    { job: "Optometrist", translation: "Optometrista", article: "an", category: "Salud" },
    { job: "Paramedic", translation: "Paramédico/a", article: "a", category: "Salud" },
    { job: "Pediatrician", translation: "Pediatra", article: "a", category: "Salud" },
    { job: "Pharmacist", translation: "Farmacéutico/a", article: "a", category: "Salud" },
    { job: "Physical Therapist", translation: "Fisioterapeuta", article: "a", category: "Salud" },
    { job: "Psychiatrist", translation: "Psiquiatra", article: "a", category: "Salud" },
    { job: "Psychologist", translation: "Psicólogo/a", article: "a", category: "Salud" },
    { job: "Radiologist", translation: "Radiólogo/a", article: "a", category: "Salud" },
    { job: "Surgeon", translation: "Cirujano/a", article: "a", category: "Salud" },
    { job: "Veterinarian", translation: "Veterinario/a", article: "a", category: "Salud" },
    // Educación
    { job: "Coach", translation: "Entrenador/a", article: "a", category: "Educación" },
    { job: "Kindergarten Teacher", translation: "Maestro/a de Kínder", article: "a", category: "Educación" },
    { job: "Librarian", translation: "Bibliotecario/a", article: "a", category: "Educación" },
    { job: "Principal", translation: "Director/a de Escuela", article: "a", category: "Educación" },
    { job: "Professor", translation: "Catedrático/a", article: "a", category: "Educación" },
    { job: "Researcher", translation: "Investigador/a", article: "a", category: "Educación" },
    { job: "School Counselor", translation: "Consejero/a Escolar", article: "a", category: "Educación" },
    { job: "Special Education Teacher", translation: "Maestro/a de Educación Especial", article: "a", category: "Educación" },
    { job: "Teacher", translation: "Profesor/a, Maestro/a", article: "a", category: "Educación" },
    { job: "Tutor", translation: "Tutor/a", article: "a", category: "Educación" },
    // Negocios
    { job: "Accountant", translation: "Contador/a", article: "an", category: "Negocios" },
    { job: "Administrative Assistant", translation: "Asistente Administrativo/a", article: "an", category: "Negocios" },
    { job: "Auditor", translation: "Auditor/a", article: "an", category: "Negocios" },
    { job: "CEO", translation: "Director/a Ejecutivo/a", article: "a", category: "Negocios" },
    { job: "CFO", translation: "Director/a Financiero/a", article: "a", category: "Negocios" },
    { job: "Consultant", translation: "Consultor/a", article: "a", category: "Negocios" },
    { job: "Economist", translation: "Economista", article: "an", category: "Negocios" },
    { job: "Entrepreneur", translation: "Emprendedor/a", article: "an", category: "Negocios" },
    { job: "Executive Assistant", translation: "Asistente Ejecutivo/a", article: "an", category: "Negocios" },
    { job: "Financial Analyst", translation: "Analista Financiero/a", article: "a", category: "Negocios" },
    { job: "Human Resources Manager", translation: "Gerente de Recursos Humanos", article: "a", category: "Negocios" },
    { job: "Insurance Agent", translation: "Agente de Seguros", article: "an", category: "Negocios" },
    { job: "Investment Banker", translation: "Banquero/a de Inversiones", article: "an", category: "Negocios" },
    { job: "Manager", translation: "Gerente", article: "a", category: "Negocios" },
    { job: "Marketing Manager", translation: "Gerente de Marketing", article: "a", category: "Negocios" },
    { job: "Office Clerk", translation: "Oficinista", article: "an", category: "Negocios" },
    { job: "Real Estate Agent", translation: "Agente de Bienes Raíces", article: "a", category: "Negocios" },
    { job: "Receptionist", translation: "Recepcionista", article: "a", category: "Negocios" },
    { job: "Sales Representative", translation: "Representante de Ventas", article: "a", category: "Negocios" },
    { job: "Stockbroker", translation: "Corredor/a de Bolsa", article: "a", category: "Negocios" },
    // Gastronomía
    { job: "Baker", translation: "Panadero/a", article: "a", category: "Gastronomía" },
    { job: "Barista", translation: "Barista", article: "a", category: "Gastronomía" },
    { job: "Bartender", translation: "Cantinero/a", article: "a", category: "Gastronomía" },
    { job: "Butcher", translation: "Carnicero/a", article: "a", category: "Gastronomía" },
    { job: "Caterer", translation: "Proveedor/a de Banquetes", article: "a", category: "Gastronomía" },
    { job: "Chef", translation: "Chef", article: "a", category: "Gastronomía" },
    { job: "Concierge", translation: "Conserje", article: "a", category: "Gastronomía" },
    { job: "Cook", translation: "Cocinero/a", article: "a", category: "Gastronomía" },
    { job: "Flight Attendant", translation: "Auxiliar de Vuelo", article: "a", category: "Gastronomía" },
    { job: "Hotel Manager", translation: "Gerente de Hotel", article: "a", category: "Gastronomía" },
    { job: "Housekeeper", translation: "Empleado/a de Limpieza", article: "a", category: "Gastronomía" },
    { job: "Restaurant Manager", translation: "Gerente de Restaurante", article: "a", category: "Gastronomía" },
    { job: "Sommelier", translation: "Sommelier", article: "a", category: "Gastronomía" },
    { job: "Waiter", translation: "Mesero", article: "a", category: "Gastronomía" },
    { job: "Waitress", translation: "Mesera", article: "a", category: "Gastronomía" },
    // Oficios
    { job: "Blacksmith", translation: "Herrero/a", article: "a", category: "Oficios" },
    { job: "Bricklayer", translation: "Albañil", article: "a", category: "Oficios" },
    { job: "Carpenter", translation: "Carpintero/a", article: "a", category: "Oficios" },
    { job: "Construction Worker", translation: "Trabajador/a de Construcción", article: "a", category: "Oficios" },
    { job: "Electrician", translation: "Electricista", article: "an", category: "Oficios" },
    { job: "Farmer", translation: "Agricultor/a", article: "a", category: "Oficios" },
    { job: "Fisherman", translation: "Pescador", article: "a", category: "Oficios" },
    { job: "Glazier", translation: "Vidriero/a", article: "a", category: "Oficios" },
    { job: "HVAC Technician", translation: "Técnico/a en Climatización", article: "an", category: "Oficios" },
    { job: "Landscaper", translation: "Paisajista", article: "a", category: "Oficios" },
    { job: "Locksmith", translation: "Cerrajero/a", article: "a", category: "Oficios" },
    { job: "Mechanic", translation: "Mecánico/a", article: "a", category: "Oficios" },
    { job: "Miner", translation: "Minero/a", article: "a", category: "Oficios" },
    { job: "Painter", translation: "Pintor/a", article: "a", category: "Oficios" },
    { job: "Plumber", translation: "Plomero/a", article: "a", category: "Oficios" },
    { job: "Roofer", translation: "Techador/a", article: "a", category: "Oficios" },
    { job: "Shoemaker", translation: "Zapatero/a", article: "a", category: "Oficios" },
    { job: "Tailor", translation: "Sastre", article: "a", category: "Oficios" },
    { job: "Upholsterer", translation: "Tapicero/a", article: "an", category: "Oficios" },
    { job: "Welder", translation: "Soldador/a", article: "a", category: "Oficios" },
    // Servicio Público
    { job: "Customs Officer", translation: "Oficial de Aduanas", article: "a", category: "Servicio Público" },
    { job: "Detective", translation: "Detective", article: "a", category: "Servicio Público" },
    { job: "Diplomat", translation: "Diplomático/a", article: "a", category: "Servicio Público" },
    { job: "Firefighter", translation: "Bombero/a", article: "a", category: "Servicio Público" },
    { job: "Judge", translation: "Juez/a", article: "a", category: "Servicio Público" },
    { job: "Lawyer", translation: "Abogado/a", article: "a", category: "Servicio Público" },
    { job: "Lifeguard", translation: "Salvavidas", article: "a", category: "Servicio Público" },
    { job: "Mayor", translation: "Alcalde / Alcaldesa", article: "a", category: "Servicio Público" },
    { job: "Paralegal", translation: "Asistente Legal", article: "a", category: "Servicio Público" },
    { job: "Police Officer", translation: "Policía", article: "a", category: "Servicio Público" },
    { job: "Politician", translation: "Político/a", article: "a", category: "Servicio Público" },
    { job: "Postal Worker", translation: "Cartero/a", article: "a", category: "Servicio Público" },
    { job: "Security Guard", translation: "Guardia de Seguridad", article: "a", category: "Servicio Público" },
    { job: "Social Worker", translation: "Trabajador/a Social", article: "a", category: "Servicio Público" },
    { job: "Soldier", translation: "Soldado", article: "a", category: "Servicio Público" },
    // Arte y Medios
    { job: "Actor", translation: "Actor", article: "an", category: "Arte y Medios" },
    { job: "Actress", translation: "Actriz", article: "an", category: "Arte y Medios" },
    { job: "Animator", translation: "Animador/a", article: "an", category: "Arte y Medios" },
    { job: "Architect", translation: "Arquitecto/a", article: "an", category: "Arte y Medios" },
    { job: "Artist", translation: "Artista", article: "an", category: "Arte y Medios" },
    { job: "Dancer", translation: "Bailarín / Bailarina", article: "a", category: "Arte y Medios" },
    { job: "Director", translation: "Director/a", article: "a", category: "Arte y Medios" },
    { job: "Editor", translation: "Editor/a", article: "an", category: "Arte y Medios" },
    { job: "Fashion Designer", translation: "Diseñador/a de Moda", article: "a", category: "Arte y Medios" },
    { job: "Filmmaker", translation: "Cineasta", article: "a", category: "Arte y Medios" },
    { job: "Graphic Designer", translation: "Diseñador/a Gráfico/a", article: "a", category: "Arte y Medios" },
    { job: "Illustrator", translation: "Ilustrador/a", article: "an", category: "Arte y Medios" },
    { job: "Interior Designer", translation: "Diseñador/a de Interiores", article: "an", category: "Arte y Medios" },
    { job: "Journalist", translation: "Periodista", article: "a", category: "Arte y Medios" },
    { job: "Musician", translation: "Músico/a", article: "a", category: "Arte y Medios" },
    { job: "Photographer", translation: "Fotógrafo/a", article: "a", category: "Arte y Medios" },
    { job: "Producer", translation: "Productor/a", article: "a", category: "Arte y Medios" },
    { job: "Sculptor", translation: "Escultor/a", article: "a", category: "Arte y Medios" },
    { job: "Singer", translation: "Cantante", article: "a", category: "Arte y Medios" },
    { job: "Writer", translation: "Escritor/a", article: "a", category: "Arte y Medios" },
    // Transporte
    { job: "Air Traffic Controller", translation: "Controlador/a de Tráfico Aéreo", article: "an", category: "Transporte" },
    { job: "Bus Driver", translation: "Chofer de Autobús", article: "a", category: "Transporte" },
    { job: "Delivery Driver", translation: "Repartidor/a", article: "a", category: "Transporte" },
    { job: "Flight Instructor", translation: "Instructor/a de Vuelo", article: "an", category: "Transporte" },
    { job: "Pilot", translation: "Piloto", article: "a", category: "Transporte" },
    { job: "Sailor", translation: "Marinero/a", article: "a", category: "Transporte" },
    { job: "Ship Captain", translation: "Capitán de Barco", article: "a", category: "Transporte" },
    { job: "Taxi Driver", translation: "Taxista", article: "a", category: "Transporte" },
    { job: "Train Conductor", translation: "Conductor/a de Tren", article: "a", category: "Transporte" },
    { job: "Truck Driver", translation: "Camionero/a", article: "a", category: "Transporte" },
    // Ciencia
    { job: "Astronomer", translation: "Astrónomo/a", article: "an", category: "Ciencia" },
    { job: "Biologist", translation: "Biólogo/a", article: "a", category: "Ciencia" },
    { job: "Chemical Engineer", translation: "Ingeniero/a Químico/a", article: "a", category: "Ciencia" },
    { job: "Chemist", translation: "Químico/a", article: "a", category: "Ciencia" },
    { job: "Civil Engineer", translation: "Ingeniero/a Civil", article: "a", category: "Ciencia" },
    { job: "Electrical Engineer", translation: "Ingeniero/a Eléctrico/a", article: "an", category: "Ciencia" },
    { job: "Engineer", translation: "Ingeniero/a", article: "an", category: "Ciencia" },
    { job: "Environmental Scientist", translation: "Científico/a Ambiental", article: "an", category: "Ciencia" },
    { job: "Geologist", translation: "Geólogo/a", article: "a", category: "Ciencia" },
    { job: "Marine Biologist", translation: "Biólogo/a Marino/a", article: "a", category: "Ciencia" },
    { job: "Mechanical Engineer", translation: "Ingeniero/a Mecánico/a", article: "a", category: "Ciencia" },
    { job: "Meteorologist", translation: "Meteorólogo/a", article: "a", category: "Ciencia" },
    { job: "Physicist", translation: "Físico/a", article: "a", category: "Ciencia" },
    { job: "Scientist", translation: "Científico/a", article: "a", category: "Ciencia" },
    { job: "Statistician", translation: "Estadístico/a", article: "a", category: "Ciencia" },
    // Servicios
    { job: "Babysitter", translation: "Niñero/a", article: "a", category: "Servicios" },
    { job: "Barber", translation: "Barbero", article: "a", category: "Servicios" },
    { job: "Beautician", translation: "Esteticista", article: "a", category: "Servicios" },
    { job: "Cashier", translation: "Cajero/a", article: "a", category: "Servicios" },
    { job: "Cleaner", translation: "Limpiador/a", article: "a", category: "Servicios" },
    { job: "Dog Walker", translation: "Paseador/a de Perros", article: "a", category: "Servicios" },
    { job: "Fitness Instructor", translation: "Instructor/a de Fitness", article: "a", category: "Servicios" },
    { job: "Gardener", translation: "Jardinero/a", article: "a", category: "Servicios" },
    { job: "Hairdresser", translation: "Estilista", article: "a", category: "Servicios" },
    { job: "Janitor", translation: "Conserje", article: "a", category: "Servicios" },
    { job: "Nanny", translation: "Niñera", article: "a", category: "Servicios" },
    { job: "Personal Trainer", translation: "Entrenador/a Personal", article: "a", category: "Servicios" },
    { job: "Pet Groomer", translation: "Estilista de Mascotas", article: "a", category: "Servicios" },
    { job: "Salesperson", translation: "Vendedor/a", article: "a", category: "Servicios" },
    { job: "Store Manager", translation: "Gerente de Tienda", article: "a", category: "Servicios" }
  ], []);

  const filteredCountries = useMemo(() => sortByWord(allCountries.filter(item =>
    item.country.toLowerCase().includes(countrySearch.toLowerCase()) ||
    item.nationality.toLowerCase().includes(countrySearch.toLowerCase()) ||
    item.translation.toLowerCase().includes(countrySearch.toLowerCase())
  ), countrySort, 'country'), [allCountries, countrySearch, countrySort]);

  const filteredJobs = useMemo(() => sortByWord(allJobs.filter(item =>
    item.job.toLowerCase().includes(jobSearch.toLowerCase()) ||
    item.translation.toLowerCase().includes(jobSearch.toLowerCase()) ||
    item.category.toLowerCase().includes(jobSearch.toLowerCase())
  ), jobSort, 'job'), [allJobs, jobSearch, jobSort]);

  const countryTotalPages = Math.max(1, Math.ceil(filteredCountries.length / countryPageSize));
  const jobTotalPages = Math.max(1, Math.ceil(filteredJobs.length / jobPageSize));

  const paginatedCountries = filteredCountries.slice((countryPage - 1) * countryPageSize, countryPage * countryPageSize);
  const paginatedJobs = filteredJobs.slice((jobPage - 1) * jobPageSize, jobPage * jobPageSize);

  const handleCountrySearch = (value) => {
    setCountrySearch(value);
    setCountryPage(1);
  };

  const handleJobSearch = (value) => {
    setJobSearch(value);
    setJobPage(1);
  };

  const handleCountryPageSize = (size) => {
    setCountryPageSize(size);
    setCountryPage(1);
  };

  const handleJobPageSize = (size) => {
    setJobPageSize(size);
    setJobPage(1);
  };

  return (
    <div className="topic-detail">
      <div className="topic-header">
        <span className="unit-number" style={{ color: 'var(--color-evolve1)' }}>Evolve 1 • Unidad 1 • Vocabulario</span>
        <h2>Países, Nacionalidades y Profesiones (Edición Completa)</h2>
        <p className="topic-intro">
          Aprende el vocabulario completo de países y nacionalidades del mundo, más de 200 profesiones de la vida cotidiana (incluyendo tecnología y desarrollo de software) con sus reglas gramaticales.
        </p>
      </div>

      {/* SECCIÓN 1: PAÍSES Y NACIONALIDADES */}
      <div className="content-section">
        <h3>1. Diccionario de Países y Nacionalidades</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          En inglés, los nombres de los países y las nacionalidades <strong>siempre</strong> se escriben con mayúscula inicial. Haz clic en el botón de audio 🔊 para escuchar la pronunciación exacta de la combinación de País y Nacionalidad.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            className="search-input"
            style={{ flex: 1, minWidth: '200px' }}
            placeholder="🔍 Buscar país o nacionalidad..."
            value={countrySearch}
            onChange={(e) => handleCountrySearch(e.target.value)}
          />
          <SortToggle mode={countrySort} onChange={setCountrySort} />
        </div>
        <span className="result-count">{filteredCountries.length} de {allCountries.length} países</span>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {paginatedCountries.map((item, index) => (
            <div key={index} className="example-item" style={{ borderLeft: `3px solid var(--color-evolve1)` }}>
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{item.country} ➔ {item.nationality}</span>
                <button
                  className="audio-btn"
                  onClick={() => speak(`${item.country}. ${item.nationality}.`)}
                  title="Escuchar"
                  style={{ margin: 0 }}
                >
                  🔊
                </button>
              </div>
              <div className="example-es" style={{ marginTop: '6px', fontSize: '0.85rem' }}>
                {item.translation} <span style={{ float: 'right', fontSize: '0.75rem', color: 'var(--color-evolve1)', opacity: 0.8 }}>{item.suffix}</span>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          page={countryPage}
          totalPages={countryTotalPages}
          totalItems={filteredCountries.length}
          onChange={setCountryPage}
          itemsPerPage={countryPageSize}
          onItemsPerPageChange={handleCountryPageSize}
        />
      </div>

      {/* SECCIÓN 2: TRABAJOS Y PROFESIONES */}
      <div className="content-section">
        <h3>2. Trabajos y Profesiones (a / an Rule)</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Recuerda: Usa <strong>a</strong> antes de un sonido de consonante y <strong>an</strong> antes de un sonido de vocal.
        </p>

        <div className="examples-grid">
          <div className="example-item">
            <div className="example-en">
              I am a student.
              <button className="audio-btn" onClick={() => speak("I am a student.")} title="Escuchar">🔊</button>
            </div>
            <div className="example-es">Yo soy estudiante.</div>
          </div>
          <div className="example-item">
            <div className="example-en">
              He is an accountant.
              <button className="audio-btn" onClick={() => speak("He is an accountant.")} title="Escuchar">🔊</button>
            </div>
            <div className="example-es">Él es contador. (Sonido vocal /æ/)</div>
          </div>
          <div className="example-item">
            <div className="example-en">
              She is a nurse.
              <button className="audio-btn" onClick={() => speak("She is a nurse.")} title="Escuchar">🔊</button>
            </div>
            <div className="example-es">Ella es enfermera. (Sonido consonante /n/)</div>
          </div>
          <div className="example-item">
            <div className="example-en">
              They are engineers.
              <button className="audio-btn" onClick={() => speak("They are engineers.")} title="Escuchar">🔊</button>
            </div>
            <div className="example-es">Ellos son ingenieros. (¡Ojo! En plural no se usa "a" o "an")</div>
          </div>
        </div>

        <p style={{ margin: '20px 0 12px', color: 'var(--text-muted)' }}>
          Ahora el diccionario completo: más de 200 profesiones de la vida cotidiana, incluyendo un bloque completo de <strong>Tecnología y Desarrollo</strong>. Busca por nombre en inglés, español o categoría.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            className="search-input"
            style={{ flex: 1, minWidth: '200px' }}
            placeholder="🔍 Buscar trabajo, traducción o categoría (ej. 'developer', 'salud', 'chef')..."
            value={jobSearch}
            onChange={(e) => handleJobSearch(e.target.value)}
          />
          <SortToggle mode={jobSort} onChange={setJobSort} />
        </div>
        <span className="result-count">{filteredJobs.length} de {allJobs.length} profesiones</span>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {paginatedJobs.map((item, index) => (
            <div key={index} className="example-item" style={{ borderLeft: `3px solid var(--color-evolve1)` }}>
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span>{item.article} {item.job}</span>
                <button
                  className="audio-btn"
                  onClick={() => speak(`${item.article} ${item.job}.`)}
                  title="Escuchar"
                  style={{ margin: 0 }}
                >
                  🔊
                </button>
              </div>
              <div className="example-es" style={{ marginTop: '6px', fontSize: '0.85rem' }}>
                {item.translation} <span className="category-tag" style={{ float: 'right' }}>{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          page={jobPage}
          totalPages={jobTotalPages}
          totalItems={filteredJobs.length}
          onChange={setJobPage}
          itemsPerPage={jobPageSize}
          onItemsPerPageChange={handleJobPageSize}
        />
      </div>

      {/* SECCIÓN 3: PRONUNCIACIÓN */}
      <div className="content-section">
        <h3>3. Pronunciación: los sonidos /iː/ y /ɪ/</h3>
        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
          Muchas nacionalidades y palabras de esta unidad usan dos sonidos vocálicos que en español suenan casi iguales, pero en inglés cambian por completo el significado de la palabra: la <strong>i larga /iː/</strong> (como en "sheep") y la <strong>i corta /ɪ/</strong> (como en "ship"). Escucha los pares y repite en voz alta.
        </p>

        <div className="examples-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
          {[
            { long: "sheep", longEs: "oveja", short: "ship", shortEs: "barco" },
            { long: "cheap", longEs: "barato", short: "chip", shortEs: "papa frita / chip" },
            { long: "green", longEs: "verde", short: "grin", shortEs: "sonrisa amplia" },
            { long: "peel", longEs: "pelar", short: "pill", shortEs: "pastilla" },
            { long: "he's", longEs: "él es", short: "his", shortEs: "su (de él)" },
            { long: "read", longEs: "leer (presente)", short: "rid", shortEs: "librarse de" }
          ].map((pair, index) => (
            <div key={index} className="example-item">
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span><strong>/iː/</strong> {pair.long}</span>
                <button className="audio-btn" onClick={() => speak(pair.long)} title="Escuchar">🔊</button>
              </div>
              <div className="example-es" style={{ marginBottom: '10px' }}>{pair.longEs}</div>
              <div className="example-en" style={{ justifyContent: 'space-between' }}>
                <span><strong>/ɪ/</strong> {pair.short}</span>
                <button className="audio-btn" onClick={() => speak(pair.short)} title="Escuchar">🔊</button>
              </div>
              <div className="example-es">{pair.shortEs}</div>
            </div>
          ))}
        </div>

        <div className="insider-box" style={{ marginTop: '20px' }}>
          <div className="insider-title">
            <span>🗣️</span> Truco de pronunciación
          </div>
          <div className="insider-content">
            Para el sonido <strong>/iː/</strong> (largo), estira los labios como en una sonrisa y alarga la vocal. Para <strong>/ɪ/</strong> (corto), relaja la mandíbula y pronuncia la vocal de forma breve y relajada, casi como una "e" corta. Practica con nacionalidades como <strong>"Chinese"</strong> /iː/ y con palabras como <strong>"it's"</strong> /ɪ/.
          </div>
        </div>
      </div>

      {/* INSIDER BOX */}
      <div className="insider-box">
        <div className="insider-title">
          <span>💡</span> Insider English: Regla Plural
        </div>
        <div className="insider-content">
          Los artículos <strong>a</strong> y <strong>an</strong> significan "un" o "una" y <strong>únicamente se utilizan en singular</strong>. <br />
          Para decir "Ellos son doctores", nunca digas: ❌ <em>"They are a doctors"</em>. <br />
          Dices directamente: ➔ ✅ <strong>"They are doctors."</strong>
        </div>
      </div>

      {/* WIDGET DE EXAMEN */}
      <div className="quiz-widget">
        <div className="quiz-widget-info">
          <h4>Mini-Examen de Autoevaluación</h4>
          <p>Pon a prueba tu conocimiento de países, nacionalidades y profesiones del mundo.</p>
        </div>
        <button className="btn-start-quiz">Iniciar Quiz (5 Preguntas)</button>
      </div>
    </div>
  );
};

export default VocabularyTopic;

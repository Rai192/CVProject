import type { ExperienceItem, Highlight, NavItem, StackGroup } from '../types/cv';

// La navegacion usa anclas internas para recorrer la landing sin salir de la pagina.
export const navItems: NavItem[] = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mi' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#stack', label: 'Stack' },
  { href: '#contacto', label: 'Contacto' },
];

// Estos bloques resumen fortalezas visibles en la seccion "Sobre mi".
export const highlights: Highlight[] = [
  {
    title: 'Front-End con impacto real',
    description:
      'Experiencia construyendo interfaces y flujos de usuario para productos financieros y plataformas del area salud.',
  },
  {
    title: 'Mobile hibrido listo para negocio',
    description:
      'Trabajo con Ionic, Android Studio y Xcode para llevar experiencias web al entorno movil sin perder continuidad tecnica.',
  },
  {
    title: 'Integracion sin perder contexto',
    description:
      'Consumo de APIs REST, colaboracion con backend Java y enfoque en soluciones mantenibles dentro de equipos agiles.',
  },
];

// La experiencia queda separada como datos para reutilizarla luego en otras paginas.
export const experiences: ExperienceItem[] = [
  {
    company: 'Landscape Chile',
    role: 'Desarrollador Front-End / Desarrollador App Mobile (Ionic/Angular)',
    period: 'Junio 2022 - Actualidad',
    location: 'Chile / remoto',
    summary: [
      'Desarrollo y mantencion de soluciones web y moviles para productos financieros.',
      'Implementacion de funcionalidades en Angular e Ionic orientadas a experiencia de usuario y mejoras evolutivas.',
      'Integracion con APIs y colaboracion con logica backend en Java/Spring Boot.',
    ],
  },
  {
    company: 'Entelgy',
    role: 'Desarrollador de Software',
    period: 'Marzo 2022 - Junio 2022',
    location: 'Santiago, Chile',
    summary: [
      'Desarrollo y mantencion de aplicacion web en Angular 7, Angular Material y Bootstrap.',
      'Ajuste de servicios REST con Apache Camel sobre JBoss Fuse 7.5 usando Java OpenJDK 11.',
      'Trabajo con tickets, analisis funcional y operacion sobre datos SQL.',
    ],
  },
  {
    company: 'Tecnologias y Telecomunicaciones Soft360',
    role: 'Desarrollador de Software',
    period: 'Marzo 2021 - Febrero 2022',
    location: 'Santiago, Chile',
    summary: [
      'Desarrollo front-end de aplicacion web con Angular 7, Angular Material y Bootstrap.',
      'Construccion de servicios REST con Apache Camel desplegados en JBoss Fuse 7.5.',
      'Analisis y priorizacion de requerimientos bajo historias de usuario.',
    ],
  },
];

// El stack se agrupa por categoria para que la UI no mezcle todo en una sola lista.
export const stackGroups: StackGroup[] = [
  {
    title: 'Principal',
    items: ['Angular', 'Ionic', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'REST APIs'],
  },
  {
    title: 'Integracion y backend',
    items: ['Java', 'Spring Boot', 'Apache Camel', 'JBoss Fuse'],
  },
  {
    title: 'Datos y herramientas',
    items: ['SQL', 'Postman', 'Git', 'DBeaver', 'Jira', 'Confluence', 'Scrum'],
  },
];

// Estas etiquetas cortas viven en el hero como resumen rapido del perfil tecnico.
export const heroTags = ['Angular', 'Ionic', 'TypeScript', 'APIs REST'];

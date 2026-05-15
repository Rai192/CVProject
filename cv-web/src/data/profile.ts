import type {
  ContactInfo,
  ExperienceItem,
  FeatureCard,
  HeroContent,
  Highlight,
  NavItem,
  QuickStat,
  SectionIntro,
  StackGroup,
} from '../types/cv';

// La navegacion usa anclas internas para recorrer la landing sin salir de la pagina.
export const navItems: NavItem[] = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#stack', label: 'Stack' },
  { href: '#contacto', label: 'Contacto' },
];

// Este bloque reúne el contenido principal del hero para no dejarlo hardcodeado en la página.
export const heroContent: HeroContent = {
  eyebrow: 'Front-End + Mobile + Integración',
  name: 'Raimundo Felipe Plaza Undurraga',
  role: 'Full-Stack Developer | Front-End & Mobile Developer con Angular e Ionic',
  summary:
    'Desarrollador Full-Stack con foco en Front-End y mobile híbrido, orientado a construir productos claros, mantenibles y alineados a necesidades reales de negocio.',
  description:
    'Experiencia desarrollando aplicaciones web y móviles con Angular, Ionic y TypeScript, participando en productos financieros y plataformas del área salud. Combino implementación frontend, integración con APIs REST y trabajo cercano con requerimientos funcionales dentro de equipos ágiles.',
  email: 'raimundoplazau@gmail.com',
  linkedinUrl: 'https://linkedin.com/in/raimundo-plaza-undurraga-37b302196',
  linkedinLabel: 'Ver LinkedIn',
  metaDescription:
    'Raimundo Plaza, Full-Stack Developer con foco en Front-End y mobile híbrido con Angular e Ionic.',
};

// Este bloque lateral del hero resume el enfoque profesional actual.
export const heroFocus: SectionIntro = {
  eyebrow: 'Foco actual',
  title: 'Interfaces, integración y continuidad técnica',
  description:
    'Perfil orientado a entregar soluciones funcionales y comprensibles, con equilibrio entre experiencia de usuario, integración técnica y mantenimiento.',
};

// Estas métricas rápidas refuerzan el perfil sin convertir el hero en un CV completo.
export const quickStats: QuickStat[] = [
  { value: '6+', label: 'Años de experiencia en desarrollo de software' },
  { value: '3', label: 'Experiencias clave en finanzas, salud e integración' },
  { value: '4', label: 'Tecnologías visibles que resumen el perfil principal' },
];

// Estos bloques resumen fortalezas visibles en la sección "Sobre mí".
export const highlights: Highlight[] = [
  {
    title: 'Front-End con impacto real',
    description:
      'Experiencia construyendo interfaces y flujos de usuario para productos financieros y plataformas del área salud.',
  },
  {
    title: 'Mobile híbrido listo para negocio',
    description:
      'Trabajo con Ionic, Android Studio y Xcode para llevar experiencias web al entorno móvil sin perder continuidad técnica.',
  },
  {
    title: 'Integración sin perder contexto',
    description:
      'Consumo de APIs REST, colaboración con backend Java y enfoque en soluciones mantenibles dentro de equipos ágiles.',
  },
];

// Este intro resume la sección "Sobre mí" y deja el contenido editorial fuera del render.
export const aboutIntro: SectionIntro = {
  eyebrow: 'Sobre mí',
  title: 'Una base técnica pensada para productos reales',
  description:
    'Perfil técnico con experiencia en desarrollo Full-Stack, especialmente en interfaces web y aplicaciones móviles híbridas. He trabajado en mantención evolutiva, implementación de nuevas funcionalidades, integración de servicios y apoyo en flujos de build mobile.',
};

// Este texto complementa la sección "Sobre mí" con más contexto del perfil.
export const aboutSecondaryText =
  'Mi experiencia cruza frontend moderno, consumo de APIs, soporte sobre backend Java y herramientas de coordinación y priorización. El foco general del trabajo está en entregar soluciones funcionales, comprensibles y sostenibles dentro de equipos de desarrollo.';

// Estas tarjetas fijas muestran fortalezas visibles sin depender de la experiencia detallada.
export const featureCards: FeatureCard[] = [
  {
    eyebrow: 'Frontend',
    title: 'Angular, TypeScript y UI mantenible',
    description:
      'Implementación de interfaces y flujos claros orientados a producto y continuidad técnica.',
  },
  {
    eyebrow: 'Mobile',
    title: 'Ionic y builds para entornos reales',
    description:
      'Experiencia llevando soluciones web al entorno móvil con procesos de build y ajuste.',
  },
  {
    eyebrow: 'Integración',
    title: 'REST APIs y colaboración con backend',
    description:
      'Consumo de servicios y apoyo sobre Java para mantener continuidad entre capas.',
  },
  {
    eyebrow: 'Trabajo ágil',
    title: 'Ejecución, tickets y requerimientos',
    description:
      'Participación en priorización, coordinación y mejora continua dentro de equipos ágiles.',
  },
];

// La experiencia queda separada como datos para reutilizarla luego en otras páginas.
export const experiences: ExperienceItem[] = [
  {
    company: 'Landscape Chile',
    role: 'Desarrollador Front-End / Desarrollador App Mobile (Ionic/Angular)',
    period: 'Junio 2022 - Actualidad',
    location: 'Chile / remoto',
    summary: [
      'Desarrollo y mantención de soluciones web y móviles para productos financieros.',
      'Implementación de funcionalidades en Angular e Ionic orientadas a experiencia de usuario y mejoras evolutivas.',
      'Integración con APIs y colaboración con lógica backend en Java/Spring Boot.',
    ],
  },
  {
    company: 'Entelgy',
    role: 'Desarrollador de Software',
    period: 'Marzo 2022 - Junio 2022',
    location: 'Santiago, Chile',
    summary: [
      'Desarrollo y mantención de aplicación web en Angular 7, Angular Material y Bootstrap.',
      'Ajuste de servicios REST con Apache Camel sobre JBoss Fuse 7.5 usando Java OpenJDK 11.',
      'Trabajo con tickets, análisis funcional y operación sobre datos SQL.',
    ],
  },
  {
    company: 'Tecnologias y Telecomunicaciones Soft360',
    role: 'Desarrollador de Software',
    period: 'Marzo 2021 - Febrero 2022',
    location: 'Santiago, Chile',
    summary: [
      'Desarrollo front-end de aplicación web con Angular 7, Angular Material y Bootstrap.',
      'Construcción de servicios REST con Apache Camel desplegados en JBoss Fuse 7.5.',
      'Análisis y priorización de requerimientos bajo historias de usuario.',
    ],
  },
];

// Este intro contextualiza la experiencia antes de listar las empresas.
export const experienceIntro: SectionIntro = {
  eyebrow: 'Experiencia',
  title: 'Trayectoria resumida con foco en impacto y contexto',
  description:
    'Una vista corta de los roles más relevantes para reclutadores y líderes técnicos. El detalle completo puede crecer a una página dedicada sin cambiar la narrativa principal.',
  ctaLabel: 'Ver más experiencia',
  ctaHref: '#experiencia',
};

// El stack se agrupa por categoria para que la UI no mezcle todo en una sola lista.
export const stackGroups: StackGroup[] = [
  {
    title: 'Principal',
    items: ['Angular', 'Ionic', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'REST APIs'],
  },
  {
    title: 'Integración y backend',
    items: ['Java', 'Spring Boot', 'Apache Camel', 'JBoss Fuse'],
  },
  {
    title: 'Datos y herramientas',
    items: ['SQL', 'Postman', 'Git', 'DBeaver', 'Jira', 'Confluence', 'Scrum'],
  },
];

// Este intro explica por qué el stack está resumido en la portada.
export const stackIntro: SectionIntro = {
  eyebrow: 'Stack',
  title: 'Tecnologías agrupadas por especialidad',
  description:
    'El objetivo de esta sección es mostrar especialización sin saturar la portada. Cuando el sitio crezca, este bloque puede abrir paso a una página con más profundidad técnica.',
  ctaLabel: 'Ver stack completo',
  ctaHref: '#stack',
};

// Estas etiquetas cortas viven en el hero como resumen rápido del perfil técnico.
export const heroTags = ['Angular', 'Ionic', 'TypeScript', 'APIs REST'];

// El contacto se centraliza para no duplicar texto visible dentro de la página.
export const contactInfo: ContactInfo = {
  eyebrow: 'Contacto',
  title: 'Listo para conversar sobre producto, frontend y crecimiento técnico',
  description:
    'Si buscas un perfil que combine implementación, claridad técnica y foco práctico de negocio, este sitio puede crecer contigo hacia más detalle. La base ya está lista para seguir expandiéndose a páginas de experiencia y stack.',
  email: 'raimundoplazau@gmail.com',
  linkedinUrl: 'https://linkedin.com/in/raimundo-plaza-undurraga-37b302196',
  linkedinLabel: 'linkedin.com/in/raimundo-plaza-undurraga-37b302196',
};

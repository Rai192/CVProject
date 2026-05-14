// Estos tipos describen la forma de los datos que luego renderiza la landing.
export type NavItem = {
  href: string;
  label: string;
};

// Un highlight representa una idea corta usada en tarjetas o bloques de valor.
export type Highlight = {
  title: string;
  description: string;
};

// Cada experiencia mantiene datos base y una lista breve de aportes o tareas.
export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string[];
};

// Un grupo de stack permite separar tecnologias por categoria visible en la UI.
export type StackGroup = {
  title: string;
  items: string[];
};

// El hero agrupa el contenido principal que se ve primero al entrar al sitio.
export type HeroContent = {
  eyebrow: string;
  name: string;
  role: string;
  summary: string;
  description: string;
  email: string;
  linkedinUrl: string;
  linkedinLabel: string;
  metaDescription: string;
};

// Una estadistica rapida resume un dato visible en tarjetas pequenas del hero.
export type QuickStat = {
  value: string;
  label: string;
};

// Una tarjeta fija resume una capacidad del perfil fuera de la experiencia detallada.
export type FeatureCard = {
  eyebrow: string;
  title: string;
  description: string;
};

// Un intro de seccion concentra el titulo, el texto y opcionalmente un CTA.
export type SectionIntro = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
};

// El bloque de contacto deja centralizado lo que se muestra en la landing.
export type ContactInfo = {
  eyebrow: string;
  title: string;
  description: string;
  email: string;
  linkedinUrl: string;
  linkedinLabel: string;
};

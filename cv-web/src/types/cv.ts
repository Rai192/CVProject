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

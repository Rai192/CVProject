import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Este archivo define la configuración general del proyecto Astro.
export default defineConfig({
  vite: {
    // Astro usa Vite por debajo; aquí se conecta Tailwind para procesar las clases del markup.
    plugins: [tailwindcss()],
  },
});

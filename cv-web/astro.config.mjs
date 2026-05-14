import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Astro centraliza su configuración aquí para que Vite, integraciones y futuras opciones
// del proyecto queden declaradas en un solo punto.
export default defineConfig({
  vite: {
    // Tailwind se conecta al pipeline de Vite para generar las utilidades usadas en las plantillas.
    plugins: [tailwindcss()],
  },
});

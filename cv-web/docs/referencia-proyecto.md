# Referencia del proyecto

## Estructura base

- `source-cv/`: carpeta privada para guardar el currículum original en PDF. Está ignorada por Git para evitar subir datos sensibles por accidente.
- `src/`: código fuente público del sitio. Aquí vive la implementación que sí se publica.
- `src/pages/`: rutas de Astro basadas en archivos.
- `src/styles/`: estilos globales y puntos de entrada de Tailwind.
- `public/`: archivos estáticos que se sirven tal cual.

## Flujo recomendado del CV

El PDF dentro de `source-cv/` funciona solo como fuente de referencia humana.

No debemos leerlo directamente desde la web ni convertirlo en la fuente final del renderizado. La idea es usarlo para trasladar el contenido, paso a paso, a datos más claros y mantenibles dentro del proyecto, idealmente con TypeScript cuando empecemos a tipar secciones del CV.

## Criterio de comentarios

Los comentarios del código deben ser didácticos y técnicos. Su objetivo es aclarar responsabilidades, integración o comportamiento de un bloque sin duplicar la sintaxis visible.

También seguiremos dos reglas pedagógicas simples:

- partir desde conceptos cercanos a HTML, CSS o TypeScript antes de introducir vocabulario propio de Astro
- explicar una sola idea importante por comentario para reducir carga cognitiva

### Qué sí comentamos

- bloques de Astro que separan lógica y plantilla
- decisiones de estructura visual o semántica
- integración de herramientas como Tailwind en la configuración
- procesos algo menos obvios cuando TypeScript empiece a participar en props o datos tipados

### Qué evitamos comentar

- cada línea evidente
- cada clase de Tailwind por separado
- archivos JSON como `package.json` o `tsconfig.json`, porque no admiten comentarios de forma segura
- comentarios narrativos, opinativos o centrados en “presentación” en vez de responsabilidad técnica

## Archivos importantes del inicio

- `astro.config.mjs`: define cómo se integra Astro con herramientas del entorno, como Tailwind a través de Vite.
- `tsconfig.json`: controla las reglas de TypeScript del proyecto. Extiende la configuración estricta que Astro recomienda.
- `src/pages/index.astro`: página inicial y ejemplo más simple para entender cómo Astro mezcla lógica e interfaz.
- `src/styles/global.css`: punto de entrada de Tailwind y lugar natural para estilos globales compartidos.

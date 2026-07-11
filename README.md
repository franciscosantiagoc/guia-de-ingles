# Guía de Inglés

Plataforma de inglés (A1 → C1) construida con React 19 + Vite, con temario original inspirado en Cambridge Evolve (6 niveles × 12 unidades × 5 lecciones por unidad).

## Desarrollo normal (sin la revisión de escritura con IA)

```bash
npm install
npm run dev
```

Esto es suficiente para navegar, editar y agregar contenido de las lecciones. La única función que **no** funcionará así es el botón "Enviar para revisión" en las secciones de Writing (ver abajo).

## Revisión de Writing con IA (opcional)

Algunas lecciones de Destrezas incluyen un cuadro donde el estudiante escribe un texto y recibe retroalimentación generada por IA (Claude, vía la API de Anthropic). Por seguridad, la clave de API nunca vive en el navegador: la llamada pasa por una función serverless de Netlify (`netlify/functions/grade-writing.js`) que guarda la clave del lado del servidor.

Si no configuras esto, el sitio funciona igual — el componente detecta que la función no está disponible y oculta el formulario automáticamente, mostrando un aviso en su lugar.

### 1. Consigue tu clave de API

Crea (o usa) una cuenta en [console.anthropic.com](https://console.anthropic.com) → **API Keys**. Esta es una cuenta de facturación separada de una suscripción de Claude.ai. El costo por revisión es de centésimas de centavo usando el modelo económico (Haiku).

### 2. Configura tu clave localmente

Copia `.env.example` a `.env` en la raíz del proyecto y pega tu clave:

```bash
cp .env.example .env
```

```
ANTHROPIC_API_KEY=sk-ant-tu-clave-real-aqui
```

`.env` ya está en `.gitignore` — nunca se sube al repositorio.

### 3. Instala el CLI de Netlify (una sola vez)

```bash
npm install -g netlify-cli
```

### 4. Corre el proyecto con `netlify dev` (no `npm run dev`)

```bash
netlify dev
```

Esto levanta Vite y la función serverless juntas en `http://localhost:8888`. Abre esa URL (no la de Vite en el puerto 5173) para que el botón de revisión funcione. Si abres el sitio con `npm run dev` normal, el componente detectará que la función no está activa y ocultará el formulario con un aviso.

### 5. Desplegar en Netlify (producción)

1. Conecta el repositorio en [app.netlify.com](https://app.netlify.com). Netlify detecta `netlify.toml` automáticamente (build command, carpeta `dist`, y la carpeta de funciones).
2. En **Site settings → Environment variables**, agrega `ANTHROPIC_API_KEY` con tu clave real.
3. Despliega. La función queda disponible en `/.netlify/functions/grade-writing` en tu dominio de producción.

### Cómo saber si está funcionando

El componente hace una verificación automática al cargar la página:

- Si la función responde correctamente → se muestra el formulario de escritura normal.
- Si no responde, responde con error, o falta la clave → se oculta el formulario y aparece un aviso con un botón "🔄 Reintentar".

No necesitas hacer nada manualmente para activar o desactivar esto: solo depende de si `netlify dev` está corriendo (local) o de si la variable de entorno está configurada (producción).

## Estructura del proyecto

- `src/data/levels.js` — los 6 niveles, 12 unidades cada uno, 5 lecciones por unidad.
- `src/topics/evolveN/unitM/*.jsx` — el contenido de cada lección (vocabulary, grammar1, grammar2, functional, skills).
- `src/components/` — componentes reutilizables (Pagination, WritingFeedback, etc.).
- `netlify/functions/` — funciones serverless (actualmente solo `grade-writing.js`).

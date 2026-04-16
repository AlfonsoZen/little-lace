
# Contexto del Proyecto: Little Lace E-commerce

## 🎯 Objetivo Principal
Eres un desarrollador Full-stack experto en arquitecturas modernas de E-commerce. Tu tarea es migrar un prototipo estático (actualmente en `index.html`) a una aplicación web progresiva y de alto rendimiento utilizando una arquitectura Headless.

El proyecto es "Little Lace", una marca de joyería artesanal premium. El diferenciador clave es la visualización de productos en 3D interactivo para las piezas estrella.

## 🛠️ Stack Tecnológico
* **Framework Frontend:** Next.js (React) - App Router.
* **Estilos:** Tailwind CSS.
* **Motor 3D:** `@react-three/fiber` y `@react-three/drei` (Reemplazando el `<model-viewer>` actual).
* **Backend / CMS:** Shopify Headless (Storefront API vía GraphQL).
* **Despliegue:** Vercel.
* **Entorno:** Node.js (Ubuntu/WSL2).

## 📂 Estructura de Carpetas Deseada
Por favor, genera e implementa la siguiente estructura base para el proyecto:

```text
/
├── public/                 # Assets estáticos (modelos .glb, imágenes, fuentes)
│   └── models/             # Aquí irán los modelos 3D (ej. ring.glb)
├── src/
│   ├── app/                # Next.js App Router (rutas y layouts)
│   │   ├── layout.tsx
│   │   └── page.tsx        # Home page (donde irá el hero 3D)
│   ├── components/
│   │   ├── 3d/             # Componentes de React Three Fiber (Canvas, Modelos, Luces)
│   │   ├── layout/         # Navbar, Footer
│   │   └── ui/             # Botones, Cards, selectores de color
│   ├── lib/                # Utilidades de librerías de terceros
│   │   └── shopify/        # Clientes GraphQL para la Storefront API
│   └── styles/
│       └── globals.css     # Configuración base de Tailwind y variables CSS
├── .env.local              # Variables de entorno (Shopify Tokens)
├── tailwind.config.ts
└── package.json
```

## 📝 Instrucciones de Ejecución (Fase 1)

1.  **Analizar el archivo `index.html` adjunto:** Este archivo contiene el diseño base, los colores, la tipografía y la lógica del prototipo (Tailwind utility classes).
2.  **Scaffolding:** Inicia la conversión separando el código estático en los componentes de React correspondientes dentro de `src/components/layout/` (Navbar, Footer) y `src/components/ui/` (Bento Grid).
3.  **Migración 3D:** Traduce la etiqueta `<model-viewer>` a un entorno de React Three Fiber en `src/components/3d/JewelryViewer.tsx`. El componente debe aceptar props para cambiar el color del material dinámicamente, tal como lo hace el script de vanilla JS actual.
4.  **Preparación Headless:** Crea un archivo `src/lib/shopify/client.ts` con la estructura básica (fetch wrapper) para hacer llamadas GraphQL a la Storefront API de Shopify usando las credenciales del `.env.local`.

Por favor, comienza generando los comandos de terminal necesarios para inicializar este proyecto en Next.js con Tailwind y las dependencias 3D requeridas, y luego procede con la creación del `Navbar.tsx` y el `layout.tsx` base basándote en el diseño del `index.html`.

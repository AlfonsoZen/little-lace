# 💍 Little Lace Artisanal Jewelry

Little Lace es una plataforma de e-commerce premium especializada en joyería artesanal de alta gama. Este proyecto representa la evolución de un prototipo estático a una **Arquitectura Headless** moderna, centrada en el rendimiento y la experiencia de usuario inmersiva a través de visualización 3D interactiva.

## 🚀 Tecnologías Principales

*   **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
*   **3D Engine:** [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) & [@react-three/drei](https://github.com/pmndrs/drei)
*   **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
*   **Backend (In Progress):** Shopify Storefront API (GraphQL)

## ✨ Características Destacadas

### 🧊 Visualizador 3D Interactivo
Ubicado en el Hero, permite a los usuarios interactuar con piezas de joyería en tiempo real:
*   **Personalización de Materiales:** Cambio instantáneo entre Oro 18k, Plata Esterlina y Oro Rosa.
*   **Física de Materiales:** Renderizado basado en física (PBR) con alta metalicidad y reflejos de entorno realistas.
*   **Optimización Móvil:** Interfaz adaptada que prioriza la visualización del producto en dispositivos táctiles.

### 🎨 Diseño de Autor
*   **Estética Pastel:** Inspirada en el prototipo original, utilizando una paleta de colores suaves y tipografía serif elegante (`Noto Serif`).
*   **Bento Grid:** Sección de curaduría artesanal para destacar colecciones clave.
*   **Responsive First:** Layout optimizado para una navegación fluida en desktop y mobile.

## 🛠️ Estructura del Proyecto

```text
/
├── public/
│   └── models/             # Modelos 3D (.glb)
├── src/
│   ├── app/                # Rutas y Layouts de Next.js
│   ├── components/
│   │   ├── 3d/             # Visualizadores React Three Fiber
│   │   ├── layout/         # Navbar, Footer
│   │   └── ui/             # Componentes de interfaz (Bento, Botones)
│   ├── lib/
│   │   └── shopify/        # Cliente de integración Shopify
│   └── styles/             # Configuración de Tailwind v4 y variables CSS
└── .env.local              # Configuración de API Keys
```

## 🚥 Guía de Inicio Rápido

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Configurar variables de entorno:**
   Crea un archivo `.env.local` basado en el template generado.

3. **Iniciar modo desarrollo:**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:3000`.

---
*Little Lace - Arte en cada detalle.*

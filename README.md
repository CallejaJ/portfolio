# 🚀 Jorge Calleja Pérez - Portfolio Web3

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

> Portfolio profesional de Jorge Calleja Pérez - Web3 Developer, Blockchain Specialist y Prompt Engineer

## 🌟 Características

- ✨ **Diseño Moderno**: Interfaz elegante con glassmorphism y gradientes
- 🌐 **Multiidioma**: Soporte para Español e Inglés
- 📱 **Responsive**: Optimizado para todos los dispositivos
- 🎭 **Animaciones**: Transiciones suaves con Framer Motion
- ⚡ **Performance**: Optimizado con Next.js 14 y App Router
- 🎨 **UI Components**: Construido con shadcn/ui
- 🔧 **TypeScript**: Tipado estático para mayor robustez
- 🚀 **Deploy Ready**: Listo para desplegar en Vercel

## 🛠️ Tecnologías

### Frontend

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Styling utility-first
- **Framer Motion** - Animaciones y transiciones
- **shadcn/ui** - Componentes UI modernos
- **Lucide React** - Iconos SVG

### Herramientas de Desarrollo

- **ESLint** - Linting de código
- **Prettier** - Formateo de código
- **PostCSS** - Procesamiento CSS

## 🚀 Instalación

### Prerrequisitos

- Node.js 18+
- npm, yarn, pnpm o bun

### Pasos

1. **Clonar el repositorio**

```bash
git clone https://github.com/CallejaJ/portfolio.git
cd portfolio
```

2. **Instalar dependencias**

```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Ejecutar en desarrollo**

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. **Abrir en el navegador**

```
http://localhost:3000
```

## 📁 Estructura del Proyecto

```
portfolio/
├── app/
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página principal del portfolio
├── components/
│   └── ui/                  # Componentes UI de shadcn
├── public/                  # Archivos estáticos
├── README.md               # Este archivo
├── next.config.js          # Configuración de Next.js
├── tailwind.config.ts      # Configuración de Tailwind
├── tsconfig.json           # Configuración de TypeScript
└── package.json            # Dependencias y scripts
```

## 🎨 Personalización

### Información Personal

Edita los datos en `app/page.tsx`:

```typescript
const personalInfo = {
  name: "Tu Nombre",
  title: "Tu Título Profesional",
  location: "Tu Ubicación",
  phone: "Tu Teléfono",
  email: "tu@email.com",
  linkedin: "https://linkedin.com/in/tu-perfil",
  github: "https://github.com/tu-usuario",
  // ...
};
```

### Proyectos

Modifica el array `projects` para añadir tus propios proyectos:

```typescript
const projects: Project[] = [
  {
    id: 1,
    titleKey: "tuProyecto",
    image: "/ruta-a-tu-imagen.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/tu-usuario/tu-proyecto",
    demo: "https://tu-proyecto.vercel.app",
    featured: true,
  },
  // ...
];
```

### Traducciones

Actualiza las traducciones en el objeto `t` para ambos idiomas (es/en).

### Colores y Estilos

Modifica `tailwind.config.ts` y `app/globals.css` para personalizar la paleta de colores.

## 🌐 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a [Vercel](https://vercel.com)
2. El despliegue se realizará automáticamente

### Netlify

1. Conecta tu repositorio a [Netlify](https://netlify.com)
2. Configura el comando de build: `npm run build`
3. Directorio de publicación: `out` (si usas export estático)

### Docker

```bash
# Construir imagen
docker build -t portfolio .

# Ejecutar contenedor
docker run -p 3000:3000 portfolio
```

## 📊 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linting con ESLint
npm run type-check   # Verificación de tipos TypeScript
```

## 🎯 Características Destacadas

### 🔥 Prompt Engineering

- Reducción del 40% en tiempo de desarrollo
- Automatización con IA para acelerar workflows
- Especialización en Claude, GPT-4o, y Grok

### ⛓️ Web3 & Blockchain

- Desarrollo con Solidity 0.8.20+
- Integración con Ethers.js y Web3.js
- Experiencia en DeFi, NFTs y Account Abstraction
- Contratos inteligentes ERC-20/721/1155

### 🎨 Frontend Moderno

- React 18 con Next.js 14
- TypeScript para mayor robustez
- Tailwind CSS para styling eficiente
- Componentes reutilizables con shadcn/ui

## 🤝 Contribución

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

**Jorge Calleja Pérez**

- 📧 Email: [callejaj@proton.me](mailto:callejaj@proton.me)
- 💼 LinkedIn: [linkedin.com/in/callejaj](https://www.linkedin.com/in/callejaj)
- 🐙 GitHub: [github.com/CallejaJ](https://github.com/CallejaJ)
- 📱 Teléfono: +34 649530022
- 📍 Ubicación: Málaga, Spain

---

<div align="center">

**"La IA no reemplaza mi criterio, lo potencia."**

Desarrollado con ❤️ usando React, Next.js y Tailwind CSS

</div>

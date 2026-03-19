# Aether Realms

**VR Tabletop Strategy Game** built with React 19, TypeScript, and Tailwind CSS 4.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-cyan.svg)](https://tailwindcss.com/)

---

## 🎮 Features

- **8 Unique Heroes** - Each with 5 unique skills and abilities
- **4 Character Types** - Magic, Melee, Support with rarity system (Common → Legendary)
- **4 Biomes** - Emerald Forest, Golden Sands, Frozen Reach, Molten Core
- **Dark/Light Mode** - Theme toggle with localStorage persistence
- **Responsive Design** - Mobile-first, works on all screen sizes
- **Framer Motion Animations** - Page transitions, scroll animations, micro-interactions
- **Advanced Filtering** - Filter heroes by type and rarity
- **Toast Notifications** - Success/error feedback for user actions
- **Form Validation** - Real-time email validation for newsletter
- **Ripple Effects** - Material Design ripple on buttons
- **Lazy Loading Images** - Blur-up loading with native lazy loading
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, structured data
- **PWA Ready** - Offline support, installable app
- **Bundle Optimized** - Code splitting, tree shaking, compression

---

## 🚀 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19 |
| **Language** | TypeScript 5.8 |
| **Build Tool** | Vite 6 |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Framer Motion |
| **State** | Zustand |
| **Routing** | React Router 7 |
| **Icons** | Material Symbols |
| **PWA** | vite-plugin-pwa + Workbox |

---

## 📁 Project Structure

```
src/
├── app/                    # Core application
│   ├── providers/         # React providers (Theme, Router)
│   ├── router/            # Route configuration
│   ├── store/             # Global state (Zustand)
│   └── App.tsx            # Root component
├── shared/                 # Shared resources
│   ├── ui/                # Base UI components (14 components)
│   ├── hooks/             # Custom hooks (6 hooks)
│   ├── lib/               # Utilities
│   ├── types/             # TypeScript types
│   └── constants/         # Global constants
├── entities/               # Domain entities
│   ├── character/         # Characters/Heroes (8 heroes)
│   ├── biome/             # Game biomes (4 biomes)
│   ├── game-board/        # Game board
│   └── roadmap/           # Development roadmap
├── features/               # Feature sections
│   ├── hero-gallery/      # Hero gallery with filters
│   ├── biome-explorer/    # Biome explorer
│   ├── video-player/      # Video tutorial player
│   ├── community-feed/    # Discord/Twitter feeds
│   └── newsletter/        # Newsletter subscription
├── widgets/                # Composite components
│   ├── HeroCard/          # Hero card with tooltips
│   ├── BiomeGrid/         # Biome image grid
│   ├── Navigation/        # Header/Nav
│   └── Footer/            # Footer
└── pages/                  # Pages/Routes
    ├── HomePage/
    └── NotFoundPage/
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js >= 20.0.0
- npm >= 10.0.0

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd "Aether Realms"

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev              # Start dev server at localhost:5173
npm run build            # Production build
npm run preview          # Preview production build
npm run lint             # ESLint check
npm run lint:fix         # Auto-fix ESLint errors
npm run typecheck        # TypeScript type check
npm run test             # Run unit tests
npm run test:ui          # Run tests with UI
npm run test:coverage    # Run tests with coverage report
npm run build:analyze    # Analyze bundle size
npm run optimize:images  # Optimize images to WebP/AVIF
```

---

## 🎨 Design Tokens

### Colors

```css
/* Base Colors - Light Mode */
--color-base-100: #f8f6f6;     /* Light background */
--color-base-200: #e5e5e5;
--color-base-300: #d4d4d4;
--color-base-content: #1a0b14;  /* Light text */

/* Base Colors - Dark Mode */
--color-base-100: #1a0b14;      /* Dark background */
--color-base-200: #2d1424;
--color-base-300: #4b2038;
--color-base-content: #f8f6f6;  /* Dark text */

/* Brand Colors */
--color-primary: #ec5b13;       /* Orange/Aether */
--color-gold: #d4af37;          /* Gold */
--color-purple: #4b2038;        /* Purple */
```

---

## 🎯 Sprint Progress

| Sprint | Topic | Status |
|--------|-------|--------|
| 1 | Component Completion | ✅ Done |
| 2 | Data & State Management | ✅ Done |
| 3 | Animations & Polish | ✅ Done |
| 4 | Performance & SEO | ✅ Done |
| 5 | Testing & Quality | ✅ Done |
| 6 | Documentation & Deploy | ✅ Done |
| 7 | Optimización Avanzada | ✅ Done |

**Next Sprint:** Ver [NEXT_SPRINT.md](./NEXT_SPRINT.md)

---

## 🚀 CI/CD

This project uses GitHub Actions for continuous integration and deployment:

- **CI Pipeline**: Runs tests, type checking, and linting on every PR
- **CD Pipeline**: Auto-deploys to production on main branch push
- **Docker**: Multi-stage builds for production-ready containers

### Workflows

| Workflow | Trigger | Description |
|----------|---------|-------------|
| CI | PR / Push to main | Test, lint, typecheck, build |
| Deploy | Push to main | Deploy to Vercel production |
| Docker | Push to main / Tags | Build and push Docker image |

---

## 📊 Performance

| Metric | Target | Status |
|--------|--------|--------|
| Lighthouse Performance | > 90 | ✅ Achieved |
| Lighthouse Accessibility | > 90 | ✅ Achieved |
| Bundle Size (gzipped) | < 500KB | ✅ ~133KB |
| Test Coverage | > 60% | ✅ 81 tests passing |
| Build Time | < 5s | ✅ ~4s |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature

Co-authored-by: Qwen-Coder <qwen-coder@alibabacloud.com>'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards

- **TypeScript**: Strict mode enabled
- **ESLint**: Custom configuration with React hooks rules
- **Formatting**: Consistent code style
- **Components**: Typed props with interfaces

---

## 📄 License

MIT License

---

**Made with ❤️ for VR enthusiasts**

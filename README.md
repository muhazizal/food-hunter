# Food Hunter

A progressive web app to explore restaurants, view details, save favorites, and add reviews. Built with vanilla JavaScript and Web Components, styled with SCSS, and bundled with Webpack. It uses the Dicoding Restaurant API and IndexedDB to persist favorites and supports offline-first via Workbox.

## Overview

Food Hunter provides a streamlined, responsive experience to browse restaurants, inspect menus and reviews, and manage a personal list of favorites. The app is organized into modular Web Components with scoped styles, and routes are handled via hash-based navigation.

## Key Features

- Restaurants list and details with images, rating, and description
- Like/Unlike restaurants using IndexedDB (persistent favorites)
- Add customer reviews via a modal with form validation
- Responsive layout with mobile-first styles and accessible semantics
- Offline-first precaching and runtime caching via Workbox
- Error and empty-state components with clear feedback

## Tech Stack

- JavaScript (ES6), Web Components, Shadow DOM
- SCSS compiled via dart-sass
- Webpack 4, Workbox InjectManifest, webpack-pwa-manifest
- IndexedDB via `idb` helper
- Testing: Karma + Jasmine
- Linting: ESLint (Airbnb Base)

## Project Structure

```
food-hunter/
├── specs/                     # Unit tests (Karma + Jasmine)
├── src/
│   ├── public/                # Static assets (images)
│   ├── scripts/
│   │   ├── data/              # API and storage modules
│   │   ├── globals/           # App-wide configs and endpoints
│   │   ├── routes/            # URL parser and routes map
│   │   ├── utils/             # Helpers (styles, drawer, sw-register)
│   │   └── views/             # Pages and Web Components
│   ├── styles/                # SCSS (global + component styles)
│   └── templates/             # HTML template
├── webpack.common.js          # Base webpack config
├── webpack.dev.js             # Dev server config
├── webpack.prod.js            # Production build config
└── README.md
```

## Getting Started

- Prerequisites: Node.js ≥ 12 (recommended ≥ 16), npm
- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Run tests: `npm run test`
- Build for production: `npm run build`

The dev server opens the app automatically and supports live reload. The production build outputs to `dist/`.

## Scripts

- `npm run dev` — start webpack-dev-server
- `npm run build` — create optimized production bundle
- `npm run test` — run Karma/Jasmine tests in Chrome

## Architecture Overview

- Routing: Hash-based (`#/home`, `#/favorites`, `#/restaurant/:id`) via `UrlParser`
- Pages:
  - Home: `home-jumbotron`, `home-restaurants`, `home-newsletter`
  - Favorites: `favorite-restaurants` (renders saved items or empty state)
  - Restaurant: `restaurant-profile`, `restaurant-menu`, `restaurant-review`
- Components:
  - `restaurant-item` for listing cards
  - `like-button-presenter` handles like/unlike UI + persistence
  - `render-error` and `render-empty` for feedback states
  - `review-modal` for adding a review
- Data layer:
  - `restaurants-source.js` interacts with Dicoding Restaurant API
  - `favorite-restaurants.js` abstracts IndexedDB via `idb`
- Styling:
  - Component-level SCSS injected into Shadow DOM via `StylesHelper`
  - Global styles in `src/styles/main.scss`
- PWA:
  - `workbox-webpack-plugin` InjectManifest with `src/scripts/sw.js`
  - `webpack-pwa-manifest` generates icons and manifest metadata

## Data & Storage

- Remote API: Dicoding Restaurant API (`https://restaurant-api.dicoding.dev/`)
- Favorites persistence: IndexedDB (`favorite-restaurants-database`, store `restaurants`)
- Contract tests verify basic CRUD behavior for favorites

## Testing

- Unit tests live under `specs/`
- Run with `npm run test` (Karma starts Chrome)
- Tests cover:
  - Favorites model contract working against array and IDB implementations
  - Like/Unlike UI flows in `like-button-presenter`

## Accessibility & UX

- Buttons provide `aria-label` for like/unlike states
- Form feedback for newsletter and review modal with simple validation
- Loading spinners and explicit error/empty components improve perceived performance

## Development Notes

- Styles injection: component SCSS is added via `StylesHelper` to avoid global leakage
- Material Icons are included via `webpack-material-design-icons` (in `vendors` entry)
- Service worker is registered from `sw-register.js` and built via Workbox

## Known Notes / Suggestions

- Confirm `CONFIG.BASE_URL` does not include leading whitespace in `src/scripts/globals/config.js`
- Consider registering the service worker from `/sw.js` to avoid path issues across routes
- Re-rendering component lists appends content using `innerHTML +=`; ensure containers clear as needed to prevent duplicates

## Deployment

- Build the project: `npm run build`
- Serve the contents of `dist/` from the web root (ensure `sw.js` and `manifest.json` are accessible at the site root)

## Roadmap Ideas

- Search and filtering for restaurants
- Favorites page: sorting and search
- Enhanced a11y audits and keyboard interactions
- CI for tests and linting

## License

This project does not currently declare a license.

# Turbo Monorepo

This is a monorepo managed with [Turborepo](https://turbo.build/), containing both frontend and backend applications.

## Project Structure

```
my-turbo-repo/
├── apps/
│   ├── frontend/     # Frontend application (e.g., Next.js, React)
│   └── backend/      # Backend application (e.g., Node.js, Express, Go)
├── packages/         # Shared code, libraries, or utilities
├── turbo.json        # Turborepo configuration
├── package.json      # Root package.json
└── README.md         # This file
```

## Getting Started

### Prerequisites
- Node.js (LTS recommended)
- pnpm / yarn / npm (depending on what you use)

### Install Dependencies
```bash
pnpm install
# or
npm install
# or
yarn install
```

### Run the Development Servers

#### Frontend
```bash
cd apps/frontend
pnpm dev
```

#### Backend
```bash
cd apps/backend
pnpm dev
```

Or run both in parallel from the root using Turborepo:
```bash
pnpm turbo run dev --parallel
```

## Build
```bash
pnpm turbo run build
```

## Lint & Format
```bash
pnpm turbo run lint
pnpm turbo run format
```

## Shared Packages
Put any shared utilities, types, or configurations inside the `packages/` directory to be reused across apps.

## Deployment
You can deploy each app independently or together based on your infrastructure setup (e.g., Vercel for frontend, Railway for backend).

## License
MIT

---
Built with ❤️ using [Turborepo](https://turbo.build/)


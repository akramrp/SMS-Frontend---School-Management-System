# SMS Frontend — School Management System

`sms-frontend` is an enterprise-grade React/TypeScript frontend foundation for school operations: admissions, students, staff, attendance, academics, fees, exams, library, reports, settings, and extensible modules inspired by mature school-admin workflows.

## Tech stack
- React 19, TypeScript strict mode, Vite 8
- Ant Design 6 for accessible enterprise UI primitives
- React Router 7 lazy/protected routing
- TanStack Query for API-ready server state
- Axios-ready service boundary, Zod/React Hook Form-ready validation architecture
- Vitest + Testing Library, ESLint, Prettier

## Architecture
The code is split by responsibility:
- `src/app`: providers, theme, router, app composition
- `src/layouts`: authenticated admin shell and auth shell
- `src/components`: reusable common, feedback and table patterns
- `src/features`: feature pages and feature-owned logic
- `src/services`: auth and API-like service abstractions
- `src/mocks`: typed static data only; pages do not import arrays directly except settings/reference admin views
- `src/types`: shared domain/API contracts
- `src/hooks`: TanStack Query hooks for service consumption
- `src/routes`: RBAC-aware menu metadata

## Development
```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run test
npm run build
```

## Environment
Copy `.env.example` to `.env.local`. Keep secrets out of source control. `VITE_API_BASE_URL` centralizes the future API base URL and must not be hard-coded in components.

## Authentication and permissions
Authentication is centralized in `authService` and `AuthProvider`. Current login is mock-backed and stores only a demo session token in session storage. Route, menu, and action permissions use the same permission set. Use `<Can permission="students.create">...</Can>` for action-level UX gating. Backend authorization must remain authoritative when APIs are introduced.

## Mock data and API migration
Mock data lives in `src/mocks/data/core.ts`. UI consumes hooks such as `useStudents()` backed by services such as `studentService.getStudents()`. Replace service internals with HTTP calls later while preserving page contracts and query keys.

## Adding a module
1. Add typed domain models in `src/types` if needed.
2. Add mock fixtures under `src/mocks/data`.
3. Add a service in `src/services/api` and a query hook in `src/hooks`.
4. Create pages under `src/features/<module>`.
5. Register routes and permissions in `src/app/router` and `src/routes/menu`.
6. Add focused tests for business logic and reusable UI behavior.

## Current scope and placeholders
Core workflows include dashboard, students, staff, attendance, academics, fees, examinations, library, reports and settings. Larger modules such as transport, hostel, alumni, inventory and front office have routed enterprise placeholders ready for phased implementation.

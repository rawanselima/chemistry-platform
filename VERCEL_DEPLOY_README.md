# Vercel Deployment & API

Your application uses `json-server` for the backend. When deployed to Vercel, there are some important limitations to be aware of.

## 1. Data Persistence (CRUD Operations)

**Important:** On Vercel, the file system is **read-only** for runtime changes.

- **GET requests (Read):** Will work fine. You can view courses, videos, etc.
- **POST/PUT/DELETE requests (Write):** Will appear to work (or fail depending on configuration), but **changes will NOT be saved** to `db.json`.
  - When the serverless function restarts (which happens frequently), it reverts to the original `db.json` that was deployed.
  - You typically cannot use `json-server` with a local JSON file as a persistent database on Vercel.

### Recommendation
For a deployment where you need to save data, you should migrate to a cloud database (like MongoDB, Postgres, or Firebase) or use a hosted mock API service.

## 2. API Configuration Fixed

We have updated your configuration to ensure the API connects correctly on Vercel:

1.  **Modified `src/services/API.ts`**: Defaults to `/api` instead of `http://localhost:3001`. This allows the frontend to talk to the backend on the same domain.
2.  **Updated `vite.config.ts`**: Added a proxy so that locally `npm run dev` forwards `/api` requests to your local `json-server` running on port 3001.
3.  **Updated `vercel.json`**: Ensured `db.json` is included in the serverless function bundle.

You should now be able to browse pages without "Error" screens.

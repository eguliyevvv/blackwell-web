# Blackwell website — v0.1

Header + interactive global office map. Stack: Vite + React, Leaflet (CARTO/OSM tiles), Vercel serverless API, MongoDB Atlas.

    Browser → GET /api/locations (Vercel function) → MongoDB Atlas

## Setup
1. `npm install`
2. Copy `.env.example` to `.env`, set `MONGODB_URI` (Atlas → allow Vercel IPs / 0.0.0.0/0 in Network Access).
3. `npm run seed` (loads TEMPORARY offices from `scripts/seed.js`; edit with real offices and re-run).
4. `npm run dev` (uses `vercel dev` so `/api` works locally; `npm i -g vercel` first).

## Deploy
Import the repo in Vercel, add `MONGODB_URI` (and optionally `MONGODB_DB`) as environment variables. `VITE_API_URL` stays empty when the API is deployed with the frontend.

## Logo
Replace `public/blackwell-logo.svg` with the official asset (same filename, or update `Header.jsx`).

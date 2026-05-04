# Mood Visualizer

A full-stack web app that generates a living 3D particle universe and ambient music based on your current mood. No AI — pure procedural generation using noise-based particle physics.

## Tech Stack

**Frontend**
- Next.js
- Three.js — particle universe with Perlin noise
- Tone.js — procedural ambient music generation
- Tailwind CSS

**Backend**
- Node.js + Express
- PostgreSQL — user auth + mood session history
- Redis (Upstash) — mood config caching
- JWT — authentication

## Features
- Type or select your current mood
- Unique 3D particle world generated every time (constrained randomness)
- Ambient music that matches the mood
- Save and revisit past mood sessions
- No two visits look the same

## Local Setup

### Prerequisites
- Node.js
- PostgreSQL
- Redis (or Upstash account)

### Backend
cd server
npm install
npm run dev

### Frontend
cd client
npm install
npm run dev

Frontend runs on http://localhost:3000
Backend runs on http://localhost:5000

## Project Structure
mood-visualizer/
├── client/          # Next.js frontend
└── server/          # Express backend

## Deployment
- Frontend → Vercel
- Backend → Railway
- Redis → Upstash
- Database → Railway PostgreSQL
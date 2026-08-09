# RiverFlow

A Stack Overflow-style Q&A app for developers. Users can ask questions with a rich-text/markdown editor, post answers, vote, comment, and browse contributor profiles. Built with Next.js (App Router) and Appwrite for auth, database, and file storage.

## Features

- Ask, edit, and delete questions with a markdown editor (`@uiw/react-md-editor`)
- Answers, comments, and up/down voting
- User profiles with their questions, answers, and votes
- Auth (register/login) via Appwrite
- Search and pagination over questions

## Stack

- **Next.js** (App Router, TypeScript) with **Tailwind CSS** and **shadcn/ui**
- **Appwrite** — authentication, database, storage
- **TanStack Query** for data fetching, **Zustand** for client state
- **Framer Motion** and a few Magic UI components for animations

## Running locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.sample` to `.env.local` and fill in your Appwrite project values (endpoint, project ID, API key, database/collection IDs).

3. Start the dev server:

   ```bash
   npm run dev
   ```

   App runs at `http://localhost:3000`.

## Project layout

- `src/app` — routes: auth, questions (list/detail/ask/edit), users
- `src/app/api` — route handlers for answers and votes
- `src/components` — question cards, answers, comments, vote buttons, rich-text editor

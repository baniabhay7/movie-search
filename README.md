# Movie Search

A React movie search application built with Vite and Tailwind CSS. It uses The Movie Database (TMDB) API to display popular movies, search for movies, and save favorite movies in the browser.

## Features

- Browse popular movies
- Search for movies by title
- Add and remove movies from Favorites
- Persist favorites with `localStorage`
- Responsive movie grid
- Tailwind CSS styling

## Tech Stack

- React
- Vite
- React Router
- Tailwind CSS
- TMDB API

## Getting Started

### Requirements

- Node.js 18 or newer
- A TMDB API key

### Install

From the `frontend` directory:

```bash
npm install
```

### Configure the API key

Create a file named `.env.local` in the `frontend` directory:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

You can use `.env.example` as a template. Never commit `.env.local` because it contains your API key.

### Run the development server

```bash
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run lint     # Run ESLint
npm run preview  # Preview the production build
```

## Project Structure

```text
src/
  components/    Reusable UI components
  contexts/      Favorite movie state and localStorage logic
  pages/         Home and Favorites pages
  services/      TMDB API requests
  App.jsx        Application routes and layout
  index.css      Tailwind and global styles
```

## Updating the GitHub Repository

Repository: [baniabhay7/movie-search](https://github.com/baniabhay7/movie-search)

After making changes locally, run these commands from `C:\Movie_Search\frontend`:

```bash
git add .
git commit -m "Describe your changes"
git push origin main
```

Before committing, you can check what will be uploaded:

```bash
git status
```

`.env.local`, `node_modules`, and `dist` are excluded by `.gitignore`. Only commit `.env.example`, never your real API key.

## License

This project is for personal and educational use. Movie data and images are provided by TMDB.

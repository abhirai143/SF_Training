import { movies, languages, countries, genres } from '../data/movies.js';
import { hindiMovies } from '../data/hindiMovies.js';

export const getCounts = () => {
  const counts = {};
  counts.movies = movies.length;
  counts.hindiMovies = hindiMovies.length;
  counts.languages = languages.length;
  counts.countries = countries.length;
  counts.genres = genres.length;

  return counts;
}

export { movies, languages, countries, genres } from '../data/movies.js';
export { hindiMovies } from '../data/hindiMovies.js';
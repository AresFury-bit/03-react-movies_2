import css from "./MovieGrid.module.css";
import type { Movie } from "../../types/movie";
interface MovieGridProps {
  onSelect: (movie: Movie) => void;
  movies: Movie[];
}
export const poster_path = "https://image.tmdb.org/t/p/w500/";
export default function MovieGrid({ onSelect, movies }: MovieGridProps) {
  return (
    <ul className={css.grid}>
      {/* Набір елементів списку з фільмами */}
      {movies.map((movie) => (
        <li key={movie.id} onClick={() => onSelect(movie)}>
          <div className={css.card}>
            <img
              className={css.image}
              src={poster_path + movie.poster_path}
              loading="lazy"
            />
            <h2 className={css.title}>{movie.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}

import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { fetchMovies } from "../../services/movieService";
import type { Movie } from "../../types/movie";
import toast, { Toaster } from "react-hot-toast";
import MovieGrid from "../MovieGrid/MovieGrid";
import MovieModal from "../MovieModal/MovieModal";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const handleSubmit = async (topic: string) => {
    try {
      setLoader(true);
      setMovies([]);
      setErrorMessage(false);
      const data = await fetchMovies(topic);
      setMovies(data);
      setLoader(false);
      if (data.length === 0) {
        toast.error("No movies found for your request.");
      }
    } catch {
      toast.error("This didn't work.");
      setErrorMessage(true);
    } finally {
      setLoader(false);
    }
  };
  const handleSelect = (movie: Movie) => {
    setMovie(movie);
  };

  const closeModal = () => {
    setMovie(null);
  };
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {movies.length > 0 && (
        <MovieGrid onSelect={handleSelect} movies={movies} />
      )}
      {movie && <MovieModal movie={movie} onClose={closeModal} />}
      {loader && <Loader />}
      {errorMessage && <ErrorMessage />}
      <Toaster />
    </>
  );
}

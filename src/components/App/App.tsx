import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { fetchMovies } from "../../services/movieService";
import type { Movie } from "../../types/movie";
import toast, { Toaster } from "react-hot-toast";
import MovieGrid from "../MovieGrid/MovieGrid";
import MovieModal from "../MovieModal/MovieModal";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useQuery } from "@tanstack/react-query";




export default function App() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [topic, setTopic] = useState("")  
  
  const { data, isLoading, isError } = useQuery({
    queryKey: ["movies", topic],
    queryFn:  () => fetchMovies(topic),
    enabled: topic !== ""
  });

  const handleSubmit = async (topic: string) => {

    try {
      setTopic(topic);
      if (data && data.length === 0) {
        toast.error("No movies found for your request.");
      }
    } catch {
      toast.error("This didn't work.");
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
      {data && data.length > 0 && (
        <MovieGrid onSelect={handleSelect} movies={data} />
      )}
      {movie && <MovieModal movie={movie} onClose={closeModal} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <Toaster />
    </>
  );
}
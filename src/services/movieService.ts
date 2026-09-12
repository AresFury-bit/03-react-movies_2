import axios from "axios";
import type { Movie } from "../types/movie"



interface MoviesHttpResponse{
  results: Movie[];
}

const API_KEY = import.meta.env.VITE_TMDB_TOKEN;


export const fetchMovies = async(topic:string):Promise<Movie[]> => {
  
  const response = await axios.get<MoviesHttpResponse>("https://api.themoviedb.org/3/search/movie", {
    params: {
      query: topic,
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`, 
    }
  })
  return response.data.results
}
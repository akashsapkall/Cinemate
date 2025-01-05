import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
export const MoviList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchAPI(){
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=db04846aba23641dc5323eaa08c756c8"
      );
      const data = await response.json();
      setMovies(data.results);
    }
    fetchAPI();
  }, []);
  return (
    <main>
      <section className="w-scren py-7">
        <div className="mx-auto flex justify-center flex-wrap">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

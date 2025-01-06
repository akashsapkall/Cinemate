
import { useFetch } from "../hooks/useFetch";
import { MovieCard } from "../components/MovieCard";
export const MoviList = ({path}) => {
  const { data: movies } = useFetch(path);
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

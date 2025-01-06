
import { useFetch } from "../hooks/useFetch";
import { MovieCard } from "../components/MovieCard";
export const MoviList = ({path}) => {
  const { data: movies , error, loading} = useFetch(path);
  if( loading ){
    return (
      <main>
        <p className="dark:text-white">Loading ... </p>
      </main>
    )
  }
  if( error ){
    return (
      <main>
        <p className="dark:text-white">{error}</p>
      </main>
    )
  }
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

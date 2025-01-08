import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch"; 
import { MovieCard } from "../components/MovieCard";

export const MovieSearch = ({ path }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q") || "";
  const { data: movies, error, loading } = useFetch(path, queryTerm);

  if (loading) return (<p className="dark:text-white">Loading...</p>);
  if (error) return <p className="dark:text-white">Error: {error}</p>;

  return (
    <main>
      <section className="py-7 flex justify-center">
        <p className="w-4/5 text-3xl text-gray-700 dark:text-white">
          { movies.length>0?`Search Results for '${queryTerm}'`:`No Search Results Found For '${queryTerm}'`}
        </p>  
      </section>
      <section className="max-w-7xl mx-auto py-2">
        <div className="flex justify-center flex-wrap">
          {movies && 
            movies.map((movie) => ( 
              <MovieCard key={movie.id} movie={movie} />
            ))
          }
        </div>
      </section>
    </main>
  );
};

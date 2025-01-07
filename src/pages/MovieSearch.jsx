import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch"; 
import { MovieCard } from "../components/MovieCard";

export const MovieSearch = ({ path }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q") || ""; // Default to an empty string if no query is provided
  const { data: movies, error, loading } = useFetch(path, queryTerm);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main>
      <section className="pt-6 ml-16">
        <p className="text-3xl text-gray-700 dark:text-white">
          { movies.length>0?`Search Results for '${queryTerm}'`:`No Search Results Found For '${queryTerm}'`}
        </p>
      </section>
      <section className="w-screen py-7">
        <div className="mx-auto flex justify-center flex-wrap">
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

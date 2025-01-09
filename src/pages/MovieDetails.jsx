import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const image= (movie.poster_path)?`https://image.tmdb.org/t/p/w500${movie.poster_path}`:"";
  useEffect(() => {
    async function fetchApi() {
      const response = await fetch(
        `${baseUrl}movie/${params.id}?api_key=${apiKey}`
      );
      const jsondata = await response.json();
      setMovie(jsondata || {});
    }
    fetchApi();
  }, [params.id]);
  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-96">
            <img src={image} alt={movie.title} className="rounded"/>
        </div>
        <div className="max-w-2xl p-4 text-lg text-gray-700 dark:text-white">
            <h1 className="text-3xl font-semibold py-3 text-center lg:text-left">{movie.title}</h1>
            <p className="py-1 text-center lg:text-left">{movie.overview}</p>
            <div className="py-3 flex justify-center flex-wrap lg:justify-start">
                {(movie.genres || []).map((obj)=>(
                    <span key={obj.id} className="py-1 px-2 mr-4 rounded border border-slate-600">{obj.name}</span>
                ))}
            </div>
            <p className="py-1 text-center lg:text-left">star {movie.vote_average} | {movie.vote_count} reviews</p>
            <p className="py-1 text-center lg:text-left"><span className="font-semibold">Runtime: </span><span>{movie.runtime}</span> min.</p>
            <p className="py-1 text-center lg:text-left"><span className="font-semibold">Budget: </span><span>{movie.budget}</span></p>
            <p className="py-1 text-center lg:text-left"><span className="font-semibold">Revenue: </span><span>{movie.revenue}</span></p>
            <p className="py-1 text-center lg:text-left"><span className="font-semibold">Release Date: </span><span>{movie.release_date}</span></p>
            <p className="py-1 text-center lg:text-left"><span className="font-semibold">IMDB Code: </span><span>{movie.imdb_id}</span></p>
        </div>
      </section>
    </main>
  );
};

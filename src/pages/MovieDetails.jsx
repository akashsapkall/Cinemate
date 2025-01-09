import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "";
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
          <img src={image} alt={movie.title} className="rounded" />
        </div>
        <div className="max-w-2xl p-4 text-lg text-gray-700 dark:text-white">
          <h1 className="text-3xl font-semibold py-3 text-center lg:text-left">
            {movie.title}
          </h1>
          <p className="py-1 text-center lg:text-left">{movie.overview}</p>
          <div className="py-4 flex justify-center flex-wrap lg:justify-start">
            {(movie.genres || []).map((obj) => (
              <span
                key={obj.id}
                className="py-1 px-2 mr-4 rounded border border-slate-600"
              >
                {obj.name}
              </span>
            ))}
          </div>

          <div className="py-1 flex justify-center lg:justify-start items-center">
            <svg
              class="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p class="ms-2 font-bold text-gray-800 dark:text-white">
              {movie.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span
              className="text-gray-700 dark:text-white"
            >
              {movie.vote_count} reviews
            </span>
          </div>

          <p className="py-1 text-center lg:text-left">
            <span className="font-semibold">Runtime: </span>
            <span>{movie.runtime}</span> min.
          </p>
          <p className="py-1 text-center lg:text-left">
            <span className="font-semibold">Budget: </span>
            <span>{movie.budget}</span>
          </p>
          <p className="py-1 text-center lg:text-left">
            <span className="font-semibold">Revenue: </span>
            <span>{movie.revenue}</span>
          </p>
          <p className="py-1 text-center lg:text-left">
            <span className="font-semibold">Release Date: </span>
            <span>{movie.release_date}</span>
          </p>
          <p className="py-1 text-center lg:text-left">
            <span className="font-semibold">IMDB Code: </span>
            <a className="underline" href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer">{movie.imdb_id}</a>
          </p>
        </div>
      </section>
    </main>
  );
};

import { Routes, Route } from "react-router-dom";
import { MoviList, MovieDetails, MovieSearch, PageNotFound } from "../pages";
import { useFetch } from "../hooks/useFetch";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route
          path="/"
          loader={() => useFetch("movie/now_playing")}
          element={<MoviList title={"Home"} />}
        />
        <Route
          path="/search"

          element={<MovieSearch path={"search/movie"}/>}
        />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route
          path="/movie/upcoming"
          loader={() => useFetch("movie/upcoming")}
          element={<MoviList title={"Upcoming"} />}
        />
        <Route
          path="/movie/top"
          loader={() => useFetch("movie/top_rated")}
          element={<MoviList title={"Top-Rated"} />}
        />
        <Route
          path="/movie/popular"
          loader={() => useFetch("movie/popular")}
          element={<MoviList title={"Popular"} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

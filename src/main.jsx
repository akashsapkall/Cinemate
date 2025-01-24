import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MoviList, MovieDetails, MovieSearch, PageNotFound } from "./pages";
import { ScrollToTop } from "./components";
import App from "./App.jsx";
import "./index.css";

// Utility function to fetch data (does not use React hooks)
const fetchData = async (path) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `${baseUrl}${path}?api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.statusText}`);
    }
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    throw new Error(error.message);
  }
};

// Define the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        loader: () => fetchData("movie/now_playing"), // Call the plain async function
        element: <MoviList title="Home" />,
      },
      {
        path: "search",
        element: <MovieSearch pathway="search/movie" />,
      },
      {
        path: "movie/:id",
        element: <MovieDetails />,
      },
      {
        path: "movie/upcoming",
        loader: () => fetchData("movie/upcoming"),
        element: <MoviList title="Upcoming" />,
      },
      {
        path: "movie/top",
        loader: () => fetchData("movie/top_rated"),
        element: <MoviList title="Top-Rated" />,
      },
      {
        path: "movie/popular",
        loader: () => fetchData("movie/popular"),
        element: <MoviList title="Popular" />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

// Render the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} >
    <ScrollToTop />
    </RouterProvider>
  </StrictMode>
);

import { useState, useEffect } from "react";

export const useFetch = (path, queryTerm = "") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `${baseUrl}${path}?api_key=${apiKey}&query=${queryTerm}`;
    async function fetchAPI() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        setData(json.results || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAPI();
  }, [path, queryTerm]);

  return { data, error, loading };
};

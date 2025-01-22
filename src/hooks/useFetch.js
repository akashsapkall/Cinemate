import { useState, useEffect } from "react";

export const useFetch = (path, queryTerm = "") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `${baseUrl}${path}?api_key=${apiKey}&query=${queryTerm}`;
    async function fetchAPI() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, { signal: controller.signal,});
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.statusText}`);
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
    return  ()=>controller.abort();
  }, [path, queryTerm]);

  return { data, error, loading };
};

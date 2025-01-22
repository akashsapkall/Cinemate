import { useState, useEffect, useCallback } from "react";

export const useFetch = (path, queryTerm = "") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchApi = useCallback(() => {
    const controller = new AbortController();
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `${baseUrl}${path}?api_key=${apiKey}&query=${queryTerm}`;

    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.statusText}`);
        }
        const json = await response.json();
        setData(json.results || []);
      } catch (err) {
        // Handle abort errors gracefully
        if (err.name === 'AbortError') {
          // It's safe to ignore the abort error
          console.log('Fetch aborted');
        } else {
          setError(err.message);  // For other errors, set them as state
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    // Cleanup: abort fetch request on unmount or path/queryTerm change
    return () => controller.abort();
  }, [path, queryTerm]);

  useEffect(() => {
    const fetchAbort = fetchApi();
    // Cleanup function to abort the fetch when the component unmounts or dependencies change
    return () => fetchAbort();
  }, [fetchApi]);

  return { data, error, loading };
};

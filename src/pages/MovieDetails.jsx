import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    async function fetchApi() {
      const response = await fetch(
        `${baseUrl}movie/${params.id}?api_key=${apiKey}`
      );
      const jsondata = await response.json();
      setData(jsondata || {});
    }
    fetchApi();
  }, []);
  console.log(data);
  return (
    <main>
      <section>
        <div></div>
        <div></div>
      </section>
    </main>
  );
};

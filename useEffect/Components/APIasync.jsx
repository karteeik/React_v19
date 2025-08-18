import { useEffect, useState } from "react";

const APIasync = () => {
  const [api, setApi] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiURL = "https://pokeapi.co/api/v2/pokemon/ditto";

  const fetchAPI = async () => {
    try {
      const res = await fetch(apiURL, {
        headers: { Accept: "application/json" },
      });

    //   if (!res.ok) {
    //     throw new Error(`HTTP error! status: ${res.status}`);
    //   }

      const data = await res.json();
      setApi(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false); // ✅ only once
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Error: {error.message}</h1>;

  if (api) {
    return (
      <ul>
        <li>
          <figure>
            <img
              src={api.sprites.other.dream_world.front_default}
              alt={api.name}
              className="api-image"
            />
          </figure>
          <h2>{api.name}</h2>
        </li>
      </ul>
    );
  }

  return <h1>No data available</h1>; // fallback
};

export default APIasync;

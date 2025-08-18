import { useEffect } from "react";
import { useState } from "react";

const APIFetch = () => {
  const [api, setApi] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const apiURL = "https://pokeapi.co/api/v2/pokemon/pikachu";

  const FetchAPIData = () => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        setApi(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    FetchAPIData();
  }, []);

  console.log(api);

  if (loading)
    return (
      <div>
        <h1>Loading.....</h1>
      </div>
    );

  if (error)
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );

  if (api) {
    return (
      <>
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
      </>
    );
  }
};

export default APIFetch;

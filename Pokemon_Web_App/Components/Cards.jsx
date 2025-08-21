import { useEffect, useState } from "react";
import { PokemonCardData } from "./PokemonCardData";
import "./cards.css";

export const Cards = ({ inputValue }) => {
  const [dataPokemon, setDataPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const urlAPI = "https://pokeapi.co/api/v2/pokemon/?limit=24";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(urlAPI);
      const data = await res.json();
      console.log(data);
      setLoading(false);

      const pokemonData = data.results.map(async (currpokemon) => {
        // console.log(currpokemon.url);

        const res = await fetch(currpokemon.url);
        const data = await res.json();
        // console.log(data);

        return data;    
      });

      console.log(pokemonData);

      const detailResponces = await Promise.all(pokemonData);
      //   console.log(detailResponces);
      setDataPokemon(detailResponces);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const searchData = dataPokemon.filter((currPokemon) =>
    currPokemon.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  if (loading)
    return (
      <div>
        <h1>Loading........</h1>
      </div>
    );

  if (error)
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );

  return (
    <>
      <div className="pokemonsec">
        <ul>
          {searchData.map((currPokemon) => {
            return (
              <PokemonCardData
                key={currPokemon.id}
                PokemonsData={currPokemon}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

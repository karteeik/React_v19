import "./cards.css";
export const PokemonCardData = ({ PokemonsData }) => {
  return (
    <>
      <li className="datasec" key={PokemonsData.id}>
        {PokemonsData.name}

        <figure>
          <img
            src={PokemonsData.sprites.other.dream_world.front_default}
            alt={PokemonsData.name}
          />
        </figure>
      </li>
    </>
  );
};

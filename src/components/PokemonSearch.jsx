import { useState, useEffect } from "react";
import axios from "axios";

const PokemonSearch = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonSprite, setPokemonSprite] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
  );
  const [pokemonID, setPokemonID] = useState(1);
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonCries, setPokemonCries] = useState(
    "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg",
  );

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/1").then((response) => {
      console.log(response.data);
      setPokemonName(response.data.name);
      setPokemonSprite(
        response.data.sprites.versions["generation-v"]["black-white"].animated
          .front_default,
      );
      setPokemonID(response.data.id);
      setPokemonType(response.data.types[0].type.name);
      setPokemonCries(response.data.cries.latest);
    });
  }, []);

  return (
    <div className="container">
      <h2 className="title-md">Pokémon Search</h2>
      <p>{pokemonName.toUpperCase()}</p>
      <img src={pokemonSprite} alt={pokemonName} />
      <p>Pokemon ID: {pokemonID}</p>
      <p>Pokemon Type: {pokemonType.toUpperCase()}</p>
      <audio controls>
        <source src={pokemonCries} type="audio/ogg" />
      </audio>
    </div>
  );
};

export default PokemonSearch;

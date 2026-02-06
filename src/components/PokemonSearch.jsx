import { useState, useEffect } from "react";
import axios from "axios";

const PokemonSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [pokemonName, setPokemonName] = useState("Pikachu");
  const [pokemonSprite, setPokemonSprite] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif",
  );
  const [pokemonID, setPokemonID] = useState("25");
  const [pokemonType, setPokemonType] = useState("Electric");
  const [pokemonCries, setPokemonCries] = useState(
    "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/25.ogg",
  );

  const handleSearch = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${searchInput}`)
      .then((response) => {
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
  };

  return (
    <div className="container">
      <h2 className="title-md">Pokémon Search</h2>
      <input
        className="input"
        type="text"
        placeholder="Enter a pokemon name.."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <br />
      <br />
      <button className="btn" onClick={handleSearch}>
        Search
      </button>
      <br />
      <br />
      <div className="info-box">
        <p>{pokemonName.toUpperCase()}</p>
        <img className="pokemon-sprite" src={pokemonSprite} alt={pokemonName} />
        <p>Pokemon ID: {pokemonID}</p>
        <p>Pokemon Type: {pokemonType.toUpperCase()}</p>
        {pokemonCries && (
          <audio controls key={pokemonCries}>
            <source src={pokemonCries} type="audio/ogg" />
          </audio>
        )}
      </div>
    </div>
  );
};

export default PokemonSearch;

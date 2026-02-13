import { useState, useEffect } from "react";
import axios from "axios";

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonName, setPokemonName] = useState([]);
  const [currentListURL, setCurrentListURL] = useState(
    "https://pokeapi.co/api/v2/pokemon",
  );
  const [nextListURL, setNextListURL] = useState();
  const [prevListURL, setPrevURL] = useState();
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonSprite, setPokemonSprite] = useState("");
  const [pokemonCries, setPokemonCries] = useState();

  useEffect(() => {
    setLoading(true); // loads the loading message before the get call
    let cancelRequest;
    axios
      .get(currentListURL, {
        cancelToken: new axios.CancelToken((c) => (cancelRequest = c)),
      })
      .then((res) => {
        setLoading(false); // skips loading message after the get call
        setPokemonData(res.data);
        setNextListURL(res.data.next);
        setPrevURL(res.data.previous);
        setPokemonName(res.data.results.map((p) => p.name));
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log("Request cancelled, no problem!");
        } else {
          console.log("Real error: ", error);
        }
      });

    return () => cancelRequest();
  }, [currentListURL]);

  // console.log("pokemonData after useState", pokemonData);
  // console.log("pokemonName after useState", pokemonName);

  if (loading) return "Loading, please wait..";

  const handleNextList = () => {
    nextListURL ? setCurrentListURL(nextListURL) : null;
  };

  const handlePrevList = () => {
    prevListURL ? setCurrentListURL(prevListURL) : null;
  };

  const handlePokemonDetail = (name) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
      setSelectedPokemon(res.data);
      setPokemonSprite(
        res.data.sprites.versions["generation-v"]["black-white"].animated
          .front_default,
      );
      setPokemonCries(res.data.cries.latest);
    });
  };

  console.log("selectedPokemon", selectedPokemon);

  return (
    <div className="container">
      <h2 className="title-md">Pokémon List</h2>
      <h2 className="componentTitle">
        Total Number of Pokemon: {pokemonData.count}
      </h2>
      <div>
        <h3 className="pokemonListTitle">Pokemon:</h3>
        {pokemonName.map((name) => (
          <p
            key={name}
            onClick={() => handlePokemonDetail(name)}
            style={{ cursor: "pointer", color: "#667eea" }}
          >
            {name[0].toUpperCase() + name.substring(1)}
          </p>
        ))}
      </div>
      <br />
      {selectedPokemon && (
        <div className="info-box">
          <h3>
            {selectedPokemon.name[0].toUpperCase() +
              selectedPokemon.name.substring(1)}
          </h3>
          <img
            className="pokemon-sprite"
            src={pokemonSprite}
            alt={selectedPokemon.name}
          />
          <p>Pokemon ID: {selectedPokemon.id}</p>
          <p>Pokemon Type: {selectedPokemon.types[0].type.name}</p>
          {pokemonCries && (
            <audio controls key={pokemonCries}>
              <source src={pokemonCries} type="audio/ogg" />
            </audio>
          )}
        </div>
      )}
      <br />
      <br />
      {handlePrevList && (
        <button
          className="btn"
          disabled={!prevListURL}
          onClick={handlePrevList}
        >
          Previous List
        </button>
      )}
      <span style={{ margin: "5px" }}></span>
      {handleNextList && (
        <button
          className="btn"
          disabled={!nextListURL}
          onClick={handleNextList}
        >
          Next List
        </button>
      )}
      <br />
      <br />
    </div>
  );
};

export default PokemonList;

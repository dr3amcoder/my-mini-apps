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

  return (
    <div className="container">
      <h2 className="title-md">Pokémon List</h2>
      <p>Total Number of Pokemon: {pokemonData.count}</p>
      <br />
      <div>
        Pokemon:
        {pokemonName.map((name) => (
          <p key={name}>{name[0].toUpperCase() + name.substring(1)}</p>
        ))}
      </div>
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

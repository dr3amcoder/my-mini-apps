import OTPGenerator from "../components/OTPGenerator";
import CharacterCounter from "../components/CharacterCounter";
import SuperheroForm from "../components/SuperheroForm";
import EventRSVPForm from "../components/EventRSVPForm";
import ShoppingList from "../components/ShoppingList";
import PokemonSearch from "../components/PokemonSearch";
import PokemonList from "../components/PokemonList";

const MiniApps = () => {
  return (
    <>
      <OTPGenerator />
      <CharacterCounter />
      <SuperheroForm />
      <EventRSVPForm />
      <ShoppingList />
      <PokemonSearch />
      <PokemonList />
    </>
  );
};

export default MiniApps;

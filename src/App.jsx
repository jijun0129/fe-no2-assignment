import { useState } from "react";
import { Router } from "./routes/router";
import { PokemonContext } from "./context/PokemonContext";

function App() {
  const [selectPokemon, setSelectPokemon] = useState([]);

  return (
    <PokemonContext.Provider value={{ selectPokemon, setSelectPokemon }}>
      <Router />
    </PokemonContext.Provider>
  );
}

export default App;

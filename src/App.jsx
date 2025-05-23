import { useEffect, useState } from "react";
import { Router } from "./routes/router";
import { PokemonContext } from "./context/PokemonContext";
import { ToastContainer } from "react-toastify";

function App() {
  const [selectPokemon, setSelectPokemon] = useState(() => {
    const stored = localStorage.getItem("selectPokemon");
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    localStorage.setItem("selectPokemon", JSON.stringify(selectPokemon));
  }, [selectPokemon]);

  return (
    <PokemonContext.Provider value={{ selectPokemon, setSelectPokemon }}>
      <Router />
      <ToastContainer position="bottom-right" autoClose={4000} />
    </PokemonContext.Provider>
  );
}

export default App;

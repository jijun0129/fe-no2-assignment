import { useState, useEffect } from "react";
import { Router } from "./routes/router";
import { ToastContainer } from "react-toastify";

function App() {
  const [selectPokemon, setSelectPokemon] = useState(() => {
    const stored = localStorage.getItem("selectPokemon");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("selectPokemon", JSON.stringify(selectPokemon));
  }, [selectPokemon]);

  return (
    <>
      <Router selectPokemon={selectPokemon} setSelectPokemon={setSelectPokemon} />
      <ToastContainer position="bottom-right" autoClose={4000} />
    </>
  );
}

export default App;

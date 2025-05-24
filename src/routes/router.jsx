import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import PokemonDetail from "../pages/PokemonDetail";

export const Router = ({ selectPokemon, setSelectPokemon }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home selectPokemon={selectPokemon} setSelectPokemon={setSelectPokemon} />} />
        <Route path="/dex" element={<Dex selectPokemon={selectPokemon} setSelectPokemon={setSelectPokemon} />} />
        <Route
          path="/pokemon-detail"
          element={<PokemonDetail selectPokemon={selectPokemon} setSelectPokemon={setSelectPokemon} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

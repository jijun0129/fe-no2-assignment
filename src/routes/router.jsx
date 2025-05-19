import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import PokemonDetail from "../pages/PokemonDetail";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/pokemon-detail" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

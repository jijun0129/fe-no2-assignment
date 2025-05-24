import { configureStore } from "@reduxjs/toolkit";
import pokemon from "./selectPokemon";

export const store = configureStore({
  reducer: { pokemon: pokemon },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import selectPokemonReducer from "./selectPokemon";

const persistConfig = {
  key: "root", // localStorage에 저장될 key
  storage,
};

const persistedReducer = persistReducer(persistConfig, selectPokemonReducer);

export const store = configureStore({
  reducer: { pokemon: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

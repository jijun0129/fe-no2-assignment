import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { useState } from "react";
import { PokemonContext } from "../context/PokemonContext";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

const Dex = () => {
  const [selectPokemon, setSelectPokemon] = useState([]);

  return (
    <PokemonContext.Provider value={{ selectPokemon, setSelectPokemon }}>
      <ContainerDiv>
        <Dashboard />
        <PokemonList />
      </ContainerDiv>
    </PokemonContext.Provider>
  );
};

export default Dex;

import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { useEffect } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useContext } from "react";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

const Dex = () => {
  const { setSelectPokemon } = useContext(PokemonContext);

  useEffect(() => {
    const storedSelectPokemon = localStorage.getItem("selectPokemon");
    if (storedSelectPokemon) {
      setSelectPokemon(JSON.parse(storedSelectPokemon));
    }
  }, [setSelectPokemon]);

  return (
    <ContainerDiv>
      <Dashboard />
      <PokemonList />
    </ContainerDiv>
  );
};

export default Dex;

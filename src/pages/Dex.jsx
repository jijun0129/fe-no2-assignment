import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

const Dex = ({ selectPokemon, setSelectPokemon }) => {
  return (
    <ContainerDiv>
      <Dashboard selectPokemon={selectPokemon} setSelectPokemon={setSelectPokemon} />
      <PokemonList selectPokemon={selectPokemon} setSelectPokemon={setSelectPokemon} />
    </ContainerDiv>
  );
};

export default Dex;

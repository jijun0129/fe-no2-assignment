import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
  gap: 20px;
`;

const Dex = () => {
  return (
    <ContainerDiv>
      <Dashboard />
      <PokemonList />
    </ContainerDiv>
  );
};

export default Dex;

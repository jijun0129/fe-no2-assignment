import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../data/mock";

const DashboardDiv = styled.div`
  width: 100vw;
  max-width: 1200px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;

const PokemonList = () => {
  return (
    <DashboardDiv>
      {MOCK_DATA.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} select={false} />;
      })}
    </DashboardDiv>
  );
};

export default PokemonList;

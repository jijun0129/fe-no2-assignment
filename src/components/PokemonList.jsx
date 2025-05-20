import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../data/mock";

const DashboardDiv = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  justify-items: center;
  gap: 20px;
`;

const PokemonList = ({ selectPokemon, setSelectPokemon }) => {
  return (
    <DashboardDiv>
      {MOCK_DATA.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            selectPokemon={selectPokemon}
            setSelectPokemon={setSelectPokemon}
            select={false}
          />
        );
      })}
    </DashboardDiv>
  );
};

export default PokemonList;

import styled from "styled-components";
import Pokeball from "../assets/pokeball.png";
import PokemonCard from "./PokemonCard";

const DashboardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
`;

const TitleH2 = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #ff0000;
  margin: 20px 0;
`;

const ContentDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  gap: 10px;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  padding: 25px;
  border-radius: 10px;
  border: 2px dashed #d0d0d0;
  background-color: #ffffff;
`;

const Dashboard = ({ selectPokemon, setSelectPokemon }) => {
  return (
    <DashboardDiv>
      <TitleH2>나만의 포켓몬</TitleH2>
      <ContentDiv>
        {selectPokemon.map((pokemon) => (
          <PokemonCard pokemon={pokemon} selectPokemon={selectPokemon} setSelectPokemon={setSelectPokemon} />
        ))}
        {Array.from({ length: 6 - selectPokemon.length }).map((_, index) => (
          <Img key={index} src={Pokeball} alt="Pokeball" />
        ))}
      </ContentDiv>
    </DashboardDiv>
  );
};

export default Dashboard;

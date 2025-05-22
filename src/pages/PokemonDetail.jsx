import MOCK_DATA from "../data/mock";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  padding: 20px;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
`;
const TitleH2 = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #ff0000;
  margin: 20px 0;
`;
const ContextP = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;
const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #252525;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
  &:active,
  &:focus {
    outline: 4px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }
`;

const PokemonDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const pokemon = MOCK_DATA.find((p) => p.id === parseInt(id));
  if (!pokemon) {
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <ContainerDiv>
      <Img src={pokemon.img_url} alt={pokemon.name} />
      <TitleH2>{pokemon.korean_name}</TitleH2>
      <ContextP>타입: {pokemon.types.join(", ")}</ContextP>
      <ContextP>{pokemon.description}</ContextP>
      <Button onClick={handleBackClick}>뒤로가기</Button>
    </ContainerDiv>
  );
};

export default PokemonDetail;

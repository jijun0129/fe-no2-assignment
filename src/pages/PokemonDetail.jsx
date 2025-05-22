import MOCK_DATA from "../data/mock";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

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
const ButtonDiv = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: ${(props) => props.$color};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.$hoverColor};
  }
  &:active,
  &:focus {
    outline: 4px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }
`;

const PokemonDetail = () => {
  const navigate = useNavigate();
  const { selectPokemon, setSelectPokemon } = useContext(PokemonContext);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const pokemon = MOCK_DATA.find((p) => p.id === parseInt(id));
  if (!pokemon) {
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }

  const select = selectPokemon.some((p) => p.id === pokemon.id);

  const handleBackClick = () => {
    navigate(-1);
  };
  const handlePlusClick = (e, pokemon) => {
    e.stopPropagation();
    if (selectPokemon.length >= 6) {
      alert("최대 6마리까지 선택할 수 있습니다.");
      return;
    }
    if (selectPokemon.some((p) => p.id === pokemon.id)) {
      alert("이미 선택한 포켓몬입니다.");
      return;
    }
    setSelectPokemon([...selectPokemon, pokemon]);
  };
  const handleDeleteClick = (e, pokemon) => {
    e.stopPropagation();
    const updatedPokemon = selectPokemon.filter((p) => p.id !== pokemon.id);
    setSelectPokemon(updatedPokemon);
  };

  return (
    <ContainerDiv>
      <Img src={pokemon.img_url} alt={pokemon.name} />
      <TitleH2>{pokemon.korean_name}</TitleH2>
      <ContextP>타입: {pokemon.types.join(", ")}</ContextP>
      <ContextP>{pokemon.description}</ContextP>
      <ButtonDiv>
        {select ? (
          <Button $color="#ff0000" $hoverColor="#dd0000" onClick={(e) => handleDeleteClick(e, pokemon)}>
            삭제
          </Button>
        ) : (
          <Button $color="#ff0000" $hoverColor="#dd0000" onClick={(e) => handlePlusClick(e, pokemon)}>
            추가
          </Button>
        )}
        <Button $color="#252525" $hoverColor="#000000" onClick={handleBackClick}>
          뒤로가기
        </Button>
      </ButtonDiv>
    </ContainerDiv>
  );
};

export default PokemonDetail;

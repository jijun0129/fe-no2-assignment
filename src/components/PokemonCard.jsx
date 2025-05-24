import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addPokemon, removePokemon } from "../store/selectPokemon";
import { toast } from "react-toastify";

const CardDiv = styled.div`
  text-align: center;
  border-radius: 10px;
  border: 1px solid #dddddd;
  background-color: #ffffff;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const NameP = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0;
`;

const NumP = styled.p`
  font-size: 12px;
  margin: 12px 0;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-top: 10px;
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #e60000;
  }
  &:active,
  &:focus {
    outline: 4px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }
`;

const PokemonCard = ({ pokemon, select }) => {
  const selectPokemon = useSelector((state) => state.pokemon.selectPokemon);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/pokemon-detail?id=${pokemon.id}`);
  };

  const handlePlusClick = (e, pokemon) => {
    e.stopPropagation();
    if (selectPokemon.length >= 6) {
      toast.warn("최대 6마리까지 선택할 수 있습니다.");
      return;
    }
    if (selectPokemon.some((p) => p.id === pokemon.id)) {
      toast.warn("이미 선택한 포켓몬입니다.");
      return;
    }
    dispatch(addPokemon(pokemon));
  };
  const handleDeleteClick = (e, pokemon) => {
    e.stopPropagation();
    dispatch(removePokemon(pokemon));
  };

  const generateNumber = (num) => {
    return `No. ${String(num).padStart(3, "0")}`;
  };

  return (
    <CardDiv onClick={handleCardClick}>
      <Img src={pokemon.img_url} alt="pokemon" />
      <NameP>{pokemon.korean_name}</NameP>
      <NumP>{generateNumber(pokemon.id)}</NumP>
      {select ? (
        <Button onClick={(e) => handleDeleteClick(e, pokemon)}>삭제</Button>
      ) : (
        <Button onClick={(e) => handlePlusClick(e, pokemon)}>추가</Button>
      )}
    </CardDiv>
  );
};

export default PokemonCard;

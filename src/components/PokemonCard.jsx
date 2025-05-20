import styled from "styled-components";

const CardDiv = styled.div`
  width: 85%;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #dddddd;
  background-color: #ffffff;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
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
`;

const PokemonCard = ({ pokemon, selectPokemon, setSelectPokemon }) => {
  const handleButtonClick = (pokemon) => {
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

  return (
    <CardDiv>
      <Img src={pokemon.img_url} alt="pokemon" />
      <NameP>{pokemon.korean_name}</NameP>
      <NumP>No.{pokemon.id}</NumP>
      <Button onClick={() => handleButtonClick(pokemon)}>추가</Button>
    </CardDiv>
  );
};

export default PokemonCard;

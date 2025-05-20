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

const PokemonCard = ({ pokemon }) => {
  return (
    <CardDiv>
      <Img src={pokemon.image} alt="11" />
      <NameP>{pokemon.name}</NameP>
      <NumP>No.001</NumP>
      <Button>추가</Button>
    </CardDiv>
  );
};

export default PokemonCard;

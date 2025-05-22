import styled from "styled-components";
import PokemonLogo from "../assets/pokemon-logo.png";
import { useNavigate } from "react-router-dom";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Img = styled.img`
  width: 600px;
  margin-bottom: 20px;
`;
const Button = styled.button`
  font-size: 20px;
  background-color: #ff0000;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #cc0000;
  }
  &:active,
  &:focus {
    outline: 4px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }
`;

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/dex");
  };

  return (
    <ContainerDiv>
      <Img src={PokemonLogo} />
      <Button onClick={handleButtonClick}>포켓몬 도감 시작하기</Button>
    </ContainerDiv>
  );
};

export default Home;

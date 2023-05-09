import styled from "styled-components";
import PortoFachada from "../../assets/portoseguroFachada.jpg";

const MainImg = styled.img`
  width: calc(100vw - 17px);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
`;

const Selector = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: rgba(1, 19, 127, 0.7);
  top: 50%;
  left: 15%;
  color: white;
  font-family: "Poppins";
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const TopText = styled.div`
  font-size: 12px;
`;
const BottomText = styled.div`
  margin-bottom: 30px;
  font-size: 15px;
`;

const TextContainer = styled.div`
  font-size: 25px;
  font-weight: 800;
  margin-bottom: 10px;
`;

const ConhecaButton = styled.div`
  width: 100px;
  height: 30px;
  border: 1px solid white;
  border-radius: 20px;
  text-align: center;
`;

export default function MainCaroucel() {
  return (
    <div>
      <MainImg src={PortoFachada} />
      <Selector>
        <TopText>Em Andamento</TopText>
        <TextContainer>Porto Seguro</TextContainer>
        <BottomText>Blumenau - Água Verde</BottomText>
        <ConhecaButton>Conheça</ConhecaButton>
      </Selector>
    </div>
  );
}

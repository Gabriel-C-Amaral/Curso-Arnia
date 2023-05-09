import styled from "styled-components";
import GramLogoName from "../../assets/logoNomeGram.svg";

const Container = styled.div`
  width: calc(100vw - 17px);
  justify-content: center;
  height: 300px;
  display: flex;
  padding-top: 50px;
  gap: 20px;

  position: absolute;
  text-align: center;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
`;
const HeaderItem = styled.div`
  height: 20px;
  padding-left: 10px;
  padding-right: 10px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #3f3f40;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #01137f;
    border-radius: 10px;
  }
`;

const Phonediv = styled.div`
  width: 146px;
  height: 34px;
  background: #01137f;
  border-radius: 34px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 34px;
  color: #ffffff;
`;
const PhoneContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Logo = styled.img`
  width: 150px;
  height: 220px;
  position: relative;
  top: -50px;
  /* display: block; */
`;

export default function Header() {
  return (
    <Container>
      <Logo src={GramLogoName} />
      <HeaderItem>Home</HeaderItem>
      <HeaderItem>A Gram</HeaderItem>
      <HeaderItem>Empreendimentos</HeaderItem>
      <HeaderItem>Oportunidades</HeaderItem>
      <HeaderItem>Contatos</HeaderItem>
      <PhoneContainer>
        <Phonediv>(47) 3397-2302</Phonediv>
        <Phonediv>(47) 98413-5111</Phonediv>
      </PhoneContainer>
    </Container>
  );
}

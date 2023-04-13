import styled from 'styled-components'

export default function Testes() {
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
  `
  const Header = styled.div`
    width: 817px;
    height: 58px;
    background: #ffffff;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 2;
  `
  const Title = styled.div`
    width: 529px;
    height: 20px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  `

  const EraseIcon = styled.img`
    width: 32px;
    height: 24px;
  `

  const Body = styled.div`
    margin-top: -10px;
    width: 816px;
    height: 264px;
    border-radius: 8px;
    background-color: #f2f2f2;
    padding-top: 10px;
  `

  return (
    <Container>
      <Header>
        <Title>Atenção Concentrada/Seletiva</Title> <EraseIcon src="src\images\eraseIcon.svg" />
      </Header>
      <Body> sasasasasasa</Body>
    </Container>
  )
}

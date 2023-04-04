import styled from 'styled-components'

export default function NewSession() {
  const Container = styled.div`
    display: block;
    flex-direction: column;
    height: 451px;
    width: 616px;
  `
  const Title = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #212121;
    top: 0px;
    position: absolute;
    background-color: aliceblue;
  `

  return (
    <Container>
      <Title>Dados Gerais</Title>
    </Container>
  )
}

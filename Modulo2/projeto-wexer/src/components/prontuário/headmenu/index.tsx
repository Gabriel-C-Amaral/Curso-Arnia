import styled from 'styled-components'

function HeadMenu() {
  const Container = styled.div`
    width: 924px;
    height: 176px;
    position: absolute;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    left: 502px;
    top: 200px;
    display: flex;
    justify-content: space-around;
    z-index: -2;
  `
  const Options = styled.div`
    width: fit-content;
    height: 32px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 32px;
    color: #616161;
    position: relative;
    top: 121px;
    align-items: center;
    gap: 11px;
    display: flex;
  `
  const Divisor = styled.div`
    position: absolute;
    width: 874px;
    height: 1px;
    left: 24px;
    top: 96px;
    background: #e0e0e0;
  `

  return (
    <Container>
      <Options>
        <img src="src\images\headHeart.svg" />
        Sessão
      </Options>
      <Options>
        <img src="src\images\pinIcon.svg" />
        Fato Relevante
      </Options>
      <Options>
        <img src="src\images\ClipsIcon.svg" />
        Anexo
      </Options>
      <Options>
        <img src="src\images\BoardIcon.svg" />
        Avaliação Psicológica
      </Options>
      <Divisor />
    </Container>
  )
}

export default HeadMenu

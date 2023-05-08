import styled from 'styled-components'
import ImgEraseButton from '../../../../images/eraseIcon.svg'

type Props = {
  title: string
}

export default function Testes(props: Props) {
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;
  `
  const Header = styled.div`
    width: 817px;
    height: 58px;
    background: #ffffff;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    display: flex;
    align-items: center;
    z-index: 2;
    justify-content: space-between;
  `
  const Title = styled.div`
    width: 529px;
    height: 20px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    position: relative;
    left: 24px;
  `

  const EraseIcon = styled.img`
    width: 32px;
    height: 24px;
    position: relative;
    right: 24px;
  `

  const Body = styled.div`
    margin-top: -10px;
    width: 791px;
    height: 264px;
    border-radius: 8px;
    background-color: #f2f2f2;
    padding-top: 10px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    padding-left: 25px;
  `
  const MediumField = styled.input`
    background-color: #e0e0e0;
    border: 1px solid #bdbdbd;
    border-radius: 8px;
    width: 161px;
    height: 50px;
  `
  const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
  `
  const InputLabel = styled.label`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 5px;
  `
  const LargeContainer = styled.input`
    width: 671px;
    height: 59px;
    background: #e0e0e0;
    border: 1px solid #bdbdbd;
    border-radius: 16px;
    padding-left: 15px;
    ::placeholder {
      color: #303030;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
    }
  `

  return (
    <Container>
      <Header>
        <Title>{props.title}</Title> <EraseIcon src={ImgEraseButton} />
      </Header>
      <Body>
        <InputContainer>
          <InputLabel>Nome</InputLabel>
          <MediumField type="text" />
        </InputContainer>
        <InputContainer>
          <InputLabel>Número de pontos</InputLabel>
          <MediumField type="text" />
        </InputContainer>
        <InputContainer>
          <InputLabel>Percentil</InputLabel>
          <MediumField type="text" />
        </InputContainer>
        <InputContainer>
          <InputLabel>Resultado</InputLabel>
          <MediumField type="text" />
        </InputContainer>
        <InputContainer>
          <InputLabel>Obs:</InputLabel>
          <LargeContainer placeholder="Descrição da observação" />
        </InputContainer>
      </Body>
    </Container>
  )
}

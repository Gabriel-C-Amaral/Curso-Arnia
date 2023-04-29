import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function NewAvaluation() {
  const Container = styled.div`
    display: flex;
    position: relative;
    top: -10px;
    flex-direction: column;
    height: 260px;
    width: 640px;
    gap: 12px;
    justify-content: space-around;
    padding-left: 16px;
  `
  const InputLittle = styled.input`
    border: 1px solid #bdbdbd;
    border-radius: 8px;
    box-sizing: border-box;
    height: 48px;
    width: 182px;
    position: relative;
    margin-left: 16px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    margin-top: 9px;
  `
  const Label = styled.label`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    align-items: center;
    color: #4f4f4f;
    position: relative;
    margin-left: 16px;
    margin-bottom: 4px;
  `
  const InputContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: space-around;
    align-items: flex-start;
    margin-right: 16px;
    flex-direction: column;
  `

  const Warning = styled.div`
    width: 578px;
    /* height: 122px; */
    background: #c5f2e0;
    border-radius: 8px;
    font-family: 'Montserrat';
    font-style: normal;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
  `
  const WarningTitle = styled.div`
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #00995d;
    width: 75px;
    height: 20px;
  `
  const WarningText = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 170%;
    color: #212121;
    width: 538px;
    height: 54px;
  `

  const Footer = styled.div`
    width: 642px;
    height: 97px;
    left: 0px;
    bottom: -97px;
    background: #ffffff;
    border-top: 2px solid #e0e0e0;
    border-radius: 0px 0px 8px 8px;
    position: absolute;
    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #616161;
    justify-content: flex-end;
    gap: 24px;
  `

  const SaveButton = styled.div`
    background: #00995d;
    border-radius: 24px;
    width: 147px;
    height: 48px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 48px;
    align-items: center;
    text-align: center;
    color: #ffffff;
    margin-right: 32px;
    cursor: pointer;
  `
  const Cancel = styled.span`
    cursor: pointer;
  `

  return (
    <Container>
      <InputContainer>
        <Label>Data*</Label>
        <InputLittle type="date" />
      </InputContainer>
      <Warning>
        <WarningTitle>Atenção!</WarningTitle>
        <WarningText>
          Você será{' '}
          <b>
            <i>redirecionado para uma nova página onde</i>
          </b>{' '}
          irá preencher os dados da avaliação psicológica.
        </WarningText>
      </Warning>
      <Footer>
        <Cancel>Cancelar</Cancel>
        <Link to={'/avaliacao'}>
          <SaveButton> Criar</SaveButton>{' '}
        </Link>
      </Footer>
    </Container>
  )
}

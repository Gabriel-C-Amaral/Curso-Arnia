import styled from 'styled-components'
import Step1 from './steps/step1'

export default function AvaluationPage() {
  const Container = styled.div`
    display: flex;
    width: calc(100% - 80px);
    height: calc(100% - 80px);
    position: relative;
    top: 100px;
    left: 80px;
    flex-direction: column;
    gap: 24px;
  `
  const Header = styled.div`
    width: calc(100vw - 90px);
    height: 48px;
    background: #ffffff;
    border-radius: 16px 0 0 16px;
    position: relative;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
  `
  const InsideHeader = styled.div`
    margin-left: 16px;
    display: flex;
    gap: 9px;
  `
  const Content = styled.div`
    position: relative;
    width: 80vw;
    height: 500px;
    left: 37px;
    margin-top: 16px;
  `

  return (
    <Container>
      <Header>
        <InsideHeader>
          <img src="src\images\arrowLeftBack.svg" /> Voltar
        </InsideHeader>
        <InsideHeader>|</InsideHeader>
        <InsideHeader>
          <b>Avaliação Psicológica</b>
        </InsideHeader>
        <InsideHeader>|</InsideHeader>
        <InsideHeader>
          <b>Data:</b> 10/09/2022
        </InsideHeader>
      </Header>
      <Content>
        <Step1 />
      </Content>
    </Container>
  )
}

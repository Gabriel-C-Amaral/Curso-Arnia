import styled from 'styled-components'

export default function Step1() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 40px;
  `
  const Header = styled.div`
    width: 100%;
    height: 74px;
    position: relative;
    display: flex;
  `
  const Steps = styled.img`
    width: 380px;
    height: 74px;
  `
  const Content = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
  `
  const ContentHeader = styled.div`
    border-radius: 16px 16px 0 16px;
    border-left: 10px solid #017849;
    border-bottom: 3px solid #f2f2f2;
    width: 1080px;
    height: 75px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    color: #017849;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    padding-left: 24px;
    padding-right: 24px;
    align-items: center;
  `
  const Buttons = styled.div`
    display: flex;
    gap: 16px;
  `

  return (
    <Container>
      <Header>
        <Steps src="src\images\step1active.svg" />
        <Steps src="src\images\step2waiting.svg" />
        <Steps src="src\images\step3waiting.svg" />
      </Header>
      <Content>
        <ContentHeader>
          Entrevista Psicológica
          <Buttons>
            <img src="src\images\saveBtn.svg" />
            <img src="src\images\skipBtn.svg" />
          </Buttons>
        </ContentHeader>
      </Content>
    </Container>
  )
}

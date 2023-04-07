import styled from 'styled-components'

export default function Step3() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
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
  return (
    <Container>
      <Header>
        <Steps src="src\images\step1done.svg" />
        <Steps src="src\images\step2done.svg" />
        <Steps src="src\images\step3active.svg" />
      </Header>
    </Container>
  )
}

import Identity from '../prontuário/identity'
import styled from 'styled-components'
import Header from './header'
import Goals from './goals'
import Anotations from './anotations'
import HeadMenu from './headmenu'
import TimelineContainer from './timeline'

function Prontuário() {
  const Container = styled.div`
    display: flex;
    width: calc(100% - 80px);
    height: calc(100% - 80px);
    position: relative;
    top: 100px;
    left: 138px;
    flex-direction: column;
    gap: 24px;
  `
  const SideContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
    width: 340px;
  `

  const CentralContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 924px;
  `

  const MainContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
  `

  return (
    <Container>
      <Header />
      <MainContainer>
        <SideContainer>
          <Identity
            name="Ana Ester Resende"
            birthday="10/09/2020"
            occupation="Designer"
            education="Superior Incompleto"
          />
          <Goals />
          <Anotations />
        </SideContainer>
        <CentralContainer>
          <HeadMenu />
          <TimelineContainer />
        </CentralContainer>
      </MainContainer>
    </Container>
  )
}

export default Prontuário

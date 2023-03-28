import Identity from '../prontuário/identity'
import styled from 'styled-components'
import Header from './header'

function Prontuário() {
  const Container = styled.div`
    display: flex;
    width: calc(100% - 80px);
    left: 80px;
    height: calc(100% - 80px);
    top: 80px;
  `

  return (
    <Container>
      <Identity name="Ana Ester Resende" birthday="10/09/2020" occupation="Designer" education="Superior Incompleto" />
      <Header />
    </Container>
  )
}

export default Prontuário

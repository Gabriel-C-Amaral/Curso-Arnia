import styled from 'styled-components'
import DivisorFilter from './divisorFilter'

function TimelineContainer() {
  const Container = styled.div`
    width: 924px;
    height: 900px;
    position: absolute;
    left: 502px;
    top: 392px;
    flex-direction: column;
  `

  const Teste = styled.div`
    width: 924px;
    height: 210px;
    position: relative;
    background-color: aliceblue;
  `

  return (
    <Container>
      <DivisorFilter />
      <Teste />
    </Container>
  )
}

export default TimelineContainer

import styled from 'styled-components'
import DivisorFilter from './divisorFilter'
// import Sessao from './sessao'

function TimelineContainer() {
  const Container = styled.div`
    width: 924px;
    height: 900px;
    position: relative;
    flex-direction: column;
  `

  return (
    <Container>
      <DivisorFilter />
    </Container>
  )
}

export default TimelineContainer

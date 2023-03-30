import styled from 'styled-components'

function TimelineContainer() {
  const Container = styled.div`
    width: 924px;
    height: fit-content;
    position: absolute;
    left: 502px;
    top: 434px;
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
      <Teste />
    </Container>
  )
}

export default TimelineContainer

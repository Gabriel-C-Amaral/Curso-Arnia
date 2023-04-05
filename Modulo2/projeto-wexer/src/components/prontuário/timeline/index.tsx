import styled from 'styled-components'
import DivisorFilter from './divisorFilter'
import Sessao from './sessao'

function TimelineContainer() {
  const Container = styled.div`
    width: 924px;
    height: 900px;
    position: relative;
    /* left: 502px;
    top: 392px; */
    flex-direction: column;
    z-index: -2;
  `

  return (
    <Container>
      <DivisorFilter />
      <Sessao
        card="session"
        date="15 de setembro de 2022"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum justo nulla, accumsan eget feugiat eget, egestas quis lorem. Vivamus ex erat, sollicitudin sed molestie ut, scelerisque ac enim. Mauris mauris dolor, egestas ac lectus in, mollis sagittis dui. Donec luctus lectus quis porttitor lobortis. Morbi in odio a massa ultricies euismod. Suspendisse justo justo, rutrum a finibus nec, lacinia vitae diam. Mauris feugiat cursus consectetur. Proin sit amet ligula a metus pellentesque dictum. Integer in massa molestie, tincidunt orci ac, iaculis velit. Sed pharetra metus sed eros fermentum, eu consectetur odio consequat. Quisque auctor massa at metus lobortis, ac pellentesque erat sagittis. Pellentesque turpis felis, sollicitudin at fringilla at, condimentum ac ex. Curabitur efficitur massa nulla, quis faucibus neque semper at. Nullam bibendum elementum nisl, et elementum purus gravida sed. Maecenas et accumsan dui."
      />
    </Container>
  )
}

export default TimelineContainer

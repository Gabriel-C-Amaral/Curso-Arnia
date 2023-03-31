import styled from 'styled-components'

function DivisorFilter() {
  const Container = styled.div`
    height: 17px;
    width: 924px;
    position: relative;
    display: Flex;
    align-items: center;
    margin-bottom: 40px;
  `
  const DivisorLine = styled.div`
    width: 770px;
    height: 1px;
    position: relative;
    background: #bdbdbd;
    align-self: center;
  `

  return (
    <Container>
      <DivisorLine />
    </Container>
  )
}

export default DivisorFilter

import styled from 'styled-components'
import ImgarrowDown from '../../../../images/arrowDown.svg'

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
  const Filter = styled.div`
    width: 119px;
    height: 17px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #757575;
    margin-left: 7px;
    position: relative;
  `
  const Forte = styled.span`
    color: #212121;
  `
  const ArrowDown = styled.img`
    width: 8px;
    height: 6px;
    margin-left: 8px;
  `

  return (
    <Container>
      <DivisorLine />
      <Filter>
        Filtrar por: <Forte>Todos</Forte>
      </Filter>
      <ArrowDown src={ImgarrowDown} />
    </Container>
  )
}

export default DivisorFilter

import styled from 'styled-components'
import PopOver from './popover'
// import Testes from './testes'

export default function Step2() {
  const Content = styled.div`
    font-family: 'Montserrat';
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 954px;
    padding-left: 24px;
    padding-right: 144px;
    padding-top: 24px;
    background: #ffffff;
    position: relative;
    justify-content: space-between;
    left: 14px;
    padding-bottom: 30px;
  `

  return (
    <Content>
      {/* <Testes title="Atenção Concentrada/Seletiva" /> */}
      <PopOver />
    </Content>
  )
}

import React, { useState } from 'react'
import styled from 'styled-components'
import SideMenu from '../sidemenu'
// import DropdownMenu from '../dropdownmenu'

type nameType = {
  name: string
}

function HeaderMenu(name: nameType) {
  const [menuActive, setMenuActive] = useState(false)

  const toggleMenu = () => {
    setMenuActive(true)
  }
  const toggleMenuOff = () => {
    setMenuActive(!menuActive)
  }

  const Container = styled.div`
    z-index: 10;
    position: fixed;
  `

  const FixedHeader = styled.div`
    width: calc(100% - 80px);
    height: 80px;
    position: fixed;
    top: 0px;
    left: 80px;
    display: flex;
    justify-content: space-between;
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    align-items: center;
    padding-left: 24px;
    padding-right: 30px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    color: #017849;
  `
  const WexerIcon = styled.div`
    background: #ffffff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    width: 80px;
    height: 80.75px;
    left: 0px;
    top: 0px;
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
  `
  const BoxName = styled.div`
    width: fit-content;
    height: 29px;
    display: flex;
    align-items: center;
    margin-right: 30px;
    gap: 14px;
  `
  const BoldName = styled.span`
    font-weight: 700;
  `

  return (
    <Container>
      <WexerIcon>
        <img src="src\images\logoIcon.svg" width="28,85px" height="44,33px" />{' '}
      </WexerIcon>
      <FixedHeader>
        <img src="src\images\menu.svg" width="28px" height="28px" onClick={toggleMenuOff} />
        <BoxName>
          <div>
            Bem vindo(a), <BoldName>{name.name}</BoldName>
          </div>{' '}
          <img src="src\images\arrowDown.svg" width="12px" height="9px" />
        </BoxName>
      </FixedHeader>
      <div onClick={toggleMenu}>
        <SideMenu toggle={menuActive} />
      </div>
    </Container>
  )
}

export default HeaderMenu

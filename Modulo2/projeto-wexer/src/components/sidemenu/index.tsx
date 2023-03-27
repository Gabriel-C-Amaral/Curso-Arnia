import styled from 'styled-components'
import React, { useState } from 'react'
import DropdownMenu from '../dropdownmenu'

type IsToggled = {
  toggle: boolean
}

function SideMenu(active: IsToggled) {
  const [menuExpanded, setExpanded] = useState(false)

  const expandMenu = () => {
    setExpanded(!menuExpanded)
  }

  const Icons = styled.img`
    width: 20px;
    height: 20px;
    position: relative;
  `
  const MenuItems = styled.div`
    position: absolute;
    left: 85px;
    width: 150px;
  `
  const NotToggled = styled.div`
    background: #00995d;
    height: calc(100% - 80px);
    position: fixed;
    width: 80px;
    display: flex;
    flex-direction: column;
    top: 80px;
    gap: 35px;
    align-items: center;
    padding-top: 25px;
  `

  const Toggled = styled.div`
    background: #00995d;
    height: calc(100% - 80px);
    position: fixed;
    width: 263px;
    display: flex;
    flex-direction: column;
    top: 80px;
  `

  const MenuItensRetracted = styled.div`
    width: 217px;
    height: 35px;
    justify-content: flex-start;
    gap: 19px;
    display: flex;
    align-items: center;
    padding-left: 25px;
    padding-top: 25px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
  `

  const DropDownIcon = styled.img`
    width: 7px;
    height: 14px;
    position: absolute;
    right: 16px;
  `

  if (active.toggle == true) {
    if (menuExpanded == false) {
      return (
        <Toggled>
          <MenuItensRetracted>
            <Icons src="src\images\people.svg" />
            <MenuItems> Meus Pacientes</MenuItems>
          </MenuItensRetracted>

          <MenuItensRetracted>
            <Icons src="src\images\todo-fill.svg" />
            <MenuItems> Modelos</MenuItems>
            <DropDownIcon src="src\images\arrowright.svg" onClick={expandMenu} />
          </MenuItensRetracted>
          <MenuItensRetracted>
            <Icons src="src\images\plus-circle.svg" />
            <MenuItems> Cadastros</MenuItems>
            <DropDownIcon src="src\images\arrowright.svg" onClick={expandMenu} />
          </MenuItensRetracted>
          <MenuItensRetracted>
            <Icons src="src\images\settings-2.svg" />
            <MenuItems> Preferências</MenuItems>
          </MenuItensRetracted>
        </Toggled>
      )
    } else {
      return (
        <Toggled>
          <MenuItensRetracted>
            <Icons src="src\images\people.svg" />
            <MenuItems> Meus Pacientes</MenuItems>
          </MenuItensRetracted>
          <DropdownMenu
            icon="src\images\todo-fill.svg"
            title="Modelos"
            item1="Entrevistas"
            item2="Roteiro de testes"
            item3="Documentos"
          />
          <DropdownMenu
            icon="src\images\todo-fill.svg"
            title="Cadastros"
            item1="Perguntas"
            item2="Testes"
            item3="Tipos de avaliações"
          />
          <MenuItensRetracted>
            <Icons src="src\images\settings-2.svg" />
            <MenuItems> Preferências</MenuItems>
          </MenuItensRetracted>
        </Toggled>
      )
    }
  } else {
    return (
      <NotToggled>
        <Icons src="src\images\people.svg" />
        <Icons src="src\images\todo-fill.svg" />

        <Icons src="src\images\plus-circle.svg" />
        <Icons src="src\images\settings-2.svg" />
      </NotToggled>
    )
  }
}

export default SideMenu

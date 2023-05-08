import styled from 'styled-components'
import React, { useState } from 'react'
import DropdownMenu from '../dropdownmenu'
import Imgpeople from '../../images/people.svg'
import ImgToDo from '../../images/todo-fill.svg'
import Imgarrowright from '../../images/arrowright.svg'
import Imgpluscircle from '../../images/plus-circle.svg'
import Imgsettings2 from '../../images/settings-2.svg'
import Imgtodofill from '../../images/todo-fill.svg'

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
            <Icons src={Imgpeople} />
            <MenuItems> Meus Pacientes</MenuItems>
          </MenuItensRetracted>

          <MenuItensRetracted>
            <Icons src={ImgToDo} />
            <MenuItems> Modelos</MenuItems>
            <DropDownIcon src={Imgarrowright} onClick={expandMenu} />
          </MenuItensRetracted>
          <MenuItensRetracted>
            <Icons src={Imgpluscircle} />
            <MenuItems> Cadastros</MenuItems>
            <DropDownIcon src={Imgarrowright} onClick={expandMenu} />
          </MenuItensRetracted>
          <MenuItensRetracted>
            <Icons src={Imgsettings2} />
            <MenuItems> Preferências</MenuItems>
          </MenuItensRetracted>
        </Toggled>
      )
    } else {
      return (
        <Toggled>
          <MenuItensRetracted>
            <Icons src={Imgpeople} />
            <MenuItems> Meus Pacientes</MenuItems>
          </MenuItensRetracted>
          <DropdownMenu
            icon={ImgToDo}
            title="Modelos"
            item1="Entrevistas"
            item2="Roteiro de testes"
            item3="Documentos"
          />
          <DropdownMenu icon={ImgToDo} title="Cadastros" item1="Perguntas" item2="Testes" item3="Tipos de avaliações" />
          <MenuItensRetracted>
            <Icons src={Imgsettings2} />
            <MenuItems> Preferências</MenuItems>
          </MenuItensRetracted>
        </Toggled>
      )
    }
  } else {
    return (
      <NotToggled>
        <Icons src={Imgpeople} />
        <Icons src={Imgtodofill} />

        <Icons src={Imgpluscircle} />
        <Icons src={Imgsettings2} />
      </NotToggled>
    )
  }
}

export default SideMenu

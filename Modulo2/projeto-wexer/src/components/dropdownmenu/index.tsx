import styled from 'styled-components'
import Imgarrowright from '../../images/arrowright.svg'

type Menu = {
  title: string
  item1: string
  item2: string
  item3: string
  icon: string
}

function DropdownMenu(props: Menu) {
  const Icons = styled.img`
    width: 20px;
    height: 20px;
    position: absolute;
    left: 28px;
  `
  const MenuExpanded = styled.div`
    width: 90%;
    height: 179px;
    position: relative;
    background: #017849;
    justify-content: space-evenly;
    flex-direction: column;
    display: flex;
    padding-left: 25px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    margin-top: 5px;
  `
  const DropDownIcon = styled.img`
    width: 7px;
    height: 14px;
    position: absolute;
    right: 16px;
  `

  const MenuItems = styled.div`
    position: relative;
    left: 65px;
    width: 150px;
  `
  const MenuTitle = styled.div`
    display: flex;
  `

  return (
    <MenuExpanded>
      <MenuTitle>
        <Icons src={props.icon} />
        <MenuItems> {props.title}</MenuItems>
        <DropDownIcon src={Imgarrowright} />
      </MenuTitle>
      <MenuItems>{props.item1}</MenuItems>
      <MenuItems>{props.item2}</MenuItems>
      <MenuItems>{props.item3}</MenuItems>
    </MenuExpanded>
  )
}

export default DropdownMenu

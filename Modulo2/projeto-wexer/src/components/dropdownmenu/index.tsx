import styled from 'styled-components'

type Menu = {
  title: string
  item1: string
  item2: string
  item3: string
}

function DropdownMenu(props: Menu) {
  const Icons = styled.img`
    width: 20px;
    height: 20px;
  `
  const MenuExpanded = styled.div`
    width: 263px;
    height: 179px;
  `
  const DropDownIcon = styled.img`
    width: 7px;
    height: 14px;
    position: absolute;
    right: 16px;
  `

  return (
    <MenuExpanded>
      <Icons src="src\images\todo-fill.svg" />
      {props.title}
      <DropDownIcon src="src\images\arrowright.svg" />
    </MenuExpanded>
  )
}

export default DropdownMenu

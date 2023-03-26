import styled from 'styled-components'

type IsToggled = {
  toggle: boolean
}

function SideMenu(active: IsToggled) {
  const Icons = styled.img`
    width: 20px;
    height: 20px;
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
    gap: 18px;
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
    return (
      <Toggled>
        <MenuItensRetracted>
          <Icons src="src\images\people.svg" />
          Meus Pacientes
        </MenuItensRetracted>
        <MenuItensRetracted>
          <Icons src="src\images\todo-fill.svg" />
          Modelos
          <DropDownIcon src="src\images\arrowright.svg" />
        </MenuItensRetracted>
        <MenuItensRetracted>
          <Icons src="src\images\plus-circle.svg" />
          Cadastros
          <DropDownIcon src="src\images\arrowright.svg" />
        </MenuItensRetracted>
        <MenuItensRetracted>
          <Icons src="src\images\settings-2.svg" />
          Preferências
        </MenuItensRetracted>
      </Toggled>
    )
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

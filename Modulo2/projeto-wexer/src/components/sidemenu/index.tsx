import styled from 'styled-components'

function SideMenu() {
  const Icons = styled.img`
    width: 20px;
    height: 20px;
  `
  const Side = styled.div`
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

  return (
    <Side>
      <Icons src="src\images\people.svg" />
      <Icons src="src\images\todo-fill.svg" />
      <Icons src="src\images\plus-circle.svg" />
      <Icons src="src\images\settings-2.svg" />
    </Side>
  )
}

export default SideMenu

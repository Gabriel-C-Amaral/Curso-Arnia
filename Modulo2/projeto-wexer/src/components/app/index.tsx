import { Normalize } from 'styled-normalize'
// import Teste from '../teste'
import PrimaryBtn from '../primary-button'
import './styles.css'
import HeaderMenu from '../header-sidemenu'
import SideMenu from '../sidemenu'

function App() {
  return (
    <div className="App">
      <Normalize />
      <HeaderMenu name="Daniel" />
      <SideMenu />
      <PrimaryBtn
        textColor="#FFFFFF"
        filled="#00995D"
        border="#00995D"
        text="Normal"
        icon="../../src/images/plus-circle.svg"
      />
    </div>
  )
}

export default App

import { Normalize } from 'styled-normalize'
import Teste from '../teste'
import PrimaryBtn from '../primary-button'
// import logo from '../../images/logo.svg'

function App() {
  return (
    <div className="App">
      <Normalize />
      <Teste />
      <PrimaryBtn
        textColor="#FFFFFF"
        filled="#00995D"
        border="#00995D"
        text="Normal"
        icon="../../src/images/plus-circle.svg"
      />
      <h1>oi</h1>
    </div>
  )
}

export default App

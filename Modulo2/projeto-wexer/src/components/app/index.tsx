import { Normalize } from 'styled-normalize'
// import Teste from '../teste'
import './styles.css'
import HeaderMenu from '../header-sidemenu'
import Identity from '../prontuário/identity'

function App() {
  return (
    <div className="App">
      <Normalize />
      <HeaderMenu name="Daniel" />
      <Identity />
    </div>
  )
}

export default App

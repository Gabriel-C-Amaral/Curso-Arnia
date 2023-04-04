import { Normalize } from 'styled-normalize'
import './styles.css'
import HeaderMenu from '../header-sidemenu'
import Prontuário from '../prontuário'

function App() {
  return (
    <div className="App">
      <Normalize />
      <HeaderMenu name="Daniel" />
      <Prontuário />
    </div>
  )
}

export default App

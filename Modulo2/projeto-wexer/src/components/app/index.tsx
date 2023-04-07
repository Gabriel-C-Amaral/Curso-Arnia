import { Normalize } from 'styled-normalize'
import './styles.css'
import HeaderMenu from '../header-sidemenu'
// import Prontuário from '../prontuário'
import AvaluationPage from '../avaluation'

function App() {
  return (
    <div className="App">
      <Normalize />
      <HeaderMenu name="Daniel" />
      {/* <Prontuário /> */}
      <AvaluationPage />
    </div>
  )
}

export default App

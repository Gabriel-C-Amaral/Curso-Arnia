import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FunctionalComponent from './components/functionalComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FunctionalComponent label='123'/>
      
    </div>
  )
}

export default App

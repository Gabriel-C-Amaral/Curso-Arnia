import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

type Numeros = {
  num1: number
  num2: number
}

function App() {
  const [count, setCount] = useState(0)

  let numeros: Numeros = {
    num1: 0,
    num2: 0

  }

  return (
    <div className="App">
      
      <h1>Vite + React</h1>
      <div className="card">
        <label htmlFor="num1">numero 1</label>
        <input type="number" name="num1" id="num1" />
        <label htmlFor="num2">Numero 2</label>
        <input type="number" name='num2' id='num2' />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
    
    </div>
  )
}

export default App

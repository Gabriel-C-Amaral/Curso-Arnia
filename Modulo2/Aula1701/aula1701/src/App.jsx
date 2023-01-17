import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const randomNumber = Math.random()

  return (
    <div className="App">
      {randomNumber > (0.5) ? <p>maior</p> : <p>menor</p>} 
    </div>
  )
}

export default App

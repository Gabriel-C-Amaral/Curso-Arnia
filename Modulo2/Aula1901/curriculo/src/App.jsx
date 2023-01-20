import { useState } from 'react'
import Header from './components/header/header'
import Title from './components/title/title'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Title/>
      
    </div>
  )
}

export default App

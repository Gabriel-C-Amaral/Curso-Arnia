import { useState } from 'react'
import Header from './components/header/header'
import Title from './components/title/title'
import Body from './components/body/body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Title/>
      <Body/>
     
      
    </div>
  )
}

export default App

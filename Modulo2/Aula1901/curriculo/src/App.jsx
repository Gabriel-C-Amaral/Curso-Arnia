import { useState } from 'react'
import Header from './components/header/header'
import Title from './components/title/title'
import BranchName from './components/branch/branch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Title/>
      <div className="container">
        <BranchName/>
      </div>
      
    </div>
  )
}

export default App

import './App.css'
import SideBar from './components/sidebar'
import RightVector from './components/rightvector'
import Arnia from './components/arniavector'
import Header from './components/header'
import TaskList from './components/tasklist'
import Forms from './components/forms'

function App() {

  return (
    <div className="App">
      <SideBar />
      <RightVector />
      <Arnia />      
      <Header />
      <TaskList/>
      <Forms />
    </div>
  )
}

export default App

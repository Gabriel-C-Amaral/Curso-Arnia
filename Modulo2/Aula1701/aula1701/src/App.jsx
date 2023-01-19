import './assets/styles/index.css'
import TaskList from './components/TaskList'
import Tasks from './components/tasks'

function App() {
  const tasks = [
    {
      description: "teste teste teste",
      isDone: true
    },
    {
      description: "testando2",
      isDone: false
    }
  ]
  

  return (
    <div className="App">
      {tasks.map(
      (task) => <Tasks description={task.description} isDone={task.isDone}/>
      )}
    </div>
  )
}

export default App

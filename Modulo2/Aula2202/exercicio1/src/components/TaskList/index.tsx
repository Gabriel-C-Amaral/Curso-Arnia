import { Dispatch, SetStateAction } from "react"
import { TaskType } from "../../App"
import Task from "../Task"
import { TasksContainer } from "./styles"

type TaskListProps = {
  tasks: Array<TaskType>
  setTasks: Dispatch<SetStateAction<Array<TaskType>>>
}

/**
 * Tarefa 4 - Complete a passagem de props para o componente.
 */

const TaskList = ({ tasks, setTasks }: TaskListProps) => (
  <TasksContainer>
    {tasks.map((task, index) => (
      <Task
        onClickDelete={() =>
          setTasks(
            tasks.filter((_, filteringIndex) => index !== filteringIndex)
          )
        }
      />
    ))}
  </TasksContainer>
)

export default TaskList

import TaskListItem from "../task-list-item"

const tasks = [
    "Ler email",
    "Estudar React",
    "Estudar Javascript",
    "Visitar meus amigos",
]

const TaskList = () => {
    return (
        <div className="task-list">
            {tasks.map((valor, indice) => (
                <TaskListItem
                    key={`task-${indice}`}
                    task={valor}
                    index={indice}
                />
            ))}
        </div>
    )
}

export default TaskList

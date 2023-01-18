const tasks = [
    "Ler email",
    "Estudar React",
    "Estudar js",
    "Visitar meus amigos"
]


function TaskList() {
    return (
        <div>
            <ul>
                {tasks.map(task => (
                    <li> {task} </li>
                ))}
            </ul>
        </div>        
    )
}

export default TaskList
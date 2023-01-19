const Checkbox = ({ index }) => {
    return (
        <input type="checkbox" id={`task-${index}`} />
    )
}

const TaskListItem = ({ index, task }) => {
    return (
        <div className="task-list-item">
            <label htmlFor={`task-${index}`}>
                <Checkbox index={index} />
                {task}
            </label>
        </div>

    )
}

export default TaskListItem

import React from "react";

function Tasks ({description, isDone}) {
    return (
        <div>
            {description}
            <input type="checkbox" name="" id="" checked={isDone}/>
        </div>
    )
}

export default Tasks
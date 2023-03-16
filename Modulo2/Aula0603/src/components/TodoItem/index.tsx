import React from "react";

const TodoItem = ({ id, text, status }: ToDoItemType) => {
  return (
    <div>
      <p>
        {id} - {text} - {status}
      </p>
    </div>
  );
};

export default TodoItem;

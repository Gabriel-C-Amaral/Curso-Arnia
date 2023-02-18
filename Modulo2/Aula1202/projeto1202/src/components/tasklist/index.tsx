import React, { useEffect, useState } from "react";
import "./style.css";
import Taskheader from "../taskheader";

type Task = {
  num: number;
  description: string;
  date: string;
  status: string;
};

type State = {
  tasks: {
    num: number;
    description: string;
    date: string;
    status: string;
  };
};

const TaskList: React.FC<State> = (props) => {
  const [tasks, addTask] = useState<Task[]>([]);
  const [click, setClick] = useState(0);

  useEffect(() => {
    addTask([...tasks, props.tasks]);
  }, [click]);

  return (
    <div>
      <div className="container">
        <Taskheader />{" "}
        {tasks.map(function (value) {
          return <div>{value.description}</div>;
        })}
      </div>
    </div>
  );
};

export default TaskList;

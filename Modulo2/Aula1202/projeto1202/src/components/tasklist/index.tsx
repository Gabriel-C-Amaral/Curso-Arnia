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

  setClick(click + 1);

  return (
    <div>
      <div className="container" onClick={() => setClick(0)}>
        <Taskheader />
        {tasks.map(function (value) {
          return <div>{props.tasks.description}</div>;
        })}
      </div>
    </div>
  );
};

export default TaskList;

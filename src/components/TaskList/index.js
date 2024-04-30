// TaskList.js
import React from "react";
import TaskItem from "../TaskItem";
import "./index.css";

const TaskList = ({ tasks, toggleTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
      ))}
    </ul>
  );
};

export default TaskList;

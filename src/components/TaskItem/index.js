// TaskItem.js
import React from "react";
import './index.css'

const TaskItem = ({ task, toggleTask }) => {
  return (
    <li className={`item ${task.completed ? "completed" : ""}`}>
      <p>{task.name}</p>
      <p>{task.description}</p>
      <p>{task.dueDate}</p>
      {task.completed?<p>Completed</p>:<p>Pending</p>}
      {!task.completed && (
        <button className="button" onClick={() => toggleTask(task.id)}>Complete</button>
      )}
    </li>
  );
};

export default TaskItem;

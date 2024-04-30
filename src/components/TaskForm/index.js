// TaskForm.js
import React, { useState } from "react";
import "./index.css";

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return; // Prevent adding empty task
    addTask({ id: Date.now(), name: taskName, description, dueDate, completed: false });
    setTaskName("");
    setDescription("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Name / Team Name"
        className="input-field"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Task Description"
        className="input-field"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        placeholder="Due date"
        className="input-field"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button className="button" type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;

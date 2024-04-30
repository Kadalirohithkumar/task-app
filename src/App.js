// App.js
import React, { useState } from "react";
import TaskItem from "./components/TaskItem";
import TaskForm from './components/TaskForm';
import TaskList from "./components/TaskList";
import TaskSummary from "./components/TaskSummary";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Function to toggle task completion status
  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Calculate total and completed tasks
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="app-container">
      <div className="left">
        <h1>Task Manager</h1>
        <TaskForm addTask={addTask} />
        <TaskSummary totalTasks={totalTasks} completedTasks={completedTasks} />

      </div>
      <div className="right">
        <TaskList tasks={tasks} toggleTask={toggleTask} />
      </div>
    </div>
  );
}

export default App;

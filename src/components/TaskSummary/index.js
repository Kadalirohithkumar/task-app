// TaskSummary.js
import React from "react";
import './index.css'

const TaskSummary = ({ totalTasks, completedTasks }) => {
  return (
    <div className="task-summary">
      <p>Total tasks: {totalTasks}</p>
      <p>Completed tasks: {completedTasks}</p>
    </div>
  );
};

export default TaskSummary;

import React from "react";
import Task from "./Task";

function TaskList({ tasks, onTaskDelete }) {
  const taskList = tasks.map((task, index) => (
    <Task
      key={index}
      text={task.text}
      category={task.category}
      onTaskDelete={() => onTaskDelete(index)}
    />
  ));
  return(
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskList}
    </div>
  );
}

export default TaskList;
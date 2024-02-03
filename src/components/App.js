import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskItems, setTaskItems] = useState(TASKS);
  const [currectSelectedButtonIndex, setCurrectSelectedButtonIndex] =
    useState(0);

  const changeSelectedButton = (index) => {// to change selected category button index
    setCurrectSelectedButtonIndex(index);
  };

  const deleteTask = (taskIndex) => {// to delete a new task
    const newTasks = taskItems.filter((_, index) => {//filtering tasks
      if (index !== taskIndex) {
        return true;
      } else {
        return false;
      }
    });

    setTaskItems(newTasks);//updating with new list of tasks
  };

  const addTask = (task) => {// to add a new task
    const newTasks = [...taskItems, task];
    setTaskItems(newTasks);//updating with new list of tasks
    console.log(newTasks);
  };

  const filtedTasks = taskItems.filter((task) => {// filtering tasks based on selected category
    if (CATEGORIES[currectSelectedButtonIndex] === "All") {
      return true;
    } else {
      return task.category === CATEGORIES[currectSelectedButtonIndex];
    }
  });
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        categoryIndex={currectSelectedButtonIndex}
        onSelectedButtonChange={changeSelectedButton}
      />
      <NewTaskForm
      categories={CATEGORIES.slice(1)}
      onTaskFormSubmit={addTask}
      />
      <TaskList tasks={filtedTasks} onTaskDelete={deleteTask} />
    </div>
  );
}

export default App;
import { useState } from "react";// importing use state
import React from "react"

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [formData, setFormData] = useState({ text: "", category: "" });// state variables for managing form data
  const optionsList = categories.map((category) => (//list of option elemnt for each category
    <option key={category} value={category}>
      {category}
    </option>
  ));

  const handleOnChange = (e) => {
    const newObj = { ...formData, [e.target.name]: e.target.value };
    setFormData(newObj);
  };

  const handleFormSubmit = (e) => {// Handler function for form submission
    e.preventDefault();
    onTaskFormSubmit(formData);//Invoking the onTaskFormSubmit callback with the current form data
  };

  //rendering the new task component
  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input type="text" name="text"  value={formData.text}
          onChange={handleOnChange}/>
      </label>
      <label>
        Category
        <select name="category"    value={formData.category}
          onChange={handleOnChange}>
          {/* render <option> elements for each category here */}
          {optionsList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
import React, { useState } from 'react';
import { nanoid } from "nanoid" //Making unique identifiers
import Todo from './components/Todo';
import FilterButton from './components/FilterButton';
import Form from './components/Form';


/**
 * 
 * We defining these constants outside our App() function because if they were defined inside it,
 *  they would be recalculated every time the <App /> component re-renders, 
 * and we don’t want that. 
 * 
 * */
// functions that we will use to filter the tasks data array
const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  completed: task => task.completed
}
//collect an array of FILTER_NAMES
const FILTER_NAMES = Object.keys(FILTER_MAP)

function App(props) {
  //initial state
  const [tasks, setTasks] = useState(props.tasks)
  const [filter, setFilter] = useState('all');

  //method to add a new task
  function addTask(name) {
    //put name into an object that has the same structure as our existing tasks
    const newTask = { id: "Todo-" + nanoid(), name: name, completed: false }
    setTasks([...tasks, newTask]);
  }
  //toggling a checkbox to change the state in our application
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return { ...task, completed: !task.completed }
      }
      return task;
    })
    setTasks(updatedTasks);
  }

  const taskList = tasks.map(task => (
   
      < Todo
      id = { task.id }
      name = { task.name }
      completed = { task.completed }
      key = { task.id }
      toggleTaskCompleted = { toggleTaskCompleted }
      deleteTask = { deleteTask }
      editTask = { editTask } />
  )

  )
  const tasksNoun = taskList.length > 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  //delete tasks
  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id)
    setTasks(remainingTasks);
  }

  //edit task
  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        return { ...task, name: newName }
      }
      return task;
    });
    //returns tasks
    setTasks(editedTaskList)

  }
  return (

    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;

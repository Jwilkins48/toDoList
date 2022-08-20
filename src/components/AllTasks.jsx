import React from 'react'
import AddTaskDropdown from './AddTaskDropdown';
import Checkbox from './Checkbox';
import {useState} from 'react';

function AllTasks({defaultTasks, addTask, deleteTask}) {

const [editing, setEditing] = useState(false);
const [toDo, setToDo] = useState('');
const [currentToDo, setCurrentToDo] = useState({});

const handleAddInput = (e) => {
  setToDo(e.target.value)
}

const handleEditClick = (todo) => {
  setEditing(true);
  setCurrentToDo({...defaultTasks})
}

const handleEditInput = (e) => {
  setCurrentToDo({ ...currentToDo, text: e.target.value });
  console.log(currentToDo);
}
const handleEditSubmit = (e) => {
  e.preventDefault();
  handleUpdateTodo(currentToDo.id, currentToDo)
}
const handleUpdateTodo = (id, updatedToDo) => {
  const updated = defaultTasks.map((item) => {
    return item.id === id ? updatedToDo : item;
  });
  setEditing(false);
  setToDo(updated);
}

let viewMode = {};
let editMode = {};

if(editing){
  viewMode.display = 'none'
} else {
  editMode.display = 'none'
}

return (
<div>
  <h2 className='allTaskHeader'>Things To Do</h2>

  {defaultTasks.map((item) => (
  <div className='card' key={item.id}>
    <Checkbox />

    {/* Task */}
    <h3 style={viewMode} className='tasks'>{item.task}</h3>
    {/* Edit input */}
    <input  value={item.task} style={editMode} type='text'
    className='editInput'></input>

    <button onClick={handleEditClick} className='editBtn'><i class="fa-solid fa-pen-to-square"></i></button>
    <button onClick={()=> deleteTask(item.id)} className='optionsBtn'><i class="fa-solid fa-xmark"></i></button>

  </div>
  ))}

  <AddTaskDropdown addTask={addTask} className={'mainPageAddForm'} />

</div>
)
}

export default AllTasks

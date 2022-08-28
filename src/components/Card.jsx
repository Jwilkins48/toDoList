import React from 'react'
import Checkbox from './Checkbox';
import {useState} from 'react';

function Card({task, defaultTasks, deleteTask, editTask}) {
const [editing, setEditing] = useState(false);
const [updatedToDo, setUpdatedToDo] = useState('');


const handleUpdateClick = (id) => {
    editTask(id,updatedToDo)
    setEditing(false)
}

const handleEditChange = (e) => {
setUpdatedToDo(e.target.value);
console.log(updatedToDo);
}

const showEdit = (
<div className='card'>
    <Checkbox task={task} defaultTasks={defaultTasks} />

    <input onChange={handleEditChange} defaultValue={task.task} type='text'
        className='editInput'></input>

    <button onClick={()=> handleUpdateClick(task.id)} className='updateBtn' >Update</button>
    <button onClick={()=> setEditing(false)} className='updateBtn'>Cancel</button>

    <button onClick={() => setEditing(true)} className='editBtn'><i class="fa-solid fa-pen-to-square"></i></button>
    <button onClick={()=> deleteTask(task.id)} className='optionsBtn'><i class="fa-solid fa-xmark"></i></button>
</div>
);

const showTasks = (
    <div className='card'>
        <Checkbox task={task} defaultTasks={defaultTasks} />
        <label htmlFor={task.id} className="tasks">{task.task}</label>
        <button onClick={() => setEditing(true)} className="editBtn"><i
                class="fa-solid fa-pen-to-square"></i></button>
        <button onClick={()=> deleteTask(task.id)} className='optionsBtn'><i class="fa-solid fa-xmark"></i></button>
    </div>
);

return <div ><h2>{editing ? showEdit : showTasks}</h2></div>
}

export default Card
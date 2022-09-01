import React from 'react'
import {useState} from 'react';

function Card({task, defaultTasks, deleteTask, editTask}) {
const [editing, setEditing] = useState(false);
const [updatedToDo, setUpdatedToDo] = useState('');
const [complete, setComplete] = useState(task.checked);
const [checked, setChecked] = useState(false);

const handleCheckChange = (id) => {
    //Mark and label checked boxes
    setChecked(!checked)
    defaultTasks.map(item => {
        if(item.id === id){
            item.checked = !checked
        }
        return item.checked
    })
    console.log(`item is ${task.checked}`);
}







const handleUpdateClick = (id) => {
    editTask(id,updatedToDo)
    setEditing(false)
}

const handleEditChange = (e) => {
setUpdatedToDo(e.target.value);
console.log(updatedToDo);
}

const handleCheckbox = () => {
    setComplete(!complete)
}

const showEdit = (
<div className='card'>
    <input onClick={handleCheckbox} className='checkbox' type='checkbox' name='check' onChange={() => handleCheckChange(task.id)} checked={task.checked}></input>

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
        <input onClick={handleCheckbox} className='checkbox' type='checkbox' name='check' onChange={() => handleCheckChange(task.id)} checked={task.checked}></input>
        <label htmlFor={task.id} className={complete ? 'crossOut' : null} id="tasks">{task.task}</label>
        <button onClick={() => setEditing(true)} className="editBtn"><i
                class="fa-solid fa-pen-to-square"></i></button>
        <button onClick={()=> deleteTask(task.id)} className='optionsBtn'><i class="fa-solid fa-xmark"></i></button>
    </div>
);

return <div ><h2>{editing ? showEdit : showTasks}</h2></div>
}

export default Card
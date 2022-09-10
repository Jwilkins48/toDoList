import React from 'react'
import {useState} from 'react';

function Card({theme, task, defaultTasks, deleteTask, editTask}) {
const [editing, setEditing] = useState(false);
const [updatedToDo, setUpdatedToDo] = useState('');
const [complete, setComplete] = useState(task.checked);

//Check checkbox on click
const handleCheckChange = (id) => {
    //Mark and label checked boxes
    setComplete(!complete) 
    defaultTasks.map(item => {
        if(item.id === id){
            item.checked = !complete 
        }
        return item.checked
    })
    console.log(`item is ${complete}`);
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
    <input onClick={handleCheckbox} className='checkbox' type='checkbox' name='check' onChange={() => handleCheckChange(task.id)} checked={complete}></input>

    <input onChange={handleEditChange} defaultValue={task.task} type='text'
        className={`editInput edit-${theme}`}></input>

    <button onClick={()=> handleUpdateClick(task.id)} className={`updateBtn update-${theme}`} >Update</button>
    <button onClick={()=> setEditing(false)} className={`updateBtn update-${theme}`}>Cancel</button>

    <button onClick={() => setEditing(true)} className='editBtn'><i class="fa-solid fa-pen-to-square"></i></button>
    <button onClick={()=> deleteTask(task.id)} id='deleteBtn' className='optionsBtn'><i class="fa-solid fa-xmark"></i></button>
</div>
);

const showTasks = (
    <div className='card'>
        <input onClick={handleCheckbox} className='checkbox' type='checkbox' name='check' onChange={() => handleCheckChange(task.id)} checked={complete}></input>
        <div className="innerText">
            <label htmlFor={task.id} className={complete ? 'crossOut' : `label-${theme}`}>{task.task}</label>
            {/* <label className='date'>{task.date}</label> */}
        </div>

        <button onClick={() => setEditing(true)} className={`editBtn ${theme}`}><i
                class="fa-solid fa-pen-to-square"></i></button>
        <button onClick={()=> deleteTask(task.id)} id='deleteBtn' className={`optionsBtn ${theme}`}><i class="fa-solid fa-xmark"></i></button>
    </div>
);

return <div><h2>{editing ? showEdit : showTasks}</h2></div>
}

export default Card
import React from 'react'
import Checkbox from './Checkbox';
import {useState} from 'react';



function Card({defaultTasks, deleteTask, editTask}) {

const [editing, setEditing] = useState(false);
const [updatedToDo, setUpdatedToDo] = useState('');

const handleEditChange = (e) => {
setUpdatedToDo(e.target.value);
console.log(updatedToDo);
}

const handleEditClick = (id) => {
defaultTasks.map(item => {
if(item.id === id){
setEditing(true);
}
})
}

const handleUpdateClick = (id) => {
editTask(id,updatedToDo)
setEditing(false)
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
    {defaultTasks.map((item) => (
    <div className='card' key={item.id}>
        <Checkbox defaultTasks={defaultTasks} item={item} />

        {/* Task */}
        <h3 style={viewMode} className='tasks'>{item.task}</h3>
        {/* Edit input */}
        <input onChange={handleEditChange} defaultValue={item.task} style={editMode} type='text'
            className='editInput'></input>
        <button onClick={()=> handleUpdateClick(item.id)} className='updateBtn' style={editMode} >Update</button>
        <button onClick={()=> setEditing(false)} style={editMode} className='updateBtn'>Cancel</button>


        <button onClick={()=> handleEditClick(item.id)} className='editBtn'><i
                class="fa-solid fa-pen-to-square"></i></button>
        <button onClick={()=> deleteTask(item.id)} className='optionsBtn'><i class="fa-solid fa-xmark"></i></button>



    </div>
    ))}
</div>
)
}

export default Card
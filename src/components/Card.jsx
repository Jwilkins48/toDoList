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
return editing
})
}

const handleUpdateClick = (id) => {

editTask(id,updatedToDo)
setEditing(false)
}

return (
<div>
    {defaultTasks.map((item) => (
    <div className='card' key={item.id}>
        <Checkbox defaultTasks={defaultTasks} item={item} />

        {/* Task */}
        <h3 hidden={editing} className='tasks'>{item.task}</h3>
        {/* Edit input */}
        <input  hidden={!editing} onChange={handleEditChange} defaultValue={item.task}  type='text'
            className='editInput'></input>
        <button hidden={!editing} onClick={()=> handleUpdateClick(item.id)} className='updateBtn' >Update</button>
        <button hidden={!editing} onClick={()=> setEditing(false)} className='updateBtn'>Cancel</button>


        <button onClick={()=> handleEditClick(item.id)} className='editBtn'><i
                class="fa-solid fa-pen-to-square"></i></button>
        <button onClick={()=> deleteTask(item.id)} className='optionsBtn'><i class="fa-solid fa-xmark"></i></button>



    </div>
    ))}
</div>
)
}

export default Card
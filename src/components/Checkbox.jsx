import React from 'react'
import {useState} from 'react';

function Checkbox({defaultTasks, task}) {
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
return (
<div>
    <input className='checkbox' type='checkbox' name='check' onChange={() => handleCheckChange(task.id)} checked={checked}></input>
</div>
)
}

export default Checkbox
import React from 'react'
import {useState} from 'react';

function Checkbox({defaultTasks, item}) {
    const [checked, setChecked] = useState(false);

    const handleChange = (id) => {
        setChecked(!checked)
        defaultTasks.map(item => {
            if(item.id === id){
                item.checked = checked
            }
            return item.checked
        }) 
    
        console.log(`item is ${item.checked}`);
    }
return (
<div>
    <input className='checkbox' type='checkbox' name='check' onChange={() => handleChange(item.id)} checked={checked}></input>
</div>
)
}

export default Checkbox
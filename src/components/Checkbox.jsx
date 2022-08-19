import React from 'react'
import {useState} from 'react';

function Checkbox() {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked)
        console.log(checked);
    }
return (
<div>
    <input className='checkbox' type='checkbox' name='check' onChange={handleChange} checked={checked}></input>
</div>
)
}

export default Checkbox
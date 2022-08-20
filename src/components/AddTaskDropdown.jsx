import { useState } from 'react';

function AddTaskDropdown({className, addTask}) {

    const [open, setOpen] = useState(false);
    const [task, setTask] = useState('');

    const handleButtonClick = () => {
        setOpen(!open)
        console.log(open);
    }

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            task: task,
            date: Date.now()
        }
        addTask(newTask);
        setTask('');
    }

return (
<div className={className}>
    <hr className='hr' />
    <div className="dropdownWrapper">
        <button onClick={handleButtonClick} className='addTaskBtn'><i class="fa-solid fa-plus addIcon"></i> Add
        Task</button>

        {open &&(<form onSubmit={handleSubmit} id="dropDown">
            <input onChange={handleChange} value={task} autoComplete='off' className='dropDownInput' placeholder='Enter Task'></input>
            <button className='addTaskDropdownBtn'>Add Task</button>
        </form>)}
    </div>
    
</div>
)
}

export default AddTaskDropdown
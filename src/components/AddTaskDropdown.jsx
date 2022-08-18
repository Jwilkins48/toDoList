import { useState } from 'react';

function AddTaskDropdown({className, addTask}) {

    const [open, setOpen] = useState(false);
    const [task, setTask] = useState('');

    const handleButtonClick = () => {
        setOpen(!open)
        console.log(open);
    }

    const handleChange = (e) => {
        // if(task === ''){
        //     alert('Enter Task')
        // } else{
        //     setTask(e.target.value)
        // }
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
    <button onClick={handleButtonClick} className='addTaskBtn'><i class="fa-solid fa-plus addIcon"></i> Add
        Task</button>

    {open &&(<form onSubmit={handleSubmit} className="dropDown">
        <input onChange={handleChange} value={task} autoComplete='off' className='dropDownInput' placeholder='Enter Task'></input>
        <button className='addTaskDropdownBtn'>Add Task</button>
        {/* <button className='cancelDropdownBtn'>Cancel</button> */}
    </form>)}
</div>
)
}

export default AddTaskDropdown
import { useState } from 'react';

function AddTaskDropdown({className, addTask, open, setOpen}) {
    const current = new Date();
    const CurrentDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    // const [open, setOpen] = useState(false);
    const [task, setTask] = useState('');

    //Open Dropdown
    const handleButtonClick = () => {
        setOpen(!open)
        console.log(open);
    }

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    //Create new card and add to array
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            task: task,
            date: CurrentDate
        }
        addTask(newTask);
        handleButtonClick()
        setTask('');
    }

    return (
    <div className={className}>
    <hr className='hr' />
    <div className="dropdownWrapper">
        <button onClick={handleButtonClick} id='openDropAddBtn' className='addTaskBtn'><i id='dropAddIcon' class="fa-solid fa-plus addIcon"></i> Add
        Task</button>

        {open &&(<form onSubmit={handleSubmit} id="dropDown">
            <input onChange={handleChange} value={task} autoComplete='off' className='dropDownInput' placeholder='Enter Task'></input>
            <div className="dropBtnContainer">
                <button onClick={handleButtonClick} className='addTaskDropdownBtn'>Cancel</button>
                <button type='submit' className='addTaskDropdownBtn'>Add Task</button>
            </div>
        </form>)}
    </div>
    
</div>
)
}

export default AddTaskDropdown
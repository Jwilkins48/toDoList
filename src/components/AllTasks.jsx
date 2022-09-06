import React from 'react'
import AddTaskDropdown from './AddTaskDropdown';
import Card from './Card';

function AllTasks({theme, open, setOpen, defaultTasks, addTask, deleteTask, editTask}) {

return (
<div>
  <h2 className={`allTaskHeader ${theme}`}><span className='numberSpan'>{defaultTasks.length}</span> Things To Do</h2>

  <div className="cardContainer">
    {defaultTasks.map(task => (
    <Card theme={theme} key={task.id} task={task} id={task.id} editTask={editTask} deleteTask={deleteTask}
      defaultTasks={defaultTasks} />))}
    <AddTaskDropdown open={open} setOpen={setOpen} addTask={addTask} className={'mainPageAddForm'} />

  </div>
</div>
)
}

export default AllTasks
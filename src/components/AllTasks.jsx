import React from 'react'
import AddTaskDropdown from './AddTaskDropdown';
import Card from './Card';

function AllTasks({open={open}, setOpen={setOpen}, defaultTasks, addTask, deleteTask, editTask}) {

return (
<div>
  <h2 className='allTaskHeader'><span className='numberSpan'>{defaultTasks.length}</span> Things To Do</h2>

  {defaultTasks.map(task => (<Card
  key={task.id} task={task} id={task.id} editTask={editTask} deleteTask={deleteTask} defaultTasks={defaultTasks}/>))}
  <AddTaskDropdown open={open} setOpen={setOpen} addTask={addTask} className={'mainPageAddForm'} />

</div>
)
}

export default AllTasks
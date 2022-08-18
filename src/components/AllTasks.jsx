import React from 'react'
import AddTaskDropdown from './AddTaskDropdown';

function AllTasks({defaultTasks, handleChange, checked, addTask}) {
return (
<div>
  <h2 className='allTaskHeader'>Things To Do</h2>

  {defaultTasks.map(({task, id}, index) => (
  <div className='card' key={id}>
    <input className='checkbox' type='checkbox' onChange={handleChange} checked={checked} value={task} id={index}></input>
      <h3 className='tasks'>{task}</h3>
  </div>
  ))}

    <AddTaskDropdown addTask={addTask} className={'mainPageAddForm'} />

</div>
)
}

export default AllTasks
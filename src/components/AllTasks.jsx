import React from 'react'

function AllTasks({defaultTasks, handleChange, checked}) {
return (
<div>
  <h2 className='allTaskHeader'>Things To Do</h2>

  {defaultTasks.map(({task, id}, index) => (
  <div className='card' key={id}>
    <input className='checkbox' type='checkbox' onChange={handleChange} checked={checked} value={task} id={index}></input>
      <h3 className='tasks'>{task}</h3>
  </div>
  ))}

</div>
)
}

export default AllTasks
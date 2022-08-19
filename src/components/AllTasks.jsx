import React from 'react'
import AddTaskDropdown from './AddTaskDropdown';
import Checkbox from './Checkbox';

function AllTasks({defaultTasks, addTask}) {
return (
<div>
  <h2 className='allTaskHeader'>Things To Do</h2>

  {defaultTasks.map((item) => (
  <div className='card' key={item.id}>
    <Checkbox />
      <h3 className='tasks'>{item.task}</h3>
  </div>
  ))}

    <AddTaskDropdown addTask={addTask} className={'mainPageAddForm'} />

</div>
)
}

export default AllTasks
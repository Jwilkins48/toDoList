import React from 'react'
import AddTaskDropdown from './AddTaskDropdown';
import Checkbox from './Checkbox';

function AllTasks({defaultTasks, addTask, deleteTask}) {
return (
<div>
  <h2 className='allTaskHeader'>Things To Do</h2>

  {defaultTasks.map((item) => (
  <div className='card' key={item.id}>
    <Checkbox />
    <h3 className='tasks'>{item.task}</h3>

    <button onClick={() => deleteTask(item.id)} className='optionsBtn'><i class="fa-solid fa-xmark"></i></button>
    {/* <i class="fa-solid fa-ellipsis"></i> */}
    
    {/* <div className="drop">
      <button className='optionsBtn'><i class="fa-solid fa-ellipsis"></i></button>
      <div className="dropDownOptions">
        <ul className="dropDownList">
          <li>Edit</li>
          <li>Delete</li>
        </ul>
      </div>
    </div> */}


  </div>
  ))}

    <AddTaskDropdown addTask={addTask} className={'mainPageAddForm'} />

</div>
)
}

export default AllTasks
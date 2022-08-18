import { useState } from 'react';

function Header({addTask}) {

const [tasks, setTasks] = useState('');

const handleChange = (e) => {
  setTasks(e.target.value);
}

const handleSubmit = (e) => {
  e.preventDefault();
  const newTask = {
  task: tasks,
  date: Date.now()
  }
  addTask(newTask);
  setTasks('');
}


return (
<div className='headerContainer'>
  <div className="leftSideInfo">
    <i class="fa-solid fa-clipboard-check mainLogo"></i>
    <div className="inputContainer">
      <input className='searchInput' type='text' name='searchTask' placeholder='Search'></input>
    </div>
  </div>

  <div className="rightSideInfo">
    {/* <button className='addTaskBtn'><i class="fa-solid fa-plus addIcon"></i></button> */}
  </div>
</div>
)
}

export default Header
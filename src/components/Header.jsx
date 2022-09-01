import { useState } from 'react';

function Header({open, setOpen, defaultTasks, addTask}) {


  const handleButtonClick = () => {
    setOpen(!open)
    console.log(open);
}

return (
<div className='headerContainer'>
  <div className="leftSideInfo">
    <i class="fa-solid fa-clipboard-check mainLogo"></i>
  </div>

  <div className="rightSideInfo">
    <button onClick={handleButtonClick} className='addTaskBtn'><i class="fa-solid fa-plus addIcon"></i></button>
  </div>
</div>
)
}

export default Header
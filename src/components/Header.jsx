import React from 'react'

function Header() {
return (
<div className='headerContainer'>
  <div className="leftSideInfo">
    <i class="fa-solid fa-clipboard-check mainLogo"></i>
    <div className="inputContainer">
      <input className='searchInput' type='text' name='searchTask' placeholder='Search'></input>
    </div>
  </div>

  <div className="rightSideInfo">
    <button className='addTaskBtn'><i class="fa-solid fa-plus addIcon"></i></button>
  </div>
</div>
)
}

export default Header
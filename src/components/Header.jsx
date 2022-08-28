import { useState } from 'react';

function Header({defaultTasks, addTask}) {

const [searchValue, setSearchValue] = useState("");

const handleChange = (e) => {
  setSearchValue(e.target.value);
  console.log(searchValue);
}

return (
<div className='headerContainer'>
  <div className="leftSideInfo">
    <i class="fa-solid fa-clipboard-check mainLogo"></i>
    <div className="inputContainer">
      <input value={searchValue} onChange={handleChange} className='searchInput' type='text' name='searchTask' placeholder='Search'></input>
      <ul>
      </ul>
    </div>
  </div>

  <div className="rightSideInfo">
    {/* <button className='addTaskBtn'><i class="fa-solid fa-plus addIcon"></i></button> */}
  </div>
</div>
)
}

export default Header
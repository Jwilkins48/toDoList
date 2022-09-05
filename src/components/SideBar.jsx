import { useState } from "react"

function SideBar({filteredList, setDefaultTasks}) {
  const types = ['Today', 'All Tasks', 'Incomplete Tasks', 'Completed Tasks' ]
  const [active, setActive] = useState(types[0]);

  //Format Date
  const current = new Date();
  const CurrentDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const displayAll = () => {
      setDefaultTasks(filteredList)
      setActive(types[0]);
    }
    //Display Completed Tasks
    const displayCompleted = () => {
      setDefaultTasks(filteredList.filter((item) => item.checked === true));
      setActive(types[2]);
    }
    //Display Incomplete Tasks
    const displayIncomplete = () => {
      setDefaultTasks(filteredList.filter((item) => item.checked === false));
      setActive(types[1]);
      }

  return (
      <div className='tabContainer'>
        {/* Filter through tabs */}
        <button style={{backgroundColor: active === types[0] ? '#a24242' : ''}} className='sideBarTab' onClick={displayAll} >{types[0]}</button>
        <button style={{backgroundColor: active === types[1] ? '#a24242' : ''}} className='sideBarTab' onClick={displayIncomplete}>{types[1]}</button> 
        <button style={{backgroundColor: active === types[2] ? '#a24242' : ''}}className='sideBarTab' onClick={displayCompleted}>{types[2]}</button>
      </div>
  )
}

export default SideBar

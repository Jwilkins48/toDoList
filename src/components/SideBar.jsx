import { useState } from "react"

function SideBar({theme, filteredList, setDefaultTasks}) {
  
  const types = ['All Tasks', 'Incomplete Tasks', 'Completed Tasks' ]
  const [active, setActive] = useState(types[0]);

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
      <div id='tabContainer'>
        {/* Filter through tabs */}
        <button style={{backgroundColor: active === types[0] ? '#a24242' : '', color: active === types[0] ? '#c5c5cc' : ''}} className={`sideBarTab ${theme}`} onClick={displayAll} >{types[0]}</button>
        <button style={{backgroundColor: active === types[1] ? '#a24242' : '', color: active === types[1] ? '#c5c5cc' : ''}} className={`sideBarTab ${theme}`} onClick={displayIncomplete}>{types[1]}</button> 
        <button style={{backgroundColor: active === types[2] ? '#a24242' : '', color: active === types[2] ? '#c5c5cc' : ''}} className={`sideBarTab ${theme}`} onClick={displayCompleted}>{types[2]}</button>
      </div>
  )
}

export default SideBar

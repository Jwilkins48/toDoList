import { useState } from "react"

function SideBar({filteredList, setDefaultTasks}) {
  const types = ['Today', 'All Tasks', 'Incomplete Tasks', 'Completed Tasks' ]
  const [active, setActive] = useState(types[1]);

  //Format Date
  const current = new Date();
  const CurrentDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const displayAll = () => {
      setDefaultTasks(filteredList)
      setActive(types[1]);
    }
    //Display Completed Tasks
    const displayCompleted = () => {
      setDefaultTasks(filteredList.filter((item) => item.checked === true));
      setActive(types[3]);
    }
    //Display Incomplete Tasks
    const displayIncomplete = () => {
      setDefaultTasks(filteredList.filter((item) => item.checked === false));
      setActive(types[2]);
      }
    //Display Todays Tasks
    const displayToday = () => {
      setDefaultTasks(filteredList.filter((item) => item.date === CurrentDate));
      setActive(types[0]);
    }

  return (
      <div className='tabContainer'>
        {/* Filter through tabs */}
        {/* <button style={{backgroundColor: active === types[0] ? '#a24242' : ''}} className="sideBarTab" onClick={displayToday}>{types[0]}</button> */}
        <button style={{backgroundColor: active === types[1] ? '#a24242' : ''}} className='sideBarTab' onClick={displayAll} >{types[1]}</button>
        <button style={{backgroundColor: active === types[2] ? '#a24242' : ''}} className='sideBarTab' onClick={displayIncomplete}>{types[2]}</button> 
        <button style={{backgroundColor: active === types[3] ? '#a24242' : ''}}className='sideBarTab' onClick={displayCompleted}>{types[3]}</button>
      </div>
  )
}

export default SideBar

import { useState } from "react"

function SideBar({displayIncomplete, displayAll, displayCompleted, displayToday}) {
  const [active, setActive] = useState(false);

  return (
    <div className='sideBarContainer'>
      <div className='tabContainer'>
        {/* Filter through tabs */}
        <div onClick={() => setActive(!active)} style={{backgroundColor : active ? 'red' : ''}} className="sideBarTab"><button className="tabBtn" onClick={displayToday}>Today</button></div>
        <button className='sideBarTab' onClick={displayAll} >All Tasks</button>
        <button className='sideBarTab' onClick={displayIncomplete}>Incomplete Tasks</button> 
        <button className='sideBarTab' onClick={displayCompleted}>Completed Tasks</button>
      </div>
    </div>
  )
}

export default SideBar

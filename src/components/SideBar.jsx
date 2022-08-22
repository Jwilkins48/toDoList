import React from 'react'

function SideBar({displayAll, displayCompleted, displayToday}) {

  return (
    <div className='sideBarContainer'>
      <div className='tabContainer'>
        {/* Filter through tabs */}
        <button onClick={displayToday}>Today</button> 
        <button onClick={displayAll} >All Tasks</button>
        <button onClick={displayCompleted}>Completed Tasks</button>
      </div>
    </div>
  )
}

export default SideBar

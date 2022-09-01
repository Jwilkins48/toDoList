import React from 'react'

function SideBar({displayAll, displayCompleted, displayToday}) {

  return (
    <div className='sideBarContainer'>
      <div className='tabContainer'>
        {/* Filter through tabs */}
        <button className='sideBarTab' onClick={displayToday}>Today</button>
        <button className='sideBarTab' onClick={displayAll} >All Tasks</button>
        <button className='sideBarTab' >Incomplete Tasks</button> 
        <button className='sideBarTab' >Completed Tasks</button>
      </div>
    </div>
  )
}

export default SideBar

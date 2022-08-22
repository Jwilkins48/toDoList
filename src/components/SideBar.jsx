import React from 'react'

function SideBar({defaultTasks, displayCompleted}) {


  return (
    <div className='sideBarContainer'>
      <div className='tabContainer'>
        <button>Today</button> 
        <button>All Tasks</button>
        <button onClick={displayCompleted}>Completed Tasks</button>
      </div>
    </div>
  )
}

export default SideBar

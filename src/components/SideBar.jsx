import React from 'react'

function SideBar() {
  return (
    <div className='sideBarContainer'>
      <div className='tabContainer'>
        <button>Today</button> 
        <button>All Tasks</button>
        <button>Completed Tasks</button>
      </div>
    </div>
  )
}

export default SideBar

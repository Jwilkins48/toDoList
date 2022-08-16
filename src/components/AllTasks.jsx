import React from 'react'
import Card from './Card';

function AllTasks({defaultTasks}) {
return (
<div>
  <h2 className='allTaskHeader'>Things To Do</h2>

  {defaultTasks.map((item) => (
  <div className='cardContainer' key={item.id} id={item.id}>
    <Card key={item.id} item={item} />
  </div>
  ))}

</div>
)
}

export default AllTasks
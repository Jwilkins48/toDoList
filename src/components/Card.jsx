import React from 'react'

function Card({item}) {
  return (
    <div>
      <h3 className='tasks'>{item.task}</h3>
    </div>
  )
}

export default Card

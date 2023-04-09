import React from 'react'

const TodoItem = ({ text, clilckToggle, clickDelete, complete }) => {

  return (
    <div className='bg-gray-200 text-black p-2 my-2 rounded-sm flex justify-between'>
      <span style={{ color: complete ? 'red' : 'blue' }}>{text}</span>
      <div>
        <button className='mr-3 bg-green-500 text-sm rounded-md px-2 py-1 hover:bg-green-400' onClick={clilckToggle}>TOGGLE</button>
        <button className='mr-3 bg-red-500 text-sm rounded-md px-2 py-1 hover:bg-red-400' onClick={clickDelete}>DELETE</button>
      </div>
    </div>
  )
}

export default TodoItem
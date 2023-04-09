import React, { useState, useContext } from 'react'
import TodoContext from "../context/todo-context";




const TodoInput = () => {
  const [todo, setText] = useState("")
  const { addTodo } = useContext(TodoContext)

  const handelText = (e) => { setText(e.target.value); }

  const handelClick = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 100),
      text: todo,
      complete: false
    }

    addTodo(newTodo)
    console.log(newTodo.id)

  }


  return (
    <div className='bg-gray-800 p-2  rounded-sm'>
      <h3 className='font-bold text-2xl text-white pb-2'>useContext + useReducer TO-DO LIST</h3>
      <form onSubmit={handelClick}>
        <input
          type="text"
          placeholder='Enter a Text..'
          className='w-full p-1 rounded-md border-none'
          value={todo}
          onChange={handelText} />
        <button onClick={handelClick} className='w-full bg-white my-3 p-1 rounded-md text-center'> ADD </button>
      </form>
    </div>
  )
}

export default TodoInput
import React, { useContext } from 'react'
import TodoItem from "./TodoItem/TodoItem";
import TodoContext from "../context/todo-context";



const TodoList = () => {
  const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);

  return (
    <div className='bg-gray-800 p-2 mt-2  text-white rounded-sm'>
      <h3 className='font-bold uppercase text-2xl mb-2'>To-DO</h3>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} text={todo.text} complete={todo.complete} clilckToggle={() => toggleTodo(todo.id)} clickDelete={() => deleteTodo(todo.id)} />
      })}

    </div>
  )
}

export default TodoList
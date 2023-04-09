import React, { useReducer } from 'react'
import TodoContext from "./todo-context";
import todoReducer from "./todo-reducer";
import { ADD_TODO, TOGGEL_TODO, DELETE_TODO } from "./todo-action";


const TodoState = ({ children }) => {

    const initialState = { todos: [] }

    const [state, dispatch] = useReducer(todoReducer, initialState)

    // add
    const addTodo = (todo) => {
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
    }

    // toggle
    const toggleTodo = (todoId) => {
        console.log(todoId.id)
        dispatch({
            type: TOGGEL_TODO,
            payload: todoId
        })
    }

    // delete
    const deleteTodo = (todoId) => {
        dispatch({
            type: DELETE_TODO,
            payload: todoId
        })
    }

    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            addTodo,
            toggleTodo,
            deleteTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoState
import { ADD_TODO, TOGGEL_TODO, DELETE_TODO } from "./todo-action";


const todoReducer = (state, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, payload]
            };
        case TOGGEL_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => todo.id === payload ? { ...todo, complete: !todo.complete } : todo)
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== payload),
            };
        default:
            return state;
    }
}

export default todoReducer;
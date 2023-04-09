import React from "react";
import TodoInput from "./components2/TodoInput/TodoInput";
import TodoList from "./components2/TodoList/TodoList";
import TodoState from "./components2/context/TodoState";
const App2 = () => {
  return (
    <div className='max-w-xl mx-auto p-4 bg-black mt-10 rounded-md'>
      <TodoState>
        <TodoInput />
        <TodoList />
      </TodoState>
    </div>
  );
};

export default App2;

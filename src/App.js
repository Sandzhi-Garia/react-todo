import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';


 
function App() {


  const [todoList, setTodoList] =useState([]);
  function addTodo(newTodo){
    setTodoList([...todoList,newTodo])

  }
  console.log(todoList)
  return (
    <div>
        <h1>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo}></AddTodoForm>

        <TodoList todoList={todoList}></TodoList>

    </div>

  );
}

export default App;
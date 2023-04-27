import React, { useEffect, useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function useSemiPersistentState() {
  const [todoList, setTodoList] =useState(JSON.parse(localStorage.getItem('savedTodoList')));

  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList))
  }, [todoList])

  return [todoList, setTodoList]
}
 
function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  function addTodo(newTodo){
    setTodoList([...todoList,newTodo])

  }
  console.log(todoList)
  return (
    <>
        <h1>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo}></AddTodoForm>

        <TodoList todoList={todoList}></TodoList>

    </>

  );
}

export default App;
import React, { useEffect, useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function useSemiPersistentState() {
  const [todoList, setTodoList] =useState(JSON.parse(localStorage.getItem('savedTodoList')) || []);

  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList))
  }, [todoList])

  return [todoList, setTodoList]
}
 
function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  console.log(todoList)
  function addTodo(newTodo){
    setTodoList([...todoList,newTodo])

  }

  function removeTodo(id){
    console.log(id)
    const newTodoList = todoList.filter((todo)=>todo.id !== id);
    setTodoList(newTodoList)
  }

  return (
    <>
        <h1>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo}></AddTodoForm>

        <TodoList todoList={todoList} onRemoveTodo={removeTodo}></TodoList>

    </>

  );
}

export default App;
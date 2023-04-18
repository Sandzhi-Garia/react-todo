import React, { useState } from 'react'


export default function AddTodoForm(props) {
  const [todoTitle, setTodoTitle]= useState('');
  function handleTitleChange (event) {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }
  function handleAddTodo (event){
    event.preventDefault();
    props.onAddTodo({
      title: todoTitle,
      id: Date.now()
    });
    setTodoTitle('');
  }

  return (

    <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title</label>
        <input name="title" id="todoTitle" value={todoTitle} onChange={handleTitleChange}></input>
        <button type="submit">Add</button>
    </form>
  )
}

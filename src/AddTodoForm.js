import React, { useState } from 'react'
import InputWithLabel from './InputWithLabel';

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
      <InputWithLabel 
          todoTitle={todoTitle} 
          handleTitleChange={handleTitleChange}
          name='title'
          id='todoTitle'
      >
        Title:
      </InputWithLabel>

        <button type="submit">Add</button>
    </form>
  )
}

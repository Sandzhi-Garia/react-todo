

import React from 'react'
import TodoListItem from './TodoListItem';

  
export default function TodoList(props) {
  
  return (
    <ul>
    {props.todoList.map(function (listItem){
      return (
       <TodoListItem key={listItem.id} todo={listItem}/>
      );
    })}
    </ul>
  )
}

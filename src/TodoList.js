

import React from 'react'
import TodoListItem from './TodoListItem';

  
export default function TodoList(props) {
  console.log(props.todoList)
  return (
    <ul>
    {props.todoList.map(function (listItem){
      return (
       <TodoListItem onRemoveTodo={props.onRemoveTodo} key={listItem.id} todo={listItem}/>
      );
    })}
    </ul>
  )
}

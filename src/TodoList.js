

import React from 'react'
import TodoListItem from './TodoListItem';


const todoList= [{
    id : 1,
    title : "Homework",
  }, 
  {
    id : 2,
    title : "Cooking",
  }, 
  {
    id : 3,
    title : "Going to store",
  }]
  
export default function TodoList() {
  return (
    <ul>
    {todoList.map(function (listItem){
      return (
       <TodoListItem key={listItem.id} todo={listItem}/>
      );
    })}
    </ul>
  )
}

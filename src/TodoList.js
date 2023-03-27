import React from 'react'


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
    {todoList.map(function (item){
  return <li key={item.id}>{item.title}</li>
    })}
    </ul>
  )
}

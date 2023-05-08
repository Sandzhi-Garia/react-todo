import React from 'react'

export default function TodoListItem(props) {
  return (
    <>
    <li>{props.todo.title}</li>
    <button type="button" onClick={()=>{return props.onRemoveTodo(props.todo.id)}}>Remove</button>
    </>
  )
}


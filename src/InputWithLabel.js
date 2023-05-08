import React, { useEffect, useRef } from 'react'

export default function InputWithLabel(props) {
  const inputRef = useRef();
  useEffect(()=>{
    inputRef.current.focus();
  })
  return (
    <>
    <label htmlFor="todoTitle">{props.children}</label>
    <input name="title" id="todoTitle" ref={inputRef} value={props.todoTitle} onChange={props.handleTitleChange} ></input>
    </>
  )
}



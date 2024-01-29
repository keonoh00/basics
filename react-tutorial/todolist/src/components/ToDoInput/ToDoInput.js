import React, { useState } from "react";
import "./ToDoInput.css";

const ToDoInput = ({ onUpdateToDoList }) => {
  const [toDo, setToDo] = useState("")

  const onWriteToDo = (event) => {
    setToDo(event.target.value)
  }

  const onSubmitToDo = (event) => {
    const toDo = event.target[0].value
    event.preventDefault()
    onUpdateToDoList(toDo)
    setToDo("")
  }

  return (
    <form class="todo-form" onSubmit={onSubmitToDo}>
      <input class="todo-input" type='text' placeholder='Write your task...' onChange={onWriteToDo} value={toDo} />
    </form>
  )
}

export default ToDoInput;
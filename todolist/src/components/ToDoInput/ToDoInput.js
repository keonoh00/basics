import React, { useState } from "react";

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
    <form onSubmit={onSubmitToDo}>
      <input type='text' placeholder='Write your task...' onChange={onWriteToDo} value={toDo} />
      <button>Add</button>
    </form>
  )
}

export default ToDoInput;
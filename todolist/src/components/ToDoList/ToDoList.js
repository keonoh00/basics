import React from "react";
import "./ToDoList.css"

export const ToDoList = ({ toDoList }) => {
  const sliceCharacters = (toDo) => {
    if (toDo.length > 30) {
      return toDo.slice(0, 30) + "..."
    }
    return toDo
  }

  return (
    <div>
      {toDoList.map((toDo, index) => {
        return <p class="todo-list-row" key={index}>{sliceCharacters(toDo)}</p>
      })}
    </div>
  )
}

import React from "react";
import "./ToDoList.css"

export const ToDoList = ({ toDoList, onDeleteToDoList }) => {
  const sliceCharacters = (toDo) => {
    if (toDo.length > 30) {
      return toDo.slice(0, 30) + "..."
    }
    return toDo
  }

  const onDeleteList = (index) => {
    onDeleteToDoList(index)
  }


  return (
    <div>
      {toDoList.map((toDo, index) => {
        return (
          <div>
            <p class="todo-list-row" key={index}>{sliceCharacters(toDo)}</p>
            <button class="todo-list-delete-button" onClick={() => onDeleteList(index)}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

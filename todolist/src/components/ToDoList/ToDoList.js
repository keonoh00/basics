import React from "react";

export const ToDoList = ({ toDoList }) => {
  return <ul>
    {toDoList.map((toDo, index) => {
      return <li key={index}>{toDo}</li>
    })}
  </ul>
}

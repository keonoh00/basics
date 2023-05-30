import "./App.css"
import { useState, useEffect } from 'react';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const [currentInput, setCurrentInput] = useState("")
  const [toDos, setToDos] = useState([])

  const onSubmitForm = (event) => {
    event.preventDefault()
    setToDos([...toDos, event.target[0].value])
    setCurrentInput("")
  }

  const onWriteToDo = (event) => {
    setCurrentInput(event.target.value)
  }

  const onDeleteToDo = (index) => {
    const newToDoList = toDos.filter((toDo, toDoIndex) => index !== toDoIndex)
    setToDos(newToDoList)
  }

  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)
  }, [])

  const sliceCharacters = (toDo) => {
    if (toDo.length > 10) {
      return toDo.slice(0, 10) + "..."
    }
    return toDo
  }


  return (
    <div className="App">
      <h1 class="date">{currentDate.toDateString()}</h1>
      <h3 class="time">{currentDate.toLocaleTimeString()}</h3>
      <form onSubmit={onSubmitForm}>
        <input class="todo-input" placeholder="오늘의 할일은?" value={currentInput} onChange={onWriteToDo}></input>
      </form>
      {toDos.map((item, index) =>
        <div class="todo-container">
          <p class="todo">{sliceCharacters(item)}</p>
          <button class="delete" onClick={() => onDeleteToDo(index)}>🗑️</button>
        </div>
      )}
    </div>
  );
}

export default App;

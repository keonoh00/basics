import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [toDo, setToDo] = useState("")
  const [toDoList, setToDoList] = useState([])

  const onWriteToDo = (event) => {
    setToDo(event.target.value)
  }

  const onSubmitToDo = (event) => {
    const toDo = event.target[0].value
    event.preventDefault()
    setToDoList([toDo, ...toDoList])
    setToDo("")
  }

  useEffect(() => {
    console.log(toDoList)
  }, [toDoList])

  return (
    <div>
      <form onSubmit={onSubmitToDo}>
        <input type='text' placeholder='Write your task...' onChange={onWriteToDo} value={toDo} />
        <button>Add</button>
      </form>

      <ul>
        {toDoList.map((toDo, index) => {
          return <li key={index}>{toDo}</li>
        })}
      </ul>
    </div>
  );
}

export default App;

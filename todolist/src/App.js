import './App.css';
import { useState } from 'react';

function App() {

  const [toDo, setToDo] = useState("")

  const onWriteToDo = (event) => {
    console.log(event)
    setToDo(event.target.value)
  }

  const onSubmitToDo = (event) => {
    console.log(event)
    event.preventDefault()
    setToDo("0")
  }

  return (
    <div>
      <form onSubmit={onSubmitToDo}>
        <input type='text' placeholder='Write your task...' onChange={onWriteToDo} value={toDo} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;

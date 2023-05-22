import './App.css';
import { useEffect, useState } from 'react';
import ToDoInput from './components/ToDoInput/ToDoInput';
import { ToDoList } from './components/ToDoList/ToDoList';


function App() {
  const [toDoList, setToDoList] = useState([])

  const onUpdateToDoList = (toDo) => {
    setToDoList([toDo, ...toDoList])
  }

  useEffect(() => {
    console.log(toDoList)
  }, [toDoList])

  return (
    <div class="container">
      <ToDoInput onUpdateToDoList={onUpdateToDoList} />
      <ToDoList toDoList={toDoList} />
    </div>
  );
}

export default App;

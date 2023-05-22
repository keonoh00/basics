import './App.css';
import { useEffect, useState } from 'react';
import ToDoInput from './components/ToDoInput/ToDoInput';
import { ToDoList } from './components/ToDoList/ToDoList';
import { Header } from './components/Header/Header';

function App() {
  const [toDoList, setToDoList] = useState([])

  const onUpdateToDoList = (toDo) => {
    setToDoList([toDo, ...toDoList])
  }

  const onDeleteToDoList = (index) => {
    const newToDoList = toDoList.filter((toDo, toDoIndex) => {
      return toDoIndex !== index
    })
    setToDoList(newToDoList)
  }


  useEffect(() => {
    console.log(toDoList)
  }, [toDoList])

  return (
    <div class="container">
      <Header />
      <ToDoInput onUpdateToDoList={onUpdateToDoList} />
      <ToDoList toDoList={toDoList} onDeleteToDoList={onDeleteToDoList} />
    </div>
  );
}

export default App;

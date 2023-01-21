import { useState } from "react";
import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  const [toDos, setToDos] = useState([
    {
      id:1,
      text: '인강듣기',
      checked: false,
    },
    {
      id:2,
      text: '복습하기',
      checked: true,
    },
    {
      id:3,
      text: '운동하기',
      checked: true,
    },
  ])
  return (
    <>
      <TodoTemplate>
        <TodoInsert />
        <TodoList toDos={toDos}/>
      </TodoTemplate>
    </>
  );
}

export default App;

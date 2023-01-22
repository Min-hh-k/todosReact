import { useCallback, useRef, useState } from "react";
import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  const [toDos, setToDos] = useState([
    {
      id: 1,
      text: "인강듣기",
      checked: false,
    },
    {
      id: 2,
      text: "복습하기",
      checked: true,
    },
    {
      id: 3,
      text: "운동하기",
      checked: true,
    },
  ]);
  // id 3 까지 기본 값,, 4 부터
  const nextId = useRef(4);

  // 등록
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setToDos(toDos.concat(todo));
      nextId.current += 1;
    },
    [toDos]
  );

  // 삭제
  const onRemove = useCallback(
    (id) => {
      setToDos(toDos.filter((todo) => todo.id !== id));
    },
    [toDos]
  );

  // 체크
  const onToggle = useCallback(
    id => {
      setToDos(
        toDos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [toDos],
  );

  // 수정 기능은 TodoItem.jsx ㄱㄱ

  return (
    <>
      <TodoTemplate toDos={toDos}>
        <TodoInsert onInsert={onInsert} />
        <TodoList toDos={toDos} setToDos={setToDos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </>
  );
}

export default App;

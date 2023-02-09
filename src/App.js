import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  const [toDos, setToDos] = useState([
    {
      id: 1,
      text: "",
      checked: Boolean,
    },
  ]);

  //! json server data 받아오기
  useEffect(() => {
    fetch("http://localhost:3001/toDos")
      .then((res) => res.json())
      .then((data) => {
        setToDos(data);
      })
      .catch((err) => console.log(Error, err));
  }, []);

  // id 3 까지 기본 값,, 4 부터
  const nextId = useRef(4);

  //! JSON 서버에 투두 등록
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };

      fetch("http://localhost:3001/toDos", {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setToDos(toDos.concat(data));
          nextId.current += 1;
        })
        .catch((err) => console.log(Error, err));

      // setToDos(toDos.concat(todo));
      // nextId.current += 1;
    },
    [toDos]
  );

  // 삭제
  const onRemove = useCallback(
    (id) => {
      fetch(`http://localhost:3001/toDos/${id}`, {
        method: "DELETE",
        body: JSON.stringify(),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          setToDos(toDos.filter((todo) => todo.id !== id));
        })
        .catch((err) => console.log(Error, err));

      // setToDos(toDos.filter((todo) => todo.id !== id));
    },
    [toDos]
  );

  // 체크
  const onToggle = useCallback(
    (id) => {
      const checked = {
        checked: true,
      };

      fetch(`http://localhost:3001/toDos/${id}`, {
        method: "PATCH",
        body: JSON.stringify(checked),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setToDos(
            toDos.map((todo) =>
              todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
          );
        })
        .catch((err) => console.log(Error, err));

      // setToDos(
      //   toDos.map((todo) =>
      //     todo.id === id ? { ...todo, checked: !todo.checked } : todo
      //   )
      // );
    },
    [toDos]
  );

  // 수정 기능은 TodoItem.jsx ㄱㄱ

  return (
    <>
      <TodoTemplate toDos={toDos}>
        <TodoInsert onInsert={onInsert} />
        <TodoList
          toDos={toDos}
          setToDos={setToDos}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      </TodoTemplate>
    </>
  );
}

export default App;

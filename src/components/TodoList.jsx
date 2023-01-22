import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoLists = styled.div`
  /* min-height: 320px; */
  max-height: 100vh;
  overflow-y: auto; ;
`;
function TodoList({ toDos, onRemove, onToggle, setToDos }) {
  return (
    <TodoLists>
      {toDos.map((el) => (
        <TodoItem
          todo={el}
          toDos={toDos}
          key={el.id}
          onRemove={onRemove}
          onToggle={onToggle}
          setToDos={setToDos}
        />
      ))}
    </TodoLists>
  );
}

export default TodoList;

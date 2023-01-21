import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoLists = styled.div`
  /* min-height: 320px; */
  max-height: 100vh;
  overflow-y: auto; ;
`;
function TodoList({toDos, onRemove}) {
  return (
    <TodoLists>
    {toDos.map(el => <TodoItem todo={el} key={el.id} onRemove={onRemove} />)}
    </TodoLists>
  );
}

export default TodoList;

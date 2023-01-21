import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoLists = styled.div`
  /* min-height: 320px; */
  max-height: 100vh;
  overflow-y: auto; ;
`;
function TodoList({toDos}) {
  return (
    <TodoLists>
    {toDos.map(el => <TodoItem todo={el} key={el.id} />)}
    </TodoLists>
  );
}

export default TodoList;

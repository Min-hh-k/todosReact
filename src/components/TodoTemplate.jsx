import React from "react";
import styled from "styled-components";

const TodoTemple = styled.div`
  width: 75%;
  margin: 6rem auto 0 auto;
  /* overflow: hidden; */

  .border {
    border-radius: 10px;
  }

  .title {
    background: #82aae3;
    color: white;
    height: 6rem;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .contents {
    background: #bfeaf5;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

function TodoTemplate({ children, toDos }) {
  return (
    <TodoTemple>
      <div className="border">
        <div className="title">오늘의 할 일은?! '{toDos.length}' 개 입니다</div>
        <div className="contents">{children}</div>
      </div>
    </TodoTemple>
  );
}

export default TodoTemplate;

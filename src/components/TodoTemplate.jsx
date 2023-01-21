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

  @media  (max-width: 487px){
    width: 100%;
    }
`;

function TodoTemplate({ children }) {
  return (
    <TodoTemple>
      <div className="border">
        <div className="title">일정관리</div>
        <div className="contents">{children}</div>
      </div>
    </TodoTemple>
  );
}

export default TodoTemplate;

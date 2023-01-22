import React from "react";
import styled from "styled-components";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from "react-icons/md";
import { BiTrash, BiPencil } from "react-icons/bi";
import fn from "classnames";

const TodoItems = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;

  // 짝수 번째 할 일 배경색
  :nth-child(even) {
    background: #eafdfc;
  }

  .checkbox {
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
  }

  // 아이콘 크기
  svg {
    font-size: 1.5rem;
  }

  .text {
    margin-left: 0.5rem;
    flex: 1;
  }

  .checked {
    svg {
      color: #7b8fa8;
    }
    color: #7b8fa1;
    text-decoration: line-through;
  }

  .remove {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff6b6b;
    cursor: pointer;

    :hover {
      color: red;
    }
  }

  .correct {
    color: gray;
    margin-right: 1rem;
    cursor: pointer;
  }
`;
function TodoItem({ todo, onRemove, onToggle }) {
  const { id, text, checked } = todo;
  return (
    <TodoItems>
      <div className={fn("checkbox", { checked })} onClick={() => onToggle(id)}>
        {todo.checked ? (
          <MdOutlineCheckBox />
        ) : (
          <MdOutlineCheckBoxOutlineBlank />
        )}

        <div className="text">{text}</div>
      </div>
      {/* 수정 아이콘 */}
      <BiPencil className="correct" />
      <BiTrash className="remove" onClick={() => onRemove(id)} />
    </TodoItems>
  );
}

export default TodoItem;

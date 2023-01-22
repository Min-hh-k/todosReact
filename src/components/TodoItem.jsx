import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from "react-icons/md";
import { BiTrash, BiPencil } from "react-icons/bi";
import { MdDoneAll } from "react-icons/md";
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

  .correct_okay {
    color: gray;
    margin-right: 1rem;
    cursor: pointer;
  }

  .edited_input {
    width: 75%;
    border: none;
    font-size: 1.4rem;

    :focus {
      outline: none;
      background: none;
    }
  }
`;
function TodoItem({ todo, toDos, onRemove, onToggle, setToDos }) {
  const { id, text, checked } = todo;

  //!  수정
  const [edited, setEdited] = useState(false);
  const [newText, setNewTest] = useState(text); // 새로운 아이템 내용

  // 수정 기능
  const onChangeEditInput = (e) => {
    setNewTest(e.target.value);
  };

  const onClickEditButton = () => {
    // 클릭시 edited 값을 true로 바꿈
    setEdited(true);
  };

  const onClickSubmitButton = () => {
    const nextTodoList = toDos.map((item) => ({
      ...item,

      // 새로운 아이템 내용을 넣어줌

      text: item.id === id ? newText : item.text,
    }));

    // console.log(nextTodoList);
    // console.log(newText);

    setToDos(nextTodoList); // 새로운 리스트를 넣어줌

    setEdited(false); // 수정모드를 다시 읽기모드로 변경
  };

  const editInputRef = useRef(null);

  useEffect(() => {
    // edit 모드일때 포커싱을 한다.
    if (edited) {
      editInputRef.current.focus();
    }
  }, [edited]);

  return (
    <TodoItems>
      <div className={fn("checkbox", { checked })} onClick={() => onToggle(id)}>
        {todo.checked ? (
          <MdOutlineCheckBox />
        ) : (
          <MdOutlineCheckBoxOutlineBlank />
        )}
        {/* 수정 모드  on || off  */}
        {edited ? (
          <input
            className="edited_input"
            type="text"
            value={newText}
            ref={editInputRef}
            onChange={onChangeEditInput}
          />
        ) : (
          <div className="text">{text}</div>
        )}
      </div>
      {/* 수정 아이콘 */}
      {!edited ? (
        <BiPencil className="correct" onClick={onClickEditButton} />
      ) : (
        <MdDoneAll className="correct_okay" onClick={onClickSubmitButton} />
      )}
      <BiTrash className="remove" onClick={() => onRemove(id)} />
    </TodoItems>
  );
}

export default TodoItem;

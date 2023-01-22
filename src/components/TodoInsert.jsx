import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";

const TodoInserts = styled.div`
  .todoForm {
    display: flex;
    background: #91d8e4;
    flex-grow: 2 1;
  }

  input {
    width: auto;
    background: none;
    outline: none;
    border: none;
    padding: 1rem;
    font-size: 1.5rem;
    line-height: 1.5;
    color: #ffffff;
    flex-grow: 4;

    ::placeholder {
      color: whiteSmoke;
    }
  }

  button {
    outline: none;
    border: none;
    background: #567189;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    transition: 0.3s ease-in-out;
    flex-grow: 1;
    font-size: 2.5rem;

    :hover {
      background: green;
    }
  }
`;

function TodoInsert({ onInsert }) {
  const [value, setValue] = useState("");

  // 값이 바뀔 때 함수 재사용
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  // + 버튼 누를때 사용 함수
  const onSubmit = useCallback(
    (e) => {
      if (!value) {
        e.preventDefault();
        alert("아무것도 없음, 입력하세요!");
      } else {
        e.preventDefault();
        onInsert(value);
        setValue("");
      }
    },
    [onInsert, value]
  );

  return (
    <>
      <TodoInserts>
        <form className="todoForm" onSubmit={onSubmit}>
          <input placeholder="입력해주세요" value={value} onChange={onChange} />
          <button type="submit">
            <MdAdd />
          </button>
        </form>
      </TodoInserts>
    </>
  );
}

export default TodoInsert;

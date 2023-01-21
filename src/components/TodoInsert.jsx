import React from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";

const TodoInserts = styled.div`
  .todoForm {
    display: flex;
    background: #91d8e4;
    flex-grow: 2 1
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

function TodoInsert() {
  return (
    <>
      <TodoInserts>
        <form className="todoForm">
          <input placeholder="오늘의 할 일은?!" />
          <button type="submit">
            <MdAdd />
          </button>
        </form>
      </TodoInserts>
    </>
  );
}

export default TodoInsert;

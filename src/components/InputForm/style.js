import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  align-items: center;
  width: 30%;
  height: 50px;

  input {
    width: 60%;
    border-radius: 10px 0 0 10px;
    padding-left: 15px;
    height: 23px;
    border: 1px solid black;
  }

  button {
    height: 27px;
    width: 35px;
    border-radius: 0 10px 10px 0;
    border: 1px solid black;
    background-color: yellowgreen;
    :hover {
      cursor: pointer;
      background-color: orange;
    }
  }
`;

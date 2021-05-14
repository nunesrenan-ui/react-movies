import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  height: 150px;
  margin: 10px;
  background: transparent;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 1.5px rgba(0, 0, 0, 0.55);
  transition: all 0.2s ease;
`;

export const LeftSide = styled.div`
  width: 100px;
  background-size: contain;
  img {
    max-width: 100px;
    height: 100%;
    border-radius: 10px 0 0 10px;
    position: relative;
  }
`;

export const RightSide = styled.div`
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  width: 150px;
  height: inherit;
  background: #000000;
  border-radius: 0 10px 10px 0;
  ::-webkit-scrollbar {
    display: none;
  }
  h1 {
    color: white;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    text-align: left;
    font-size: 12px;
    margin: 10px 0 0 0;
    padding: 0 0 0 20px;
    letter-spacing: 1.5px;
  }
  ul {
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;
    padding: 0 0 0 10px;
    margin: 5px 0 0 0;
  }
  li {
    display: inline;
    color: #e3e3e3;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 7.5px;
    padding: 0 10px 0 0;
  }
  p {
    color: white;
    font-size: 5px;
    letter-spacing: 0.5px;
    line-height: 10px;
    text-align: justify;
    padding: 5px;
    text-transform: uppercase;
  }
`;

export const Box = styled.a`
  font-size: 5px;
  color: white;
  letter-spacing: 1px;
  overflow-x: auto;
  width: ${({ primary }) => (primary ? "250px" : "120px")};
  :hover {
    cursor: pointer;
  }
`;

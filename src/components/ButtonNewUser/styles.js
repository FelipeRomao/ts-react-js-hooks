import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  float: right;
  color: #fff;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 5px 10px 5px 10px;
  border-radius: 13px;
  box-shadow: none;
  border: none;
  outline: none;
  background: #77a1d3;
  background: -webkit-linear-gradient(to right, #e684ae, #79cbca, #77a1d3);
  background: linear-gradient(to right, #e684ae, #79cbca, #77a1d3);

  &:hover {
    box-shadow: 0px 2px 2px rgba(0, 114, 255, 0.5);
    transition: 0.5s all;
  }
`;

import styled from "styled-components";

export const Content = styled.article`
  border-radius: 5px;
  font-size: 13px;
  padding: 10px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  color: #fff;
  background: #00c6ff;
  background: -webkit-linear-gradient(to right, #0072ff, #00c6ff);
  background: linear-gradient(to right, #0072ff, #00c6ff);
`;

export const Button = styled.button`
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  padding: 5px 10px 5px 10px;
  border-radius: 13px;
  box-shadow: none;
  border: none;
  outline: none;
  background: #c2e59c;
  background: -webkit-linear-gradient(to right, #64b3f4, #c2e59c);
  background: linear-gradient(to right, #64b3f4, #c2e59c);

  &:hover {
    box-shadow: 0px 2px 2px rgba(0, 114, 255, 0.5);
    transition: 0.5s all;
  }
`;

export const UserName = styled.p`
  font-size: 15px;
  font-family: "Lobster", cursive;
`;

export const UserAge = styled.p`
  font-size: 12px;
`;

export const UserSex = styled.p`
  font-size: 12px;
`;

export const UserBio = styled.span`
  font-weight: bold;
`;

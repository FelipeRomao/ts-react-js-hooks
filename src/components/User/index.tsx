import React, { FC, useState } from "react";

import { Content, Button, UserName, UserAge, UserSex, UserBio } from "./styles";
import { User as UserInterface } from "./userInterface";
import ButtonNewUser from "../ButtonNewUser";
import api from "../../services/api";

const User: FC = () => {
  const [users, setUsers] = useState<[UserInterface]>();

  async function loadData() {
    const response = await api.get("/users"),
      { data } = response,
      { users: usersData } = data;

    setUsers(usersData);
  }

  return (
    <>
      {users?.map(user => (
        <Content key={user._id}>
          <UserName>Nome: {user.name}</UserName>
          <UserAge>Idade: {user.age}</UserAge>
          <UserSex>Sexo: {user.sex}</UserSex>
          <UserBio>Biografia: {user.bio}</UserBio>
        </Content>
      ))}
      <Button onClick={loadData}>Buscar Usuário</Button>
      <ButtonNewUser>Adicionar Usuário</ButtonNewUser>
    </>
  );
};

export default User;

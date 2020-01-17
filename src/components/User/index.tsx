import React, { useState } from "react";

import { Content, Button } from "./styles";
import { default as UserInterface } from "./userInterface";

const User: React.FC = () => {
  const [user, setUser] = useState<UserInterface>();

  async function loadData() {
    try {
      const response = await fetch("https://api.github.com/users/feliperomao"),
        data = await response.json();

      setUser(data);
    } catch (err) {
      console.log("ERROR >", err);
    }
  }

  return (
    <div>
      {user && (
        <Content>
          <a
            href={user.avatar_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#FFF",
              fontWeight: "bold"
            }}
          >
            Avatar do usuário
          </a>

          <div>
            <p>
              <strong>Nome do usuário:</strong> {user.name}
            </p>
            <p>
              <strong>Login do usuário:</strong> {user.login}
            </p>

            <article>
              <strong>Biografia:</strong> {user.bio}
            </article>
          </div>
        </Content>
      )}
      <Button onClick={loadData}>Buscar Usuário</Button>
    </div>
  );
};

export default User;

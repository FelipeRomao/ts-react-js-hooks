import React, { FC, useState } from "react";
import { Modal, Input } from "antd";

import { Button } from "./styles";
import api from "../../services/api";

const { TextArea } = Input,
  styles = { marginTop: "10px", fontSize: "12px" };

const ButtonNewUser: FC = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [bio, setBio] = useState("");

  async function saveUser() {
    await api.post("user", {
      name,
      age,
      sex,
      bio
    });

    setVisible(false);
    setName("");
    setAge("");
    setSex("");
    setBio("");
  }

  return (
    <>
      <Button onClick={() => setVisible(true)}>Adicionar Usuário</Button>
      <Modal
        title="Adicione um novo usuário"
        visible={visible}
        onOk={saveUser}
        onCancel={() => setVisible(false)}
        okText="Enviar"
        cancelText="Cancelar"
      >
        <Input
          placeholder="Digite seu nome"
          value={name}
          style={{ ...styles }}
          onChange={({ target: { value } }) => setName(value)}
        />
        <Input
          placeholder="Digite sua idade"
          value={age}
          style={{ ...styles }}
          onChange={({ target: { value } }) => setAge(value)}
        />
        <Input
          placeholder="Digite seu sexo"
          value={sex}
          style={{ ...styles }}
          onChange={({ target: { value } }) => setSex(value)}
        />
        <TextArea
          placeholder="Digite sua biografia"
          value={bio}
          style={{ ...styles }}
          autosize={{ minRows: 3, maxRows: 5 }}
          onChange={({ target: { value } }) => setBio(value)}
        />
      </Modal>
    </>
  );
};

export default ButtonNewUser;

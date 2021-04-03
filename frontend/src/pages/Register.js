import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../services/api";

import logo from "../assets/logo.png";
import "../styles/login.css";

function Register() {
  let history = useHistory();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  async function handleCadastro() {
    const response = await api.post("/create", {
      name: name,
      password: password,
    });

    if (response.data.message !== undefined) {
      alert(response.data.message);
    } else {
      history.push("/");
    }
  }

  return (
    <div className="container">
      <div className="login-header">
        <img className="logo-login" src={logo} alt="Logo" />
        <h1>Registrar</h1>
      </div>
      <input
        id="name"
        placeholder="Nome"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        id="password"
        placeholder="Senha"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button
        className="button register"
        type="button"
        onClick={handleCadastro}
      >
        Cadastrar
      </button>
    </div>
  );
}

export default Register;

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../services/api";

import logo from "../assets/logo.png";
import "../styles/login.css";

function Login() {
  let history = useHistory();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const response = await api.post("/login", {
      name: name,
      password: password,
    });

    if (response.data.message !== undefined) {
      alert(response.data.message);
    } else {
      const id = response.data.id;
      localStorage.setItem("idx", id);
      history.push("/dashboard");
    }
  }

  function handleCadastro() {
    history.push("/register");
  }

  return (
    <div className="container">
      <div className="login-header">
        <img className="logo-login" src={logo} alt="Logo" />
        <h1>Covid Inspector</h1>
      </div>
      <form onSubmit={handleLogin}>
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
        <button className="login" type="submit" onClick={handleLogin}>
          Login
        </button>
        <button className="register" type="button" onClick={handleCadastro}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Login;

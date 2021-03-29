<<<<<<< HEAD
import React from 'react';
import { useHistory } from 'react-router-dom'
import "../../index.css";
import logo from '../../assets/logo.png';
=======
import React from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
>>>>>>> 4878240da47dcc0ceec92785c10e7fdff20a3003

function Login() {
  let history = useHistory();

  function handleLogin() {
    history.push("/dashboard");
  }

  function handleCadastro() {
    history.push("/register");
  }

  return (
    <container>
<<<<<<< HEAD
        <div className="login-header">
          <img className="logo-login" src={logo} alt="Logo"/>
          <h1>Covid Inspector</h1>
        </div>
        <input id="name" placeholder="Nome"/>
        <input id="password" placeholder="Senha"/>
        <button className="button login" type="button" onClick={handleLogin}>Login</button>
        <button className="button register" type="button" onClick={handleCadastro}>Cadastrar</button>
=======
      <h1>Covid Inspector</h1>

      <input id="name" placeholder="Nome" />
      <input id="password" placeholder="Senha" />
      <button className="btt btt-login" type="button" onClick={handleLogin}>
        Login
      </button>
      <button className="btt btt-cad" type="button" onClick={handleCadastro}>
        Cadastrar
      </button>
>>>>>>> 4878240da47dcc0ceec92785c10e7fdff20a3003
    </container>
  );
}

export default Login;

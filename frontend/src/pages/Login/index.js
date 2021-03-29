import React from 'react';
import { useHistory } from 'react-router-dom'
import "../../index.css";
import logo from '../../assets/logo.png';

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
        <div className="login-header">
          <img className="logo-login" src={logo} alt="Logo"/>
          <h1>Covid Inspector</h1>
        </div>
        <input id="name" placeholder="Nome"/>
        <input id="password" placeholder="Senha"/>
        <button className="button login" type="button" onClick={handleLogin}>Login</button>
        <button className="button register" type="button" onClick={handleCadastro}>Cadastrar</button>
    </container>
  )
}

export default Login;
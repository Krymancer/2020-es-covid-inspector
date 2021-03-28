import React from 'react';
import { useHistory } from 'react-router-dom'
import "./Login.css";

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
        <h1>Covid Inspector</h1>

        <input id="name" placeholder="Nome"/>
        <input id="password" placeholder="Senha"/>
        <button className="btt btt-login" type="button" onClick={handleLogin}>Login</button>
        <button className="btt btt-cad" type="button" onClick={handleCadastro}>Cadastrar</button>
    </container>
  )
}

export default Login;
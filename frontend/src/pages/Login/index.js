import React from 'react';
import { useHistory } from 'react-router-dom'

function Login() {
  let history = useHistory();

  function handleLogin() {
    history.push("/dashboard");
  }

  function handleCadastro() {
    history.push("/register");
  }

  return (
    <>
      <h1>
        Tela de Login
      </h1>
      <button type="button" onClick={handleLogin}>
        Ir para Dashboard
      </button>
      <button type="button" onClick={handleCadastro}>
        Cadastrar
      </button>
    </>
  )
}

export default Login;
import React from 'react';
import { useHistory } from 'react-router-dom';

import "../../index.css";
import logo from '../../assets/logo.png';

function Register() {
  let history = useHistory();


  function handleCadastro() {
    history.push("/");
  }

  return (
    <container>
      <h1>Cadastro</h1>
      <input id="name" placeholder="Nome"/>
        <input id="password" placeholder="Senha"/>
      <button className="button register" type="button" onClick={handleCadastro}>Cadastrar</button>
    </container>
  )
}

export default Register;
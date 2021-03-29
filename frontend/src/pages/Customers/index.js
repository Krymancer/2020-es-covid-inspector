import React from 'react';
import { useHistory } from 'react-router-dom';

import "../../index.css";
//import logo from '../../assets/logo.png';

function Register() {
  let history = useHistory();

  function handleReport() {
    history.push("/dashboard");
  }

  return (
    <div className="container">
      <h1>Cliente</h1>
      <input id="cpf" placeholder="CPF"/>
      <input id="name" placeholder="Nome"/>
      <button className="button register" type="button" onClick={handleReport}>Adicionar</button>
    </div>
  );
}

export default Register;

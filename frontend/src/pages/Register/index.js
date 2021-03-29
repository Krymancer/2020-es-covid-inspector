<<<<<<< HEAD
import React from 'react';
import { useHistory } from 'react-router-dom';
=======
import React from "react";

import { useHistory } from "react-router-dom";
>>>>>>> 4878240da47dcc0ceec92785c10e7fdff20a3003

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
<<<<<<< HEAD
      <input id="name" placeholder="Nome"/>
        <input id="password" placeholder="Senha"/>
      <button className="button register" type="button" onClick={handleCadastro}>Cadastrar</button>
=======
      <input id="name" placeholder="Nome" />
      <input id="password" placeholder="Senha" />
      <button className="btt btt-login" type="button" onClick={handleCadastro}>
        Cadastrar
      </button>
>>>>>>> 4878240da47dcc0ceec92785c10e7fdff20a3003
    </container>
  );
}

export default Register;

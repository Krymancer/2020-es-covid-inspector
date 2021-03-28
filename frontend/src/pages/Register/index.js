import React from "react";

import { useHistory } from "react-router-dom";

function Register() {
  let history = useHistory();

  function handleCadastro() {
    history.push("/");
  }

  return (
    <container>
      <h1>Cadastro</h1>
      <input id="name" placeholder="Nome" />
      <input id="password" placeholder="Senha" />
      <button className="btt btt-login" type="button" onClick={handleCadastro}>
        Cadastrar
      </button>
    </container>
  );
}

export default Register;

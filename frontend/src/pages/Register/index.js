import React from 'react';

import { useHistory } from 'react-router-dom';

function Register() {
  let history = useHistory();


  function handleCadastro() {
    history.push("/");
  }

  return (
    <>
      <h1>
        Tela de Cadastro
      </h1>
      <button type="button" onClick={handleCadastro}>
        Cadastrar
      </button>
    </>
  )
}

export default Register;
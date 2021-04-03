import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import verifyCPF from "../services/cpf";
import api from "../services/api";

import logo from "../assets/logo.png";

function Register() {
  let history = useHistory();

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  const idx = localStorage.getItem("idx");

  async function handleReport() {
    if (verifyCPF(cpf)) {
      const sanitizedCpf = cpf.replace(/[^\d]+/g, "");

      const response = await api.post("/entrance", {
        idx: idx,
        cpf: sanitizedCpf,
        name: name,
      });

      if (response.data.message !== undefined) {
        alert(response.data.message);
      }
    } else {
      alert("CPF inválido!");
    }

    history.push({
      pathname: "/dashboard",
      idx: idx,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleReport();
  }

  return (
    <div className="container">
      <div className="login-header">
        <img className="logo-login" src={logo} alt="Logo" />
        <h1>Cliente</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          id="cpf"
          placeholder="CPF"
          value={cpf}
          onChange={(event) => setCpf(event.target.value)}
        />
        <input
          id="name"
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button
          className="button register"
          type="submit"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}

export default Register;

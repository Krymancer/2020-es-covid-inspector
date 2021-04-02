import React, { useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import api from '../../services/api';
import verifyCPF from '../../services/cpf';


import "../../index.css";
import logo from '../../assets/logo.png';

function Register() {
  let history = useHistory();

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');

  const idx = useLocation().idx || 0;

  async function handleReport() {

    if(verifyCPF(cpf)){

      const sanitizedCpf = cpf.replace(/[^\d]+/g,'');	

      const response = await api.post("/entrance",{
        idx: idx,
        cpf: sanitizedCpf,
        name: name,
      });

      if(response.data.message !== undefined){
        alert(response.data.message);
      }

    }else{
      alert("CPF inválido!");
    }

    history.push({
        pathname: "/dashboard",
        idx: idx
      });
  }

  return (
    <div className="container">
      <div className="login-header">
          <img className="logo-login" src={logo} alt="Logo"/>
          <h1>Cliente</h1>
        </div>
      <input 
        id="cpf" 
        placeholder="CPF"
        value={cpf} 
        onChange={event => setCpf(event.target.value)}
      />
      <input 
        id="name" 
        placeholder="Nome"
        value={name} 
        onChange={event => setName(event.target.value)}
      />
      <button className="button register" type="button" onClick={handleReport}>Adicionar</button>
    </div>
  );
}

export default Register;

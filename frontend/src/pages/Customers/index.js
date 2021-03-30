import React, { useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import api from '../../services/api';


import "../../index.css";
import logo from '../../assets/logo.png';

function Register() {
  let history = useHistory();

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');

  const idx = useLocation().idx || 0;

  async function handleReport() {
    const response = await api.post("/entrance",{
      idx: idx,
      cpf: cpf,
      name: name,
    });

    if(response.data.id === undefined){
      alert("Esta pessoa esta infectada!");
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

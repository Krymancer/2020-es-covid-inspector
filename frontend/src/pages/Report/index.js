import React, {useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import api from '../../services/api';

import "../../index.css";
//import logo from '../../assets/logo.png';

function Register() {
  let history = useHistory();
  const [cpf, setCpf] = useState('');

  const idx = useLocation().idx || 0;

  async function handleReport() {
    const response = await api.post("/report",{
      idx: idx,
      cpf: cpf
    });


    console.log(response.data);
    history.push("/dashboard");
  }

  return (
    <div className="container">
      <h1>Reportar</h1>
      <input 
        id="cpf" 
        placeholder="CPF"
        value={cpf} 
        onChange={event => setCpf(event.target.value)}
      />
      <button className="button register" type="button" onClick={handleReport}>Reportar</button>
    </div >
  );
}

export default Register;

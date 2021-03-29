import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'
import "../../index.css";
import logo from '../../assets/logo.png';
import api from '../../services/api';

function Login() {
  let history = useHistory();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {

    const response = await api.post("/login",{
      name: name,
      password: password
    });

    const id = response.data.id;

    if(id === undefined){
      alert("Verifique os dados e tente novamente!");
    }else{
      history.push({
        pathname: "/dashboard",
        idx: id
      });
    }
  }

  function handleCadastro() {
    history.push("/register");
  }

  return (
    <div className="container">
        <div className="login-header">
          <img className="logo-login" src={logo} alt="Logo"/>
          <h1>Covid Inspector</h1>
        </div>
        <input 
          id="name" 
          placeholder="Nome" 
          value={name} 
          onChange={event => setName(event.target.value)}
        />
        <input 
          id="password" 
          placeholder="Senha" 
          type="password"
          value={password} 
          onChange={event => setPassword(event.target.value)}
          />
        <button className="button login" type="button" onClick={handleLogin}>Login</button>
        <button className="button register" type="button" onClick={handleCadastro}>Cadastrar</button>
    </div>
  );
}

export default Login;

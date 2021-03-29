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
    history.push("/dashboard");
    console.log("name:",name,"password:",password);

    const response = await api.post("/login",{
      name: name,
      password: password
    });

    console.log("response: ", response.data);
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
        <input id="name" placeholder="Nome" value={name} onChange={event => setName(event.target.value)}/>
        <input id="password" placeholder="Senha" value={password} onChange={event => setPassword(event.target.value)}/>
        <button className="button login" type="button" onClick={handleLogin}>Login</button>
        <button className="button register" type="button" onClick={handleCadastro}>Cadastrar</button>
    </div>
  );
}

export default Login;

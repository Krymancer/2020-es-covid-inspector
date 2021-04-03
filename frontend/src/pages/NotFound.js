import React from "react";
import logo from "../assets/logo.png";
import "../styles/notfound.css";

function Login() {
  return (
    <div className="container">
      <div className="login-header">
        <img className="logo-login" src={logo} alt="Logo" />
        <h1>Covid Inspector</h1>
      </div>
      <div className="code">
          <h2>Página não Encontrada :( </h2>
          <p>Clique <b><a href="/">aqui</a></b> para voltar a pagina inical</p>
      </div>
    </div>
  );
}

export default Login;

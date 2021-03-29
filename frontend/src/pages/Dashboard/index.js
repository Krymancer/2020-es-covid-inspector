<<<<<<< HEAD
import React from 'react';
import { useHistory } from 'react-router-dom';
import "../../index.css";
import logo from '../../assets/logo.png';
=======
import React from "react";
import { useHistory } from "react-router-dom";
>>>>>>> 4878240da47dcc0ceec92785c10e7fdff20a3003

function Dashboard() {
  let history = useHistory();

  function handleReport() {
    console.log("Report");
  }

  function handleCustomer() {
    console.log("Report");
  }

  function handleLogout() {
    history.push("/");
  }

  return (
    <>
      <div className="header">
        <div className="logo-header">
          <img className="logo-dashboard" src={logo} alt="Logo"/>
          <h1 className="title">Dashboard</h1>
        </div>
        <div className="menu">
          <button className="client" type="button" onClick={handleCustomer}>Cliente</button>
          <button className="report" type="button" onClick={handleReport}>Reportar</button>
          <button className="logout" type="button" onClick={handleLogout}>Sair</button>
        </div>
      </div>

      <div className="dashboard-container">
        <table>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Data</th>
          </tr>
          <tr>
            <td>Fulano</td>
            <td>123.456.789.00</td>
            <td>28/03/2021 18:20</td>
          </tr>

          <tr>
            <td>Sicrano</td>
            <td>123.456.789.00</td>
            <td>28/03/2021 19:20</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Dashboard;

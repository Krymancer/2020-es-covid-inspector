import React from 'react';
import { useHistory } from 'react-router-dom';

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
        <h1 className="title" >Dashboard</h1>
        <div className="buttons">
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
  )
}

export default Dashboard;
import React, { useEffect, useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import "../../index.css";
import logo from '../../assets/logo.png';
import api from '../../services/api';

function Dashboard() {
  let history = useHistory();
  const [customers,setCustomers] = useState([]);

  const idx = useLocation().idx || 0;

  useEffect(() => {
    async function loadCustomers(){
        const response = await api.post('customers', {
            idx: idx
        });
        setCustomers(response.data);
    }

    loadCustomers();
  }, [idx]);

  function handleReport() {
    history.push("/report");
  }

  function handleCustomer() {
    history.push({
      pathname: "/customers",
      idx: idx
    });
  }

  function handleLogout() {
    history.push("/");
  }

  function formatDate(date){

    function join(t, a, s) {
      function format(m) {
         let f = new Intl.DateTimeFormat('br', m);
         return f.format(t);
      }
      
      return a.map(format).join(s);
    }
   
    const format = [{day: 'numeric'}, {month: 'numeric'}, {year: 'numeric'}, {hour: 'numeric'}, {minute: 'numeric'}];
    const dateString = join(date, format, '-');
    const da = dateString.split('-');
    const d = `${da[0].padStart(2,0)}/${da[1].padStart(2,0)}/${da[2]} ${da[3]}:${da[4].padStart(2,0)}`

    return d;
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
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            { customers.length > 0 ? (
              customers.map(customer => (
                <tr key={customer.id}>
                  <td>{customer.name}</td>
                  <td>{customer.cpf}</td>
                  <td>{formatDate(customer.date)}</td>
                </tr>
              )))  : (
                <tr>
                  <td>Sem dados</td>
                  <td>Sem dados</td>
                  <td>Sem dados</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;

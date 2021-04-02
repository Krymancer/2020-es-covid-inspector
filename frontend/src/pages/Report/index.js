import React, {useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import api from '../../services/api';
import verifyCPF from '../../services/cpf';

import "../../index.css";
import logo from '../../assets/logo.png';

function Register() {
  let history = useHistory();
  const [cpf, setCpf] = useState('');
  const [customers,setCustomers] = useState([]);

  const idx = useLocation().idx || 0;

  async function handleReport() {

    if(verifyCPF(cpf)){

      const sanitizedCpf = cpf.replace(/[^\d]+/g,'');	

      const response = await api.post("/report",{
        idx: idx,
        cpf: sanitizedCpf
      });

      if(response.data.message !== undefined){
        alert(response.data.message);
      }

      setCustomers(response.data.infecteds);
    }else{
      alert("CPF inválido!");
    } 
  }

  async function handleBack() {
    history.push({
      pathname: "/dashboard",
      idx: idx
    });
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


  function formatCPF(cpf){
    if(cpf.length !== 11){
      return cpf;
    }

    function formataCPF(cpf){
      //retira os caracteres indesejados...
      cpf = cpf.replace(/[^\d]/g, "");
    
      //realizar a formatação...
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    return formataCPF(cpf);
  }

  return (
    <>
      <div className="header">
        <div className="logo-header">
          <img className="logo-dashboard" src={logo} alt="Logo"/>
          <h1 className="title">Reportar</h1>
        </div>
        <div className="menu">
          <input 
            id="cpf" 
            placeholder="CPF"
            value={cpf} 
            onChange={event => setCpf(event.target.value)}
          />
          <button className="button register" type="button" onClick={handleReport}>Reportar</button>
          <button className="logout" type="button" onClick={handleBack}>Voltar</button>
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
                  <td>{formatCPF(customer.cpf)}</td>
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

export default Register;

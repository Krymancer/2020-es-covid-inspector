import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../services/api";

import logo from "../assets/logo.png";
import "../styles/dashboard.css";

function Dashboard() {
  let history = useHistory();
  const [customers, setCustomers] = useState([]);

  const idx = localStorage.getItem("idx");
  console.log(idx);

  useEffect(() => {
    async function loadCustomers() {
      const response = await api.post("customers", {
        idx: idx,
      });
      setCustomers(response.data);
    }

    loadCustomers();
  }, [idx]);

  function handleReport() {
    history.push({
      pathname: "/report",
      idx: idx,
    });
  }

  function handleCustomer() {
    history.push({
      pathname: "/customers",
      idx: idx,
    });
  }

  function handleLogout() {
    localStorage.removeItem("idx");
    history.push("/");
  }

  function formatDate(date) {
    function join(t, a, s) {
      function format(m) {
        let f = new Intl.DateTimeFormat("br", m);
        return f.format(t);
      }

      return a.map(format).join(s);
    }

    const format = [
      { day: "numeric" },
      { month: "numeric" },
      { year: "numeric" },
      { hour: "numeric" },
      { minute: "numeric" },
    ];
    const dateString = join(date, format, "-");
    const da = dateString.split("-");
    const d = `${da[0].padStart(2, 0)}/${da[1].padStart(2, 0)}/${da[2]} ${
      da[3]
    }:${da[4].padStart(2, 0)}`;

    return d;
  }

  function formatCPF(cpf) {
    if (cpf.length !== 11) {
      return cpf;
    }

    function formataCPF(cpf) {
      //retira os caracteres indesejados...
      cpf = cpf.replace(/[^\d]/g, "");

      //realizar a formatação...
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    return formataCPF(cpf);
  }

  return (
    <>
      <header>
        <div className="logo-header">
          <img className="logo-dashboard" src={logo} alt="Logo" />
          <h1 className="title">Dashboard</h1>
        </div>
        <div className="botoes">
          <button className="client" type="button" onClick={handleCustomer}>
            Cliente
          </button>
          <button className="report" type="button" onClick={handleReport}>
            Reportar
          </button>
          <button className="logout" type="button" onClick={handleLogout}>
            Sair
          </button>
        </div>
      </header>

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
            {customers.length > 0 ? (
              customers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.name}</td>
                  <td>{formatCPF(customer.cpf)}</td>
                  <td>{formatDate(customer.date)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>Sem dados</td>
                <td>Sem dados</td>
                <td>Sem dados</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;

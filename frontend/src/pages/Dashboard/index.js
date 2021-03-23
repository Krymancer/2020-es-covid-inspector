import React from 'react';

import { useHistory } from 'react-router-dom';

function Dashboard() {
  let history = useHistory();

  function handleLogout() {
    history.push("/");
  }

  return (
    <>
      <h1>
        Tela de Dashboard
      </h1>
      <button type="button" onClick={handleLogout}>
        Sair
      </button>
    </>
  )
}

export default Dashboard;
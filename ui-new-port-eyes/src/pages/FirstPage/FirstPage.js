import React from 'react';
import { Busqueda, Dashboard } from '../../components'
<link rel="stylesheet" type="text/css" href="App.css" />
const FirstPage = () => {
  return (
    <div>
      <h1>NewPortEyes</h1>
      <img src="../../images/bbva.png" />
      
      <Busqueda />
      {/* <Dashboard
        url=""
        container=""
        parameters=""
      /> */}
    </div>
  );
}

export default FirstPage;

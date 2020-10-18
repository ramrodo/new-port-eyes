import React from 'react';
import { Busqueda, Dashboard } from '../../components'

const FirstPage = () => {
  return (
    <div>
      <h1>NewPortEyes</h1>
      <Busqueda />
      <Dashboard
        url=""
        container=""
        parameters=""
      />
    </div>
  );
}

export default FirstPage;

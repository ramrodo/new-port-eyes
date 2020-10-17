import React, { Fragment, useState } from 'react';
import ENUMS from '../../constants/enums'
import './style.css';

const Busqueda = () => {
  const [datos, setDatos] = useState({
    variable: '',
    nivel: '',
    medida: '',
  })

  const handleChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    });
  }

  const enviarDatos = (event) => {
    event.preventDefault()
    console.log('enviando datos...' + datos.variable + ' ' + datos.nivel + ' ' + datos.medida)
  }

  return (
    <Fragment>
        <form className="row" onSubmit={enviarDatos}>
          <div className="col align-self-center" id="listas">
            <div className="lista1">
              <h2>Variable</h2>
              <select name="variable" value={datos.variable} onChange={handleChange}>
                <option defaultValue={ENUMS.variable.SALDO_VIGENTE_CIERRE_MES}>Elige una opción</option>
                <option value={ENUMS.variable.SALDO_VIGENTE_CIERRE_MES}>Saldo vigente al cierre de mes</option>
              </select>
            </div>

            <div className="lista2">
              <h2>Nivel</h2>
              <select name="nivel" value={datos.nivel} onChange={handleChange}>
                <option defaultValue={ENUMS.nivel.ESTATAL}>Elige una opción</option>
                <option value={ENUMS.nivel.ESTATAL}>Estatal</option>
              </select>
            </div>

            <div className="lista3">
              <h2>Medida</h2>
              <select name="medida" value={datos.medida} onChange={handleChange}>
                <option defaultValue={ENUMS.medida.MDP}>Elige una opción</option>
              <option value={ENUMS.medida.MDP}>Millones De Pesos (MDP)</option>
              </select>
            </div>

            <button type="submit" className="submit"><center>Buscar</center></button>
          </div>
        </form>

        <ul>
            <li>{datos.variable}</li>
            <li>{datos.nivel}</li>
            <li>{datos.medida}</li>
        </ul>
        </Fragment>
    );
}

export default Busqueda;

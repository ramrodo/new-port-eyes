import React, {Fragment, useState} from 'react';
import './style.css';

const Busqueda = () => {
  const [datos, setDatos] = useState({
    variable: '',
    nivel: '',
    medida: '',
  })

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
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
              <select name="OS">
                <option defaultValue="0"> Elige una opción </option>
                <option value="1">Windows Vista</option>
                <option value="2">Windows 7</option>
                <option value="3">Windows XP</option>
              </select>
            </div>

            <div className="lista2">
              <h2>  Nivel  </h2>
              <select name="OS">
                <option defaultValue="0"> Elige una opción </option>
                <option value="1">Windows Vista</option>
                <option value="2">Windows 7</option>
                <option value="3">Windows XP</option>
              </select>
            </div>

            <div className="lista3">
              <h2>  Medida  </h2>
              <select name="OS">
                <option defaultValue="0"> Elige una opción </option>
                <option value="1">Windows Vista</option>
                <option value="2">Windows 7</option>
                <option value="3">Windows XP</option>
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

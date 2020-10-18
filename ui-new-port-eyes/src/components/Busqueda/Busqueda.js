import React, { Fragment, useState } from 'react';
import ENUMS from '../../constants/enums'
import './style.css';

const Busqueda = () => {
  const [datos, setDatos] = useState({
    producto: '',
    indicador: '',
    nivel: '',
    medida: '',
    filtro1: '',
    filtro2: '',
  })

  const handleChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    });
  }

  const enviarDatos = (event) => {
    event.preventDefault()
    console.log('enviando datos...' + datos.producto + ' '+ datos.indicador + ' ' + datos.nivel + ' ' + datos.medida + ' ' + datos.filtro1+ ' ' + datos.filtro2)
  }

  return (
    <Fragment>
        <form className="row" onSubmit={enviarDatos}>
          <div className="col align-self-center" id="listas">
            <div className="lista1">
              <h2>Producto</h2>
              <select name="producto" value={datos.producto} onChange={handleChange}>
                <option defaultValue={ENUMS.producto.PRODUCTO}>Elige una opción</option>
                <option value={ENUMS.producto.PRODUCTO}>Empresas</option>
                <option value={ENUMS.producto.PRODUCTO}>Autos</option>
                <option value={ENUMS.producto.PRODUCTO}>Nomina</option>
                <option value={ENUMS.producto.PRODUCTO}>Empresas</option>
              </select>
            </div>
            
            <div className="lista2">
              <h2>Indicador</h2>
              <select name="indicador" value={datos.indicador} onChange={handleChange}>
                <option defaultValue={ENUMS.indicador.INDICADOR}>Elige una opción</option>
                <option value={ENUMS.indicador.INDICADOR}>Empresas</option>
                <option value={ENUMS.indicador.INDICADOR}>Autos</option>
                <option value={ENUMS.producto.INDICADOR}>Nomina</option>
                <option value={ENUMS.producto.INDICADOR}>Empresas</option>
              </select>
            </div>



            <div className="lista3">
              <h2>Nivel</h2>
              <select name="nivel" value={datos.nivel} onChange={handleChange}>
                <option defaultValue={ENUMS.nivel.ESTATAL}>Elige una opción</option>
                <option value={ENUMS.nivel.ESTATAL}>Estatal</option>
              </select>
            </div>

            <div className="lista4">
              <h2>Medida</h2>
              <select name="medida" value={datos.medida} onChange={handleChange}>
                <option defaultValue={ENUMS.medida.MDP}>Elige una opción</option>
              <option value={ENUMS.medida.MDP}>Millones De Pesos (MDP)</option>
              </select>
            </div>
            <div className="lista5">
              <h2>Filtro opcional I</h2>
              <select name="filtro1" value={datos.FILTRO1} onChange={handleChange}>
                <option defaultValue={ENUMS.filtro1.FILTRO1}>Elige una opción</option>
                <option value={ENUMS.filtro1.FILTRO1}>nombre</option>
                <option value={ENUMS.filtro1.FILTRO1}>cartera vencida</option>
                <option value={ENUMS.filtro1.FILTRO1}>Nomina</option>
                <option value={ENUMS.filtro1.FILTRO1}>Empresas</option>
              </select>
            </div>
            <div className="lista6">
              <h2>Filtro opcional I</h2>
              <select name="filtro1" value={datos.FILTRO2} onChange={handleChange}>
                <option defaultValue={ENUMS.filtro2.FILTRO2}>Elige una opción</option>
                <option value={ENUMS.filtro2.FILTRO2}>nombre</option>
                <option value={ENUMS.filtro2.FILTRO2}>cartera vencida</option>
                <option value={ENUMS.filtro2.FILTRO2}>Nomina</option>
                <option value={ENUMS.filtro2.FILTRO2}>Empresas</option>
              </select>
            </div>
            <button type="submit" className="submit"><center>Buscar</center></button>
          </div>
        </form>

        <ul>
            <li>{datos.producto}</li>
            <li>{datos.indicador}</li>
            <li>{datos.nivel}</li>
            <li>{datos.medida}</li>
            <li>{datos.filtro1}</li>
            <li>{datos.filtro2}</li>
        </ul>
        </Fragment>
    );
}

export default Busqueda;

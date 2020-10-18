import React, { Fragment, useState } from 'react';
import ENUMS from '../../constants/enums'
import './style.css';

const Busqueda = () => {
  const [datos, setDatos] = useState({
    producto: '',
    variable: '',
    nivel: '',
    medida: '',
    filtro1: '',
    filtro2: '',
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    });
  }

  const enviarDatos = (event) => {
    event.preventDefault()
    setLoading(true)
    console.log('enviando datos...' + datos.variable + ' ' + datos.nivel + ' ' + datos.medida)
    setTimeout(() => { setLoading(false) }, 2000);
  }

  return (
    <Fragment>
        <h2 className="center">Especifica los datos</h2>
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

          <div className="lista4">
            <h2>Indicador</h2>
            <select name="indicador" value={datos.indicador} onChange={handleChange}>
              <option defaultValue={ENUMS.indicador.INDICADOR}>Elige una opción</option>
              <option value={ENUMS.indicador.SALDO_TOTAL}>Saldo total</option>
            </select>
          </div>

          <div className="lista5">
            <h2>Filtro opcional I</h2>
            <select name="filtro1" value={datos.FILTRO1} onChange={handleChange}>
              <option defaultValue={ENUMS.filtro1.FILTRO1}>Elige una opción</option>
              <option value={ENUMS.filtro1.NOMBRE}>Nombre</option>
            </select>
          </div>

          <div className="lista6">
            <h2>Filtro opcional I</h2>
            <select name="filtro2" value={datos.FILTRO2} onChange={handleChange}>
              <option defaultValue={ENUMS.filtro2.FILTRO2}>Elige una opción</option>
              <option value={ENUMS.filtro2.CARTERA_VENCIDA}>Cartera vencida</option>
            </select>
          </div>

          <button type="submit" className="submit"><center>{loading ? 'Procesando...' : 'Buscar'}</center></button>
          </div>
        </form>
        </Fragment>
    );
}

export default Busqueda;

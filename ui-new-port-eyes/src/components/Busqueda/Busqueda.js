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
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input type="text" placeholder="Variable" className="form-control" onChange={handleInputChange} name="variable"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Nivel" className="form-control" onChange={handleInputChange} name="nivel"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Medida" className="form-control" onChange={handleInputChange} name="nivel"></input>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
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

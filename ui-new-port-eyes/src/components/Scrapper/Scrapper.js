import React, { Fragment, useState } from 'react';
// import rp from "request-promise";
import './style.css';

const Scrapper = () => {
  const [lastUrl, setLastUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchFiles = () => {
    setLoading(true);
    fetch('https://flask-env.eba-3qramei3.us-east-1.elasticbeanstalk.com/last-banca', { crossDomain: true })
      .then(response => response.json())
      .then(data => {
        setLastUrl(data.url);
        setLoading(false);
      });
  }

  const downloadFile = () => {
    console.log('descargando archivo...');
    const link = document.createElement('a');
    link.href = lastUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const processFile = () => {
    console.log('procesando archivo...');
  }

  return(<Fragment>
    <div className="scrapper">
      <h2>
        1. Obtener el archivo del último mes de Banca Múltiple: {' '}
      </h2>
      <a
        href="https://portafolioinfo.cnbv.gob.mx/PUBLICACIONES/SH/Paginas/bm.aspx"
        className="link"
        target="_blank"
      >
        portafolioinfo.cnbv.gob.mx
      </a>
      <br />
      <br />
      <button
        type="button"
        className="submit"
        onClick={() => fetchFiles()}
      >
        {loading ? 'Consultando...' : 'Obtener'}
      </button>

      {lastUrl && <div className="lastUrl">
      <h2>Archivo:</h2>
      <div className="url">{lastUrl}</div>
      <button type="button" className="download" onClick={() => downloadFile()}>
        Descargar
      </button>
      <button type="button" className="process" onClick={() => processFile()}>
        Procesar
      </button>
      </div>}

    </div>
  </Fragment>);
}

export default Scrapper;

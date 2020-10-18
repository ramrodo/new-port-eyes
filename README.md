# NewPortEyes
Proyecto para Hackaton BBVA 2020

## Proyecto Web

Puedes ver la aplicación desplegada en: https://www.visual-eye.rodomar.mx/

**NOTA:** Para poder probar la aplicación web correctamente se necesita instalar la extensión de [Google Chrome CORS](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=es) para que pueda obtener la petición correctamente.

## ¿De qué trata?

**Visual Eye** es una aplicación web que permite obtener el reporte del último mes de Banca Múltiple de la CNBV y generar gráficas usando los indicadores seleccionados.

## ¿Cómo funciona por detrás? La arquitectura

Es una aplicación web creada en **ReactJS** y alojada en **AWS Amplify** para servir la aplicación a través de un dominio personalizado usando **AWS Route53** y **AWS Certificate Manager**.

Para obtener el archivo del último mes de la CNBV, se creó un web scrapper con **Python** y alojado en **AWS Elastic Beanstalk** para que pueda ser usado por la aplicación web.

Las gráficas se generan mandando los datos a **AWS QuickSight** para generar diferentes gráficas.

## Contribuye

### Requisitos

- Tener instalado git.

- Clona éste repositorio en tu computadora:
```bash
$ git clone https://github.com/ramrodo/new-port-eyes.git
```

### ¿Cómo contribuir al código?

0. Asegúrate de estar en la rama `master`:

```bash
$ git checkout master
```

1. Actualiza la rama `master`:

```bash
$ git pull
```

2. Cambiar a tu rama:

```bash
$ git checkout <nombre>
```

Los nombres de las ramas son:
- erick
- jose
- marco
- rodo
- susana
- valentina

3. Actualiza tu rama con `master`:

```
$ git rebase master
```

4. Realiza tus cambios en el código

5. Una vez que has terminado de hacer tus cambios, añádelos:

```bash
$ git add .
```

6. Coloca un mensaje de tus cambios:

```bash
$ git commit -m "Mensaje"
```

7. Sube tus cambios a tu rama:

```bash
$ git push origin <nombre_de_mi_rama>
```

8. Crea un Pull Request en éste repositorio de GitHub.

9. Coloca una pequeña descripción de lo que harán tus cambios. Puedes tomar como ejemplo [éste](https://github.com/ramrodo/new-port-eyes/pull/1).

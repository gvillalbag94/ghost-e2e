# Proyecto Pruebas automatizadas
## Semana 5: Pruebas E2E

## Integrantes:

* Victor Alfonso Duarte Quintero - v.duarteq@uniandes.edu.co
* Juan Esteban Herrera - je.herrerap@uniandes.edu.co
* Leonardo Cardenas - dl.riverac1@uniandes.edu.co
* Felipe Villalba Gil - g.villalbag@uniandes.edu.co

## Clonar el proyecto:

Este repositorio contiene dos carpetas principales:

* kraken-test: Es la carpeta raíz para del proyecto de pruebas BDD bajo el patron Given-When-Then bajo la herramienta Kraken-node.

* cypress-test: Es la carpeta raiz del proyecto de pruebas automatizadas bajo la herramienta Cypress.

### ¿Cómo empezar?:
Nota: Debido a un bug encontrado en Kraken las pruebas se deben realizar en un sistema operativo MacOS 

1. Clonar el repositorio:

    En la carpeta selecciona en tu maquina local para clonar el repositorio del proyecto, usa el siguiente comando:

```bash
    git clone https://github.com/gvillalbag94/ghost-e2e.git
```

2. Empezaremos con las pruebas realizadas bajo la herramienta kraken-node, para ello ubicate en la carpeta raiz de "kraken-test", puedes usar el siguiente comado:
    
```bash
    cd kraken-test
```

3. Instala las dependencias usadas en el proyecto con el comando:

```bash
    npm install
```

4. Ejecuta las pruebas con el comando:

```bash
    npx kraken-node run
```

5. Si las pruebas no se ejecutaron debido algún error por dependecias te recomendamos ejecutar los siguientes comandos:

```bash
    npm uninstall -g android-platform-tools
    npm uninstall -g @cucumber/cucumber
    npm uninstall -g kraken-node
    npm uninstall -g appium
    npm init -y
    npm install kraken-node
    npm install android-platform-tools
    npm install appium
    npx kraken-node gen
```

    Una vez ejecutados estos comandos, vuelve a seguir el paso número 3 y 4.

6. Para continuar con las pruebas realizadas bajo la herramienta cypress debes tener instalado las herramientas cypress de no ser asi puedes instalarlo siguiendo el siguiente link:

```bash
    https://docs.cypress.io/guides/getting-started/installing-cypress
```

7. Continuamos con las pruebas realizadas bajo la herramienta Cypress, para ello ubicate en la carpeta raiz de "cypress-test", puedes usar el siguiente comado:

```bash
    cd ..
    cd cypress-test
```

8. Usa el siguiente comando para correr todas las pruebas:

```bash
    cypress run --headless
```

9. Al llegar a este punto ya has ejecutado todas las pruebas end to end
10. Para ejecutar las pruebas de regresión visual en Resemblejs se siguen los pasos a continuación para instalar la libreria:
```bash
    cd resemble
    npm install
```
11. Se ejecutan las pruebas con el comando:
```bash
    node index.js
```
12. Dentro de la carpeta resemble, se habrá creado la carpeta results la cual contendrá 10 subcarpetas correspondientes a cada una de las pruebas de regresión visual con sus respectivos resultados
    La carpeta contiene:
     - Las imagenes pertenecientes a la prueba realizada en la versión 5.81.1 (before)
     - Las imagenes pertenecientes a la prueba realizada en la versión 3.42.4 (after)
     - Las imagenes correspondientes a los resultados de la prueba de regresión visual (compare)
     - Un reporte HTML que muestra todas las imágenes (before, after y compare) de cada paso de las pruebas
     - Un archivo css que le da los estilos al archivo HTML
13. Para visualizar los resultados en los reportes HTML:
```bash
    cd results
    http-server
```
Al correr el http-server, se debe entrar a una de las URLs generadas para visualizar el reporte en el navegador.
(Procurar eliminar las cookies del navegador antes de realizar este paso para asegurar el buen funcionamiento de la visualización)

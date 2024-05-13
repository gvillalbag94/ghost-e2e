# Proyecto Pruebas automatizadas

## Video explicación de procedimiento realizado en la semana

[Videoexplicación de procedimiento ResembleJs y BackstopJs](https://youtu.be/n5HgkjKLhfU)

## Semana 6: Pruebas VRT (ResembleJs - BackstopJs)

## Integrantes:

* Victor Alfonso Duarte Quintero - v.duarteq@uniandes.edu.co
* Juan Esteban Herrera - je.herrerap@uniandes.edu.co
* Leonardo Cardenas - dl.riverac1@uniandes.edu.co
* Felipe Villalba Gil - g.villalbag@uniandes.edu.co

## Clonar el proyecto:

Este repositorio contiene dos carpetas principales:

* kraken-test: Es la carpeta raíz para del proyecto de pruebas BDD bajo el patron Given-When-Then bajo la herramienta Kraken-node.
    - Dentro de esta carpeta se encuentran dos subcarpetas:
        1. v5.81.1: Esta carpeta contiene las pruebas E2E para version 5.81.1 de Ghost bajo la herramienta kraken-node.
        2. v3.42.4: Esta carpeta contiene las pruebas E2E para version 3.42.4 de Ghost bajo la herramienta kraken-node.

* cypress-test: Es la carpeta raiz del proyecto de pruebas automatizadas bajo la herramienta Cypress.
    - Dentro de esta carpeta se encuetra la subcarpeta e2e:
        1. v5.81.1: Esta carpeta contiene las pruebas E2E para version 5.81.1 de Ghost bajo la herramienta cypress.
        2. v3.42.4: Esta carpeta contiene las pruebas E2E para version 3.42.4 de Ghost bajo la herramienta cypress.

### ¿Cómo empezar?:
Nota: Debido a un bug encontrado en Kraken las pruebas se deben realizar en un sistema operativo MacOS 

1. Clonar el repositorio:

    En la carpeta selecciona en tu maquina local para clonar el repositorio del proyecto, usa el siguiente comando:

```bash
    git clone https://github.com/gvillalbag94/ghost-e2e.git
```

## Ejecución de pruebas E2E

2. Empezaremos con las pruebas realizadas bajo la herramienta kraken-node para la version 5.81.1, para ello ubicate en la carpeta raiz de "kraken-test" y la respectiva version, puedes usar el siguiente comado:
    
```bash
    cd kraken-test/v5.81.1
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

6. Una vez finalizada la pruebas con la herramient kraken-node en la version v5.81.1, puedes identificar que se han generado los screenshots de cada paso a paso de cada "feature" sobre la carpeta raiz ghost-e2e,dentro de cada carpeta podras evidenciar la creacion de los screenshots con el nombre "before_(número del paso)", para poder visualizarlos puedes ejecutar los siguientes comandos:

```bash
    cd ..
    cd ..
    cd screenshots
```


7. Continuaremos con las pruebas realizadas bajo la herramienta kraken-node para la version 3.42.4, para ello ubicate en la carpeta raiz de "kraken-test" y la respectiva version, puedes usar el siguiente comado (acuerdate de devolverte de a la carpeta raiz "ghost-e2e"):
    
```bash
    cd kraken-test/v3.42.4
```

8. Instala las dependencias usadas en el proyecto con el comando:

```bash
    npm install
```

9. Ejecuta las pruebas con el comando:

```bash
    npx kraken-node run
```

10. Si las pruebas no se ejecutaron debido algún error por dependecias te recomendamos ejecutar los siguientes comandos:

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

    Una vez ejecutados estos comandos, vuelve a seguir el paso número 8 y 9.

11. Una vez finalizada la pruebas con la herramient kraken-node en la version v3.42.4, puedes identificar que se han generado los screenshots de cada paso a paso de cada "feature" sobre la carpeta raiz ghost-e2e,dentro de cada carpeta podras evidenciar la creacion de los screenshots con el nombre "after_(número del paso)" para poder visualizarlos puedes ejecutar los siguientes comandos:

```bash
    cd ..
    cd ..
    cd screenshots
```

12. Para continuar con las pruebas realizadas bajo la herramienta cypress debes tener instalado las herramientas cypress de no ser asi puedes instalarlo siguiendo el siguiente link:

```bash
    https://docs.cypress.io/guides/getting-started/installing-cypress
```

13. Continuamos con las pruebas realizadas bajo la herramienta Cypress, para ello ubicate en la carpeta raiz de "cypress-test", puedes usar el siguiente comado:

```bash
    cd ..
    cd cypress-test
```

14. Usa el siguiente comando para correr todas las pruebas:

```bash
    cypress run --headless
```

15. Al llegar a este punto ya has ejecutado todas las pruebas end to end, podras revisar todos los screenshots tomados bajo la herramienta cypress entandro a la carpeta "screenshots" ubicada dentro de la carpeta "cypress", para poder visualizarlos puedes ejecutar los siguientes comandos:

```bash
    cd ..
    cd cypress/screenshots
```

## Ejecución de pruebas VRT

16. Para ejecutar las pruebas de regresión visual en Resemblejs, asegurate de estar en la carpeta raiz "ghost-e2e", al ingresar a la carpeta "resemble", instala las dependencias usadas en el proyecto, puedes usar los siguientes comandos:

```bash
    cd resemble
    npm install
```

17. Se ejecutan las pruebas con el comando:

```bash
    node index.js
```

18. Dentro de la carpeta resemble, se habrá creado la carpeta results la cual contendrá 10 subcarpetas correspondientes a cada una de las pruebas de regresión visual con sus respectivos resultados
    La carpeta contiene:
     - Las imagenes pertenecientes a la prueba realizada en la versión 5.81.1 (before)
     - Las imagenes pertenecientes a la prueba realizada en la versión 3.42.4 (after)
     - Las imagenes correspondientes a los resultados de la prueba de regresión visual (compare)
     - Un reporte HTML que muestra todas las imágenes (before, after y compare) de cada paso de las pruebas
     - Un archivo css que le da los estilos al archivo HTML

19. Para visualizar los resultados en los reportes HTML:

```bash
    cd results
    http-server
```

Al correr el http-server, se debe entrar a una de las URLs generadas para visualizar el reporte en el navegador, veras 10 carpetas con las funcionalidades testeadas, al abrir cada una identificaras que el ultimo archivo corresponde a un html donde podras evidenciar las diferencias visuales generadas por la herramienta ResembreJs.
(Procurar eliminar las cookies del navegador antes de realizar este paso para asegurar el buen funcionamiento de la visualización)

20. Para ejecutar las pruebas de regresión visual en BackstopJs, asegurate de estar en la carpeta raiz "ghost-e2e", al ingresar a la carpeta "backstop-tests", instala las dependencias usadas en el proyecto, puedes usar los siguientes comandos:

```bash
    cd backstop-tests
    npm install
```

21. Una vez instaldo las dependencias, inicializa el CLI de backstop ejecutando el siguiente comando:

```bash
    backstop init
```

22. Para añadir los escenarios de pruebas de las 10 funcionalidades realizadas tanto a la version 5.81.1 y 3.42.4, ejecuta el script "index.js" que modifica el archivo "backstop.json", puedes usar el siquiente comando:

```bash
    node index.js
```

23. El primer paso para ejecutar las pruebas em backstop es generar las referencias, debes ejecutar el comando (Esto puede tardar un tiempo considerable):

```bash
    backstop reference
```

24. Finalmente se puede ejecutar la prueba con backstop, debes ejecutar el comando (Esto puede tardar un tiempo considerable):

```bash
    backstop test
```

Al correr "backstop test" y finalizar de manera exitosa, se abre una ventana del navegador donde podras identificar todas las diferecias entre cada uno de los pasos de cada "feature".

## Incidencias encontradas:

* https://github.com/gvillalbag94/ghost-e2e/issues/1

* https://github.com/gvillalbag94/ghost-e2e/issues/2

* https://github.com/gvillalbag94/ghost-e2e/issues/3

* https://github.com/gvillalbag94/ghost-e2e/issues/4

* https://github.com/gvillalbag94/ghost-e2e/issues/5

* https://github.com/gvillalbag94/ghost-e2e/issues/6

* https://github.com/gvillalbag94/ghost-e2e/issues/7

* https://github.com/gvillalbag94/ghost-e2e/issues/8

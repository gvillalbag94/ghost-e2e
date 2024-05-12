const compareImages = require("resemblejs/compareImages")
const fs = require('fs');

function browser(b,test,nombresImagenes_nuevas,nombresImagenes_antiguas){
    return `<div class=" escenario" id="test0">
    <div class=" btitle">
        <h2>Paso: ${b}</h2>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="../screenshots/${test}/${nombresImagenes_nuevas[b]}" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="../screenshots/${test}/${nombresImagenes_antiguas[b]}" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare${b}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}
function createReport(datetime, a,test,nombresImagenes_nuevas,nombresImagenes_antiguas){
    return `
    <html>
        <head>
            <title> VRT Ghost Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for ${test}
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${a.map(b=>browser(b,test,nombresImagenes_nuevas,nombresImagenes_antiguas))}
            </div>
        </body>
    </html>`
}

async function executeTest(test){
    let resultInfo = {}
    let datetime = new Date().toISOString().replace(/:/g,".");
    let carpetaImagenes = './screenshots/'+test+'/';
    let nombreImagenes = fs.readdirSync(carpetaImagenes);
    let nombresImagenes_nuevas = nombreImagenes.filter((nombre) => nombre.startsWith("before"));
    let nombresImagenes_antiguas = nombreImagenes.filter((nombre) => nombre.startsWith("after"));
    let a = [];
    for (let i = 0; i < nombresImagenes_nuevas.length; i++){
        a.push(i);
        const data = await compareImages(
            fs.readFileSync(`${carpetaImagenes}${nombresImagenes_nuevas[i]}`),
            fs.readFileSync(`${carpetaImagenes}${nombresImagenes_antiguas[i]}`)
        );
        resultInfo = {
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
            rawMisMatchPercentage: data.rawMisMatchPercentage,
            misMatchPercentage: data.misMatchPercentage,
            diffBounds: data.diffBounds,
            analysisTime: data.analysisTime
        }
        if (!fs.existsSync('./results_'+test)) {
          fs.mkdirSync('./results_'+test); 
        }
        fs.writeFileSync(`./results_${test}/compare${i}.png`, data.getBuffer());
    }
    fs.writeFileSync(`./results_${test}/report.html`, createReport(datetime, a,test,nombresImagenes_nuevas,nombresImagenes_antiguas));
    fs.copyFileSync('./index.css', `./results_${test}/index.css`);
}

let tests_VRT = ["Creacion_de_un_member","Busqueda_y_eliminacion_de_un_member","Editar_un_member_creado"]

for (test of tests_VRT) { 
  (async ()=>console.log(await executeTest(test)))();
  }
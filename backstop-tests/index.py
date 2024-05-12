import json
import os
import glob
def adicionJSON(test):
    path = f'../screenshots/{test}/'
    archivos_imagenes = glob.glob(os.path.join(path, '*.png'))
    imagenesBefore = []
    imagenesAfter = []
    for archivo in archivos_imagenes:
        if 'before' in os.path.basename(archivo):
            imagenesBefore.append(os.path.basename(archivo))
        elif 'after' in os.path.basename(archivo):
            imagenesAfter.append(os.path.basename(archivo))
    print(imagenesBefore,imagenesAfter)
    # Crear una lista para almacenar los escenarios generados
    scenarios = []
    # Generar los escenarios dinámicamente
    for imagenBefore, imagenAfter in zip(imagenesBefore,imagenesAfter):
        scenario = {
            "label": f"Scenario for {imagenAfter} vs {imagenBefore}",
            "url": path+imagenAfter,
            "referenceUrl": path+imagenBefore,
            "readyEvent": "",
            "readySelector": "",
            "delay": 0,
            "hideSelectors": [],
            "removeSelectors": [],
            "hoverSelector": "",
            "clickSelector": "",
            "postInteractionWait": 1,
            "selectors": [],
            "selectorExpansion": True,
            "expect": 0,
            "misMatchThreshold" : 0.1,
            "requireSameDimensions": True
        }
        scenarios.append(scenario)
    with open("backstop.json", "r") as file:
        config = json.load(file)
    config["scenarios"] = scenarios
    with open("backstop.json", "w") as file:
        json.dump(config, file, indent=2)

tests_VRT = [
  "Creacion_de_un_member",
  "Busqueda_y_eliminacion_de_un_member",
  "Editar_un_member_creado",
  "created_edit_add_tag_delete_page",
  "created_edit_delete_page",
  "create_draft",
  "createNewPublicTag",
  "deletePublicTag",
  "publish_draft",
  "unpublish_post",
  ]

for test in tests_VRT:
    adicionJSON(test)

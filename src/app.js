const pronombres = ["el", "mi"];
const adjetivos = ["gran", "pequeño"];
const sustantivos = ["perro", "codigo"];
const extensiones = [",com", ".es"];

let generador = false;

const generadorDominios = () => {
  if (!generador) {
    let listaDominios = document.getElementById("dominios");

    pronombres.forEach((pro) => {
      adjetivos.forEach((adj) => {
        sustantivos.forEach((sust) => {
          extensiones.forEach((ext) => {
            let dominio = `${pro}${adj}${sust}${ext}`;
            let elementoLista = document.createElement('li');
            elementoLista.textContent = dominio;
            listaDominios.appendChild(elementoLista);
          });
        });
      });
    });

    generado = true;
  }
};


window.onload = () => {
  document.getElementById("generar-btn").addEventListener("click", () => {
    generadorDominios();
  });
};

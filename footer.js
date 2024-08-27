const footer = document.querySelector("#footer");
const parrafoFooter = document.createElement("p");
const anioActual = new Date().getFullYear();

parrafoFooter.innerHTML = "Hecho por María Ancona " + anioActual;
footer.appendChild(parrafoFooter);

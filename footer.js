const footer = document.querySelector("#footer");
const parrafoFooter = document.createElement("p");
const anioActual = new Date().getFullYear();

parrafoFooter.innerHTML = "María Ancona " + anioActual;
footer.appendChild(parrafoFooter);

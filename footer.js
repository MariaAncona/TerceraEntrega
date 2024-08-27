const footer = document.querySelector('#footer');
const parrafoFooter = document.createElement("p");
const anioActual = new Date().getFullYear();

parrafoFooter.innerHTML = "Calculadora Harris Bennedict " + anioActual;
footer.appendChild(parrafoFooter);

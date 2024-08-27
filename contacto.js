let formulario = document.querySelector('#formulario');
let nombre = document.getElementById('text');
let mensaje = document.getElementById('message');
let email = document.getElementById('email');

formulario.addEventListener ("submit", (e) => {
    let form = e.target;

    const nombreStorage = form.children[0].value;
    const emailStorage = form.children[1].value;
    const  mensajeStorage = form.children[2].value;

    localStorage.setItem("nombre", nombreStorage);
    localStorage.setItem("email", emailStorage);
    localStorage.setItem("mensaje", mensajeStorage );
})
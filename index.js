// Variables globales 

let calculadora = document.querySelector('#calculadora');
let nombre = document.getElementById('paciente').value;
let sexo = document.getElementById('sexo').value;
let edad = document.getElementById('edad').value;
let peso = document.getElementById('peso').value;
let estatura = document.getElementById('estatura').value;
let factorDeActividad = document.getElementById('factorDeActividad').value;

// Guardar formulario de calculadora en local storage

document.getElementById('calculadora').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('paciente').value;
    const sexo = document.getElementById('sexo').value;
    const edad = document.getElementById('edad').value;
    const peso = document.getElementById('peso').value;
    const estatura = document.getElementById('estatura').value;
    const factorDeActividad = document.getElementById('factorDeActividad').value;

    localStorage.setItem('paciente', nombre);
    localStorage.setItem('sexo', sexo);
    localStorage.setItem('estatura', estatura);
    localStorage.setItem('edad', edad);
    localStorage.setItem('peso', peso);
    localStorage.setItem('factorDeActividad', factorDeActividad);

    const datosFormulario = {
        nombre,
        sexo,
        edad,
        peso,
        estatura,
        factorDeActividad,
    };

    localStorage.setItem('datosCalculadora', JSON.stringify(datosFormulario));

    const datosFormularioP = JSON.parse(localStorage.getItem('datosCalculadora'));
    localStorage.setItem("Sexo en JSON", datosFormularioP.sexo);

// Llamar del storage

const facActLS = JSON.stringify(localStorage.getItem("factorDeActividad"));
const nombreLS = JSON.stringify(localStorage.getItem('nombre'));
const sexoLS = JSON.stringify(localStorage.getItem('sexo'));
const pesoLS = JSON.stringify(localStorage.getItem("peso"));
const estaturaLS = JSON.stringify(localStorage.getItem("estatura"));
const edadLS = JSON.stringify(localStorage.getItem("edad"));



//  Cálculo de HB


function calcularHB () {
    let resultado;

    if (sexo.toLowerCase() === "hombre") {
        resultado = factorDeActividad * (66.5 + (13.75 * peso) + (5 * estatura) - (6.75 * edad));
} else {
        resultado = factorDeActividad * (655.1 + (9.5663 * peso) + (1.85 * estatura) - (4.676 * edad));
}
return (parseFloat(resultado));
}

calcularHB();

// Mostrar mensaje con resultado
const resultado2 = calcularHB();
const mensaje = `La Tasa Metabólica Basal de tu paciente ${nombre} que tiene ${edad} años, con un peso de ${peso} kg, una altura de ${estatura} cm, es de aproximadamente ${resultado2} calorías por día.`;
const resultadoDiv = document.getElementById ('resultado');
resultadoDiv.textContent = mensaje;

document.getElementById('resultado').style.display = 'block';

});



// Boton reset para local storage y formulario

const borrarLS = document.getElementById("borrar");

borrarLS.addEventListener('click', () => {
    localStorage.clear();
});





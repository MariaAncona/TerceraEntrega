// Variables globales 

let calculadora = document.querySelector('#calculadora');
let nombre = document.getElementById('paciente').value;
let sexo = document.getElementById('sexo').value;
let edad = document.getElementById('edad').value;
let peso = document.getElementById('peso').value;
let estatura = document.getElementById('estatura').value;
let factorDeActividad = document.getElementById('factorDeActividad').value;

// Guardar formulario de calculadora en local storage

document.getElementById('calculadora').addEventListener('submit', function(event) {
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
        factorDeActividad
    };

    localStorage.setItem('datosCalculadora', JSON.stringify(datosFormulario));
})

// Boton reset para local storage y formulario

const borrarLS = document.getElementById("borrar");

borrarLS.addEventListener('click', () => {
    localStorage.clear();
})




// if (sexo == "masculino"){
//     bmr =  66.5 + (13.75 * numPeso) + (5 * numEstatura) - (6.75 * numEdad);
//     console.log(bmr);
// } else if (sexo == "femenino"){
//     bmr = 655.1 + (9.5663 * numPeso) + (1.85 * numEstatura) - (4.676 * numEdad);
//     console.log(bmr);
// } else {
//     alert ("Error al ingresar datos. Actualiza la página")
// }

// let harrisBenedict = factorActividad * bmr;



// let sexo;
// while (true){
//     sexo = prompt("Paciente masculino o femenino");
//     if (sexo== "femenino" || sexo == "masculino"){
//         break;
//     }
// }
// console.log("Sexo: " + sexo);


// let edad;
// while (true){
//     edad = prompt("Ingrese edad de paciente");
//     if(parseInt(edad)!=0 && edad !== null && edad !== " " && !isNaN(edad)){
//         break;
//     }
// }
// let numEdad = parseInt(edad);
// console.log("Edad: " + numEdad);


// let estatura; 
// while (true){
//     estatura =prompt ("Ingrese estatura del paciente en cm");
//     if(parseInt(estatura)!=0 && estatura !== null && estatura !== " " && !isNaN(estatura)){
//         break;
//     }
// }
// let numEstatura = parseInt(estatura);
// console.log ("Estatura en cm: " + numEstatura);

// let peso;
// while (true){
//     peso =prompt ("Ingrese el peso del paciente en kg");
//     if(parseInt(peso)!=0 && peso !== null && peso !== " " && !isNaN(peso)){
//         break;
//     }
// }
// let numPeso = parseInt(peso);
// console.log ("Peso en kg: " + numPeso);
// alert ("Estos son los datos ingresados: " + "\n\nPaciente: " + nombre + "\nSexo: " + sexo + "\nEdad: " + edad +"años" + "\nEstatura: " + estatura + "cm" + "\nPeso: " + peso + "kg");

// let bmr;

// if (sexo == "masculino"){
//     bmr =  66.5 + (13.75 * numPeso) + (5 * numEstatura) - (6.75 * numEdad);
//     console.log(bmr);
// } else if (sexo == "femenino"){
//     bmr = 655.1 + (9.5663 * numPeso) + (1.85 * numEstatura) - (4.676 * numEdad);
//     console.log(bmr);
// } else {
//     alert ("Error al ingresar datos. Actualiza la página")
// }


// alert ("La Tasa Basal Metabólica de " + nombre + " es: " +bmr);
// alert ("Para conocer el requerimiento de carlorías de tu paciente, necesito información su actividad física");

// let ejercicio; 

// while (true){
//     ejercicio = (prompt("¿Cuántas sesiones de ejercicio tiene el paciente en una semana?"));
//     if(ejercicio !== null && ejercicio !== " " && !isNaN(ejercicio)){
//         break;
//     }
// }
// let numEjercicio = parseInt(ejercicio);
// console.log (numEjercicio);

// let factorActividad;

// if (numEjercicio ==0) {
//     factorActividad = 1.2;
//     alert("Tu paciente es sedentario");
//     console.log("El factor de actividad es " + factorActividad);
// } else if (numEjercicio <=3) {
//     factorActividad = 1.365;
//     alert("Tu paciente es ligeramente activo");
//     console.log("El factor de actividad es " + factorActividad);
// } else if (numEjercicio >=4 && numEjercicio <6) {
//     factorActividad = 1.375;
//     alert ("Tu paciente es moderadamente activo");
//     console.log ("El factor de actividad es " + factorActividad);
// } else if (numEjercicio <=7) {
//     factorActividad = 1.55;
//     alert ("Tu paciente es activo");
//     console.log ("El factor de actividad es " + factorActividad);
// } else {
//     factorActividad = 1.9;
//     alert ("Tu paciente es muy activo");
//     console.log ("El factor de actividad es " + factorActividad);
// }

// alert ("Por la actividad ingresada el factor de actividad de " + nombre + " es: " +factorActividad)

// let harrisBenedict = factorActividad * bmr;
// alert ("Las calorías que requiere tu paciente son = " + harrisBenedict);
// console.log ("Las calorías que requiere tu paciente son = " + harrisBenedict);



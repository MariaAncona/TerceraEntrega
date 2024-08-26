alert ("¡Bienvenido a tu calculadora Harris-Benedict, Nutriologo! \n\nTe ayudaré a sacar la Tasa Basal Metabólica de tus pacientes y posteriormente el requerimiento de calorías de tu paciente");
alert ("Para esto necesito un poco de información básica")


let nombre = prompt("Ingrese nombre de paciente");
console.log ("Paciente: " +nombre);

let sexo;
while (true){
    sexo = prompt("Paciente masculino o femenino");
    if (sexo== "femenino" || sexo == "masculino"){
        break;
    }
}
console.log("Sexo: " + sexo);


let edad;
while (true){
    edad = prompt("Ingrese edad de paciente");
    if(parseInt(edad)!=0 && edad !== null && edad !== " " && !isNaN(edad)){
        break;
    }
}
let numEdad = parseInt(edad);
console.log("Edad: " + numEdad);


let estatura; 
while (true){
    estatura =prompt ("Ingrese estatura del paciente en cm");
    if(parseInt(estatura)!=0 && estatura !== null && estatura !== " " && !isNaN(estatura)){
        break;
    }
}
let numEstatura = parseInt(estatura);
console.log ("Estatura en cm: " + numEstatura);

let peso;
while (true){
    peso =prompt ("Ingrese el peso del paciente en kg");
    if(parseInt(peso)!=0 && peso !== null && peso !== " " && !isNaN(peso)){
        break;
    }
}
let numPeso = parseInt(peso);
console.log ("Peso en kg: " + numPeso);
alert ("Estos son los datos ingresados: " + "\n\nPaciente: " + nombre + "\nSexo: " + sexo + "\nEdad: " + edad +"años" + "\nEstatura: " + estatura + "cm" + "\nPeso: " + peso + "kg");

let bmr;

if (sexo == "masculino"){
    bmr =  66.5 + (13.75 * numPeso) + (5 * numEstatura) - (6.75 * numEdad);
    console.log(bmr);
} else if (sexo == "femenino"){
    bmr = 655.1 + (9.5663 * numPeso) + (1.85 * numEstatura) - (4.676 * numEdad);
    console.log(bmr);
} else {
    alert ("Error al ingresar datos. Actualiza la página")
}


alert ("La Tasa Basal Metabólica de " + nombre + " es: " +bmr);
alert ("Para conocer el requerimiento de carlorías de tu paciente, necesito información su actividad física");

let ejercicio; 

while (true){
    ejercicio = (prompt("¿Cuántas sesiones de ejercicio tiene el paciente en una semana?"));
    if(ejercicio !== null && ejercicio !== " " && !isNaN(ejercicio)){
        break;
    }
}
let numEjercicio = parseInt(ejercicio);
console.log (numEjercicio);

let factorActividad;

if (numEjercicio ==0) {
    factorActividad = 1.2;
    alert("Tu paciente es sedentario");
    console.log("El factor de actividad es " + factorActividad);
} else if (numEjercicio <=3) {
    factorActividad = 1.365;
    alert("Tu paciente es ligeramente activo");
    console.log("El factor de actividad es " + factorActividad);
} else if (numEjercicio >=4 && numEjercicio <6) {
    factorActividad = 1.375;
    alert ("Tu paciente es moderadamente activo");
    console.log ("El factor de actividad es " + factorActividad);
} else if (numEjercicio <=7) {
    factorActividad = 1.55;
    alert ("Tu paciente es activo");
    console.log ("El factor de actividad es " + factorActividad);
} else {
    factorActividad = 1.9;
    alert ("Tu paciente es muy activo");
    console.log ("El factor de actividad es " + factorActividad);
}

alert ("Por la actividad ingresada el factor de actividad de " + nombre + " es: " +factorActividad)

let harrisBenedict = factorActividad * bmr;
alert ("Las calorías que requiere tu paciente son = " + harrisBenedict);
console.log ("Las calorías que requiere tu paciente son = " + harrisBenedict);


let menu = prompt("¿Quieres ideas de recetas para tu paciente?" + "\n Sí o No");
if (menu === "no"){
    alert ("Refresca tu navegador para comenzar de nuevo"); 
} else if (menu === "si"){
    let selMenu =prompt("Ingresa el rango de calorías que vas a mandarle a tu paciente \n\n1: 1300 - 1500 \n2: 1500 - 2000 \n3: 2000 - 2500");
    if (selMenu == 1) {
        alert ("Menú 1 \n\nLunes - Miércoles - Viernes: \n\nDesayuno: Tostada integral con tomate y jamón serrano. \nComida: Revuelto de pollo con verduras, arroz y salsa de soja. \nCena: Salmón a la plancha con espárragos \n\nMartes - Jueves: \n\nDesayuno: Yogurt griego bajo en grasa con arándanos y puñado de nueces. \nComida: Ensalada de garbanzos con tomate, pimientos de colores y atún en lata.\nCena: Pollo al curry con migas de coliflor. \n\nSábado y Domingo: \n\nDesayuno: Tostada integral con aceite, tomate y jamón york +85% \nComida: Hamburguesa con alto porcentaje de carne y ensalada de tomates.\nCena: Crema de verduras y tortilla francesa.");
        console.log ("Menú entregado");
        alert ("Refresca tu navegador para comenzar de nuevo");
        console.log ("Terminó la consulta");
    }else if (selMenu == 2) {
        alert ("Menú 2 \n\nLunes - Miércoles - Viernes: \n\nDesayuno: Yogurt de proteínas con plátano troceado y arándanos. \nComida: Ternera magra salteada con verduras y patatas al horno. \nCena: Salmorejo con huevo duro picado. \n\nMartes - Jueves: \n\nDesayuno: Huevos con tocino, taza de café o té y dos frutas \nComida: Salmón asado con ensalada caprese y arroz \nCena: Sopa de tomate con queso de cabra y un pan tostado integral \n\nSábado y Domingo: \n\nDesayuno: Dos huevos fritos con un pan tostado, taza de café y 2 frutas \nComida: Ensalada de pollo con una cucharada grande hummus, una taza de pasta. \nCena: Sopa de cebolla.");
        console.log ("Menú entregado");
        alert ("Refresca tu navegador para comenzar de nuevo");
        console.log ("Terminó la consulta");
    }else if (selMenu ==3) {
        alert ("Menú 2 \n\nLunes - Miércoles - Viernes: \n\nDesayuno: Dos huevos cocidos con verduras, dos panes tostado dos frutas a elegir \nComida: Hamburguesa con queso y tocino y vegetales asados. \nCena: Fajitas de carne con pimientos. \n\nMartes - Jueves: \n\nDesayuno: 4 Pancakes con plátano y miel de maple.  \nComida: Pasta a la bolognese y verduras. \nCena: Pollo con verduras \n\nSábado y Domingo: \n\nDesayuno: Omelett con espinacas y queso. taza de café y dos frutas \nComida: 2 rebanas de pizza con ensalda. \nCena: Un aguacate relleno de verduras con queso.");
        console.log ("Menú entregado");
        alert ("Refresca tu navegador para comenzar de nuevo"); 
        console.log ("Terminó la consulta");
    }else {
        console.log ("Terminó la consulta");
        alert ("Refresca tu navegador para comenzar de nuevo"); 
    }
} else{
    alert ("Refresca tu navegador para comenzar de nuevo");
}
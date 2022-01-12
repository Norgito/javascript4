/* declaracion de variable */
/*
var nombre; //Creando

var nombre= "Norge"; //Creado e inicializado

nombre="Santana"; //Asignar valor 
*/

/* var nombre="Diego";
let apellido="Prada"; */

/* let apellidoAlumno --> camelcase: mayuscula para varias nombres */

/* let apellido="Santana"; //Creacion e inicializacion
apellido="Gonzalez"; //Asignacion
apellido="36";

const dni= 95833277;
dni= "Hola"; /* <--- Error la constante es UNICA, no permite cambiar el valor */

/* let entradaNombre= prompt('Ingresa su nombre:');

console.log('Hola mundo');
console.log('Norge');
alert('Hola alert');
alert('entradaNombre');
 */

/* //ENTRADA
let entradaDato= prompt('Ingrese tu Nombre');
//Proceso
let saludo= "Bienvenido a nuestro sitio " + entradaDato;
//Salida
console.log(saludo);
alert(saludo); */


//CLASE 02


//let nombre = prompt('INGRESAR NOMBRE');

/* if (5> 1) {
    console.log('Es verdadero')
} */

/* if (nombre == 'Alejandra') {
    console.log('Hola ' + nombre);
} */

/* if (nombre == 'Alejandra') {
    console.log('Soy yo');
}else{
    console.log('No soy yo');
} */

/* let precio= parseFloat(prompt('Ingrese el Precio'));

if (precio > 100) {
    console.log('Esta caro, descuento');
}else {
    if (precio > 50){
        console.log('Precio Medio')
}else {
        console.log('Es Barato')
    }
} */


/* let darkMode= true;

if (darkMode) {
    console.log('Configuracion darkmode');
}else {
    console.log('Configuracion lightmode');
} */


/* let nombre= prompt('Ingrese el nombre');
let edad= prompt('Ingrese edad');

if((nombre!='') && ((edad!= '') && (edad> 18))){
    console.log('Hola '+ nombre+ ' tu edad es '+edad);
    alert('Bienvenido');

}else {
    console.log('Eres menor de edad');
} */


let nombreApellido= prompt('Ingrese Nombre y Apellido');

if ((nombreApellido == 'Diego Prada') || (nombreApellido == 'diego prada') || (nombreApellido == 'diego prada')) {
    console.log('Soy yo');
    alert('Bienvenido '+nombreApellido);
}else {
    console.log('Error');
    alert('Error usuario incorrecto, intente de nuevo');
}

let numeroCuenta= prompt('Ingrese Numero de Cuenta')

if (numeroCuenta > 1) {
    console.log('Error');
    alert('ERROR se Bloquio la Cuenta Bancaria 😂')
}else{
    console.log('Error');
    alert('el 0 no esta permitido, intente otro numero 🤔')
}
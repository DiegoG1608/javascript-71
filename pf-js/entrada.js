/**
 * Prompt:
 * 1.- Hay que asignar su uso a una variable para luego poder usar el valor que ingreso el usuario
 *  1.2 Usar el valor inmediatamente
 * 
 * !importante
 * 1.- No se recomienda su uso en aplicaciones en producción
 * 2.- Bloquea el código, esto quiere decir que el código que este debajo de
 * donde escribimos el uso de prompt no se va a ejecutar, hasta que el usuario
 * ingrese algo.
 * 3.- No se puede personalizar.
 * 4.- Todo lo que se ingresa mediante prompt siempre es un String
 * 
 * Nota:
 * ? \n es un caracter que nos inserta un salto de linea
 */


/*
const edad = prompt("Ingresa tu edad", 25);
console.log(edad);


const nombre = prompt("Ingresa tu nombre", "Diego");
console.log(nombre);

console.log("Hola me llamo "+nombre+", y tengo "+edad+" años :D");
alert("Hola me llamo "+nombre+", y tengo "+edad+" años :D")
*/

const serie = prompt("Ingresa tu serie o pelicula");
const personaje = prompt("Ingresa tu personaje favorito de "+serie);
const porque = prompt("¿Porque "+personaje+" es tu favorito?");

console.log("En la serie "+serie+" sale el personaje "+personaje+" y es mi favorito porque "+porque);
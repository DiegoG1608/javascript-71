//console.log("Hola")

/**
 * En javascript hay 3 formas de declarar variables
 * !Existe una forma que ya no se recomienda su uso
 * !var
 * 
 * 
 * Al proceso de crear una variable y darle un valor se le llama asignación
 * 
 * A las variables que pueden ser reasignadas (pueden cambiar en un futuro el valor que tienen)
 * se declaran:
 * 
 * ? let nombreVariable = valor;
 * 
 * * El operador '=' se conoce como operador de asignación
 * Una vez creada una variable podemos usarla en otros lugares del código
 * utilizando su nombre, las variables al ser utilizadas no van entre ""
 * 
 * 
 * Las variables que no pueden ser reasignadas (su valor no puede cambiar) se
 * declaran:
 * ! const nombreVariable = valor;
 * 
 * 
 * Nota:
 * Palabras reservadas: Son palabras que utiliza el lenguaje de programación
 * y si intentamos usarlas en otros lados pueden generar errores
 */


let nombre = "Diego"; //tipo String

console.log(nombre);


const birthYear = 2001; //tipo númerico
console.log(birthYear);


/**Reasignando una variable (cambiando el valor que tiene)
 * Cuando reasignamos una variable (una variable ya creada)
 * !Ya no es necesario poner let
 * 
*/

nombre = "Juan";
console.log("nombre")

/** Seccion de prueba */


//birthYear = 2002;

/**
 * Concatenar:
 * Nos permite pegar el valor de una variable a un texto
 */

console.log("Hola soy " + nombre + " y naci en " + birthYear)

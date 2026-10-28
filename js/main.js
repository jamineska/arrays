/*7. Combinar dos arrays

Enunciado: Dado dos arrays, combínalos en uno solo y retorna el resultado.
8. Encontrar si un array incluye un elemento

Enunciado: Dado un array y un elemento, verifica si el array contiene ese elemento.
9. Buscar el índice de un elemento

Enunciado: Dado un array y un elemento, encuentra el índice de la primera aparición de dicho elemento.
10. Reemplazar un elemento en un array

Enunciado: Dado un array, reemplaza un elemento en un índice específico por otro y devuelve el array modificado.
11. Sumar todos los elementos del array

Enunciado: Dado un array de números, suma todos sus elementos y devuelve l resultado.
12. Multiplicar todos los elementos del array

Enunciado: Dado un array de números, multiplica cada elemento por un valor específico y devuelve el nuevo array.
13. Filtrar números mayores a un valor

Enunciado: Dado un array de números y un valor, devuelve un nuevo array con los números que sean mayores a ese valor.
14. Verificar si todos los elementos son mayores a un número

Enunciado: Dado un ary dera números y un valor, verifica si todos los elementos del array son mayores a ese valor.

15. Obtener el primer elemento que cumple una condición

Enunciado: Dado un array de números y un valor, encuentra el primer número que sea mayor al valor dado.
16. Imprimir cada elemento del array

Enunciado: Dado un array de números, recorre el array e imprime cada uno de sus elementos en la consola.
17. Crear un array con el doble de cada número

Enunciado: Dado un array de números, genera un nuevo array en el que cada número sea el doble de su valor original.
18. Convertir un array de nombres en mayúsculas

Enunciado: Dado un array de nombres (strings), genera un nuevo array donde cada nombre esté en mayúsculas.*/


//1 Obtener el primer elemento del array.Enunciado: Dado un array, retorna el primer elemento del mismo.

let frutas = ["manzana", "naranja", "plátano"];

console.log(frutas[1]); // Imprime: naranja


//2 Obtener el último elemento del array. Enunciado: Dado un array, retorna el último elemento del mismo.
let nombres = ["pepe", "ane", "Jon"];
console.log(nombres [nombres.length-1]); 

let ultimo = nombres.pop();
console.log(ultimo); 
// Imprime: "Jon"
// Imprime: ultimo nombre

//3 Agregar un elemento al inicio del array.Enunciado: Agrega un elemento al inicio de un array y devuelve el array actualizado.

let construccion = ["casa", "caserio", "edificio"];
construccion.unshift("piso");
console.log(construccion);
 // Imprime: "piso", "casa", "caserio", "edificio"


//4 Eliminar el primer elemento del array. Enunciado: Elimina el primer elemento de un array y devuelve el array resultante.

let animales = ["buey","gato", "perro"];
let primero = animales.shift();
console.log(primero); // Imprime: "buey"
console.log(animales); // Imprime: ["gato", "perro"]

//5 Agregar un elemento al final del array.Enunciado: Agrega un elemento al final de un array y devuelve el array actualizado.

let animal = ["buey","gato", "perro"];
let newLongitud = animal.push("pajaro");
console.log(animal); //imprime ["buey","gato", "perro", pajaro];

// 6 Eliminar el último elemento del array.Enunciado: Elimina el último elemento de un array y devuelve el array resultante.

let granja = ["buey","gato", "perro"];
let ultimogranja = granja.pop();
console.log(ultimogranja);
console.log(granja); 
//imprime ["buey","gato"];
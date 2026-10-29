//1 Obtener el primer elemento del array.Enunciado: Dado un array, retorna el primer elemento del mismo.

/*let frutas = ["manzana", "naranja", "plátano"]; 
console.log(frutas[1]);*/ // Imprime: naranja


//2 Obtener el último elemento del array. Enunciado: Dado un array, retorna el último elemento del mismo.
/*let nombres = ["pepe", "ane", "Jon"];
console.log(nombres [nombres.length-1]);*/ 

/*let ultimo = nombres.pop();
console.log(ultimo); */
// Imprime: "Jon"
// Imprime: ultimo nombre

//3 Agregar un elemento al inicio del array.Enunciado: Agrega un elemento al inicio de un array y devuelve el array actualizado.

/*let construccion = ["casa", "caserio", "edificio"];
construccion.unshift("piso");
console.log(construccion);*/
 // Imprime: "piso", "casa", "caserio", "edificio"


//4 Eliminar el primer elemento del array. Enunciado: Elimina el primer elemento de un array y devuelve el array resultante.

/*let animales = ["buey","gato", "perro"];
let primero = animales.shift();*/
/*console.log(primero); // Imprime: "buey"
console.log(animales);*/ // Imprime: ["gato", "perro"]

//5 Agregar un elemento al final del array.Enunciado: Agrega un elemento al final de un array y devuelve el array actualizado.

/*let animal = ["buey","gato", "perro"];
let newLongitud = animal.push("pajaro");
console.log(animal);*/ //imprime ["buey","gato", "perro", pajaro];

// 6 Eliminar el último elemento del array.Enunciado: Elimina el último elemento de un array y devuelve el array resultante.

/*let granja = ["buey","gato", "perro"];
let ultimogranja = granja.pop();
console.log(ultimogranja);
console.log(granja); */
//imprime ["buey","gato"];

//7 Combinar dos arrays Enunciado: Dado dos arrays, combínalos en uno solo y retorna el resultado.

/*let coches = ["opel", "seat"];
let modelo = ["zafira", "ibiza"];

let mezcla = coches.concat(modelo);
console.log(mezcla);*/ // Imprime: ["opel", "seat", "zafira", "ibiza"]

//8 Encontrar si un array incluye un elemento. Enunciado: Dado un array y un elemento, verifica si el array contiene ese elemento.

/*let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matriz[0][0]); // Imprime: 1 (elemento en la primera fila y primera columna)
console.log(matriz[1][2]); // Imprime: 6 (elemento en la segunda fila y tercera columna)
console.log(matriz[2][1]); */// Imprime: 8 (elemento en la tercera fila y segunda columna)

//9 Buscar el índice de un elemento. Enunciado: Dado un array y un elemento, encuentra el índice de la primera aparición de dicho elemento.

/*let comida = ["bonito", "atun", "sardina"];

console.log(comida[0]); // Imprime: bonito
console.log(comida[1]); // Imprime: atun
console.log(comida[2]); // Imprime: sardina

console.log(comida.indexOf("atun"));*/ // Retorna 1 (el primer índice donde aparece) 


//10 Reemplazar un elemento en un array. nunciado: Dado un array, reemplaza un elemento en un índice específico por otro y devuelve el array modificado.

/*let colores = ["rojo", "verde", "azul"];
colores[1] = "amarillo";
console.log(colores);*/ // Imprime: ["rojo", "amarillo", "azul"]
//modificar los elementos de un array asignando un nuevo valor a un índice específico

//11 Sumar todos los elementos del array. Enunciado: Dado un array de números, suma todos sus elementos y devuelve l resultado.

/*let selvagen = ["perro", "gato", "conejo"];
console.log(selvagen.length);*/ // Imprime: 3

//12 Multiplicar todos los elementos del array. Enunciado: Dado un array de números, multiplica cada elemento por un valor específico y devuelve el nuevo array.

/*let carros = [1, 2, 3, 4, 5];
carros.forEach(function (cochera) {
  console.log(cochera * 5);
});*/ //imprime [5, 10, 15, 20, 25]


//13 Filtrar números mayores a un valor. Enunciado: Dado un array de números y un valor, devuelve un nuevo array con los números que sean mayores a ese valor.

/*let numeros = [ 7, 8, 9, 10];

let pares = numeros.filter(function (num) {
  return num % 2 === 0;
});
console.log(pares);*/ // Imprime: [8, 10]

//14 Verificar si todos los elementos son mayores a un número. Enunciado: Dado un array dera números y un valor, verifica si todos los elementos del array son mayores a ese valor.

/*let bolas = [4, 9, 16, 25];

let encontrado = bolas.find(function (bol) {
  return bol >= 4;
});
console.log(encontrado);*/ // Imprime: [9, 16, 25]

//15 Obtener el primer elemento que cumple una condición. Enunciado: Dado un array de números y un valor, encuentra el primer número que sea mayor al valor dado.

/*let numer1= [5, 7, 10, 28]; 
let found = numer1.find(function (numer) {
  return numer > 18;
});
console.log(found);*/ // Imprime: 28

//16 Imprimir cada elemento del array. Enunciado: Dado un array de números, recorre el array e imprime cada uno de sus elementos en la consola.


/*let tutifrut = ["manzana", "naranja", "plátano"];
tutifrut.forEach(function (elemento, indice, array) {
  console.log(elemento, indice);
});*/
// manzana 0
// naranja 1
// platano 2

//17 Crear un array con el doble de cada número. Enunciado: Dado un array de números, genera un nuevo array en el que cada número sea el doble de su valor original.

/*let bombones = [1, 2, 3, 4, 5];
let duplicados = bombones.map(function (bombon) {
  console.log(bombon * 2);
});*/ //imprime cada numero * 2 [2, 4, 6, 8, 10]


//18 Convertir un array de nombres en mayúsculas. Enunciado: Dado un array de nombres (strings), genera un nuevo array donde cada nombre esté en mayúsculas.

//Vamos utilizar toUpperCase 
let nombres = ["jamile", "alan", "andoni", "joel"]
/*let nombresMayuscula=nombres.toUpperCase();
console.log(nombresMayuscula);*/
//imprime [JAMILE, ALAN, ANDONI, JOEL]
/*const nombresTransformados=nombres.map(function(nombre){
  return nombre.toUpperCase()
})*/

/*const nombresTransformados=nombres.map (nombre => nombre.toUpperCase())*/
const nombresTransformados=[]

nombres.forEach((nombre)=> nombresTransformados.push(nombre.toUpperCase()))
console.log(nombresTransformados);
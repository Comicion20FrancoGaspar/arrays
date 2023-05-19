// ARRAYS y MÉTODOS DE ARRAYS

// Crear una constante con números del 3 al 7.
// 1 - Agregar con el método que corresponda el número 1 y 2 al principio del array y mostrarlo por consola.
// 2 - Agregar al final el 8, y 10.
// 3 - Quitar del array el primer numero y el ultimo.
// 4 - Comprobar si existe el numero 9 en el array y mostrar por consola un mensaje que nos diga si existe o no ese número.
// 5 - Indicar la posición en la que se encuentra el numero 6.
// 6 - Crear un string con todos los valores del array.

const numeros= [3,4,5,6,7]

numeros.unshift(2)
numeros.unshift(3)

console.log( numeros)

numeros.push(8)
numeros.push(10)

console.log (numeros)

numeros.shift()
numeros.pop()
 
console.log(numeros)


const existeNum = numeros.includes(9) //te devuelve un booleano
let respuesta;
if (existeNum){
    respuesta = "si existe el numero 9";
} else {
    respuesta = "no existe el numero 9"
}

console.log(respuesta); // esperar no existe el numero 9 


const indexNum6 = numeros.indexOf(6) // aca esperamos que devuelva 4

console.log(indexNum6);

const numerosJoin = numeros.join("")

console.log(numerosJoin)
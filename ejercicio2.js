// 
// let productos = [
//     "Impresora Samsung M2020",
//     null,
//     "Microsoft Xbox Series S 512GB",
//     "Sony PlayStation 4 Slim 1TB",
  // ];
  // 1 - Agregar en la posición 1 el producto "TV 55' Samsung".
  // 2 - Eliminar el último producto y colocarlo en una variable, mostrar ambas variables por consola.
  // 3 - Agregar un nuevo producto al principio del array de productos
  // 4 - Identificar en que posición se encuentra la consola de 1TB.
  // 5 - Comprobar si dentro del array de productos existe la Impresora Samsung M2020.




1//

let productos = [
    "Impresora Samsung M2020",
    null,
    "Microsoft Xbox Series S 512GB",
    "Sony PlayStation 4 Slim 1TB",
  ];

  productos[1] = "TV 55 Samsung v"
  console.log (productos)

  2//
const elUltimo = productos.pop()

console.log (elUltimo)
console.log (productos)

3//
productos.unshift("celular J7")

console.log (productos)

4//
const posicion = productos.indexOf("Sony PlayStation 4 Slim 1TB")
console.log (posicion)

5//
const productosABuscar = "Impresora Samsung M2020"
const existeProductos= productos.includes(productosABuscar)

console.log(existeProductos)

const msgCorrecto="SI EXISTE el producto"
const msgIncorrecto= " no existe el producto"

if(existeProducto){
console.log(msgCorrecto)}
else {
    console.log(msgIncorrecto)
}

const carrito = []; //* carrito de compras
let carritoCopia = [];
let carritoCopiaSinError = [];
//* Productos
const producto = {
  nombre: 'Iphone 13',
  precio: 900000,
};

const producto2 = {
  nombre: 'Notebook Gamer Asus',
  precio: 1600000,
};
const producto3 = {
  nombre: 'Teclado Gamer Razer',
  precio: 120000,
};
const producto4 = {
  nombre: 'Monitor Asus 24 pulgadas',
  precio: 200000,
};
const producto5 = {
  nombre: 'Macbook Pro M1',
  precio: 1200000,
};
//* Método push, agregar al final
carrito.push(producto);
carrito.push(producto2);
// console.log(carrito);
//* Método unshift agregamos al inicio
carrito.unshift(producto3);
// console.log(carrito);
//* copiar un arreglo
carritoCopia = carrito;
console.log(carrito); //* original
console.log(carritoCopia); //* la copia
//* Voy modificar el carrito Copia
carritoCopia.push(producto4);
console.log(carrito); //* original
console.log(carritoCopia); //* la copia
// * copiar un arreglo y no morir en el intento
carritoCopiaSinError = [...carrito]; //* utilizamos el spread operator
carritoCopiaSinError.push(producto5);

console.log(carrito); //* original
console.log(carritoCopia); //* la copia
console.log(carritoCopiaSinError); //* copia sin error
//* Filter, Nos retorna un nuevo array filtrado de acuerdo a una condición.
const carrito = [
  { nombre: 'Notebook MSI', precio: 1600000 },
  { nombre: 'Mouse Razer', precio: 20000 },
  { nombre: 'Teclado Razer', precio: 17000 },
  { nombre: 'Audifonos Razer', precio: 10000 },
  { nombre: 'Monitor LG', precio: 2000 }
];

const resultadoFilter = carrito.filter( producto => producto.precio <= 20000);
console.log(resultadoFilter);

const resultadoFilter2 = carrito.filter(producto => producto.nombre !== 'Monitor LG');
console.log(resultadoFilter2);
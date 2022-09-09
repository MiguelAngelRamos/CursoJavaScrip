//* reduce
/*
* El método reduce "es un acumulador", es decir 
* toma una cantidad de datos y nos retorna un resultado 
* acumulado
*/

const carrito = [
  { nombre: 'Notebook MSI', precio: 16000 },
  { nombre: 'Mouse Razer', precio: 20000 },
  { nombre: 'Audifonos Razer', precio: 10000 },
  { nombre: 'Monitor LG', precio: 2000 }
];

const resultadoReduce = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultadoReduce); //* 4800
//* alt + 96 
console.log(`El total de los productos es: ${Intl.NumberFormat().format(resultadoReduce)}`);
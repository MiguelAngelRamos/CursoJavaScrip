const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito = [
  { nombre: 'Notebook MSI', precio: 1600000 },
  { nombre: 'Mouse Razer', precio: 20000 },
  { nombre: 'Teclado Razer', precio: 17000 },
  { nombre: 'Audifonos Razer', precio: 10000 },
  { nombre: 'Monitor LG', precio: 2000 }
];

//* Encontrar un elemento con su indice 

//* forEach
// meses.forEach((mes, i)=> {
//   if( mes === 'Septiembre') {
//     console.log(`Mes encontrado y su indice es: ${i}`);
//   } else {
//     console.log('el mes no existe');
//   }
// });

//* findIndex
//* Sino lo encuentra nos retorna -1
const indiceEncontrado = meses.findIndex((mes) => {
  return mes == 'Diciembre';
})
console.log(indiceEncontrado);

const indiceCarrito = carrito.findIndex( item => item.precio == 100);
console.log(indiceCarrito);

//* = (asignación), == (compara solamente el valor y no el tipo)
//* === ( compara el valor y el tipo)

let variable1 = 10;
let variable2 = 0;

console.log(variable1 = variable2); // * Estamos realizando una asignación
console.log(variable1 == variable2); //* Realizamos una comparación

//* 16 hrs
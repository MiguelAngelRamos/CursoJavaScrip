//* Vamos aprender a concatenar string

const producto = 'Notebook Gamer MSI Pantalla 17 pulgadas ';
const precio = '2000 USD';
const stock = 1000;
const local = 'Florida';

//* concat
console.log(producto.concat(precio).concat(' Oferta! '));
console.log(producto.concat(' sucursal: ').concat(local));

//* +
console.log("El producto " + producto + " tiene un precio de: " + precio);

//* ES6 Template String
//* `` backtick
//* alt + 96 ``

console.log(`El producto ${producto} tiene un precio de: ${precio}`);
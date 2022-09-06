// * Para cortar String
const producto = 'Notebook Gamer MSI Pantalla 17 pulgadas';

//* .slice para cortar
//* slice "donde quiero comenzar a cortar, hasta donde quiero que termine el corte"

console.log(producto.slice(0,8)); //? que se imprime aqui?
console.log(producto.slice(8,0));
console.log(producto.slice(9,14));//? como podria imprimer la palabra gamer

//* Split
const productoSplit = producto.split(" ");
console.log(productoSplit);

//* PasaTiempos

const pasaTiempos = "Leer, jugar, cantar, aprender a programar, css, Node";
console.log(pasaTiempos.split(","));

//* Ejemplo #
const tweet = "Aprendiendo a programar #ES6";
const resultado = tweet.split('#');
console.log(resultado);
console.log(resultado[0]);
console.log(resultado[1]);

const descripcion = 'Notebook Gamer MSI';
console.log(descripcion.toUpperCase()); //* todo en mayusculas
console.log(descripcion.toLowerCase()); //* seria todo miniscula

const email = 'MICORREO@CORRE.COM';
console.log(email.toLowerCase());
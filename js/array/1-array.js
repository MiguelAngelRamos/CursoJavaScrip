// * Array (Vectores) unidimensionales
//* Nos sirve para agrupar elementos
const numeros = [10, 55, 108]; // * La forma moderna de crear un array en este caso es de una dimensión
const amigos = new Array('Pedro', 'Juan', 'Diego'); // * Esta la forma antigua de como se creaba un array ( es de una dimensión)
//* Un Arreglo puede contener cualquier tipo de valor, en este caso tenemos: string, numbers, booleans, null y object
const arregloFull = ["Mouse", 50, false, "not", null, { nombre: 'Miguel'}];
// console.log(arregloFull);
// console.table(arregloFull);
//* clt console.table
//* clg console.log
//* Matrices (vector bidimensional 2 dimensiones)
const matrix = [
                [1, 5, 6],
                [14,55, 78]
               ];
console.table(matrix);
console.log(matrix[0][1]);
console.log(matrix[1][2]);

//* Utils
console.error('Esto es un error');
console.warn('Esto es un warning');
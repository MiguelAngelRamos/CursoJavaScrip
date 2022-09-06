/**
 * * const se utiliza para definir una "constante", su valor no puede cambiar, pero hay ciertas excepciones con los "objetos y arreglos"
 */
//* CamelCase 
//* AutomovilDeportivo "UpperCamelCase" (Pascal Case) Nombre de Clases 
//* arrayNumero "lowerCamelCase" para declaracion de variables, funciones y métodos 

const arrayNumero = [10, 20, 30, 'Hola Mundo']; //* longitud (length) "4"

console.log(arrayNumero[0]); //* 10
console.log(arrayNumero[1]); //* 20
console.log(arrayNumero[2]); //* 30
console.log(arrayNumero[3]); //* 'Hola Mundo'
console.log(arrayNumero);

arrayNumero.push(200); //* nos permite añadir un nuevo elemento
console.log(arrayNumero);

// *const miConstante; no es permitido siempre tiene que tener un valor inicial
// * '' o "" 
const persona = {
  nombre: 'Miguel',
  nacionalidad: 'Chile'
};
console.log(persona);

//* Acceder a una propiedad (key) para conocer su valor
console.log(persona.nombre);
console.log(persona.nacionalidad);

//* Agregar una nueva propiedad al objeto persona
persona.apellido = "Ramos";
console.log(persona);
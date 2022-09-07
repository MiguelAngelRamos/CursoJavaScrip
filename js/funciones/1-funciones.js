//* Funciones en JavaScript
//* Nos permite reutilizar el código
//* Variables
let numero1 = 4;
let numero2 = 10;

//* Vamos declarar una función tradicional
function sumar(a, b) {
  let resultado = a + b;
  // console.log("El resultado es: " + resultado);
  // console.log(`El resultado es: ${resultado}`);
  return resultado;
}
//* El llamado a la función para que se ejecute
const resultadoSuma = sumar(numero1, numero2);
// console.log(resultadoSuma);

//* Funcion anomina
const sumarAnonimo = function(a, b) {
  return a + b;
};
console.log(sumarAnonimo(numero1, numero2));

//* Arrow function
// const sumarArrow = (a, b) => {
//   return a + b;
// };

//* Aca son obligatorias las {} por que tenemos mas codigo antes del return
// const sumarArrow = (a, b) => {
//   let resultado = a + b;
//   resultado = resultado * 10;
//   return resultado;
// };

const sumarArrow = (a, b) => a + b;
console.log(sumarArrow(numero1, numero2));

//* Cuando se trate de un unico parametro en las arrow function podemos omitir los ()
const imprimirNombre = nombre => nombre;

console.log(imprimirNombre('Miguel'));
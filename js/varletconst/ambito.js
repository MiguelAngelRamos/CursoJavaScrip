//* Ambito(Scope) de las variables let y var
//* Con var
//* Condicional un If
var edad = 20;

if(true){
  var edad = 40;
  console.log(edad) //* imprime 40;
}
console.log(edad); //? 20 o 40?

/**
 * * var no respeta el ambito o scope del if, sino que vuelve
 * * a crear una variable con el mismo nombre y le cambia el valor, a la variable creada en el scope superior
 */

//* let
let altura = 400;

if(true) {
  let altura = 20;
  let color = "Azul";
  console.log(altura); //* 20
  console.log(color);
}
console.log(altura); //* 400
console.log(color);
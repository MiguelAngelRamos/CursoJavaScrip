//* map
/*
* El método map(), crea un nuevo array y el array resultante tiene una modificación en cada uno de sus elementos
*/
const numeros = [10, 20, 30, 40];
//* const resultMap = numeros.map((number) => {
//*   return number*2;
//* });
const resultMap = numeros.map((number) => number * 2);
console.log(resultMap);

//* JSX
const usuarios = [
  { id: 1, name: 'Pedro'},
  { id: 2, name: 'Juan'},
  { id: 3, name: 'Diego'},
];

const resultadoJsx = usuarios.map((user)=> {
  //* alt + 96 
  return `<li>${user.name}</li>`;
});
console.log(resultadoJsx);

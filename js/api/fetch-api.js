//* https://rickandmortyapi.com/api/character
//* fetch es una función que retorna una promesa

const url = "https://rickandmortyapi.com/api/character"; //* todos los personajes

fetch(url).then( response => {
  return response.json();
})
.then( data => {
  console.log(data);
})
.catch( err => {
  console.error(err);
});

//* Promesa, si todo sale bien "then"
//* Si la  Promesa falla, se ejecuta el catch
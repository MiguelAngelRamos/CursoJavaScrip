//* Crear las referencias
// const rowCards2 = document.getElementById('rowCards');
const rowCards = document.querySelector('#rowCards');
const formData = document.querySelector('#formData');

//* Peticiones hacia el Api "Rick and Morty"

//* todos los personajes
const getCharacters = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    return data; //* es un objeto que tiene la propiedad "info" y "results"
  } catch (error) {
    throw error;
  }
};

//* A Buscar un personaje por su nombre
const getCharacterForName = async nameCharacter => {
  try {
    //* alt + 96
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${nameCharacter}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

const init = async () => {
  const characters = await getCharacters();
  console.log(characters);
  console.log(characters.results); //* el arreglo de los personajes

  createCards(characters.results);
};
init();

//* Que manda a crear la tarjeta
const createCards = characters => {
  console.log(characters); // * estamos recibiendo el arreglo
  characters.map( personaje => cardCharacter(personaje));

};
//* funcion que es la tarjeta, recibe el objeto personaje
const cardCharacter = character => {
  console.log(character);
}






// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
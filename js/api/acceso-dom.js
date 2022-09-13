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
  // * Creamos los elementos html
  const cardBootstrap = document.createElement('div');
  const imgCard = document.createElement('img');
  const cardBody = document.createElement('div');
  const titleCharacter = document.createElement('h5');
  const btnByIdCharacter = document.createElement('a');

  //* Creamos los textos solo los textos de los elementos
  const nameCharacter = document.createTextNode(character.name);
  // const nameCharacter = character.name;
  const textButtonCharacter = document.createTextNode('Ir al Personaje');

  //* Añadir las clases

  cardBootstrap.classList.add('card', 'mt-4');
  imgCard.classList.add('card-img-top', 'mt-2');
  cardBody.classList.add('card-body');
  titleCharacter.classList.add('card-title', 'text-center');
  btnByIdCharacter.classList.add('btn', 'btn-secondary', 'mb-2');

  //* Agregar los textos a los elementos
  titleCharacter.appendChild(nameCharacter);
  btnByIdCharacter.appendChild(textButtonCharacter);
  imgCard.src=character.image;

  // * El renderizado
  cardBootstrap.append(imgCard, cardBody, btnByIdCharacter);
  cardBody.append(titleCharacter);
  //* añadir a la fila (row)
  rowCards.append(cardBootstrap);

}

// * LLAMAR AL FORMULARIO
//* El evento se esta enviando de forma implicita en la funcion
//* handleSubmit
formData.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // console.log(event);
  event.preventDefault();
  const form = new FormData(this);
  cleanRow();
  // console.log(form.get('character')); /* capturamos lo que escribe el usuario en el input
  // const name = form.get('character');
  //* lo vamos a realizar con promesa
  getCharacterForName(form.get('character')).then( data => createCards(data.results)).catch(err => console.log(err));
}
//* Una función que limpia la fila
const cleanRow = () => {
  rowCards.innerHTML = '';
}
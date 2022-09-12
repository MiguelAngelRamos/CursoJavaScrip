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

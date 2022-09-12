const url = "https://rickandmortyapi.com/api/character";

async function getCharacters() {
  try {
    const data = await fetch(url);
    const response = await data.json();
    console.log(response);
  } catch (error) {
    throw error;
  }

};

getCharacters();
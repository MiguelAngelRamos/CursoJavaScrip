const textoInvertido = text => {
  // hola
  let textInverse = "";
  for(let letter of text) {
    // texInverse = textInverse + letter;
    //"hola"
    textInverse = letter + textInverse;
    //"aloh"

  }
  return textInverse;
};

// const textoInvertido = text => text.split("").reverse().join("");

console.log(textoInvertido("hola"));


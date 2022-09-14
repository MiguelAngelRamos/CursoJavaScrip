const censurar = (frase=false, palabra=false) => {
  let resultado = "";
  if(!frase && !palabra) {
    resultado = "No puedes realizar ninguna acción, no enviaste la frase y tampoco la palabra"
  } else if(!frase && palabra) {
    resultado = "No puedes leer la frase"
  } else if(frase && !palabra) {
    resultado = "No puedes censurar no enviaste la palabra"
  } else if(frase && palabra ) {
    resultado = frase.replace(new RegExp(palabra, 'gi'), "[**Censurado**]");
  }
  return resultado;
}

const resultadoCensurado = censurar("El estado actual del covit-19, es el siguiente...", "covit-19");
console.log(resultadoCensurado);
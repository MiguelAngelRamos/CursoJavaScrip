const buscarPalabra = (frase, palabra) => {
  let contador = 0;

  // Limpiamos nuestra frase con una expresion regular (regex)
  const limpiarFrase = frase.replace(/[!¡.,-]/gi,'');
  console.log(limpiarFrase);

  // transformamos la frase en un arreglo
  const arrayFrase = limpiarFrase.split(' ');
  console.log(arrayFrase);

  // recorrer el arreglo con las palabras de la frase
  arrayFrase.forEach( element => {
    if(element.toLowerCase() == palabra) {
      // contador = contador + 1;
      contador++;
    }
  });
  return contador;
}

const cantidad = buscarPalabra("hola MundO!, la tierra es un mUnDo mundo muy bello.", "mundo");
console.log(`La cantidad de veces que aparece la palabra mundo es: ${cantidad} `);
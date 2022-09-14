const escalera = (numero) => {
  let escaleraCompleta = "";
  
  for(let nivel=1; nivel <= numero; nivel++) {
    let escalones = "";
    for(let escalon = 1; escalon <=nivel; escalon++) {
      escalones = escalones + "[*]";
    }
    // escaleraCompleta = escaleraCompleta + escalones;
    escaleraCompleta += escalones + '\n';
  }
  return escaleraCompleta;
}

// pasar el numero por parametro
console.log(escalera(4));
const calculoPorcentaje = (numero, porcentaje) => {
  const calculo = (numero * (porcentaje/100));
  return `El ${porcentaje}% de ${numero} es ${calculo}`;
}

console.log(calculoPorcentaje(500, 10));
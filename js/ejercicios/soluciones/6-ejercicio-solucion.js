const elementosComunes = (array1, array2) => {
  const resultadoFilter = array1.filter(element => array2.includes(element))
  return resultadoFilter;
 }
 
 const resultado = elementosComunes([4,5,6,7], [7,8,9,5]);
 console.log(resultado);


// * El método includes() de los array determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.

//* const array1 = [1, 2, 3];
//* console.log(array1.includes(2));
//* expected output: true
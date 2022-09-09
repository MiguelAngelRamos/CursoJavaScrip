const miPromesa = new Promise((resolve, reject) => {
  const suma = 25-5 //* 15
  suma == 10?resolve('Es correcto es igual a 10'):reject('No es correcto no es igual a 10');
});
miPromesa.then(message => console.log(message)).catch(err => console.error(err))

// * miPromesa.then(console.log).catch(console.error)
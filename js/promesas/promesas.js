//* Las promesas sirve para trabajar con peticiones asincronas
//* Es que no evita el uso excesivo de callback (callback hell)

let miPromesa = new Promise(function(resolve, reject){
  let suma = 15-5 //* 15
  if(suma == 10) {
    resolve('Es correcto es igual a 10');
  } else {
    reject('No es correcto no es igual a 10');
  }
});
miPromesa.then(function(message){
  console.log(message);
}).catch(function(err) {
  console.error(err);
});
//* 13 lineas de código

//* El resolve esta relacionado con el then
//* El reject esta relacionado con el catch

//* Copiar un objeto y no morir en el intento

const persona = {
  nombre: 'Miguel',
  redesSociales: {
    youtube: 'youtube.com/miguel',
    facebook: 'facebook.com/miguel',
  },
};

let copiaPersona = {};
let copiaSinErrorPrimerIntento = {};
let copiaSinErrorSegundoIntento = {};
// copiaPersona = persona;
// copiaSinErrorPrimerIntento = {...persona};

// console.log(persona); //* original
// console.log(copiaPersona); //* la copia
// copiaPersona.nombre = 'Pedro';
// console.log(persona); //* original
// console.log(copiaPersona); //* la copia

//* cambiamos en copiaSinErrorPrimerIntento
// copiaSinErrorPrimerIntento.nombre = 'Miguel Angel';
// copiaSinErrorPrimerIntento.redesSociales.youtube = 'youtube.com/miguelAngel';
// console.log(persona); //* Original
// console.log(copiaSinErrorPrimerIntento); //* copiaSinErrorPrimerIntento

//* SOLUCIÓN FINAL
// console.log(JSON.stringify(persona));
// console.log(JSON.parse(JSON.stringify(persona)));
//* La copia
copiaSinErrorSegundoIntento = JSON.parse(JSON.stringify(persona));

console.log(persona);
console.log(copiaSinErrorSegundoIntento);

copiaSinErrorSegundoIntento.nombre = 'Pedro';
console.log(persona);
console.log(copiaSinErrorSegundoIntento);
copiaSinErrorSegundoIntento.redesSociales.youtube = 'youtube.com/ES6';
console.log(persona);
console.log(copiaSinErrorSegundoIntento);

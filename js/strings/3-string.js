const nombre = '        Miguel          ';
//* Utilidad en los formularios para pasar validaciones de espacios en blanco

console.log(nombre);
console.log(nombre.trimStart());
console.log(nombre.trimEnd());
console.log(nombre.trimStart().trimEnd());

//* Hacerlo con solo método
console.log(nombre.trim());
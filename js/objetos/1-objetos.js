//* Objetos en JavaScript

//* Un Objeto Literal
const mascota = {
  nombre: 'Rocky',
  edad: 12,
  vivo: true,
  razas: ['pitbull', 'dogo', 'boxer', 'pastor aleman']
};

//* El operador punto
console.log(mascota);
console.log(mascota.nombre); //* Rocky
console.log(mascota['nombre']); //* Rocky
console.log(mascota.edad); //* 12
console.log(mascota.vivo); //* true
console.log(mascota.razas[0]); // *pitbull
console.log(mascota.razas[2]); //* boxer

mascota.id = 1;
console.log(mascota);

//* control + shift + p
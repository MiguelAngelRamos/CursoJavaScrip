//* Congelar un Objeto
const producto = {
  id: 74646153,
  nombre: 'Iphone 13',
  precio: 900000,
  disponible: true
};
//* Congelamos el objeto producto
Object.freeze(producto);
//* cambiar
producto.disponible = false;
//* agregar
producto.imagen = "foto.png";
console.log(producto);
//* Para comprobar si el objeto esta congelado
console.log(Object.isFrozen(producto));

//* SELLAR UN OBJETO
const cliente = {
  nombre: 'Pedro',
  premium: true
};
/**
 * * Puedo cambiar las propiedades con otros valores,
 * * pero no puedo agregar y tampoco eliminar una propiedad
 * * el objeto esta "sellado"
 */
//* Sellamos el objeto
Object.seal(cliente);
console.log(cliente);
//* Cambiar
cliente.nombre = "Diego";
cliente.premium = false;
console.log(cliente);
//* Eliminar una propiedad
delete cliente.premium;
console.log(cliente);
//* Para comprobar si el objeto esta sellado
console.log(Object.isSealed(cliente));


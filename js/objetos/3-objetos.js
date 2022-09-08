const producto = {
  id: 74646153,
  nombre: 'Iphone 13',
  precio: 900000,
  disponible: true
};

const cliente = {
  nombre: 'Pedro',
  premium: true
};

//* Cambiar la propiedad de un objeto 
producto.disponible = false;

//* Eliminar una propiedad del objeto
delete producto.id;
console.log(producto);

const { nombre, precio } = producto;
//* Aplicamos un alias al nombre 
const { nombre: nombreCliente, premium } = cliente;

console.log(nombre); // * nombre del producto
console.log(nombreCliente); 
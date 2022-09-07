//* Forma de recorrer los array
const productos = ['Televisor', 'Mouse', 'Notebook', 'Reloj', 'Celular'];
//* Es valido pero no recomendable
// console.log(productos[0]);
// console.log(productos[1]);
// console.log(productos[2]);
// console.log(productos[3]);

//* longitud
console.log(productos.length); //* 5 elementos en nuestro array productos
//* i++ es lo mismo "i = i + 1"
for(let i=0; i<productos.length; i++) {
  console.log(productos[i]);
}

//* control + d (selecionando la palabra en comun)
//* control + b (ocultar y mostrar explorer)
//* control + p "escriba el nombre archivo"
console.log("JavaScript listo para practicar");

//Agregar productos

const productos = [
{ id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
{ id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
{ id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
{ id: 4, nombre: 'Parlantes', precio: 150000, categoria: 'Perifericos', stock: 2 },
{ id: 5, nombre: 'Auriculares', precio: 120000, categoria: 'Perifericos', stock: 0 },
{ id: 6, nombre: 'Webcam', precio: 80000, categoria: 'Perifericos', stock: 4 },
{ id: 7, nombre: 'Silla Gamer', precio: 350000, categoria: 'Muebles', stock: 1 },
{ id: 8, nombre: 'Escritorio', precio: 450000, categoria: 'Muebles', stock: 0 },
{ id: 9, nombre: 'Disco Duro', precio: 200000, categoria: 'Almacenamiento', stock: 6 },
{ id: 10, nombre: 'Memoria RAM', precio: 150000, categoria: 'Almacenamiento', stock: 2}
];

console.log(`El producto ${productos[0].nombre} cuesta $${productos[0].precio}`);

const { nombre, precio, stock } = productos[0];
console.log(nombre, precio, stock);

const productoActualizado = {
...productos[0],
stock: 8
};

const estado = productoActualizado.stock > 0 ? 'Disponible' : 'Agotado';
console.log(estado);
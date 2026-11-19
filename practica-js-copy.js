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



const hayAgotados = productos.some(producto => producto.stock === 0);

const hayPrecioMayorMillon = productos.some(
    producto => producto.precio > 1000000
);

const preciosValidos = productos.every(
    producto => producto.precio > 0
);

const stockValido = productos.every(
    producto => producto.stock >= 0
);

const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
);

console.log("¿Existe algún producto agotado?", hayAgotados);
console.log("¿Existe algún producto con precio mayor a $1.000.000?", hayPrecioMayorMillon);
console.log("¿Todos los productos tienen precio mayor que cero?", preciosValidos);
console.log("¿Todos los productos tienen stock mayor o igual que cero?", stockValido);
console.log("Valor total del inventario: $", valorInventario);
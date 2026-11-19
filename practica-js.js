console.log("JavaScript listo para practicar");

function calcularTotal(precio, cantidad) {
const total = precio * cantidad;
return total;
}
const resultado = calcularTotal(50000, 3);
console.log(resultado);


function sumar(a, b) {
    const resultado = a + b;
    return resultado;
}

function restar(a, b) {
    const resultado = a - b;
    return resultado;
}

function multiplicar(a, b) {
    const resultado = a * b;
    return resultado;
}

function dividir(a, b) {
    const resultado = a / b;
    return resultado;
}

function calcularPromedio(nota1, nota2, nota3) {
    const promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

// Llamar las funciones y guardar sus resultados


const suma = sumar(10, 5);
console.log("suma:" , suma);

const resta = restar(10, 5);
console.log("resta:",resta);

const multiplicacion = multiplicar(10, 5);
console.log("multiplicacion:",multiplicacion);

const division = dividir(10, 5);
console.log("division:",division);

const promedio = calcularPromedio(4.0, 3.5, 5.0);
console.log("calcular promerdio:",promedio);


// Pregunta de control:
// return sirve para devolver un resultado de una funcion
// y poder utilizarlo despues en otra parte del codigo.
// console.log() sirve para mostrar informacion en la consola.

const cuadrado = numero => numero * numero;

const esMayorEdad = edad => edad >= 18;

const nombreCompleto = (nombre, apellido) => nombre + " " + apellido;

console.log("cuadrado:",cuadrado(5));
console.log(esMayorEdad(18));
console.log(nombreCompleto("Andres", "Contreras"));

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

//forEach

productos.forEach((producto, indice) => {
console.log(`${indice + 1}. ${producto.nombre}. Precio: $${producto.precio}. Categoría: ${producto.categoria}. Stock: ${producto.stock}` );
});

//map()

// Crear un array con los nombres de los productos
const nombres = productos.map(producto => producto.nombre);
console.log(nombres);

// Calcular los precios con IVA
const preciosConIva = productos.map(producto => producto.precio * 1.19);
console.log(preciosConIva);

// Convertir los nombres a mayúsculas
const nombresMayuscula = productos.map(producto => producto.nombre.toUpperCase());
console.log(nombresMayuscula);

// Crear un resumen de cada producto
const resumenProductos = productos.map(producto => producto.nombre + " cuesta $" + producto.precio);
console.log(resumenProductos);


// Filtrar productos con precio mayor a 100000
const mayores100 = productos.filter(producto => producto.precio > 100000);
console.log(mayores100);

// Filtrar productos entre 50000 y 200000
const entrePrecios = productos.filter(producto => producto.precio >= 50000 && producto.precio <= 200000);
console.log(entrePrecios);

// Filtrar productos de una categoria
const categoriaAudio = productos.filter(producto => producto.categoria === "Perifericos");
console.log(categoriaAudio);

// Buscar el producto con id 5
const producto5 = productos.find(producto => producto.id === 5);
console.log(producto5);

// Crear funcion buscarProducto(id)
const buscarProducto = (id) => {
    return productos.find(producto => producto.id === id);
};

const resultado2 = buscarProducto(3);
console.log(resultado2);

// Crear funcion filtrarPorCategoria(categoria)
const filtrarPorCategoria = (categoria) => {
    return productos.filter(producto => producto.categoria === categoria);
};


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

console.log(`El producto ${productos[0].nombre} cuesta $${productos[0].precio}`);

const { nombre, precio, stock } = productos[0];
console.log(nombre, precio, stock);

const productoActualizado = {
...productos[0],
stock: 8
};

const estado = productoActualizado.stock > 0 ? 'Disponible' : 'Agotado';
console.log(estado);

import ProductoCard from './components/productoCard';
import { productos } from './data/productos';
import './App.css';
function App() {
  
const productosDisponibles = productos.filter(
    producto => producto.stock > 0
);

const productosAgotados = productos.filter(
    producto => producto.stock === 0
);



console.log("PRODUCTOS DISPONIBLES:");

productosDisponibles.forEach(producto => {
    console.log(producto.nombre, producto.precio, producto.stock);
});

const hayAgotados = productos.some(
    producto => producto.stock === 0
);

console.log("¿Hay productos agotados?", hayAgotados);

const valorInventario = productos.reduce(
    (total, producto) => total + (producto.precio * producto.stock),
    0
);

function buscarProducto(id) {
    return productos.find(producto => producto.id === id);
}

console.log("Producto encontrado:", buscarProducto(3));



console.log("Valor total del inventario: $", valorInventario);
return (
        <main className="contenedor">

            <h1>Tienda tecnológica</h1>

            <p>
                Productos disponibles: {productosDisponibles.length}
            </p>

            <p>
                Valor del inventario: ${valorInventario}
            </p>

            <p>
                ¿Hay productos agotados?: {hayAgotados ? "Sí" : "No"}
            </p>

            <section className="productos">

                {productosDisponibles.length === 0 ? (
                    <p>No hay productos disponibles.</p>
                ) : (
                    productosDisponibles.map(producto => (
                        <ProductoCard
                            key={producto.id}
                            producto={producto}
                        />
                    ))
                )}

            </section>
                <h2 className="titulo-seccion agotados-titulo">
    Productos agotados
</h2>

<section className="productos">
    {productosAgotados.map(producto => (
        <ProductoCard
            key={producto.id}
            producto={producto}
        />
    ))}
</section>
        </main>
    );
}

export default App;
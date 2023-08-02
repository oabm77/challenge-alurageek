import { productServices } from "../services/product-services.js";
import nuevoProducto from "../controllers/productos-controller.js";


const mostrarProductos = (productos) => {
    const productosContainer = document.querySelector('[data-productos]');
    productos.forEach(e => {
        let card = nuevoProducto(e.name, e.imageUrl, e.price, e.id, "productos");
        productosContainer.appendChild(card);
    });
}

productServices.listaProductos()
    .then(datos => mostrarProductos(datos))
    .catch(error => console.log(error));

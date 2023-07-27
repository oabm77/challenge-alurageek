import { productServices } from "./services/product-services.js";
import nuevoProducto from "./controllers/productos-controller.js";
import nuevaCategoria from "./controllers/categorias-controller.js";


const mostrarProductos = (productos) => {
    const categorias = document.querySelector('.categorias');
    let categoria = null;
    productos.forEach(e => {
        let card = nuevoProducto(e.name, e.imageUrl, e.price, e.id);
        let categoryType = e.category.replace(/ /g,'');
        categoria = document.querySelector('[data-category-'+categoryType+']');
        if (categoria === null) {
            categoria = nuevaCategoria(e.category);
            categorias.appendChild(categoria);
        }
        categoria.children[1].appendChild(card);
    });
}

productServices.listaProductos()
    .then(datos => mostrarProductos(datos))
    .catch(error => console.log(error));

import { productServices } from "../services/product-services.js";

const locationString = window.location.search;
const urlParams = new URLSearchParams(locationString);
const id = urlParams.get('id');

const mostrarProducto = (producto) => {
    const productoSection = document.querySelector('[data-producto]');
    const card = document.createElement("div");
    card.classList.add('producto');
    const contenido = `
        <div><span class="producto__etiqueta">ID:</span> ${producto.id}</div>
        <img class="producto__imagen" src="${producto.imageUrl}" alt="">
        <div class="producto__nombre"><span class="producto__etiqueta">Nombre:</span> ${producto.name}</div>
        <div class="producto__precio"><span class="producto__etiqueta">Precio:</span> $ ${producto.price}</div>
        <div class="producto__categoria"><span class="producto__etiqueta">Categoría:</span> ${producto.category}</div>
        `
    card.innerHTML = contenido;
    productoSection.appendChild(card);
}

productServices.listarUnProducto(id)
    .then(datos => mostrarProducto(datos))
    .catch(error => console.log(error));

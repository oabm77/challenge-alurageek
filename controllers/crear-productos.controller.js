import { productServices } from "../services/product-services";

const form = document.querySelector('[data-form]');

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const url = document.querySelector('[data-url]').value;
    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    const categoria = document.querySelector('[data-categoria]').value;

    productServices.crearProductos(url, nombre, precio, categoria)
        .then(respuesta => {
            window.location.href = "../index.html";
            console.log(respuesta);
        }).catch(error => {
            console.log(error);
        })
})


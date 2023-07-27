const nuevoProducto = (name,imageUrl,price,id) =>  {
    const card = document.createElement("div");
    card.classList.add('producto');
    const contenido = `
    <img class="producto__imagen" src="${imageUrl}" alt="">
    <p class="producto__nombre">${name}</p>
    <p class="${price}">$ 60.00</p>
    <a class="producto__enlace" href="../producto.html?id=${id}">Ver producto</a>
    `
    card.innerHTML = contenido;
    card.dataset.id = id;

    return card;
}



const productos = document.querySelector('[data-product]');

export default nuevoProducto;
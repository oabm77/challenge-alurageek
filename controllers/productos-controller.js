const nuevoProducto = (name,imageUrl,price,id,view) =>  {
    const card = document.createElement("div");
    card.classList.add('producto');
    let enlace = `<a class="producto__enlace" href="./producto.html?id=${id}">Ver producto</a>`
    if (view === 'productos') {
        enlace = `<p class="producto__codigo">#${id.toString().padStart(6, '0')}</p>`
    }
    const contenido = `
    <img class="producto__imagen" src="${imageUrl}" alt="">
    <p class="producto__nombre">${name}</p>
    <p class="producto__precio">$ ${price}</p>
    ${enlace}
    `
    card.innerHTML = contenido;
    card.dataset.id = id;

    return card;
}



const productos = document.querySelector('[data-product]');

export default nuevoProducto;
const nuevaCategoria = (category) => {
    const categoryType = category.replace(/ /g,'');
    const categoria = document.createElement("div");
    categoria.classList.add('categoria');
    categoria.setAttribute('data-category-'+categoryType,'');
    const contenido = `
    <div class="categoria__header">
        <h2 class="categoria__titulo">${category}</h2>
        <a class="categoria__vertodo" href="#">Ver todo &#x2794;</a>
    </div>
    <div class="productos" data-product></div>
    `
    categoria.innerHTML = contenido;

    return categoria;
}

export default nuevaCategoria;
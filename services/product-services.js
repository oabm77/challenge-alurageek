// GET

const listaProductos = () => {
    return fetch("http://localhost:3000/productos")
    .then(respuesta => respuesta.json())
    .catch(error => console.log(error))
}

// POST

const crearProductos = (imageURL, name, price, category) => {
    fetch('http://localhost:3000/productos', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            imageURL,
            price,
            name,
            category})
    }).then(respuesta => {
        if(respuesta.ok) {
            return respuesta.body
        }
    })
    throw new Error("No se pudo crear el producto");
}

export const productServices = {
    listaProductos,
    crearProductos
}
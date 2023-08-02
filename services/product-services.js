// GET

const listaProductos = () => {
    // return fetch("http://localhost:3000/productos")
    return fetch("https://64c9c8a8b2980cec85c26989.mockapi.io/producto")
    .then(respuesta => respuesta.json())
    .catch(error => console.log(error))
}

const listarUnProducto = (id) => {
    // return fetch(`http://localhost:3000/productos/${id}`)
    return fetch(`https://64c9c8a8b2980cec85c26989.mockapi.io/producto/${id}`)
    .then(respuesta => respuesta.json())
}

// POST

const crearProductos = (imageUrl, name, price, category) => {
    // return fetch('http://localhost:3000/productos', {
    return fetch('https://64c9c8a8b2980cec85c26989.mockapi.io/producto', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            category,
            name,
            imageUrl,
            price})
    }).then(respuesta => {
        if(respuesta.ok) {
            return respuesta.body
        }
    })
    throw new Error("No se pudo crear el producto");
}

export const productServices = {
    listaProductos,
    listarUnProducto,
    crearProductos
}
const form = document.querySelector('.login__formulario')

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById('correo');
    const passwd = document.getElementById('contrasena');
    window.location.href = "../productos.html";
})
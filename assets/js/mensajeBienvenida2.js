
// Traigo de Storage lo que guarde en "mensajeBienvenida.js" anteriormente
const imagenUsuario = localStorage.getItem("imagenUsuario");
const mensajeBienvenida = localStorage.getItem("mensajeBienvenida");

// Si la encuentro la IMAGEN creo el nodo y le asigno una clase y lo agrego al hijo
if (imagenUsuario) {
    const imagen = document.createElement("img");
    imagen.classList.add("imagen-usuario");
    imagen.setAttribute("src", imagenUsuario);
    const encabezado = document.getElementsByTagName("header")[0]; // Obtengo el primer elemento del header
    encabezado.appendChild(imagen);
}

// Si la encuentro el MENSAJE creo el nodo y le asigno una clase y lo agrego al hijo
if (mensajeBienvenida) {
    const mensaje = document.createElement("p");
    mensaje.classList.add("mensaje-bienvenida");
    mensaje.textContent = mensajeBienvenida;
    const encabezado = document.getElementsByTagName("header")[0]; // Obtengo el primer elemento del header
    encabezado.appendChild(mensaje);
}


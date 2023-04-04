
// Agrego mensaje de Bienvenida del usuario en el Header 
function mostrarMensajeBienvenida() {
    return new Promise((resolve, reject) => {
        const usuarioInput = document.getElementById("usuario");
        const mensajeBienvenida = document.createElement("p");
        mensajeBienvenida.classList.add("mensaje-bienvenida");
        const encabezado = document.getElementsByTagName("header")[0]; // Obtengo el primer elemento del header
        // Agrego la posibilidad que el usuario suba su foto
        const imagenUsuario = document.createElement("img");
        imagenUsuario.classList.add("imagen-usuario");
        encabezado.appendChild(imagenUsuario);

        const inputFoto = document.getElementById("foto");
        inputFoto.addEventListener("change", (event) => {
            const imagenSeleccionada = event.target.files[0];
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                imagenUsuario.setAttribute("src", reader.result);

                // Guardar la imagen en localStorage
                localStorage.setItem("imagenUsuario", reader.result);
            });
            reader.readAsDataURL(imagenSeleccionada);
        });

        // Escucho el evento de completar el nombre y pego em nombre y mensaje en el encabezado
        usuarioInput.addEventListener("input", () => {
            if (usuarioInput.value) {
                mensajeBienvenida.textContent = `Bienvenido(a), ${usuarioInput.value}!`;
                encabezado.appendChild(mensajeBienvenida);

                // Guardar el mensaje de bienvenida en localStorage
                localStorage.setItem("mensajeBienvenida", mensajeBienvenida.textContent);
                resolve();
            } else {
                reject("El campo de usuario está vacío");
            }
        });
    });
}

// Llamo a la función y uso then() para ejecutar código después de que se muestre el mensaje de bienvenida.
mostrarMensajeBienvenida().then(() => {
    console.log("Mensaje de bienvenida mostrado correctamente");

}).catch((error) => {
    console.log("Error al mostrar el mensaje de bienvenida:", error);

}); 



        // Agrego mensaje de Bienvida en el Header
        const usuarioInput = document.getElementById("usuario");
        const mensajeBienvenida = document.createElement("p");
        mensajeBienvenida.classList.add("mensaje-bienvenida");
        const encabezado = document.getElementsByTagName("header")[0];

        usuarioInput.addEventListener("input", () => {
            mensajeBienvenida.textContent = `Bienvenido(a), ${usuarioInput.value}!`;
            encabezado.appendChild(mensajeBienvenida);
        });
        
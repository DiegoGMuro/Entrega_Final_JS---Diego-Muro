
        // Agrego mensaje de Bienvida en el Header


        const usuarioInput = document.getElementById("usuario");
        const mensajeBienvenida = document.createElement("p");
        mensajeBienvenida.classList.add("mensaje-bienvenida");
        const encabezado = document.getElementsByTagName("header")[0]; // Obtengo el primer elemento del header

        // Escucho el evento de completar el nombre y pego em nombre y mensaje en el encabezado
        usuarioInput.addEventListener("input", () => {
            mensajeBienvenida.textContent = `Bienvenido(a), ${usuarioInput.value}!`;
            encabezado.appendChild(mensajeBienvenida);
        });
        
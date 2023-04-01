// Autenticar contraseña 
const maxIntentos = 3;
let intentos = 0;
const psw = document.getElementById("psw");
const mensaje = document.getElementById("mensaje");
const tituloCiudad = document.getElementById('ciudades');
const ciudadSelect = document.createElement('select');
const url = "assets/js/ciudades.json"

let ciudades = [];

fetch(url)
    .then(response => response.json())
    .then(data => {
        ciudades = data;
        cargarCiudades(ciudades);
    })

function cargarCiudades(ciudades) {
    ciudades.forEach(ciudad => {
        const option = document.createElement('option');
        option.text = `${ciudad.ciudad}`;
        ciudadSelect.appendChild(option);
    });
}

tituloCiudad.appendChild(ciudadSelect);
ciudadSelect.style.display = 'block';
ciudadSelect.style.margin = '0 auto';

// Se redirige a otro HTML con Galeria de fotos de ciudades
document.getElementById("submitBtn").addEventListener("click", function () {
    window.location.assign("sub-pages/ciudades.html");

});


/* for (const ciudad of ciudades) {
    const option = document.createElement('option');
    option.text = `${ciudad.ciudad}`;
    ciudadSelect.appendChild(option);
} */

/* const ciudadSelect = document.createElement('select');
for (let index = 0; index < ciudades.length; index++) {
    ciudadSelect.innerHTML += `<option value="${ciudades[index].ciudad}">${ciudades[index].ciudad}</option>`;
}*/

/*  const ciudadSelect = document.createElement('select');
for (const ciudad of ciudades) {
    ciudadSelect.innerHTML += `<option value="${ciudad.ciudad}">${ciudad.ciudad}</option>`;
} */


// Se renderiza la imagen de la ciudad seleccionada 
const contenedorImagen = document.createElement('div');
tituloCiudad.appendChild(contenedorImagen);

ciudadSelect.addEventListener('change', function () {
    const imagen = document.createElement('img');
    contenedorImagen.innerHTML = `<img class="imagen-atractiva" src="assets/js/${ciudadSelect.value}.jpg"/>`;
    contenedorImagen.appendChild(imagen);
});


// Evento de ingresar al sistema con SUBMIT
psw.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
    const pswUsuario = psw.password.value;
    const pswAutenticada = sessionStorage.getItem('password') // Uso la psw guardada anteriormente en 'generacionPsw.js'
    if (pswUsuario === pswAutenticada) {
        //mensaje.innerHTML = "Su contraseña es correcta, proceda a cotizar viajes";
        swal.fire({
            title: "¡Contraseña correcta!",
            text: "Proceda a cotizar viajes",
            icon: "success",
        });

        // Condiciones de incrementos por estadia
        const incremEstadia = (dias) => {
            if (dias >= 1 && dias <= 7) {
                return 0.4;
            } else if (dias >= 8 && dias <= 14) {
                return 0.3;
            } else if (dias >= 15 && dias <= 21) {
                return 0.2;
            } else if (dias >= 22 && dias <= 28) {
                return 0.1;
            } else {
                return 0;
            }
        }

        // Agrego al carrito - calculo valores - transformo en JSON y guardo con SetItem
        let carrito = [];
        const agregarCarrito = () => {
            const ciudad = ciudadSelect.value;
            const usuario = document.getElementById("usuario").value
            const pasajeros = document.getElementById("pasajeros").value;
            const dias = document.getElementById("dias").value;
            const tarifa = ciudades.find((c) => c.ciudad === ciudad).tarifa;
            const precios = tarifa * pasajeros;
            const incrementos = incremEstadia(dias);
            const total = precios * (1 + incrementos);
            const item = { usuario, ciudad, pasajeros, dias, precios, incrementos, total };
            carrito.push(item);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            updatecarrito();
        };


        // Actualizo carrito y armo la tabla
        const updatecarrito = () => {
            const carritoDiv = document.getElementById("carrito");
            //Acumulo los ITEMS de la funcion "agregarCarrito" con REDUCE
            const table = carrito.reduce((acumulado, item) => {
                const fila = `<tr><td>${item.usuario}</td><td>${item.ciudad}</td><td>${item.pasajeros}</td><td>${item.dias}</td><td>$${item.precios.toLocaleString('es-AR')}</td><td>${item.incrementos * 100}%</td><td>$${item.total.toLocaleString('es-AR')}</td><td><button class="eliminar-ciudad" data-ciudad="${item.ciudad}">Borrar</button></td></tr>`;
                return acumulado + fila;
            }, "<table><tr><th>Usuario</th><th>Ciudad</th><th>Pasajeros</th><th>Días de estancia</th><th>Precio base</th><th>Incremento</th><th>Total</th><th></th></tr>");
            //Acumulo el TOTAL GENERAL de los ITEMS de la funcion "agregarCarrito" con REDUCE
            const totalprecios = carrito.reduce((acumulado, item) => acumulado + item.total, 0);
            const tablaConTotal = `${table}<tr><td></td><td></td><td></td><td></td><td></td><td></td><td><strong style="font-size:larger;color: blue;">Total general:</strong><span style="color: blue;"> $${totalprecios.toLocaleString('es-AR')}</td></tr></table>`;
            carritoDiv.innerHTML = tablaConTotal;
        };


        const comprarCarrito = () => {
            const botonComprar = document.getElementById("comprar");
            updatecarrito();
            if (carrito.length > 0) {
                botonComprar.addEventListener("click", function () {
                    Swal.fire({
                        icon: 'success',
                        title: 'Gracias por su cotizacion!!',
                        html: 'Usted será redirigido a nuestra plataforma de pagos',
                        footer: 'Aceptamos Visa, Mastercard y American Express',
                        confirmButtonText: 'Aceptar',
                        showCancelButton: true,
                        cancelButtonText: 'Cancelar',
                        iconHtml: '<img src="icon-256x256.png" style="width: 80px; height: 80px; border: none;">',
                        customClass: {
                            icon: 'swal2-icon-custom'
                        }
                    }).then(function (result) {
                        if (result.isConfirmed) {
                            window.location.href = 'https://www.mercadopago.com.ar';
                        }
                    });
                });
                //console.log("Compra realizada exitosamente");
            } else {
                botonComprar.addEventListener("click", function () {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Error!',
                        text: 'Tu carrito está vacío',
                        confirmButtonText: 'Aceptar'
                    });
                });
                //console.log("No hay elementos en el carrito para comprar");
            }
        };


        // Finalizo la cotizacion y limpio la tabla
        const finalizarCarrito = () => {
            carrito = [];
            localStorage.removeItem("carrito");
            updatecarrito();

            // Mostrar alerta de éxito usando Toastyfy
            Toastify({
                text: "La cotización ha sido finalizada exitosamente.",
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                duration: 3000,
                style: {
                    font: "bold 24px 'Helvetica Neue', sans-serif"
                }
            }).showToast();
        };

        // Eventos de agregar, resetear y comprar carrito
        document.getElementById("agregar").addEventListener("click", agregarCarrito);
        document.getElementById("resetear").addEventListener("click", () => {
            // Mostrar alerta de advertencia usando Toastyfy
            Toastify({
                text: "¿Estás seguro de que deseas finalizar la cotización?",
                backgroundColor: "linear-gradient(to right, #ff6e7f, #bfe9ff)",
                style: {
                    font: "bold 24px 'Helvetica Neue', sans-serif"
                },
                duration: 5000,
                close: true,
                gravity: "top",
                position: "center",
                stopOnFocus: true,
                onClick: function () {
                    finalizarCarrito();
                }
            }).showToast();
        });
        document.getElementById("comprar").addEventListener("click", comprarCarrito);



        // Evento para eliminar ciudades de la tabla renderizada
        document.addEventListener("click", (event) => {
            if (event.target.classList.contains("eliminar-ciudad")) {
                const ciudad = event.target.dataset.ciudad; //Obtengo el atributo "data-ciudad"
                // Mostrar Sweet Alert para confirmar eliminación
                Swal.fire({
                    title: '¿Estás seguro?',
                    text: `¿Deseas eliminar la ciudad ${ciudad}?`,
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sí, eliminar',
                    cancelButtonText: 'Cancelar'
                }).then((result) => {
                    if (result.isConfirmed) {

                        //Filtro para ver solamente cualquier ciudad que no esta en la Const ciudad y lo guardo en el localStorage
                        carrito = carrito.filter((item) => item.ciudad !== ciudad);
                        localStorage.setItem("carrito", JSON.stringify(carrito));
                        updatecarrito();
                        Swal.fire(
                            '¡Eliminado!',
                            `La ciudad ${ciudad} ha sido eliminada del carrito.`,
                            'success'
                        )
                    }
                })
            }
        });

        // Obtener el carrito guardado en localStorage, si existe
        const carritoGuardado = localStorage.getItem("carrito");
        if (carritoGuardado) {
            carrito = JSON.parse(carritoGuardado);
            updatecarrito();
        }


        // Sin ingreso mal la contraseña voy al ELSE
    } else {
        intentos++;
        if (intentos < maxIntentos) {
            //mensaje.innerHTML = `Contraseña incorrecta. Le quedan ${maxIntentos - intentos} intentos.`;
            swal.fire({
                title: "¡Contraseña incorrecta!",
                text: `Le quedan ${maxIntentos - intentos} intentos.`,
                icon: "error",
            });
        } else {
            //mensaje.innerHTML = "Ha excedido el número máximo de intentos. Acceso bloqueado.";
            swal.fire({
                title: "¡Acceso bloqueado!",
                text: "Ha excedido el número máximo de intentos.",
                icon: "warning",
            });
            psw.password.disabled = true; // Desactivo el ingreso de contraseña después de agotar los intentos
            psw.querySelector("button[type=submit]").disabled = true; // Desactivo el botón de enviar (CSS), después de agotar los intentos.
        }
    }
});




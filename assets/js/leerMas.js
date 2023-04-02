/* function alternarTexto() {
    esconderTexto.classList.toggle('mostrarTexto');

    if (esconderTexto.classList.contains('mostrarTexto')) {
        botonLeerMas.innerHTML = 'Leer menos'
    }
    else {
        botonLeerMas.innerHTML = 'Leer mas'
    }
}
 */



/* let botonLeerMas = document.getElementById('botonLeerMas');
let esconderTexto = document.getElementById('esconderTexto');

// Escucho el "click" y ejecuto la funcion alternarTexto
botonLeerMas.addEventListener('click', alternarTexto);

// Valido si la CLASE "mostrarTexto" esta activada
function alternarTexto() {
    esconderTexto.classList.toggle('mostrarTexto');
    botonLeerMas.innerHTML = esconderTexto.classList.contains('mostrarTexto') ? 'Leer menos' : 'Leer más';
    } */
    


let botonLeerMas = document.getElementById('botonLeerMas');
let esconderTexto = document.getElementById('esconderTexto');

// Escucho el "click" y ejecuto la funcion alternarTexto
botonLeerMas.addEventListener('click', alternarTexto);

// Valido si la CLASE "mostrarTexto" esta activada
function alternarTexto() {
    // Creo una promesa que se resuelve después de cambiar la clase del elemento
    const promesa = new Promise((resolver) => {
        esconderTexto.classList.toggle('mostrarTexto');
        resolver();
    });

    // Espera a que se resuelva la promesa antes de actualizar el texto del botón
    async function actualizarBoton() {
        await promesa;
        botonLeerMas.innerHTML = esconderTexto.classList.contains('mostrarTexto') ? 'Leer menos' : 'Leer más';
    }

    actualizarBoton();
}

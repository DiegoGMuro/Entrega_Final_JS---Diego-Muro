
let botonLeerMas = document.getElementById('botonLeerMas');
let esconderTexto = document.getElementById('esconderTexto');

// Escucho el "click" y ejecuto la funcion alternarTexto
botonLeerMas.addEventListener('click', alternarTexto);

// Valido si la CLASE "mostrarTexto" esta activada
function alternarTexto() {
    esconderTexto.classList.toggle('mostrarTexto');

    if (esconderTexto.classList.contains('mostrarTexto')) {
        botonLeerMas.innerHTML = 'Leer menos'
    }
    else {
        botonLeerMas.innerHTML = 'Leer mas'
    }

}

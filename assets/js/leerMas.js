
let botonLeerMas = document.getElementById('botonLeerMas');
let esconderTexto = document.getElementById('esconderTexto');

// Escucho el "click" y ejecuto la función "alternarTexto"
botonLeerMas.addEventListener('click', alternarTexto);

// Valido si la CLASE "mostrarTexto" está activada
function alternarTexto() {
    // Creo una promesa que se resuelve después de cambiar la clase del elemento
    const promesa = new Promise((resolve, reject) => {
        try {
            esconderTexto.classList.toggle('mostrarTexto');
            resolve();
        } catch (error) {
            reject(error);
        }
    });

    // Espera a que se resuelva la promesa antes de actualizar el texto del botón
    async function actualizarBoton() {
        try {
            await promesa;
            botonLeerMas.innerHTML = esconderTexto.classList.contains('mostrarTexto') ? 'Leer menos' : 'Leer más';
        } catch (error) {
            console.log('Ocurrió un error: ' + error);
        }
    }

    actualizarBoton();
}

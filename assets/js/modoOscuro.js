
/*-------------- Modo oscuro---------------------------------*/

// Selecciono el slider del HTML y lo guardo en una variable
const sliderModo = document.getElementById('slider');

// Valido si el valor del slider está en modo oscuro (1) o claro (0)
function cambiarModo() {
    if (sliderModo.value == 1) {
        document.body.classList.add('modoOscuro');
        localStorage.setItem('modo', 'oscuro');
    } else {
        document.body.classList.remove('modoOscuro');
        localStorage.setItem('modo', 'claro');
    }
}

// Recupero del local storage y aplico al cuerpo y al slider
if (localStorage.getItem('modo') === 'oscuro') {
    document.body.classList.add('modoOscuro');
    sliderModo.value = 1;
} else {
    document.body.classList.remove('modoOscuro');
    sliderModo.value = 0;
}

// Escucho el cambio en el slider y ejecuto la función cambiarModo
sliderModo.addEventListener('input', cambiarModo);
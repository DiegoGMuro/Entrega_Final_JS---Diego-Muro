/* // Selecciono el ID "modo" del HTML y lo guardo en variable botonModo
const botonModo = document.getElementById('modo');

// Valido si la CLASE "modoOscuro" esta activada
function cambiarModo() {
    document.body.classList.toggle('modoOscuro');


 // Si modoOscuro esta presente se guarda en el local storage, sino guarda el modoClaro
    if (document.body.classList.contains('modoOscuro')) {
        localStorage.setItem('modo', 'oscuro');
    } else {
        localStorage.setItem('modo', 'claro');
    }

// Si la clase modoOscuro esta presente, se cambia a modoClaro, sino va a modoOscuro
    if (document.body.classList.contains('modoOscuro')) {
        botonModo.textContent = 'Ligth mode';
    } else {
        botonModo.textContent = 'Dark mode';
    }
}

// Se recupera del local storage y se aplica al cuerpo y al boton	
if (localStorage.getItem('modo') === 'oscuro') {
    document.body.classList.add('modoOscuro');
    botonModo.textContent = 'Ligth mode';
} else {
    document.body.classList.remove('modoOscuro');
    botonModo.textContent = 'Dark mode';
}

// Escucho el "click" y ejecuto la funcion cambiarModo
botonModo.addEventListener('click', cambiarModo); */



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
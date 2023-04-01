// Selecciono el ID "modo" del HTML y lo guardo en variable botonModo
const botonModo = document.getElementById('modo');

// Valido si la CLASE "modoOscuro" esta activada
function cambiarModo() {
    document.body.classList.toggle('modoOscuro');
// Si modoOscuro esta presente se guarda en el local storage, sino guarda el modoClaro
    document.body.classList.contains('modoOscuro') ? localStorage.setItem('modo', 'oscuro')
        : localStorage.setItem('modo', 'claro');
}

/*     if (document.body.classList.contains('modoOscuro')) {
        localStorage.setItem('modo', 'oscuro');
    } else {
        localStorage.setItem('modo', 'claro');
    }
 */
    // Si la clase modoOscuro esta presente, se cambia a modoClaro, sino va a modoOscuro
    botonModo.textContent = document.body.classList.contains('modoOscuro') ? 'Ligth mode' : 'Dark mode';


/*     if (document.body.classList.contains('modoOscuro')) {
        botonModo.textContent = 'Ligth mode';
    } else {
        botonModo.textContent = 'Dark mode';
    }
} */

// Se recupera del local storage y se aplica al cuerpo y al boton	
localStorage.getItem('modo') === 'oscuro' ? (document.body.classList.add('modoOscuro'), botonModo.textContent = 'Light mode')
: (document.body.classList.remove('modoOscuro'), botonModo.textContent = 'Dark mode');


/* if (localStorage.getItem('modo') === 'oscuro') {
    document.body.classList.add('modoOscuro');
    botonModo.textContent = 'Ligth mode';
} else {
    document.body.classList.remove('modoOscuro');
    botonModo.textContent = 'Dark mode';
}
 */

// Escucho el "click" y ejecuto la funcion cambiarModo
botonModo.addEventListener('click', cambiarModo);
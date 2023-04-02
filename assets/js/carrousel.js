
//  Selecciono el carrusel, el botón de retroceso y el botón de avance usando los selectores de clase 
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
// Se establece variable índice en cero y se obtiene el ancho de la primera foto. Se cuenta el número de fotos del carrusel
let index = 0;
const anchoFoto = carousel.querySelector('.carousel-item').clientWidth;
const cuentaDeFotos = carousel.querySelectorAll('.carousel-item').length;

// Cuando presiono boton ANTERIOR
prevButton.addEventListener('click', () => {
    index = Math.max(index - 1, 0);
    carousel.style.transform = `translateX(-${index * anchoFoto}px)`;
});

// Cuando presiono boton SIGUIENTE
nextButton.addEventListener('click', () => {
    index = Math.min(index + 1, cuentaDeFotos - 1);
    carousel.style.transform = `translateX(-${index * anchoFoto}px)`;
});

// Cuando cambio tamanio de pantalla
window.addEventListener('resize', () => {
    const newAnchoFoto = carousel.querySelector('.carousel-item').clientWidth;
    if (newAnchoFoto !== anchoFoto) {
        anchoFoto = newAnchoFoto;
        carousel.style.transform = `translateX(-${index * anchoFoto}px)`;
    }
});
const carousel = document.getElementById('carousel');

let isDragging = false;
let startX;
let scrollLeft;

// Evento al presionar el mouse
carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    carousel.classList.add('active');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

// Evento al mover el mouse
carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return; // Si no se está arrastrando, salir
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Ajusta la velocidad de desplazamiento
    carousel.scrollLeft = scrollLeft - walk;
});

// Evento al soltar el mouse
carousel.addEventListener('mouseup', () => {
    isDragging = false;
    carousel.classList.remove('active');
});

// Evento si el mouse sale del contenedor
carousel.addEventListener('mouseleave', () => {
    isDragging = false;
    carousel.classList.remove('active');
});
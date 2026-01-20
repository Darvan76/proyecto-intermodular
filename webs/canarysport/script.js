// ==================== CARRUSEL ==================== 
let currentSlide = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth;
    const gap = 24; // 1.5rem en píxeles
    
    const itemsToShow = window.innerWidth > 768 ? 4 : (window.innerWidth > 480 ? 2 : 1);
    const maxSlides = items.length - itemsToShow;
    
    currentSlide += direction;
    
    // Hacer que sea un bucle infinito
    if (currentSlide > maxSlides) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = maxSlides;
    }
    
    const offset = -(currentSlide * (itemWidth + gap));
    carousel.style.transform = `translateX(${offset}px)`;
}

// Ajustar el carrusel en caso de redimensionamiento
window.addEventListener('resize', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    
    if (window.innerWidth <= 768) {
        currentSlide = Math.min(currentSlide, Math.max(0, items.length - 2));
    } else if (window.innerWidth <= 480) {
        currentSlide = 0;
    }
    
    moveCarousel(0);
});

// ==================== MENÚ HAMBURGUESA ====================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});


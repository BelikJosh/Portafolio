        
    // Función para abrir el lightbox
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightbox.style.display = "block";
    lightboxImg.src = imageSrc;
    
    // Deshabilitar scroll del body
    document.body.style.overflow = "hidden";
}

// Función para cerrar el lightbox
function closeLightbox(event) {
    // Evitar que el evento se propague al modal
    if (event) {
        event.stopPropagation();
    }
    
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = "none";
    
    // Habilitar scroll del body
    document.body.style.overflow = "auto";
}

// Cerrar al presionar ESC
document.addEventListener('keydown', function(event) {
    const lightbox = document.getElementById('lightbox');
    if (event.key === "Escape" && lightbox.style.display === "block") {
        closeLightbox();
    }
});
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        const fadeElements = document.querySelectorAll('.skill-card, .education-card, .ability-card');
        
        const fadeInOnScroll = () => {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };
        fadeElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        
        window.addEventListener('scroll', fadeInOnScroll);
        window.addEventListener('load', fadeInOnScroll);

        // Animación adicional para los tech-items
document.querySelectorAll('.tech-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.05)';
    item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  });
  
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
    item.style.boxShadow = 'none';
  });
});

// Inicializar todos los carruseles al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.project-carousel').forEach(initCarousel);
});

function initCarousel(carousel) {
    const images = carousel.querySelectorAll('.carousel-images img');
    const indicatorsContainer = carousel.querySelector('.carousel-indicators');
    
    // Crear indicadores
    images.forEach((_, index) => {
        const indicator = document.createElement('span');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => {
            showImage(carousel, index);
        });
        indicatorsContainer.appendChild(indicator);
    });
    
    // Mostrar primera imagen
    showImage(carousel, 0);
}

// Función para mover el carrusel
function moveProjectCarousel(button, direction) {
    const carousel = button.closest('.project-carousel');
    const images = carousel.querySelectorAll('.carousel-images img');
    const currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    
    let newIndex = currentIndex + direction;
    
    // Circular navigation
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;
    
    showImage(carousel, newIndex);
}

// Mostrar imagen específica
function showImage(carousel, index) {
    const images = carousel.querySelectorAll('.carousel-images img');
    const indicators = carousel.querySelectorAll('.carousel-indicators span');
    
    // Ocultar todas las imágenes
    images.forEach(img => img.classList.remove('active'));
    
    // Desactivar todos los indicadores
    indicators.forEach(ind => ind.classList.remove('active'));
    
    // Mostrar imagen seleccionada
    images[index].classList.add('active');
    indicators[index].classList.add('active');
}
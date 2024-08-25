const carouselInner = document.querySelector('.carousel-inner');
const indicators = document.querySelectorAll('.carousel-indicators button');
let currentSlide = 0;

document.querySelector('.carousel-control-prev').addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : indicators.length - 1;
    updateCarousel();
});

document.querySelector('.carousel-control-next').addEventListener('click', () => {
    currentSlide = (currentSlide < indicators.length - 1) ? currentSlide + 1 : 0;
    updateCarousel();
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
    });
});

function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[currentSlide].classList.add('active');
}

function autoSlide() {
    currentSlide = (currentSlide < indicators.length - 1) ? currentSlide + 1 : 0;
    updateCarousel();
}

// Configura o intervalo para mudar automaticamente os slides a cada 3 segundos
setInterval(autoSlide, 5000);

const carouselInnerProdutos = document.querySelector('.carousel-inner-produtos');
const items = document.querySelectorAll('.carousel-item-produtos');
const totalItems = items.length;
let visibleItems = window.innerWidth > 768 ? 5 : 1; // Define o número de itens visíveis conforme a largura da tela
let currentIndex = 0;

window.addEventListener('resize', () => {
    visibleItems = window.innerWidth > 768 ? 5 : 1;
    updateCarouselProdutos();
});

document.querySelector('.carousel-control-prev-produtos').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - visibleItems; // Volta ao início do carrossel
    }
    updateCarouselProdutos();
});

document.querySelector('.carousel-control-next-produtos').addEventListener('click', () => {
    if (currentIndex < totalItems - visibleItems) {
        currentIndex++;
    } else {
        currentIndex = 0; // Volta ao início do carrossel
    }
    updateCarouselProdutos();
});

function updateCarouselProdutos() {
    const translateXValue = -(currentIndex * (103.7 / visibleItems));
    carouselInnerProdutos.style.transform = `translateX(${translateXValue}%)`;
}
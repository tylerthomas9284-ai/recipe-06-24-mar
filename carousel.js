// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.getElementById('heroCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('carouselDots');
    
    if (!carouselContainer) return;
    
    // Get first 3 recipes for carousel
    const featuredRecipes = recipes.slice(0, 3);
    let currentSlide = 0;
    let autoplayInterval;
    
    // Create carousel slides
    function createSlides() {
        carouselContainer.innerHTML = '';
        dotsContainer.innerHTML = '';
        
        featuredRecipes.forEach((recipe, index) => {
            // Create slide
            const slide = document.createElement('div');
            slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
            
            const totalTime = recipe.prepTime + recipe.cookTime;
            
            slide.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}" class="carousel-slide-image">
                <div class="carousel-overlay">
                    <div class="carousel-content">
                        <div class="carousel-badge">Featured Recipe</div>
                        <h1>${recipe.title}</h1>
                        <p>${recipe.shortIntro}</p>
                        <div class="carousel-actions">
                            <a href="recipe.html?id=${recipe.id}" class="carousel-btn-primary">Get Recipe</a>
                            <div class="carousel-info">
                                <div class="carousel-info-item">
                                    <span>⏱️</span>
                                    <span>${totalTime} min</span>
                                </div>
                                <div class="carousel-info-item">
                                    <span>🍽️</span>
                                    <span>${recipe.servings} servings</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            carouselContainer.appendChild(slide);
            
            // Create dot
            const dot = document.createElement('button');
            dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
    }
    
    // Go to specific slide
    function goToSlide(index) {
        const slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.carousel-dot');
        
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = index;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        
        resetAutoplay();
    }
    
    // Next slide
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % featuredRecipes.length;
        goToSlide(nextIndex);
    }
    
    // Previous slide
    function prevSlide() {
        const prevIndex = (currentSlide - 1 + featuredRecipes.length) % featuredRecipes.length;
        goToSlide(prevIndex);
    }
    
    // Autoplay
    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 5000);
    }
    
    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }
    
    function resetAutoplay() {
        stopAutoplay();
        startAutoplay();
    }
    
    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // Pause on hover
    carouselContainer.addEventListener('mouseenter', stopAutoplay);
    carouselContainer.addEventListener('mouseleave', startAutoplay);
    
    // Initialize
    createSlides();
    startAutoplay();
});

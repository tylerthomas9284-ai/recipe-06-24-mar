// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Load featured recipes on home page
    const featuredRecipesContainer = document.getElementById('featuredRecipes');
    if (featuredRecipesContainer) {
        const featured = recipes.slice(0, 6);
        renderRecipes(featured, featuredRecipesContainer);
    }
    
    // Load easy recipes on home page
    const easyRecipesContainer = document.getElementById('easyRecipes');
    if (easyRecipesContainer) {
        const easy = recipes.filter(r => r.difficulty === 'Easy').slice(0, 3);
        renderRecipes(easy, easyRecipesContainer);
    }
    
    // Render recipe cards
    function renderRecipes(recipesArray, container) {
        container.innerHTML = recipesArray.map(recipe => {
            const totalTime = recipe.prepTime + recipe.cookTime;
            return `
                <a href="recipe.html?id=${recipe.id}" class="recipe-card">
                    <img src="${recipe.image}" alt="${recipe.title}" class="recipe-card-image">
                    <div class="recipe-card-content">
                        <span class="recipe-card-badge">${recipe.category}</span>
                        <h3 class="recipe-card-title">${recipe.title}</h3>
                        <p class="recipe-card-description">${recipe.shortIntro}</p>
                        <div class="recipe-card-meta">
                            <span>⏱️ ${totalTime} min</span>
                            <span>🍽️ ${recipe.servings}</span>
                            <span>📊 ${recipe.difficulty}</span>
                        </div>
                    </div>
                </a>
            `;
        }).join('');
    }
});

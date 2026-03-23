// Recipe Detail Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get recipe ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('id');
    
    if (!recipeId) {
        window.location.href = 'index.html';
        return;
    }
    
    // Find the recipe
    const recipe = recipes.find(r => r.id === recipeId);
    
    if (!recipe) {
        window.location.href = 'index.html';
        return;
    }
    
    // Set page title
    document.title = `${recipe.title} - HomeCook`;
    
    // Set hero background
    const recipeHero = document.getElementById('recipeHero');
    recipeHero.style.backgroundImage = `url(${recipe.image})`;
    
    // Render hero content
    const recipeHeroContent = document.getElementById('recipeHeroContent');
    recipeHeroContent.innerHTML = `
        <h1>${recipe.title}</h1>
        <p>${recipe.shortIntro}</p>
    `;
    
    // Render meta info
    const recipeMeta = document.getElementById('recipeMeta');
    const totalTime = recipe.prepTime + recipe.cookTime;
    recipeMeta.innerHTML = `
        <div class="recipe-meta-item">
            <span>👨‍🍳</span>
            <div>
                <strong>Servings</strong>
                <div>${recipe.servingSize}</div>
            </div>
        </div>
        <div class="recipe-meta-item">
            <span>⏱️</span>
            <div>
                <strong>Total Time</strong>
                <div>${totalTime} minutes</div>
            </div>
        </div>
        <div class="recipe-meta-item">
            <span>🥘</span>
            <div>
                <strong>Prep Time</strong>
                <div>${recipe.prepTime} min</div>
            </div>
        </div>
        <div class="recipe-meta-item">
            <span>🔥</span>
            <div>
                <strong>Cook Time</strong>
                <div>${recipe.cookTime} min</div>
            </div>
        </div>
        <div class="recipe-meta-item">
            <span>📊</span>
            <div>
                <strong>Difficulty</strong>
                <div>${recipe.difficulty}</div>
            </div>
        </div>
    `;
    
    // Render badges
    const recipeBadges = document.getElementById('recipeBadges');
    const badgeClass = recipe.difficulty === 'Easy' ? 'badge-easy' : recipe.difficulty === 'Medium' ? 'badge-medium' : 'badge-advanced';
    recipeBadges.innerHTML = `
        <span class="badge ${badgeClass}">${recipe.difficulty}</span>
        <span class="badge" style="background: #DBEAFE; color: #1E40AF;">${recipe.category}</span>
    `;
    
    // Render ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    ingredientsList.innerHTML = recipe.ingredients.map(ingredient => 
        `<li>${ingredient}</li>`
    ).join('');
    
    // Render instructions
    const instructionsList = document.getElementById('instructionsList');
    instructionsList.innerHTML = recipe.instructions.map(instruction => 
        `<li>${instruction}</li>`
    ).join('');
    
    // Render tips
    const tipsList = document.getElementById('tipsList');
    tipsList.innerHTML = recipe.tips.map(tip => 
        `<li>${tip}</li>`
    ).join('');
    
    // Render nutrition
    const nutritionList = document.getElementById('nutritionList');
    nutritionList.innerHTML = recipe.nutritionHighlights.map(nutrition => 
        `<li>${nutrition}</li>`
    ).join('');
    
    // Render occasions
    const occasionsList = document.getElementById('occasionsList');
    occasionsList.innerHTML = recipe.bestOccasions.map(occasion => 
        `<li>${occasion}</li>`
    ).join('');
});

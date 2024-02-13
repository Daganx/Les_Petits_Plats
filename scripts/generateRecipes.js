import { recipes } from '../data/recipes.js';

function generateAllRecipes() {
    const cardsContainer = document.getElementById('cards-container');

    // Pour chaque recette dans le tableau recipes
    recipes.forEach(recipe => {
        const recipeContainer = document.createElement('article');
        recipeContainer.setAttribute('id','card-content');
        recipeContainer.innerHTML = `
        <div id="card-img">
            <span id="recipe-time">${recipe.time}min</span>
            <img class="recipe-image" src="assets/images/recipes/${recipe.image}" alt="${recipe.name}">
        </div>
        <div id="card-text">
            <h2 id="recipe-name">${recipe.name}</h2>
            <h3>RECETTE</h3>
            <p id="recipe-description">${recipe.description}</p>
            <h3>INGRÉDIENTS</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `
                <li>
                    <p class="ingredient-name">${ingredient.ingredient}</p>
                    <span class="ingredient-quantity">${ingredient.quantity ? ' ' + ingredient.quantity + (ingredient.unit ? ' ' + ingredient.unit : '') : ''}</span>
                </li>
            `).join('')}
        </ul>
        </div>
`;
        cardsContainer.appendChild(recipeContainer);
    });
}

export { generateAllRecipes };
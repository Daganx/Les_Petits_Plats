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
        <div>
            <h2>${recipe.name}</h2>
            <h3>RECETTE</h3>
            <p>${recipe.description}</p>
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `
                    <li>${ingredient.ingredient}${ingredient.quantity ? ': ' + ingredient.quantity + (ingredient.unit ? ' ' + ingredient.unit : '') : ''}</li>
                `).join('')}
            </ul>
        </div>
        `;
        cardsContainer.appendChild(recipeContainer);
    });
}

export { generateAllRecipes };
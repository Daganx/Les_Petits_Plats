import { recipes } from "../data/recipes.js";
function generateRecipe() {
    const firstRecipe = recipes[0];
    const recipeContainer = document.createElement('article');
    recipeContainer.setAttribute('id', 'card-content')
    // Crée et ajoute les éléments HTML pour afficher les informations de la recette
    recipeContainer.innerHTML = `
    <div id="card-img">
        <span id="recipe-time">${firstRecipe.time}min</span>
        <img class="recipe-image" src="assets/images/recipes/${firstRecipe.image}" alt="${firstRecipe.name}">
    </div>
    <div id="card-text">
        <h2>${firstRecipe.name}</h2>
        <h3>RECETTE</h3>
        <p>${firstRecipe.description}</p>
        <h3>INGRÉDIENTS</h3>
        <ul>
            ${firstRecipe.ingredients.map(ingredient => `
                <li>
                    <span class="ingredient-name">${ingredient.ingredient} :</span>
                    <span class="ingredient-quantity">${ingredient.quantity ? ' ' + ingredient.quantity + (ingredient.unit ? ' ' + ingredient.unit : '') : ''}</span>
                </li>
            `).join('')}
        </ul>
    </div>
`;
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.appendChild(recipeContainer);
}

export { generateRecipe }
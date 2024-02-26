import { cardDOM } from "./cardDOM.js";

function generateAllRecipes(recipes) {
    const cardsContainer = document.getElementById('cards-container');

    recipes.forEach(recipe => {
        const recipeCard = cardDOM(recipe);
        cardsContainer.appendChild(recipeCard);
    });
}

export { generateAllRecipes };
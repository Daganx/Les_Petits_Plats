import { cardDOM } from "./cardDOM.js";

function displayAllRecipes(recipes) {
    const cardsContainer = document.getElementById('cards-container');

    recipes.forEach(recipe => {
        const recipeCard = cardDOM(recipe);
        cardsContainer.appendChild(recipeCard);
    });
}

export { displayAllRecipes };
import { recipes } from "../data/recipes.js";
import { cardDOM } from "./cardDOM.js";

function generateAllRecipes() {
    const cardsContainer = document.getElementById('cards-container');

    recipes.forEach(recipe => {
        const recipeCard = cardDOM(recipe);
        cardsContainer.appendChild(recipeCard);
    });
}

export { generateAllRecipes };
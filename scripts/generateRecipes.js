import { recipes } from "../data/recipes.js";
import { createRecipeCard } from "./card.js";

function generateAllRecipes() {
    const cardsContainer = document.getElementById('cards-container');

    recipes.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe);
        cardsContainer.appendChild(recipeCard);
    });
}

export { generateAllRecipes };
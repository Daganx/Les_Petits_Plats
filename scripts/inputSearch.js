import { recipes } from "../data/recipes.js";

const allRecipes = recipes.slice();

function filterRecipes(searchTerm) {
    return allRecipes.filter(recipe => {
        return (
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm) ||
            recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(searchTerm))
        );
    });
}

function searchFilterMethod(displayRecipes) {
    inputSearch.addEventListener('input', (event) => {
        const searchTerm = event.target.value.trim().toLowerCase();

        if (searchTerm.length >= 3) {
            const filteredRecipes = filterRecipes(searchTerm);
            displayRecipes(filteredRecipes);
        } else {
            displayRecipes(allRecipes);
        }
    });
}

export { searchFilterMethod };
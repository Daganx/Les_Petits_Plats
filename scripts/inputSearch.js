import { recipes } from "../data/recipes.js";

const allRecipes = recipes;

function filterRecipesByTerm(searchTerm) {
    const filteredRecipes = [];
    for (let i = 0; i < allRecipes.length; i++) {
        const recipe = allRecipes[i];
        if (
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm) ||
            recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(searchTerm))
        ) {
            filteredRecipes.push(recipe);
        }
    } 
    return filteredRecipes;
}

function handleSearchInput(displayRecipes) {
    const inputSearch = document.getElementById('input-search');
    const errorSearch = document.getElementById('error-search');
    const recipeCount = document.getElementById('recipes-count');

    inputSearch.addEventListener('input', (event) => {
        const searchTerm = event.target.value.trim().toLowerCase();

        if (searchTerm.length >= 3) {
            const filteredRecipes = filterRecipesByTerm(searchTerm);
            displayRecipes(filteredRecipes);
            recipeCount.textContent = `${filteredRecipes.length} recettes`;

            if (filteredRecipes.length > 0) {
                errorSearch.style.display = 'none';
            } else {
                errorSearch.style.display = 'block';
            }
        } else {
            displayRecipes(allRecipes);
            errorSearch.style.display = 'none';
            recipeCount.textContent = `${allRecipes.length} recettes`;
        }
    });
}

export { handleSearchInput };
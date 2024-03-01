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

function updateRecipeCount(count) {
    const recipeCount = document.getElementById('recipes-count');
    recipeCount.textContent = `${count} recettes`;
}

function displayErrorMessage(filteredRecipesLength) {
    const errorSearch = document.getElementById('error-search');

    if (filteredRecipesLength > 0) {
        errorSearch.style.display = 'none';
    } else {
        errorSearch.style.display = 'block';
    }
}


function handleSearchInput(manageDisplayRecipes) {
    const inputSearch = document.getElementById('input-search');

    inputSearch.addEventListener('input', (event) => {
        const searchTerm = event.target.value.trim().toLowerCase();

        if (searchTerm.length >= 3) {
            const filteredRecipes = filterRecipesByTerm(searchTerm);
            manageDisplayRecipes(filteredRecipes);
            updateRecipeCount(filteredRecipes.length)
            displayErrorMessage(filteredRecipes.length);    
        } else {
            manageDisplayRecipes(allRecipes);
            displayErrorMessage(allRecipes.length);
            updateRecipeCount(allRecipes.length);

        }
    });
}

export { handleSearchInput, updateRecipeCount };
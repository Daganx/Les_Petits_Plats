import { recipes } from "../data/recipes.js";
import { ApplyFiltersAndUpdateDisplay } from "./index.js";

const allRecipes = recipes;
let searchTerm = '';

// Filtrez les recettes par terme de recherche
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

// Gérer l'entrée de recherche 
function handleSearchInput() {
    const inputSearch = document.getElementById('inputSearch');

    inputSearch.addEventListener('input', (event) => {
        searchTerm = event.target.value.trim().toLowerCase();

        if (searchTerm.length >= 3) {
            ApplyFiltersAndUpdateDisplay();
            displayErrorMessage(filterRecipesByTerm(searchTerm).length);
        } else {
            ApplyFiltersAndUpdateDisplay();
            displayErrorMessage(filterRecipesByTerm(searchTerm).length);
        }
    });
}

export { handleSearchInput, updateRecipeCount, filterRecipesByTerm, searchTerm };
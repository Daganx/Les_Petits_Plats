import { recipes } from "../data/recipes.js";
import { displayRecipes } from "./generateRecipes.js";
import { ApplyFiltersAndUpdateDisplay } from "./index.js";

const allRecipes = recipes;
let searchTerm = '';

// Filtrez les recettes par terme de recherche (ALGORITHME BOUCLE FOR sur name, description et ingredients.)
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
        searchTerm = encodeURIComponent(event.target.value.trim().toLowerCase());

        if (searchTerm.length >= 3) {
            ApplyFiltersAndUpdateDisplay();
        } else {
            // Si la longueur du terme de recherche est inférieure à 3, réaffichez toutes les recettes
            displayRecipes(recipes);
            updateRecipeCount(allRecipes.length);
            displayErrorMessage(allRecipes.length);
        }
    });
}

export { handleSearchInput, updateRecipeCount, filterRecipesByTerm, searchTerm, displayErrorMessage };
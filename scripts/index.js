import { displayRecipes } from './generateRecipes.js';
import { handleDropdownClick } from "./dropdown/dropdownMenu.js";
import { recipes } from "../data/recipes.js";
import { handleSearchInput, updateRecipeCount,searchTerm, filterRecipesByTerm  } from "./inputSearch.js";
import { generateIngredientList, selectedIngredients, filterRecipesByIngredients } from "./dropdown/filterByIngredients.js"; // Importez selectedIngredients

// Cette fonction affiche les recettes filtrées en effaçant d'abord le conteneur de cartes, puis en affichant les nouvelles recettes
function displayFilteredRecipes(recipes) {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = '';
    displayRecipes(recipes);
}
// Cette fonction applique les filtres (termes de recherche et ingrédients sélectionnés) et met à jour l'affichage
function ApplyFiltersAndUpdateDisplay() {
    let filteredRecipes = recipes;
    // Filtrez les recettes par terme de recherche
    if (searchTerm) {
        filteredRecipes = filterRecipesByTerm(searchTerm, filteredRecipes);
    }
    // Filtrez les recettes par ingrédients sélectionnés
    if (selectedIngredients.size > 0) {
        filteredRecipes = filterRecipesByIngredients(selectedIngredients, filteredRecipes);
    }
    displayFilteredRecipes(filteredRecipes);
    updateRecipeCount(filteredRecipes.length);
}

function initializeApp(){
    displayRecipes(recipes);
    handleDropdownClick();
    generateIngredientList();
    handleSearchInput();
    ApplyFiltersAndUpdateDisplay();
}

initializeApp();

export { ApplyFiltersAndUpdateDisplay };
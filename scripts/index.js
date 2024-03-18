import { recipes } from "../data/recipes.js";
import { displayRecipes } from './generateRecipes.js';
import { setupDropdowns } from "./dropdown/dropdownMenu.js";
import { handleSearchInput, updateRecipeCount,searchTerm, filterRecipesByTerm, displayErrorMessage  } from "./inputSearch.js";
import { generateIngredientList, selectedIngredients, filterRecipesByIngredients } from "./dropdown/filterByIngredients.js"; // Importez selectedIngredients
import { selectedAppliances, filterRecipesByAppliances, generateApplianceList } from "./dropdown/filterByAppliances.js"; // Importez selectedAppliances
import { selectedUstensils, filterRecipesByUstensils, generateUstensilList } from "./dropdown/filterByUstensils.js"; // Importez selectedUstensils

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
    if (searchTerm && searchTerm.length >= 3) {
        filteredRecipes = filterRecipesByTerm(searchTerm, filteredRecipes);
    }
    // Filtrez les recettes par ingrédients sélectionnés
    if (selectedIngredients.size > 0) {
        filteredRecipes = filterRecipesByIngredients(selectedIngredients, filteredRecipes);
    }
    // Filtrez les recettes par appareils sélectionnés
    if (selectedAppliances.size > 0) {
        filteredRecipes = filterRecipesByAppliances(selectedAppliances, filteredRecipes);
    }
    // Filtrez les recettes par ustensiles sélectionnés
    if (selectedUstensils.size > 0) {
        filteredRecipes = filterRecipesByUstensils(selectedUstensils, filteredRecipes);
    }
    // Affiche les recettes filtrées, met à jour le nombre de recettes et affiche un message d'erreur si aucune recette n'est trouvée 
    displayFilteredRecipes(filteredRecipes);
    updateRecipeCount(filteredRecipes.length);
    displayErrorMessage(filteredRecipes.length);
}

function initializeApp(){
    displayRecipes(recipes);
    setupDropdowns();
    generateIngredientList();
    generateApplianceList();
    generateUstensilList();
    handleSearchInput();
    updateRecipeCount(recipes.length);
}

initializeApp();

export { ApplyFiltersAndUpdateDisplay };
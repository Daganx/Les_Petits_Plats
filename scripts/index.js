import { displayRecipes } from './generateRecipes.js';
import { handleSearchInput, updateRecipeCount } from "./inputSearch.js";
import { generateIngredientList } from "./filterByIngredients.js";
import { handleDropdownClick } from "./dropdownMenu.js";
import { recipes } from "../data/recipes.js";

export function manageDisplayRecipes(recipes) {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = '';
    displayRecipes(recipes);
}

function initializeApp(){
    displayRecipes(recipes);
    handleDropdownClick();
    updateRecipeCount(recipes.length);
    generateIngredientList();
    handleSearchInput(manageDisplayRecipes);
}

initializeApp();
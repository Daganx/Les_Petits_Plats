import { displayRecipes } from './generateRecipes.js';
import { handleSearchInput, updateRecipeCount } from "./inputSearch.js";
import { generateIngredientList } from "./filterByIngredients.js";
import { recipes } from "../data/recipes.js";

function manageDisplayRecipes(recipes) {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = '';
    displayRecipes(recipes);
}

function initializeApp(){
    displayRecipes(recipes);
    updateRecipeCount(recipes.length);
    generateIngredientList();
    handleSearchInput(manageDisplayRecipes);
}

initializeApp();
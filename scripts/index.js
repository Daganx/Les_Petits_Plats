import { displayAllRecipes } from './generateRecipes.js';
import { handleSearchInput } from "./inputSearch.js";
import { recipes } from "../data/recipes.js";

function displayRecipes(recipes) {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = '';
    displayAllRecipes(recipes);
}

function initializeApp(){
    displayAllRecipes(recipes);
    handleSearchInput(displayRecipes);
}

initializeApp();
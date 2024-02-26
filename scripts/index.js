import { displayAllRecipes } from './generateRecipes.js';
import { handleSearchInput } from "./inputSearch.js";
import { recipes } from "../data/recipes.js";

function clearContainer() {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = '';
}

function displayRecipes(recipes) {
    clearContainer();
    displayAllRecipes(recipes);
}

function initializeApp(){
    displayAllRecipes(recipes);
    handleSearchInput(displayRecipes);
}

initializeApp();
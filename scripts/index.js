import { generateAllRecipes } from './generateRecipes.js';
import { searchForLoop } from "./inputSearch.js";
import { recipes } from "../data/recipes.js";

function clearContainer() {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = '';
}

function displayRecipes(recipes) {
    clearContainer();
    generateAllRecipes(recipes);
}

function init(){
    generateAllRecipes(recipes);
    searchForLoop(displayRecipes);
}

init();
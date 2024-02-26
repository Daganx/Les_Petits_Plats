import { generateAllRecipes } from './generateRecipes.js';
import { searchForLoop } from "./inputSearch.js";
import { recipes } from "../data/recipes.js";

function displayRecipes(recipes) {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = '';
    generateAllRecipes(recipes);
}

function init(){
    generateAllRecipes(recipes);
    searchForLoop(displayRecipes);
}

init();
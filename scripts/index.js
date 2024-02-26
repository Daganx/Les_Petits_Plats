import { generateAllRecipes } from './generateRecipes.js';
import { searchFilterMethod } from "./inputSearch.js";
import { recipes } from "../data/recipes.js";

function displayRecipes(recipes) {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = '';
    generateAllRecipes(recipes);
}

function init(){
    generateAllRecipes(recipes);
    searchFilterMethod(displayRecipes);
}

init();
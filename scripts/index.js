import { displayAllRecipes } from './generateRecipes.js';
import { recipes } from "../data/recipes.js";

function initializeApp(){
    displayAllRecipes(recipes); 
}

initializeApp();
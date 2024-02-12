import { generateRecipe } from "./recipe.js";
import { generateAllRecipes } from './generateRecipes.js';
function init(){
    generateRecipe();
    generateAllRecipes();
}

init();
import { generateAllRecipes } from './generateRecipes.js';
import { searchForLoop } from "./inputSearch.js";
function init() {
    generateAllRecipes();
    searchForLoop();
}

init();
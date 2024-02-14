import { generateAllRecipes } from './generateRecipes.js';
import {searchFilterMethod} from "./inputSearch.js";

function init(){
    generateAllRecipes();
    searchFilterMethod()
}

init();
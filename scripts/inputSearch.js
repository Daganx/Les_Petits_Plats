import { recipes } from "../data/recipes.js";

const allRecipes = recipes.slice();

function filterRecipes(searchTerm) {
    const filteredRecipes = [];
    for (let i = 0; i < allRecipes.length; i++) {
        const recipe = allRecipes[i];
        if (
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm) ||
            recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(searchTerm))
        ) {
            filteredRecipes.push(recipe);
        }
    } 
    return filteredRecipes;
}

function searchForLoop(displayRecipes) {
    const inputSearch = document.getElementById('input-search');
    const errorSearch = document.getElementById('error-search');

    inputSearch.addEventListener('input', (event) => {
        const searchTerm = event.target.value.trim().toLowerCase();

        if (searchTerm.length >= 3) {
            const filteredRecipes = filterRecipes(searchTerm);
            displayRecipes(filteredRecipes);

            if (filteredRecipes.length > 0) {
                errorSearch.style.display = 'none';
            } else {
                errorSearch.style.display = 'block';
            }
        } else {
            displayRecipes(allRecipes);
            errorSearch.style.display = 'none';
        }
    });
}

export { searchForLoop };
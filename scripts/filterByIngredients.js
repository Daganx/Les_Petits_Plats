import { recipes } from "../data/recipes.js";
import { manageDisplayRecipes } from "./index.js";
import { updateRecipeCount } from "./inputSearch.js";

const allRecipes = recipes;
const selectedIngredients = new Set();

function generateIngredientList() {
    const ingredientList = document.getElementById('ingredients-list');
    const ingredients = new Set();

    allRecipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            ingredients.add(ingredient.ingredient);
        });
    });

    ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientList.appendChild(li);
        li.addEventListener('click', () => {
            if (selectedIngredients.has(ingredient)) {
                // If the ingredient is already selected, deselect it
                selectedIngredients.delete(ingredient);
            } else {
                // Otherwise, add it to the list of selected ingredients
                selectedIngredients.add(ingredient);
            }
            // Update recipe display
            updateRecipeDisplay(selectedIngredients);
        });
    });
}

function updateRecipeDisplay(selectedIngredients) {
    let filteredByIngredients = [];

    // Filter recipes by selected ingredients
    if (selectedIngredients.size > 0) {
        filteredByIngredients = allRecipes.filter(recipe =>
            Array.from(selectedIngredients).every(ingredient =>
                recipe.ingredients.some(item => item.ingredient === ingredient)
            )
        );
    } else {
        filteredByIngredients = allRecipes;
    }
    updateRecipeCount(filteredByIngredients.length);
    manageDisplayRecipes(filteredByIngredients);
}

export { generateIngredientList };
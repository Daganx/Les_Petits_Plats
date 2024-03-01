import { recipes } from "../data/recipes.js";

const allRecipes = recipes;

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
    });
}

const dropdownButton = document.getElementById('dropdown-button');
const dropdownMenu = document.getElementById('dropdown');

dropdownButton.addEventListener('click', () => {
    if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
        dropdownMenu.style.display = 'flex';
        dropdownButton.style.borderBottomLeftRadius = '0';
        dropdownButton.style.borderBottomRightRadius = '0';
    } else {
        dropdownMenu.style.display = 'none';
        dropdownButton.style.borderBottomLeftRadius = '';
        dropdownButton.style.borderBottomRightRadius = '';
    }
});


export { generateIngredientList }
import { recipes } from "../data/recipes.js";
import { ApplyFiltersAndUpdateDisplay } from "./index.js";

const allRecipes = recipes;
const selectedIngredients = new Set();

// Générer la liste des ingrédients dans le menu déroulant
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
                // Si l'ingrédient est déjà sélectionné, retirez-le de la liste des ingrédients sélectionnés
                selectedIngredients.delete(ingredient);
                // Retirer l'ingrédient de la liste des tags actifs
                const activeTagsList = document.getElementById('selected-ingredients-list');
                const activeTag = Array.from(activeTagsList.children).find(tag => tag.textContent === ingredient);
                if (activeTag) {
                    activeTagsList.removeChild(activeTag);
                }
                li.classList.remove('selected');
            } else {
                // Ajoutez l'ingrédient à la liste des ingrédients sélectionnés
                selectedIngredients.add(ingredient);
                // Ajout de l'ingrédient sélectionné à la liste des tags actifs
                const activeTagsList = document.getElementById('selected-ingredients-list');
                const span = document.createElement('span');
                span.textContent = ingredient;
                // Création de l'icône de fermeture
                const closeIcon = document.createElement('i');
                closeIcon.classList.add('fa-solid', 'fa-xmark');
                closeIcon.textContent = ''; 
                span.appendChild(closeIcon);
                activeTagsList.appendChild(span);
                span.addEventListener('click', (event) => {
                    event.stopPropagation();
                    selectedIngredients.delete(ingredient);
                    activeTagsList.removeChild(span);
                    li.classList.remove('selected');
                    ApplyFiltersAndUpdateDisplay();
                });
                li.classList.add('selected');
            }
            // Appel de la fonction ApplyFiltersAndUpdateDisplay pour mettre à jour l'affichage
            ApplyFiltersAndUpdateDisplay();
        });
    });
}
// Filtrez les recettes par ingrédients sélectionnés
function filterRecipesByIngredients(selectedIngredients, recipes) {
    return recipes.filter(recipe =>
        Array.from(selectedIngredients).every(ingredient =>
            recipe.ingredients.some(item => item.ingredient === ingredient)
        )
    );
}



export { generateIngredientList, selectedIngredients, filterRecipesByIngredients };
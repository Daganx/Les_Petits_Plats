import { recipes } from "../data/recipes.js";
import { cardDOM } from "./cardDOM.js";

const inputSearch = document.getElementById('inputSearch');
const cardsContainer = document.getElementById('cards-container');

// Stocke les recettes originales pour les réafficher
const allRecipes = recipes.slice();

function searchFilterMethod() {
    // Affiche le nombre total de recettes au début
    const totalRecipeCountElement = document.getElementById('total-count');
    const recipesTotal = document.getElementById('recipes-total')
    totalRecipeCountElement.textContent = `${allRecipes.length} recettes`;
    recipesTotal.appendChild(totalRecipeCountElement);

    inputSearch.addEventListener('input', (event) => {
        const searchTerm = event.target.value.trim().toLowerCase();

        if (searchTerm.length >= 3) {
            cardsContainer.innerHTML = '';
            // Parcourir toutes les recettes et trouver celles qui correspondent au terme de recherche
            const filteredRecipes = recipes.filter(recipe => {
                // Vérifier le nom, la description, les ingrédients, les ustensiles et l'appareil de la recette
                return (
                    recipe.name.toLowerCase().includes(searchTerm) ||
                    recipe.description.toLowerCase().includes(searchTerm) ||
                    recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(searchTerm)) ||
                    recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(searchTerm)) ||
                    recipe.appliance.toLowerCase().includes(searchTerm)
                );
            });
            // Affichez le nombre de résultats
            const resultCountElement = document.getElementById('total-count');
            const recipesTotal = document.getElementById('recipes-total')
            resultCountElement.textContent = `${filteredRecipes.length} recettes`;
            recipesTotal.appendChild(resultCountElement);

            // Affichez les résultats
            filteredRecipes.forEach(recipe => {
                const recipeCard = cardDOM(recipe);
                cardsContainer.appendChild(recipeCard);
            });
        } else {
            // Réaffichez toutes les recettes si la recherche est vide
            cardsContainer.innerHTML = '';
            allRecipes.forEach(recipe => {
                const recipeCard = cardDOM(recipe);
                cardsContainer.appendChild(recipeCard);
            });
            // Affiche le nombre total de recettes à la fin
            const totalRecipeCountElement = document.getElementById('total-count');
            const recipesTotal = document.getElementById('recipes-total')
            totalRecipeCountElement.textContent = `${allRecipes.length} recettes`;
            recipesTotal.appendChild(totalRecipeCountElement);
        }
    });
}

export { searchFilterMethod };

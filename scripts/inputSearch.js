import { recipes } from "../data/recipes.js";
import { cardDOM } from "./cardDOM.js";

const inputSearch = document.getElementById('inputSearch');
const cardsContainer = document.getElementById('cards-container');

// Stocke les recettes originales pour les réafficher
const allRecipes = recipes.slice();

function searchForLoop (){
    inputSearch.addEventListener('input', (event) => {
        const searchTerm = event.target.value.trim().toLowerCase();

        if (searchTerm.length >= 3) {
            // Effacer les résultats précédents
            cardsContainer.innerHTML = '';
            // Parcourir toutes les recettes
            for (let i = 0; i < recipes.length; i++) {
                const recipe = recipes[i];
                // Vérifier si la recette correspond au terme de recherche
                const isMatch = (
                    recipe.name.toLowerCase().includes(searchTerm) ||
                    recipe.description.toLowerCase().includes(searchTerm) ||
                    recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(searchTerm)) ||
                    recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(searchTerm)) ||
                    recipe.appliance.toLowerCase().includes(searchTerm)
                );
                // Affichez la recette si elle correspond
                if (isMatch) {
                    const recipeCard = cardDOM(recipe);
                    cardsContainer.appendChild(recipeCard);
                }
            }
        } else {
            // Réaffichez toutes les recettes si la recherche est vide
            cardsContainer.innerHTML = '';
            for (let i = 0; i < allRecipes.length; i++) {
                const recipe = allRecipes[i];
                const recipeCard = cardDOM(recipe);
                cardsContainer.appendChild(recipeCard);
            }
        }
    });
}

export {searchForLoop}
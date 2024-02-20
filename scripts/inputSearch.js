import { recipes } from "../data/recipes.js";
import { cardDOM } from "./cardDOM.js";

const inputSearch = document.getElementById('inputSearch');
const cardsContainer = document.getElementById('cards-container');

// Stocke les recettes originales pour les réafficher
const allRecipes = recipes.slice();

function searchForLoop () {
    const totalCountElement = document.getElementById('total-count');
    totalCountElement.textContent = `${recipes.length} recettes`; // Afficher le nombre total de recettes au chargement de la page

    inputSearch.addEventListener('input', (event) => {
        const searchTerm = event.target.value.trim().toLowerCase();
        let hasMatches = false; // Variable pour suivre si des correspondances ont été trouvées
        let matchCount = 0; // Variable pour compter le nombre de correspondances

        if (searchTerm.length >= 3) {
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
                    hasMatches = true; // Indiquer qu'au moins une correspondance a été trouvée
                    matchCount++; // Incrémenter le compteur de correspondances
                }
            }
            // Mettre à jour le compteur avec le nombre de correspondances
            totalCountElement.textContent = matchCount + ' recettes';
            // Afficher le message d'erreur si aucune correspondance n'a été trouvée
            const errorMessage = document.getElementById('error-search');
            if (!hasMatches) {
                errorMessage.style.display = 'block';
            } else {
                errorMessage.style.display = 'none';
            }
        } else {
            // Réaffichez toutes les recettes si la recherche est vide
            cardsContainer.innerHTML = '';
            for (let i = 0; i < allRecipes.length; i++) {
                const recipe = allRecipes[i];
                const recipeCard = cardDOM(recipe);
                cardsContainer.appendChild(recipeCard);
            }
            totalCountElement.textContent = `${recipes.length} recettes`;
            // Cacher le message d'erreur si la recherche est vide
            const errorMessage = document.getElementById('error-search');
            errorMessage.style.display = 'none';
        }
    });
}

export { searchForLoop };

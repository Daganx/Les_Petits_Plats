import { cardDOM } from "./cardDOM.js";
// Boucle sur les recettes pour afficher les cartes de recettes
function displayRecipes(recipes) {
  const cardsContainer = document.getElementById("cards-container");

  recipes.forEach((recipe) => {
    const recipeCard = cardDOM(recipe);
    cardsContainer.appendChild(recipeCard);
  });
}

export { displayRecipes };

import { recipes } from "../data/recipes.js";
import { ApplyFiltersAndUpdateDisplay } from "./index.js";

const allRecipes = recipes;
let searchTerm = "";

// Filtrez les recettes par terme de recherche (ALGORITHME BOUCLE FOR sur name, description et ingredients.)
function filterRecipesByTerm(searchTerm) {
  const filteredRecipes = [];
  for (let i = 0; i < allRecipes.length; i++) {
    const recipe = allRecipes[i];
    if (
      recipe.name.toLowerCase().includes(searchTerm) ||
      recipe.description.toLowerCase().includes(searchTerm) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(searchTerm)
      )
    ) {
      filteredRecipes.push(recipe);
    }
  }
  return filteredRecipes;
}
// Gérer l'entrée de recherche
function handleSearchInput() {
  const inputSearch = document.getElementById("inputSearch");
  const regex = /^[a-z0-9]+$/i; // Regex pour les lettres et les chiffres uniquement

  inputSearch.addEventListener("input", (event) => {
    searchTerm = event.target.value.trim().toLowerCase();

    if (regex.test(searchTerm) || searchTerm === "") {
      // Vérifie si le terme de recherche correspond à la regex ou si l'input est vide
      ApplyFiltersAndUpdateDisplay();
    }
  });

  // Ajoutez un écouteur d'événements pour l'événement 'X' (effacer) de l'entrée de recherche
  inputSearch.addEventListener("search", () => {
    if (inputSearch.value === "") {
      // Si la valeur de l'input est vide
      searchTerm = ""; // Réinitialisez le terme de recherche
      ApplyFiltersAndUpdateDisplay(); // Mettez à jour l'affichage
    }
  });
}
// Mettre à jour le nombre de recettes
function updateRecipeCount(count) {
  const recipeCount = document.getElementById("recipes-count");
  recipeCount.textContent = `${count} recettes`;
}
// Afficher un message d'erreur si aucune recette n'est trouvée
function displayErrorMessage(filteredRecipesLength) {
  const errorSearch = document.getElementById("error-search");

  if (filteredRecipesLength > 0) {
    errorSearch.style.display = "none";
  } else {
    errorSearch.style.display = "block";
  }
}

export {
  handleSearchInput,
  updateRecipeCount,
  filterRecipesByTerm,
  searchTerm,
  displayErrorMessage,
};

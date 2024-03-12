import { recipes } from "../data/recipes.js";
import { ApplyFiltersAndUpdateDisplay } from "./index.js";

const allRecipes = recipes;
let searchTerm = "";

function filterRecipesByTerm(searchTerm) {
  const filteredRecipes = [];
  allRecipes.forEach((recipe) => {
    if (
      recipe.name.toLowerCase().includes(searchTerm) ||
      recipe.description.toLowerCase().includes(searchTerm) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(searchTerm)
      )
    ) {
      filteredRecipes.push(recipe);
    }
  });
  return filteredRecipes;
}

function updateRecipeCount(count) {
  const recipeCount = document.getElementById("recipes-count");
  recipeCount.textContent = `${count} recettes`;
}

function displayErrorMessage(filteredRecipesLength) {
  const errorSearch = document.getElementById("error-search");

  if (filteredRecipesLength > 0) {
    errorSearch.style.display = "none";
  } else {
    errorSearch.style.display = "block";
  }
}

// Gérer l'entrée de recherche
function handleSearchInput() {
  const inputSearch = document.getElementById("inputSearch");

  inputSearch.addEventListener("input", (event) => {
    searchTerm = encodeURIComponent(event.target.value.trim().toLowerCase());

    if (searchTerm.length >= 3) {
      ApplyFiltersAndUpdateDisplay();
    } else {
      ApplyFiltersAndUpdateDisplay();
    }
  });
}

export {
  handleSearchInput,
  updateRecipeCount,
  filterRecipesByTerm,
  searchTerm,
  displayErrorMessage,
};

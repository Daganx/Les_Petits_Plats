//// Importation des recettes et de la fonction ApplyFiltersAndUpdateDisplay
import { recipes } from "../../data/recipes.js";
import { ApplyFiltersAndUpdateDisplay } from "../index.js";

// Initialisation des variables
const allRecipes = recipes;
const selectedIngredients = new Set();

// Fonction principale pour générer la liste des ingrédients
function generateIngredientList() {
  const ingredientList = document.getElementById("ingredients-list");
  const ingredients = new Set();

  gatherIngredients(ingredients); // Rassembler tous les ingrédients
  populateIngredientList(ingredients, ingredientList); // Remplir la liste des ingrédients
  addSearchFunctionality(); // Ajouter la fonctionnalité de recherche
}

// Fonction pour rassembler tous les ingrédients
function gatherIngredients(ingredients) {
  allRecipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      ingredients.add(ingredient.ingredient);
    });
  });
}

// Fonction pour remplir la liste des ingrédients
function populateIngredientList(ingredients, ingredientList) {
  ingredients.forEach((ingredient) => {
    const li = createIngredientListItem(ingredient); // Créer un élément de liste pour chaque ingrédient
    ingredientList.appendChild(li);
  });
}

// Fonction pour créer un élément de liste pour un ingrédient
function createIngredientListItem(ingredient) {
  const li = document.createElement("li");
  li.textContent = ingredient;

  // Créer une icône de fermeture
  const closeIcon = document.createElement("i");
  closeIcon.classList.add("fas", "fa-circle-xmark");
  closeIcon.style.display = "none"; 
  li.appendChild(closeIcon);

  li.addEventListener("click", () => {
    handleIngredientClick(ingredient, li, closeIcon); 
  });

  return li;
}

// Fonction pour gérer le clic sur un ingrédient
function handleIngredientClick(ingredient, li, closeIcon) {
  const activeTagsList = document.getElementById("selected-ingredients-list");
  if (selectedIngredients.has(ingredient)) {
    removeIngredient(ingredient, activeTagsList, li); // Si l'ingrédient est déjà sélectionné, le retirer
    closeIcon.style.display = "none"; 
  } else {
    addIngredient(ingredient, activeTagsList, li); // Sinon, l'ajouter
    closeIcon.style.display = "inline";
  }
  ApplyFiltersAndUpdateDisplay(); // Mettre à jour l'affichage
}

// Fonction pour retirer un ingrédient to the selectedIngredients
function removeIngredient(ingredient, activeTagsList, li) {
  selectedIngredients.delete(ingredient);
  const activeTag = Array.from(activeTagsList.children).find(
    (tag) => tag.textContent === ingredient
  );
  if (activeTag) {
    activeTagsList.removeChild(activeTag);
  }
  li.classList.remove("selected");
}

// Fonction pour ajouter un ingrédient to the selectedIngredients
function addIngredient(ingredient, activeTagsList, li) {
  selectedIngredients.add(ingredient);
  const span = createActiveTag(ingredient, activeTagsList, li); // Créer une balise active pour l'ingrédient
  activeTagsList.appendChild(span);
  li.classList.add("selected");
}

// Fonction pour créer une balise active pour un ingrédient
function createActiveTag(ingredient, activeTagsList, li) {
  const span = document.createElement("span");
  span.textContent = ingredient;
  const closeIcon = document.createElement("i");
  closeIcon.classList.add("fa-solid", "fa-xmark");
  closeIcon.textContent = "";
  span.appendChild(closeIcon);
  span.addEventListener("click", (event) => {
    event.stopPropagation();
    selectedIngredients.delete(ingredient);
    activeTagsList.removeChild(span);
    li.classList.remove("selected");
    const dropdownCloseIcon = li.querySelector("i");
    dropdownCloseIcon.style.display = "none"; 
    ApplyFiltersAndUpdateDisplay(); // Mettre à jour l'affichage
  });
  return span;
}

// Fonction pour ajouter la fonctionnalité de recherche
function addSearchFunctionality() {
  document
    .getElementById("dropdown-search-ingredients")
    .addEventListener("input", function (event) {
      const searchTerm = event.target.value.toLowerCase();
      const ingredients = document.querySelectorAll("#ingredients-list li");

      ingredients.forEach((ingredient) => {
        if (ingredient.textContent.toLowerCase().includes(searchTerm)) {
          ingredient.style.display = "";
        } else {
          ingredient.style.display = "none";
        }
      });
    });
}
// Filtrez les recettes par ingrédients sélectionnés
function filterRecipesByIngredients(selectedIngredients, recipes) {
  return recipes.filter((recipe) =>
    Array.from(selectedIngredients).every((ingredient) =>
      recipe.ingredients.some((item) => item.ingredient === ingredient)
    )
  );
}

export {
  generateIngredientList,
  selectedIngredients,
  filterRecipesByIngredients,
};
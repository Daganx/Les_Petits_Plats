//// Importation des recettes et de la fonction ApplyFiltersAndUpdateDisplay
import { recipes } from "../../data/recipes.js";
import { ApplyFiltersAndUpdateDisplay } from "../index.js";

// Initialisation des variables
const allRecipes = recipes;
const selectedUstensils = new Set();
// Fonction principale pour générer la liste des ustensiles
function generateUstensilList() {
  const ustensilList = document.getElementById("ustensils-list");
  const ustensils = new Set();

  gatherUstensils(ustensils); // Rassembler tous les ustensiles
  populateUstensilList(ustensils, ustensilList); // Remplir la liste des ustensiles
  addSearchFunctionality(); // Ajouter la fonctionnalité de recherche
}
// Fonction pour rassembler tous les ustensiles
function gatherUstensils(ustensils) {
  allRecipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      ustensils.add(ustensil);
    });
  });
}
// Fonction pour remplir la liste des ustensiles
function populateUstensilList(ustensils, ustensilList) {
  ustensils.forEach((ustensil) => {
    const li = createUstensilListItem(ustensil); 
    ustensilList.appendChild(li);
  });
}
// Fonction pour créer un élément de liste pour un ustensile
function createUstensilListItem(ustensil) {
  const li = document.createElement("li");
  li.textContent = ustensil;

  // Créer une icône de fermeture
  const closeIcon = document.createElement("i");
  closeIcon.classList.add("fas", "fa-circle-xmark");
  closeIcon.style.display = "none"; // L'icône est initialement cachée
  li.appendChild(closeIcon);

  li.addEventListener("click", () => handleUstensilClick(ustensil, li, closeIcon)); 
  return li;
}
// Fonction pour gérer le clic sur un ustensile
function handleUstensilClick(ustensil, li, closeIcon) {
  const activeTagsList = document.getElementById("selected-ingredients-list");
  if (selectedUstensils.has(ustensil)) {
    removeUstensil(ustensil, activeTagsList, li);
    closeIcon.style.display = "none";
  } else {
    addUstensil(ustensil, activeTagsList, li);
    closeIcon.style.display = "block";
  }
  ApplyFiltersAndUpdateDisplay();
}
// Fonction pour retirer un ustensil to the selectedUstensils
function removeUstensil(ustensil, activeTagsList, li) {
  selectedUstensils.delete(ustensil);
  const activeTag = Array.from(activeTagsList.children).find(
    (tag) => tag.textContent === ustensil
  );
  activeTagsList.removeChild(activeTag);
  li.classList.remove("selected");
}
// Fonction pour ajouter un ustensil to the selectedUstensils
function addUstensil(ustensil, activeTagsList, li) {
  selectedUstensils.add(ustensil);
  const span = createActiveTag(ustensil, activeTagsList, li);
  activeTagsList.appendChild(span);
  li.classList.add("selected");
}
// Fonction pour créer un élément de liste pour un ustensil sélectionné
function createActiveTag(ustensil, activeTagsList, li) {
  const span = document.createElement("span");
  span.textContent = ustensil;
  const closeIcon = document.createElement("i");
  closeIcon.classList.add("fa-solid", "fa-xmark");
  closeIcon.textContent = "";
  span.appendChild(closeIcon);
  span.addEventListener("click", (event) => {
    event.stopPropagation();
    selectedUstensils.delete(ustensil);
    activeTagsList.removeChild(span);
    li.classList.remove("selected");
    const dropdownCloseIcon = li.querySelector("i"); // Trouver l'icône de fermeture dans le menu déroulant
    dropdownCloseIcon.style.display = "none"; // Cacher l'icône de fermeture
    ApplyFiltersAndUpdateDisplay();
  });
  return span;
}
// Fonction pour ajouter la fonctionnalité de recherche
function addSearchFunctionality() {
  const searchInput = document.getElementById("dropdown-search-ustensils");
  const mainSearchInput = document.getElementById("inputSearch");

  const updateUstensilList = (searchTerm) => {
    const ustensils = document.querySelectorAll("#ustensils-list li");
  
    ustensils.forEach((ustensil) => {
      const ustensilName = ustensil.textContent.toLowerCase();
      if (searchTerm.length >= 3 && !ustensilName.includes(searchTerm) && !ustensil.classList.contains("selected")) {
        ustensil.style.display = "none";
      } else {
        ustensil.style.display = "";
      }
    });
  };

  searchInput.addEventListener("input", function (event) {
    const searchTerm = event.target.value.toLowerCase();
    updateUstensilList(searchTerm);
  });

  mainSearchInput.addEventListener("input", function (event) {
    const searchTerm = event.target.value.toLowerCase();
    updateUstensilList(searchTerm);
  });
}
// Filtrez les recettes par ustensiles sélectionnés
function filterRecipesByUstensils(selectedUstensils, recipes) {
  return recipes.filter((recipe) =>
    Array.from(selectedUstensils).every((utensil) =>
      recipe.ustensils.includes(utensil)
    )
  );
}

export { generateUstensilList, selectedUstensils, filterRecipesByUstensils };
//// Importation des recettes et de la fonction ApplyFiltersAndUpdateDisplay
import { recipes } from "../../data/recipes.js";
import { ApplyFiltersAndUpdateDisplay } from "../index.js";

// Initialisation des variables
const allRecipes = recipes;
const selectedAppliances = new Set();
// Fonction principale pour générer la liste des appareils
function generateApplianceList() {
  const applianceList = document.getElementById("appliances-list");
  const appliances = new Set();

  gatherAppliances(appliances); // Rassembler tous les appareils
  populateApplianceList(appliances, applianceList); // Remplir la liste des appareils
  addSearchFunctionality(); // Ajouter la fonctionnalité de recherche
}
// Fonction pour rassembler tous les appareils
function gatherAppliances(appliances) {
  allRecipes.forEach((recipe) => {
    appliances.add(recipe.appliance);
  });
}
// Fonction pour remplir la liste des appareils
function populateApplianceList(appliances, applianceList) {
  appliances.forEach((appliance) => {
    const li = createApplianceListItem(appliance);
    applianceList.appendChild(li);
  });
}
// Fonction pour créer un élément de liste pour un appareil
function createApplianceListItem(appliance) {
  const li = document.createElement("li");
  li.textContent = appliance;

  // Créer une icône de fermeture
  const closeIcon = document.createElement("i");
  closeIcon.classList.add("fas", "fa-circle-xmark");
  closeIcon.style.display = "none"; 
  li.appendChild(closeIcon);

  li.addEventListener("click", () => handleApplianceClick(appliance, li, closeIcon));
  return li;
}
// Fonction pour gérer le clic sur un appareil
function handleApplianceClick(appliance, li, closeIcon) {
  const activeTagsList = document.getElementById("selected-ingredients-list");
  if (selectedAppliances.has(appliance)) {
    removeAppliance(appliance, activeTagsList, li);
    closeIcon.style.display = "none";
  } else {
    addAppliance(appliance, activeTagsList, li);
    closeIcon.style.display = "block";
  }
  ApplyFiltersAndUpdateDisplay();
}
// Fonction pour retirer un appareil de la liste des appareils sélectionnés
function removeAppliance(appliance, activeTagsList, li) {
  selectedAppliances.delete(appliance);
  const activeTag = Array.from(activeTagsList.children).find(
    (tag) => tag.textContent === appliance
  );
  if (activeTag) {
    activeTagsList.removeChild(activeTag);
  }
  li.classList.remove("selected");
}
// Fonction pour ajouter un appareil à la liste des appareils sélectionnés
function addAppliance(appliance, activeTagsList, li) {
  selectedAppliances.add(appliance);
  const span = createActiveTag(appliance, activeTagsList, li);
  activeTagsList.appendChild(span);
  li.classList.add("selected");
}
// Fonction pour créer une balise active pour un appareil
function createActiveTag(appliance, activeTagsList, li) {
  const span = document.createElement("span");
  span.textContent = appliance;
  const closeIcon = document.createElement("i");
  closeIcon.classList.add("fa-solid", "fa-xmark");
  closeIcon.textContent = "";
  span.appendChild(closeIcon);
  span.addEventListener("click", (event) => {
    event.stopPropagation();
    selectedAppliances.delete(appliance);
    activeTagsList.removeChild(span);
    li.classList.remove("selected");
    const dropdownCloseIcon = li.querySelector("i"); 
    dropdownCloseIcon.style.display = "none";
    ApplyFiltersAndUpdateDisplay();
  });
  return span;
}
// Fonction pour ajouter la fonctionnalité de recherche
function addSearchFunctionality() {
  document
    .getElementById("dropdown-search-appliances")
    .addEventListener("input", function (event) {
      const searchTerm = event.target.value.toLowerCase();
      const appliances = document.querySelectorAll("#appliances-list li");

      appliances.forEach((li) => {
        const appliance = li.textContent.toLowerCase();
        if (appliance.includes(searchTerm)) {
          li.style.display = "block";
        } else {
          li.style.display = "none";
        }
      });
    });
}
// Filtrez les recettes par appareils sélectionnés
function filterRecipesByAppliances(selectedAppliances, recipes) {
  return recipes.filter((recipe) =>
    Array.from(selectedAppliances).every(
      (appliance) => recipe.appliance === appliance
    )
  );
}

export { generateApplianceList, selectedAppliances, filterRecipesByAppliances };
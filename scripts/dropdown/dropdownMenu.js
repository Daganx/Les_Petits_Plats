// Gère l'ouverture et la fermeture du menu déroulant
function handleDropdownClick(buttonId, menuId) {
    const dropdownButton = document.getElementById(buttonId);
    const dropdownMenu = document.getElementById(menuId);
  
    dropdownButton.addEventListener("click", () => {
      if (
        dropdownMenu.style.display === "none" ||
        dropdownMenu.style.display === ""
      ) {
        dropdownMenu.style.display = "flex";
        dropdownButton.style.borderBottomLeftRadius = "0";
        dropdownButton.style.borderBottomRightRadius = "0";
      } else {
        dropdownMenu.style.display = "none";
        dropdownButton.style.borderBottomLeftRadius = "";
        dropdownButton.style.borderBottomRightRadius = "";
      }
    });
  }
  // Appelle la fonction handleDropdownClick pour chaque menu déroulant
  function setupDropdowns() {
    handleDropdownClick(
      "dropdown-button-ingredients",
      "dropdown-content-ingredients"
    );
    handleDropdownClick(
      "dropdown-button-appliances",
      "dropdown-content-appliances"
    );
    handleDropdownClick(
      "dropdown-button-ustensils",
      "dropdown-content-ustensils"
    );
  }
  
  export { setupDropdowns };
const menuToggle = document.getElementById("menuToggle");
const navbarMenu = document.getElementById("navbarMenu");

// Adiciona o evento de clique
menuToggle.addEventListener("click", function () {
  // Alterna a visibilidade do menu
  if (navbarMenu.style.display === "block") {
    navbarMenu.style.display = "none";
  } else {
    navbarMenu.style.display = "block";
  }
});
document.querySelector('.navbar-toggler').addEventListener('click', function() {
  const menu = document.querySelector('#navbarNav');
  menu.classList.toggle('show');
});

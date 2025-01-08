document.addEventListener("DOMContentLoaded", () => {
  const toggler = document.getElementById("navbar-toggler");
  const menu = document.getElementById("navbar-menu");

  toggler.addEventListener("click", () => {
    menu.classList.toggle("active"); // Adiciona ou remove a classe 'active' para mostrar/ocultar o menu
  });
});

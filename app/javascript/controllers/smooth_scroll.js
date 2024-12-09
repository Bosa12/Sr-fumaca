document.querySelectorAll('a[data-path]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-path');
    const targetElement = document.querySelector(targetId); 
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Rola suavemente
        block: 'start'
      });
    } else {
      console.warn(`Elemento com ID ${targetId} não encontrado.`);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.querySelector(".menu");
  const menuLinks = document.querySelectorAll(".menu a");

  // Alternar menu ao clicar no botão "☰"
  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });

  // Rolar suavemente e fechar menu ao clicar em um link
  menuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Evita o comportamento padrão

      const targetId = this.getAttribute("href"); 
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, 
          behavior: "smooth", 
        });

        // Fechar menu após o clique (somente no mobile)
        menu.style.display = "none";
        menu.classList.remove("active");
      }
    });
  });
});

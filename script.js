document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });
});

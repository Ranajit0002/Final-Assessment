const menuToggle = document.querySelector(".menu-toggle");
const navCollapse = document.querySelector(".navbar-collapse");
const toggleIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
  navCollapse.classList.toggle("active");
  toggleIcon.classList.toggle("fa-bars");
  toggleIcon.classList.toggle("fa-xmark");
});

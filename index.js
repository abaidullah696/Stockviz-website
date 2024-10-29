const navbar = document.getElementById("navbar");
const contentContainers = document.querySelectorAll(
  ".container, .charts, .news, .ETF, .screeners, .Top-10"
);
const toggleButton = document.getElementById("navbarToggle");

toggleButton.addEventListener("click", function () {
  if (window.innerWidth <= 768) {
    navbar.classList.toggle("expanded");
  } else {
    navbar.classList.toggle("collapsed");

    contentContainers.forEach((container) => {
      container.style.marginLeft = navbar.classList.contains("collapsed")
        ? "60px"
        : "250px";
    });
  }
});

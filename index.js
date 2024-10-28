// document.getElementById("navbarToggle").addEventListener("click", function () {
//   document.getElementById("navbar").classList.toggle("collapsed");
// });

const navbar = document.getElementById("navbar");
const contentContainers = document.querySelectorAll(
  ".container, .charts, .news, .ETF, .screeners, .Top-10"
);
const toggleButton = document.getElementById("navbarToggle");

toggleButton.addEventListener("click", function () {
  navbar.classList.toggle("collapsed");

  contentContainers.forEach((container) => {
    if (navbar.classList.contains("collapsed")) {
      container.style.marginLeft = "60px";
    } else {
      container.style.marginLeft = "250px";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const toggleButton = document.getElementById("navbarToggle");
  const navLinks = document.querySelector(".nav2");

  // Toggle the navbar on button click
  toggleButton.addEventListener("click", () => {
    // Toggle 'expanded' class to control visibility
    navbar.classList.toggle("expanded");
    navLinks.style.display =
      navLinks.style.display === "flex" ? "none" : "flex";
  });

  // Adjust display property based on window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      // Show navbar links in larger screen sizes
      navLinks.style.display = "flex";
      navbar.classList.remove("expanded");
    } else {
      // Hide navbar links in smaller screen sizes
      navLinks.style.display = "none";
    }
  });
});
const navbar = document.querySelector(".navbar");
const toggleButton = document.querySelector(".navbar-toggle");
const content = document.querySelector(".content");

toggleButton.addEventListener("click", () => {
  navbar.classList.toggle("collapsed");

  // Adjust content padding-top based on navbar state
  if (navbar.classList.contains("collapsed")) {
    content.style.paddingTop = "60px"; // Closed state padding
  } else {
    content.style.paddingTop = "120px"; // Open state padding (adjust if navbar height changes)
  }
});

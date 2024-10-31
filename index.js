document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const toggleButton = document.getElementById("navbarToggle");
  const navLinks = document.querySelector(".nav2");

  toggleButton.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      // Mobile View - Show items with animation from right to left
      navbar.classList.toggle("expanded");
      navLinks.classList.toggle("expanded");
    } else {
      // Laptop View - Show only icons without text
      navbar.classList.toggle("collapsed");
      const textSpans = document.querySelectorAll(".nav2 .text");
      textSpans.forEach(
        (span) =>
          (span.style.display = navbar.classList.contains("collapsed")
            ? "none"
            : "inline")
      );
    }
  });

  // Adjust layout based on resizing
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navbar.classList.remove("expanded");
      navLinks.classList.remove("expanded");
    }
  });
});

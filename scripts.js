document.addEventListener("DOMContentLoaded", function () {
    // Toggle sub-navbar on profile icon click
    document.getElementById("profil").addEventListener("click", function () {
      document.querySelector(".sub-navbar").classList.toggle("active");
    });
  
    // Close sub-navbar when clicking outside
    document.addEventListener("click", function (event) {
      const subNavbar = document.querySelector(".sub-navbar");
      if (event.target.closest(".profil") === null && event.target !== subNavbar) {
        subNavbar.classList.remove("active");
      }
    });
  
    // Toggle search box on search icon click
    document.getElementById("search").addEventListener("click", function () {
      const searchBox = document.querySelector(".box input");
      searchBox.classList.toggle("active");
      searchBox.focus();
    });
  
    // Close search box when clicking outside
    document.addEventListener("click", function (event) {
      const searchBox = document.querySelector(".box input");
      if (event.target !== searchBox && !searchBox.contains(event.target)) {
        searchBox.classList.remove("active");
      }
    });
  
    // Dropdown menu functionality
    const dropdowns = document.querySelectorAll(".navbar ul li");
  
    dropdowns.forEach(function (dropdown) {
      dropdown.addEventListener("mouseenter", function () {
        this.querySelector("ul").classList.add("active");
      });
  
      dropdown.addEventListener("mouseleave", function () {
        this.querySelector("ul").classList.remove("active");
      });
    });
  });
  
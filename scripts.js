// Function to handle the search box
function handleSearch() {
  const searchInput = document.querySelector('input[type="text"]');
  const searchIcon = document.getElementById('search');

  searchIcon.addEventListener('click', function () {
    const searchTerm = searchInput.value;
    alert('Search Term: ' + searchTerm);
    // You can replace the alert with your search functionality
  });
}

// Function to handle profile dropdown
function handleProfileDropdown() {
  const profileIcon = document.getElementById('profil');
  const subNavbar = document.querySelector('.sub-navbar');

  profileIcon.addEventListener('click', function () {
    subNavbar.classList.toggle('show');
  });

  // Close dropdown when clicking outside of it
  document.addEventListener('click', function (event) {
    if (!event.target.closest('.profil')) {
      subNavbar.classList.remove('show');
    }
  });
}

// Execute functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  feather.replace(); // Replace Feather icons

  handleSearch();
  handleProfileDropdown();
});

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");

  // Add an event listener to the search input for handling the search
  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const contentItems = document.querySelectorAll(".content"); // Adjust the selector based on your content structure

    contentItems.forEach(function (item) {
      const itemText = item.textContent.toLowerCase();

      // Check if the search term is present in the content item
      if (itemText.includes(searchTerm)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
var button = document.getElementById("myButton");

        // Add a click event listener to the button
        button.addEventListener("click", function() {
            // Display a message in an alert box
            alert("Your response is recorded");
        });

// JavaScript to toggle the mobile menu
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector("nav");

  menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("hidden");
  });
});


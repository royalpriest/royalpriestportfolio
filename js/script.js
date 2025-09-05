// This function toggles the navigation menu open or closed
function toggleNav() {
    const nav = document.getElementById('Nav'); // Get the navigation container by its ID
    const button = document.getElementById('menuButton'); // Get the menu toggle button by its ID

    nav.classList.toggle('active'); // Toggle the 'active' class on the nav (shows/hides menu)
    
    // Change button text depending on whether menu is open
    button.textContent = nav.classList.contains('active') ? '[Close]' : '[Menu]';
}

// When any link inside the nav is clicked, close the nav
document.querySelectorAll('#Nav a').forEach(link => {
    link.addEventListener('click', toggleNav);
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card"); // Select all project cards
  
  cards.forEach(card => {
    // When the user touches a card (on mobile)
    card.addEventListener("touchstart", () => {
      // Remove 'touch-active' from all cards to reset
      cards.forEach(c => c.classList.remove("touch-active"));
      
      // Add 'touch-active' to the one that was touched
      card.classList.add("touch-active");
    });
  });
});

// This function toggles between light and dark theme
function toggleTheme() {
  document.body.classList.toggle('dark-theme'); // Add/remove 'dark-theme' class from body
}

// This function checks screen size and disables dark mode on small screens
const handleScreenResize = () => 
  window.innerWidth < 1280 && document.body.classList.remove('dark-theme'); // If screen is less than 1280px, remove dark theme
handleScreenResize();
// Run the check whenever the window is resized
window.addEventListener('resize', handleScreenResize);

document.addEventListener("DOMContentLoaded", function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const allNavLinks = document.querySelectorAll('#main-nav a');

  // Toggle navigation links visibility
  navToggle.addEventListener('click', function() {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });

  // Smooth scroll functionality
  allNavLinks.forEach(function(navLink) {
    navLink.addEventListener("click", function(event) {
      event.preventDefault();

      const targetId = navLink.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth"
        });

        // Hide navigation links after clicking (for smaller screens)
        if (window.innerWidth < 768) {
          navLinks.style.display = 'none';
        }
      }
    });
  });

  // Highlight navigation link based on scroll position
  window.addEventListener('scroll', function() {
    const fromTop = window.scrollY + 100;

    allNavLinks.forEach(function(navLink) {
      const section = document.querySelector(navLink.getAttribute('href'));

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    });
  });
});

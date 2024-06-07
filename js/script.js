document.addEventListener("DOMContentLoaded", function () {
  const homeLink = document.getElementById("home-link");
  const aboutLink = document.getElementById("about-link");
  const skillsLink = document.getElementById("skills-link");
  const projectsLink = document.getElementById("projects-link");
  const contactLink = document.getElementById("contact-link");
  const homeSection = document.getElementById("home");
  const aboutSection = document.getElementById("about");
  const skillsSection = document.getElementById("skills");
  const projectsSection = document.getElementById("projects");
  const contactSection = document.getElementById("contact");
  const navBar = document.querySelector("nav");

  // Function to hide all sections
  function hideAllSections() {
    const sections = [
      homeSection,
      aboutSection,
      skillsSection,
      projectsSection,
      contactSection,
    ];
    sections.forEach((section) => {
      if (section) {
        section.style.opacity = "0";
        section.style.transform = "scale(0.4)";
        section.style.pointerEvents = "none";
        section.style.visibility = "hidden";
      }
    });
  }

  // Function to show a section
  function showSection(section) {
    console.log("Showing Section:", section);
    if (section && section.style) {
      section.style.visibility = "visible";
      setTimeout(function () {
        section.style.opacity = "1";
        section.style.transform = "scale(1)";
        section.style.pointerEvents = "all";
      }, 100);
    } else {
      console.error("Section is null, undefined, or missing style property!");
    }
  }

  // Function to slide in the navbar
  function slideInNavBar() {
    setTimeout(function () {
      navBar.style.top = "0";
    }, 500);
  }

  // Function to handle navigation
  function handleNavigation(targetSection) {
    hideAllSections();
    navBar.style.top = "-100px";
    setTimeout(function () {
      showSection(targetSection);
      slideInNavBar();
    }, 500);
  }

  // Event listeners for navigation links
  homeLink.addEventListener("click", function (event) {
    event.preventDefault();
    handleNavigation(homeSection);
  });

  aboutLink.addEventListener("click", function (event) {
    event.preventDefault();
    handleNavigation(aboutSection);
  });

  skillsLink.addEventListener("click", function (event) {
    event.preventDefault();
    handleNavigation(skillsSection);
  });

  projectsLink.addEventListener("click", function (event) {
    event.preventDefault();
    handleNavigation(projectsSection);
  });

  contactLink.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Contact Link Clicked");
    console.log("Contact Section:", contactSection);
    handleNavigation(contactSection);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const homeLink = document.getElementById("home-link");
  const aboutLink = document.getElementById("about-link");
  const homeSection = document.getElementById("home");
  const aboutSection = document.getElementById("about");
  const navBar = document.querySelector("nav");
  const skillsLink = document.getElementById("skills-link");
  const skillsSection = document.getElementById("skills");

  // Function to remove event listeners for navigation links
  function removeNavEventListeners() {
    homeLink.removeEventListener("click", navigateHome);
    aboutLink.removeEventListener("click", navigateAbout);
    skillsLink.removeEventListener("click", navigateSkills);
  }

  // Function to add event listeners for navigation links
  function addNavEventListeners() {
    homeLink.addEventListener("click", navigateHome);
    aboutLink.addEventListener("click", navigateAbout);
    skillsLink.addEventListener("click", navigateSkills);
  }

  // Function to navigate to the home section
  function navigateHome(event) {
    event.preventDefault();

    removeNavEventListeners();

    // Fade out and scale the about section
    aboutSection.style.opacity = "0";
    aboutSection.style.transform = "scale(0.4)";
    aboutSection.style.pointerEvents = "none";

    // Slide out the navbar before fading in the home section
    navBar.style.top = "-100px";

    // After the fade out and scale transition, hide the about section and show the home section
    setTimeout(function () {
      aboutSection.style.visibility = "hidden";
      homeSection.style.visibility = "visible";
      homeSection.classList.remove("hidden");
      // Fade in and scale the home section
      setTimeout(function () {
        homeSection.style.opacity = "1";
        homeSection.style.transform = "scale(1)";
        homeSection.style.pointerEvents = "all";

        // Slide in the navbar from the top after a delay
        setTimeout(function () {
          navBar.style.top = "0";
          addNavEventListeners(); // Add event listeners back
        }, 500); // Adjust delay as needed
      }, 100);
    }, 500); // Match this to the duration of the fade out and scale transition
  }

  // Function to navigate to the about section
  function navigateAbout(event) {
    event.preventDefault();

    removeNavEventListeners();

    // Fade out and scale the home section
    homeSection.style.opacity = "0";
    homeSection.style.transform = "scale(0.4)";
    homeSection.style.pointerEvents = "none";

    // Slide out the navbar before fading in the about section
    navBar.style.top = "-100px";

    // After the fade out and scale transition, hide the home section and show the about section
    setTimeout(function () {
      homeSection.style.visibility = "hidden";
      aboutSection.style.visibility = "visible";
      aboutSection.classList.remove("hidden");
      // Fade in and scale the about section
      setTimeout(function () {
        aboutSection.style.opacity = "1";
        aboutSection.style.transform = "scale(1)";
        aboutSection.style.pointerEvents = "all";

        // Slide in the navbar from the top after a delay
        setTimeout(function () {
          navBar.style.top = "0";
          addNavEventListeners(); // Add event listeners back
        }, 500); // Adjust delay as needed
      }, 100);
    }, 500); // Match this to the duration of the fade out and scale transition
  }

  // Function to navigate to the skills section
  function navigateSkills(event) {
    event.preventDefault();

    removeNavEventListeners();

    // Fade out and scale the home section
    homeSection.style.opacity = "0";
    homeSection.style.transform = "scale(0.4)";
    homeSection.style.pointerEvents = "none";

    // Slide out the navbar before fading in the skills section
    navBar.style.top = "-100px";

    // After the fade out and scale transition, hide the home section and show the skills section
    setTimeout(function () {
      homeSection.style.visibility = "hidden";
      skillsSection.style.visibility = "visible";
      skillsSection.classList.remove("hidden");
      // Fade in and scale the skills section
      setTimeout(function () {
        skillsSection.style.opacity = "1";
        skillsSection.style.transform = "scale(1)";
        skillsSection.style.pointerEvents = "all";

        // Slide in the navbar from the top after a delay
        setTimeout(function () {
          navBar.style.top = "0";
          addNavEventListeners(); // Add event listeners back
        }, 500); // Adjust delay as needed
      }, 100);
    }, 500); // Match this to the duration of the fade out and scale transition
  }

  // Initial event listeners setup
  addNavEventListeners();
});

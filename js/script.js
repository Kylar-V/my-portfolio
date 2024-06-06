document.addEventListener("DOMContentLoaded", function () {
  const homeLink = document.getElementById("home-link");
  const aboutLink = document.getElementById("about-link");
  const homeSection = document.getElementById("home");
  const aboutSection = document.getElementById("about");
  const navBar = document.querySelector("nav");

  aboutLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Fade out and scale the home section
    homeSection.style.opacity = "0";
    homeSection.style.transform = "scale(0.4)";
    homeSection.style.pointerEvents = "none";

    // Slide out the navbar before fading in the about section
    navBar.style.top = "-100px";

    // After the fade out and scale transition, hide the home section and show the about section
    setTimeout(function () {
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
        }, 500); // Adjust delay as needed
      }, 100);
    }, 500); // Match this to the duration of the fade out and scale transition
  });

  homeLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Fade out and scale the about section
    aboutSection.style.opacity = "0";
    aboutSection.style.transform = "scale(0.4)";
    aboutSection.style.pointerEvents = "none";

    // Slide out the navbar before fading in the home section
    navBar.style.top = "-100px";

    // After the fade out and scale transition, hide the about section and show the home section
    setTimeout(function () {
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
        }, 500); // Adjust delay as needed
      }, 100);
    }, 500); // Match this to the duration of the fade out and scale transition
  });
});

// document.addEventListener("DOMContentLoaded", function() {
//   const navLinks = document.querySelectorAll("#main-nav a");

//   navLinks.forEach(function(navLink) {
//     navLink.addEventListener("click", function(event) {
//       event.preventDefault();

//       const targetId = navLink.getAttribute("href").substring(1);
//       const targetSection = document.getElementById(targetId);

//       if (targetSection) {
//         targetSection.scrollIntoView({
//           behavior: "smooth"
//         });
//       }
//     });
//   });
// });
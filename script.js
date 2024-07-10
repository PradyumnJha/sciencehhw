// document.addEventListener("DOMContentLoaded", () => {
//   const sections = document.querySelectorAll("section");
//   const navLinks = document.querySelectorAll("nav ul li a");

//   // Smooth scrolling for navigation links
//   navLinks.forEach((link) => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault();
//       const targetId = link.getAttribute("href").substring(1);
//       const targetSection = document.getElementById(targetId);

//       window.scrollTo({
//         top: targetSection.offsetTop,
//         behavior: "smooth",
//       });
//     });
//   });

//   // Intersection Observer for section reveal animations
//   const observerOptions = {
//     threshold: 0.1,
//   };

//   const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("visible");
//         observer.unobserve(entry.target);
//       }
//     });
//   }, observerOptions);

//   sections.forEach((section) => {
//     observer.observe(section);
//   });
// });

let arr = ["blue", "green", "red", "yellow"];
arr.forEach((element) => {
  let className = element;
  const collection = document.getElementsByClassName(className);
  for (i = 0; i < collection.length; i++) collection[i].style.color = element;
});

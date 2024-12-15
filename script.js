// Sticky Navigation Menu JS Code

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};
cancelBtn.onclick = function () {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

$(document).ready(function () {
  $(".accordion-header").click(function () {
    $(this).toggleClass("active");
    $(this).next(".accordion-content").slideToggle();
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const educationItems = document.querySelectorAll(
    ".education-certifications .education-details li"
  );

  // Define the options for the observer
  const options = {
    threshold: 0.3, // Trigger when 30% of the element is in view
  };

  // Create the observer, adding the 'visible' class when items enter the viewport
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 200); // Stagger animation with delay
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  }, options);

  // Observe each list item
  educationItems.forEach((item) => observer.observe(item));
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute("href"));
    const offset = 60; // Adjust based on navbar height
    window.scrollTo({
      top: targetElement.offsetTop - offset,
      behavior: "smooth",
    });
  });
});
document
  .querySelector('a[href="#about"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector("#about");
    const extraScroll = 200; // Increase this value to scroll further down
    window.scrollTo({
      top: target.offsetTop + extraScroll, // Scrolls further down by `extraScroll` pixels
      behavior: "smooth",
    });
  });
function revealOnScroll() {
  const items = document.querySelectorAll(
    ".education-certifications .education-details li"
  );

  items.forEach((item, index) => {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Check if the item is within the viewport
    if (itemTop < windowHeight - 100) {
      item.classList.add("show");
    }
  });
}

// Run revealOnScroll on load and on scroll
document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      document.body.style.overflow = "auto"; // Restore scrolling
      document.querySelector(".hamburger-menu").classList.remove("open"); // Close the menu
    }
  });
});

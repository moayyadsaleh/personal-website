// Sticky Navigation Menu JS Code with Debounced Scroll Event
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let debounceTimer;
window.addEventListener("scroll", () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    if (document.documentElement.scrollTop > 20) {
      nav.classList.add("sticky");
      scrollBtn.style.display = "block";
    } else {
      nav.classList.remove("sticky");
      scrollBtn.style.display = "none";
    }
  }, 50); // Debounce delay
});

// Side Navigation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden"; // Lock scrolling when menu opens
};

cancelBtn.onclick = function () {
  closeMenu();
};

// Close menu function to avoid repetition
function closeMenu() {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = ""; // Reset to default scrolling behavior
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While Clicking Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    closeMenu();
  });
});

// Smooth Scroll with Offset for Navigation Links (Disable Smooth Scroll on Mobile)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute("href"));
    const offset = 60; // Adjust based on navbar height

    if (targetElement) {
      if (!("ontouchstart" in window)) {
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: "smooth",
        });
      } else {
        window.scrollTo(0, targetElement.offsetTop - offset);
      }
    }

    closeMenu(); // Ensure the menu closes after scrolling
  });
});

// Accordion Toggle Functionality
$(document).ready(function () {
  $(".accordion-header").click(function () {
    $(this).toggleClass("active");
    $(this).next(".accordion-content").slideToggle();
  });
});

// Intersection Observer for Animating Education Items
document.addEventListener("DOMContentLoaded", function () {
  const educationItems = document.querySelectorAll(
    ".education-certifications .education-details li"
  );

  // Define the options for the observer
  const options = {
    threshold: 0.1, // Lower threshold for faster triggering
  };

  // Create the observer, adding the 'visible' class when items enter the viewport
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  }, options);

  // Observe each list item
  educationItems.forEach((item) => observer.observe(item));
});

// Smooth Scroll for Specific Section with Extra Offset (Disable Smooth Scroll on Mobile)
document
  .querySelector('a[href="#about"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector("#about");
    const extraScroll = 200; // Increase this value to scroll further down

    if (!("ontouchstart" in window)) {
      window.scrollTo({
        top: target.offsetTop + extraScroll,
        behavior: "smooth",
      });
    } else {
      window.scrollTo(0, target.offsetTop + extraScroll);
    }

    closeMenu(); // Ensure the menu closes after scrolling
  });

// Reveal Elements on Scroll
function revealOnScroll() {
  const items = document.querySelectorAll(
    ".education-certifications .education-details li"
  );

  items.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Check if the item is within the viewport
    if (itemTop < windowHeight - 100) {
      item.classList.add("show");
    }
  });
}

// Run revealOnScroll on load and on scroll
window.addEventListener("load", revealOnScroll);
window.addEventListener("scroll", revealOnScroll);

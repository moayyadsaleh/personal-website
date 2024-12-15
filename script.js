// Sticky Navigation Menu JS Code with requestAnimationFrame
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let lastKnownScrollPosition = 0;
let ticking = false;

window.addEventListener("scroll", () => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      if (lastKnownScrollPosition > 20) {
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";
      } else {
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
      }
      ticking = false;
    });

    ticking = true;
  }
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
  body.style.overflow = "hidden";
};

cancelBtn.onclick = function () {
  closeMenu();
};

// Close menu function to avoid repetition
function closeMenu() {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While Clicking Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    closeMenu();
  });
});

// Smooth Scroll with Offset for Navigation Links (Smooth Scroll Disabled)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute("href"));
    const offset = 60;

    if (targetElement) {
      window.scrollTo(0, targetElement.offsetTop - offset);
    }

    closeMenu();
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

  const options = {
    threshold: 0.1, // Lower threshold for faster triggering
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  educationItems.forEach((item) => observer.observe(item));
});

// Reveal Elements on Scroll with requestAnimationFrame
function revealOnScroll() {
  const items = document.querySelectorAll(
    ".education-certifications .education-details li"
  );

  items.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (itemTop < windowHeight - 100) {
      item.classList.add("show");
    }
  });
}

let scrollTimeout;
window.addEventListener("scroll", () => {
  if (!scrollTimeout) {
    scrollTimeout = requestAnimationFrame(() => {
      revealOnScroll();
      scrollTimeout = null;
    });
  }
});

// Smooth Scroll for Specific Section with Extra Offset (Smooth Scroll Disabled)
document
  .querySelector('a[href="#about"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector("#about");
    const extraScroll = 200;

    window.scrollTo(0, target.offsetTop + extraScroll);
    closeMenu();
  });

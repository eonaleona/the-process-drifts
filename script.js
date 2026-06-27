// Wait until the page is loaded before looking for elements.
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const cards = document.querySelectorAll(".drift-card");
  const fadeItems = document.querySelectorAll(".fade-in, .section");

  navToggle.addEventListener("click", function () {
    const menuIsOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", menuIsOpen);
  });

  cards.forEach(function (card) {
    const button = card.querySelector(".card-button");

    button.addEventListener("click", function () {
      const cardIsOpen = card.classList.toggle("is-open");
      button.setAttribute("aria-expanded", cardIsOpen);
    });
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: 0.18
    }
  );

  fadeItems.forEach(function (item) {
    item.classList.add("fade-in");
    observer.observe(item);
  });
});

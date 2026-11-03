const slides = Array.from(document.querySelectorAll(".carousel-slide"));
const carousel = document.querySelector(".pet-carousel");
const count = document.querySelector("#carousel-count");
const toggle = document.querySelector("#carousel-toggle");
let current = 0;
let paused = false;

function showSlide(index) {
  current = (index + slides.length) % slides.length;
  slides.forEach((slide, position) => {
    const active = position === current;
    slide.hidden = !active;
    slide.classList.toggle("is-active", active);
  });
  count.textContent = (current + 1) + " of " + slides.length;
}

document.querySelector("#carousel-prev").addEventListener("click", () => showSlide(current - 1));
document.querySelector("#carousel-next").addEventListener("click", () => showSlide(current + 1));
toggle.addEventListener("click", () => {
  paused = !paused;
  toggle.textContent = paused ? "Play" : "Pause";
  toggle.setAttribute("aria-pressed", String(paused));
});

// Keep cycling even when the mouse rests over the photo. Pause if a slide link
// has keyboard focus, or if the visitor presses Pause.
setInterval(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const readingSlideLink = carousel.querySelector(".carousel-slide:focus-within");
  if (!paused && !reducedMotion && !document.hidden && !readingSlideLink) {
    showSlide(current + 1);
  }
}, 3500);

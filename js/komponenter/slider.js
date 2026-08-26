const slides = document.querySelectorAll(".slide");
const btnNext = document.querySelector(".next");
const btnPrevious = document.querySelector(".previous");

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function next() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function previous() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

btnNext.addEventListener("click", next);
btnPrevious.addEventListener("click", previous);

// autoplay
setInterval(next, 3000);

// keyboard
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") previous();
});

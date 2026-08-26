const burger = document.querySelector(".burger");
const nav = document.querySelector(".mainNav-ul");
const links = document.querySelectorAll(".mainNav-ul a");
const bars = document.querySelectorAll(".bar");

burger.addEventListener("click", () => {
  nav.classList.toggle("show");
  bars.forEach((bar) => {
    bar.classList.toggle("active");
  });
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
    bars.classList.toggle("active");
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    nav.classList.remove("show");
  }
});

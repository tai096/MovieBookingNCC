const sliders = document.querySelector(".home__movies_carousel-list");

let scrollPerClick = 500;
let scrollAmount = 0;
const maxScroll = sliders.scrollWidth - sliders.clientWidth;
let isDown = false;
let startX;
let scrollLeft;

const sliderScrollLeft = () => {
  sliders.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth",
  });

  if (scrollAmount <= 0) {
    scrollAmount = 0;
  }
};

const sliderScrollRight = () => {
  if (scrollAmount <= maxScroll) {
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth",
    });
  }
};

sliders.addEventListener("mousedown", (e) => {
  isDown = true;
  sliders.classList.add("active");
  startX = e.pageX - sliders.offsetLeft;
  scrollLeft = sliders.scrollLeft;
});
sliders.addEventListener("mouseleave", () => {
  isDown = false;
  sliders.classList.remove("active");
});
sliders.addEventListener("mouseup", () => {
  isDown = false;
  sliders.classList.remove("active");
});
sliders.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - sliders.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  sliders.scrollLeft = scrollLeft - walk;
});

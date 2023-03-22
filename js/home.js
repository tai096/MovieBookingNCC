const sliders = document.querySelector(".carouselBox");
var scrollPerClick = 1000;

var scrollAmount = 0;

const sliderScrollLeft = () => {
  sliders.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth",
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
};

const sliderScrollRight = () => {
  if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth",
    });
  }
};

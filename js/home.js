const sliders = document.querySelector(".home__movies_carousel-list");
const switchLeft = document.getElementById("switchLeft");
const switchRight = document.getElementById("switchRight");

var scrollPerClick = 500;

var scrollAmount = 0;

let showSwitchLeft = "none";
switchLeft.style.display = showSwitchLeft;

const sliderScrollLeft = () => {
  sliders.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth",
  });
  switchRight.style.display = "block";

  if (scrollAmount <= 0) {
    scrollAmount = 0;
    showSwitchLeft = "none";
    switchLeft.style.display = showSwitchLeft;
  }
};

const sliderScrollRight = () => {
  console.log(scrollAmount);
  if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth",
    });
    showSwitchLeft = "block";
    switchLeft.style.display = showSwitchLeft;
  } else {
    switchRight.style.display = "none";
  }
};

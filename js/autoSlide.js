let onSlide = false;

window.addEventListener("load", () => {
  autoSlide();

  const dots = document.querySelectorAll(".carousel_dot");
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => slide(i));
  }

  const buttonPrev = document.querySelector(".carousel_button__prev");
  const buttonNext = document.querySelector(".carousel_button__next");
  buttonPrev.addEventListener("click", () => slide(getItemActiveIndex() - 1));
  buttonNext.addEventListener("click", () => slide(getItemActiveIndex() + 1));
});

function autoSlide() {
  setInterval(() => {
    slide(getItemActiveIndex() + 1);
  }, 5000);
}

function slide(toIndex) {
  if (onSlide) return;
  onSlide = true;

  const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
  const itemActive = document.querySelector(".carousel_item__active");
  const itemActiveIndex = itemsArray.indexOf(itemActive);
  let newItemActive = null;

  if (toIndex > itemActiveIndex) {
    // check if toIndex exceeds the number of carousel items
    if (toIndex >= itemsArray.length) {
      toIndex = 0;
    }

    newItemActive = itemsArray[toIndex];

    // start transition
    newItemActive.classList.add("carousel_item__pos_next");
    setTimeout(() => {
      newItemActive.classList.add("carousel_item__next");
      itemActive.classList.add("carousel_item__next");
    }, 20);
  } else {
    // check if toIndex exceeds the number of carousel items
    if (toIndex < 0) {
      toIndex = itemsArray.length - 1;
    }

    newItemActive = itemsArray[toIndex];

    // start transition
    newItemActive.classList.add("carousel_item__pos_prev");
    setTimeout(() => {
      newItemActive.classList.add("carousel_item__prev");
      itemActive.classList.add("carousel_item__prev");
    }, 20);
  }

  // remove all transition class and switch active class
  newItemActive.addEventListener(
    "transitionend",
    () => {
      itemActive.className = "carousel_item";
      newItemActive.className = "carousel_item carousel_item__active";
      onSlide = false;
    },
    {
      once: true,
    }
  );

  slideIndicator(toIndex);
}

function getItemActiveIndex() {
  const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
  const itemActive = document.querySelector(".carousel_item__active");
  const itemActiveIndex = itemsArray.indexOf(itemActive);
  return itemActiveIndex;
}

function slideIndicator(toIndex) {
  const dots = document.querySelectorAll(".carousel_dot");
  const dotActive = document.querySelector(".carousel_dot__active");
  const newDotActive = dots[toIndex];

  dotActive.classList.remove("carousel_dot__active");
  newDotActive.classList.add("carousel_dot__active");
}



var responsiveSlider = function() {

  var slider = document.getElementById("slider");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("slideWrap");
  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  
  window.addEventListener('resize', function() {
    sliderWidth = slider.offsetWidth;
  });
  
  var prevSlide = function() {
    if(count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = 1) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };
  
  var nextSlide = function() {
    if(count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = items) {
      slideList.style.left = "0px";
      count = 1;
    }
  };
  
  next.addEventListener("click", function() {
    nextSlide();
  });
  
  prev.addEventListener("click", function() {
    prevSlide();
  });
  
  setInterval(function() {
    nextSlide()
  }, 8000);
  
  };
  
  window.onload = function() {
  responsiveSlider();  
  }
import { movies } from "../services/fakeData.js";
import { showToast } from "./toast.js";

const sliders = document.querySelector(".home__movies_carousel-list");
const nowPlayingBtn = document.querySelector(".home__control_btn:first-child");
const comingSoonBtn = document.querySelector(".home__control_btn:last-child");
const toast = document.getElementById("toast");

const accessToken = localStorage.getItem("accessToken");

let isDown = false;
let startX;
let scrollLeft;

function renderMovies(type) {
  // Filter the movies based on their type
  const filteredMovies = movies.filter((movie) => movie.type === type);

  // Clear the movie list
  sliders.innerHTML = "";

  // Render the filtered movies as carousel items
  filteredMovies.forEach((movie) => {
    const movieItem = document.createElement("div");
    movieItem.classList.add("home__movies_list-item");

    const movieImg = document.createElement("img");
    movieImg.classList.add("home__movies_list-item_img");
    movieImg.src = movie.image;
    movieImg.alt = "img";
    movieItem.appendChild(movieImg);

    const movieName = document.createElement("p");
    movieName.classList.add("home__movies_list-item_name");
    movieName.textContent = movie.name;
    movieName.title = movie.name;
    movieItem.appendChild(movieName);

    const movieBtn = document.createElement("button");
    movieBtn.classList.add("home__movies_list-item_btn");
    movieBtn.textContent = "MUA VÉ";
    movieBtn.addEventListener("click", () => {
      if (accessToken && movie.type === "nowPlaying") {
        openMovieModal(movie);
      } else if (movie.type === "comingSoon") {
        toast.innerText = "Phim chưa khởi chiếu!";
        toast.style.backgroundColor = "red";
        showToast();
      } else {
        toast.innerText = "Vui lòng đăng nhập để mua vé!";
        toast.style.backgroundColor = "red";
        showToast();
      }
    });
    movieItem.appendChild(movieBtn);

    sliders.appendChild(movieItem);
  });
}

// Render the now playing movies by default
renderMovies("nowPlaying");

nowPlayingBtn.addEventListener("click", () => {
  renderMovies("nowPlaying");
});

comingSoonBtn.addEventListener("click", () => {
  renderMovies("comingSoon");
});

function openMovieModal(movie) {
  const movieModal = document.getElementById("movie-modal");
  const movieTitle = document.getElementById("movie-title");
  const movieImage = document.getElementById("movie-image");
  const movieDescription = document.getElementById("movie-description");

  movieTitle.textContent = movie.name;
  movieImage.src = movie.image;
  movieDescription.textContent = movie.summary;
  // buyTicketBtn.setAttribute("data-movie-id", movie.id);

  movieModal.style.display = "flex";

  const closeBtn = document.getElementsByClassName("closeModal")[0];
  closeBtn.onclick = function () {
    movieModal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == movieModal) {
      movieModal.style.display = "none";
    }
  };
}

const carouselContainer = document.querySelector(".home__movies_carousel");

const switchLeft = document.createElement("img");
switchLeft.src = "./assets/svg/arrow.svg";
switchLeft.alt = "arrow";
switchLeft.id = "switchLeft";
switchLeft.classList.add("switchLeft", "sliderButton");
switchLeft.addEventListener("click", function (event) {
  event.preventDefault();
  let currentScrollPosition = sliders.scrollLeft;
  let newScrollPosition = currentScrollPosition - 500;
  let step = 0;
  const scrollInterval = setInterval(() => {
    step += 20;
    sliders.scrollLeft = easeInOutQuad(
      step,
      currentScrollPosition,
      newScrollPosition - currentScrollPosition,
      500
    );
    if (step >= 500) {
      clearInterval(scrollInterval);
    }
  }, 20);
});

const switchRight = document.createElement("img");
switchRight.src = "./assets/svg/arrow.svg";
switchRight.alt = "arrow";
switchRight.id = "switchRight";
switchRight.classList.add("switchRight", "sliderButton");
switchRight.addEventListener("click", function (event) {
  event.preventDefault();
  let currentScrollPosition = sliders.scrollLeft;
  let newScrollPosition = currentScrollPosition + 500;
  let step = 0;
  const scrollInterval = setInterval(() => {
    step += 20;
    sliders.scrollLeft = easeInOutQuad(
      step,
      currentScrollPosition,
      newScrollPosition - currentScrollPosition,
      500
    );
    if (step >= 500) {
      clearInterval(scrollInterval);
    }
  }, 20);
});

function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}

carouselContainer.appendChild(switchLeft);
carouselContainer.appendChild(switchRight);

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
  const walk = x - startX; //scroll-fast
  sliders.scrollLeft = scrollLeft - walk;
});

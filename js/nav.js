const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__mobie");

const navHome = document.getElementById("navHome");
const navIntroduction = document.getElementById("navIntroduction");
const navShowtimes = document.getElementById("navShowtimes");
const navNews = document.getElementById("navNews");
const navPrice = document.getElementById("navPrice");

const windowLocation = window.location.pathname;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll("a").forEach((item) =>
  item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

document.querySelectorAll("div.toggle").forEach((item) =>
  item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

if (windowLocation == "/index.html") {
  navHome.style.borderBottom = "2px solid var(--secondaryRed)";
  navHome.style.color = "white";
}

if (windowLocation == "/introduction.html") {
  navIntroduction.style.borderBottom = "2px solid var(--secondaryRed)";
  navIntroduction.style.color = "white";
}

if (windowLocation == "/showtimes.html") {
  navShowtimes.style.borderBottom = "2px solid var(--secondaryRed)";
  navShowtimes.style.color = "white";
}

if (windowLocation == "/news.html") {
  navNews.style.borderBottom = "2px solid var(--secondaryRed)";
  navNews.style.color = "white";
}

if (windowLocation == "/price.html") {
  navPrice.style.borderBottom = "2px solid var(--secondaryRed)";
  navPrice.style.color = "white";
}

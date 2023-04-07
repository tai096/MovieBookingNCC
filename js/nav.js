const hamburger = document.getElementById("hamburger");
const bars = document.querySelectorAll(".bar");
const navMenu = document.querySelector(".nav__mobie");
const navMobie = document.getElementById("navMobie");
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

document.querySelectorAll("button").forEach((item) =>
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

document.onclick = function (event) {
  if (event.target !== navMobie && event.target !== hamburger) {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  }
};

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

var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

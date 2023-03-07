const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");
const ball = document.getElementById("ball");

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

const handleDarkMode = () => {
  const setTheme = document.body;
  let theme = "lightMode";

  setTheme.classList.toggle("darkmode");

  if (setTheme.classList.contains("darkmode")) {
    ball.style.transform = "translate(39px)";
    theme = "darkMode";
  } else {
    ball.style.transform = "translate(0px)";
    theme = "lightMode";
  }

  localStorage.setItem("webTheme", JSON.stringify(theme));
};

let getTheme = JSON.parse(localStorage.getItem("webTheme"));

if (getTheme === "darkMode") {
  document.body.classList = "darkmode";
  ball.style.transform = "translate(39px)";
}

const ball = document.getElementById("ball");
const footer = document.getElementById("footer");
const controlBtns = document.querySelectorAll(".home__control_btn");

const handleDarkMode = () => {
  const setTheme = document.body;
  let theme = "lightMode";

  setTheme.classList.toggle("darkmode");

  if (setTheme.classList.contains("darkmode")) {
    theme = "darkMode";
    ball.style.transform = "translate(39px)";
    footer.style.background = "transparent";
    controlBtns.forEach((controlBtn) => {
      controlBtn.style.color = "white";
    });
  } else {
    theme = "lightMode";
    ball.style.transform = "translate(0px)";
    footer.style.background = "var(--darkBrown)";
    controlBtns.forEach((controlBtn) => {
      controlBtn.style.color = "black";
    });
  }

  localStorage.setItem("webTheme", JSON.stringify(theme));
};

let getTheme = JSON.parse(localStorage.getItem("webTheme"));

if (getTheme === "darkMode") {
  document.body.classList = "darkmode";
  ball.style.transform = "translate(39px)";
  footer.style.background = "transparent";
  controlBtns.forEach((controlBtn) => {
    controlBtn.style.color = "white";
  });
}

const ball = document.getElementById("ball");
const footer = document.getElementById("footer");

const handleDarkMode = () => {
  const setTheme = document.body;
  let theme = "lightMode";

  setTheme.classList.toggle("darkmode");

  if (setTheme.classList.contains("darkmode")) {
    ball.style.transform = "translate(39px)";
    footer.style.background = "transparent";
    theme = "darkMode";
  } else {
    ball.style.transform = "translate(0px)";
    footer.style.background = "var(--darkBrown)";
    theme = "lightMode";
  }

  localStorage.setItem("webTheme", JSON.stringify(theme));
};

let getTheme = JSON.parse(localStorage.getItem("webTheme"));

if (getTheme === "darkMode") {
  document.body.classList = "darkmode";
  ball.style.transform = "translate(39px)";
  footer.style.background = "transparent";
}

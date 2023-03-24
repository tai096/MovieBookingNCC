const ball = document.getElementById("ball");
const footer = document.getElementById("footer");
const controlBtns = document.querySelectorAll(".home__control_btn");
const showMoreBtns = document.querySelectorAll(".home__showMore");

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
      controlBtn.addEventListener("mouseover", () => {
        controlBtn.style.color = "white";
      });
      controlBtn.addEventListener("mouseout", () => {
        controlBtn.style.color = "white";
      });
    });
    showMoreBtns.forEach((showMoreBtn) => {
      showMoreBtn.style.color = "white";
      showMoreBtn.addEventListener("mouseover", () => {
        showMoreBtn.style.color = "var(--primaryRed)";
      });
      showMoreBtn.addEventListener("mouseout", () => {
        showMoreBtn.style.color = "white";
      });
    });
  } else {
    theme = "lightMode";
    ball.style.transform = "translate(0px)";
    footer.style.background = "var(--darkBrown)";
    controlBtns.forEach((controlBtn) => {
      controlBtn.style.color = "var(--darkBrown)";
      controlBtn.addEventListener("mouseover", () => {
        controlBtn.style.color = "white";
      });
      controlBtn.addEventListener("mouseout", () => {
        controlBtn.style.color = "var(--darkBrown)";
      });
    });
    showMoreBtns.forEach((showMoreBtn) => {
      showMoreBtn.style.color = "var(--darkBrown)";
      showMoreBtn.addEventListener("mouseover", () => {
        showMoreBtn.style.color = "var(--primaryRed)";
      });
      showMoreBtn.addEventListener("mouseout", () => {
        showMoreBtn.style.color = "var(--darkBrown)";
      });
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
    controlBtn.addEventListener("mouseover", () => {
      controlBtn.style.color = "white";
    });
    controlBtn.addEventListener("mouseout", () => {
      controlBtn.style.color = "white";
    });
  });
  showMoreBtns.forEach((showMoreBtn) => {
    showMoreBtn.style.color = "white";
    showMoreBtn.addEventListener("mouseover", () => {
      showMoreBtn.style.color = "var(--primaryRed)";
    });
    showMoreBtn.addEventListener("mouseout", () => {
      showMoreBtn.style.color = "white";
    });
  });
}

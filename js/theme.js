const ball = document.getElementById("ball");
const footer = document.getElementById("footer");
const controlBtns = document.querySelectorAll(".home__control_btn");
const showMoreBtns = document.querySelectorAll(".home__showMore");
const homeNewsLines = document.querySelectorAll(".home__news_header-line");
const popUps = document.querySelectorAll(".popup-content");
const registerFormBlocks = document.querySelectorAll(".register__form_block");
const loginFormBlocks = document.querySelectorAll(".loginForm__form_block");
const formLines = document.querySelectorAll(".form__line");
const closeBtns = document.querySelectorAll(".close");
const loginGoogleBtn = document.getElementById("loginGoogleBtn");
const registerGoogleBtn = document.getElementById("registerGoogleBtn");
const loginFacebookBtn = document.getElementById("loginFacebookBtn");
const registerFacebookBtn = document.getElementById("registerFacebookBtn");
const newsHeadingLines = document.querySelectorAll(".news__heading_line");
const pricePageTitleLines = document.querySelectorAll(".price__pageTitle_line");
const introductionPageTitleLines = document.querySelectorAll(
  ".introduction__pageTitle_line"
);
const blockParas = document.querySelectorAll(".block_para");
const dashLines = document.querySelectorAll(".dashline");
const titleImg = document.getElementById("titleImg");
const pageTitle_icon = document.getElementById("pageTitle_icon");
const toggleMobile = document.getElementById("toggleMobile");
const profileInformationHeader = document.getElementById(
  "profileInformationHeader"
);
const profileSpending = document.getElementById("profileSpending");
const profileSpendingImg = document.getElementById("profileSpendingImg");
const profileSpendingCardImg = document.getElementById(
  "profileSpendingCardImg"
);

const handleDarkMode = () => {
  const setTheme = document.body;
  let theme = "lightMode";

  setTheme.classList.toggle("darkmode");

  if (setTheme.classList.contains("darkmode")) {
    theme = "darkMode";
    ball.style.transform = "translate(39px)";
    footer.style.background = "#0000002e";

    if (profileInformationHeader) {
      profileInformationHeader.style.borderBottomColor = "white";
      profileSpending.style.borderColor = "white";
    }

    if (titleImg) {
      titleImg.src = "./assets/img/myheaderdark.png";
      pageTitle_icon.src = "./assets/svg/cameradark.svg";
    }

    if (profileSpendingImg) {
      profileSpendingImg.src = "./assets/img/spendingGroupDark.png";
      profileSpendingCardImg.src = "./assets/img/cardGroupDark.png";
    }

    homeNewsLines.forEach((homeNewsLine) => {
      homeNewsLine.style.backgroundColor = "white";
    });

    newsHeadingLines.forEach((newsHeadingLine) => {
      newsHeadingLine.style.backgroundColor = "white";
    });

    pricePageTitleLines.forEach((pricePageTitleLine) => {
      pricePageTitleLine.style.backgroundColor = "white";
    });

    introductionPageTitleLines.forEach((introductionPageTitleLine) => {
      introductionPageTitleLine.style.backgroundColor = "white";
    });

    blockParas.forEach((blockPara) => {
      blockPara.style.borderLeft = "2px solid white";
    });

    dashLines.forEach((dashLine) => {
      dashLine.style.borderBottom = "2px dashed white";
    });

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

    popUps.forEach((popUp) => {
      popUp.style.backgroundColor = "#88888842";
      popUp.style.backdropFilter = "blur(30px)";
    });

    loginFormBlocks.forEach((loginFormBlock) => {
      loginFormBlock.style.borderColor = "white";
    });

    registerFormBlocks.forEach((registerFormBlock) => {
      registerFormBlock.style.borderColor = "white";
    });

    formLines.forEach((formLine) => {
      formLine.style.backgroundColor = "white";
    });

    closeBtns.forEach((closeBtn) => {
      closeBtn.style.filter = "invert(100%)";
    });

    loginGoogleBtn.style.backgroundColor = "white";
    loginGoogleBtn.style.color = "black";

    loginFacebookBtn.style.backgroundColor = "white";
    loginFacebookBtn.style.color = "black";

    registerGoogleBtn.style.backgroundColor = "white";
    registerGoogleBtn.style.color = "black";

    registerFacebookBtn.style.backgroundColor = "white";
    registerFacebookBtn.style.color = "black";

    toggleMobile.className = "fas fa-sun fa-sun_mobile";
  } else {
    theme = "lightMode";
    ball.style.transform = "translate(0px)";
    footer.style.background = "var(--darkBrown)";

    if (titleImg) {
      titleImg.src = "./assets/img/myheader.png";
      pageTitle_icon.src = "./assets/svg/camera.svg";
    }

    if (profileInformationHeader) {
      profileInformationHeader.style.borderBottomColor = "var(--darkBrown)";
      profileSpending.style.borderColor = "var(--darkBrown)";
    }

    if (profileSpendingImg) {
      profileSpendingImg.src = "./assets/img/spendingGroup.png";
      profileSpendingCardImg.src = "./assets/img/cardGroup.png";
    }

    homeNewsLines.forEach((homeNewsLine) => {
      homeNewsLine.style.backgroundColor = "var(--darkBrown)";
    });

    newsHeadingLines.forEach((newsHeadingLine) => {
      newsHeadingLine.style.backgroundColor = "var(--darkBrown)";
    });

    pricePageTitleLines.forEach((pricePageTitleLine) => {
      pricePageTitleLine.style.backgroundColor = "var(--darkBrown)";
    });

    blockParas.forEach((blockPara) => {
      blockPara.style.borderLeft = "2px solid var(--darkBrown)";
    });

    dashLines.forEach((dashLine) => {
      dashLine.style.borderBottom = "2px dashed var(--darkBrown)";
    });

    introductionPageTitleLines.forEach((introductionPageTitleLine) => {
      introductionPageTitleLine.style.backgroundColor = "var(--darkBrown)";
    });

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

    popUps.forEach((popUp) => {
      popUp.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    });

    loginFormBlocks.forEach((loginFormBlock) => {
      loginFormBlock.style.borderColor = "#a3a3a3";
    });

    registerFormBlocks.forEach((registerFormBlock) => {
      registerFormBlock.style.borderColor = "#a3a3a3";
    });

    formLines.forEach((formLine) => {
      formLine.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    });

    closeBtns.forEach((closeBtn) => {
      closeBtn.style.filter = "invert(0%)";
    });

    loginGoogleBtn.style.backgroundColor = "var(--secondaryRed)";
    loginGoogleBtn.style.color = "white";

    loginFacebookBtn.style.backgroundColor = "#368bfa";
    loginFacebookBtn.style.color = "white";

    registerGoogleBtn.style.backgroundColor = "var(--secondaryRed)";
    registerGoogleBtn.style.color = "white";

    registerFacebookBtn.style.backgroundColor = "#368bfa";
    registerFacebookBtn.style.color = "white";

    toggleMobile.className = "fas fa-moon fa-moon_mobile";
  }

  localStorage.setItem("webTheme", JSON.stringify(theme));
};

let getTheme = JSON.parse(localStorage.getItem("webTheme"));

if (getTheme === "darkMode") {
  document.body.classList = "darkmode";
  ball.style.transform = "translate(39px)";
  footer.style.background = "#0000002e";

  homeNewsLines.forEach((homeNewsLine) => {
    homeNewsLine.style.background = "white";
  });

  newsHeadingLines.forEach((newsHeadingLine) => {
    newsHeadingLine.style.backgroundColor = "white";
  });

  pricePageTitleLines.forEach((pricePageTitleLine) => {
    pricePageTitleLine.style.backgroundColor = "white";
  });

  introductionPageTitleLines.forEach((introductionPageTitleLine) => {
    introductionPageTitleLine.style.backgroundColor = "white";
  });

  blockParas.forEach((blockPara) => {
    blockPara.style.borderLeft = "2px solid white";
  });

  dashLines.forEach((dashLine) => {
    dashLine.style.borderBottom = "2px dashed white";
  });

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

  popUps.forEach((popUp) => {
    popUp.style.backgroundColor = "#88888842";
    popUp.style.backdropFilter = "blur(30px)";
  });

  loginFormBlocks.forEach((loginFormBlock) => {
    loginFormBlock.style.borderColor = "white";
  });

  registerFormBlocks.forEach((registerFormBlock) => {
    registerFormBlock.style.borderColor = "white";
  });

  formLines.forEach((formLine) => {
    formLine.style.backgroundColor = "white";
  });

  closeBtns.forEach((closeBtn) => {
    closeBtn.style.filter = "invert(100%)";
  });

  loginGoogleBtn.style.backgroundColor = "white";
  loginGoogleBtn.style.color = "black";

  loginFacebookBtn.style.backgroundColor = "white";
  loginFacebookBtn.style.color = "black";

  registerGoogleBtn.style.backgroundColor = "white";
  registerGoogleBtn.style.color = "black";

  registerFacebookBtn.style.backgroundColor = "white";
  registerFacebookBtn.style.color = "black";

  if (titleImg) {
    titleImg.src = "./assets/img/myheaderdark.png";
    pageTitle_icon.src = "./assets/svg/cameradark.svg";
  }

  if (profileInformationHeader) {
    profileInformationHeader.style.borderBottomColor = "white";
    profileSpending.style.borderColor = "white";
  }

  toggleMobile.className = "fas fa-sun fa-sun_mobile";

  if (profileSpendingImg) {
    profileSpendingImg.src = "./assets/img/spendingGroupDark.png";
    profileSpendingCardImg.src = "./assets/img/cardGroupDark.png";
  }
}

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
const showtimesPageTitleLines = document.querySelectorAll(".showtimes__pageTitle_line");
const showtimesCalendarItems = document.querySelectorAll(".showtimes__calendar_grid-item");
const divOfShowtimesCalendarItems = document.querySelectorAll(".showtimes__calendar-gridcontainer > div");
const clockIcons = document.querySelectorAll(".clockIcon");
const actorIcons = document.querySelectorAll(".actorIcon");
const directorIcons = document.querySelectorAll(".directorIcon");
const flagIcons = document.querySelectorAll(".flagIcon");
const publishIcons = document.querySelectorAll(".publishIcon");
const dangerIcons = document.querySelectorAll(".dangerIcon");
const showtimesTimeSelectBtns = document.querySelectorAll(".showtimes__filmSection_timeBtn");

const handleDarkMode = () => {
  const setTheme = document.body;
  let theme = "lightMode";

  setTheme.classList.toggle("darkmode");

  if (setTheme.classList.contains("darkmode")) {
    theme = "darkMode";
    ball.style.transform = "translate(39px)";
    footer.style.background = "#0000002e";

    homeNewsLines.forEach((homeNewsLine) => {
      homeNewsLine.style.backgroundColor = "white";
    });

    newsHeadingLines.forEach((newsHeadingLine) => {
      newsHeadingLine.style.backgroundColor = "white";
    });

    pricePageTitleLines.forEach((pricePageTitleLine) => {
      pricePageTitleLine.style.backgroundColor = "white";
    });

    showtimesPageTitleLines.forEach((showtimesPageTitleLine) => {
      showtimesPageTitleLine.style.backgroundColor = "white";
    });

    showtimesCalendarItems.forEach((showtimesCalendarItem) => {
      showtimesCalendarItem.style.backgroundColor = "var(--darkModeBg)";
      showtimesCalendarItem.style.color = "white";

      showtimesCalendarItem.onmousemove = function() {
        showtimesCalendarItem.style.backgroundColor = "white";
        showtimesCalendarItem.style.color = "var(--darkModeBg)";
      };
      showtimesCalendarItem.onmouseleave = function() {
        showtimesCalendarItem.style.backgroundColor = "var(--darkModeBg)";
        showtimesCalendarItem.style.color = "white";
      };
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
      popUp.style.backgroundColor = "var(--darkBrown)";
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

    divOfShowtimesCalendarItems.forEach((divOfShowtimesCalendarItem) => {
      divOfShowtimesCalendarItem.style.backgroundColor = "transparent";
    });

    clockIcons.forEach((clockIcon) => {
      clockIcon.src = "./assets/svg/clock_icon_white.svg";
    });

    actorIcons.forEach((actorIcon) => {
      actorIcon.src = "./assets/svg/actor_icon_white.svg";
    });

    directorIcons.forEach((directorIcon) => {
      directorIcon.src = "./assets/svg/director_icon_white.svg";
    });
    
    flagIcons.forEach((flagIcon) => {
      flagIcon.src = "./assets/svg/flag_icon_white.svg";
    });

    publishIcons.forEach((publishIcon) => {
      publishIcon.src = "./assets/svg/publish_icon_white.svg";
    });

    dangerIcons.forEach((dangerIcon) => {
      dangerIcon.src = "./assets/svg/danger_icon_white.svg";
    });

    showtimesTimeSelectBtns.forEach((showtimesTimeSelectBtn) => {
      showtimesTimeSelectBtn.style.borderColor = "white";
      showtimesTimeSelectBtn.style.color = "white";
      showtimesTimeSelectBtn.style.backgroundColor = "transparent";
      
      showtimesTimeSelectBtn.onmousemove = function() {
        showtimesTimeSelectBtn.style.borderColor = "var(--secondaryRed)";
        showtimesTimeSelectBtn.style.color = "var(--secondaryRed)";
      };

      showtimesTimeSelectBtn.onmouseleave = function() {
        showtimesTimeSelectBtn.style.borderColor = "white";
        showtimesTimeSelectBtn.style.color = "white";
      };
    });
  } else {
    theme = "lightMode";
    ball.style.transform = "translate(0px)";
    footer.style.background = "var(--darkBrown)";

    homeNewsLines.forEach((homeNewsLine) => {
      homeNewsLine.style.backgroundColor = "var(--darkBrown)";
    });

    newsHeadingLines.forEach((newsHeadingLine) => {
      newsHeadingLine.style.backgroundColor = "var(--darkBrown)";
    });

    pricePageTitleLines.forEach((pricePageTitleLine) => {
      pricePageTitleLine.style.backgroundColor = "var(--darkBrown)";
    });

    showtimesPageTitleLines.forEach((showtimesPageTitleLine) => {
      showtimesPageTitleLine.style.backgroundColor = "var(--darkBrown)";
    });

    showtimesCalendarItems.forEach((showtimesCalendarItem) => {
      showtimesCalendarItem.style.backgroundColor = "white";
      showtimesCalendarItem.style.color = "var(--darkBrown)";

      showtimesCalendarItem.onmousemove = function() {
        showtimesCalendarItem.style.backgroundColor = "var(--darkBrown)";
        showtimesCalendarItem.style.color = "white"
      };
      showtimesCalendarItem.onmouseleave = function() {
        showtimesCalendarItem.style.backgroundColor = "white";
        showtimesCalendarItem.style.color = "var(--darkBrown)";
      };
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
      popUp.style.backgroundColor = "white";
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

    clockIcons.forEach((clockIcon) => {
      clockIcon.src = "./assets/svg/Three o Clock clock.svg";
    });

    actorIcons.forEach((actorIcon) => {
      actorIcon.src = "./assets/svg/actors.svg";
    });

    directorIcons.forEach((directorIcon) => {
      directorIcon.src = "./assets/svg/film_director.svg";
    });
    
    flagIcons.forEach((flagIcon) => {
      flagIcon.src = "./assets/svg/Flag.svg";
    });

    publishIcons.forEach((publishIcon) => {
      publishIcon.src = "./assets/svg/camera_publish.svg";
    });

    dangerIcons.forEach((dangerIcon) => {
      dangerIcon.src = "./assets/svg/danger.svg";
    });

    showtimesTimeSelectBtns.forEach((showtimesTimeSelectBtn) => {
      showtimesTimeSelectBtn.style.borderColor = "var(--darkBrown)";
      showtimesTimeSelectBtn.style.color = "var(--darkBrown)";
      showtimesTimeSelectBtn.style.backgroundColor = "transparent";
      
      showtimesTimeSelectBtn.onmousemove = function() {
        showtimesTimeSelectBtn.style.borderColor = "var(--primaryRed)";
        showtimesTimeSelectBtn.style.color = "var(--primaryRed)";
      };

      showtimesTimeSelectBtn.onmouseleave = function() {
        showtimesTimeSelectBtn.style.borderColor = "var(--darkBrown)";
        showtimesTimeSelectBtn.style.color = "var(--darkBrown)";
      };
    });
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

  showtimesPageTitleLines.forEach((showtimesPageTitleLine) => {
    showtimesPageTitleLine.style.backgroundColor = "white";
  });

  showtimesCalendarItems.forEach((showtimesCalendarItem) => {
    showtimesCalendarItem.style.backgroundColor = "var(--darkModeBg)";
    showtimesCalendarItem.style.color = "white";
    
    showtimesCalendarItem.onmousemove = function() {
      showtimesCalendarItem.style.backgroundColor = "white";
      showtimesCalendarItem.style.color = "var(--darkModeBg)";
    };
    showtimesCalendarItem.onmouseleave = function() {
      showtimesCalendarItem.style.backgroundColor = "var(--darkModeBg)";
      showtimesCalendarItem.style.color = "white";
    };
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
    popUp.style.backgroundColor = "var(--darkBrown)";
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

  divOfShowtimesCalendarItems.forEach((divOfShowtimesCalendarItem) => {
    divOfShowtimesCalendarItem.style.backgroundColor = "transparent";
  });

  clockIcons.forEach((clockIcon) => {
    clockIcon.src = "./assets/svg/clock_icon_white.svg";
  });

  actorIcons.forEach((actorIcon) => {
    actorIcon.src = "./assets/svg/actor_icon_white.svg";
  });

  directorIcons.forEach((directorIcon) => {
    directorIcon.src = "./assets/svg/director_icon_white.svg";
  });
  
  flagIcons.forEach((flagIcon) => {
    flagIcon.src = "./assets/svg/flag_icon_white.svg";
  });

  publishIcons.forEach((publishIcon) => {
    publishIcon.src = "./assets/svg/publish_icon_white.svg";
  });

  dangerIcons.forEach((dangerIcon) => {
    dangerIcon.src = "./assets/svg/danger_icon_white.svg";
  });

  showtimesTimeSelectBtns.forEach((showtimesTimeSelectBtn) => {
    showtimesTimeSelectBtn.style.borderColor = "white";
    showtimesTimeSelectBtn.style.color = "white";
    showtimesTimeSelectBtn.style.backgroundColor = "transparent";
    
    showtimesTimeSelectBtn.onmousemove = function() {
      showtimesTimeSelectBtn.style.borderColor = "var(--secondaryRed)";
      showtimesTimeSelectBtn.style.color = "var(--secondaryRed)";
    };

    showtimesTimeSelectBtn.onmouseleave = function() {
      showtimesTimeSelectBtn.style.borderColor = "white";
      showtimesTimeSelectBtn.style.color = "white";
    };
  });
}
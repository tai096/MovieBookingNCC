const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

// When the user clicks anywhere outside of the popup, close it
window.onclick = function (event) {
  if (event.target == loginForm) {
    loginForm.style.display = "none";
  }
  if (event.target == registerForm) {
    registerForm.style.display = "none";
  }
};

function openRegisterPopup() {
  registerForm.style.display = "block";
  loginForm.style.display = "none";
}

function closeRegisterPopup() {
  registerForm.style.display = "none";
}

function openLoginPopup() {
  registerForm.style.display = "none";
  loginForm.style.display = "block";
}

function closeLoginPopup() {
  loginForm.style.display = "none";
}

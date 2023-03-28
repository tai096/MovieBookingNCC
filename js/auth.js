import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const loginNavBtn = document.getElementById("loginNav");
const closeLoginBtn = document.getElementById("closeLogin");
const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");
const closeRegisterBtn = document.getElementById("closeRegister");
const loginSubmit = document.getElementById("login");
const email = document.getElementById("emailLogin");
const password = document.getElementById("passLogin");

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

loginNavBtn.addEventListener("click", () => {
  openLoginPopup();
});

closeLoginBtn.addEventListener("click", () => {
  closeLoginPopup();
});

registerBtn.addEventListener("click", () => {
  openRegisterPopup();
});

closeRegisterBtn.addEventListener("click", () => {
  closeRegisterPopup();
});

loginBtn.addEventListener("click", () => {
  openLoginPopup();
});

// loginSubmit.addEventListener("click", () => {
//   const auth = getAuth();
//   signInWithEmailAndPassword(auth, email.value, password.value)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;

//       console.log(user);
//       localStorage.setItem("accessToken", user.accessToken);
//       localStorage.setItem("email", user.email);
//       location.reload();
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });

//   email.value = "";
//   password.value = "";
// });

const accessToken = localStorage.getItem("accessToken");
const userEmail = localStorage.getItem("email");

if (accessToken) {
  loginNavBtn.innerText = `${userEmail}`;
}

openRegisterPopup();

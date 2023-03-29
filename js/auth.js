import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import {
  set,
  ref,
  child,
  get,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
import { auth, database } from "../services/firebase.js";

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const loginNavBtn = document.getElementById("loginNav");
const closeLoginBtn = document.getElementById("closeLogin");
const registerMember = document.getElementById("registerMember");
const hadAccBtn = document.getElementById("hadAccBtn");
const closeRegisterBtn = document.getElementById("closeRegister");

const loginBtn = document.getElementById("loginBtn");
const loginGoogleBtn = document.getElementById("loginGoogleBtn");
const loginFacebookBtn = document.getElementById("loginFacebookBtn");
const emailLoginInput = document.getElementById("emailLoginInput");
const passwordLoginInput = document.getElementById("passwordLoginInput");

const nameRegisterInput = document.getElementById("nameRegisterInput");
const emailRegisterInput = document.getElementById("emailRegisterInput");
const passRegisterInput = document.getElementById("passRegisterInput");
const passConfirmRegisterInput = document.getElementById(
  "passConfirmRegisterInput"
);
const dateRegisterInput = document.getElementById("dateRegisterInput");
const sexRegisterInput = document.getElementById("sexRegisterInput");
const phoneRegisterInput = document.getElementById("phoneRegisterInput");
const registerBtn = document.getElementById("registerBtn");

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

registerMember.addEventListener("click", () => {
  openRegisterPopup();
});

closeRegisterBtn.addEventListener("click", () => {
  closeRegisterPopup();
});

hadAccBtn.addEventListener("click", () => {
  openLoginPopup();
});

const handleLogin = () => {
  signInWithEmailAndPassword(
    auth,
    emailLoginInput.value,
    passwordLoginInput.value
  )
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      localStorage.setItem("accessToken", user.accessToken);
      localStorage.setItem("userId", user.uid);

      alert("Đăng nhập thành công!");
      location.reload();
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
      openRegisterPopup();
    });
};

const handleSignUp = () => {
  createUserWithEmailAndPassword(
    auth,
    emailRegisterInput.value,
    passRegisterInput.value
  )
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      set(ref(database, "users/" + user.uid), {
        id: user.uid,
        email: emailRegisterInput.value,
        userName: nameRegisterInput.value,
        date: dateRegisterInput.value,
        sex: sexRegisterInput.value,
        phone: phoneRegisterInput.value,
      });

      localStorage.setItem("accessToken", user.accessToken);
      localStorage.setItem("userId", user.uid);

      alert("Đăng ký thành công!");
      location.reload();
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
};

const handleLogout = () => {
  localStorage.clear();
  location.reload();
};

loginBtn.addEventListener("click", (e) => {
  handleLogin();
});

registerBtn.addEventListener("click", (e) => {
  handleSignUp();
});

const accessToken = localStorage.getItem("accessToken");
const userId = localStorage.getItem("userId");

const dbRef = ref(database);

const h1 = document.createElement("h1");
h1.className = "userName";

h1.addEventListener("click", () => {
  if (window.confirm("Bạn có chắc chắn muốn đăng xuất?") === true) {
    handleLogout();
  } else {
  }
});

const getUserData = () => {
  get(child(dbRef, `users/${userId}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        if (accessToken) {
          h1.innerText = `Hi, ${snapshot.val().userName}`;
          loginNavBtn.replaceWith(h1);
        }
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

getUserData();

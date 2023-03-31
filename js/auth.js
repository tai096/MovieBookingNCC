import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import {
  set,
  ref,
  child,
  get,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
import { auth, database } from "../services/firebase.js";
import { showToast } from "./toast.js";

let isLoading = false;

const toast = document.getElementById("toast");
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
  registerForm.style.display = "flex";
  loginForm.style.display = "none";
}

function closeRegisterPopup() {
  registerForm.style.display = "none";
}

function openLoginPopup() {
  registerForm.style.display = "none";
  loginForm.style.display = "flex";
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

const validateLoginForm = () => {
  if (emailLoginInput.value === "" || passwordLoginInput.value === "") {
    toast.innerText = "Vui lòng nhập đủ thông tin";
    toast.style.backgroundColor = "red";
    showToast();
    return false;
  } else {
    return true;
  }
};

const validateRegisterForm = () => {
  if (
    emailRegisterInput.value === "" ||
    passRegisterInput.value === "" ||
    passConfirmRegisterInput.value === "" ||
    phoneRegisterInput.value === "" ||
    nameRegisterInput.value === ""
  ) {
    toast.innerText = "Vui lòng nhập đủ thông tin";
    toast.style.backgroundColor = "red";
    showToast();
    return false;
  } else if (passRegisterInput.value !== passConfirmRegisterInput.value) {
    toast.innerText = "Xác nhận lại mật khẩu";
    toast.style.backgroundColor = "red";
    showToast();
    return false;
  } else {
    return true;
  }
};

const handleLogin = () => {
  isLoading = true;
  loginBtn.innerText = "LOADING...";
  loginBtn.style.cursor = "not-allowed";
  loginBtn.disabled = true;

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
      toast.style.backgroundColor = "green";
      toast.innerText = "Đăng nhập thành công !";
      showToast();
      location.reload();
    })
    .catch((error) => {
      const errorMessage = error.message;
      toast.innerText = errorMessage;
      toast.style.backgroundColor = "red";
      showToast();
    })
    .finally(() => {
      isLoading = false;
      loginBtn.innerText = "ĐĂNG NHẬP";
      loginBtn.disabled = false;
      loginBtn.style.cursor = "pointer";
    });
};

const handleSignUp = () => {
  isLoading = true;
  registerBtn.innerText = "LOADING...";
  registerBtn.style.cursor = "not-allowed";
  registerBtn.disabled = true;

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

      toast.style.backgroundColor = "green";
      toast.innerText = "Đăng ký thành công !";
      showToast();
      location.reload();
    })
    .catch((error) => {
      const errorMessage = error.message;
      toast.innerText = errorMessage;
      toast.style.backgroundColor = "red";
      showToast();
    })
    .finally(() => {
      isLoading = false;
      registerBtn.innerText = "TẠO TÀI KHOẢN";
      registerBtn.disabled = false;
      registerBtn.style.cursor = "pointer";
    });
};

const handleLogout = () => {
  signOut(auth)
    .then(() => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userId");
      location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};

const provider = new GoogleAuthProvider();

const handleLoginGoogle = () => {
  isLoading = true;
  loginGoogleBtn.innerText = "LOADING...";
  loginGoogleBtn.style.cursor = "not-allowed";
  loginGoogleBtn.disabled = true;

  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      set(ref(database, "users/" + user.uid), {
        id: user.uid,
        email: user.email,
        userName: user.displayName,
        date: user.date ? user.date : "",
        sex: user.sex ? user.sex : "",
        phone: user.phoneNumber,
      });

      localStorage.setItem("accessToken", user.accessToken);
      localStorage.setItem("userId", user.uid);

      location.reload();
    })
    .catch((error) => {
      const errorMessage = error.message;
      toast.innerText = errorMessage;
      toast.style.backgroundColor = "red";
      showToast();
    })
    .finally(() => {
      isLoading = false;
      loginGoogleBtn.innerText = "TẠO TÀI KHOẢN";
      loginGoogleBtn.disabled = false;
      loginGoogleBtn.style.cursor = "pointer";
    });
};

loginGoogleBtn.addEventListener("click", (e) => {
  handleLoginGoogle();
});

loginBtn.addEventListener("click", (e) => {
  if (validateLoginForm() == true) {
    handleLogin();
  }
});

registerBtn.addEventListener("click", (e) => {
  if (validateRegisterForm() == true) {
    handleSignUp();
  }
});

const accessToken = localStorage.getItem("accessToken");
const userId = localStorage.getItem("userId");

const dbRef = ref(database);

const h1 = document.createElement("h1");
h1.className = "userName";

h1.addEventListener("click", () => {
  if (window.confirm("Bạn có chắc chắn muốn đăng xuất?") === true) {
    handleLogout();
  }
});

export let userData;

export const getUserData = () => {
  return get(child(dbRef, `users/${userId}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        if (accessToken) {
          userData = snapshot.val();
          h1.innerText = `Hi, ${userData.userName}`;
          h1.title = userData.userName;
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

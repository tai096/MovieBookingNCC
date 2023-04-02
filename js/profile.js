import { database, storage } from "../services/firebase.js";
import { getUserData, handleLogout, userData } from "./auth.js";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-storage.js";
import {
  ref as databaseRef,
  update,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
import { showToast } from "./toast.js";

const toast = document.getElementById("toast");

const uploadInput = document.getElementById("upload");
const profileUploadBtn = document.getElementById("profileUploadBtn");
const updateAvt = document.getElementById("updateAvt");
const profileLogout = document.getElementById("profileLogout");
const logoutMobie = document.getElementById("logoutMobie");
const updateProfileBtn = document.getElementById("updateProfileBtn");

const profileAvt = document.getElementById("profileAvt");
const nameProfileInput = document.getElementById("nameProfileInput");
const emailProfileInput = document.getElementById("emailProfileInput");
const phoneProfileInput = document.getElementById("phoneProfileInput");
const sexProfileInput = document.getElementById("sexProfileInput");
const dateProfileInput = document.getElementById("dateProfileInput");

uploadInput.addEventListener("change", () => {
  if (uploadInput.value) {
    profileUploadBtn.innerText = uploadInput.value;
    profileUploadBtn.title = uploadInput.value;
    updateAvt.style.backgroundColor = "var(--primaryRed)";
    updateAvt.style.cursor = "pointer";
    updateAvt.addEventListener("click", () => {
      handleUpload();
    });
  }
});

getUserData()
  .then(() => {
    profileAvt.src = userData.image;
    nameProfileInput.placeholder = userData.userName;
    emailProfileInput.placeholder = userData.email;
    phoneProfileInput.placeholder = userData.phone;
    sexProfileInput.value = userData.sex;
    dateProfileInput.value = userData.date;
  })
  .catch(() => {
    window.location.replace("./index.html");
  });

profileLogout.addEventListener("click", () => {
  if (window.confirm("Bạn có chắc chắn muốn đăng xuất?") === true) {
    handleLogout();
  }
});

logoutMobie.addEventListener("click", () => {
  if (window.confirm("Bạn có chắc chắn muốn đăng xuất?") === true) {
    handleLogout();
  }
});

const handleUpload = () => {
  const file = document.getElementById("upload").files[0];
  const storageRef = ref(storage, `images/${file.name}`);

  uploadBytes(storageRef, file)
    .then(() => {
      toast.innerText = "Tải lên thành công!";
      toast.style.backgroundColor = "green";
      showToast();
    })
    .then(() => {
      getDownloadURL(storageRef).then((url) => {
        profileAvt.src = url;
      });
    });
};

const handleUpdateProfile = () => {
  const userRef = databaseRef(database, `users/${userData.id}`);
  update(userRef, {
    image: profileAvt.src,
  }).then(() => {
    toast.innerText = "Cập nhật thành công!";
    toast.style.backgroundColor = "green";
    showToast();
  });
};

updateProfileBtn.addEventListener("click", () => {
  handleUpdateProfile();
});

import { getUserData, userData } from "./auth.js";

const uploadInput = document.getElementById("upload");
const profileUploadBtn = document.getElementById("profileUploadBtn");
const updateAvt = document.getElementById("updateAvt");

const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const profilePhone = document.getElementById("profilePhone");
const profileSex = document.getElementById("profileSex");
const profileDate = document.getElementById("profileDate");

uploadInput.addEventListener("change", () => {
  if (uploadInput.value) {
    profileUploadBtn.innerText = uploadInput.value;
    profileUploadBtn.title = uploadInput.value;
    updateAvt.style.backgroundColor = "var(--primaryRed)";
    updateAvt.style.cursor = "pointer";
  }
});

getUserData().then(() => {
  console.log("user", userData);
  profileName.innerText = `-Tên: ${userData.userName}`;
  profileEmail.innerText = `-Email: ${userData.email}`;
  profilePhone.innerText = `-SĐT: ${userData.phone}`;
  profileSex.innerText = `-Giới tính: ${userData.sex}`;
  profileDate.innerText = `-Ngày sinh: ${userData.date}`;
});

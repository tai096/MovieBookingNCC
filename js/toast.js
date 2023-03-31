export const showToast = () => {
  var toast = document.getElementById("toast");
  toast.className = "show";
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 3000);
};

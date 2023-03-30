import { getUserData, userData } from "./auth.js";

getUserData().then(() => {
  console.log("user", userData);
});

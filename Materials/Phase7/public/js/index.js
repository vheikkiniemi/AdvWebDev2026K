import { initAuthUI, updateHomePageUI, logout } from "./auth-ui.js";

document.addEventListener("DOMContentLoaded", () => {
  initAuthUI();
  updateHomePageUI();
});

window.logout = logout;
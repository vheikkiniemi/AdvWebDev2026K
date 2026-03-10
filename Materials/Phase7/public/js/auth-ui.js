export function getTokenPayload() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (err) {
    console.error("Invalid token");
    localStorage.removeItem("token");
    return null;
  }
}

export function getUserRole() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.role;
  } catch {
    return null;
  }
}

export function updateAuthLinks() {
  const token = localStorage.getItem("token");
  const authLinks = document.querySelectorAll(".auth-link");

  authLinks.forEach((link) => {
    if (token) {
      if (link.dataset.auth === "guest") link.classList.add("hidden");
      if (link.dataset.auth === "user") link.classList.remove("hidden");
    } else {
      if (link.dataset.auth === "guest") link.classList.remove("hidden");
      if (link.dataset.auth === "user") link.classList.add("hidden");
    }
  });
}

export function updateResourceLinks() {
  const token = localStorage.getItem("token");
  const resLinks = document.querySelectorAll(".res-link");
  resLinks.forEach((link) => {
    if (token) {
      if (link.dataset.auth === "user") {
        link.classList.remove("cursor-not-allowed", "pointer-events-none");
      }
    } else {
      link.classList.add("cursor-not-allowed", "pointer-events-none");
    }
  });
}

export function updateHomePageUI() {
  const payload = getTokenPayload();
  if (!payload) return;

  const welcomeMsg = document.getElementById("welcome-message");
  const userBadge = document.getElementById("user-badge");
  const stBlT = document.getElementById("status-block-top");
  const stBlM = document.getElementById("status-block-middle");
  const stBlB = document.getElementById("status-block-bottom");
  const stBtL = document.getElementById("status-btn-left");

  if (welcomeMsg) {
    welcomeMsg.textContent = `Welcome, ${payload.firstName}!`;
  }

  if (userBadge) {
    userBadge.textContent = payload.role || "Member";
    userBadge.classList.replace("bg-brand-rose/10", "bg-brand-green/10");
    userBadge.classList.replace("text-brand-rose", "text-brand-green");
  }

  if (stBlT && stBlM && stBlB) {
    if (payload.role === "reserver") {
      stBlT.textContent = "You are logged in, and your role is a reserver.";
      stBlM.textContent = "As a reserver, you can view resources and make your own reservations.";
      stBlB.textContent = "Go ahead and make your reservation!";
    }

    if (payload.role === "manager") {
      stBlT.textContent = "You are logged in, and your role is a manager.";
      stBlM.textContent = "As a manager, you can modify resources and reservations.";
      stBlB.textContent = "Go ahead and get to work!";
    }
  }

  if (stBtL) {
    stBtL.href = "/profile";
    stBtL.textContent = "Account";
  }
}

export function initAuthUI() {
  updateAuthLinks();
  updateResourceLinks();
}

export function logout() {
  localStorage.removeItem("token");
  window.location.reload();
}

export function showAccessDenied() {
  const main = document.getElementById("mainContent");
  if (!main) return;

  main.innerHTML = `
    <div class="max-w-xl mx-auto text-center mt-20">
      <h1 class="text-3xl font-bold text-red-600 mb-4">Access denied</h1>
      <p class="text-gray-600 mb-6">
        Authentication is required to access this page. Please sign in first.
      </p>
      <a
        href="/login"
        class="inline-block rounded-xl bg-brand-primary px-6 py-3 text-white font-semibold hover:bg-brand-dark/80"
      >
        Go to login
      </a>
    </div>
  `;
}

export function requireAuthOrBlockPage() {
  const token = localStorage.getItem("token");
  if (!token) {
    showAccessDenied();
    return false;
  }

  try {
    JSON.parse(atob(token.split(".")[1]));
    return true;
  } catch (err) {
    localStorage.removeItem("token");
    showAccessDenied();
    return false;
  }
}

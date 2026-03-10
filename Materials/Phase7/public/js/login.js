// login.js
// Handles login form submission with fetch and user-friendly messages.

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const messageBox = document.getElementById("loginMessage");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const rememberMeInput = document.getElementById("rememberMe");
  const submitButton = form?.querySelector('button[type="submit"]');

  if (!form || !messageBox || !emailInput || !passwordInput) {
    return;
  }

  function showMessage(type, text) {
    const styles = {
      success: "border-brand-green/30 bg-brand-green/10 text-brand-green",
      error: "border-brand-rose/30 bg-brand-rose/10 text-brand-rose",
      info: "border-brand-blue/30 bg-brand-blue/10 text-brand-blue",
    };

    messageBox.className = `mt-6 rounded-2xl border px-4 py-3 text-sm ${styles[type] || styles.info}`;
    messageBox.textContent = text;
    messageBox.classList.remove("hidden");
  }

  function clearMessage() {
    messageBox.className = "hidden mt-6 rounded-2xl border px-4 py-3 text-sm";
    messageBox.textContent = "";
  }

  function setLoading(isLoading) {
    if (!submitButton) return;
    submitButton.disabled = isLoading;
    submitButton.textContent = isLoading ? "Signing in..." : "Sign in";
    submitButton.classList.toggle("opacity-60", isLoading);
    submitButton.classList.toggle("cursor-not-allowed", isLoading);
  }

  function validateForm() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      showMessage("error", "Please enter both email and password.");
      return false;
    }

    return true;
  }

  async function readResponseBody(response) {
    const contentType = response.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      return response.json();
    }

    return response.text();
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    clearMessage();

    if (!validateForm()) {
      return;
    }

    const payload = {
      email: emailInput.value.trim(),
      password: passwordInput.value,
      rememberMe: rememberMeInput?.checked || false,
    };

    const endpoint = form.getAttribute("data-api") || "/api/auth/login";

    try {
      setLoading(true);

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const body = await readResponseBody(response);

      if (!response.ok) {
        const errorMessage =
          body?.message ||
          body?.error ||
          (typeof body === "string" && body.trim()) ||
          "Sign-in failed. Please check your credentials and try again.";

        if (response.status === 400 || response.status === 401) {
          showMessage("error", errorMessage);
          return;
        }

        showMessage("error", `Request failed (${response.status}). ${errorMessage}`);
        return;
      }

      const successMessage =
        body?.message || "Sign-in successful. Redirecting...";

      showMessage("success", successMessage);
      localStorage.setItem("token", body.token);

      const redirectTo =
        body?.redirectTo ||
        form.getAttribute("data-success-redirect") ||
        "/";

      window.setTimeout(() => {
        window.location.href = redirectTo;
      }, 700);
    } catch (error) {
      console.error("Login request failed:", error);
      showMessage("error", "Unable to contact the server. Please try again.");
    } finally {
      setLoading(false);
    }
  });

  [emailInput, passwordInput].forEach((input) => {
    input.addEventListener("input", clearMessage);
  });
});

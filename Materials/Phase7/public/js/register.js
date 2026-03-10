// register.js
// Handles user registration with basic client-side validation and fetch.

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const messageBox = document.getElementById("registerMessage");
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const acceptTermsInput = document.getElementById("acceptTerms");
  const submitButton = document.getElementById("registerButton");

  if (
    !form ||
    !messageBox ||
    !firstNameInput ||
    !lastNameInput ||
    !emailInput ||
    !passwordInput ||
    !confirmPasswordInput ||
    !acceptTermsInput
  ) {
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
    submitButton.textContent = isLoading ? "Creating account..." : "Register";
    submitButton.classList.toggle("opacity-60", isLoading);
    submitButton.classList.toggle("cursor-not-allowed", isLoading);
  }

  function getSelectedRole() {
    return form.querySelector('input[name="role"]:checked')?.value || "student";
  }

  function validateForm() {
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      showMessage("error", "Please complete all required fields.");
      return false;
    }

    if (password.length < 8) {
      showMessage("error", "Password must be at least 8 characters long.");
      return false;
    }

    if (password !== confirmPassword) {
      showMessage("error", "Passwords do not match.");
      return false;
    }

    if (!acceptTermsInput.checked) {
      showMessage("error", "You must accept the terms and privacy policy before registering.");
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
      firstName: firstNameInput.value.trim(),
      lastName: lastNameInput.value.trim(),
      email: emailInput.value.trim(),
      password: passwordInput.value,
      role: getSelectedRole(),
    };

    console.log(payload);

    const endpoint = form.getAttribute("data-api") || "/api/auth/register";

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
          (Array.isArray(body?.errors) && body.errors.map((item) => item.msg).join(" ")) ||
          (typeof body === "string" && body.trim()) ||
          "Registration failed. Please review your input and try again.";

        if (response.status === 400 || response.status === 409) {
          showMessage("error", errorMessage);
          return;
        }

        showMessage("error", `Request failed (${response.status}). ${errorMessage}`);
        return;
      }

      const successMessage =
        body?.message || "Account created successfully. Redirecting to sign-in...";

      showMessage("success", successMessage);
      form.reset();

      const redirectTo =
        body?.redirectTo ||
        form.getAttribute("data-success-redirect") ||
        "/";

      window.setTimeout(() => {
        window.location.href = redirectTo;
      }, 900);
    } catch (error) {
      console.error("Registration request failed:", error);
      showMessage("error", "Unable to contact the server. Please try again.");
    } finally {
      setLoading(false);
    }
  });

  [firstNameInput, lastNameInput, emailInput, passwordInput, confirmPasswordInput, acceptTermsInput].forEach((input) => {
    input.addEventListener("input", clearMessage);
    input.addEventListener("change", clearMessage);
  });
});

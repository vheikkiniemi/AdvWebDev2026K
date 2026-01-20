> [!NOTE]
> The material was created with the help of ChatGPT and Copilot. 

# 📘 C1 Task: CSR Form Validation for Resources

## 🎯 Goal

Your goal is to improve **client-side + server-facing validation** for the Booking System **Resources** form so that:

* the form can only be submitted with **valid input**
* the UI clearly shows **valid vs invalid fields**
* the server receives **meaningful, correct data**

---

## 📦 Provided Materials

Download the Booking System Phase 2 code from GitHub:

* 🔗 [https://github.com/vheikkiniemi/AdvWebDev2026K/tree/main/Materials/Phase2/app](https://github.com/vheikkiniemi/AdvWebDev2026K/tree/main/Materials/Phase2/app)

---

## ✅ What you must do

### 1) Get the project running in your environment 🖥️🐳

Run the Booking System in **either**:

* a **Virtual Machine**, or
* **Docker**

You must be able to open the site in a browser and use the Resources page.

---

### 2) Enable **Create** only when ALL fields are valid ✅

Implement real validation so that the **Create** button is **disabled by default** and becomes enabled **only when**:

* all required fields contain valid values
* values are meaningful (not empty / not only spaces, etc.)

---

### 3) Make the server receive correct, meaningful data 📡

Even though you won’t edit server code, you must ensure that your frontend:

* **does not send invalid payloads**
* sends only cleaned/validated values (e.g., trimmed strings)
* handles server error responses sensibly (e.g., show an error message or keep Create disabled)

**Minimum expectation:** If the user tries invalid values, the request should not be sent (or the server response should clearly indicate the failure and the UI should not pretend it succeeded).

---

### 4) Field colors: green for valid, red for invalid 🟢🔴

On the Resources form, apply visual validation feedback:

* **Resource name**
* **Resource description**

Rules:

* If the value is valid → field shows **green**
* If invalid → field shows **red**

---

### 5) Take ONE screenshot proving it works 📸

Submit **one** screenshot that clearly shows:

* the site open in your browser
* the **environment evidence** (VM or Docker) visible in the screenshot

  * Example: VM terminal window with IP shown, or Docker terminal output / container running info
* the Resources page visible (and ideally: your validation behavior demonstrated)

**Important:** The screenshot must make it obvious which environment you used.

---

### 6) Push the full Booking System to your own GitHub repo 🧠📁

Your GitHub repository must contain the full Booking System code under:

* `BookingSystem/`

Then you submit:

* 🔗 a link to your repository (or directly to the `BookingSystem/` folder)

---

## 🚫 What you do NOT need to do

You must **not** change any other files.

✅ Only edit:

* `resources.html`
* `resources.js`

❌ Do not edit server files, other pages, or shared scripts.

> [!IMPORTANT]
> ❌ Do not change the page’s user interface (UI) → Change the user experience (UX) instead (this is the main purpose of CSR).

---

## 📤 Submission Instructions (Itslearning)

In the answer box (the C1 task), include:

1. **Screenshot** (VM or Docker proof + browser view)
2. **GitHub link** to your repository where the folder `BookingSystem/` contains the full project

---

## 💬 Grading Criteria (0–2 points)

* **`0 points:`** Screenshot is missing/unclear **and/or** code is not on GitHub.
* **`1 point:`** Partially working solution (validation incomplete, Create logic inconsistent, screenshot unclear).
* **`2 points:`** Everything correct:

  * Create enables only with valid inputs
  * Resource name + description show red/green correctly
  * frontend sends meaningful data / handles server responses sensibly
  * clear screenshot with environment proof
  * GitHub repo contains `BookingSystem/` with full code and working changes
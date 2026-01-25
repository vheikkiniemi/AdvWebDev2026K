# 📘 Task D: Debugging Client-Side **and** Server-Side Logic in the Booking System

## 🎯 Goal

The goal of this task is to **identify, analyze, and fix both client-side and server-side JavaScript errors** in the Booking System so that the Resources functionality works correctly end-to-end.

In this task you will practice:

* debugging **browser-based JavaScript** (client-side)
* debugging **Node.js server-side code**
* understanding how frontend and backend logic depend on each other
* validating correct behavior in a real runtime environment (VM or Docker)

---

## 📦 Provided Materials

* The task **starter code is provided as a ZIP file**
  👉 https://github.com/vheikkiniemi/AdvWebDev2026K/blob/main/Materials/Phase3/BookingSystemPhase3.zip

The project contains **at least six (6) errors**, distributed across:

### Client-side files (browser)

* `form.js`
* `resource.js`

### Server-side file (Node.js)

* `index.js` (executed with Node.js)

Additionally, Itslearning includes:

* 🎥 **A reference video** showing how the system **should behave when fully working**

---

## 🛠️ What You Must Do

### 1️⃣ Download and run the project locally

* Download and extract the provided ZIP file
* Run the application

Both the **frontend and backend must be running**.

---

### 2️⃣ Debug and fix the errors 🐞

You must inspect and correct errors in **both execution contexts**:

#### 🔹 Client-side (browser)

* JavaScript logic related to:

  * form handling
  * user interaction
  * data sent to the server
* Files:

  * `form.js`
  * `resource.js`

#### 🔹 Server-side (Node.js)

* JavaScript logic executed by Node.js
* Typical issues may include:

  * broken request handling
  * incorrect routing or logic flow
  * invalid assumptions about incoming data
* File:

  * `index.js`

You must fix **as many of the six errors as possible**.

💡 Tip:
Use **browser DevTools** for client-side issues and **terminal output / Node logs** for server-side issues.

---

### 3️⃣ Verify correct end-to-end behavior

Your solution should match the behavior shown in the reference video:

* frontend actions trigger correct server responses
* server processes requests without runtime errors
* client reacts correctly to server responses
* no blocking errors appear in:

  * browser console
  * server terminal output

This task is **not purely CSR** — correct functionality requires **both sides to work together**.

---

### 4️⃣ Deploy and demonstrate the working system 🚀

Run the **fixed version** in:

* a **Virtual Machine** **or**
* a **Docker container**

Then take **one screenshot** that clearly shows:

* the application working in a browser
* visible proof of the running backend environment (VM terminal or Docker output)

📌 The screenshot must prove that **both frontend and backend are running**. Below is an example of a screenshot.

![Booking system running](Phase3_1.png)

---

### 5️⃣ Push the fixed code to GitHub 📂

* Use the **same GitHub repository** as in previous tasks
* Repository structure must include:

```
BookingSystem/
└── Phase3/
    └── (all working frontend + backend files)
```

* Push **only the corrected, working version**

---

## 📤 Submission Instructions (Itslearning)

In the Task D submission box, provide:

1. 📸 **One screenshot**

   * browser view
   * VM or Docker proof (Node.js running)
2. 🔗 **GitHub link**

   * pointing to `BookingSystem/Phase3`

---

## 🧪 Grading Criteria (0–2 points)

* **`0 points:`** Screenshot missing/unclear **and/or** code missing from GitHub
* **`1 point:`** At least **3 of the 6 errors fixed** (client-side and/or server-side)
* **`2 points:`** **All 6 errors fixed**, system works end-to-end, clear screenshot 

---

## 💬 Notes

* This task focuses on **debugging real full-stack behavior**
* Errors may exist on the **frontend, backend, or in their interaction**
* Guessing is not enough — use tools and logs systematically

> In real projects, bugs rarely exist only on one side of the application. This task reflects that reality.

---
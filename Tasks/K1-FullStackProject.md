> [!NOTE]
> The material was created with the help of ChatGPT and Copilot. 

---

# 📘 Task K: Integrate the Previous React Pages into the Final Full Stack Project

In this final course task, you will take the pages you created earlier in **Task I** and **Task J** and integrate them into a ready-made **full stack application**.

You will receive a file called:

```text
[FinalProject.zip](../Materials/FinalProject.zip)
```

This package contains the full stack project structure. Your job is to extend it so that your earlier React pages work inside the full system and the form data can be saved into the database through the API.

---

## 🎯 Goal

The goal of this task is to practice:

* integrating React pages into an existing full stack application
* connecting the frontend, backend, and database
* adding a routed subpage into a larger React application
* sending form data from React to the backend API
* storing submitted data in the database
* keeping the visual style consistent across the application

This is the **final task of the course**, so the main focus is on showing that you can connect all main parts of a web application together.

---

## 📦 Starting point

You will receive a ready-made package:

```text
[FinalProject.zip](../Materials/FinalProject.zip)
```

It contains the full stack project with:

* a **db** folder
* a **backend** folder
* a **frontend** folder

Your task is to integrate your earlier work into this environment.

You should use your earlier solutions from:

* **Task I** → rebuilt React page
* **Task J** → routed subpage with a form

---

## 🧩 Main task

You must move the earlier pages into the full stack project and make sure they work correctly.

### Required result

* The **Task I page** must be visible in the frontend application.
* The **Task J subpage** must exist inside the frontend with routing.
* The **Task J form** must send data to the backend API.
* The backend API must save the submitted data into the database.
* The application must work as one consistent full stack system.

---

## 🚀 Step 1️⃣: Open the provided full stack project

Extract:

```text
[FinalProject.zip](../Materials/FinalProject.zip)
```

Study the project structure first. **AND watch the instructional video found on panopto**

You will mainly work inside these folders:

```text
db/
backend/
frontend/
```

---

## 📄 Step 2️⃣: Bring in your Task I page

Take the page you created earlier in **Task I** and move it into the React frontend of this project.

Requirements:

* the page must be visible in the frontend
* the style should remain clean and consistent
* the page should still follow React structure
* the page should not be pasted as one huge block into a single file

> **Important reminder:** the **originalPage** folder from Task I must also be included inside the **frontend** folder.

Example:

```text
frontend/originalPage/
```

This is required so that the original source page is still available in the final project.

---

## 🧭 Step 3️⃣: Bring in your Task J routed subpage

Take the subpage you created earlier in **Task J** and add it into the React frontend of the final project.

Requirements:

* the page must be accessible through routing
* the page must be reachable through navigation
* the style must match the rest of the application
* the form must still be usable

This page should clearly look like part of the same application as the Task I page.

---

## 📝 Step 4️⃣: Connect the form to the backend API

In Task J, the form sent data to **httpbin**.
In this final task, the form must instead send data to **your own backend API**.

That means:

* replace the test submission target
* use `fetch()` to send the form data to the backend
* make sure the backend receives the submitted values correctly

The submitted data must travel through the full stack flow:

```text
React form → backend API → database
```

---

## 🗄 Step 5️⃣: Update the database definition

You must modify the database definition inside the **db** folder so that the submitted form data can be stored.

This means you need to:

* create a suitable database table
* define the required columns
* make sure the structure matches the form fields you are sending from React

The database must support storing the submitted form data properly.

---

## ⚙ Step 6️⃣: Update the backend

You must modify:

```text
backend/server.js
```

The backend must include an API route that:

* receives the data sent from the React form
* validates or handles the data sensibly
* inserts the data into the database
* returns a meaningful response to the frontend

The frontend should clearly show whether the save operation succeeded.

---

## ⚛ Step 7️⃣: Update the React frontend

You must modify the React files inside:

```text
frontend/src/
```

These changes should be enough for the task.

At minimum, your frontend work will include:

* showing the Task I page
* adding the Task J subpage with routing
* updating the form submission logic
* showing success or error feedback to the user

---

## 📂 Step 8️⃣: Push the code to GitHub

Push the finished work to GitHub.

Your repository must include:

* the full stack source code
* the `originalPage` folder (in the frontend folder)
* all files needed to run the project
* required folder structure:

```
final-project/
└── All codes
```

---

## 📚 Files that should be enough to modify

In this task, the main changes should be limited to these areas:

```text
db/
backend/server.js
frontend/src/
```

You should not need to rebuild the whole project from scratch.

---

## ✅ Minimum required functionality

To complete the task successfully:

* the frontend application must run
* the Task I page must be visible
* the Task J subpage must exist and work through routing
* the form must send data to the backend API
* the backend must save the data into the database
* the data must actually be stored successfully

If the data is not stored in the database, the task is not complete.

---

## ⭐ Higher-level version

For a stronger solution, your application should also include a new subpage that shows data already stored in the database.

This means adding a page where the user can see the saved entries using a **Read (R)** operation.

Examples:

* a table
* a card list
* a simple item list

This page must fetch the stored data from the backend API and display it in the frontend.

---

## 📤 Submission instructions

Submit:

1. 🔗 **GitHub repository link**

   * pointing to `final-project`
2. 📸 **One screenshot** → The screenshot must clearly show:

    * the application running in the browser
    * visible proof that the full stack environment is running
    * enough evidence that the solution is functional

---

## 🧪 Grading (0–2 points)

* **0 points:** No working website is provided, or the submitted data is not stored in the database.
* **1 point:** The application works correctly, the pages are integrated successfully, and the visual style is consistent.
* **2 points:** The application works correctly, and a new subpage has been added that shows data stored in the database using a **Read (R)** operation.

---

## ✅ Checklist

[ ] Extracted `FinalProject.zip`
[ ] Moved the Task I page into the frontend
[ ] Added `originalPage/` inside the frontend
[ ] Added the Task J routed subpage
[ ] Updated the form to send data to the backend API
[ ] Modified the database definition inside `db/`
[ ] Modified `backend/server.js`
[ ] Modified React files inside `frontend/src/`
[ ] Verified that submitted data is stored in the database
[ ] Added a new page for showing stored data if aiming for 2 points
[ ] Pushed the finished work to GitHub
[ ] Took one screenshot for submission

---

## 💡 Final note

This is the last course task, so focus especially on:

* clean integration
* consistent visual style
* correct routing
* working full stack data flow
* actual database storage

The most important proof of success is that the application works as one connected system.

---
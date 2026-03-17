> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

# 📘 Task I1: Rebuild an Existing Page as a React Application in Docker

You will create a new **React application** that rebuilds one selected existing web page. The page must run inside **Docker**, follow the required **project structure**, and visually match the **original page** as closely as possible.

---

## 🎯 Goal

Your task is to take one existing page and rebuild it as a **React application**.

You may choose:

* the **front page** you created in the basic web development course, or
* another suitable page of your choice

The new React project must:

* run as a **React application**
* run inside a **Docker container**
* include the required **Docker files**
* include the required **React folder structure**
* include the **original page** either as a link or as HTML code in the repository
* visually resemble the original page as closely as possible

The most important goal is to practice:

* moving from static HTML to React
* using Docker as a development environment
* structuring a small React project correctly
* breaking a page into meaningful React components

---

## 📦 Provided materials

[Use the React + Docker setup introduced in course](../Materials/Lecture-I.md)

Your repository must include at least these files and folders:

```text
final-project/
├─ Dockerfile
├─ docker-compose.yml
├─ .dockerignore
├─ package.json
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  └─ components/
└─ originalPage/
```

---

## 🚀 Step 1️⃣: Choose the original page first

Before building anything:

* choose one existing page that you want to rebuild
* the page can be:

  * your own earlier front page
  * another page from a previous course project
  * another static page

The selected page should be realistic to rebuild during this task. Do not choose a page that is unnecessarily large or technically too complex for this stage.

---

## 📂 Step 2️⃣: Add the original page into the repository

Create this folder:

```text
originalPage/
```

Inside that folder, include **one** of the following:

* the original HTML file, or
* a markdown/text file containing a link to the original page

Examples:

```text
originalPage/index.html
```

or

```text
originalPage/source-link.md
```

This is important so that the original source can be compared with your React version.

---

## ⚛ Step 3️⃣: Create the React project

Create a React project using Vite.

Your project must include at least:

```text
src/main.jsx
src/App.jsx
src/components/
```

The page must be rendered through React, not as a plain static HTML page.

At this stage, the purpose is not only to make the page visible, but also to practice the **React way of building UI**.

---

## 🐳 Step 4️⃣: Add Docker support

Your project must run with Docker.

Create these files in the root of the project:

* `Dockerfile`
* `docker-compose.yml`
* `.dockerignore`

The application must start successfully with Docker Compose.

Example command:

```bash
docker compose up --build
```

The page must open in the browser after the container starts.

---

## 🎨 Step 5️⃣: Rebuild the page in React

Rebuild the selected original page as a React application.

The final result should be as close as possible to the original page in terms of:

* layout
* spacing
* typography
* colors
* images
* navigation structure
* sections and content order

The goal is that the React version clearly looks like the same page.

---

## 🧩 Step 6️⃣: Use React structure properly

This task is not only about visual similarity.
You must also use a **clear React structure**.

That means:

* break the page into meaningful components
* place reusable or logical UI parts into the `components` folder
* keep `App.jsx` readable
* use semantic structure in a React-friendly way

A good solution might include components such as:

* `Header.jsx`
* `Hero.jsx`
* `MainContent.jsx`
* `Footer.jsx`

You do not have to use these exact names, but the page should not be built by placing all HTML into one large `App.jsx` file.

---

## 🧪 Step 7️⃣: Minimum required functionality

To pass the task, the project must:

* run successfully as a React application
* run successfully with Docker
* include the required files and folder structure
* include the original page in `originalPage/`
* show a working rebuilt page in the browser

---

## ⭐ Step 8️⃣: Higher-quality version

For a stronger result, your project should also show that:

* the React page is visually very close to the original
* the repository structure is clean
* the page is divided into meaningful components
* semantic structure is used properly
* the project is easy to read and understand

---

## 📂 Step 9️⃣: Push the code to GitHub

Push the finished work to GitHub.

Your repository must include:

* the React source code
* the Docker files
* the `originalPage` folder
* all files needed to run the project
* required folder structure:

```
final-project/
└── All codes
```

---

## 🚀Last step: Deploy and demonstrate the working system 

Run the **refactored version** in:

* a **Virtual Machine + Docker** **or**
* a **Docker in the desktop**

Then take **one screenshot** that clearly shows:

* the application working in a browser
* visible proof of the running backend environment (VM terminal or Docker output)

---

## 📤 Submission instructions

Submit:

1. 🔗 **GitHub link**

   * pointing to `final-project`
2. 📸 **One screenshot**

   * browser view
   * VM or Docker proof (React app is running)

---

## 🧪 Grading (0–2 points)

* **0 points:** The submission is not functional, or the required structure is missing, or the project is not compatible with the task requirements.
* **1 point:** The page works, the repository structure is correct, and the required files are included.
* **2 points:** The structure is correct, the page works, the React version is visually almost the same as the original page, and semantic React-style structure is used properly — meaning the whole page is not placed as plain HTML inside `App.jsx`, but divided into sensible components.

---

## ✅ Checklist

[ ] Chosen one original page  
[ ] Added the original page or source link into `originalPage/`  
[ ] Created a React project with Vite  
[ ] Added `Dockerfile`  
[ ] Added `docker-compose.yml`  
[ ] Added `.dockerignore`  
[ ] Project starts with Docker  
[ ] Page is rebuilt in React  
[ ] Layout is close to the original page  
[ ] Components are used in a sensible way  
[ ] `App.jsx` is not overloaded with the entire page markup  
[ ] Code pushed to GitHub  
[ ] Screenshot taken  

---
> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

# 📘 Task J1: Create a New Routed Subpage with a Form in React

In this task, you will extend the existing React application by creating a **new subpage** using **routing**.

The new page must contain a **form** with **three different HTML input types**. When the form is submitted, the data must be sent to **httpbin**, and the returned response must be shown clearly to the user on the page.

The visual style of the new page must match the theme of the previous task as closely as possible.

---

## 🎯 Goal

Your goal is to practice:

* creating a **new routed page** in a React application
* using **React Router**
* building a form with different HTML input types
* sending form data to an external test service
* displaying the returned response on the page
* keeping the UI visually consistent with the rest of the application

---

## 📦 Starting point

Use the React application environment created in the previous task.

Your existing project already includes:

* the React app structure
* the previous page
* the visual theme
* the Docker-based development environment

You will now **extend** that application instead of creating a completely new one.

[Check the introduction material](../Materials/Lecture-J.md)

---

## 🚀 Step 1️⃣: Create a new routed subpage

Add a **new page** to your React application.

The page must be accessible through routing, for example:

```text
/form
```

or another clear route of your choice.

The application must allow navigation to this new page in a logical way.

Examples:

* a navigation link
* a button
* a menu item

The route must work correctly in the React application.

---

## 🧭 Step 2️⃣: Keep the theme consistent

The new page must follow the same visual style as the previous task page.

That means the new page should be consistent in areas such as:

* colors
* spacing
* typography
* buttons
* form styling
* layout structure

The page should clearly look like it belongs to the same application.

---

## 📝 Step 3️⃣: Build a form with three different HTML input types

Create a form that includes at least **three different HTML input types**.

Examples of suitable input types:

* `text`
* `email`
* `number`
* `date`
* `checkbox`
* `password`
* `tel`

You may choose any three, as long as they are clearly different from each other.

A simple example could include:

* a text field for name
* an email field for email address
* a date field for booking date

You may also add labels, placeholders, helper text, and a submit button to improve usability.

---

## ✅ Step 4️⃣: Add validation

Validate the form inputs before sending the data. Validation may include, for example:

* required fields
* minimum or maximum length
* correct email format
* valid number range
* preventing empty submission

The goal is that obviously invalid input is not sent. You may use:

* built-in HTML validation
* React state-based validation
* your own validation logic

At this stage, clear and sensible validation is more important than complexity.

---

## 🌐 Step 5️⃣: Send the form data to httpbin

When the user submits the form, send the form data to **httpbin**. You may use an endpoint such as:

```text
https://httpbin.org/post
```

Use `fetch()` to send the data. The request should include the values entered by the user.

---

## 📨 Step 6️⃣: Show the response on the page

After the form is submitted successfully, show the returned response on the same page.

The response should be presented in a readable way.

Examples:

* show the returned JSON in a styled `<pre>` block
* show selected returned values in cards or sections
* show both the sent data and server response

The user must clearly see that:

* the form was submitted
* the data reached httpbin
* the application received a response

---

## 🧩 Step 7️⃣: Keep the solution clean

Your implementation should follow a clear React structure.

That means:

* keep components readable
* avoid putting everything into one large file
* separate routing logic and page logic sensibly
* use semantic structure where appropriate

For example, a good solution might include files such as:

* `App.jsx`
* `pages/FormPage.jsx`
* `components/Navbar.jsx`
* `components/FormResponse.jsx`

You do not have to use exactly these names, but the code should remain clear and maintainable.

---

## 🧪 Step 8️⃣: Minimum required functionality

To pass the task, the project must include:

* a working new routed subpage
* a working form
* three different HTML input types
* successful submission to httpbin
* the returned response shown on the page

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

## ⭐ Optional extra task (no points)

As an additional exercise, you may try to build the application into a container and serve it with **Nginx**.

This extra task does **not** affect the score, but it is useful practice for deployment and production-style setup.

Examples of what you may explore:

* building the React app
* serving the build output with Nginx
* updating Docker configuration for production-style serving

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

* **0 points:** No working solution is provided.
* **1 point:** Routing works and the form works.
* **2 points:** Routing works, the form works, and the inputs are validated properly using Zod.

---

## ✅ Checklist

[ ] Added a new routed subpage  
[ ] Added navigation to the new page  
[ ] Created a form  
[ ] Used three different HTML input types  
[ ] Added validation  
[ ] Sent form data to httpbin  
[ ] Displayed the returned response on the page  
[ ] Matched the visual theme with the previous page  
[ ] Pushed the code to GitHub  
[ ] Took a screenshot  

---
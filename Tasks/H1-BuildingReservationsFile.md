> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

# 📘 Task H1: Build reservations.html for the Booking System

You will create a new **`reservations.html` page** for the Booking System. The page must match the **visual style of the existing project**, work with the provided **reservations API**, and be available **only after authentication**.

---

## 🎯 Goal

Your task is to add a new reservation page to the application so that users can create reservations through the browser UI.

The new page must:

* be placed in the **`views`** folder
* be called **`reservations.html`**
* follow the **same visual style** as the rest of the project
* work with the provided **reservations API**
* be accessible **only after the user has authenticated**
* support at least reservation creation
* for the highest score, also support listing, updating, and deleting reservations

At this stage, **authorization is not yet the main focus**. The most important thing is that the page works correctly after login and communicates properly with the backend API.

---

## 📦 Provided materials

* A **ZIP file** containing the **entire Booking System**
  👉 https://github.com/vheikkiniemi/AdvWebDev2026K/blob/main/Materials/Phase7/BookingSystemPhase7.zip

* The reservation API route file:

  * `src/routes/reservations.routes.js` 

The reservations API already supports these operations:

* `POST /api/reservations` → create a reservation
* `GET /api/reservations` → list all reservations
* `GET /api/reservations/:id` → get one reservation
* `PUT /api/reservations/:id` → update a reservation
* `DELETE /api/reservations/:id` → delete a reservation 

---

## 🚀 Step 1️⃣: Deploy first

Before documenting anything:

* Deploy Phase7 in **VM or Docker** (same approach as earlier tasks)
* Confirm the UI works in a browser

---

## 🧱 Step 2️⃣: Create the page in the correct location

Create this file:

```text
src/views/reservations.html
```

This page must belong to the **protected application area**, not the public area. That means it should **not** be placed in `public/`.

---

## 🔐 Step 3️⃣: Make the page available only after authentication

The page must only be accessible after login. In practice, this means the backend should serve the page through a route that checks authentication before sending the file.

Example idea:

```text
GET /reservations
```

The route should return `reservations.html` only if the user is authenticated.

At this stage, it is enough to protect the page with authentication. You do **not** need to implement advanced role-based authorization yet.

---

## 🎨 Step 4️⃣: Keep the UI consistent with the rest of the project

The new page must visually match the existing Booking System. Your page should use the same kind of:

* layout
* spacing
* buttons
* colors
* typography
* form style
* message areas
* navigation style

The goal is that `reservations.html` looks like a natural part of the same application.

---

## 🔌 Step 5️⃣: Connect the page to the reservations API

Your page must be compatible with the reservation API provided in the project. The backend expects reservation data in this format when creating or updating a reservation:

```json
{
  "resourceId": 2,
  "userId": 1,
  "startTime": "2026-03-06T10:00:00Z",
  "endTime": "2026-03-06T12:00:00Z",
  "note": "Team meeting",
  "status": "active"
}
```

The API creates a reservation with:

```text
POST /api/reservations
```

and returns:

* `201 Created` on success
* `500` if a database error occurs 

The API also supports:

* reading all reservations with `GET /api/reservations`
* updating with `PUT /api/reservations/:id`
* deleting with `DELETE /api/reservations/:id` 

---

## 🧪 Step 6️⃣: Minimum required functionality

To pass the task, the page must allow the user to create a reservation from the UI. A practical minimum form could include fields such as:

* resource ID
* user ID
* start time
* end time
* note
* status

The form should send data to:

```text
POST /api/reservations
```

If the reservation is created successfully, the user should receive a clear success message.

---

## ⭐ Step 7️⃣: Full-featured version for the highest score

For the highest score, your page should do more than only create reservations. A complete solution includes:

* a form for creating a reservation
* a list of existing reservations
* the ability to load reservation data into the form
* the ability to edit an existing reservation
* the ability to delete an existing reservation

The API already supports all of these operations.

---

### 💡 Suggested implementation idea

A good page structure could be:

**Reservation form**

Used to:

* create a new reservation
* edit an existing reservation

---

**Reservation list**

Used to:

* show existing reservations
* select one reservation
* update it
* delete it

This approach is very similar to how resource management pages are often built in CRUD-style applications.

---

## 📂 Step 8️⃣: Push the fixed code to GitHub 

* Use the **same GitHub repository** as in previous tasks
  * If you have to change repo, it's totally fine.
* Repository structure must include:

```
BookingSystem/
└── Phase7/
    └── (all working frontend + backend files)
```

## 📤 Submission instructions (Itslearning)

Submit:

1. 📸 **Screenshots**

  * the site open in your browser
  * the **environment evidence** (VM or Docker) visible

2. 🔗 **GitHub link**

   * Pointing to `BookingSystem/Phase7`

---

## 🧪 Grading (0–2 points)

* **0 points:** The page does not exist, or it does not work.
* **1 point:** A reservation can be created from the page and saved into the database.
* **2 points:** A reservation can be created from the page **after authentication**.
* **3 points:** The page works completely:
  * reservation creation works
  * the page is available only after authentication
  * existing reservations are listed
  * reservations can be updated
  * reservations can be deleted

---

## ✅ Checklist

[ ] Created `src/views/reservations.html`  
[ ] Page style matches the rest of the project  
[ ] Page is served only after authentication  
[ ] Reservation form sends data to `POST /api/reservations`  
[ ] Reservation can be saved successfully  
[ ] Success/error feedback is shown to the user  
[ ] Existing reservations are listed  
[ ] Reservation update works  
[ ] Reservation delete works
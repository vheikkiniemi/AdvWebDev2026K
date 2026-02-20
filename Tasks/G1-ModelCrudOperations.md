> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

# 📘 Task G1: Model C, R, U, D Operations (Data Flow)

You will create a **GitHub Markdown file** that models how the Booking System handles **Read (R), Update (U), and Delete (D)** operations → In the same style as the provided **CREATE (C)** example. 

---

## 🎯 Goal

You are given a ready-made **CREATE (C)** operation model in [`G1_CRUD_DataFlow.md`](G1_CRUD_DataFlow.md). Your job is to produce a **single Markdown file** in your GitHub repo that contains **four** similar models:

✅ **C → Create**  
✅ **R → Read**  
✅ **U → Update**  
✅ **D → Delete**  

Each model must describe the **actual data flow** in the provided **Phase6** codebase, verified using **Developer Tools** (Network + Console) and any other helpful tools.

---

## 📦 Provided materials

* A **ZIP file** containing the **entire Booking System**
  👉 https://github.com/vheikkiniemi/AdvWebDev2026K/blob/main/Materials/Phase6/BookingSystemPhase6.zip

* The **CREATE model** file as the reference style and structure:
  * [`G1_CRUD_DataFlow.md`](G1_CRUD_DataFlow.md) (your “C operation” example) 

---

## 🚀 Step 0: Deploy first

Before documenting anything:

* Deploy Phase6 in **VM or Docker** (same approach as earlier tasks)
* Confirm the UI works in a browser
* Make sure you can perform **Read, Update, Delete** actions in the UI

---

## 🕵️ Step 1: Discover the real flow using Developer Tools

Use at least these:

### ✅ Browser Developer Tools (required)

* **Network tab**

  * Which endpoint is called? (URL + method)
  * What payload is sent? (Request body)
  * What comes back? (Response body)
  * Status codes (200/204/400/404/409/etc.)
* **Console tab**

  * Errors / logs
  * What your frontend prints during the operation (if anything)

### ✅ Other helpful tools

* `curl` / Postman
* VS Code global search (e.g., find `PUT /api/resources`, `DELETE`, `updateResource`, etc.)
* Database viewer (if your environment includes one)

Your diagrams must match what you observe in Phase6.

---

## ✍️ Step 2: Create the GitHub file

Create a new Markdown file in your repository:

```
BookingSystem/
└── Phase6/
    └── G1_CRUD_DataFlow.md
```

Inside the file, include **four Mermaid sequence diagrams**, one for each:

* **CREATE**
* **READ**
* **UPDATE**
* **DELETE**

Use the same diagram “style” as in [`G1_CRUD_DataFlow.md`](G1_CRUD_DataFlow.md) (participants + alt branches). 

---

## ✅ Required content for each operation (R, U, D)

For **each** diagram you must include:

1. **Participants** (at minimum)

* User (Browser)
* Frontend (the JS files involved, e.g., `resources.js`, `form.js`)
* Backend route (Express)
* Service layer (if present)
* PostgreSQL (DB)

2. **The endpoint + method**

* Example format inside the diagram: `GET /api/resources`, `PUT /api/resources/:id`, `DELETE /api/resources/:id`
* Use what Phase6 actually uses (verify in Network tab)

3. **At least one success path**

* What happens on success and what status code is returned

4. **At least one failure / validation path**
   Pick realistic cases based on what you observe, for example:

* Validation fails → `400` with errors
* Resource not found → `404`
* Conflict/duplicate → `409`
* Unauthorized/forbidden (if Phase6 includes auth) → `401/403`

---

## 📤 Submission instructions (Itslearning)

Submit:

1. 🔗 **GitHub link** to your Phase6 folder containing your `G1_CRUD_DataFlow.md`

---

## 🧪 Grading (0–2 points)

* **0 points:** No file OR file is missing most required flows / not matching Phase6 behavior
* **1 point:** File exists and models **some** operations correctly (e.g., only R and U)
* **2 points:** File includes **R, U, D**, each with success + failure branches, and clearly matches Phase6 observed behavior

---

## ✅ Checklist

* [ ] Phase6 deployed and working
* [ ] Used DevTools Network to confirm endpoints/methods/status codes
* [ ] Created one GitHub Markdown file
* [ ] Added Mermaid diagrams for **C, R, U, D**
* [ ] Each diagram includes success + at least one failure branch
* [ ] Pushed to GitHub under `BookingSystem/Phase6/`
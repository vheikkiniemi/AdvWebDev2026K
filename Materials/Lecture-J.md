> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

# 📘 Building a React Subpage with a Form and Zod Validation

## 🧭 What is a subpage in React?

In a traditional website, a subpage might be something like:

* `/about`
* `/contact`
* `/register`

In React, a subpage is usually implemented with **routing**. That means different URL paths render different React components.

For example:

* `/` → Home page
* `/contact` → Contact page
* `/register` → Registration form page

So in this case, our “subpage” will be a separate route such as:

```txt
/register
```

This route will display a form page.

---

## 🧱 Technologies used

We will use:

* **React** for building the UI
* **React Router** for navigation between pages
* **Zod** for validation
* optionally **useState** for managing form data

---

## 🗂 Suggested file structure

A simple structure could look like this:

```txt
src/
├── App.jsx
├── main.jsx
├── pages/
│   ├── HomePage.jsx
│   └── RegisterPage.jsx
└── components/
    └── Navigation.jsx
```

This structure helps keep the application clean and modular.

---

## 🚦 Step 1: Install needed packages

If React Router and Zod are not installed yet, install them:

```bash
npm install react-router-dom zod
```

If you want even smoother form handling later, you could also use React Hook Form, but in this material we keep things simple and focus on **React + Zod**.

---

## 🏠 Step 2: Create the main routes

Below is a simple example of `App.jsx`.

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### 💡 Explanation

* `BrowserRouter` enables routing
* `Routes` contains all route definitions
* `Route` connects a URL path to a component
* `/register` is our subpage route

---

## 🏡 Step 3: Create a simple home page

Example `HomePage.jsx`:

```jsx
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our React application.</p>
      <Link to="/register">Go to Register Page</Link>
    </div>
  );
}

export default HomePage;
```

### ✅ Why use `Link`?

In React, we usually use `Link` instead of a normal `<a>` element for internal navigation. This keeps navigation fast and prevents full page reloads.

---

## 📝 Step 4: Create the form subpage

Now we create `RegisterPage.jsx`.

This page will include:

* form fields
* local state
* validation with Zod
* error messages

---

## 🛡 Step 5: Define a Zod schema

Zod is used to describe what valid input looks like.

Example rules:

* name must be at least 2 characters
* email must be a valid email
* password must be at least 8 characters

Example schema:

```jsx
import { z } from "zod";

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});
```

### 🔍 What does this do?

This schema defines the structure of valid form data.

If the user enters invalid data, Zod gives error messages.

---

## 🧪 Step 6: Full example of the register subpage

```jsx
import { useState } from "react";
import { z } from "zod";

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const result = registerSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = {};

      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0];
        fieldErrors[fieldName] = issue.message;
      });

      setErrors(fieldErrors);
      setSuccessMessage("");
      return;
    }

    setErrors({});
    setSuccessMessage("Form submitted successfully!");

    console.log("Validated form data:", result.data);
  }

  return (
    <div>
      <h1>Register Page</h1>
      <p>Please fill in the form below.</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default RegisterPage;
```

---

## 🔎 How the code works

### 1. `useState` stores the form data

```jsx
const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
});
```

This object stores the current values of the inputs.

---

### 2. `handleChange` updates the correct field

```jsx
function handleChange(event) {
  const { name, value } = event.target;

  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
}
```

This means one function can handle all inputs.

Very handy. Very React. Very nice. 😄

---

### 3. `handleSubmit` stops page refresh

```jsx
event.preventDefault();
```

Without this, the browser would refresh the page when the form is submitted.

---

### 4. `safeParse()` validates the data

```jsx
const result = registerSchema.safeParse(formData);
```

This checks whether the form data matches the schema.

* If valid → `result.success === true`
* If invalid → `result.success === false`

---

### 5. Validation errors are shown to the user

```jsx
result.error.issues.forEach((issue) => {
  const fieldName = issue.path[0];
  fieldErrors[fieldName] = issue.message;
});
```

This transforms Zod’s error output into a simpler object we can use in the UI.

Example:

```js
{
  name: "Name must be at least 2 characters long",
  email: "Please enter a valid email address"
}
```

---

## 🎨 Why this approach is good

**✅ Clear structure** → The page is separated into its own component.  
**✅ Good React style** → The form uses controlled inputs and state.  
**✅ Strong validation** → Zod makes validation rules readable and reliable.  
**✅ Better user experience** → Users see exactly what is wrong with their input.  

---

## ⚠ Common beginner mistakes

### 1. Forgetting `preventDefault()`

This causes page reload on submit.

### 2. Using wrong `name` values

The `name` attribute in the input must match the keys in `formData`.

For example:

```jsx
name="email"
```

must match:

```jsx
formData.email
```

---

### 3. Forgetting `value` in controlled inputs

A controlled input needs both:

* `value`
* `onChange`

---

### 4. Not showing error messages

Validation is much less useful if the user cannot see what failed.

---

## 🧠 Key concept: controlled inputs

A controlled input means React controls the value.

Example:

```jsx
<input
  name="name"
  value={formData.name}
  onChange={handleChange}
/>
```

This is the preferred React way for forms because it keeps the UI and the data in sync.

---

## ✨ Possible improvements

Once the basic version works, we can extend it.

### Improvement ideas:

* add more fields
* add confirm password validation
* clear the form after successful submit
* style errors in red
* disable submit button if fields are empty
* navigate to another page after successful submit
* send validated data to a backend API

---

## 🔐 Example: confirm password with Zod

Here is a slightly more advanced schema:

```jsx
const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    email: z.email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
```

### 💡 Why use `refine()`?

It is useful when validation depends on multiple fields.

For example:

* password and confirm password must match
* start date must be before end date

---

## 🧭 Summary

A React subpage is usually created using **React Router**. Each route renders a different component.

---

# 🌐 Extending the React Form: Sending Data to httpbin

## 🔄 What is httpbin?

`httpbin` is a testing service.

When you send data like this:

```json
{
  "name": "Ville",
  "email": "ville@test.com"
}
```

It responds with something like:

```json
{
  "json": {
    "name": "Ville",
    "email": "ville@test.com"
  }
}
```

👉 So it **echoes your data back**.

---

## 🧱 Step 1: Add state for server response

We extend our component with two new states:

```jsx
const [apiResponse, setApiResponse] = useState(null);
const [loading, setLoading] = useState(false);
```

### 💡 Why?

* `apiResponse` → stores server response
* `loading` → improves UX (e.g. disable button / show message)

---

## 🚀 Step 2: Update handleSubmit to send data

Replace your current `handleSubmit` with this:

```jsx
async function handleSubmit(event) {
  event.preventDefault();

  const result = registerSchema.safeParse(formData);

  if (!result.success) {
    const fieldErrors = {};

    result.error.issues.forEach((issue) => {
      const fieldName = issue.path[0];
      fieldErrors[fieldName] = issue.message;
    });

    setErrors(fieldErrors);
    setSuccessMessage("");
    setApiResponse(null);
    return;
  }

  setErrors({});
  setSuccessMessage("");
  setLoading(true);

  try {
    const response = await fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result.data),
    });

    const data = await response.json();

    setApiResponse(data);
    setSuccessMessage("Form submitted and sent to server successfully! 🎉");
  } catch (error) {
    console.error(error);
    setSuccessMessage("Something went wrong while sending data ❌");
  } finally {
    setLoading(false);
  }
}
```

---

## 🔍 What is happening here?

### 1. Validation still happens first 🛡

```js
registerSchema.safeParse(formData)
```

👉 No invalid data is sent to the server.

---

### 2. `fetch()` sends the data 🌐

```js
await fetch("https://httpbin.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(result.data),
});
```

👉 This is a standard REST API call.

---

### 3. Response is converted to JSON 📦

```js
const data = await response.json();
```

---

### 4. Response is saved to state 🧠

```js
setApiResponse(data);
```

---

## 🎨 Step 3: Show response nicely in UI

Now we display the echo in a **clean and readable way**. Add this below your form:

```jsx
{loading && <p>Sending data... ⏳</p>}

{apiResponse && (
  <div style={{ marginTop: "20px" }}>
    <h2>Server Response (Echo)</h2>

    <div
      style={{
        background: "#1e1e1e",
        color: "#ffffff",
        padding: "15px",
        borderRadius: "10px",
        overflowX: "auto",
      }}
    >
      <pre>{JSON.stringify(apiResponse.json, null, 2)}</pre>
    </div>
  </div>
)}
```

---

## ✨ Result in UI

After submitting:

### ✅ User sees:

* success message 🎉
* clean formatted JSON response
* their own data echoed back

Example:

```json
{
  "name": "Ville",
  "email": "ville@test.com",
  "password": "12345678"
}
```

---

## 🎯 Why show only `apiResponse.json`?

httpbin returns a lot of extra data:

* headers
* origin IP
* URL

We focus on:

```js
apiResponse.json
```

👉 This keeps the UI clean and beginner-friendly.

---

## 🎨 Optional: Better UI styling (Tailwind version)

If you are using Tailwind:

```jsx
{apiResponse && (
  <div className="mt-6">
    <h2 className="text-xl font-semibold mb-2">
      Server Response (Echo)
    </h2>

    <pre className="bg-gray-900 text-green-400 p-4 rounded-xl overflow-x-auto text-sm">
      {JSON.stringify(apiResponse.json, null, 2)}
    </pre>
  </div>
)}
```

---

## ⚠ Common mistakes

### ❌ Forgetting `await`

```js
const response = fetch(...)
```

👉 This returns a Promise, not actual data.

---

### ❌ Not converting to JSON

```js
response.json()
```

👉 Must be awaited:

```js
await response.json()
```

---

### ❌ Sending invalid data

If validation is skipped:

👉 bad data goes to server
👉 harder to debug later

---

### ❌ Not handling errors

Always wrap API calls in:

```js
try { ... } catch (error) { ... }
```

---

## 🧠 Full data flow (important concept)

### 🔄 End-to-end flow:

1. User types into form
2. React stores data (`useState`)
3. User clicks submit
4. Zod validates input
5. If valid → send to API
6. Server (httpbin) responds
7. React stores response
8. UI updates and shows result

👉 This is the **core pattern of modern web apps**

---

## 🚀 Final takeaway

Now your React subpage is no longer just UI — it behaves like a real application:

✅ validates input
✅ communicates with a server
✅ handles async logic
✅ displays structured response

This is exactly how:

* REST APIs are tested
* frontends talk to backends
* real systems are built

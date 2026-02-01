> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

# 🖥️ Server-Side Data Handling (After Browser Validation)

Even if data coming from the browser **has already been validated**, the server **must never trust it blindly**. Why? Because **the server cannot know who or what sent the request**.

A browser is **just one possible client**.

---

## 🤔 First: What Can Send Data to a Server?

Many may think:

> “If my form validates in the browser, the data is safe.”

That is **not true**.

A server can receive data from:

* 🌐 A browser (HTML form + JavaScript)
* 🧪 API testing tools (Postman, Insomnia)
* 💻 Command-line tools (like `curl`)
* 🤖 Other servers or scripts
* 😈 Malicious attackers crafting requests manually

👉 **The server only sees an HTTP request. It does NOT see a browser.**

---

## 🧠 Core Principle (Very Important)

> **Client-side** validation improves usability.
> **Server-side** validation enforces security and correctness.

Client-side = convenience  
Server-side = authority 🔐

---

## 🛠️ What MUST the Server Do With Incoming Data?

Once data arrives at the server (for example via a POST request), the server should follow a **clear processing pipeline**.

---

## 1️⃣ Parse the Incoming Data 📦

The server must first **understand the request format**:

* Is the data JSON?
* Is it form-encoded?
* Are required fields present?

Example questions the server asks internally:

* Does the request body exist?
* Can it be parsed correctly?
* Is the structure what we expect?

If parsing fails → ❌ reject immediately.

---

## 2️⃣ Validate Again (Yes, Again!) ✅

Even if validation already happened in the browser:

* Required fields must exist
* Data types must be correct
* Length limits must be enforced
* Values must be meaningful

Examples:

* Strings are not empty
* Numbers are within allowed ranges
* Dates make sense
* IDs follow expected format

👉 **Never assume the client followed the rules.**

---

## 3️⃣ Sanitize the Data 🧼

Validation checks **if data is acceptable**. Sanitization ensures data is **safe to store and use**

Typical sanitization actions:

* Remove or escape HTML
* Normalize whitespace
* Trim leading/trailing spaces
* Prevent script injection

This step protects against:

* XSS
* Injection attacks
* Data corruption

---

## 4️⃣ Apply Business Rules 🧠

This is logic that only the server knows.

Examples:

* Is the user allowed to perform this action?
* Is the resource already reserved?
* Is the user role correct?
* Does this violate system rules?

Client-side code **cannot be trusted** with these decisions.

---

## 5️⃣ Decide: Accept or Reject 🚦

After all checks:

* ✅ If everything is valid → continue processing
* ❌ If something fails → return an error response

Important:

* Errors should be **clear but not revealing**
* Never expose internal system details

---

## 6️⃣ Store or Forward the Data 💾➡️

Only now is the data considered safe enough to:

* Save into a database
* Send to another service
* Trigger further actions

---

## 🔁 Why This Matters (Key Takeaway)

Even if:

* The form looks perfect
* JavaScript validation works flawlessly
* The UI blocks invalid input

➡️ **An attacker can bypass all of that and send raw HTTP requests directly.**


> **The server must always assume:** “This data could come from anywhere.”

---

# 🌐 Browser-side vs “Not a Browser”: Testing Your Form With `curl` 🧪

Even if your **browser-side validation** is perfect ✅, you must assume someone can send the same data **without using the UI** 😈. That’s why we test the server endpoint with tools like **`curl`**.

---

## 🧠 What is `curl`?

`curl` is a command-line tool that can send HTTP requests (GET/POST/etc.). Think of it as a **minimal client** that can talk to your server without HTML, without JavaScript, without your “Create” button rules.

So with `curl` you can:

* ✅ send valid requests (simulate a correct client)
* ❌ send invalid requests (simulate an attacker or buggy client)
* 🔍 see what the server *actually accepts*

---

## 🎯 Step 0: Identify What the Server Expects

Your form contains these fields:

* `resourceName` (text)
* `resourceDescription` (textarea)
* `resourceAvailable` (checkbox)
* `resourcePrice` (number)
* `resourcePriceUnit` (radio: hour/day/week/month)
* `action` (button name/value: create/update/delete)

👉 The browser sends these as **form data** (usually `application/x-www-form-urlencoded`) unless you use JavaScript `fetch()` with JSON.

So we’ll show **one common approach** → `curl` sending **JSON** (common for fetch-based apps / APIs)

---

## 1️⃣ `curl` Example: Send JSON Like the Browser Does 🧾

### ✅ Create a resource (valid request)

> Replace the URL with your real server endpoint, e.g.
> `http://localhost:5000/api/resources`

```bash
curl -i -X POST "http://localhost:5000/api/resources" \
  -H "Content-Type: application/json" \
  -d '{
    "action": "create",
    "resourceName": "Meeting Room A",
    "resourceDescription": "Room 101 with projector",
    "resourceAvailable": true,
    "resourcePrice": 10.00,
    "resourcePriceUnit": "hour"
  }'
```

### What this is doing 🧩

* `-i` shows response headers (useful for debugging)
* `-X POST` sends a POST request
* `Content-Type: application/json` matches what `fetch()` sends
* `-d` sends a **JSON payload**, not form fields
* This request is **functionally identical** to what `form.js` sends

👉 From the server’s point of view, this **is the browser**.

---

## ☑️ Boolean behavior in JSON (super important!)

With JSON, there is **no checkbox magic** like in HTML forms.

### ✅ Available = `true`

```json
"resourceAvailable": true
```

### ✅ Not available = `false`

```json
"resourceAvailable": false
```

👉 Server-side rule:

* Decide whether the field is **required**
* Or apply a **default value** (e.g. `false`)

This must be handled explicitly on the server.

---

# 2️⃣ `curl` Examples That SHOULD FAIL ❌ (Validation Testing)

These requests **bypass browser-side validation completely** and test whether the **server really enforces the rules**.

---

## ❌ Too short name

(UI rule: 5–30 characters)

```bash
curl -i -X POST "http://localhost:5000/api/resources" \
  -H "Content-Type: application/json" \
  -d '{
    "action": "create",
    "resourceName": "A",
    "resourceDescription": "Valid description",
    "resourceAvailable": true,
    "resourcePrice": 1,
    "resourcePriceUnit": "hour"
  }'
```

Expected server behavior:

* HTTP `400` or `422`
* Error message like:
  `"resourceName must be 5–30 characters long"`

---

## ❌ Bad characters (XSS attempt)

(UI allows letters, numbers, spaces only)

```bash
curl -i -X POST "http://localhost:5000/api/resources" \
  -H "Content-Type: application/json" \
  -d '{
    "action": "create",
    "resourceName": "<script>alert(1)</script>",
    "resourceDescription": "Room 101",
    "resourceAvailable": true,
    "resourcePrice": 1,
    "resourcePriceUnit": "hour"
  }'
```

Expected:

* Server rejects input
  **or**
* Sanitizes and stores a safe version (design choice)

---

## ❌ Negative price

```bash
curl -i -X POST "http://localhost:5000/api/resources" \
  -H "Content-Type: application/json" \
  -d '{
    "action": "create",
    "resourceName": "Meeting Room A",
    "resourceDescription": "Room 101 with projector",
    "resourceAvailable": true,
    "resourcePrice": -5,
    "resourcePriceUnit": "hour"
  }'
```

Expected:

* Rejected
* `"resourcePrice must be >= 0"`

---

## ❌ Invalid price unit (enum violation)

```bash
curl -i -X POST "http://localhost:5000/api/resources" \
  -H "Content-Type: application/json" \
  -d '{
    "action": "create",
    "resourceName": "Meeting Room A",
    "resourceDescription": "Room 101 with projector",
    "resourceAvailable": true,
    "resourcePrice": 10,
    "resourcePriceUnit": "year"
  }'
```

Expected:

* Rejected
* `"resourcePriceUnit must be one of: hour, day, week, month"`

---

# 3️⃣ Broken or Invalid JSON ❌

```bash
curl -i -X POST "http://localhost:5000/api/resources" \
  -H "Content-Type: application/json" \
  -d '{ invalid json'
```

Expected:

* HTTP `400 Bad Request`
* JSON parsing error handled safely
* No stack traces leaked 🚫

---

## 🧪 Debugging Helpers (JSON Edition)

### 🔍 Show full request + response

```bash
curl -v -X POST "http://localhost:5000/api/resources" \
  -H "Content-Type: application/json" \
  -d '{
    "action": "create",
    "resourceName": "Meeting Room A",
    "resourceDescription": "Room 101",
    "resourceAvailable": true,
    "resourcePrice": 10,
    "resourcePriceUnit": "hour"
  }'
```

### 🧾 Only show response body

```bash
curl -s -X POST "http://localhost:5000/api/resources" \
  -H "Content-Type: application/json" \
  -d '{
    "action": "create",
    "resourceName": "Meeting Room A",
    "resourceDescription": "Room 101",
    "resourceAvailable": true,
    "resourcePrice": 10,
    "resourcePriceUnit": "hour"
  }'
```

---

## 🧠 One-line takeaway

> **If JSON reaches the server, the browser is already out of the picture.**

---

# 🟢 Node.js Server-side Validation with `express-validator`

## Defending the API (No Matter Who Sends the JSON) 🛡️

At this point in the project:

* ✅ Browser-side validation exists (UX)
* ✅ `form.js` sends JSON using `fetch()`
* ✅ The server expects `application/json`
* ❌ Anyone can bypass the browser using `curl`

Now the **Node.js server becomes the final authority**.

---

## 🧠 Key Idea 

> The server does not trust the browser.  
> The server does not trust `curl`.  
> The server only trusts its own validation rules.  

---

## 🔧 What is `express-validator`?

`express-validator` is a **middleware-based validation library** for Express.

It allows you to:

* validate incoming request data
* sanitize dangerous input
* stop invalid requests *before* business logic runs

Think of it as a **security gate** in front of your route.

---

### Flow:

1️⃣ JSON request arrives  
2️⃣ Express parses JSON (`express.json()`)  
3️⃣ Validation middleware runs  
4️⃣ ❌ Request rejected **or**  
5️⃣ ✅ Controller logic executes  

👉 Invalid data **never reaches** your database code.

---

## 📦 Example JSON the Server Receives

```json
{
  "action": "create",
  "resourceName": "Meeting Room A",
  "resourceDescription": "Room 101 with projector",
  "resourceAvailable": true,
  "resourcePrice": 25.5,
  "resourcePriceUnit": "day"
}
```

The server validates **this object**, not the HTML form.

---

## 1️⃣ Basic Express Setup (JSON-first)

```js
import express from "express";
import { body, validationResult } from "express-validator";

const app = express();

app.use(express.json()); // 👈 REQUIRED for JSON
```

Without `express.json()`, `req.body` would be `undefined`.

---

## 2️⃣ Validation Rules with `express-validator` 🧪

Let’s define **clear rules** that match your UI constraints.

```js
const resourceValidationRules = [
  body("action")
    .isIn(["create", "update", "delete"])
    .withMessage("Invalid action"),

  body("resourceName")
    .isString()
    .isLength({ min: 5, max: 30 })
    .matches(/^[A-Za-z0-9 ]+$/)
    .withMessage("Resource name must be 5–30 chars, letters/numbers/spaces only"),

  body("resourceDescription")
    .isString()
    .isLength({ min: 10, max: 50 })
    .matches(/^[A-Za-z0-9 ]+$/)
    .withMessage("Description must be 10–50 chars, letters/numbers/spaces only"),

  body("resourceAvailable")
    .optional()
    .isBoolean()
    .withMessage("resourceAvailable must be boolean"),

  body("resourcePrice")
    .isFloat({ min: 0 })
    .withMessage("Price must be a number ≥ 0"),

  body("resourcePriceUnit")
    .isIn(["hour", "day", "week", "month"])
    .withMessage("Invalid price unit")
];
```

💡 This is where **UI rules become enforceable security rules**.

---

## 3️⃣ Validation Result Handler 🚦

Always check validation results **before doing anything else**.

```js
function validateRequest(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }

  next();
}
```

If validation fails:

* ❌ request stops here
* ❌ controller logic is never called

---

## 4️⃣ Protected Route Example 🔐

```js
app.post(
  "/api/resources",
  resourceValidationRules,
  validateRequest,
  (req, res) => {

    // At this point:
    // ✔ req.body exists
    // ✔ data is validated
    // ✔ data is safe to use

    res.status(201).json({
      message: "Resource created successfully",
      data: req.body
    });
  }
);
```

This route:

* survives **browser input**
* survives **curl attacks**
* survives **malformed JSON**
* survives **invalid values**

---

## 5️⃣ What Happens with Your `curl` XSS Example? 🧪

```bash
curl -X POST http://localhost:5000/api/resources \
  -H "Content-Type: application/json" \
  -d '{
    "action": "create",
    "resourceName": "<>",
    "resourceDescription": "<script></script>",
    "resourceAvailable": true,
    "resourcePrice": 25.5,
    "resourcePriceUnit": "day"
  }'
```

### Server response:

```json
{
  "errors": [
    {
      "msg": "Resource name must be 5–30 chars, letters/numbers/spaces only",
      "path": "resourceName"
    },
    {
      "msg": "Description must be 10–50 chars, letters/numbers/spaces only",
      "path": "resourceDescription"
    }
  ]
}
```

✔ Attack blocked  
✔ No database touched  
✔ No HTML stored  

---

## 🧠 Mental Model

* Browser validation = **helpful assistant** 🤝
* `curl` = **any random client** 😈
* `express-validator` = **security guard** 🛂
* Controller logic = **restricted area** 🚪

Only validated requests get inside.

---
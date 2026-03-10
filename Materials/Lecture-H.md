> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

# 🔐 Common Authentication Methods in Web Applications

Authentication is the process of **verifying the identity of a user or system** before granting access to protected resources. In web applications, several authentication mechanisms are commonly used, each with different trade-offs in **security, scalability, and complexity**.

---

## 1️⃣ Session-Based Authentication

**Session authentication** is the traditional method used in many server-rendered web applications.

---

**How it works**

1. User sends credentials (username/password).
2. Server validates credentials.
3. Server creates a **session object** stored on the server.
4. Server sends a **session ID cookie** to the browser.
5. Browser automatically includes the cookie in future requests.
6. Server checks the session ID to identify the user.

---

**Key characteristics**

✔ Server stores session state  
✔ Simple and secure for traditional web apps  
✔ Works naturally with cookies  

---

**Advantages**

* Easy to implement
* Secure when cookies use `HttpOnly` and `Secure`
* Simple user logout (destroy session)

---

**Limitations**

* Harder to scale in distributed systems
* Requires session storage (memory, Redis, database)

---

## 2️⃣ Token-Based Authentication (JWT)

Token-based authentication is widely used in **modern APIs and single-page applications (SPA)**.

---

**How it works**

1. User logs in with credentials.
2. Server verifies credentials.
3. Server creates a **JSON Web Token (JWT)**.
4. Client stores the token (often in memory or local storage).
5. Client sends token in request header:

    ```
    Authorization: Bearer <token>
    ```
6. Server verifies token signature and extracts user identity.

---

**Key characteristics**

✔ Stateless authentication  
✔ Suitable for APIs and microservices  
✔ No session storage needed  

---

**Advantages**

* Highly scalable
* Works well with REST APIs
* Useful for mobile and distributed systems

---

**Limitations**

* Harder to revoke tokens
* Must carefully handle token storage (XSS risks)

---

## 3️⃣ OAuth 2.0 (Delegated Authorization)

OAuth allows users to **log in using an external identity provider**, such as:

* Google
* Microsoft
* GitHub
* Facebook

---

**How it works**

1. User clicks **“Login with Google”**
2. User authenticates with Google
3. Google sends authorization code
4. Application exchanges code for access token
5. User identity is retrieved

---

**Key characteristics**

✔ Delegated authentication  
✔ No password stored in the application  

---

**Advantages**

* Improved usability
* Reduced password management
* Trusted identity providers

---

**Limitations**

* More complex implementation
* Requires external provider configuration

---

## 4️⃣ OpenID Connect (OIDC)

OpenID Connect is an **authentication layer on top of OAuth 2.0**. It allows applications to verify **who the user is**, not just authorize API access. Common identity providers:

* Google Identity
* Microsoft Azure AD
* Auth0
* Okta

---

**Key characteristics**

✔ Standardized authentication protocol  
✔ Uses **ID Tokens (JWT)**  

---

**Typical use cases**

* Enterprise SSO
* Cloud applications
* Large distributed systems

---

## 5️⃣ Multi-Factor Authentication (MFA)

MFA strengthens authentication by requiring **multiple independent factors**.

---

**Common factors**

| Factor Type | Example                        |
| ----------- | ------------------------------ |
| Knowledge   | Password                       |
| Possession  | Mobile phone / OTP token       |
| Inherence   | Fingerprint / face recognition |

---

**Example login flow**

```
Username + Password
        +
One-time code (SMS or authenticator app)
```

---

**Advantages**

* Strong protection against credential theft
* Recommended for sensitive systems

---

## 📊 Summary Comparison

| Method                   | State              | Typical Use           |
| ------------------------ | ------------------ | --------------------- |
| Session Authentication   | Stateful           | Traditional web apps  |
| JWT Token Authentication | Stateless          | APIs, SPAs            |
| OAuth 2.0                | Delegated          | Social login          |
| OpenID Connect           | Federated identity | Enterprise login      |
| MFA                      | Additional layer   | High-security systems |

---

# 🔐 Authentication & Authorization: Working Together to Secure Web Applications

In secure web applications, **authentication and authorization work together** to control access to resources. Although they are closely related, they solve **two different security problems**.

---

## 1️⃣ Authentication – *Who are you?*

**Authentication** verifies the identity of a user.

When a user logs into a system, they must prove who they are using credentials or other verification mechanisms.

---

**Common authentication methods**

* Username + password
* Session authentication
* JWT tokens
* OAuth / OpenID Connect
* Multi-factor authentication (MFA)

---

**Example login process**

1. User submits credentials.
2. Server verifies credentials.
3. Server creates an authenticated identity:

   * session
   * token
   * identity claim

After successful authentication, the system **knows the identity of the user**. Example:

```text
User authenticated as: alice@example.com
```

However, authentication **does not yet determine what the user is allowed to do**.

---

## 2️⃣ Authorization – *What are you allowed to do?*

**Authorization** determines what actions an authenticated user is permitted to perform. Typical authorization questions include:

* Can the user view a resource?
* Can the user edit data?
* Can the user delete records?
* Can the user access administrative functions?

Authorization checks occur **after authentication**. Example:

```text
User: alice@example.com
Authenticated: ✔

Can delete resource? ❌
Can view resource? ✔
```

---

## 3️⃣ Role-Based Authorization (RBAC)

One of the most common authorization models in web applications is **Role-Based Access Control (RBAC)**. Instead of assigning permissions directly to each user, permissions are assigned to **roles**. Users are then assigned one or more roles.

### Basic RBAC structure

```text
User → Role → Permissions
```

---

**Example roles in a web application**

| Role          | Typical Permissions        |
| ------------- | -------------------------- |
| Guest         | View public content        |
| User / Member | Create and edit own data   |
| Reserver      | Make reservations          |
| Administrator | Manage resources and users |

---

**Example role structure**

```text
User: alice@example.com
Role: reserver
```

Permissions derived from role:

```text
✔ View resources
✔ Create reservation
❌ Delete resources
❌ Manage users
```

---

## 4️⃣ Authentication + Authorization Together

A secure request flow in a web application typically looks like this:

```text
Client request
      ↓
Authentication check
      ↓
User identity verified
      ↓
Authorization check
      ↓
Access granted or denied
```

**Example:**

```text
POST /api/resources/12/delete

Step 1: Authenticate user (JWT / session)
Step 2: Check role
Step 3: Allow only "admin"
```

---

## 5️⃣ Example in Practice (Typical Web App)

**Example user roles:**

| Role          | Permissions                      |
| ------------- | -------------------------------- |
| Guest         | View public resources            |
| Reserver      | Create reservations              |
| Administrator | Create / edit / delete resources |

---

**Example authorization logic:**

```javascript
if (user.role !== "admin") {
  return res.status(403).json({ error: "Access denied" });
}
```

HTTP response:

```text
403 Forbidden
```

---

## 📌 Key Security Principle

Authentication answers:

> **Who is the user?**

Authorization answers:

> **What is the user allowed to do?**

Both are required for secure systems.

---

**Without authentication** → **The system does not know who the user is**.

---

**Without authorization** → **Every authenticated user could access everything**, which would be a major security risk.

---

## ✅ **Mental model**

```text
Authentication → Identity
Authorization → Permissions
Roles → Permission grouping
```

---

# 🗂 Node.js Project Structure, Authentication, and Authorization

In our project, the folder structure already shows an important architectural idea:

* some files are **publicly accessible**
* some pages are **served through backend routes**
* authentication and authorization are handled in the **backend**
* the browser UI and the API have **different responsibilities**

A simplified view of your project looks like this:

```text
project/
│
├─ server.js
├─ package.json
├─ Dockerfile
├─ docker-compose.yml
├─ .env
│
├─ middleware/
│   └─ auth.middleware.js
│
├─ public/
│   ├─ js/
│   │   ├─ auth-ui.js
│   │   ├─ form.js
│   │   ├─ index.js
│   │   ├─ login.js
│   │   ├─ register.js
│   │   └─ resources.js
│   ├─ index.html
│   ├─ login.html
│   ├─ register.html
│   └─ logo.svg
│
├─ src/
│   ├─ app.js
│   ├─ db/
│   │   └─ pool.js
│   ├─ routes/
│   │   ├─ auth.routes.js
│   │   ├─ reservations.routes.js
│   │   └─ resources.routes.js
│   ├─ services/
│   │   └─ log.service.js
│   ├─ utils/
│   │   └─ timestamp.js
│   ├─ validators/
│   │   ├─ auth.validators.js
│   │   └─ resource.validators.js
│   └─ views/
│       └─ resources.html
```

---

## 1️⃣ What this structure means

Our project separates the application into two main sides:

---

**Public frontend side**

The `public/` folder contains files that can be served directly to the browser.

Examples:

* `index.html`
* `login.html`
* `register.html`
* browser-side JavaScript in `public/js/`
* static assets such as `logo.svg`

These files are typically available without authentication.

---

**Backend-controlled side**

The `src/` folder contains the application logic:

* route handlers
* database access
* services
* validators
* protected views

This is where authentication and authorization are enforced.

---

## 2️⃣ The role of `public/`

The `public/` folder is for **static files**. These files are usually exposed with Express like this:

```javascript
app.use(express.static("public"));
```

That means the browser can request them directly. Examples:

* `/index.html`
* `/login.html`
* `/register.html`
* `/js/resources.js`

So in our project, pages such as `login.html` and `register.html` are part of the **public entry layer** of the application. They are meant to be reachable before the user is authenticated.

---

## 3️⃣ The role of `src/views/`

In our project, `resources.html` is inside:

```text
src/views/resources.html
```

This is a very important design choice. Unlike files in `public/`, this page is **not meant to be directly exposed as a static file**. Instead, it should be sent through a backend route, for example:

```javascript
app.get("/resources", requireAuth, (req, res) => {
  res.sendFile(path.join(__dirname, "views/resources.html"));
});
```

This allows the backend to decide:

* is the user authenticated?
* is the user allowed to access this page?
* should access be denied?

---

So the key difference is this:

```text
public/       → directly accessible static files
src/views/    → backend-controlled pages
```

That distinction is very useful to understand.

---

## 4️⃣ Authentication in this structure

Authentication answers:

> Who is the user?

In our project, authentication logic belongs mainly to:

```text
src/routes/auth.routes.js
middleware/auth.middleware.js
```

A typical flow is:

1. User opens `login.html` from `public/`
2. User submits credentials to a backend route such as:

    ```text
    POST /api/auth/login
    ```

3. `auth.routes.js` verifies the credentials
4. The server creates an authenticated user state

   * JWT token

5. Future requests can be checked with `auth.middleware.js`

So the login page itself is public, but the actual authentication decision is made in the backend.

---

## 5️⃣ Authorization in this structure

Authorization answers:

> What is the user allowed to do?

This happens after authentication. In our project, authorization can be enforced in:

* `middleware/auth.middleware.js`
* route files such as:

  * `resources.routes.js`
  * `reservations.routes.js`

For example:

* a guest may access `index.html`
* an authenticated user may access `/resources`
* only an admin may create, update, or delete resources
* a reserver may view resources and create reservations, but not manage everything

So authentication identifies the user, and authorization checks the user’s permissions (`based on JWT token`).

---

## 6️⃣ Why `public/login.html` and `src/views/resources.html` are different

This is one of the most important lessons in our project.

---

`public/login.html` → This page is meant to be open.

**Why?**

Because the user must be able to reach the login form before logging in. So it makes sense to keep it in `public/`.

---

`src/views/resources.html` → This page represents protected application content.

**Why?**

Because access to resources should depend on authentication and possibly on role. So it makes sense to keep it outside `public/` and serve it only through a backend route.

---

## 7️⃣ Role-based thinking in this project

Our project already fits well with **role-based authorization**. Typical roles might be:

* guest
* reserver
* admin

---

Example logic:

```text
Guest
→ can open public pages

Authenticated reserver
→ can open resources page
→ can create reservations

Admin
→ can manage resources
→ can manage reservations
```

This means the backend should not trust the frontend alone. Even if buttons are hidden in the browser, the real protection must still happen in backend routes and middleware. **That is a key security principle.**

---

## 8️⃣ How we should think about this architecture

A good mental model is:

```text
public/
→ what the browser can load directly

src/views/
→ pages the server sends only after checks

src/routes/
→ endpoints that process requests

middleware/
→ authentication and authorization checks

validators/
→ input validation

db/
→ database access
```

---

## 9️⃣ A simple project-specific explanation

In our project, the user journey may look like this:

```text
1. Open /login.html from public/
2. Submit login form to auth route
3. Server verifies credentials
4. Server stores authenticated state
5. User requests /resources
6. Backend checks authentication in middleware
7. If allowed, server sends src/views/resources.html
8. Browser-side JS then calls protected API routes
```

This shows clearly that:

* **public files start the interaction**
* **backend routes protect the application**
* **middleware connects authentication and authorization to real access control**

---

## ✅ Rule of thumb for our project

```text
public/
= open frontend files

src/views/
= protected pages sent by backend routes

auth.routes.js
= login/register logic

auth.middleware.js
= access checks

resources.routes.js / reservations.routes.js
= protected application actions

frontend hiding buttons
≠ real security

backend authorization
= real security
```
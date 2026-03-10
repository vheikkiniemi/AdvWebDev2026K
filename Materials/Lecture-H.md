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
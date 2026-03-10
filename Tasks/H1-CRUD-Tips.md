> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

# 🔧 Helpful Tip: Testing the Reservations API with `curl`

Before debugging your frontend page, it is often useful to verify that the **backend API works correctly**. One simple way to do this is by using the `curl` command in a terminal. Testing the API manually helps you understand how the **CRUD operations** (Create, Read, Update, Delete) work.

---

## 1️⃣ Create a Reservation (CREATE)

Example command:

```bash
curl -X POST http://localhost:3000/api/reservations \
-H "Content-Type: application/json" \
-d '{
  "resourceId": 2,
  "userId": 1,
  "startTime": "2026-03-06T10:00:00Z",
  "endTime": "2026-03-06T12:00:00Z",
  "note": "Team meeting",
  "status": "active"
}'
```

Expected result:

* HTTP status `201 Created`
* The response returns the created reservation.

---

## 2️⃣ List All Reservations (READ)

```bash
curl http://localhost:3000/api/reservations
```

Expected result:

* HTTP status `200 OK`
* A JSON array containing all reservations.

Example output:

```json
[
  {
    "id": 1,
    "resourceId": 2,
    "userId": 1,
    "startTime": "2026-03-06T10:00:00Z",
    "endTime": "2026-03-06T12:00:00Z",
    "note": "Team meeting",
    "status": "active"
  }
]
```

---

## 3️⃣ Update a Reservation (UPDATE)

Example: update reservation with ID `1`.

```bash
curl -X PUT http://localhost:3000/api/reservations/1 \
-H "Content-Type: application/json" \
-d '{
  "resourceId": 2,
  "userId": 1,
  "startTime": "2026-03-06T11:00:00Z",
  "endTime": "2026-03-06T13:00:00Z",
  "note": "Updated meeting time",
  "status": "active"
}'
```

Expected result:

* HTTP status `200 OK`
* The updated reservation is returned.

---

## 4️⃣ Delete a Reservation (DELETE)

Example: delete reservation with ID `1`.

```bash
curl -X DELETE http://localhost:3000/api/reservations/1
```

Expected result:

* HTTP status `200 OK`
* Confirmation that the reservation was removed.

---

## 💡 Why this is useful

Testing the API with `curl` helps you:

* confirm that the **backend works correctly**
* identify whether problems come from the **frontend or backend**
* understand how **HTTP requests interact with the API**
* debug your application faster

If the API works with `curl` but not from your webpage, the issue is likely in your **frontend JavaScript code**.

---

✅ **Rule of thumb**

```text
API works with curl → backend is correct
API fails with curl → backend issue
API works with curl but not browser → frontend issue
```

---

# 👤 Create a User with `curl`

Example command:

```bash
curl -X POST http://localhost:3000/api/auth/register \
-H "Content-Type: application/json" \
-d '{
  "firstName": "Alice",
  "lastName": "Example",
  "email": "alice@example.com",
  "password": "Password123!",
  "role": "reserver"
}'
```

Expected result:

```text
HTTP/1.1 201 Created
```

Example response:

```json
{
  "ok": true,
  "data": {
    "id": 1,
    "first_name": "Alice",
    "last_name": "Example",
    "email": "alice@example.com",
    "role": "reserver",
    "created_at": "2026-03-10T10:20:30Z"
  }
}
```

---

✅ **Tip**

After creating the user, you can immediately log in and get a token:

```bash
curl -X POST http://localhost:3000/api/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email": "alice@example.com",
  "password": "Password123!"
}'
```

The response will include a **JWT token**, which you can then use for authenticated API requests.

---

# 🔐 Testing the API with Authentication Tokens

If your application uses **JWT authentication**, the API will require a token in the request header.

The token is usually obtained after logging in.

The header format is:

```text
Authorization: Bearer <your_token_here>
```

This header must be included in requests to **protected API endpoints**.

---

## 1️⃣ Get a Token (Login)

First, log in using the authentication API.

Example:

```bash
curl -X POST http://localhost:3000/api/auth/login \
-H "Content-Type: application/json" \
-d '{
  "username": "test@example.com",
  "password": "password123"
}'
```

Example response:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Copy the token value.

---

## 2️⃣ Save the Token in a Variable (Optional but Convenient)

Instead of copying the token repeatedly, you can store it in a shell variable:

```bash
TOKEN="paste_your_token_here"
```

Now the token can be reused easily in later commands.

---

## 3️⃣ Create a Reservation (Authenticated)

```bash
curl -X POST http://localhost:3000/api/reservations \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN" \
-d '{
  "resourceId": 2,
  "userId": 1,
  "startTime": "2026-03-06T10:00:00Z",
  "endTime": "2026-03-06T12:00:00Z",
  "note": "Team meeting",
  "status": "active"
}'
```

Expected result:

```
HTTP/1.1 201 Created
```

---

## 4️⃣ Read Reservations (Authenticated)

```bash
curl http://localhost:3000/api/reservations \
-H "Authorization: Bearer $TOKEN"
```

Expected result:

```
HTTP/1.1 200 OK
```

You should see a list of reservations.

---

## 5️⃣ Update a Reservation (Authenticated)

Example: update reservation with ID `1`.

```bash
curl -X PUT http://localhost:3000/api/reservations/1 \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN" \
-d '{
  "resourceId": 2,
  "userId": 1,
  "startTime": "2026-03-06T11:00:00Z",
  "endTime": "2026-03-06T13:00:00Z",
  "note": "Updated meeting time",
  "status": "active"
}'
```

---

## 6️⃣ Delete a Reservation (Authenticated)

```bash
curl -X DELETE http://localhost:3000/api/reservations/1 \
-H "Authorization: Bearer $TOKEN"
```

Expected result:

```
HTTP/1.1 200 OK
```

---

## ⚠️ Common mistakes when testing with tokens

Typical errors include:

| Problem           | Cause                 |
| ----------------- | --------------------- |
| 401 Unauthorized  | Token missing         |
| 401 Unauthorized  | Token expired         |
| 403 Forbidden     | User lacks permission |
| Invalid signature | Wrong JWT secret      |

---

## 🧠 Debugging tip

If an API request fails in the browser but works with `curl`, the problem is usually in the **frontend JavaScript request configuration**.

Typical mistakes:

* missing `Authorization` header
* incorrect JSON payload
* wrong API endpoint URL

Testing with `curl` helps you verify that the **backend logic works independently of the frontend UI**.

---

✅ **Quick mental model**

```text
Login → receive token
Token → included in request header
Header → server verifies token
Verified token → request allowed
```

---
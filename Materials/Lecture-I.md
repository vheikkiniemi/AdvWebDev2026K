> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

# 🌟 Introduction to React

## 🔷 What Is React?

<https://react.dev/> is an open‑source JavaScript library developed by Facebook (now Meta). It is designed for building **reusable, efficient, and reactive UI components** for modern web applications.

***

## 🕰️ Brief History of React

React was first released in **2013**, originally created for Facebook’s internal needs to solve complex user interface challenges. It quickly gained popularity, and today it is widely used in both startups and major tech companies.

***

## 🔗 How React Connects to Other Technologies

React focuses exclusively on the UI layer. It is often used together with other technologies:

*   **Node.js + Express** – backend logic and API development
*   **Redux or Zustand** – state management for larger applications
*   **Next.js** – SSR (server-side rendering) and SSG (static site generation)
*   **TypeScript** – type safety and enhanced development experience

***

## 🚀 Real‑World Use Cases

Many well‑known services rely on React:

*   **Facebook** – originally built for Facebook’s UI challenges
*   **Instagram** – interface built with React
*   **Netflix** – improved performance and developer tooling
*   **Airbnb** – modular UI built from reusable components

***

## ⚖️ Pros and Cons of React

### ✅ Pros

*  **Fast & efficient**: Virtual DOM enables optimized UI updates
*  **Component-based architecture**: Clean, modular structure
*  **Large community**: Many libraries, tools, and tutorials
*  **Great developer experience**: Hot reload, dev tools

### ❌ Cons

*  **Steeper learning curve**: JSX, hooks, and state management
*  **SEO challenges**: Requires SSR for optimal search visibility
*  **Rapid evolution**: Features change frequently

***

## 📚 Additional Resources

*   <https://fullstackopen.com/en/>
*   <https://fullstackopen.com/en/part1/introduction_to_react>

***


---

# 🐳 React in Docker – First Setup

## 🎯 Goal

In this first step, we will create a **React application** and run it inside a **Docker container**. At this stage we are **not** adding:

❌ backend  
❌ database  
❌ authentication  
❌ API calls  

The purpose is to learn:

✔ how a **React project** is structured  
✔ how **Docker provides a shared development environment**  
✔ how to run the **same project consistently on different computers**  

---

## 🤔 Why are we doing this?

When many developers work on the same project, local environments often differ. Typical problems include:

⚠️ different **Node.js versions**  
⚠️ npm installation issues  
⚠️ dependency conflicts  
⚠️ Windows / Linux / macOS differences  
⚠️ the classic *“it works on my machine”* problem  

Docker solves this by giving everyone the **same runtime environment**:

✔ same Node version  
✔ same operating system inside the container  
✔ same project startup process  

This makes **development and troubleshooting easier**.

---

## 🎓 Learning Objectives

After this exercise we should be able to:

✔ create a React project with **Vite**  
✔ explain the purpose of **Docker in development**  
✔ create a **Dockerfile**  
✔ create a **docker-compose.yml** file  
✔ run a React app inside a **container**  
✔ understand the **basic project structure**  

---

## 1️⃣ Create the React Project

First we create the React application **normally**.

### Command

```bash
npm create vite@latest final-project -- --template react
```

When (and if) prompted select (or something similar):

**Framework**

```
React
```

**Variant**

```
JavaScript
```

Then move to the project folder:

```bash
cd react-app
```

Install dependencies:

```bash
npm install
```

---

### 💡 Why do we do this first?

Creating the React app first helps us understand:

* the **project structure**
* the purpose of **package.json**
* how **React starts**
* the role of:

```
src/App.jsx
src/main.jsx
```

If we start with Docker immediately, we can mix together:

* React problems
* Docker problems
* Node problems

So the process is simpler:

1️⃣ Create the app  
2️⃣ Understand the app  
3️⃣ Containerize the app  

---

## 2️⃣ Test That React Works

Run:

```bash
npm run dev
```

Open the address shown in the terminal:

```
http://localhost:5173
```

You should see the **default Vite + React page**.

---

### 💡 Why is this important?

Before adding Docker we must confirm:

✔ the React project works  
✔ dependencies installed correctly  
✔ development server runs  

A good engineering rule:

> **First make it work. Then package it.**

---

## 3️⃣ Explore the Project Structure

A typical **Vite + React project** looks like this:

```
react-app/
├─ index.html
├─ package.json
├─ package-lock.json
├─ vite.config.js
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  └─ assets/
└─ public/
```

---

### 📂 Important Files

#### 📦 `package.json`

Contains:

* project metadata
* dependencies
* npm scripts

---

#### ⚛ `src/main.jsx`

Entry point of the React application.

---

#### 🧩 `src/App.jsx`

Main React component rendered first.

---

#### 🌐 `index.html`

The HTML page where React is mounted.

---

### 💡 Why is this important?

Docker **does not replace understanding the project**. Docker only provides the **runtime environment**.

We still must understand:

* what files exist
* what React runs
* where we modify code

---

## 4️⃣ Add Docker Support

Now we add Docker files to the root of the project. We will create:

📄 `Dockerfile` → 5️⃣
📄 `docker-compose.yml` → 6️⃣
📄 `.dockerignore` → 7️⃣

---

## 5️⃣ Create the Dockerfile

Create:

```
Dockerfile
```

Add:

```dockerfile
FROM node:24-alpine
# Visual Studio Code --> node -v --> v24.14.0
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]
```

---

### 🔍 What does this do?

#### 🧱 `FROM node:24-alpine`

Uses Node.js version 24.

Why:

* React development requires Node
* fixed version ensures **consistent environment**

---

#### 📁 `WORKDIR /app`

Sets the working directory inside the container. All project files are handled in:

```
/app
```

---

#### 📄 `COPY package*.json ./`

Copies dependency files first.

Why:

Docker can **cache dependency installation**.

---

#### 📦 `RUN npm install`

Installs dependencies inside the container.

Dependencies belong to the **container environment**.

---

#### 📄 `COPY . .`

Copies the rest of the project files.

---

#### 🔌 `EXPOSE 5173`

Documents the port used by Vite.

---

#### ▶ `CMD ["npm","run","dev","--","--host"]`

Starts the development server.

`--host` allows access **outside the container**.

---

## 6️⃣ Create docker-compose.yml

Create:

```
docker-compose.yml
```

Add:

```yaml
name: advanced-web-final-project-phase1
services:
  react-app:
    build: .
    container_name: react-dev
    ports:
      - "5173:5173"
    volumes:
      - .:/app
      - /app/node_modules
```

---

### 🔍 What does this do?

#### 📦 `build: .`

Builds the Docker image using the Dockerfile.

---

#### 📛 `container_name`

Sets a readable container name.

---

#### 🔌 `ports`

Maps container port → host port.

```
5173:5173
```

Now we can open the app in our browser.

---

#### 📁 `volumes`

Mounts the project folder into the container. Meaning:

✔ when we edit code locally  
✔ changes appear immediately in the container  

---

#### ⚠ Special line

```
- /app/node_modules
```

This prevents conflicts between:

* host dependencies
* container dependencies

---

## 7️⃣ Create .dockerignore

Create:

```
.dockerignore
```

Add:

```
node_modules
dist
.git
.gitignore
```

---

### 💡 Why is this important?

Without `.dockerignore`, Docker might copy unnecessary files. Problems this can cause:

❌ slow builds  
❌ large images  
❌ dependency conflicts  
❌ strange `node_modules` errors  

---

## 8️⃣ Run the Project

Build and start the container:

```bash
docker compose up --build
```

Open:

```
http://localhost:5173
```

The React application should now run **inside Docker**.

---

### 💡 Why do we use `--build`?

Because the image might not exist yet or the Dockerfile changed.

This ensures Docker **rebuilds the image**.

---

## 9️⃣ Test Live Editing

Open:

```
src/App.jsx
```

Replace the content:

```jsx
function App() {
  return (
    <div>
      <h1>Hello from React in Docker</h1>
      <p>This is our first containerized React app.</p>
    </div>
  );
}

export default App;
```

Save and refresh the browser.

You should see the updated content.

---

### ⚠ If live editing does not work

Update `vite.config.js`:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    watch: {
      usePolling: true,
    },
  },
});
```

Restart Docker:

```bash
docker compose down
docker compose up --build
```

---

### 💡 Why this step matters

Now we can see:

✔ code edited on host machine  
✔ application running in container  
✔ Docker supports a **normal development workflow**  

---

## 🔟 Stop the Container

Stop everything:

```bash
docker compose down
```

---

### 💡 Why is this useful?

It cleans up the running container and keeps the environment tidy.

---

## 📌 Summary

What we did

1️⃣ Created a React project with Vite
2️⃣ Tested it locally
3️⃣ Added Docker support
4️⃣ Built a React container
5️⃣ Ran the app in Docker
6️⃣ Confirmed live editing works

---

## 🧠 Key Concepts

### ⚛ React

Frontend application code.

### 🟢 Node.js

Runtime for development tools.

### 🐳 Docker

Container environment for consistent execution.

### 📦 Docker Compose

Tool for defining and running multi-container applications.

---

## 🚀 Why this is a good first model

This setup is:

✔ simple  
✔ realistic  
✔ easy to debug  
✔ easy to expand later  

Later we can extend it to:

* React container  
* Node/Express backend
* PostgreSQL database

---

## 📂 Final Files

### `Dockerfile`

```dockerfile
FROM node:24-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]
```

---

### `docker-compose.yml`

```yaml
name: advanced-web-final-project-phase1
services:
  react-app:
    build: .
    container_name: react-dev
    ports:
      - "5173:5173"
    volumes:
      - .:/app
      - /app/node_modules
```

---

### `.dockerignore`

```
node_modules
dist
.git
.gitignore
```

---

# 🎨 Example Project: A Simple React Page with CSS

## `src/App.jsx`

```javascript
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Welcome to the React Page!</h1>
      <p>This is a simple React page styled with CSS.</p>
    </div>
  );
}

export default App;
```

## `src/App.css`

```css
.container {
  text-align: center;
  margin-top: 50px;
}

h1 {
  color: blue;
}

p {
  font-size: 18px;
}
```


## `src/main.jsx`

```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

Your styled page appears at:  
👉 <http://localhost:5173/>

***
> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

# 🌟 Introduction to React

## 🔷 What Is React?

<https://react.dev/> is an open‑source JavaScript library developed by Facebook (now Meta). It is designed for building **reusable, efficient, and reactive UI components** for modern web applications.

## 🕰️ Brief History of React

React was first released in **2013**, originally created for Facebook’s internal needs to solve complex user interface challenges. It quickly gained popularity, and today it is widely used in both startups and major tech companies.

## 🔗 How React Connects to Other Technologies

React focuses exclusively on the UI layer. It is often used together with other technologies:

*   **Node.js + Express** – backend logic and API development
*   **Redux or Zustand** – state management for larger applications
*   **Next.js** – SSR (server-side rendering) and SSG (static site generation)
*   **TypeScript** – type safety and enhanced development experience

## 🚀 Real‑World Use Cases

Many well‑known services rely on React:

*   **Facebook** – originally built for Facebook’s UI challenges
*   **Instagram** – interface built with React
*   **Netflix** – improved performance and developer tooling
*   **Airbnb** – modular UI built from reusable components

## ⚖️ Pros and Cons of React

**✅ Pros**

*  **Fast & efficient**: Virtual DOM enables optimized UI updates
*  **Component-based architecture**: Clean, modular structure
*  **Large community**: Many libraries, tools, and tutorials
*  **Great developer experience**: Hot reload, dev tools

**❌ Cons**

*  **Steeper learning curve**: JSX, hooks, and state management
*  **SEO challenges**: Requires SSR for optimal search visibility
*  **Rapid evolution**: Features change frequently

## 📚 Additional Resources

*   <https://fullstackopen.com/en/>
*   <https://fullstackopen.com/en/part1/introduction_to_react>

# ⚡Introduction to Vite

## 🔷 What Is Vite?

<https://vitejs.dev/> is a modern frontend **build tool and development server** created by Evan You (the creator of Vue.js). It is designed to offer **extremely fast startup times**, **lightning‑quick hot module replacement**, and a **simple, modern development workflow** for JavaScript frameworks such as React, Vue, Svelte, and many others.

***

## 🕰️ Brief History of Vite

Vite was first released in **2020**. Its purpose was to overcome performance bottlenecks found in older bundlers like Webpack—especially slow server startup and rebuild times in large projects. Thanks to its innovative use of **native ES modules** in the browser and **esbuild** for fast preprocessing, Vite quickly became one of the most popular tools in modern web development.

## 🔗 How Vite Connects to Other Technologies

Vite focuses on the **development and build process**, not the UI itself. It is commonly used together with:

*   **React, Vue, Svelte** – frameworks that handle the UI
*   **Node.js** – required runtime environment for Vite
*   **esbuild** – used internally for ultra‑fast dependency pre‑bundling
*   **Rollup** – used for optimized production builds
*   **TypeScript** – fully supported with zero configuration

Vite is *not* a framework, it is the tool that powers your frontend development.

## 🚀 Real‑World Use Cases

Vite is widely used in modern web‑based projects and tooling:

*   **Vue ecosystem** – Vite is the default tooling for Vue 3
*   **React projects** – extremely fast alternative to Create React App
*   **SvelteKit** – uses Vite under the hood
*   **Modern design systems** – for rapid component development
*   **Educational projects** – ideal for teaching due to its simplicity and speed

## ⚖️ Pros and Cons of Vite

**✅ Pros**

*   **Blazing-fast development server**: Uses native ES modules
*   **Instant HMR**: Updates browser changes almost instantly
*   **Optimized builds**: Uses Rollup for production
*   **Simple configuration**: Minimal setup, modern defaults
*   **Framework‑agnostic**: Works with React, Vue, Svelte, Lit, and more

**❌ Cons**

*   **Requires modern Node.js versions**: Old versions are not supported
*   **Rollup complexity**: Custom configurations may need Rollup knowledge
*   **Not ideal for legacy browsers**: ES module dependency

## 📚 Additional Resources

*   <https://vitejs.dev/guide/>
*   <https://vitejs.dev/guide/why.html>


# ⭐ React and Vite: How They Work Together

**React** is a JavaScript library for building user interfaces.  
**Vite** is a modern frontend build tool and dev server.

They serve different purposes but work extremely well together.

## ⚙️ What React does

React handles:

*   UI components
*   Rendering updates efficiently
*   Managing state and props
*   Handling user interactions

React **does NOT** handle:

*   Project bundling
*   Development environment
*   Build optimizations

That's where Vite comes in.

## ⚡ What Vite does

Vite provides:

*   A fast development server
*   Lightning‑fast hot module replacement (HMR)
*   Modern JavaScript tooling
*   Production builds using Rollup under the hood

Vite replaces older tools like **Webpack** or **Create React App (CRA)**.

## 🤝 How React and Vite fit together

Vite is **not a React alternative**. Instead, Vite **is the tool that runs your React project**. When you create a React project with Vite:

```bash
npm create vite@latest my-app --template react
```

**Vite:**

*   Serves your React files during development
*   Transforms JSX
*   Optimizes your code for production
*   Provides extremely fast rebuilds

**React:**

*   Defines the UI
*   Manages component logic
*   Renders the application

## 🚀 Why React + Vite is so popular

Because it gives you:

✔️ Much faster startup than CRA → Vite uses native ESM and starts almost instantly.  
✔️ Faster HMR → Only changed modules reload.  
✔️ Simpler configuration → Vite’s config is smaller and more modern.  
✔️ Better performance for large projects → Thanks to pre-bundling with esbuild.  

## 📌 Summary

| Feature                | React      | Vite              |
| ---------------------- | ---------- | ----------------- |
| UI components          | ✅          | ❌                 |
| State management       | ✅          | ❌                 |
| Rendering logic        | ✅          | ❌                 |
| Dev server             | ❌          | ✅                 |
| Hot module replacement | ❌          | ✅                 |
| Build optimization     | ❌          | ✅                 |
| JSX transform          | Indirectly | Yes (via plugins) |

**React builds the UI.**  
**Vite powers the development and build process.**

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

First we create the React application **normally** using command.

```bash
npm create vite@latest final-project -- --template react
```

**When (and if) prompted select:**

```
◆  Install with npm and start now?
│  ● Yes / ○ No
└
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
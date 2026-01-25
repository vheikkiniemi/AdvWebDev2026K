> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

# 🚀 Using Node.js on the Server Side

## 🌐 Introduction to Node.js

[Node.js](https://nodejs.org/en) is an **open‑source, server‑side JavaScript runtime** that enables JavaScript execution outside the browser. It is built on the **Google V8 engine**, and its strengths include:

*   ⚡ **High performance**
*   📈 **Scalability**
*   🔄 **Non‑blocking I/O**
*   🧩 **Large ecosystem ([npm](https://www.npmjs.com/))**

Node.js is widely used for web servers, API services, real‑time apps, and more.

***

## 🕰️ History & Relations to Other Technologies

Node.js was created by **Ryan Dahl in 2009** to efficiently handle large numbers of concurrent connections.

Unlike traditional server frameworks such as PHP or Ruby on Rails, Node.js uses an **event-driven, non‑blocking architecture**, making it ideal for scalable network applications. → [Check the article](https://webcluesinfo.medium.com/asynchronous-programming-in-node-js-event-driven-architecture-and-non-blocking-i-o-41ac8ce52fc4) 

Node.js also connects tightly to the broader JavaScript ecosystem, enabling developers to use **one language for both client and server**.

***

## 🔮 Future Outlook for Node.js

Node.js continues to grow due to:

*   💬 More real‑time applications (chat, notifications)
*   📡 Increased IoT usage
*   🧵 Improving multithreading support
*   🔁 Refined CI/CD workflows

The ecosystem and performance improvements will likely continue strengthening its position in full‑stack development.

***

## 🧰 Typical Use Cases

Node.js is ideal for:

*   🕓 **Real-time apps:** chats, multiplayer games
*   🔌 **API services:** REST, GraphQL
*   🌍 **Websites and web services**
*   📡 **IoT applications**

## 👍 Pros of Node.js

*   ⚡ **Fast** (V8 engine)
*   🌍 **Massive npm ecosystem**
*   🔁 **Same language on front & back end**
*   🚦 **Handles many simultaneous requests (non-blocking I/O)**

## 👎 Cons of Node.js

*   🧵 **Single-threaded** → not optimal for CPU-heavy tasks
*   🪆 **Callback hell** without async/await
*   🧮 Not ideal for heavy computation or data processing

***

## 🔐 Node.js and security

When working with Node.js, **npm is one of the biggest security risks** because every `npm install` pulls **remote code** onto your machine. Modern attacks increasingly target the supply chain, especially through malicious packages.

### ⚠️ Why npm matters for security

*   **Malicious packages & supply chain attacks** are now common. For example, the **Shai‑Hulud attacks (2025)** used tampered npm packages and hidden install scripts to steal credentials and spread through developer machines. [\[snyk.io\]](https://snyk.io/articles/npm-security-best-practices-shai-hulud-attack/)
*   **npm install is effectively remote code execution**, because lifecycle scripts (preinstall/postinstall) can run arbitrary commands. [\[snyk.io\]](https://snyk.io/articles/npm-security-best-practices-shai-hulud-attack/)
*   **Dependency hygiene and lockfiles** are essential to ensure deterministic, safe installs. [\[snyk.io\]](https://snyk.io/articles/npm-security-best-practices-shai-hulud-attack/)
*   **Regular vulnerability checks** using tools such as `npm audit` or Snyk are strongly recommended. [\[dev.to\]](https://dev.to/jefersoneiji/essential-security-practices-for-securing-your-nodejs-application-1o99)

### 🧰 Practical security habits

*   Prefer **well‑maintained, popular packages** → Avoid unknown or suspicious libraries.
*   Always commit your **package-lock.json** to avoid accidental dependency drift.
*   Review install logs →  suspicious lifecycle scripts are a red flag.
*   Keep dependencies **updated** to patch known vulnerabilities. [\[dev.to\]](https://dev.to/jefersoneiji/essential-security-practices-for-securing-your-nodejs-application-1o99)
*   Never store secrets in your code or npm package files. Use `.env` files. [\[cheatsheet....owasp.org\]](https://cheatsheetseries.owasp.org/cheatsheets/NPM_Security_Cheat_Sheet.html)

***

### 🔗 Connection to [CRA](https://www.european-cyber-resilience-act.com/)

Although Web App runs in the browser, **its tooling relies heavily on npm**:

*   CRA installs **hundreds of transitive npm dependencies** (Webpack, Babel, dev servers, etc.).
*   Any vulnerability in those dependencies affects the development environment.
*   Like Node projects, CRA depends on **safe npm practices**, lockfiles, and avoiding untrusted packages.

In other words:

👉 *Even if you’re “just building an app,” your toolchain is Node‑based and inherits all npm supply‑chain risks.*

***

# 🛠️ Installing Node.js (e.g. Visual Studio Code)

Check the videos (especially video 50): https://learn.microsoft.com/en-us/shows/beginners-series-to-javascript/

## 💾 Installation Steps

1.  Download Node.js from:  
    🔗 <https://nodejs.org>
2.  Verify installation:
    ```bash
    node -v
    npm -v
    ```

## ▶️ Your First Node App

**app.js**

```javascript
console.log("Welcome to the world of Node.js!");
```

Run it:

```bash
node app.js
```

***

# 🌐 Creating a Simple HTTP Server

With Node.js's built-in `http` module, you can easily create a web server.

**Example:** Create a file named `server.js`:

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!");
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
```

Run the server:
```bash
node server.js
```

Open a browser and navigate to [http://localhost:3000](http://localhost:3000). You will see the text "Hello, World!".

***

# 📁 Serving Static Files with Express

Express is a popular Node.js library that simplifies the creation of web servers.

Install Express with npm:
```bash
npm install express
```

**Example:** Create a file named `server.js` and an HTML file named `index.html`:

**`index.html`**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Node.js + Express</title>
</head>
<body>
    <h1>Hello, Express!</h1>
</body>
</html>
```

**`server.js`**
```javascript
const express = require("express");
const path = require("path");

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname)));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
```

Run the server and visit [http://localhost:3000](http://localhost:3000). You will see "Hello, Express!".

---

# 🐧 Installing Node.js on Debian

## 📌 Option 1 — Debian Repository

```bash
sudo apt update
sudo apt install -y nodejs npm
```

## 📌 Option 2 — NodeSource (Recommended)

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
```

***

# 📚 Summary

Node.js offers:

*   ⚡ High performance & scalability
*   🔁 Unified JavaScript full‑stack development
*   📡 Excellent support for real-time applications
*   🛠️ A huge ecosystem (npm)

Learning Node.js equips you to build modern web services and positions you strongly in full‑stack development.

***
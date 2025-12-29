> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

# 🌐 The Role and Connection of HTML, CSS, and JavaScript

## 📘 HTML → Overview

**❓ What is HTML?**

* **HTML (HyperText Markup Language)** is the structural foundation of web pages.
* It defines **content and document structure**.
* Together with **CSS** and **JavaScript**, HTML enables interactive and dynamic web experiences.

---

**🧱 The Role of HTML in Web Development**

* HTML defines **what** content exists, while:

  * 🎨 **CSS** defines **how it looks**.
  * ⚙️ **JavaScript** defines **how it behaves**.
* HTML is essential for everything from simple static pages to complex **Single Page Applications (SPAs)**.

---

**🕰️ A Brief History of HTML**

* **1989**: Tim Berners-Lee invents the World Wide Web and HTML.
* **1991**: First public HTML specification.
* **1997**: HTML 4.0 introduces forms and CSS support.
* **2014**: HTML5 becomes a standard for modern web needs.

---

**🚀 Evolution of HTML (HTML5)**

HTML5 introduced:

* 🎵 Native audio and video support
* 🧩 Semantic elements (`<article>`, `<nav>`, `<footer>`)
* 📱 Better support for responsive and mobile-first design
* 🔌 Improved JavaScript integration

---

**🏗️ Basic HTML Structure**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Example</title>
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>This is an example page.</p>
  </body>
</html>
```

* `html` → Root element
* `head` → Metadata (title, charset, viewport)
* `body` → Visible page content

---

**🎯 HTML in UI / UX**

* ✅ Logical structure improves **usability**
* 🧠 Semantic elements improve **accessibility** and **SEO**
* 🧩 Forms and inputs enable interaction

--

**♿ HTML and Accessibility**

* Semantic tags (`<main>`, `<section>`) support screen readers
* `alt`, `label`, and `aria-*` attributes improve inclusivity
* Accessibility is a **core UX requirement**, not an add-on

---

**🛠️ Practical HTML Examples**

*🔗 Links & Images*

```html
<a href="https://example.com">Visit the page</a>
<img src="image.jpg" alt="Description">
```

---

*📝 Forms*

```html
<form action="/submit" method="post">
  <input type="text" placeholder="Enter your name" required>
  <button type="submit">Submit</button>
</form>
```

---

**🔮 The Future of HTML**

* 📦 **Web Components** → reusable custom elements
* 📱 **Progressive Web Apps (PWA)** → app-like web experiences
* ⚡ **WebAssembly** → high-performance browser execution
* 🧠 **Semantic & AI-ready markup**

---

**✅ HTML Summary**

* HTML provides **structure, meaning, and accessibility**
* Well-structured HTML improves:

  * Usability
  * SEO
  * Accessibility

---

## 🎨 CSS → In Brief


**❓ What is CSS?**

* **CSS (Cascading Style Sheets)** controls visual presentation
* Separates **content (HTML)** from **design (CSS)**
* Handles layout, colors, fonts, spacing, and animations

---

**🧩 Role of CSS**

* Makes websites visually appealing
* Enables **responsive design**
* Critical for **UI consistency and UX quality**

---

**🕰️ CSS History**

* **1996**: CSS1 released
* **1998**: CSS2 adds media support
* **2011–**: CSS3 introduces modular features (Flexbox, Grid, animations)

---

**🧱 Basic CSS Structure**

```css
h1 {
  color: blue;
  font-size: 24px;
  text-align: center;
}
```

---

**➕ Adding CSS to HTML**

1. Inline ✖️ (avoid when possible)  
```html
<h1 style="color: red;">Title</h1>
```
2. Internal `<style>`  
```html
<style>
  h1 { color: green; }
</style>
```
3. External stylesheet ✅ (recommended)  
```html
<link rel="stylesheet" href="styles.css">
```

---

**📐 Layout Tools**

* **Flexbox**: one-dimensional layouts  
```css
display: flex;
justify-content: center;
align-items: center;
```
* **Grid**: two-dimensional layouts  
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
```

---

**📱 Responsive Design**

* Media queries adapt UI to screen size  
```css
@media (max-width: 600px) {
  body { font-size: 0.9rem; }
}
```
* **Mobile-first** is best practice

---

**✨ Animations**

* Simple animations without JavaScript  
```css
@keyframes fade {
  from { opacity: 0; }
  to { opacity: 1; }
}
div { animation: fade 2s; }
```

---

**🔮 Future of CSS**

* 🎛️ CSS variables (custom properties)  
```css
:root {
  --main-color: #3498db;
}
h1 {
  color: var(--main-color);
}
```
* 🧪 CSS Houdini for extensibility


---

## ⚙️ JavaScript → In Brief

**❓ What is JavaScript?**

* Programming language for **interactivity and logic**
* Runs in the browser and on servers

---

**🧠 Role of JavaScript**

* Dynamic content updates
* Event handling
* API communication
* Frontend and backend development

---

**🕰️ JavaScript History**

* **1995**: Created by Brendan Eich
* **1997**: ECMAScript standard
* **2015 (ES6)**: Modern JavaScript era

---

**🧪 JavaScript Basics**

```javascript
const name = "Ville";
function greet() {
  alert(`Hello, ${name}!`);
}
greet();
```

- `Variables`: `let`, `const`, `var`.
- `Functions`: Code that performs a specific task.

---

**🌳 DOM Manipulation**

```javascript
document.getElementById("title").innerText = "Welcome!";
```

---

**🖱️ Events**

```javascript
button.addEventListener("click", () => {
  alert("Button clicked");
});
```

---

**🌐 Fetch & APIs**

```javascript
fetch("https://api.example.com/data")
  .then(res => res.json())
  .then(data => console.log(data));
```

---

**🚀 JavaScript Ecosystem**

* ⚛️ [React](https://react.dev/) → For building user interfaces.
* 🟢 [Vue](https://vuejs.org/) and [Angular](https://angular.dev/) → Versatile frameworks for large projects.
* 🟩 [Node.js](https://nodejs.org/) / 🦕 [Deno](https://deno.com/) → JavaScript for backend development.

---

## 🧩 HTML, CSS & JavaScript Together

* 🧱 HTML → structure
* 🎨 CSS → appearance
* ⚙️ JavaScript → behavior

➡️ Separation of concerns improves:

* Maintainability
* Scalability
* Team collaboration

> **Check differences:**
> [All together](https://vheikkiniemi.github.io/BasicsOfWeb2025SPages/adwebdev/lectureA/merged.html)  
> [Separated](https://vheikkiniemi.github.io/BasicsOfWeb2025SPages/adwebdev/lectureA/separated.html)

---

## 🧰 Extras

* ✅ HTML validation: [https://validator.w3.org/](https://validator.w3.org/)
* 🎨 CSS validation: [https://jigsaw.w3.org/css-validator/](https://jigsaw.w3.org/css-validator/)

---

## 🏗️ Frameworks → Overview

**❓ What is a Framework?**

* A structured foundation that speeds up development
* Enforces best practices
* Reduces repetitive work

---

**🎯 Choosing a Framework**

* Project requirements
* Team expertise
* Community & ecosystem
* Long-term maintainability

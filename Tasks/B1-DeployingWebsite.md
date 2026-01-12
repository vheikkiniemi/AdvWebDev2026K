> [!NOTE]
> The material was created with the help of ChatGPT and Copilot. 

# 📘 B1 task: Deploy a Website from a ZIP (VM + Docker)

## 🎯 Goal

Your goal is to **deploy the same static website** in **two different environments**:

1. ✅ A **Virtual Machine (Debian in VirtualBox)**
2. ✅ **Docker (Nginx container)**

…and then prove it works by submitting **two screenshots**.

---

## 📦 Provided Materials

You will need:

* [📁 A **ZIP file** that contains the website files](../Materials/BookingSystemPhase1.zip)
* [🖥️ A setup guide for deploying the ZIP on a **Virtual Machine**](../Materials/BookingSystemPhase1VM.md)
* [🐳 A setup guide for deploying the ZIP using **Docker**](../Materials/BookingSystemPhase1Docker.md)

---

## 🧩 Your Task

### Part 1: Deploy on a Virtual Machine 🖥️

1. Follow the provided VM guide.
2. Deploy the website so that it opens using the VM’s IP address from your host machine.

✅ The website must open from your host computer’s browser using:

* `http://<VM-IP>/`

---

### Part 2: Deploy in Docker 🐳

1. Follow the provided Docker guide.
2. Deploy the website so that it opens using the Docker site address (depending on the guide, e.g. host IP/localhost + port).

✅ The website must open using the URL specified in the Docker guide, and the browser address bar must show a **root path**, for example:

* `http://<HOST-IP>:<PORT>/`
  *(or whatever the guide tells you to use)*

---

## 📸 Required Screenshots (submit BOTH)

You must submit **two screenshots**:

### ✅ Screenshot 1: VM deployment proof

Your screenshot must show:

* The website loaded in the **host machine browser**
* The browser address bar showing **exactly**:
  `http://<VM-IP>/`

### ✅ Screenshot 2: Docker deployment proof

Your screenshot must show:

* The website loaded in the **host machine browser**
* The browser address bar showing the **root path**, e.g.:
  `http://<HOST-IP>:<PORT>/`

---

## ⭐ Important Requirement (this affects grading)

The key learning point is that a web server typically serves **index.html by default**.

So your screenshots must prove that the site works at the **root path**:

✅ **Correct:** `http://IP-address/`  
❌ **Not accepted as proof:** `http://IP-address/index.html`

In other words: **the page should load without the filename showing in the address bar.**

---

## 📤 Submission Instructions to Itslearning

1. Open the A2 task in Itslearning.
2. Upload **two screenshots** in the answer box:

   * One for the VM
   * One for Docker
3. Make sure the address bar is clearly visible in both screenshots.

---

## 💬 Grading Criteria (0–2 points)

* **`0 points:`** The screenshots do not clearly prove *either* deployment works at the required root path.
* **`1 point:`** Only **one** environment is correctly deployed and proven (VM **or** Docker) at `http://IP/`.
* **`2 points:`** **Both** environments are correctly deployed and proven at the root path (no filename visible).

✅ The main grading focus is: **the address bar shows `http://IP/` OR `http://IP:PORT/` (root path), not a page name.**
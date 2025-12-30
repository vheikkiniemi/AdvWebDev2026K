> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

# 🌐 **Getting Started with Docker and Nginx**

## 🐳 **What is Docker?**

Docker is a platform that packages applications and their dependencies into **containers**.  
A container is a lightweight, standalone environment that runs your app the same way on any system.

### ✅ **Why use Docker?**

*   🔒 **Consistency**: Runs the same everywhere
*   🛡 **Isolation**: No conflicts with other software
*   🚀 **Portability**: Move easily between development and production
*   ⚡ **Simplicity**: One command to start everything

***

## 🎯 **Goal**

You have a folder with HTML files and a `Dockerfile`.  
We will build a Docker image that serves your HTML pages using **Nginx**.

***

## 🛠 **Steps to Run Your Website**

### 1️⃣ **Install Docker**

*   Download Docker Desktop:  
    👉 <https://www.docker.com/products/docker-desktop>
*   For Linux:  
    👉 <https://docs.docker.com/engine/install/>

Verify installation:

```bash
docker --version
```

***

### 2️⃣ **Check Your Files**

Your ZIP contains:

```
📁 Your folder/
├─ 📁 app/
|  ├─ 📄 index.html
|  └─ 📄 (other HTML/CSS/JS files)
└─ 📄 Dockerfile

```

***

### 3️⃣ **Build the Docker Image**

```bash
docker build -t bs-phase1 .
```

***

### 4️⃣ **Run the Container**

```bash
docker run --rm -p 8080:80 bs-phase1
```

***

### 5️⃣ **View Your Website**

Open:

    http://localhost:8080

***

### 6️⃣ **Stop the Container**

Press **CTRL + C** in the terminal.

***

## 🧩 **Dockerfile**

```dockerfile
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY ./ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

***

## 🔍 **Troubleshooting**

*   ⚠ **Port 8080 in use?**  
    Use another port:
    ```bash
    docker run --rm -p 9090:80 bs-phase1
    ```
    Then open `http://localhost:9090`.

*   ⚠ **Permission denied?**  
    Use `sudo` or add user to `docker` group:
    ```bash
    sudo docker run --rm -p 8080:80 bs-phase1
    ```

*   ⚠ **Docker not found?**  
    Check installation:
    ```bash
    docker --version
    ```

*   ⚠ **Website not loading?**  
    Check logs:
    ```bash
    docker ps
    docker logs <container_id>
    ```

***

## 🗑 **Remove Containers and Images**

*   Stop container:
    ```bash
    docker stop <container_id>
    ```
*   Remove image:
    ```bash
    docker rmi bs-phase1
    ```
*   Clean unused:
    ```bash
    docker system prune
    ```

***

## 🚀 **Other Ways to handle Containers**

*   **Detached mode**:
    ```bash
    docker run -d -p 8080:80 bs-phase1
    ```
*   **Name your container**:
    ```bash
    docker run -d -p 8080:80 --name booking-system-phase1 bs-phase1
    ```
*   **Interactive shell**:
    ```bash
    docker exec -it booking-system-phase1 /bin/sh
    ```
*   **Auto-restart**:
    ```bash
    docker run -d --restart always -p 8080:80 bs-phase1
    ```
*   **Remove running container**:
    ```bash
    docker rm -f booking-system-phase1
    ```
*   **Docker Compose**:
    ```yaml
    name: booking-system-phase1
    services:
      web:
        image: bs-phase1
        ports:
          - "8080:80"
    ```

***

# 💡 **Think About This: If an html file is edited, how do you make the changes visible?**


## ✅ 1. RECOMMENDED: Use a bind-mount (code from your machine → into the container)

This is the best and clearest approach for development.

### 1️⃣ Remove the existing container

```bash
docker stop booking-system-phase1
docker rm booking-system-phase1
```

## 2️⃣ Start a new container so that your local `app/` folder is mounted into it

Let’s assume your code is in a folder that contains `app/`:

```bash
docker run -d -p 8080:80 --name booking-system-phase1 -v ./app:/usr/share/nginx/html bs-phase1
```

Note:

* **/path/app** = the full path on your machine (e.g. `C:\project\booking\app` on Windows or `/home/linuxadmin/booking/app` on Linux)
* **/app** = the same path inside the container that the program uses

👉 Now:

* you edit files on your computer
* the container sees the changes immediately (or when you restart the process inside the container — depends on the app)

---

## ✅ 2. Alternative: Rebuild the image every time you change the code

When you run:

```bash
docker build -t bs-phase1 .
```

Docker reads your **Dockerfile** and copies your `app/` folder *into the image*
(usually via something like `COPY app /usr/share/nginx/html`).

👉 **So whenever your code changes → you must rebuild the image.**

---

### 1️⃣ Edit files inside your `app/` folder

---

### 2️⃣ Rebuild the image

(using the same name is fine)

```bash
docker build -t bs-phase1 .
```

Run this in the same folder as your Dockerfile.

---

### 3️⃣ Stop & remove the old container

```bash
docker stop booking-system-phase1
docker rm booking-system-phase1
```

---

### 4️⃣ Start a new container

(because now the files live inside the image)

```bash
docker run -d -p 8080:80 --name booking-system-phase1 bs-phase1
```

🎉 Done — the container now runs the latest code baked into the image.

---

### 🔍 Make sure your Dockerfile copies the app

Your Dockerfile should include something like:

```dockerfile
FROM nginx:alpine
COPY app /usr/share/nginx/html
```

👉 That `COPY` line is what includes your code in the image.

If it was missing, now it’s fixed 🙂

---

### 🧹 Optional but recommended: `.dockerignore`

Create a file named `.dockerignore` next to your Dockerfile:

```
node_modules
.git
.gitignore
Dockerfile
docker-compose.yml
```

This keeps unnecessary files out of the image and speeds up builds.

---

### 🏷️ Optional: Tag versions

If you want versioned images:

```bash
docker build -t bs-phase1:1.0 .
```

Run it with:

```bash
docker run -d -p 8080:80 --name booking-system-phase1 bs-phase1:1.0
```

This is very handy for teaching & rollback.

---

## 🧠 Summary

| Goal                                | Best Method                             |
| ----------------------------------- | --------------------------------------- |
| Fast development (instant changes)  | **Bind-mount** like you already used    |
| Permanent version (no mount needed) | **Rebuild image → Start new container** |

---

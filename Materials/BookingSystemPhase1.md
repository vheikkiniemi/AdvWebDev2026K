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

## 🧩 **Dockerfile Explained**

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

## 🚀 **Other Ways to Run Containers**

*   **Detached mode**:
    ```bash
    docker run -d -p 8080:80 bs-phase1
    ```
*   **Name your container**:
    ```bash
    docker run --rm -p 8080:80 --name mysite bs-phase1
    ```
*   **Interactive shell**:
    ```bash
    docker run -it bs-phase1 /bin/sh
    ```
*   **Auto-restart**:
    ```bash
    docker run -d --restart always -p 8080:80 bs-phase1
    ```
*   **Docker Compose**:
    ```yaml
    name: BookingSystem-Phase1
    services:
      web:
        image: bs-phase1
        ports:
          - "8080:80"
    ```

***

## 💡 **Think About This**

When working as a web developer, consider:

*   🔄 **If you update your HTML/CSS/JS files** → You must **rebuild the image**:
    ```bash
    docker build -t bs-phase1 .
    ```
    Then **restart the container**.
*   🧪 **Testing changes quickly?**  
    Use **bind mounts** instead of copying files into the image:
    ```bash
    docker run -d -p 8080:80 -v $(pwd):/usr/share/nginx/html bs-phase1
    ```
*   🌍 **Going live?**  
    Think about **HTTPS**, **reverse proxy**, and **security headers**.
*   📦 **Version control**:  
    Keep your `Dockerfile` and site in Git for easy collaboration.
*   ⚡ **Performance**:  
    Optimize images, minify CSS/JS before building.
*   🔐 **Security**:  
    Use official base images and keep them updated.

***

✅ You now know how to **build**, **run**, **stop**, **remove**, and **maintain** your Docker-based website!

***
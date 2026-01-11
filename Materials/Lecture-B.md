> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

# 🌐 HTML, CSS, and JavaScript – On-Premise and VM

> ℹ️ *This material introduces how web applications communicate, where they run, and how they are deployed.*

---

## 🔄 Introduction to the HTTP Protocol

### 📡 HTTP (HyperText Transfer Protocol)

* Application-layer protocol for transferring data in web applications.
* Designed specifically for the **World Wide Web (WWW)**.
* **Stateless protocol**:

  * Each request is handled independently.
  * Any state (sessions, authentication) must be implemented explicitly (e.g., cookies, tokens).

> 🧠 *Statelessness improves scalability but shifts responsibility to the application layer.*

---

### ⚙️ Basic Principles of HTTP

* **Client–Server Model**:

  * 🧑‍💻 Client sends a request.
  * 🖥️ Server processes and responds.
* Text-based and human-readable (especially HTTP/1.x).

---

### 📄 [Structure of an HTTP Request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages#http_requests)

1. **Request Line**
   `GET /index.html HTTP/1.1`
2. **Headers**
   Metadata such as host, content type, authentication.
3. **Body (optional)**
   Used mainly with `POST`, `PUT`, `PATCH`.

---

### 📦 [Structure of an HTTP Response](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages#http_responses)

1. **Status Line**
   `HTTP/1.1 200 OK`
2. **Headers**
   Example: `Content-Type: text/html`
3. **Body**
   The actual payload (HTML, JSON, image, etc.).

---

### 🔧 [Common HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods)

* **GET** – Retrieve data
* **POST** – Submit data
* **PUT** – Replace or create resource
* **DELETE** – Remove resource
* **HEAD** – Headers only (useful for checks)

> 🧪 *In RESTful APIs, correct method usage is critical for semantics and security.*

---

### 🚦 [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)

* **1xx** – Informational
* **2xx** – Success (`200 OK`, `201 Created`)
* **3xx** – Redirection (`301`, `302`, `303`)
* **4xx** – Client errors (`400`, `401`, `403`, `404`)
* **5xx** – Server errors (`500`, `502`)

---

### 📈 [HTTP Versions Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Evolution_of_HTTP)

**HTTP/1.1**

* Persistent connections
* Text-based
* Head-of-Line blocking at TCP level

---

**HTTP/2**

* Binary protocol
* Multiplexing
* Header compression (HPACK)

---

**HTTP/3 – Modern Web Transport**

* Built on **QUIC (UDP-based)** instead of TCP
* Benefits:

  * ⚡ Faster connection setup
  * 📱 Better mobile performance
  * 🚫 No Head-of-Line blocking
* 🔐 Built-in TLS 1.3

> 🌍 Increasingly used by CDNs and modern browsers.

---

### 🔒 HTTPS – Secure HTTP

* HTTP + **TLS encryption**
* Guarantees:

  * Confidentiality
  * Integrity
  * Authentication
* Mandatory for modern web applications (SEO + browser enforcement).

---

### 🧩 Role of HTTP in Modern Web Apps

* Foundation for:

  * REST APIs
  * GraphQL
  * Microservices
* Enhanced by:

  * Caching
  * CDNs
  * HTTP/2 & HTTP/3

---

## 🧱 Introduction to Web Services

### 🌐 What Is a Web Service?

* A network-accessible service delivering:

  * Static content
  * Dynamic applications
  * APIs
* Communicates primarily over **HTTP/HTTPS**.
* Key components:
    1. Client (User)
    2. Server
    3. Data transfer via protocol (TCP/UDP, usually port 80 or 443)
---

### 🏗️ Basic Architecture

#### 1️⃣ Client–Server Model

- **Client** (e.g., browser or mobile app) sends requests to the server:
    - Uses a specific protocol and port.
    - Typically located in different physical locations → Latency in data transfer.
- **Server** processes the request and returns a response:
    - Processing consumes resources → Adds latency.
    - Delivering the response → more latency.

#### 2️⃣ Core Components

* **Web Server** (Nginx, Apache)
* **Application Logic** (Node.js, Deno, Python, etc.)
* **Database** (PostgreSQL, MongoDB, etc.)

---

### 🔄 Web Service Development Lifecycle

1. 📝 **Design**
    - Define the service's goals and features.
    - Select technologies (e.g., backend/frontend frameworks and databases).
2. 🛠️ **Implementation**
    - Create a server to handle requests.
    - Design and code frontend and backend logic.
    - Develop API interfaces (REST/GraphQL).
3. 🧪 **Testing**
    - Test functionality, security, and performance.
4. 🚀 **Deployment**
    - Host the service on a web server or in the cloud (e.g., AWS, Azure, Vercel).

> 🔁 *In practice, these phases are iterative, not linear.*

---

### 🧰 Tools and Technologies

**Frontend**

* HTML, CSS, JavaScript
* React, Angular, Vue

---

**Backend**

* Node.js, Deno
* Python (Flask, Django)
* Ruby on Rails

---

**Databases**

* Relational: PostgreSQL, MySQL
* NoSQL: MongoDB, Redis

---

### ⚠️ Key Considerations

**🔐 Security**

* HTTPS
* Input validation
* Authentication & authorization

---

**📈 Scalability**

* Load balancing
* Caching layers

---

**🛠️ Maintenance**

* Updates
* Monitoring
* Logging

---

## 🖥️ On-Premise VM & Deployment

**What is a Virtual Machine (VM)?**
  - A virtual environment that behaves like a physical computer.
  - Hosted using virtualization software (e.g., VirtualBox, VMware, Hyper-V).

**Why Use a Virtual Machine?**
  - Isolated development environment.
  - Easy to manage and replicate.
  - Can simulate different operating systems and server environments.
  - Cost-effective → No usage-based fees (unlike cloud).
  - Ideal for various tests (functionality, performance, security).
  - Located nearby physically → Minimal data transfer delays.
  - Essential for security testing in a controlled environment.

**Goals**
  - Deploy a web service on a local VM to simulate a real server environment.

---

### ⚙️ VM Setup Steps

**1️⃣ Create VM**  
- Select virtualization software (e.g., VirtualBox).
- Install an operating system (e.g., Ubuntu Server).

**2️⃣ Configure resources**  
- Allocate sufficient resources (RAM, CPU, storage).
- Configure network settings (NAT, bridged mode).

**3️⃣ Install software stack**
- Web server (e.g., Nginx, Apache).
- Application runtime (e.g., Node.js, Python).
- Database (e.g., PostgreSQL, MySQL).

---

### 🚚 Developing and deploying to a VM

**1️⃣ Develop the Application**:  
- Create a locally functioning application (frontend + backend).
- Test the application thoroughly before transferring.

**2️⃣Transfer the Application to the Virtual Machine**:
- Copy files using SCP, SFTP, or Git.
- Install application dependencies (e.g., `npm install`, `pip install`).

**3️⃣ Configure the Server**:
- Set up the web server to route traffic to the application.
- If needed, create a `systemd` service for automatic startup.

**4️⃣ Start the Application**:
- Test the service locally within the virtual machine (e.g., `curl http://localhost`).

**5️⃣ Enable Access for External Devices**:
- Configure VM network settings (bridged/NAT + port forwarding).
- Open necessary ports in the firewall (e.g., `sudo ufw allow 80`).

**6️⃣ Test External Access**:
- Verify that the service is accessible from the host machine or other devices (e.g., `curl http://<vm-ip>`).

---

### 🛡️ Key Considerations and Tips

**Maintenance:**
- Regularly update the operating system and software (apt update && apt upgrade).
- Ensure logs are collected and monitored.

---

**Performance:**
- Optimize resource usage for the VM (CPU, RAM, I/O).
- Use caching mechanisms (e.g., Redis, Nginx).

---

**Security:**
* Use strong passwords and restrict access with SSH keys.
* Enable HTTPS (e.g., with Let's Encrypt).

---

**Backups and Snapshots:**
* Create a snapshot before major changes.
* Back up critical files regularly

---

## ☁️ Cloud & Web Service Deployment

### 🧩 Cloud Service Models

**`IaaS` (Infrastructure as a Service)**
- **Level**: Infrastructure.
- **User responsibility**:
    - Operating system, applications, security.
- **Provider responsibility**:
    - Virtual machines, storage, networks, hardware.
- **Examples**:
    - Amazon EC2, Google Compute Engine, Microsoft Azure VM.

---

**`PaaS` (Platform as a Service)**
- **Level**: Platform.
- **User responsibility**:
    - Application development and management.
- **Provider responsibility**:
    - Infrastructure, operating systems, development tools.
- **Examples**:
    - Google App Engine, Heroku, Microsoft Azure Static Web Apps.

---

**`SaaS` (Software as a Service)**
- **Level**: Software.
- **User responsibility**:
    - Usage through the application.
- **Provider responsibility**:
    - All infrastructure, application, and security.
- **Examples**:
    - GitHub pages, Wix, Google Sites

---

**`FaaS` (Function as a Service) / Serverless**
- **Level**: Function-level execution.
- **User responsibility**:
    - Individual code blocks and their logic.
- **Provider responsibility**:
    - Scaling, infrastructure, execution.
- **Examples**:
    - AWS Lambda, Google Cloud Functions, Azure Functions.

---

**Summary of Differences**:
- `IaaS`: Freedom to manage infrastructure.
- `PaaS`: Faster development without infrastructure management.
- `SaaS`: Ready-to-use software.
- `FaaS`: Pay only for execution without managing servers.

---

### ☁️ Cloud VM Deployment (e.g. IaaS)

* Same principles as on-premise
* Differences:

  * Public IPs
  * Cloud firewalls
  * Pay-as-you-go

---

### 🌍 Cloud Deployment Essentials

* DNS
* TLS certificates
* Monitoring
* Cost management

---

# 🐳 Introduction to Docker and Containerized Web Services

> 💡 *Docker introduces a modern, lightweight alternative to traditional virtual machines by packaging applications and their dependencies into containers.*

---

## 🔍 What Is Docker?

Docker is a **containerization platform** that allows applications to be packaged, distributed, and run in isolated environments called **containers**.

* Containers include:

  * Application code
  * Runtime
  * Libraries
  * Configuration
* Containers run **on top of the host OS kernel**
* Much lighter than virtual machines

> 🧠 *Think of Docker as “shipping containers for software”.*

---

## ⚖️ Virtual Machines vs Containers

| Feature        | Virtual Machine | Docker Container   |
| -------------- | --------------- | ------------------ |
| OS             | Full guest OS   | Shared host kernel |
| Startup time   | Minutes         | Seconds            |
| Resource usage | High            | Low                |
| Isolation      | Strong          | Process-level      |
| Portability    | Medium          | Very high          |

> ✅ Containers are ideal for **development, testing, CI/CD, and microservices**.

---

## 🧱 Core Docker Concepts

### 📦 Image

* A **read-only blueprint** for a container
* Built from a `Dockerfile`
* Example:

  ```bash
  docker pull nginx
  ```

---

### ▶️ Container

* A **running instance** of an image
* Isolated process
* Can be started, stopped, removed

```bash
docker run -p 8080:80 nginx
```

---

### 📝 Dockerfile

A text file describing **how to build an image**.

Example:

```dockerfile
FROM nginx:alpine
COPY ./app /usr/share/nginx/html
```

> 🧠 *Dockerfiles make environments reproducible.*

---

### 🗂️ Volumes & Bind Mounts

Used for **persistent data** and **live development**.

* **Volume**: Managed by Docker
* **Bind mount**: Maps local folder → container

```bash
-v ./app:/usr/share/nginx/html
```

---

## 🌐 Networking in Docker

### 🔗 Container Networking

* Containers can communicate using **service names**
* Docker creates an **internal virtual network**
* No need to expose internal services publicly

Example:

```text
web → api → database
```

> 🔐 *Databases should usually NOT be exposed to the host.*

---

## 🧩 Docker Compose – Multi-Container Applications

Docker Compose allows defining **multiple services** in one file.

### 📄 docker-compose.yml (Example)

```yaml
services:
  web:
    image: nginx
    ports:
      - "8080:80"
```

### Benefits

* One-command startup:

  ```bash
  docker compose up
  ```
* Clear service separation
* Ideal for:

  * Frontend + backend
  * API + database
  * Full-stack projects

---

### Example Stack

* **Nginx** – Web server / reverse proxy
* **Node.js / Deno** – Application logic
* **PostgreSQL** – Database

Each runs in its **own container**.

---

## 🔐 Security Considerations

* Containers are **not VMs**
* Best practices:

  * Do not run as root
  * Limit exposed ports
  * Use `.env` files
  * Keep images updated
* Secrets:

  * Never hardcode passwords
  * Use environment variables

> ⚠️ *Security is a shared responsibility between Docker and the developer.*

---

## 🚀 Docker in Development vs Production

### 🧪 Development

* Bind mounts
* Live reload
* Debugging enabled

### 🏭 Production

* Immutable images
* No source code mounts
* Logging & monitoring
* Reverse proxy + HTTPS

---

## ☁️ Docker and the Cloud

Docker works seamlessly with:

* Cloud VMs (`IaaS`)
* `PaaS` platforms

Common workflow:

1. Build image locally
2. Push to registry
3. Deploy anywhere

---

## 🎯 Why Docker Is Essential for Modern Web Developers

* Environment consistency
* Faster onboarding
* Easier collaboration
* Foundation for:

  * Microservices
  * CI/CD pipelines
  * Cloud-native apps

> 🧠 *“It works on my machine” is no longer an excuse.*

---
> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

# 🌐 Getting Started with a Virtual Machine and Nginx

## 🎯 Goal

You will:

* Install a **Debian virtual machine** in VirtualBox
* Install **Nginx** on the VM
* Copy the contents of a ZIP file’s `app/` folder into Nginx’s default web directory
* Access the application via a browser using the **VM’s IP address**

👉 **End result:** Opening `http://<VM-IP>` in a browser displays the `index.html` file from the `app/` folder.

---

## 🧠 Conceptual Difference vs Docker (important!)

| Docker-based approach       | VM-based approach               |
| --------------------------- | ------------------------------- |
| App runs inside a container | App runs directly on a Linux OS |
| Files copied into image     | Files copied into filesystem    |
| Port mapping (`-p 8080:80`) | Direct network access via VM IP |
| Nginx inside container      | Nginx installed on the VM       |

This VM approach is closer to a **traditional server deployment**.

---

## 🛠 Steps to Run Your Website

### 1️⃣ Create the Virtual Machine (VirtualBox)

**Requirements**

* VirtualBox installed on the host machine
* Debian ISO image (netinst or full)

---

**Recommended VM settings**

* **Type:** Linux
* **Version:** Debian (64-bit)
* **Memory:** 2 GB (minimum)
* **CPU:** 2 cores
* **Network:**

  * Bridged Adapter

Install Debian normally and create a user account.

---

### 2️⃣ Log in and Update the System

Open a terminal inside the Debian VM and run:

```bash
sudo apt update
sudo apt upgrade -y
```

### 3️⃣ Enable SSH Access (Recommended After Installation)

After the virtual machine and Nginx are working correctly, it is **strongly recommended** to enable **SSH (Secure Shell)** access.

SSH allows you to:

* manage the VM remotely
* copy files securely
* avoid working directly in the VirtualBox console
* use the VM like a real server

---

#### Step 1: Install OpenSSH Server

On the Debian VM, open a terminal and run:

```bash
sudo apt install openssh-server -y
```

Verify that the SSH service is running:

```bash
systemctl status ssh
```

Expected result:

```
active (running)
```

---

#### Step 2: Allow SSH Through the Firewall (if enabled)

If `ufw` is in use:

```bash
sudo ufw allow ssh
sudo ufw reload
```

Check status:

```bash
sudo ufw status
```

---

#### Step 3: Check the VM IP Address

Run:

```bash
ip a
```

Example output:

```
inet 192.168.1.120/24
```

This IP address will be used for SSH connections.

---

#### Step 4: Connect via SSH From the Host Machine

**From Linux or macOS**

```bash
ssh username@192.168.1.120
```

Example:

```bash
ssh student@192.168.1.120
```

---

**From Windows (PowerShell)**

```powershell
ssh username@192.168.1.120
```

Windows 10/11 includes SSH by default.

---

#### Step 5: (Optional) Copy Files Using SCP

You can copy files **from the host to the VM** using SCP.

Example:

```bash
scp project.zip username@192.168.1.120:/home/username/
```

Then unzip and deploy as described earlier.

---

### 4️⃣ Install Nginx

Install Nginx from Debian repositories:

```bash
sudo apt install nginx -y
```

Verify that Nginx is running:

```bash
systemctl status nginx
```

You should see `active (running)`.

---

### 5️⃣ Test Default Nginx Page

Now open a browser **on the host machine** and go to (Example address):

```
http://192.168.1.120
```

If you see the **Nginx welcome page**, networking works ✅

---

### 6️⃣ Copy Your Application Files

Your ZIP contains:

```
📁 extracted folder
├─ 📁 app/
|  ├─ 📄 index.html
|  └─ 📄 (other HTML/CSS/JS files)
└─ 📄 Dockerfile
```

**Copy the ZIP file to the VM**

You can use:

* Shared folder (VirtualBox)
* SCP
* Drag & drop (if enabled)

Example (inside VM, assuming ZIP is in home directory):

```bash
unzip project.zip
```

---

### 7️⃣ Move Files to Nginx Web Root

**Default Nginx web directory**

```
/var/www/html
```

Remove the default files:

```bash
sudo rm -rf /var/www/html/*
```

Copy the contents of the `app/` folder:

```bash
sudo cp -r app/* /var/www/html/
```

Fix permissions (important):

```bash
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html
```

---

### 8️⃣ View Your Application

Open a browser on the host machine 👉 The `index.html` file from the `app/` folder is now displayed.

---

## 9️⃣ Updating the Application (optional)

When files change:

1. Edit files locally or inside the VM
2. Copy updated files again:

   ```bash
   sudo cp -r app/* /var/www/html/
   ```
3. Refresh the browser

👉 No rebuilds, no containers → This is **direct filesystem deployment**.

---

## 🔍 Troubleshooting

### ❌ Page not loading

* Check Nginx status:

  ```bash
  systemctl status nginx
  ```
* Check firewall (if enabled):

  ```bash
  sudo ufw status
  ```

### ❌ Wrong page shown

* Ensure files are in:

  ```
  /var/www/html
  ```
* Ensure `index.html` exists

### ❌ Permission errors

Re-run:

```bash
sudo chown -R www-data:www-data /var/www/html
```

---

## 🧠 Summary

| Task                                 | Result |
| ------------------------------------ | ------ |
| Debian VM installed                  | ✔      |
| Nginx installed & running            | ✔      |
| App files copied to `/var/www/html`  | ✔      |
| Browser shows `index.html` via VM IP | ✔      |

---
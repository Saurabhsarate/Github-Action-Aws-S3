# 🚀 THE VOID | AWS S3 CI/CD Lab

This is a high-energy, interactive "Matrix-style" static website built to practice **Modern DevOps** workflows using **GitHub Actions** and **Amazon S3**.

## 🌐 Live Demo
> **URL:** [Insert your S3 Endpoint URL here]

---

## ⚡ Features
- **Cyberpunk UI:** Matrix rain background using HTML5 Canvas.
- **Glitch Effects:** CSS3 animations for a "hacker" aesthetic.
- **Real-time Stats:** Interactive uptime counter and "Chaos" trigger via JavaScript.
- **Fully Automated:** Zero-manual-effort deployment. 

## 🛠 Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla).
- **Hosting:** Amazon S3 (Simple Storage Service).
- **CI/CD:** GitHub Actions.
- **Cloud Provider:** AWS (IAM, S3).

---

## 🏗 CI/CD Architecture
1. **Developer** pushes code to the `main` branch.
2. **GitHub Actions** triggers the `Final Deployment to S3` workflow.
3. **AWS CLI** is configured inside the GitHub runner using stored Secrets.
4. **S3 Sync** command synchronizes the local files with the `system-online` bucket.
5. **Deployment** is live instantly!

---

## ⚙️ Setup & Configuration

### 1. AWS S3 Configuration
- Create a bucket named `system-online`.
- Enable **Static Website Hosting**.
- Set **Index Document** to `index.html`.
- Disable **Block Public Access**.
- Apply the following **Bucket Policy**:
-json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::system-online/*"
        }
    ]
}

2. GitHub Secrets
To make the deployment work, the following secrets must be added in Settings > Secrets and variables > Actions:
Secret Name	Description
AWS_ACCESS_KEY_ID	Your IAM User Access Key
AWS_SECRET_ACCESS_KEY	Your IAM User Secret Key
AWS_S3_BUCKET	Your bucket name (system-online)

📂 Project Structure
.
├── .github/workflows/main.yml  # CI/CD Pipeline Configuration
├── index.html                  # Main Website Entry
├── style.css                   # Cyberpunk Styling
├── script.js                   # Matrix & Chaos Logic
└── README.md                   # Project Documentation

👨‍💻 Author
Saurabh Sarate
DevOps Practice Lab
Generated with ❤️ for the DevOps Community.


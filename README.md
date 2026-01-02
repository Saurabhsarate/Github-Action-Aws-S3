# ⚡ GitHub Action to AWS S3: Automated Matrix Void ⚡

![Deployment Status](https://img.shields.io/github/actions/workflow/status/Saurabhsarate/Github-Action-Aws-S3/main.yml?branch=main&style=for-the-badge)
![AWS S3](https://img.shields.io/badge/AWS-S3-FF9900?style=for-the-badge&logo=amazons3&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

An automated CI/CD pipeline project that deploys a high-performance, interactive Cyberpunk/Matrix-themed static website to Amazon S3. Built to practice DevOps automation, cloud permissions, and Infrastructure-as-Code principles.

---


---

## 🚀 Project Overview
This repository serves as a practical lab for:
1. **CI/CD Automation:** Using GitHub Actions to eliminate manual deployments.
2. **AWS S3 Hosting:** Configuring object storage for high-availability static web hosting.
3. **Security & IAM:** Implementing the principle of least privilege using GitHub Secrets and IAM policies.
4. **Interactive Frontend:** A "Crazy" UI featuring HTML5 Canvas Matrix rain and glitch CSS animations.

---

## 🏗️ Architecture
```mermaid
graph LR
    A[Local Code] -->|Git Push| B(GitHub Repository)
    B -->|Trigger Workflow| C{GitHub Actions}
    C -->|Auth via IAM| D[AWS S3 Bucket]
    D -->|Host| E[Live Website]
Commit: Developer pushes changes to the main branch.
Trigger: GitHub Actions picks up the new commit.
Configure: The runner sets up AWS credentials securely.
Sync: The aws s3 sync command updates only the changed files in the system-online bucket.
🛠️ Tech Stack
Frontend: HTML5, CSS3 (Glitch FX), Vanilla JavaScript (Matrix Rain Logic).
Cloud: Amazon Web Services (S3).
Automation: GitHub Actions (YAML).
⚙️ Configuration & Setup
1. AWS S3 Setup
Create a bucket: system-online.
Properties: Enable "Static website hosting" (Set index.html as the index document).
Permissions:
Disable "Block all public access".
Apply the following Bucket Policy:
code
JSON
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
2. GitHub Secrets Setup
Go to Settings > Secrets and variables > Actions and add:
AWS_ACCESS_KEY_ID: Your IAM User Key.
AWS_SECRET_ACCESS_KEY: Your IAM User Secret.
AWS_S3_BUCKET: system-online
📂 Project Structure
code
Text
.
├── .github/workflows/main.yml  # Deployment Pipeline
├── index.html                  # Cyberpunk UI Entry
├── style.css                   # Glitch & Neon Styling
├── script.js                   # Matrix Rain Logic
└── README.md                   # Documentation
👨‍💻 Author
Saurabh Sarate
Aspiring DevOps Engineer

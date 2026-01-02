# ⚡ GitHub Action to AWS S3: Automated Matrix Void ⚡

![Deployment Status](https://img.shields.io/github/actions/workflow/status/Saurabhsarate/Github-Action-Aws-S3/main.yml?branch=main&style=for-the-badge)
![AWS S3](https://img.shields.io/badge/AWS-S3-FF9900?style=for-the-badge&logo=amazons3&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)


# 🚀 Project Overview
This repository covers:
•	Automated CI/CD using GitHub Actions
•	Static website hosting on AWS S3
•	Secure IAM authentication with least privilege
•	Interactive UI with Matrix rain & glitch effects
________________________________________
# 🏗️ Architecture Flow
Local Machine → GitHub Repository → GitHub Actions → AWS S3 → Live Website
Flow explanation:
1.	Code is pushed to the main branch
2.	GitHub Actions workflow is triggered
3.	AWS credentials are securely loaded from GitHub Secrets
4.	Files are synced to S3 using AWS CLI
5.	Website updates automatically
________________________________________
# 🛠️ Tech Stack
•	Frontend: HTML5, CSS3, JavaScript
•	UI Effects: Canvas API, CSS Glitch Animations
•	Cloud: AWS S3
•	CI/CD: GitHub Actions
•	Configuration: YAML
________________________________________
# ⚙️ Configuration & Setup
AWS S3 Bucket Setup
•	Create an S3 bucket named system-online
•	Enable Static Website Hosting
•	Set index document to index.html
•	Disable Block all public access
•	Add this bucket policy:

'''json
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
}

# IAM User Permissions

Create an IAM user with programmatic access and attach:

{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": 
      [        "s3:PutObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::system-online",
        "arn:aws:s3:::system-online/*"
      }
    }
}

GitHub Secrets Configuration
Add these secrets in Repository → Settings → Secrets → Actions:
•	AWS_ACCESS_KEY_ID
•	AWS_SECRET_ACCESS_KEY
•	AWS_S3_BUCKET = system-online
•	AWS_REGION = ap-south-1
________________________________________
⚡ GitHub Actions Workflow
The workflow deploys the website automatically on every push to the main branch using aws s3 sync.
________________________________________
📂 Project Structure
.github/workflows/main.yml   # CI/CD pipeline
index.html                  # Website entry point
style.css                   # Cyberpunk UI styling
script.js                   # Matrix rain animation
README.md                   # Documentation
________________________________________
🔐 Security Best Practices
•	AWS credentials stored securely in GitHub Secrets
•	IAM permissions follow least privilege principle
•	No secrets committed to the repository
•	Fully automated deployment process
________________________________________
🎯 Learning Outcomes
•	CI/CD pipeline design with GitHub Actions
•	AWS S3 static website hosting
•	IAM security best practices
•	End-to-end DevOps workflow
________________________________________
👨‍💻 Author
Saurabh Sarate
Aspiring DevOps Engineer
________________________________________
📚 References
•	AWS S3 Static Website Hosting
https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html
•	AWS IAM Best Practices
https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html
•	GitHub Actions Documentation
https://docs.github.com/en/actions
•	AWS CLI s3 sync
https://docs.aws.amazon.com/cli/latest/reference/s3/sync.html



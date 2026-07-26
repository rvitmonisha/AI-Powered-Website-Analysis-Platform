# 🚀 AI-Powered Website Intelligence Platform

An AI-powered web application that analyzes any website URL and provides comprehensive insights including website content extraction, AI-generated analysis, SEO evaluation, technology stack detection, and website statistics.

This project demonstrates **Full Stack Development, Web Scraping, API Development, and AI Integration** using React, FastAPI, and AI technologies.

---

# 📌 Project Overview

The **AI-Powered Website Intelligence Platform** allows users to enter any website URL and instantly receive detailed information about the website.

The system extracts website data, analyzes content using AI, detects the technologies used in the website, and provides SEO performance insights.

The platform performs:

- 🌐 Website Content Extraction
- 🤖 AI-Based Website Analysis
- 💻 Technology Stack Detection
- 🔍 SEO Analysis
- 📊 Website Statistics
- ⚡ Fast API Response
- 🎨 Modern Responsive User Interface

---

# ✨ Features

## 🌍 Website Scraping

Extracts:

- Website Title
- Headings (H1, H2, H3)
- Paragraph Content
- Internal Links
- External Links

---

## 🤖 AI Website Analysis

Generates:

- Website Purpose
- Target Audience
- Main Topics
- Content Summary
- SEO Suggestions
- Improvement Recommendations

---

## 🔍 SEO Analysis

Checks:

- Meta Description
- H1 Tag Presence
- Image Count
- Images with ALT Text
- Internal Links
- External Links
- Overall SEO Score

---

## 💻 Technology Detection

Automatically detects technologies such as:

- React
- Vue.js
- Angular
- Next.js
- Nuxt.js
- Bootstrap
- Tailwind CSS
- WordPress
- Shopify
- jQuery
- Cloudflare
- Google Analytics

---

## 📊 Website Statistics

Calculates:

- Total Word Count
- Paragraph Count
- Estimated Reading Time
- Website Content Length

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios

## Backend

- Python
- FastAPI
- Uvicorn

## Web Scraping

- BeautifulSoup4
- Requests

## AI Integration

- OpenAI API
- Python Dotenv

## Version Control

- Git
- GitHub

---

# 📁 Project Structure

```
AI-Powered-Website-Intelligence-Platform/

│
├── frontend/
│
│   ├── src/
│   │
│   │   ├── components/
│   │   │
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   └── UrlForm.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── package.json
│
├── backend/
│
│   ├── main.py
│   ├── ai.py
│   ├── requirements.txt
│   └── .env
│
├── .gitignore
└── README.md
```

---

# ⚙️ Installation and Setup

## 1. Clone Repository

```bash
git clone https://github.com/rvitmonisha/AI-Powered-Website-Analysis-Platform.git
```

---

## 2. Navigate to Project Folder

```bash
cd AI-Powered-Website-Analysis-Platform
```

---

# 🖥️ Backend Setup

## 1. Navigate to Backend Folder

```bash
cd backend
```

---

## 2. Create Virtual Environment

```bash
python -m venv venv
```

---

## 3. Activate Virtual Environment

### Windows PowerShell

```powershell
.\venv\Scripts\Activate.ps1
```

---

## 4. Install Dependencies

```bash
pip install -r requirements.txt
```

Or manually install:

```bash
pip install fastapi uvicorn requests beautifulsoup4 openai python-dotenv
```

---

## 5. Add Environment Variables

Create a file:

```
backend/.env
```

Add:

```env
OPENAI_API_KEY=your_openai_api_key
```

---

## 6. Run Backend Server

```bash
uvicorn main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

---

# 🎨 Frontend Setup

Open another terminal.

## 1. Navigate to Frontend

```bash
cd frontend
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Start React Application

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 🚀 Running the Project

Open two terminals.

## Terminal 1 - Backend

```bash
cd backend

.\venv\Scripts\activate

uvicorn main:app --reload
```

---

## Terminal 2 - Frontend

```bash
cd frontend

npm run dev
```

---

Open browser:

Frontend:

```
http://localhost:5173
```

Backend:

```
http://127.0.0.1:8000
```

---

# 🔄 Application Workflow

```
User enters Website URL

        ↓

React Frontend

        ↓

Axios API Request

        ↓

FastAPI Backend

        ↓

BeautifulSoup Web Scraper

        ↓

Website Content Extraction

        ↓

AI Content Analysis

        ↓

SEO + Technology Detection

        ↓

Display Website Report
```

---

# 📡 API Documentation

## GET /

Checks whether backend is running.

Response:

```json
{
  "message": "Backend is running!"
}
```

---

## POST /scrape

Analyzes a website URL.

Request:

```json
{
  "url": "https://example.com"
}
```

Response contains:

- Website Title
- Website Content
- AI Analysis
- Technology Detection
- SEO Analysis
- Website Statistics
- SEO Score

---

# 🔧 Development Process

## Phase 1: Project Setup

Completed:

- Created React application using Vite
- Created FastAPI backend
- Configured frontend and backend structure

---

## Phase 2: Frontend Development

Implemented:

- Navbar Component
- Hero Section
- URL Input Form
- Axios API Integration

---

## Phase 3: Backend Development

Implemented:

- FastAPI server
- Website scraping API
- HTML parsing
- Content extraction

---

## Phase 4: AI Integration

Implemented:

- AI-based website analysis
- Content summarization
- SEO recommendations

---

## Phase 5: Website Intelligence Features

Added:

- Technology detection
- SEO scoring
- Website statistics
- Link analysis

---

## Phase 6: GitHub Setup

Completed:

- Git initialization
- Added .gitignore
- Created commits
- Connected GitHub repository
- Uploaded project

---

# 🔮 Future Enhancements

- Retrieval Augmented Generation (RAG)
- FAISS Vector Database
- Website Chatbot
- PDF Report Generation
- User Authentication
- Analysis History Storage
- Website Comparison
- Cloud Deployment

---

# 🎯 Project Objective

The objective of this project is to build an intelligent website analysis platform that combines:

- Web Scraping
- Artificial Intelligence
- Natural Language Processing
- Full Stack Development

to automatically generate meaningful insights from any website.

---

# 👩‍💻 Author

**rvitmonisha**

AI-Powered Website Intelligence Platform

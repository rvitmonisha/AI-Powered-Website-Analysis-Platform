# 🚀 AI-Powered Website Intelligence Platform

An AI-powered web application that analyzes any website URL and provides comprehensive insights including content extraction, AI-generated summaries, SEO analysis, technology stack detection, and website statistics. This project demonstrates full-stack development using React and FastAPI while integrating AI capabilities for intelligent website analysis.

---

## 📌 Project Overview

The AI-Powered Website Intelligence Platform allows users to enter any website URL and instantly receive detailed analysis about the website.

The platform performs:

- 🌐 Website Content Extraction
- 🤖 AI-Based Website Summary
- 💻 Technology Stack Detection
- 🔍 SEO Analysis
- 📊 Website Statistics
- ⚡ Fast API Response
- 🎨 Modern Responsive User Interface

This project is designed as an industry-level placement project showcasing Full Stack Development, Web Scraping, API Development, and AI Integration.

---

# ✨ Features

### 🌍 Website Scraping

Extracts:

- Website Title
- Headings (H1, H2, H3)
- Paragraph Content
- Internal Links
- External Links

---

### 🤖 AI Analysis

Generates:

- Website Purpose
- Target Audience
- Main Topics
- Content Summary
- SEO Suggestions
- Improvement Recommendations

---

### 🔍 SEO Analysis

Checks:

- Meta Description
- H1 Tag Presence
- Image Count
- Images with ALT Text
- Internal Links
- External Links
- Overall SEO Score

---

### 💻 Technology Detection

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

### 📊 Website Statistics

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

---

## Backend

- Python
- FastAPI
- Uvicorn

---

## Web Scraping

- BeautifulSoup4
- Requests

---

## AI Integration

- OpenAI API
- Python Dotenv

---

## Version Control

- Git
- GitHub

---

# 📁 Project Structure

```

AI-Powered-Website-Intelligence-Platform/

│

├── frontend/

│ ├── src/

│ │ ├── components/

│ │ │ ├── Navbar.jsx

│ │ │ ├── Hero.jsx

│ │ │ └── UrlForm.jsx

│ │

│ ├── App.jsx

│ └── main.jsx

│

├── backend/

│ ├── main.py

│ ├── ai.py

│ ├── .env

│ └── requirements.txt

│

├── .gitignore

├── README.md

└── LICENSE
'''

# ⚙️ Installation
'''
## 1. Clone the Repository

```bash
git clone https://github.com/yourusername/AI-Powered-Website-Intelligence-Platform.git
```

## 2. Navigate to the Project Folder

```bash
cd AI-Powered-Website-Intelligence-Platform
```

---

# 🖥️ Backend Setup

## 1. Navigate to the Backend Folder

```bash
cd backend
```

## 2. Create a Virtual Environment (First Time Only)

```bash
python -m venv venv
```

## 3. Activate the Virtual Environment

### Windows (Command Prompt)

```bash
venv\Scripts\activate
```

### Windows (PowerShell)

```powershell
.\venv\Scripts\Activate.ps1
```

---

## 4. Install Dependencies

If you have a **requirements.txt** file:

```bash
pip install -r requirements.txt
```

Or install them manually:

```bash
pip install fastapi uvicorn requests beautifulsoup4 openai python-dotenv
```

---

## 5. Create a `.env` File

Create a `.env` file inside the **backend** folder and add your API key:

```env
OPENAI_API_KEY=your_openai_api_key
```

---

## 6. Run the Backend Server

```bash
uvicorn main:app --reload
```

The backend will start at:

```
http://127.0.0.1:8000
```

---

# 🎨 Frontend Setup

## 1. Open a New Terminal

Navigate to the frontend folder:

```bash
cd frontend
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Start the React Development Server

```bash
npm run dev
```

The frontend will start at:

```
http://localhost:5173
```

---

# 🚀 Running the Project

Open **two terminals**.

### Terminal 1 (Backend)

```bash
cd backend
venv\Scripts\activate
uvicorn main:app --reload
```

### Terminal 2 (Frontend)

```bash
cd frontend
npm run dev
```

Open your browser and visit:

**Frontend:** `http://localhost:5173`

**Backend API:** `http://127.0.0.1:8000`

---

# 📡 API Endpoint

## GET /

Checks whether the backend is running.

**Response**

```json
{
  "message": "Backend is running!"
}
```

---

## POST /scrape

Analyzes a website URL.

### Request

```json
{
  "url": "https://example.com"
}
```

### Response

- Website Title
- Website Content
- AI Summary
- Technology Detection
- SEO Analysis
- Website Statistics
- SEO Score



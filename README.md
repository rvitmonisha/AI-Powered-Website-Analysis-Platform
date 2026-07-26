# AI-Powered Website Intelligence Platform

An AI-powered web application that analyzes any website URL and provides comprehensive insights including website content extraction, AI-generated analysis, SEO evaluation, technology stack detection, and website statistics.

This project demonstrates Full Stack Development, Web Scraping, API Development, and AI Integration using React, FastAPI, and Artificial Intelligence technologies.

---

# Project Overview

The AI-Powered Website Intelligence Platform allows users to enter any website URL and receive detailed insights about the website.

The platform extracts website information, analyzes the content using AI, identifies technologies used in the website, performs SEO checks, and provides useful recommendations.

The main objective of this project is to build an intelligent website analysis system that combines web scraping, frontend development, backend APIs, and AI-powered analysis.

---

# Features

## Website Content Extraction

The platform extracts important website information including:

- Website Title
- Headings (H1, H2, H3)
- Paragraph Content
- Internal Links
- External Links

---

## AI-Based Website Analysis

The AI module analyzes extracted website content and provides:

- Website Purpose
- Target Audience
- Main Topics
- Content Summary
- SEO Suggestions
- Improvement Recommendations

---

## SEO Analysis

The system performs website SEO evaluation by checking:

- Meta Description
- H1 Tag Presence
- Number of Images
- Images with ALT Attributes
- Internal Links
- External Links
- Overall SEO Score

---

## Technology Stack Detection

The platform automatically detects technologies used by websites.

Supported technologies include:

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

## Website Statistics

The platform calculates website statistics such as:

- Total Word Count
- Paragraph Count
- Estimated Reading Time
- Extracted Content Length

---

# Technology Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- JavaScript

---

## Backend

- Python
- FastAPI
- Uvicorn
- REST API

---

## Web Scraping

- BeautifulSoup4
- Requests

---

## AI Integration

Currently implemented:

- OpenAI API
- Python Dotenv for secure API key management

Future AI model support:

- Ollama for running Local Large Language Models
- Google Gemini API
- LangChain Framework
- FAISS Vector Database
- Retrieval-Augmented Generation (RAG)

The project architecture is designed to support local AI models and advanced RAG-based website question answering in future versions.

---

## Version Control

- Git
- GitHub

---

# Project Structure

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
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│
│   ├── main.py
│   ├── ai.py
│   ├── requirements.txt
│   └── .env
│
├── .gitignore
├── README.md
└── LICENSE
```

---

# Installation and Setup

## Clone Repository

```bash
git clone https://github.com/rvitmonisha/AI-Powered-Website-Analysis-Platform.git
```

Navigate into the project folder:

```bash
cd AI-Powered-Website-Analysis-Platform
```

---

# Backend Setup

Navigate to backend:

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate virtual environment:

Windows PowerShell:

```powershell
.\venv\Scripts\Activate.ps1
```

Windows Command Prompt:

```cmd
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

If requirements.txt is not available:

```bash
pip install fastapi uvicorn requests beautifulsoup4 openai python-dotenv
```

---

# Environment Configuration

Create a `.env` file inside the backend folder.

Add your API key:

```env
OPENAI_API_KEY=your_openai_api_key
```

The API key is loaded securely using Python Dotenv.

---

# Running Backend Server

Start FastAPI server:

```bash
uvicorn main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

---

# Frontend Setup

Open a new terminal.

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start React development server:

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# Running the Complete Project

Two terminals are required.

## Terminal 1 - Backend

```bash
cd backend

.\venv\Scripts\Activate.ps1

uvicorn main:app --reload
```

## Terminal 2 - Frontend

```bash
cd frontend

npm run dev
```

Open browser:

```
http://localhost:5173
```

Enter any website URL to analyze.

---

# API Documentation

## GET /

Checks whether the backend server is running.

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
- Extracted Content
- AI Analysis
- Technology Detection
- SEO Analysis
- Website Statistics

---

# Development Process

The project was developed using the following workflow:

1. Created React frontend using Vite.
2. Designed responsive user interface components.
3. Added Tailwind CSS for styling.
4. Added Axios for frontend-backend communication.
5. Developed FastAPI backend.
6. Implemented website scraping using BeautifulSoup.
7. Added technology stack detection.
8. Added SEO analysis features.
9. Integrated AI-based website content analysis.
10. Configured CORS communication between frontend and backend.
11. Added Git version control and GitHub repository management.

---

# Future Enhancements

Planned improvements:

- Implement RAG-based website question answering
- Add LangChain pipeline
- Integrate FAISS vector database
- Add Ollama local AI model support
- Generate downloadable PDF reports
- Store previous analysis history
- Add user authentication
- Improve technology detection accuracy
- Add advanced SEO scoring system

---

# Project Objective

The objective of this project is to create an intelligent website analysis platform that combines:

- Full Stack Development
- Artificial Intelligence
- Web Scraping
- Natural Language Processing
- API Development

This project demonstrates practical implementation of modern software engineering and AI technologies.

---
# System Architecture

The application follows a full-stack client-server architecture.

## Workflow

1. User enters a website URL through the React frontend.
2. Frontend sends the URL request to FastAPI backend using Axios.
3. Backend fetches website HTML content using Requests.
4. BeautifulSoup extracts meaningful website information.
5. The system analyzes:
   - Website content
   - SEO parameters
   - Technologies used
   - Website statistics
6. Extracted content is sent to the AI module.
7. AI generates website insights and recommendations.
8. The final analysis result is displayed on the frontend.

Architecture Flow:

User
 |
 |
React Frontend
 |
 |
FastAPI Backend
 |
 |
Website Scraper
 |
 |
AI Analysis Module
 |
 |
Response Dashboard

# Key Learning Outcomes

Through this project, the following concepts were implemented:

## Frontend Development

- Building reusable React components
- Managing frontend state
- API integration using Axios
- Responsive UI development
- Vite project setup

## Backend Development

- Creating REST APIs using FastAPI
- Handling API requests and responses
- Implementing CORS configuration
- Exception handling
- Data validation using Pydantic

## Web Scraping

- Extracting website HTML content
- Parsing data using BeautifulSoup
- Identifying website metadata
- Collecting SEO information

## Artificial Intelligence

- Integrating AI APIs
- Prompt-based content analysis
- Generating automated website insights
- Preparing architecture for RAG implementation

## Software Engineering

- Git version control
- Project documentation
- Environment variable management
- Full-stack application development

# Challenges Faced and Solutions

## CORS Communication Issue

Problem:
Frontend was unable to communicate with backend because of browser CORS restrictions.

Solution:
Configured FastAPI CORSMiddleware to allow frontend development ports.

---

## Website Scraping Restrictions

Problem:
Some websites block automated requests.

Solution:
Implemented User-Agent headers and request timeout handling.

---

## AI API Key Security

Problem:
API keys should not be exposed publicly.

Solution:
Used environment variables with Python Dotenv.

---

## Technology Detection Accuracy

Problem:
Different websites use different frameworks and libraries.

Solution:
Implemented keyword-based technology detection from HTML source and scripts.

# Security Considerations

The project follows basic security practices:

- API keys are stored using environment variables.
- Sensitive configuration files are excluded using .gitignore.
- User inputs are validated before processing.
- Backend exceptions are handled properly.
- External requests use timeout limits.

# Performance Considerations

The platform includes performance optimization techniques:

- Request timeout handling for website fetching.
- Limited content extraction to avoid unnecessary processing.
- Lightweight BeautifulSoup parsing.
- Efficient API communication between frontend and backend.

# Author

**M N Monisha**



# AI-Powered Website Intelligence Platform

An AI-powered full-stack web application that analyzes any website URL and provides intelligent insights using web scraping, Artificial Intelligence, and Retrieval-Augmented Generation (RAG).

The platform extracts website information, performs SEO analysis, detects technologies, generates AI-based reports, and allows users to ask questions about the analyzed website using a local Large Language Model.

This project demonstrates Full Stack Development, Web Scraping, AI Integration, Natural Language Processing, and RAG-based Question Answering.

---

# Project Overview

The AI Website Intelligence Platform allows users to enter any website URL and receive a complete analysis report.

The system:

- Extracts website content
- Generates AI-powered insights
- Performs SEO evaluation
- Detects website technologies
- Calculates website statistics
- Creates a searchable knowledge base
- Allows users to ask questions about the website using AI

The main objective is to build an intelligent website analysis system combining modern web technologies with Artificial Intelligence.

---

# Features

## Website Content Extraction

The platform extracts:

- Website Title
- Headings (H1, H2, H3)
- Paragraph Content
- Website Metadata
- Website Statistics

---

# AI Website Analysis

The AI module provides:

- Website Purpose
- Target Audience
- Main Topics
- Content Summary
- SEO Suggestions
- Improvement Recommendations

---

# RAG Based Question Answering

The platform supports AI-based conversations with the analyzed website.

Implementation:

- Text chunking using LangChain Text Splitters
- Semantic embeddings generation
- FAISS vector database storage
- Similarity-based document retrieval
- Local LLM response generation using Ollama

Users can ask:

```
What is this website about?

Who is the target audience?

What are the main topics?
```

The AI answers using only the extracted website content.

---

# SEO Analysis

The system evaluates:

- Meta Description
- H1 Tag Presence
- Image Count
- Images with ALT attributes
- SEO Score Calculation

---

# Technology Detection

The platform detects technologies used by websites.

Supported technologies:

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

# Website Statistics

The platform calculates:

- Total Word Count
- Paragraph Count
- Reading Time
- Extracted Content Length

---

# PDF Report Generation

The application generates downloadable website analysis reports containing:

- Website Title
- AI Analysis
- Website Insights

---

# Website Analysis History

The platform stores previous website analyses.

Stored information:

- Website URL
- Website Title
- AI Analysis
- SEO Score

Database:

- SQLite
- SQLAlchemy ORM

---

# Technology Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- JavaScript

## Backend

- Python
- FastAPI
- Uvicorn
- REST API

## Web Scraping

- BeautifulSoup4
- Requests

## Artificial Intelligence

Implemented:

- Ollama Llama 3.2
- LangChain
- FAISS Vector Database
- HuggingFace Sentence Transformers
- Retrieval-Augmented Generation (RAG)

---

# System Architecture

```
User
 |
 |
React Frontend
 |
 |
Axios API Request
 |
 |
FastAPI Backend
 |
 |
Website Scraper
 |
 |
Content Processing
 |
 |
AI Analysis Module
 |
 |
FAISS Vector Database
 |
 |
Ollama LLM
 |
 |
AI Response
```

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
│   │   │   ├── UrlForm.jsx
│   │   │   ├── QuestionBox.jsx
│   │   │   └── ResultCard.jsx
│   │
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── backend/
│
│   ├── main.py
│   ├── ai.py
│   ├── rag.py
│   ├── database.py
│   ├── requirements.txt
│   └── .env
│
├── README.md
└── .gitignore
```

---

# Installation and Setup

## Clone Repository

```
git clone <repository-url>
```

Navigate:

```
cd AI-Powered-Website-Intelligence-Platform
```

---

# Backend Setup

Navigate:

```
cd backend
```

Create virtual environment:

```
python -m venv venv
```

Activate:

Windows PowerShell:

```
.\venv\Scripts\Activate.ps1
```

Install dependencies:

```
pip install -r requirements.txt
```

---

# Run Backend

```
uvicorn main:app --reload
```

Backend runs:

```
http://127.0.0.1:8000
```

---

# Frontend Setup

Open another terminal.

Navigate:

```
cd frontend
```

Install packages:

```
npm install
```

Run:

```
npm run dev
```

Frontend runs:

```
http://localhost:5173
```

---

# API Endpoints

## Home

```
GET /
```

Checks backend status.

---

## Website Analysis

```
POST /scrape
```

Input:

```json
{
 "url":"https://example.com"
}
```

Returns:

- Website information
- AI analysis
- SEO details
- Technology detection
- Statistics

---

## Ask AI

```
POST /ask
```

Example:

```json
{
 "question":"What is this website about?"
}
```

Returns AI-generated answers from website data.

---

## Generate PDF

```
POST /generate-pdf
```

Creates website analysis report.

---

## History

```
GET /history
```

Returns previous website analyses.

---

# Development Journey

The project was developed step-by-step:

1. Created React application using Vite.
2. Designed frontend components.
3. Added Tailwind CSS styling.
4. Connected frontend and backend using Axios.
5. Built FastAPI REST APIs.
6. Implemented website scraping.
7. Added SEO analysis.
8. Added technology detection.
9. Integrated AI website analysis.
10. Implemented RAG pipeline.
11. Added FAISS vector search.
12. Integrated Ollama Llama 3.2 local model.
13. Added PDF report generation.
14. Added website analysis history storage.

---

# Challenges Faced

## CORS Communication

Problem:

Frontend requests were blocked by browsers.

Solution:

Configured FastAPI CORS middleware.

---

## Website Blocking

Problem:

Some websites restrict automated requests.

Solution:

Added User-Agent headers and timeout handling.

---

## AI Response Accuracy

Problem:

AI models may generate unrelated answers.

Solution:

Implemented RAG retrieval so answers are generated from website content.

---

## API Key Security

Problem:

Sensitive keys should not be exposed.

Solution:

Used environment variables and .gitignore.

---

# Learning Outcomes

## Frontend

- React component development
- State management
- API integration
- Responsive UI design

## Backend

- FastAPI development
- REST API creation
- Request validation
- Database integration

## AI

- Prompt engineering
- LangChain pipelines
- Vector databases
- Embeddings
- Local LLM integration

## Software Engineering

- Git workflow
- Project documentation
- Environment management
- Full-stack architecture

---

# Future Improvements

Possible enhancements:

- User authentication
- Cloud deployment
- Better SEO scoring
- Multiple website comparison
- Advanced AI agents
- More technology detection methods

---

# Author

**M N Monisha**

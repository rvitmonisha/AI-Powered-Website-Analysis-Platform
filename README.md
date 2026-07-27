# AI-Powered Website Intelligence Platform

An AI-powered full-stack web application that analyzes any website URL and provides intelligent insights using web scraping, Artificial Intelligence, and Retrieval-Augmented Generation (RAG).

The platform extracts website content, performs SEO analysis, detects technologies used in the website, generates AI-based insights, and allows users to ask questions about the analyzed website using an AI-powered question-answering system.

This project demonstrates Full Stack Development, Web Scraping, REST API Development, Artificial Intelligence, Natural Language Processing, and RAG implementation.

---

# Project Overview

The AI Website Intelligence Platform allows users to enter any website URL and receive a complete analysis report.

The application:

- Extracts website information
- Generates AI-powered website analysis
- Performs SEO evaluation
- Detects website technologies
- Calculates website statistics
- Creates a searchable knowledge base
- Provides AI question answering using website content

The objective of this project is to build an intelligent website analysis system by combining modern web technologies with Artificial Intelligence.

---

# Features

## Website Content Extraction

The platform extracts important information from websites:

- Website Title
- Headings (H1, H2, H3)
- Paragraph Content
- Website Metadata
- Website Statistics

---

# AI Website Analysis

The AI module analyzes website content and provides:

- Website Purpose
- Target Audience
- Main Topics
- Content Summary
- SEO Suggestions
- Improvement Recommendations

---

# RAG Based Question Answering

The platform supports asking questions about the analyzed website.

The RAG pipeline works using:

- Text splitting using LangChain
- Sentence embeddings generation
- FAISS vector database
- Similarity search
- Ollama Llama 3.2 Large Language Model

Example questions:

```
What is this website about?

Who is the target audience?

What are the main topics of this website?
```

The AI generates answers based only on the extracted website content.

---

# SEO Analysis

The system evaluates website SEO factors:

- Meta Description
- H1 Tag Presence
- Image Count
- Images with ALT Attributes
- SEO Score Calculation

---

# Technology Detection

The application detects technologies used by websites.

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

# Website Statistics

The platform calculates:

- Total Word Count
- Paragraph Count
- Estimated Reading Time
- Extracted Content Length

---

# Website Analysis History

The application stores previous website analyses.

Stored information:

- Website URL
- Website Title
- AI Generated Analysis
- SEO Score

Database used:

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
Content Extraction
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

Navigate into project:

```
cd AI-Powered-Website-Intelligence-Platform
```

---

# Backend Setup

Go to backend folder:

```
cd backend
```

Create virtual environment:

```
python -m venv venv
```

Activate environment:

Windows PowerShell:

```
.\venv\Scripts\Activate.ps1
```

Install dependencies:

```
pip install -r requirements.txt
```

---

# Environment Configuration

Create a `.env` file inside backend folder.

Add required API configuration:

```
OPENAI_API_KEY=your_api_key
```

Environment variables are used to protect sensitive information.

---

# Running Backend

Start FastAPI server:

```
uvicorn main:app --reload
```

Backend runs at:

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

Start React application:

```
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# API Endpoints

## Backend Status

```
GET /
```

Response:

```json
{
 "message":"Backend is running!"
}
```

---

## Website Analysis API

```
POST /scrape
```

Request:

```json
{
 "url":"https://example.com"
}
```

Returns:

- Website title
- Extracted content
- AI analysis
- SEO details
- Technologies detected
- Website statistics

---

## AI Question Answering API

```
POST /ask
```

Request:

```json
{
 "question":"What is this website about?"
}
```

Returns:

AI generated answer based on website content.

---

## Website History API

```
GET /history
```

Returns previously analyzed websites.

---

# Development Process

The project was developed through the following stages:

1. Created React application using Vite.
2. Designed frontend components.
3. Added Tailwind CSS styling.
4. Connected frontend and backend using Axios.
5. Developed FastAPI REST APIs.
6. Implemented website scraping using BeautifulSoup.
7. Added SEO analysis features.
8. Added technology stack detection.
9. Integrated AI website analysis.
10. Implemented RAG pipeline.
11. Added LangChain text processing.
12. Integrated FAISS vector database.
13. Connected Ollama Llama 3.2 for AI responses.
14. Added website analysis history storage.

---

# Challenges Faced and Solutions

## CORS Communication Issue

Problem:

Frontend requests were blocked due to browser security restrictions.

Solution:

Configured FastAPI CORSMiddleware to allow frontend communication.

---

## Website Scraping Restrictions

Problem:

Some websites block automated requests.

Solution:

Implemented User-Agent headers and request timeout handling.

---

## AI Response Accuracy

Problem:

AI models may generate unrelated answers.

Solution:

Implemented Retrieval-Augmented Generation (RAG) to provide context from website content.

---

## Data Storage

Problem:

Previous website analyses needed to be stored.

Solution:

Implemented SQLite database using SQLAlchemy ORM.

---

# Learning Outcomes

## Frontend Development

- React component development
- State management
- API integration using Axios
- Responsive UI design
- Vite setup

## Backend Development

- FastAPI REST API development
- Request validation using Pydantic
- CORS configuration
- Database integration

## Artificial Intelligence

- Prompt engineering
- LangChain workflow
- Text embeddings
- Vector databases
- Retrieval-Augmented Generation
- Local LLM integration

## Software Engineering

- Git version control
- Project documentation
- Environment variable management
- Full-stack application architecture

---

# Future Enhancements

Possible improvements:

- PDF report generation
- User authentication
- Cloud deployment
- Multiple website comparison
- Advanced SEO analysis
- Better technology detection
- AI agents for deeper website analysis

---

# Author

**M N Monisha**

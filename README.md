# AI-Powered Website Intelligence Platform

![Python](https://img.shields.io/badge/Python-3.10-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green)
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-Frontend-purple)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-UI-06B6D4)
![OpenAI](https://img.shields.io/badge/OpenAI-AI%20Integration-black)
![BeautifulSoup](https://img.shields.io/badge/BeautifulSoup-Web%20Scraping-yellow)
![Git](https://img.shields.io/badge/Git-Version%20Control-orange)

![GitHub stars](https://img.shields.io/github/stars/rvitmonisha/AI-Powered-Website-Analysis-Platform)
![GitHub forks](https://img.shields.io/github/forks/rvitmonisha/AI-Powered-Website-Analysis-Platform)
![GitHub license](https://img.shields.io/github/license/rvitmonisha/AI-Powered-Website-Analysis-Platform)


# AI-Powered Website Intelligence Platform

An AI-powered full-stack web application that analyzes any website URL and provides intelligent insights using web scraping, artificial intelligence, and SEO analysis.

The platform extracts website information, analyzes content using AI, detects technologies used in the website, evaluates SEO factors, and provides useful recommendations.

This project demonstrates Full Stack Development, REST API Development, Web Scraping, and AI Integration using React, FastAPI, and OpenAI technologies.

---

# Project Overview

The AI-Powered Website Intelligence Platform allows users to enter any website URL and receive detailed insights about the website.

The system automatically:

- Extracts website content
- Generates AI-based website analysis
- Detects technologies used
- Performs SEO evaluation
- Calculates website statistics
- Provides improvement recommendations

The objective of this project is to combine modern web development and artificial intelligence to build an automated website analysis tool.

---

# Features

## Website Content Extraction

The application extracts important website information:

- Website Title
- Headings (H1, H2, H3)
- Paragraph Content
- Website Text Data


## AI Website Analysis

The extracted website content is analyzed using AI to generate:

- Website Purpose
- Target Audience
- Main Topics
- SEO Suggestions
- Content Improvement Recommendations


## SEO Analysis

The platform performs basic SEO evaluation by checking:

- Meta Description
- H1 Tag Presence
- Number of Images
- Image ALT Attributes
- SEO Score Calculation


## Technology Detection

The system detects technologies used by websites based on HTML analysis.

Supported technologies:

- React
- Vue.js
- Angular
- Next.js
- Bootstrap
- Tailwind CSS
- WordPress
- Shopify
- jQuery
- Cloudflare


## Website Statistics

The application provides:

- Total Word Count
- Paragraph Count
- Estimated Reading Time
- Extracted Content Information


## AI Question Answering

The platform supports AI-based question answering over analyzed website content.

Users can ask questions like:

- What is this website about?
- Who is the target audience?
- What improvements are required?

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

- Requests
- BeautifulSoup4


## Artificial Intelligence

- OpenAI API
- LangChain
- FAISS
- HuggingFace Embeddings
- Ollama LLM


## Database

- SQLite
- SQLAlchemy


## Version Control

- Git
- GitHub


---

# Project Structure

```
AI-Powered-Website-Analysis-Platform/

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
│   │   │   ├── ResultCard.jsx
│   │   │   ├── QuestionBox.jsx
│   │   │   └── History.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
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

```bash
git clone https://github.com/rvitmonisha/AI-Powered-Website-Analysis-Platform.git
```

Navigate into project:

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

Install dependencies:

```bash
pip install -r requirements.txt
```

---

# Environment Configuration

Create a `.env` file inside the backend folder.

Add:

```env
OPENAI_API_KEY=your_api_key_here
```

The API key is stored securely using environment variables.

---

# Run Backend

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

Open another terminal.

Navigate to frontend:

```bash
cd frontend
```

Install packages:

```bash
npm install
```

Run React application:

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# API Endpoints

## Backend Status

### GET /

Response:

```json
{
 "message":"Backend is running!"
}
```


## Website Analysis

### POST /scrape

Request:

```json
{
 "url":"https://example.com"
}
```

Response includes:

- Website title
- Extracted content
- AI analysis
- Technology detection
- SEO information
- Website statistics


## AI Question Answering

### POST /ask

Request:

```json
{
 "question":"What is this website about?"
}
```

Response:

```json
{
 "answer":"AI generated response"
}
```

---

# System Architecture

```
User

   |

React Frontend

   |

Axios API Request

   |

FastAPI Backend

   |

Website Scraper

   |

BeautifulSoup Extraction

   |

AI Analysis Module

   |

Response Dashboard

```

---

# Development Workflow

The project was developed using the following steps:

1. Created React application using Vite.
2. Designed reusable React components.
3. Added Tailwind CSS styling.
4. Integrated Axios for API communication.
5. Developed FastAPI backend.
6. Implemented website scraping using BeautifulSoup.
7. Added SEO analysis features.
8. Added technology detection.
9. Integrated OpenAI API.
10. Implemented AI question answering.
11. Added SQLite database support.
12. Managed project using Git and GitHub.

---

---

# Screenshots

## Home Page

The main interface where users enter a website URL for analysis.

![Home Page](https://drive.google.com/file/d/14lfF0iYt1akcWSMYSTFo3to-GQWNi1kX/view?usp=drive_link)


## Website Analysis Result

Displays extracted website information, technologies detected, SEO details, and statistics.

![Analysis Result](https://drive.google.com/file/d/1K8_xi4meY3gfHgjv0zsDHvvdy_xLApTi/view?usp=drive_link)


## AI Website Analysis

AI-generated insights including website purpose, target audience, SEO suggestions, and improvements.

![AI Analysis](https://drive.google.com/file/d/1DkTBAVvw5Zl27aHWLjmfNWPjXegHaQbl/view?usp=drive_link)


## SEO Analysis

Shows SEO evaluation based on metadata, headings, images, and optimization factors.

![SEO Result](https://drive.google.com/file/d/1Dsmq9v6QShwJ2QGxLB0f5ZU-QmcpR1SY/view?usp=drive_link)

---

# Challenges Faced and Solutions

## CORS Communication Issue

Problem:

Frontend requests were blocked by browser CORS restrictions.

Solution:

Configured FastAPI CORSMiddleware to allow frontend communication.


## Website Blocking Requests

Problem:

Some websites restrict automated scraping.

Solution:

Implemented:

- User-Agent headers
- Request timeout handling


## AI API Key Security

Problem:

API keys should not be exposed publicly.

Solution:

Stored API keys using environment variables and `.env` files.


## Different Website Structures

Problem:

Websites have different HTML structures.

Solution:

Implemented flexible HTML parsing using BeautifulSoup.

---

# Key Learning Outcomes

## Frontend Development

- React component development
- API integration using Axios
- Responsive UI development
- Tailwind CSS


## Backend Development

- FastAPI REST API development
- Request handling
- Data validation
- CORS configuration


## Artificial Intelligence

- AI API integration
- Prompt engineering
- RAG architecture concepts
- Vector search concepts


## Web Scraping

- HTML parsing
- Website data extraction
- SEO information collection


## Software Engineering

- Git workflow
- Documentation
- Environment management

---

# Future Enhancements

Planned improvements:

- Advanced SEO scoring
- User authentication
- Cloud deployment
- Better technology detection
- More AI model support
- Improved RAG pipeline
- Export website analysis reports


---

# Project Objective

The objective of this project is to build an intelligent website analysis platform combining:

- Full Stack Development
- Artificial Intelligence
- Natural Language Processing
- Web Scraping
- REST API Development


This project demonstrates practical implementation of modern software engineering and AI technologies.

---

# Author

**M N Monisha**

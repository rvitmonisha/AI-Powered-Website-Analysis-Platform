from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import requests
from bs4 import BeautifulSoup

from ai import analyze_content
from rag import create_vector_store, search_answer


app = FastAPI()



app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5174",
        "http://localhost:5175",
        "http://127.0.0.1:5175",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



class WebsiteRequest(BaseModel):
    url: str



class QuestionRequest(BaseModel):
    question: str




@app.get("/")
def home():
    return {
        "message": "Backend is running!"
    }




@app.post("/scrape")
def scrape_website(request: WebsiteRequest):

    try:

        url = request.url.strip()


        if not url.startswith("http"):
            url = "https://" + url



        response = requests.get(
            url,
            timeout=15,
            headers={
                "User-Agent": "Mozilla/5.0"
            }
        )


        response.raise_for_status()



        html_lower = response.text.lower()


        soup = BeautifulSoup(
            response.text,
            "html.parser"
        )



        for tag in soup(
            [
                "script",
                "style",
                "noscript"
            ]
        ):
            tag.decompose()




        title = (
            soup.title.string.strip()
            if soup.title and soup.title.string
            else "No Title Found"
        )




        technologies = []


        tech_check = {

            "React": "react",
            "Vue.js": "vue",
            "Angular": "angular",
            "Bootstrap": "bootstrap",
            "Tailwind CSS": "tailwind",
            "WordPress": "wp-content",
            "jQuery": "jquery",
            "Shopify": "shopify",
            "Next.js": "_next",
            "Cloudflare": "cloudflare"

        }



        for tech, keyword in tech_check.items():

            if keyword in html_lower:
                technologies.append(tech)



        technologies = list(set(technologies))





        meta = soup.find(
            "meta",
            attrs={
                "name": "description"
            }
        )


        meta_description = (

            meta.get("content")

            if meta and meta.get("content")

            else "Not Found"

        )




        h1_count = len(
            soup.find_all("h1")
        )


        images = soup.find_all("img")


        total_images = len(images)


        images_with_alt = sum(
            1
            for img in images
            if img.get("alt")
        )





        paragraphs = [

            p.get_text(
                strip=True
            )

            for p in soup.find_all("p")

        ]



        content = "\n\n".join(
            paragraphs[:30]
        )



        headings = [

            h.get_text(
                strip=True
            )

            for h in soup.find_all(
                [
                    "h1",
                    "h2",
                    "h3"
                ]
            )

        ]





        word_count = len(
            content.split()
        )


        paragraph_count = len(
            paragraphs
        )


        reading_time = max(
            1,
            word_count // 200
        )





        seo_score = 0


        if title != "No Title Found":
            seo_score += 20


        if meta_description != "Not Found":
            seo_score += 20


        if h1_count > 0:
            seo_score += 20


        if total_images > 0:
            seo_score += 20


        if total_images > 0 and images_with_alt == total_images:
            seo_score += 20






        analysis = analyze_content(
            content
        )



        create_vector_store(
            content
        )





        return {

            "title": title,

            "url": url,

            "headings": headings,

            "content": content,

            "analysis": analysis,

            "technologies": technologies,


            "statistics": {

                "word_count": word_count,

                "paragraph_count": paragraph_count,

                "reading_time": reading_time

            },


            "seo": {

                "score": seo_score,

                "meta_description": meta_description,

                "h1_count": h1_count,

                "total_images": total_images,

                "images_with_alt": images_with_alt

            }

        }




    except requests.exceptions.RequestException as e:

        raise HTTPException(
            status_code=400,
            detail=f"Website error: {str(e)}"
        )



    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )







@app.post("/ask")
def ask_question(request: QuestionRequest):

    answer = search_answer(
        request.question
    )


    return {

        "answer": answer

    }
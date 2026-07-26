from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from ai import analyze_content

import requests
from bs4 import BeautifulSoup


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
            timeout=10,
            headers={
                "User-Agent": "Mozilla/5.0"
            }
        )

        response.raise_for_status()

        html = response.text.lower()

        soup = BeautifulSoup(
            response.text,
            "html.parser"
        )

        for tag in soup(["script", "style", "noscript"]):
            tag.extract()


        title = (
            soup.title.string.strip()
            if soup.title and soup.title.string
            else "No Title Found"
        )


        technologies = []

        checks = {
            "React": "react",
            "Vue.js": "vue",
            "Angular": "angular",
            "Bootstrap": "bootstrap",
            "Tailwind CSS": "tailwind",
            "WordPress": "wp-content",
            "jQuery": "jquery",
            "Shopify": "shopify",
            "Next.js": "_next",
            "Nuxt.js": "_nuxt",
            "Google Analytics": "gtag(",
            "Cloudflare": "cloudflare",
        }

        for tech, keyword in checks.items():
            if keyword in html:
                technologies.append(tech)

        technologies = list(set(technologies))


        meta_tag = soup.find(
            "meta",
            attrs={"name": "description"}
        )

        meta_description = (
            meta_tag.get("content").strip()
            if meta_tag and meta_tag.get("content")
            else "Not Found"
        )


        h1_count = len(soup.find_all("h1"))

        images = soup.find_all("img")

        total_images = len(images)

        images_with_alt = sum(
            1
            for img in images
            if img.get("alt") and img.get("alt").strip()
        )


        links = soup.find_all("a", href=True)

        internal_links = 0
        external_links = 0

        for link in links:

            href = link["href"]

            if href.startswith("/") or url in href:
                internal_links += 1

            elif href.startswith("http"):
                external_links += 1


        headings = [
            h.get_text(strip=True)
            for h in soup.find_all(
                ["h1", "h2", "h3"]
            )
        ]


        paragraphs = [
            p.get_text(strip=True)
            for p in soup.find_all("p")
        ]


        content = "\n\n".join(paragraphs[:10])

        word_count = len(content.split())

        reading_time = max(1, word_count // 200)

        paragraph_count = len(paragraphs)


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


        analysis = analyze_content(content)


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
                "images_with_alt": images_with_alt,
                "internal_links": internal_links,
                "external_links": external_links
            }
        }


    except requests.exceptions.RequestException as e:

        raise HTTPException(
            status_code=400,
            detail=f"Website cannot be accessed: {str(e)}"
        )


    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )
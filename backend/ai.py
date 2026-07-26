from ollama import chat


def analyze_content(content):
    try:
        response = chat(
            model="llama3.2",
            messages=[
                {
                    "role": "system",
                    "content": (
                        "You are an AI Website Intelligence Assistant. "
                        "Analyze website content and provide clear, professional insights."
                    ),
                },
                {
                    "role": "user",
                    "content": f"""
Analyze the following website content:

{content}

Please provide:

1. Website Purpose
2. Target Audience
3. Main Topics
4. SEO Suggestions
5. Content Improvements

Format the response using headings and bullet points.
""",
                },
            ],
        )

        return response.message.content

    except Exception as e:
        return f"AI analysis failed: {str(e)}"
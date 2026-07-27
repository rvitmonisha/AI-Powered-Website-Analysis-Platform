from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_ollama import OllamaLLM


vector_store = None



def create_vector_store(content):

    global vector_store


    splitter = RecursiveCharacterTextSplitter(

        chunk_size=800,

        chunk_overlap=150

    )


    chunks = splitter.split_text(content)



    embeddings = HuggingFaceEmbeddings(

        model_name="sentence-transformers/all-MiniLM-L6-v2"

    )



    vector_store = FAISS.from_texts(

        chunks,

        embeddings

    )


    return vector_store





def search_answer(question):

    global vector_store



    if vector_store is None:

        return "Please analyze a website first."



    # Retrieve more relevant chunks

    docs = vector_store.similarity_search(

        question,

        k=5

    )



    context = "\n\n".join(

        [

            doc.page_content

            for doc in docs

        ]

    )





    llm = OllamaLLM(

        model="llama3.2"

    )





    prompt = f"""

You are an expert website analyst.

Answer the user's question based ONLY on the website content.

Website Content:

{context}


Question:

{question}


Rules:
- Give a clear explanation.
- Use bullet points when useful.
- Do not invent information.
- If information is missing, say it is not available.


Answer:

"""



    response = llm.invoke(prompt)



    return response
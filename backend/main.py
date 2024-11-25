from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.cors import CORSMiddleware
from elasticsearch import Elasticsearch
from sentence_transformers import SentenceTransformer
from utils.models import SearchQuery, search_query 
from utils.config import ES_URL, API_KEY, LOAD_PATH
import sys

# Initialize Elasticsearch client
client = Elasticsearch(ES_URL, api_key=API_KEY)

# Check connection to Elasticsearch
if client.ping():
    print('Connected to ES!')
else:
    print('Could not connect to Elasticsearch!')
    sys.exit()

# Load the model
model = SentenceTransformer(LOAD_PATH)

# defining app instance
app = FastAPI()

origins = [
    "http://localhost:5173",  # Frontend origin
    "http://127.0.0.1:5173",  # Alternative frontend origin
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/search")
async def search(query: SearchQuery):
    results = search_query(client, query.query, model)
    return {"results": results}

@app.get("/")
async def main():
    return {"message": "Server Started"}
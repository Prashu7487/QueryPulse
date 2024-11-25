from pydantic import BaseModel
from elasticsearch import Elasticsearch
from sentence_transformers import SentenceTransformer
from typing import List
from utils.config import INDEX_NAME

class SearchQuery(BaseModel):
    query: str

def search_query(client: Elasticsearch, query: str, model: SentenceTransformer, top_k: int = 100, semantic: bool = True) -> List[dict]:
    """
    Search for a query in Elasticsearch and return ranked results.

    Args:
        client: Elasticsearch client.
        query: The search query string.
        model: SentenceTransformer model for generating query embeddings.
        top_k: Number of top results to return.
        semantic: If True, performs semantic search using embeddings; otherwise, uses text search.

    Returns:
        List of ranked results (title and score).
    """
    if semantic:
        query_vector = model.encode(query).tolist()

        search_body = {
            "size": top_k,
            "query": {
                "script_score": {
                    "query": {"match_all": {}},
                    "script": {
                        "source": "cosineSimilarity(params.query_vector, 'title_vector') + 1.0",
                        "params": {"query_vector": query_vector}
                    }
                }
            }
        }
    else:
        search_body = {
            "size": top_k,
            "query": {
                "match": {
                    "title": query
                }
            }
        }

    # Perform the search query on Elasticsearch
    response = client.search(index=INDEX_NAME, body=search_body)

    # Extract and return the results
    results = [
        {"title": hit["_source"]["title"], "score": hit["_score"]}
        for hit in response["hits"]["hits"]
    ]
    return results
